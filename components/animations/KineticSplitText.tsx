'use client';

import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import SplitText from 'gsap/SplitText'; // if your setup complains, use GSAP Install Helper to add the plugin

gsap.registerPlugin(SplitText);

type Props = {
  text: string;
  className?: string;
  // how wild the movement is
  strength?: number; // px
  // seconds for out+back (half-cycle)
  speed?: number;
};

export function KineticSplitText({
  text,
  className,
  strength = 28,
  speed = 0.9,
}: Props) {
  const elRef = useRef<HTMLHeadingElement | null>(null);

  useLayoutEffect(() => {
    const el = elRef.current;
    if (!el) return;

    const prefersReduced =
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      const split = SplitText.create(el, { type: 'chars' }); // chars array available :contentReference[oaicite:2]{index=2}
      const chars = split.chars as HTMLElement[];

      gsap.set(el, { perspective: 800 });
      gsap.set(chars, { transformOrigin: '50% 50%', force3D: true });

      if (prefersReduced) return;

      // This is the “samples & return” loop:
      gsap.to(chars, {
        // “explode” away from resting position
        x: () => gsap.utils.random(-strength, strength),
        y: () => gsap.utils.random(-strength, strength),
        rotate: () => gsap.utils.random(-16, 16),
        scale: () => gsap.utils.random(0.92, 1.08),
        filter: 'blur(1.5px)',
        duration: speed,
        ease: 'power3.inOut',

        // return (yoyo) + new random values each cycle (repeatRefresh)
        yoyo: true,
        repeat: 3,
        repeatRefresh: true,

        // GSAP-site feel: stagger from random chars, not left-to-right
        stagger: { each: 0.015, from: 'random' },
      });

      return () => split.revert();
    }, el);

    return () => ctx.revert();
  }, [strength, speed]);

  return (
    <h1 ref={elRef} className={className}>
      {text}
    </h1>
  );
}
