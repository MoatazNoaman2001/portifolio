'use client';

import { Reveal } from '@/components/animations/Reveal';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'EasyDo CRM WhatsApp Integration',
    description: 'Comprehensive WhatsApp Business API platform with campaign management, template flow builders, and real-time analytics. Handling complex encryption, webhook systems, and multi-step forms.',
    tech: ['Node.js', 'React', 'PostgreSQL', 'Redis', 'BullMQ'],
    category: 'Backend & Full-Stack',
    image: '/api/placeholder/600/400',
    gradient: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    title: 'AlvoraCore Scheduling System',
    description: 'Advanced scheduling optimization system using Quarkus and Timefold. Solving complex resource allocation with AI-powered optimization algorithms.',
    tech: ['Java', 'Quarkus', 'Timefold', 'PostgreSQL'],
    category: 'Backend Engineering',
    image: '/api/placeholder/600/400',
    gradient: 'from-purple-500/20 to-pink-500/20',
  },
  {
    title: 'AlvoraTrack GPS System',
    description: 'Real-time vehicle tracking system with Traccar integration. Managing fleet operations with live location updates and comprehensive reporting.',
    tech: ['Traccar', 'Node.js', 'PostgreSQL', 'WebSocket'],
    category: 'IoT & Real-time',
    image: '/api/placeholder/600/400',
    gradient: 'from-green-500/20 to-emerald-500/20',
  },
  {
    title: 'PMP Certification Platform',
    description: 'Education platform serving 500+ users. Built comprehensive exam preparation system with progress tracking and analytics.',
    tech: ['Laravel', 'Vue.js', 'MySQL', 'Redis'],
    category: 'Full-Stack Web',
    image: '/api/placeholder/600/400',
    gradient: 'from-orange-500/20 to-red-500/20',
  },
{
    title: 'Real-time Chat with WebRTC',
    description: 'Production-ready chat application with video calling capabilities. Built with WebRTC for peer-to-peer communication and real-time messaging.',
    tech: ['Flutter', 'WebRTC', 'Firebase', 'Node.js'],
    category: 'Mobile & Real-time',
    image: '/api/placeholder/600/400',
    gradient: 'from-amber-500/20 to-yellow-500/20',
  },
  {
    title: 'E-commerce with Tap Payments',
    description: 'Full-featured e-commerce platform integrated with Tap payment gateway for Arab markets. Complete checkout flow and order management.',
    tech: ['Node.js', 'React', 'PostgreSQL', 'Stripe'],
    category: 'Full-Stack Web',
    image: '/api/placeholder/600/400',
    gradient: 'from-amber-500/20 to-yellow-500/20',
  },
];

export function Work() {
  return (
    <section id="work" className="relative py-32 px-6 overflow-hidden bg-dark-surface/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <Reveal>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Featured <span className="gradient-text">Work</span>
            </h2>
            <p className="text-xl text-dark-muted max-w-2xl mx-auto">
              A selection of projects showcasing my expertise across backend, mobile, 
              and full-stack development.
            </p>
          </div>
        </Reveal>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.1} direction="up">
              <motion.div
                className="group relative bg-dark-surface border border-dark-border rounded-2xl overflow-hidden hover:border-accent-primary/50 transition-all duration-300"
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {/* Project Image/Gradient */}
                <div className={`relative h-48 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
                  <motion.div
                    className="absolute inset-0 bg-black/40"
                    whileHover={{ opacity: 0.2 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute top-4 right-4 flex gap-2">
                    <motion.button
                      className="p-2 bg-dark-surface/80 backdrop-blur-sm rounded-full hover:bg-accent-primary transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </motion.button>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl font-display font-bold text-white/10">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="text-xs text-accent-primary font-semibold mb-2 uppercase tracking-wider">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-display font-bold mb-3 group-hover:text-accent-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-dark-muted mb-4 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-dark-elevated text-xs text-dark-muted rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 bg-dark-elevated text-xs text-dark-muted rounded-md">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* View More */}
        <Reveal delay={0.6}>
          <div className="text-center mt-12">
            <motion.button
              className="px-8 py-4 bg-dark-elevated border border-dark-border text-dark-text font-semibold rounded-full hover:border-accent-primary hover:text-accent-primary transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Projects
            </motion.button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
