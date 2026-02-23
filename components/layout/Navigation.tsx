'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, Briefcase, Code2, Mail, Route } from 'lucide-react';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

const navLinks = [
  { name: 'About', href: '#about', icon: User },
  { name: 'Journey', href: '#journey', icon: Route },
  { name: 'Work', href: '#work', icon: Briefcase },
  { name: 'Skills', href: '#skills', icon: Code2 },
  { name: 'Contact', href: '#contact', icon: Mail },
];

const mobileNavLinks = [
  { name: 'Home', href: '#', icon: Home },
  { name: 'About', href: '#about', icon: User },
  { name: 'Journey', href: '#journey', icon: Route },
  { name: 'Work', href: '#work', icon: Briefcase },
  { name: 'Contact', href: '#contact', icon: Mail },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Determine active section
      const sections = ['contact', 'skills', 'work', 'journey', 'about'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(`#${section}`);
            break;
          }
        }
      }
      if (window.scrollY < 100) {
        setActiveSection('#');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 hidden md:block ${
          scrolled ? 'glass border-b border-[var(--border)]' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <motion.a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#');
            }}
            className="text-2xl font-display font-bold gradient-text"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            MN
          </motion.a>

          <div className="flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`text-[var(--muted)] hover:text-[var(--text)] transition-colors duration-300 relative group ${
                  activeSection === link.href ? 'text-[var(--accent)]' : ''
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-[var(--accent)] transition-all duration-300 ${
                  activeSection === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </motion.a>
            ))}

            <ThemeToggle size="sm" />

            <MagneticButton
              className="px-6 py-3 bg-[var(--accent)] text-[var(--bg)] font-semibold rounded-full hover:shadow-lg hover:shadow-[var(--accent)]/50 transition-all duration-300"
              onClick={() => handleNavClick('#contact')}
            >
              Let's Talk
            </MagneticButton>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Top Bar - Simple logo and theme toggle only */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 md:hidden ${
          scrolled ? 'bg-[var(--surface)]/80 backdrop-blur-xl border-b border-[var(--border)]' : 'bg-[var(--bg)]/80 backdrop-blur-xl'
        }`}
      >
        <div className="flex items-center justify-between px-4 py-4">
          <motion.a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#');
            }}
            className="text-2xl font-display font-bold gradient-text"
            whileHover={{ scale: 1.05 }}
          >
            MN
          </motion.a>

          <ThemeToggle size="sm" />
        </div>
      </motion.nav>

      {/* M3 Bottom Navigation for Mobile */}
      <motion.nav
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="fixed bottom-0 left-0 right-0 z-40 md:hidden"
      >
        <div className="bg-[var(--surface)]/90 backdrop-blur-xl border-t border-[var(--border)] px-2 py-2 safe-area-pb">
          <div className="flex items-center justify-around">
            {mobileNavLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <motion.button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="flex flex-col items-center gap-1 py-2 px-3 min-w-[64px] relative"
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Active indicator pill */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute top-1 w-16 h-8 bg-[var(--accent)]/20 rounded-full"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                      />
                    )}
                  </AnimatePresence>

                  <link.icon
                    className={`w-6 h-6 relative z-10 transition-colors duration-200 ${
                      isActive ? 'text-[var(--accent)]' : 'text-[var(--muted)]'
                    }`}
                  />
                  <span
                    className={`text-xs font-medium relative z-10 transition-colors duration-200 ${
                      isActive ? 'text-[var(--accent)]' : 'text-[var(--muted)]'
                    }`}
                  >
                    {link.name}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>
      </motion.nav>
    </>
  );
}
