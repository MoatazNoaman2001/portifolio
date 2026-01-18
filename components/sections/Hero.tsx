'use client';

import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Reveal } from '@/components/animations/Reveal';
import { MagneticButton } from '@/components/ui/MagneticButton';
import {
  ScrambleText,
  GsapRevealText,
  FloatingWords,
  TypewriterGsap,
  GlitchText,
  SplitReveal,
  MagneticText
} from '@/components/animations/GsapText';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise-bg grid-bg bg-[var(--bg)]">
      {/* Gradient Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--accent)]/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--accent-secondary)]/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 4,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        {/* Status Badge */}
        <Reveal delay={0.2}>
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--surface)]/50 border border-[var(--border)] rounded-full mb-8 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[var(--accent)]"></span>
            </span>
            <span className="text-sm text-[var(--muted)]">Available for freelance</span>
          </motion.div>
        </Reveal>

        {/* Main Heading with GSAP Reveal Animation */}
        <div className="mb-6">
          <GsapRevealText
            delay={0.6}
            stagger={0.05}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight text-[var(--text)]"
          >
            Full-Stack Engineer
          </GsapRevealText>
        </div>

        {/* Subtitle with Scramble Effect */}
        <div className="mb-4">
          <ScrambleText
            delay={2000}
            duration={3}
            className="text-2xl md:text-4xl lg:text-5xl font-display font-bold gradient-text"
          >
            Open-Source Advocate | Backend Specialist
          </ScrambleText>
        </div>

        {/* Floating Tech Stack Words */}
        <Reveal delay={3.5} direction="up">
          <div className="mb-6">
            <FloatingWords
              words={['Node.js', 'Java/Quarkus', 'PERN', 'TypeScript', 'Docker']}
              className="text-lg md:text-xl text-[var(--accent)] font-semibold"
            />
          </div>
        </Reveal>

        {/* Description with Typewriter Effect */}
        <div className="mb-12 min-h-[80px] flex items-center justify-center">
          <TypewriterGsap
            text="Building scalable systems with modern web technologies. Passionate about open-source development and clean architecture."
            delay={5}
            speed={0.05}
            cursor={true}
            className="text-lg md:text-xl text-[var(--muted)] max-w-2xl leading-relaxed"
          />
        </div>

        {/* CTA Buttons */}
        <Reveal delay={7} direction="up">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
        </Reveal>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 8, duration: 0.8 }}
        >
          <motion.a
            href="#about"
            className="flex flex-col items-center gap-2 text-[var(--muted)] hover:text-[var(--accent)] transition-colors group"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="text-sm font-medium">Scroll to explore</span>
            <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
