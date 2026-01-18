'use client';

import { Reveal } from '@/components/animations/Reveal';
import { motion } from 'framer-motion';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { Mail, MapPin, Linkedin, Github, Send, Phone, FileText } from 'lucide-react';
import { useState } from 'react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'moataz.noaman12@gmail.com',
    href: 'mailto:moataz.noaman12@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+20 109 851 8194',
    href: 'tel:+201098518194',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Cairo, Egypt',
    href: '#',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Connect on LinkedIn',
    href: 'https://linkedin.com/in/moataz-noaman-02196222a',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'View my repositories',
    href: 'https://github.com/MoatazNoaman2001',
  },
  {
    icon: FileText,
    label: 'Resume',
    value: 'Download Resume',
    href: 'https://flowcv.com/resume/m7a5j1n7ui',
  },
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="relative py-32 px-6 overflow-hidden bg-[var(--surface)]/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <Reveal>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-[var(--text)]">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto">
              Have a project in mind or want to discuss opportunities?
              I'd love to hear from you.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Reveal direction="left">
            <motion.form
              onSubmit={handleSubmit}
              className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-8"
              whileHover={{ scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <h3 className="text-2xl font-display font-bold mb-6 text-[var(--text)]">Send a Message</h3>

              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[var(--text)] mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[var(--elevated)] border border-[var(--border)] rounded-lg text-[var(--text)] focus:outline-none focus:border-[var(--accent)] transition-colors"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[var(--text)] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[var(--elevated)] border border-[var(--border)] rounded-lg text-[var(--text)] focus:outline-none focus:border-[var(--accent)] transition-colors"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[var(--text)] mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-[var(--elevated)] border border-[var(--border)] rounded-lg text-[var(--text)] focus:outline-none focus:border-[var(--accent)] transition-colors resize-none"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>

                <MagneticButton
                  className="w-full px-6 py-4 bg-[var(--accent)] text-[var(--bg)] font-semibold rounded-full hover:shadow-2xl hover:shadow-[var(--accent)]/50 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </MagneticButton>
              </div>
            </motion.form>
          </Reveal>

          {/* Contact Info */}
          <div className="space-y-6">
            <Reveal direction="right">
              <div className="bg-gradient-to-br from-[var(--accent)]/10 to-[var(--accent-secondary)]/10 border border-[var(--accent)]/20 rounded-2xl p-8 mb-6">
                <h3 className="text-2xl font-display font-bold mb-4 text-[var(--text)]">Get in Touch</h3>
                <p className="text-[var(--muted)] leading-relaxed mb-6">
                  Currently available for backend and full-stack web projects. Specializing in
                  <strong className="text-[var(--accent)]"> Node.js/NestJS</strong>,
                  <strong className="text-[var(--accent)]"> Java/Quarkus</strong>,
                  <strong className="text-[var(--accent)]"> PERN stack</strong>, and modern web frameworks.
                  Open-source contributor with experience in Docker, Minikube, and DevOps workflows.
                </p>
                <div className="flex gap-3">
                  <motion.span
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--surface)]/50 border border-[var(--border)] rounded-full text-sm"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-[var(--accent)]"></span>
                    </span>
                    Available Now
                  </motion.span>
                </div>
              </div>
            </Reveal>

            {contactInfo.map((item, index) => (
              <Reveal key={item.label} delay={index * 0.1} direction="right">
                <motion.a
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 p-6 bg-[var(--surface)] border border-[var(--border)] rounded-xl hover:border-[var(--accent)] transition-all duration-300 group"
                  whileHover={{ x: 10 }}
                >
                  <div className="p-3 bg-[var(--elevated)] rounded-lg group-hover:bg-[var(--accent)]/20 transition-colors">
                    <item.icon className="w-6 h-6 text-[var(--accent)]" />
                  </div>
                  <div>
                    <div className="text-sm text-[var(--muted)]">{item.label}</div>
                    <div className="text-[var(--text)] font-medium">{item.value}</div>
                  </div>
                </motion.a>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Footer */}
        <Reveal delay={0.6}>
          <div className="mt-20 pt-8 border-t border-[var(--border)] text-center">
            <p className="text-[var(--muted)]">
              © 2025 Moataz Noaman. Built with Next.js, Tailwind CSS, and Framer Motion.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
