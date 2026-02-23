'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useVelocity } from 'framer-motion';

interface ScrollMarqueeProps {
  items?: string[];
  baseVelocity?: number;
}

const defaultItems = [
  'Node.js', 'Java', 'Quarkus', 'React', 'TypeScript', 'Docker',
  'PostgreSQL', 'NestJS', 'Spring Boot', 'Next.js', 'Redis', 'Flutter',
];

export function ScrollMarquee({ items = defaultItems, baseVelocity = 20 }: ScrollMarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], { clamp: false });

  const repeated = [...items, ...items, ...items, ...items];
  const separator = ' \u2014 ';

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden py-8 bg-[var(--bg)]"
    >
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[var(--bg)] to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[var(--bg)] to-transparent z-10" />

      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: [0, -2400] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 60 / (baseVelocity / 20),
            ease: 'linear',
          },
        }}
      >
        <span className="text-4xl md:text-6xl font-mono font-bold text-[var(--accent)]/[0.08] select-none">
          {repeated.map((item, i) => (
            <span key={i}>
              {item}
              {i < repeated.length - 1 ? separator : ''}
            </span>
          ))}
        </span>
      </motion.div>
    </div>
  );
}
