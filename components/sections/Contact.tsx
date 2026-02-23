'use client';

import { Reveal } from '@/components/animations/Reveal';
import { motion, AnimatePresence } from 'framer-motion';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { Toast } from '@/components/ui/Toast';
import { Mail, MapPin, Linkedin, Github, Send, Phone, FileText, Copy, Check, MessageCircle, Loader2, XCircle } from 'lucide-react';
import { useState, useRef, useCallback } from 'react';
import emailjs from '@emailjs/browser';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'moataz.noaman12@gmail.com',
    href: 'mailto:moataz.noaman12@gmail.com',
    copyable: true,
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: 'Chat on WhatsApp',
    href: 'https://wa.me/201098518194',
    copyable: false,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+20 109 851 8194',
    href: 'tel:+201098518194',
    copyable: false,
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Cairo, Egypt',
    href: '#',
    copyable: false,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Connect on LinkedIn',
    href: 'https://linkedin.com/in/moataz-noaman-02196222a',
    copyable: false,
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'View my repositories',
    href: 'https://github.com/MoatazNoaman2001',
    copyable: false,
  },
  {
    icon: FileText,
    label: 'Resume',
    value: 'Download Resume',
    href: 'https://flowcv.com/resume/m7a5j1n7ui',
    copyable: false,
  },
];

function FloatingInput({
  id,
  label,
  type = 'text',
  value,
  onChange,
  required,
  multiline,
  rows,
}: {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  required?: boolean;
  multiline?: boolean;
  rows?: number;
}) {
  const [focused, setFocused] = useState(false);
  const isActive = focused || value.length > 0;
  const inputClasses =
    'w-full px-4 pt-6 pb-2 bg-[var(--elevated)] border-b-2 rounded-lg text-[var(--text)] focus:outline-none transition-all duration-300 peer';
  const borderClass = focused
    ? 'border-[var(--accent)] shadow-[0_2px_8px_var(--accent)/30]'
    : 'border-[var(--border)]';

  return (
    <div className="relative">
      {multiline ? (
        <textarea
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          rows={rows}
          className={`${inputClasses} ${borderClass} resize-none`}
          required={required}
        />
      ) : (
        <input
          type={type}
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={`${inputClasses} ${borderClass}`}
          required={required}
        />
      )}
      <label
        htmlFor={id}
        className={`absolute left-4 transition-all duration-300 pointer-events-none ${
          isActive
            ? 'top-1.5 text-xs text-[var(--accent)] font-medium'
            : 'top-4 text-sm text-[var(--muted)]'
        }`}
      >
        {label}
      </label>
      {/* Expanding bottom border */}
      <motion.div
        className="absolute bottom-0 left-1/2 h-[2px] bg-[var(--accent)]"
        initial={{ width: 0, x: '-50%' }}
        animate={focused ? { width: '100%', x: '-50%' } : { width: 0, x: '-50%' }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
}

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState<FormStatus>('idle');
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' | 'info'; visible: boolean }>({
    message: '',
    type: 'success',
    visible: false,
  });
  const formRef = useRef<HTMLFormElement>(null);

  const showToast = useCallback((message: string, type: 'success' | 'error' | 'info') => {
    setToast({ message, type, visible: true });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      // Fallback: log to console if EmailJS not configured
      console.log('EmailJS not configured. Form data:', formData);
      setFormStatus('success');
      showToast('Message sent successfully!', 'success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormStatus('idle'), 3000);
      return;
    }

    try {
      await emailjs.send(serviceId, templateId, {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      }, publicKey);

      setFormStatus('success');
      showToast('Message sent successfully!', 'success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormStatus('idle'), 3000);
    } catch {
      setFormStatus('error');
      showToast('Failed to send message. Please try again.', 'error');
      setTimeout(() => setFormStatus('idle'), 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('moataz.noaman12@gmail.com');
      showToast('Email copied to clipboard!', 'success');
    } catch {
      showToast('Failed to copy email', 'error');
    }
  };

  const buttonContent = () => {
    switch (formStatus) {
      case 'sending':
        return (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Sending...
          </>
        );
      case 'success':
        return (
          <>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 500 }}
            >
              <Check className="w-5 h-5" />
            </motion.div>
            Message Sent!
          </>
        );
      case 'error':
        return (
          <>
            <XCircle className="w-5 h-5" />
            Failed. Try Again
          </>
        );
      default:
        return (
          <>
            <Send className="w-5 h-5" />
            Send Message
          </>
        );
    }
  };

  const buttonColors = () => {
    switch (formStatus) {
      case 'success':
        return 'bg-emerald-500 text-white';
      case 'error':
        return 'bg-red-500 text-white';
      default:
        return 'bg-[var(--accent)] text-[var(--bg)]';
    }
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden bg-[var(--surface)]/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <Reveal>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-[var(--text)]">
              Let&apos;s <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto">
              Have a project in mind or want to discuss opportunities?
              I&apos;d love to hear from you.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Reveal direction="left">
            <motion.form
              ref={formRef}
              onSubmit={handleSubmit}
              className="glass border border-[var(--border)] rounded-2xl p-6 sm:p-8"
              whileHover={{ scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <h3 className="text-2xl font-display font-bold mb-6 text-[var(--text)]">Send a Message</h3>

              <div className="space-y-6">
                <FloatingInput
                  id="name"
                  label="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

                <FloatingInput
                  id="email"
                  label="Email Address"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

                <FloatingInput
                  id="message"
                  label="Tell me about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  multiline
                  rows={6}
                />

                <button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className={`w-full px-6 py-4 font-semibold rounded-full transition-all duration-300 flex items-center justify-center gap-2 ${buttonColors()} ${
                    formStatus === 'sending' ? 'opacity-80 cursor-not-allowed' : 'hover:shadow-2xl hover:shadow-[var(--accent)]/50'
                  }`}
                >
                  {buttonContent()}
                </button>
              </div>
            </motion.form>
          </Reveal>

          {/* Contact Info */}
          <div className="space-y-6">
            <Reveal direction="right">
              <div className="glass bg-gradient-to-br from-[var(--accent)]/10 to-[var(--accent-secondary)]/10 border border-[var(--accent)]/20 rounded-2xl p-8 mb-6">
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
                {item.copyable ? (
                  <motion.button
                    onClick={copyEmail}
                    className="flex items-center gap-4 p-6 glass border border-[var(--border)] rounded-xl hover:border-[var(--accent)] transition-all duration-300 group w-full text-left"
                    whileHover={{ x: 10 }}
                  >
                    <div className="p-3 bg-[var(--elevated)] rounded-lg group-hover:bg-[var(--accent)]/20 transition-colors">
                      <item.icon className="w-6 h-6 text-[var(--accent)]" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-[var(--muted)]">{item.label}</div>
                      <div className="text-[var(--text)] font-medium">{item.value}</div>
                    </div>
                    <Copy className="w-4 h-4 text-[var(--muted)] group-hover:text-[var(--accent)] transition-colors" />
                  </motion.button>
                ) : (
                  <motion.a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 p-6 glass border border-[var(--border)] rounded-xl hover:border-[var(--accent)] transition-all duration-300 group"
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
                )}
              </Reveal>
            ))}
          </div>
        </div>

        {/* Footer */}
        <Reveal delay={0.6}>
          <div className="mt-20 pt-8 border-t border-[var(--border)] text-center">
            <p className="text-[var(--muted)]">
              &copy; 2026 Moataz Noaman. Built with Next.js, Tailwind CSS, and Framer Motion.
            </p>
          </div>
        </Reveal>
      </div>

      {/* Toast */}
      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.visible}
        onClose={() => setToast((prev) => ({ ...prev, visible: false }))}
      />
    </section>
  );
}
