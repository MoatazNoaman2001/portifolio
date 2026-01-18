'use client';

import { Reveal } from '@/components/animations/Reveal';
import { motion } from 'framer-motion';
import { Code2, Rocket, Users, Award } from 'lucide-react';

const stats = [
  { icon: Code2, label: 'Years Experience', value: '2+' },
  { icon: Rocket, label: 'Projects Delivered', value: '15+' },
  { icon: Users, label: 'Happy Clients', value: '500+' },
  { icon: Award, label: 'Tech Stacks', value: '10+' },
];

const expertise = [
  {
    title: 'Backend Development',
    description: 'Expert in Java Spring Boot, Quarkus, Node.js/NestJS, and Laravel. Building scalable APIs, microservices, and optimization systems.',
    tags: ['Spring Boot', 'NestJS', 'Quarkus', 'Laravel'],
  },
  {
    title: 'Mobile Development',
    description: '3.5 years Native Android, 1.5 years Flutter. Creating performant cross-platform apps with real-time features.',
    tags: ['Flutter', 'Native Android', 'Firebase', 'WebRTC'],
  },
  {
    title: 'Frontend Engineering',
    description: 'Modern web applications with React, Next.js, and Angular. Focus on performance, SEO, and exceptional UX.',
    tags: ['React', 'Next.js', 'Angular', 'TypeScript'],
  },
  {
    title: 'DevOps & Cloud',
    description: 'Docker, Docker Swarm, CI/CD pipelines. Automated deployments and infrastructure management.',
    tags: ['Docker', 'Git', 'CI/CD', 'PostgreSQL'],
  },
];

export function About() {
  return (
    <section id="about" className="relative py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <Reveal>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-xl text-dark-muted max-w-2xl mx-auto">
              Full-Stack Engineer passionate about building robust, scalable systems 
              and delivering exceptional digital experiences.
            </p>
          </div>
        </Reveal>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.1}>
              <motion.div
                className="bg-dark-surface border border-dark-border rounded-2xl p-6 text-center glow-box"
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <stat.icon className="w-8 h-8 mx-auto mb-4 text-accent-primary" />
                <div className="text-3xl md:text-4xl font-display font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-dark-muted">{stat.label}</div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* Expertise Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {expertise.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.1} direction="up">
              <motion.div
                className="bg-dark-surface border border-dark-border rounded-2xl p-8 hover:border-accent-primary/50 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-2xl font-display font-bold mb-4 text-dark-text">
                  {item.title}
                </h3>
                <p className="text-dark-muted mb-6 leading-relaxed">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-dark-elevated text-sm text-accent-primary border border-dark-border rounded-full"
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
          <div className="mt-20 bg-gradient-to-r from-accent-primary/10 to-accent-secondary/10 border border-accent-primary/20 rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
                  Based in Cairo, Working Globally
                </h3>
                <p className="text-dark-muted leading-relaxed mb-6">
                  Currently building AlvoraCore scheduling systems and WhatsApp Business 
                  integrations. Teaching Assistant at Zewail University. Active freelancer 
                  serving clients across Egypt, India, and beyond.
                </p>
                <p className="text-dark-muted leading-relaxed">
                  I believe every project deserves intentional design, clean architecture, 
                  and code that solves real problems. Let's build something exceptional together.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
