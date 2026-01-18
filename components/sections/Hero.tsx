'use client';

import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { SplitText } from '@/components/animations/SplitText';
import { Reveal } from '@/components/animations/Reveal';
import { MagneticButton } from '@/components/ui/MagneticButton';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise-bg grid-bg">
      {/* Gradient Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-primary/20 rounded-full blur-3xl"
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
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-secondary/20 rounded-full blur-3xl"
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
            className="inline-flex items-center gap-2 px-4 py-2 bg-dark-surface/50 border border-dark-border rounded-full mb-8 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-accent-primary"></span>
            </span>
            <span className="text-sm text-dark-muted">Available for freelance</span>
          </motion.div>
        </Reveal>

        {/* Main Heading */}
        <div className="mb-6">
          <SplitText
            delay={0.4}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight"
          >
            Full-Stack Engineer
          </SplitText>
        </div>

        <Reveal delay={0.8}>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold gradient-text mb-8">
            Building Digital Excellence
          </h2>
        </Reveal>

        <Reveal delay={1} direction="up">
          <p className="text-lg md:text-xl text-dark-muted max-w-2xl mx-auto mb-12 leading-relaxed">
            Specialized in crafting scalable backend systems with Spring Boot & NestJS, 
            mobile experiences with Flutter, and modern web applications. 
            <span className="text-accent-primary"> 2+ years </span> 
            transforming complex requirements into elegant solutions.
          </p>
        </Reveal>

        {/* CTA Buttons */}
        <Reveal delay={1.2} direction="up">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <MagneticButton
              className="px-8 py-4 bg-accent-primary text-dark-bg font-semibold rounded-full hover:shadow-2xl hover:shadow-accent-primary/50 transition-all duration-300 glow-box"
              onClick={() => (window.location.href = '#work')}
            >
              View My Work
            </MagneticButton>
            <MagneticButton
              className="px-8 py-4 bg-dark-surface border border-dark-border text-dark-text font-semibold rounded-full hover:border-accent-primary transition-all duration-300"
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
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <motion.a
            href="#about"
            className="flex flex-col items-center gap-2 text-dark-muted hover:text-accent-primary transition-colors group"
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
