'use client';

import { Reveal } from '@/components/animations/Reveal';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const skillCategories = [
  {
    name: 'Backend',
    skills: [
      { name: 'Java Spring Boot', level: 90 },
      { name: 'Node.js/NestJS', level: 90 },
      { name: 'Quarkus', level: 85 },
      { name: 'Laravel', level: 80 },
    ],
  },
  {
    name: 'Mobile',
    skills: [
      { name: 'Flutter', level: 85 },
      { name: 'Native Android', level: 90 },
      { name: 'Firebase', level: 85 },
    ],
  },
  {
    name: 'Frontend',
    skills: [
      { name: 'React/Next.js', level: 90 },
      { name: 'TypeScript', level: 90 },
      { name: 'Angular', level: 80 },
      { name: 'Tailwind CSS', level: 90 },
    ],
  },
  {
    name: 'DevOps & Tools',
    skills: [
      { name: 'Docker/Docker Swarm', level: 85 },
      { name: 'Git/CI-CD', level: 90 },
      { name: 'PostgreSQL', level: 85 },
      { name: 'Redis', level: 80 },
    ],
  },
];

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div ref={ref as any} className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-dark-text">{name}</span>
        <span className="text-sm text-dark-muted">{level}%</span>
      </div>
      <div className="h-2 bg-dark-elevated rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full"
          initial={{ width: 0 }}
          animate={isVisible ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: delay, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <Reveal>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-xl text-dark-muted max-w-2xl mx-auto">
              Versatile full-stack expertise across backend, mobile, frontend, and DevOps technologies.
            </p>
          </div>
        </Reveal>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Reveal key={category.name} delay={categoryIndex * 0.1} direction="up">
              <motion.div
                className="bg-dark-surface border border-dark-border rounded-2xl p-8"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <h3 className="text-2xl font-display font-bold mb-6 gradient-text">
                  {category.name}
                </h3>
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={categoryIndex * 0.1 + skillIndex * 0.1}
                  />
                ))}
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* Additional Skills Cloud */}
        <Reveal delay={0.6}>
          <div className="mt-16 text-center">
            <h3 className="text-xl font-display font-bold mb-8 text-dark-text">
              Additional Technologies & Tools
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'WebRTC',
                'WebSocket',
                'GraphQL',
                'REST APIs',
                'Microservices',
                'DDD',
                'CQRS',
                'Traccar',
                'BullMQ',
                'Material-UI',
                'Framer Motion',
                'WhatsApp API',
                'Payment Gateways',
                'Timefold',
                'C++',
                'Odoo',
              ].map((tech, index) => (
                <motion.span
                  key={tech}
                  className="px-4 py-2 bg-dark-elevated border border-dark-border rounded-full text-sm text-dark-muted hover:border-accent-primary hover:text-accent-primary transition-all duration-300 cursor-default"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.1 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
