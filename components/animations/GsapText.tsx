'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrambleTextProps {
  children: string;
  delay?: number;
  className?: string;
  duration?: number;
}

export function ScrambleText({
  children,
  delay = 0,
  className = '',
  duration = 1
}: ScrambleTextProps) {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const chars = '!<>-_\\/[]{}—=+*^?#________';
    const text = children;
    let iteration = 0;

    const scrambleInterval = setInterval(() => {
      if (!textRef.current) return;

      textRef.current.innerText = text
        .split('')
        .map((char, index) => {
          if (index < iteration) {
            return text[index];
          }
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join('');

      if (iteration >= text.length) {
        clearInterval(scrambleInterval);
      }

      iteration += 1 / 3;
    }, 50);

    const timer = setTimeout(() => {
      clearInterval(scrambleInterval);
      if (textRef.current) {
        textRef.current.innerText = text;
      }
    }, duration * 1000 + delay);

    return () => {
      clearInterval(scrambleInterval);
      clearTimeout(timer);
    };
  }, [children, delay, duration]);

  return <div ref={textRef} className={className} style={{ maxWidth: '100%', wordBreak: 'break-word' }}>{children}</div>;
}

interface GsapRevealTextProps {
  children: string;
  delay?: number;
  className?: string;
  stagger?: number;
}

export function GsapRevealText({
  children,
  delay = 0,
  className = '',
  stagger = 0.03
}: GsapRevealTextProps) {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const chars = textRef.current.querySelectorAll('.char');

    gsap.fromTo(
      chars,
      {
        opacity: 0,
        y: 100,
        rotationX: -90,
      },
      {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: 1.2,
        delay: delay,
        stagger: stagger,
        ease: 'power4.out',
      }
    );
  }, [delay, stagger]);

  return (
    <div ref={textRef} className={`${className} flex flex-wrap justify-center`} style={{ perspective: '1000px', maxWidth: '100%' }}>
      {children.split('').map((char, index) => (
        <span
          key={index}
          className="char inline-block"
          style={{ transformOrigin: '0% 50% -50px' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </div>
  );
}

interface FloatingWordsProps {
  words: string[];
  className?: string;
  duration?: number;
}

export function FloatingWords({
  words,
  className = '',
  duration = 3
}: FloatingWordsProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const wordElements = containerRef.current.querySelectorAll('.word');

    gsap.fromTo(
      wordElements,
      {
        opacity: 0,
        scale: 0,
        rotation: -180,
      },
      {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 1.5,
        stagger: {
          amount: 1.5,
          from: 'random',
        },
        ease: 'elastic.out(1, 0.5)',
      }
    );

    // Continuous floating animation
    wordElements.forEach((word, index) => {
      gsap.to(word, {
        y: -10 + Math.random() * 20,
        duration: 2 + Math.random() * 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: index * 0.2,
      });
    });
  }, [words]);

  return (
    <div ref={containerRef} className={`${className} flex flex-wrap justify-center`} style={{ maxWidth: '100%' }}>
      {words.map((word, index) => (
        <span
          key={index}
          className="word inline-block mx-2"
        >
          {word}
        </span>
      ))}
    </div>
  );
}

interface TypewriterGsapProps {
  text: string;
  delay?: number;
  className?: string;
  speed?: number;
  cursor?: boolean;
}

export function TypewriterGsap({
  text,
  delay = 0,
  className = '',
  speed = 0.05,
  cursor = true
}: TypewriterGsapProps) {
  const textRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const tl = gsap.timeline({ delay });

    tl.from(textRef.current, {
      width: 0,
      duration: text.length * speed,
      ease: 'steps(' + text.length + ')',
    });

    if (cursor && cursorRef.current) {
      gsap.to(cursorRef.current, {
        opacity: 0,
        duration: 0.5,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut',
      });
    }
  }, [text, delay, speed, cursor]);

  return (
    <div className="flex items-center justify-center max-w-full overflow-hidden">
      <div
        ref={textRef}
        className={`overflow-hidden whitespace-nowrap ${className}`}
        style={{ maxWidth: '100%' }}
      >
        {text}
      </div>
      {cursor && (
        <span
          ref={cursorRef}
          className="inline-block w-0.5 h-[1em] bg-[var(--accent)] ml-1 flex-shrink-0"
        />
      )}
    </div>
  );
}

interface GlitchTextProps {
  children: string;
  className?: string;
}

export function GlitchText({ children, className = '' }: GlitchTextProps) {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const text = textRef.current;
    const originalText = children;

    const glitch = () => {
      const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
      const iterations = 10;
      let currentIteration = 0;

      const glitchInterval = setInterval(() => {
        text.innerText = originalText
          .split('')
          .map((char, index) => {
            if (Math.random() > 0.5 && currentIteration < iterations) {
              return glitchChars[Math.floor(Math.random() * glitchChars.length)];
            }
            return char;
          })
          .join('');

        currentIteration++;

        if (currentIteration >= iterations) {
          clearInterval(glitchInterval);
          text.innerText = originalText;
        }
      }, 50);
    };

    // Trigger glitch effect periodically
    const glitchTimer = setInterval(glitch, 4000);

    // Initial glitch
    setTimeout(glitch, 1000);

    return () => {
      clearInterval(glitchTimer);
    };
  }, [children]);

  return <div ref={textRef} className={className}>{children}</div>;
}

interface SplitRevealProps {
  children: string;
  delay?: number;
  className?: string;
}

export function SplitReveal({ children, delay = 0, className = '' }: SplitRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const words = containerRef.current.querySelectorAll('.word-reveal');

    gsap.fromTo(
      words,
      {
        y: 100,
        opacity: 0,
        rotateX: -90,
      },
      {
        y: 0,
        opacity: 1,
        rotateX: 0,
        duration: 0.8,
        delay: delay,
        stagger: 0.1,
        ease: 'back.out(1.7)',
      }
    );
  }, [delay]);

  return (
    <div ref={containerRef} className={className} style={{ perspective: '1000px' }}>
      {children.split(' ').map((word, index) => (
        <span
          key={index}
          className="word-reveal inline-block mr-2"
          style={{ transformOrigin: '50% 100%' }}
        >
          {word}
        </span>
      ))}
    </div>
  );
}

interface MagneticTextProps {
  children: string;
  className?: string;
}

export function MagneticText({ children, className = '' }: MagneticTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const chars = containerRef.current.querySelectorAll('.magnetic-char');

    chars.forEach((char) => {
      char.addEventListener('mouseenter', () => {
        gsap.to(char, {
          scale: 1.5,
          color: 'var(--accent)',
          duration: 0.3,
          ease: 'elastic.out(1, 0.3)',
        });
      });

      char.addEventListener('mouseleave', () => {
        gsap.to(char, {
          scale: 1,
          color: 'inherit',
          duration: 0.3,
        });
      });
    });
  }, []);

  return (
    <div ref={containerRef} className={className}>
      {children.split('').map((char, index) => (
        <span
          key={index}
          className="magnetic-char inline-block cursor-pointer"
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </div>
  );
}
