'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

const CHARS = '!<>-_\\/[]{}—=+*^?#________';

interface TextScrambleProps {
  text: string;
  className?: string;
  trigger?: 'hover' | 'reveal' | 'both';
  speed?: number;
  as?: 'span' | 'div' | 'h2' | 'h3' | 'p';
}

export function TextScramble({
  text,
  className = '',
  trigger = 'both',
  speed = 30,
  as: Tag = 'span',
}: TextScrambleProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isScrambling, setIsScrambling] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const hasRevealed = useRef(false);
  const frameRef = useRef<number>(0);

  const scramble = useCallback(() => {
    if (isScrambling) return;
    setIsScrambling(true);

    let iteration = 0;
    const maxIterations = text.length;

    const animate = () => {
      setDisplayText(
        text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < iteration) return text[index];
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join('')
      );

      iteration += 1 / 3;

      if (iteration < maxIterations) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        setDisplayText(text);
        setIsScrambling(false);
      }
    };

    frameRef.current = requestAnimationFrame(animate);
  }, [text, isScrambling, speed]);

  useEffect(() => {
    if (isInView && !hasRevealed.current && (trigger === 'reveal' || trigger === 'both')) {
      hasRevealed.current = true;
      scramble();
    }
  }, [isInView, trigger, scramble]);

  useEffect(() => {
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  const handleHover = () => {
    if (trigger === 'hover' || trigger === 'both') {
      scramble();
    }
  };

  return (
    <Tag
      ref={ref as any}
      className={className}
      onMouseEnter={handleHover}
      style={{ cursor: trigger !== 'reveal' ? 'pointer' : undefined }}
    >
      {displayText}
    </Tag>
  );
}
