'use client';

import { Reveal } from '@/components/animations/Reveal';
import { motion } from 'framer-motion';
import { Code2, Rocket, Users, Award, MapPin, Clock, Github, Briefcase } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const { ref, isVisible } = useScrollAnimation();

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const duration = 2000;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      start = Math.floor(eased * value);
      setCount(start);
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [isVisible, value]);

  return <span ref={ref as any}>{count}{suffix}</span>;
}

function LiveClock() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const update = () => {
      setTime(
        new Date().toLocaleTimeString('en-US', {
          timeZone: 'Africa/Cairo',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        })
      );
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return <span className="font-mono text-lg">{time || '--:--:-- --'}</span>;
}

const techStack = [
  'Node.js', 'Java', 'Quarkus', 'React', 'TypeScript', 'Docker',
  'PostgreSQL', 'NestJS', 'Spring Boot', 'Next.js', 'Redis', 'Flutter',
  'Angular', 'Laravel', 'BullMQ', 'Prisma',
];

const expertise = [
  {
    title: 'Backend Development',
    description: 'Java (2023-Present, 2+ years) with Spring Boot and Quarkus at Alvora (July 2025). Node.js (Jun 2024-Present) building real-time systems at EasyDo. Laravel (Mar-Sep 2025, 6m)',
    tags: ['Quarkus', 'NestJS', 'Spring Boot', 'NODE', 'Laravel'],
    highlight: 'Primary Focus',
  },
  {
    title: 'Full-Stack Web',
    description: 'PERN stack at Library Infospace with NestJS backend and React frontend. PostgreSQL, Redis, BullMQ for scalable systems. Next.js, Angular, and modern web frameworks.',
    tags: ['PERN', 'React', 'NODE.js', 'PostgreSQL', 'Redis', 'BullMQ'],
    highlight: 'Web Expert',
  },
  {
    title: 'Mobile Development',
    description: 'Flutter (Jun 2024-May 2025) with real-time streaming and WebRTC. Built production apps with BLoC pattern and Provider. Android experience available.',
    tags: ['Flutter', 'WebRTC', 'Real-time', 'Streaming'],
    highlight: 'Available',
  },
  {
    title: 'DevOps & Tools',
    description: 'Docker containerization, learning Minikube/K8s through ITI & DEPI. CI/CD pipelines, experience with Odoo. Strong Git workflow and open-source contribution.',
    tags: ['Docker', 'Minikube', 'Odoo', 'CI/CD', 'AWS'],
    highlight: 'Open-Source',
  },
];

export function About() {
  return (
    <section id="about" className="relative py-32 px-6 overflow-hidden bg-[var(--bg)]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <Reveal>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-[var(--text)]">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto">
              Full-Stack Engineer specializing in backend systems, web applications,
              and open-source development.
            </p>
          </div>
        </Reveal>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-20">
          {/* Profile Tile - 2x2 */}
          <Reveal delay={0}>
            <motion.div
              className="md:col-span-2 md:row-span-2 glass border border-white/[0.08] rounded-2xl p-8 relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-[var(--accent)]/5 rounded-full blur-3xl" />
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-4 text-[var(--text)]">
                Moataz Noaman
              </h3>
              <p className="text-[var(--muted)] leading-relaxed mb-6">
                Currently building scheduling systems with Quarkus/Timefold at Alvora and
                WhatsApp Business integrations with Node.js at EasyDo. Teaching Assistant at
                Zewail University. Active freelancer and open-source contributor.
              </p>
              <p className="text-[var(--muted)] leading-relaxed mb-6">
                Passionate about clean architecture, scalable backend systems, and modern web
                development. Always exploring new technologies while mastering current stacks.
              </p>
              <motion.span
                className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-sm text-emerald-400"
                whileHover={{ scale: 1.05 }}
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
                </span>
                Available for Work
              </motion.span>
            </motion.div>
          </Reveal>

          {/* Stats Tile */}
          <Reveal delay={0.1}>
            <motion.div
              className="glass border border-white/[0.08] rounded-2xl p-6 text-center"
              whileHover={{ scale: 1.02, borderColor: 'rgba(var(--accent), 0.3)' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Code2 className="w-8 h-8 mx-auto mb-3 text-[var(--accent)]" />
              <div className="text-3xl font-display font-bold gradient-text mb-1">
                <AnimatedCounter value={3} suffix="+" />
              </div>
              <div className="text-sm text-[var(--muted)]">Years Experience</div>
            </motion.div>
          </Reveal>

          {/* Location Tile */}
          <Reveal delay={0.15}>
            <motion.div
              className="glass border border-white/[0.08] rounded-2xl p-6 text-center"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <MapPin className="w-8 h-8 mx-auto mb-3 text-[var(--accent)]" />
              <div className="text-lg font-display font-bold text-[var(--text)] mb-1">
                Cairo, Egypt
              </div>
              <div className="text-sm text-[var(--muted)]">Working Globally</div>
            </motion.div>
          </Reveal>

          {/* GitHub Tile */}
          <Reveal delay={0.2}>
            <motion.a
              href="https://github.com/MoatazNoaman2001"
              target="_blank"
              rel="noopener noreferrer"
              className="glass border border-white/[0.08] rounded-2xl p-6 text-center block hover:border-[var(--accent)]/30 transition-colors"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Github className="w-8 h-8 mx-auto mb-3 text-[var(--accent)]" />
              <div className="text-3xl font-display font-bold gradient-text mb-1">74+</div>
              <div className="text-sm text-[var(--muted)]">Repositories</div>
            </motion.a>
          </Reveal>

          {/* Timezone Tile */}
          <Reveal delay={0.25}>
            <motion.div
              className="glass border border-white/[0.08] rounded-2xl p-6 text-center"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Clock className="w-8 h-8 mx-auto mb-3 text-[var(--accent)]" />
              <LiveClock />
              <div className="text-sm text-[var(--muted)] mt-1">Cairo Time (EET)</div>
            </motion.div>
          </Reveal>

          {/* Projects Tile */}
          <Reveal delay={0.1}>
            <motion.div
              className="glass border border-white/[0.08] rounded-2xl p-6 text-center"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Rocket className="w-8 h-8 mx-auto mb-3 text-[var(--accent)]" />
              <div className="text-3xl font-display font-bold gradient-text mb-1">
                <AnimatedCounter value={10} suffix="+" />
              </div>
              <div className="text-sm text-[var(--muted)]">Projects Delivered</div>
            </motion.div>
          </Reveal>

          {/* Tech Stack Tile - 2x1 */}
          <Reveal delay={0.3}>
            <motion.div
              className="md:col-span-2 glass border border-white/[0.08] rounded-2xl p-6 overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <h4 className="text-sm font-medium text-[var(--muted)] mb-4 uppercase tracking-wider">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, i) => (
                  <motion.span
                    key={tech}
                    className="px-3 py-1.5 bg-[var(--elevated)] text-sm text-[var(--accent)] border border-[var(--border)] rounded-full"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </Reveal>
        </div>

        {/* Expertise Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {expertise.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.1} direction="up">
              <motion.div
                className="glass border border-white/[0.08] rounded-2xl p-8 hover:border-[var(--accent)]/50 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-display font-bold text-[var(--text)]">
                    {item.title}
                  </h3>
                  <span className="px-3 py-1 bg-[var(--accent)]/10 text-[var(--accent)] text-sm font-medium rounded-full">
                    {item.highlight}
                  </span>
                </div>
                <p className="text-[var(--muted)] mb-6 leading-relaxed text-sm">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-[var(--elevated)] text-sm text-[var(--accent)] border border-[var(--border)] rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
