'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Reveal } from '@/components/animations/Reveal';
import { GraduationCap, Rocket, Briefcase, Code2, Award } from 'lucide-react';

type TimelineItemType = 'education' | 'skill' | 'work';

interface TimelineItem {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  type: TimelineItemType;
}

const timeline: TimelineItem[] = [
  {
    year: '2019-2023',
    title: 'University Journey',
    subtitle: 'BSc Bioinformatics @ Assiut University',
    description: 'Graduated with programming fundamentals. Started Java programming in 2022 during university studies.',
    tech: ['Java', 'Python', 'C++', 'Algorithms'],
    type: 'education',
  },
  {
    year: '2022-Present',
    title: 'Java Development',
    subtitle: '3+ Years Backend',
    description: 'Deep expertise in Java ecosystem. From Spring Boot to Quarkus, building microservices and enterprise applications.',
    tech: ['Java', 'Spring Boot', 'Quarkus', 'Microservices'],
    type: 'skill',
  },
  {
    year: 'Feb-Mar 2023',
    title: 'Teaching Assistant',
    subtitle: 'Zewail University',
    description: 'Post-graduation role teaching programming concepts and assisting students with software development fundamentals.',
    tech: ['Teaching', 'Mentoring', 'Programming'],
    type: 'work',
  },
  {
    year: 'Mar-Sep 2024',
    title: 'Laravel Backend',
    subtitle: '6 Months Web Development',
    description: 'Developed backend systems with Laravel. Built RESTful APIs, database design, and server-side logic for web applications.',
    tech: ['Laravel', 'PHP', 'MySQL', 'REST'],
    type: 'skill',
  },
  {
    year: 'Jun 2024-Present',
    title: 'Node.js/NestJS Engineer',
    subtitle: 'EasyDo (Current)',
    description: 'Building scalable backend systems with NestJS. PERN stack development, WhatsApp Business API integration, real-time features with WebSocket and BullMQ.',
    tech: ['NestJS', 'PostgreSQL', 'React', 'BullMQ'],
    type: 'work',
  },
  {
    year: 'Jun 2024-May 2025',
    title: 'Flutter Development',
    subtitle: 'Mobile Apps (Concurrent)',
    description: 'Built production Flutter apps with real-time streaming and WebRTC. Mastered BLoC pattern, Provider state management, and cross-platform development.',
    tech: ['Flutter', 'Dart', 'WebRTC', 'Streaming'],
    type: 'skill',
  },
  {
    year: '2024',
    title: 'Open-Source Training',
    subtitle: 'ITI & DEPI Programs',
    description: 'Advanced training in open-source technologies and DevOps. Focus on Docker, Kubernetes, CI/CD pipelines, and cloud infrastructure.',
    tech: ['Docker', 'Minikube', 'CI/CD', 'Open-Source'],
    type: 'education',
  },
  {
    year: '2024-Present',
    title: 'Java/Quarkus Engineer',
    subtitle: 'Alvora (Current)',
    description: 'Building scheduling optimization systems with Quarkus and Timefold. Microservices architecture, constraint solving, and performance optimization.',
    tech: ['Quarkus', 'Timefold', 'Java', 'Optimization'],
    type: 'work',
  },
];

const typeColors: Record<TimelineItemType, { glow: string; bg: string; border: string }> = {
  education: {
    glow: 'rgba(139, 92, 246, 0.5)',
    bg: 'bg-purple-500/20',
    border: 'border-purple-500/50',
  },
  skill: {
    glow: 'rgba(0, 217, 255, 0.5)',
    bg: 'bg-cyan-500/20',
    border: 'border-cyan-500/50',
  },
  work: {
    glow: 'rgba(251, 191, 36, 0.5)',
    bg: 'bg-amber-500/20',
    border: 'border-amber-500/50',
  },
};

const typeIcons: Record<TimelineItemType, typeof GraduationCap> = {
  education: GraduationCap,
  skill: Code2,
  work: Briefcase,
};

function TimelineNode({ item, index }: { item: TimelineItem; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.3, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const glowOpacity = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);

  const colors = typeColors[item.type];
  const Icon = typeIcons[item.type];
  const isLeft = index % 2 === 0;

  return (
    <div ref={ref} className="relative flex items-center justify-center">
      {/* Desktop Layout */}
      <div className="hidden md:flex w-full items-center">
        {/* Left Content */}
        <div className={`w-1/2 ${isLeft ? 'pr-12 text-right' : ''}`}>
          {isLeft && (
            <Reveal direction="right" delay={index * 0.1}>
              <motion.div
                style={{ opacity, scale }}
                className={`bg-[var(--surface)] border ${colors.border} rounded-2xl p-6 hover:border-[var(--accent)] transition-all duration-300`}
              >
                <div className="flex items-center justify-end gap-3 mb-3">
                  <span className="text-2xl font-display font-bold gradient-text">
                    {item.year}
                  </span>
                  <div className={`p-2 ${colors.bg} rounded-lg`}>
                    <Icon className="w-5 h-5 text-[var(--text)]" />
                  </div>
                </div>
                <h3 className="text-xl font-display font-bold text-[var(--text)] mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--accent)] font-medium mb-3">
                  {item.subtitle}
                </p>
                <p className="text-[var(--muted)] text-sm mb-4 leading-relaxed">
                  {item.description}
                </p>
                <div className="flex flex-wrap justify-end gap-2">
                  {item.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-[var(--elevated)] text-xs text-[var(--muted)] rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </Reveal>
          )}
        </div>

        {/* Center Node */}
        <div className="relative z-10 flex items-center justify-center">
          <motion.div
            className="absolute w-12 h-12 rounded-full blur-xl"
            style={{
              backgroundColor: colors.glow,
              opacity: glowOpacity,
            }}
          />
          <motion.div
            style={{ scale }}
            className={`relative w-6 h-6 rounded-full ${colors.bg} border-2 ${colors.border} flex items-center justify-center`}
          >
            <motion.div
              className="w-2 h-2 rounded-full bg-[var(--accent)]"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        </div>

        {/* Right Content */}
        <div className={`w-1/2 ${!isLeft ? 'pl-12' : ''}`}>
          {!isLeft && (
            <Reveal direction="left" delay={index * 0.1}>
              <motion.div
                style={{ opacity, scale }}
                className={`bg-[var(--surface)] border ${colors.border} rounded-2xl p-6 hover:border-[var(--accent)] transition-all duration-300`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`p-2 ${colors.bg} rounded-lg`}>
                    <Icon className="w-5 h-5 text-[var(--text)]" />
                  </div>
                  <span className="text-2xl font-display font-bold gradient-text">
                    {item.year}
                  </span>
                </div>
                <h3 className="text-xl font-display font-bold text-[var(--text)] mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--accent)] font-medium mb-3">
                  {item.subtitle}
                </p>
                <p className="text-[var(--muted)] text-sm mb-4 leading-relaxed">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-[var(--elevated)] text-xs text-[var(--muted)] rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </Reveal>
          )}
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden flex w-full">
        <div className="relative z-10 flex flex-col items-center mr-6">
          <motion.div
            className="absolute w-10 h-10 rounded-full blur-lg"
            style={{
              backgroundColor: colors.glow,
              opacity: glowOpacity,
            }}
          />
          <motion.div
            style={{ scale }}
            className={`relative w-5 h-5 rounded-full ${colors.bg} border-2 ${colors.border} flex items-center justify-center`}
          >
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        </div>

        <Reveal direction="left" delay={index * 0.1}>
          <motion.div
            style={{ opacity, scale }}
            className={`flex-1 bg-[var(--surface)] border ${colors.border} rounded-xl p-4 hover:border-[var(--accent)] transition-all duration-300`}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className={`p-1.5 ${colors.bg} rounded-md`}>
                <Icon className="w-4 h-4 text-[var(--text)]" />
              </div>
              <span className="text-lg font-display font-bold gradient-text">
                {item.year}
              </span>
            </div>
            <h3 className="text-lg font-display font-bold text-[var(--text)] mb-1">
              {item.title}
            </h3>
            <p className="text-xs text-[var(--accent)] font-medium mb-2">
              {item.subtitle}
            </p>
            <p className="text-[var(--muted)] text-xs mb-3 leading-relaxed">
              {item.description}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {item.tech.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 bg-[var(--elevated)] text-xs text-[var(--muted)] rounded"
                >
                  {tech}
                </span>
              ))}
              {item.tech.length > 3 && (
                <span className="px-2 py-0.5 bg-[var(--elevated)] text-xs text-[var(--muted)] rounded">
                  +{item.tech.length - 3}
                </span>
              )}
            </div>
          </motion.div>
        </Reveal>
      </div>
    </div>
  );
}

export function ExperienceTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="journey" className="relative py-32 px-6 overflow-hidden bg-[var(--bg)]">
      <div className="max-w-5xl mx-auto" ref={containerRef}>
        {/* Section Header */}
        <Reveal>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-[var(--text)]">
              My <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto">
              From graduation to full-stack engineer. Backend-focused with open-source passion.
            </p>
          </div>
        </Reveal>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line - Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-[var(--border)] -translate-x-1/2">
            <motion.div
              className="w-full bg-gradient-to-b from-[var(--accent)] to-[var(--accent-secondary)]"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Vertical Line - Mobile */}
          <div className="md:hidden absolute left-2.5 top-0 bottom-0 w-0.5 bg-[var(--border)]">
            <motion.div
              className="w-full bg-gradient-to-b from-[var(--accent)] to-[var(--accent-secondary)]"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Timeline Items */}
          <div className="space-y-12 md:space-y-16">
            {timeline.map((item, index) => (
              <TimelineNode key={item.year} item={item} index={index} />
            ))}
          </div>
        </div>

        {/* Experience Counter */}
        <Reveal delay={0.6}>
          <div className="mt-20 text-center">
            <motion.div
              className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-[var(--accent)]/10 to-[var(--accent-secondary)]/10 border border-[var(--accent)]/20 rounded-full"
              whileHover={{ scale: 1.05 }}
            >
              <Award className="w-8 h-8 text-[var(--accent)]" />
              <div className="text-left">
                <div className="text-3xl font-display font-bold gradient-text">4+ Years</div>
                <div className="text-sm text-[var(--muted)]">of Professional Journey</div>
              </div>
            </motion.div>
          </div>
        </Reveal>

        {/* Legend */}
        <Reveal delay={0.7}>
          <div className="mt-8 flex flex-wrap justify-center gap-6">
            {Object.entries(typeColors).map(([type, colors]) => {
              const Icon = typeIcons[type as TimelineItemType];
              return (
                <div key={type} className="flex items-center gap-2">
                  <div className={`p-1.5 ${colors.bg} rounded-md`}>
                    <Icon className="w-4 h-4 text-[var(--text)]" />
                  </div>
                  <span className="text-sm text-[var(--muted)] capitalize">{type}</span>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
