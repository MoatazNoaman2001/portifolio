'use client';

import { Reveal } from '@/components/animations/Reveal';
import { motion } from 'framer-motion';
import { Code2, Rocket, Users, Award } from 'lucide-react';

const stats = [
  { icon: Code2, label: 'Years Experience', value: '4+' },
  { icon: Rocket, label: 'Projects Delivered', value: '10+' },
  { icon: Users, label: 'Happy Clients', value: '100+' },
  { icon: Award, label: 'Tech Stacks', value: '15+' },
];

const expertise = [
  {
    title: 'Backend Development',
    description: 'Java (2023-Present, 3+ years) with Spring Boot and Quarkus at Alvora (July 2025). Node.js (Jun 2024-Present) building real-time systems at EasyDo. Laravel (Mar-Sep 2025, 6m)',
    tags: ['Quarkus', 'NestJS', 'Spring Boot', 'NODE', 'Laravel'],
    highlight: 'Primary Focus',
  },
  {
    title: 'Full-Stack Web',
    description: 'PERN stack at Liberty Infospace with NestJS backend and React frontend. PostgreSQL, Redis, BullMQ for scalable systems. Next.js, Angular, and modern web frameworks.',
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
    tags: ['Docker', 'Minikube', 'Odoo', 'CI/CD'],
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

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.1}>
              <motion.div
                className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-6 text-center glow-box"
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <stat.icon className="w-8 h-8 mx-auto mb-4 text-[var(--accent)]" />
                <div className="text-3xl md:text-4xl font-display font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-[var(--muted)]">{stat.label}</div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* Expertise Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {expertise.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.1} direction="up">
              <motion.div
                className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-8 hover:border-[var(--accent)]/50 transition-all duration-300"
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

        {/* Personal Touch */}
        <Reveal delay={0.6}>
          <div className="mt-20 bg-gradient-to-r from-[var(--accent)]/10 to-[var(--accent-secondary)]/10 border border-[var(--accent)]/20 rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-display font-bold mb-4 text-[var(--text)]">
                  Based in Cairo, Working Globally
                </h3>
                <p className="text-[var(--muted)] leading-relaxed mb-6">
                  Currently building scheduling systems with Quarkus/Timefold at Alvora and
                  WhatsApp Business integrations with NODEJS at EasyDo. Teaching Assistant at
                  Zewail University. Active freelancer and open-source contributor.
                </p>
                <p className="text-[var(--muted)] leading-relaxed">
                  Passionate about clean architecture, scalable backend systems, and modern web
                  development. Always exploring new technologies while mastering current stacks.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
