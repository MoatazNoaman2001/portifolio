'use client';

import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDown } from 'lucide-react';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { KineticSplitText } from '../animations/KineticSplitText';

gsap.registerPlugin(ScrollTrigger);

// --- tiny helper: wrap words into spans for staggered reveal ---
function splitWords(el: HTMLElement) {
  const original = el.textContent ?? '';
  const words = original.trim().split(/\s+/);

  el.innerHTML = words
    .map(
      (w) =>
        `<span class="inline-block overflow-hidden align-baseline">
           <span class="inline-block will-change-transform">${w}&nbsp;</span>
         </span>`
    )
    .join('');

  return () => {
    el.textContent = original;
  };
}

export function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const orbARef = useRef<HTMLDivElement | null>(null);
  const orbBRef = useRef<HTMLDivElement | null>(null);

  const badgeRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const subtitleRef = useRef<HTMLParagraphElement | null>(null);
  const stackRef = useRef<HTMLDivElement | null>(null);
  const descRef = useRef<HTMLParagraphElement | null>(null);
  const ctasRef = useRef<HTMLDivElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Split heading + subtitle for GSAP-like reveal
    const cleanupHeading = headingRef.current ? splitWords(headingRef.current) : () => { };
    const cleanupSubtitle = subtitleRef.current ? splitWords(subtitleRef.current) : () => { };

    const ctx = gsap.context(() => {
      // Initial state
      gsap.set(
        [badgeRef.current, stackRef.current, descRef.current, ctasRef.current, scrollRef.current],
        { opacity: 0, y: 16 }
      );

      if (headingRef.current) {
        const inner = headingRef.current.querySelectorAll('span > span');
        gsap.set(inner, { yPercent: 120, opacity: 0, filter: 'blur(6px)' });
      }

      if (subtitleRef.current) {
        const inner = subtitleRef.current.querySelectorAll('span > span');
        gsap.set(inner, { yPercent: 120, opacity: 0, filter: 'blur(8px)' });
      }

      // Ambient orb drift (GSAP instead of framer so it “matches”)
      if (!prefersReduced) {
        if (orbARef.current) {
          gsap.to(orbARef.current, {
            x: 40,
            y: -30,
            duration: 6,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
          });
          gsap.to(orbARef.current, {
            scale: 1.15,
            duration: 7.5,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
          });
        }
        if (orbBRef.current) {
          gsap.to(orbBRef.current, {
            x: -35,
            y: 35,
            duration: 7,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
          });
          gsap.to(orbBRef.current, {
            scale: 0.92,
            duration: 8,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
          });
        }
      }

      // Master timeline (the “GSAP site” feel)
      const tl = gsap.timeline({
        defaults: { ease: 'power4.out' },
      });

      tl.to(badgeRef.current, { opacity: 1, y: 0, duration: 0.6 }, 0.1);

      if (headingRef.current) {
        tl.to(
          headingRef.current.querySelectorAll('span > span'),
          {
            yPercent: 0,
            opacity: 1,
            filter: 'blur(0px)',
            duration: 0.9,
            stagger: 0.06,
          },
          0.15
        );
      }

      if (subtitleRef.current) {
        tl.to(
          subtitleRef.current.querySelectorAll('span > span'),
          {
            yPercent: 0,
            opacity: 1,
            filter: 'blur(0px)',
            duration: 0.75,
            stagger: 0.03,
            ease: 'power3.out',
          },
          0.45
        );
      }

      tl.to(stackRef.current, { opacity: 1, y: 0, duration: 0.55 }, 0.75);
      tl.to(descRef.current, { opacity: 1, y: 0, duration: 0.55 }, 0.9);
      tl.to(ctasRef.current, { opacity: 1, y: 0, duration: 0.55 }, 1.05);
      tl.to(scrollRef.current, { opacity: 1, y: 0, duration: 0.5 }, 1.25);

      // Scroll indicator bob (subtle)
      if (!prefersReduced && scrollRef.current) {
        gsap.to(scrollRef.current, {
          y: 10,
          duration: 1.6,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: 1.4,
        });
      }

      // Parallax on mouse move (micro interaction)
      if (!prefersReduced) {
        const orbA = orbARef.current;
        const orbB = orbBRef.current;

        const qa = orbA ? gsap.quickTo(orbA, 'x', { duration: 0.6, ease: 'power3.out' }) : null;
        const qay = orbA ? gsap.quickTo(orbA, 'y', { duration: 0.6, ease: 'power3.out' }) : null;
        const qb = orbB ? gsap.quickTo(orbB, 'x', { duration: 0.8, ease: 'power3.out' }) : null;
        const qby = orbB ? gsap.quickTo(orbB, 'y', { duration: 0.8, ease: 'power3.out' }) : null;

        const onMove = (e: PointerEvent) => {
          const r = section.getBoundingClientRect();
          const nx = (e.clientX - (r.left + r.width / 2)) / r.width; // -0.5..0.5
          const ny = (e.clientY - (r.top + r.height / 2)) / r.height;

          qa?.(nx * 60);
          qay?.(ny * 40);

          qb?.(nx * -50);
          qby?.(ny * -35);
        };

        section.addEventListener('pointermove', onMove);
        return () => section.removeEventListener('pointermove', onMove);
      }
    }, section);

    return () => {
      ctx.revert();
      cleanupHeading();
      cleanupSubtitle();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-x-hidden overflow-y-hidden noise-bg grid-bg bg-[var(--bg)] w-full"
    >
      {/* Gradient Orbs */}
      <div
        ref={orbARef}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--accent)]/20 rounded-full blur-3xl will-change-transform"
      />
      <div
        ref={orbBRef}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--accent-secondary)]/20 rounded-full blur-3xl will-change-transform"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center w-full">
        {/* Status Badge */}
        <div
          ref={badgeRef}
          className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--surface)]/50 border border-[var(--border)] rounded-full mb-8 backdrop-blur-sm"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[var(--accent)]"></span>
          </span>
          <span className="text-sm text-[var(--muted)]">Available for freelance</span>
        </div>

        {/* Heading */}
        <div className="mb-6 w-full overflow-hidden">
          <KineticSplitText
  text="Full-Stack Engineer"
  className="text-3xl sm:text-2xl md:text-7xl lg:text-8xl font-display font-bold leading-tight text-[var(--text)]"
  strength={34}
  speed={1.1}
/>
        </div>

        {/* Subtitle */}
        <KineticSplitText
  text="Open-Source Developer | Backend Specialist"
  className="mt-4 text-xl sm:text-2xl md:text-4xl lg:text-5xl font-display font-bold gradient-text break-words"
  strength={18}
  speed={1.3}
/>

        {/* Tech stack line */}
        <div ref={stackRef} className="mb-8">
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-lg md:text-xl text-[var(--accent)] font-semibold">
            {['Node.js', 'Java/Quarkus', 'PERN', 'TypeScript', 'Docker'].map((w) => (
              <span key={w} className="opacity-90 hover:opacity-100 transition-opacity">
                {w}
              </span>
            ))}
          </div>
        </div>

        {/* Description */}
        <p
          ref={descRef}
          className="mb-12 mx-auto max-w-2xl text-base sm:text-lg md:text-xl text-[var(--muted)] leading-relaxed"
        >
          Building scalable systems with modern web technologies. Passionate about open-source development and clean
          architecture.
        </p>

        {/* CTA Buttons */}
        <div ref={ctasRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <MagneticButton
            className="px-8 py-4 bg-[var(--accent)] text-[var(--bg)] font-semibold rounded-full hover:shadow-2xl hover:shadow-[var(--accent)]/50 transition-all duration-300 glow-box"
            onClick={() => (window.location.href = '#work')}
          >
            View My Work
          </MagneticButton>
          <MagneticButton
            className="px-8 py-4 bg-[var(--surface)] border border-[var(--border)] text-[var(--text)] font-semibold rounded-full hover:border-[var(--accent)] transition-all duration-300"
            onClick={() => (window.location.href = '#contact')}
          >
            Get In Touch
          </MagneticButton>
        </div>

        {/* Scroll Indicator */}
        <div ref={scrollRef} className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-[var(--muted)] hover:text-[var(--accent)] transition-colors group"
          >
            <span className="text-sm font-medium">Scroll to explore</span>
            <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
