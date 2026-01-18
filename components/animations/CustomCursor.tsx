'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

type CursorMode = 'default' | 'hover' | 'text' | 'blob';

interface CursorState {
  x: number;
  y: number;
  mode: CursorMode;
  hoverTarget: DOMRect | null;
  sectionColor: string;
}

export function CustomCursor() {
  const [cursorState, setCursorState] = useState<CursorState>({
    x: 0,
    y: 0,
    mode: 'default',
    hoverTarget: null,
    sectionColor: 'var(--accent)',
  });

  // Smooth spring values for cursor position
  const springConfig = { stiffness: 500, damping: 28, mass: 0.5 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  // Dot cursor (faster response)
  const dotSpringConfig = { stiffness: 1000, damping: 35, mass: 0.3 };
  const dotX = useSpring(0, dotSpringConfig);
  const dotY = useSpring(0, dotSpringConfig);

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      dotX.set(e.clientX);
      dotY.set(e.clientY);

      setCursorState(prev => ({
        ...prev,
        x: e.clientX,
        y: e.clientY,
      }));

      // Check which section we're in
      const sections = ['about', 'journey', 'work', 'skills', 'contact'];
      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (e.clientY >= rect.top && e.clientY <= rect.bottom) {
            const colors: Record<string, string> = {
              about: 'var(--accent)',
              journey: 'var(--accent-secondary)',
              work: 'var(--accent-tertiary)',
              skills: 'var(--accent)',
              contact: 'var(--accent-secondary)',
            };
            setCursorState(prev => ({
              ...prev,
              sectionColor: colors[sectionId] || 'var(--accent)',
            }));
            break;
          }
        }
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      // Check for blob mode trigger
      if (target.hasAttribute('data-cursor-blob') || target.closest('[data-cursor-blob]')) {
        const blobTarget = target.hasAttribute('data-cursor-blob')
          ? target
          : target.closest('[data-cursor-blob]');
        if (blobTarget) {
          setCursorState(prev => ({
            ...prev,
            mode: 'blob',
            hoverTarget: blobTarget.getBoundingClientRect(),
          }));
          return;
        }
      }

      // Check for text mode
      if (target.hasAttribute('data-cursor-text') || target.closest('[data-cursor-text]')) {
        setCursorState(prev => ({
          ...prev,
          mode: 'text',
          hoverTarget: null,
        }));
        return;
      }

      // Check for interactive elements
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.hasAttribute('data-cursor-hover') ||
        target.closest('[data-cursor-hover]')
      ) {
        setCursorState(prev => ({
          ...prev,
          mode: 'hover',
          hoverTarget: null,
        }));
        return;
      }

      setCursorState(prev => ({
        ...prev,
        mode: 'default',
        hoverTarget: null,
      }));
    };

    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY, dotX, dotY]);

  const getCursorSize = () => {
    switch (cursorState.mode) {
      case 'hover':
        return { width: 48, height: 48 };
      case 'text':
        return { width: 80, height: 80 };
      case 'blob':
        if (cursorState.hoverTarget) {
          return {
            width: cursorState.hoverTarget.width + 20,
            height: cursorState.hoverTarget.height + 20,
          };
        }
        return { width: 24, height: 24 };
      default:
        return { width: 24, height: 24 };
    }
  };

  const getCursorOffset = () => {
    const size = getCursorSize();
    if (cursorState.mode === 'blob' && cursorState.hoverTarget) {
      return {
        x: cursorState.hoverTarget.left + cursorState.hoverTarget.width / 2 - size.width / 2,
        y: cursorState.hoverTarget.top + cursorState.hoverTarget.height / 2 - size.height / 2,
      };
    }
    return {
      x: cursorState.x - size.width / 2,
      y: cursorState.y - size.height / 2,
    };
  };

  const cursorSize = getCursorSize();
  const cursorOffset = getCursorOffset();

  return (
    <>
      {/* Main cursor ring */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-50 hidden lg:block"
        style={{
          mixBlendMode: cursorState.mode === 'blob' ? 'normal' : 'difference',
        }}
        animate={{
          x: cursorState.mode === 'blob' ? cursorOffset.x : cursorState.x - cursorSize.width / 2,
          y: cursorState.mode === 'blob' ? cursorOffset.y : cursorState.y - cursorSize.height / 2,
          width: cursorSize.width,
          height: cursorSize.height,
          borderRadius: cursorState.mode === 'blob' ? '16px' : '50%',
        }}
        transition={{
          type: 'spring',
          stiffness: cursorState.mode === 'blob' ? 300 : 500,
          damping: cursorState.mode === 'blob' ? 20 : 28,
          mass: 0.5,
        }}
      >
        <div
          className={`w-full h-full rounded-full transition-colors duration-200 ${
            cursorState.mode === 'blob'
              ? 'bg-[var(--accent)]/10 border border-[var(--accent)]/30'
              : 'border-2 border-white'
          }`}
          style={{
            borderRadius: cursorState.mode === 'blob' ? '16px' : '50%',
          }}
        />
      </motion.div>

      {/* Center dot */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-50 mix-blend-difference hidden lg:block"
        animate={{
          x: cursorState.x - 4,
          y: cursorState.y - 4,
          opacity: cursorState.mode === 'blob' ? 0 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 1000,
          damping: 35,
          mass: 0.3,
        }}
      >
        <div className="h-2 w-2 rounded-full bg-white" />
      </motion.div>

      {/* Trailing particles effect for hover state */}
      {cursorState.mode === 'hover' && (
        <motion.div
          className="pointer-events-none fixed left-0 top-0 z-40 hidden lg:block"
          animate={{
            x: cursorState.x - 32,
            y: cursorState.y - 32,
          }}
          transition={{
            type: 'spring',
            stiffness: 200,
            damping: 20,
          }}
        >
          <div
            className="w-16 h-16 rounded-full blur-xl"
            style={{
              background: `radial-gradient(circle, ${cursorState.sectionColor} 0%, transparent 70%)`,
              opacity: 0.3,
            }}
          />
        </motion.div>
      )}
    </>
  );
}
