'use client';

import { Reveal } from '@/components/animations/Reveal';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
    title: 'EasyDo CRM WhatsApp Integration',
    description: 'Comprehensive WhatsApp Business API platform with campaign management, template flow builders, and real-time analytics. Handling complex encryption and webhook systems.',
    tech: ['Node.js', 'React', 'PostgreSQL', 'BullMQ'],
    category: 'Backend & Full-Stack',
    gradient: 'from-teal-500/20 to-cyan-500/20',
  },
  {
    title: 'AlvoraCore Scheduling System',
    description: 'Advanced scheduling optimization system using Quarkus and Timefold. Solving complex resource allocation with AI-powered optimization algorithms.',
    tech: ['Java', 'Quarkus', 'Timefold', 'PostgreSQL'],
    category: 'Backend Engineering',
    gradient: 'from-amber-500/20 to-yellow-500/20',
  },
  {
    title: 'PMP Certification Platform',
    description: 'Education platform serving 500+ users. Built comprehensive exam preparation system with progress tracking and analytics for PMP certification candidates.',
    tech: ['Laravel', 'Vue.js', 'MySQL', 'Redis'],
    category: 'Full-Stack Web',
    gradient: 'from-orange-500/20 to-red-500/20',
    github: 'https://github.com/MoatazNoaman2001/exam_system',
  },
    {
    title: 'Tgaraar Platform',
    description: 'Education platform serving 500+ users. Built comprehensive exam preparation system with progress tracking and analytics for PMP certification candidates.',
    tech: ['react' , 'node', 'typescript', 'mongo'],
    category: 'Full-Stack Web',
    gradient: 'from-orange-500/20 to-red-500/20',
  },
 
  {
    title: 'CVRP Route Optimization',
    description: 'Capacitated Vehicle Routing Problem solver using advanced optimization algorithms. Fleet management with optimal route planning and resource allocation.',
    tech: ['Java', 'Quarkus', 'Timefold', 'PostgreSQL'],
    category: 'Optimization & AI',
    gradient: 'from-green-500/20 to-emerald-500/20',
    github: 'https://github.com/MoatazNoaman2001/cvrp',
  },
  {
    title: 'UAV Route Optimization',
    description: 'Unmanned Aerial Vehicle route optimization system for efficient drone fleet management and delivery planning with constraint satisfaction.',
    tech: ['Java', 'Timefold', 'Spring Boot', 'Algorithms'],
    category: 'Optimization & AI',
    gradient: 'from-purple-500/20 to-pink-500/20',
    github: 'https://github.com/MoatazNoaman2001/UAV-Route-Optemization',
  },
    {
    title: 'Real-time Chat with WebRTC',
    description: 'Production-ready chat application with video calling capabilities. Built with WebRTC for peer-to-peer communication and real-time messaging.',
    tech: ['Flutter', 'WebRTC', 'Firebase', 'Node.js'],
    category: 'Mobile & Real-time',
    gradient: 'from-rose-500/20 to-pink-500/20',
  },
    {
    title: 'Norway voice application',
    description: 'Audio and Video streaming application for streaming Norway news and deliver latest articles and blogs.',
    tech: ['Flutter'],
    category: 'Mobile',
    gradient: 'from-rose-500/20 to-pink-500/20',
  },
  {
    title: 'Vitalism - Graduation Project',
    description: 'Computer vision and machine learning application using OpenCV. Image processing, feature detection, and ML model integration for biomedical analysis.',
    tech: ['Python', 'OpenCV', 'ML', 'TensorFlow'],
    category: 'Computer Vision & ML',
    gradient: 'from-indigo-500/20 to-violet-500/20',
  },
];

export function Work() {
  return (
    <section id="work" className="relative py-32 px-6 overflow-hidden bg-[var(--surface)]/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <Reveal>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-[var(--text)]">
              Featured <span className="gradient-text">Work</span>
            </h2>
            <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto">
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
                className="group relative bg-[var(--surface)] border border-[var(--border)] rounded-2xl overflow-hidden hover:border-[var(--accent)]/50 transition-all duration-300"
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
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-[var(--surface)]/80 backdrop-blur-sm rounded-full hover:bg-[var(--accent)] transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className="w-4 h-4" />
                      </motion.a>
                    )}
                    <motion.button
                      className="p-2 bg-[var(--surface)]/80 backdrop-blur-sm rounded-full hover:bg-[var(--accent)] transition-colors"
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
                  <div className="text-xs text-[var(--accent)] font-semibold mb-2 uppercase tracking-wider">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-display font-bold mb-3 group-hover:text-[var(--accent)] transition-colors text-[var(--text)]">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[var(--muted)] mb-4 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-[var(--elevated)] text-xs text-[var(--muted)] rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 bg-[var(--elevated)] text-xs text-[var(--muted)] rounded-md">
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
            <motion.a
              href="https://github.com/MoatazNoaman2001"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--elevated)] border border-[var(--border)] text-[var(--text)] font-semibold rounded-full hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-5 h-5" />
              View All on GitHub
            </motion.a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
