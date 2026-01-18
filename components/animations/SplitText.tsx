'use client';

import { motion, useInView, Variants } from 'framer-motion';
import { useRef } from 'react';

type AnimationVariant = 'default' | 'wave' | 'bounce' | 'fade';
type SplitMode = 'words' | 'characters';

interface SplitTextProps {
  children: string;
  delay?: number;
  className?: string;
  variant?: AnimationVariant;
  splitMode?: SplitMode;
  staggerDuration?: number;
}

const getChildVariants = (variant: AnimationVariant): Variants => {
  switch (variant) {
    case 'wave':
      return {
        hidden: {
          opacity: 0,
          y: 50,
          rotateX: -90,
        },
        visible: {
          opacity: 1,
          y: 0,
          rotateX: 0,
          transition: {
            type: 'spring',
            damping: 15,
            stiffness: 150,
          },
        },
      };
    case 'bounce':
      return {
        hidden: {
          opacity: 0,
          scale: 0,
          y: 100,
        },
        visible: {
          opacity: 1,
          scale: 1,
          y: 0,
          transition: {
            type: 'spring',
            damping: 10,
            stiffness: 200,
          },
        },
      };
    case 'fade':
      return {
        hidden: {
          opacity: 0,
        },
        visible: {
          opacity: 1,
          transition: {
            duration: 0.3,
          },
        },
      };
    default:
      return {
        hidden: {
          opacity: 0,
          y: 20,
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            type: 'spring',
            damping: 12,
            stiffness: 100,
          },
        },
      };
  }
};

export function SplitText({
  children,
  delay = 0,
  className = '',
  variant = 'default',
  splitMode = 'characters',
  staggerDuration = 0.03,
}: SplitTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDuration,
        delayChildren: delay,
      },
    },
  };

  const childVariants = getChildVariants(variant);

  const words = children.split(' ');

  if (splitMode === 'words') {
    return (
      <motion.div
        ref={ref}
        variants={container}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className={className}
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            variants={childVariants}
            style={{ display: 'inline-block', marginRight: '0.25em' }}
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={className}
      style={{ perspective: variant === 'wave' ? 1000 : undefined }}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} style={{ display: 'inline-block', marginRight: '0.25em' }}>
          {word.split('').map((char, charIndex) => (
            <motion.span
              key={charIndex}
              variants={childVariants}
              style={{
                display: 'inline-block',
                transformOrigin: variant === 'wave' ? 'center bottom' : undefined,
              }}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.div>
  );
}

// Typewriter effect
interface TypewriterProps {
  children: string;
  delay?: number;
  className?: string;
  speed?: number;
  cursor?: boolean;
}

export function Typewriter({
  children,
  delay = 0,
  className = '',
  speed = 50,
  cursor = true,
}: TypewriterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const characters = children.split('');

  return (
    <span ref={ref} className={className}>
      {characters.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{
            duration: 0.05,
            delay: delay + index * (speed / 1000),
          }}
        >
          {char}
        </motion.span>
      ))}
      {cursor && (
        <motion.span
          className="inline-block ml-1 w-0.5 h-[1em] bg-[var(--accent)]"
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
        />
      )}
    </span>
  );
}

// Gradient text reveal
interface GradientRevealProps {
  children: string;
  delay?: number;
  className?: string;
}

export function GradientReveal({
  children,
  delay = 0,
  className = '',
}: GradientRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.span
      ref={ref}
      className={`inline-block ${className}`}
      initial={{ backgroundSize: '0% 100%' }}
      animate={isInView ? { backgroundSize: '100% 100%' } : { backgroundSize: '0% 100%' }}
      transition={{ duration: 1, delay, ease: 'easeOut' }}
      style={{
        backgroundImage: 'linear-gradient(90deg, var(--accent), var(--accent-secondary))',
        backgroundRepeat: 'no-repeat',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        color: 'transparent',
      }}
    >
      {children}
    </motion.span>
  );
}
