'use client';

import { Reveal } from '@/components/animations/Reveal';
import { motion } from 'framer-motion';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { Mail, MapPin, Linkedin, Github, Send } from 'lucide-react';
import { useState } from 'react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'moataz.noaman12@gmail.com',
    href: 'mailto:moataz.noaman12@gmail.com',
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
    href: 'https://www.linkedin.com/in/moataz-noaman',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'View my repositories',
    href: 'https://github.com/MoatazNoaman2001',
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
    <section id="contact" className="relative py-32 px-6 overflow-hidden bg-dark-surface/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <Reveal>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-xl text-dark-muted max-w-2xl mx-auto">
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
              className="bg-dark-surface border border-dark-border rounded-2xl p-8"
              whileHover={{ scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <h3 className="text-2xl font-display font-bold mb-6">Send a Message</h3>
              
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-dark-text mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-dark-elevated border border-dark-border rounded-lg text-dark-text focus:outline-none focus:border-accent-primary transition-colors"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-dark-text mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-dark-elevated border border-dark-border rounded-lg text-dark-text focus:outline-none focus:border-accent-primary transition-colors"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-dark-text mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-dark-elevated border border-dark-border rounded-lg text-dark-text focus:outline-none focus:border-accent-primary transition-colors resize-none"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>

                <MagneticButton
                  className="w-full px-6 py-4 bg-accent-primary text-dark-bg font-semibold rounded-full hover:shadow-2xl hover:shadow-accent-primary/50 transition-all duration-300 flex items-center justify-center gap-2"
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
              <div className="bg-gradient-to-br from-accent-primary/10 to-accent-secondary/10 border border-accent-primary/20 rounded-2xl p-8 mb-6">
                <h3 className="text-2xl font-display font-bold mb-4">Get in Touch</h3>
                <p className="text-dark-muted leading-relaxed mb-6">
                  Currently available for freelance projects and full-time opportunities. 
                  Open to discussing backend systems, mobile apps, or full-stack solutions.
                </p>
                <div className="flex gap-3">
                  <motion.span
                    className="inline-flex items-center gap-2 px-4 py-2 bg-dark-surface/50 border border-dark-border rounded-full text-sm"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-primary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-accent-primary"></span>
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
                  className="flex items-center gap-4 p-6 bg-dark-surface border border-dark-border rounded-xl hover:border-accent-primary transition-all duration-300 group"
                  whileHover={{ x: 10 }}
                >
                  <div className="p-3 bg-dark-elevated rounded-lg group-hover:bg-accent-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-accent-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-dark-muted">{item.label}</div>
                    <div className="text-dark-text font-medium">{item.value}</div>
                  </div>
                </motion.a>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Footer */}
        <Reveal delay={0.6}>
          <div className="mt-20 pt-8 border-t border-dark-border text-center">
            <p className="text-dark-muted">
              © 2025 Moataz Noaman. Built with Next.js, Tailwind CSS, and Framer Motion.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
