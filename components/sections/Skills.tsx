'use client';

import { Reveal } from '@/components/animations/Reveal';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const skillCategories = [
  {
    name: 'Backend Development',
    skills: [
      { name: 'Node.js/NestJS', level: 90 },
      { name: 'Java/Quarkus', level: 88 },
      { name: 'Spring Boot', level: 85 },
      { name: 'Laravel/PHP', level: 80 },
    ],
  },
  {
    name: 'Database & Caching',
    skills: [
      { name: 'PostgreSQL', level: 90 },
      { name: 'Redis/BullMQ', level: 85 },
      { name: 'MySQL', level: 82 },
      { name: 'TypeORM/Prisma', level: 88 },
    ],
  },
  {
    name: 'Frontend & Web',
    skills: [
      { name: 'React/Next.js', level: 88 },
      { name: 'TypeScript', level: 92 },
      { name: 'Angular', level: 78 },
      { name: 'Tailwind CSS', level: 90 },
    ],
  },
  {
    name: 'DevOps & Mobile',
    skills: [
      { name: 'Docker', level: 85 },
      { name: 'Git/CI-CD', level: 90 },
      { name: 'Flutter (Available)', level: 80 },
      { name: 'Minikube/K8s', level: 65 },
    ],
  },
];

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div ref={ref as any} className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-[var(--text)]">{name}</span>
        <span className="text-sm text-[var(--muted)]">{level}%</span>
      </div>
      <div className="h-2 bg-[var(--elevated)] rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{
            background: 'linear-gradient(90deg, var(--accent), var(--accent-secondary))',
          }}
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
    <section id="skills" className="relative py-32 px-6 overflow-hidden bg-[var(--bg)]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <Reveal>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-[var(--text)]">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto">
              Backend-focused full-stack expertise with modern web technologies and DevOps practices.
            </p>
          </div>
        </Reveal>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Reveal key={category.name} delay={categoryIndex * 0.1} direction="up">
              <motion.div
                className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-8"
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
            <h3 className="text-xl font-display font-bold mb-8 text-[var(--text)]">
              Additional Technologies & Tools
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Timefold',
                'WebSocket',
                'GraphQL',
                'REST APIs',
                'Microservices',
                'WhatsApp API',
                'Odoo',
                'Express.js',
                'Fastify',
                'Docker Swarm',
                'Material-UI',
                'Framer Motion',
                'WebRTC',
                'Streaming',
                'BullMQ',
                'RabbitMQ',
                'Nginx',
                'Linux',
                'Open-Source',
                'Clean Architecture',
              ].map((tech, index) => (
                <motion.span
                  key={tech}
                  className="px-4 py-2 bg-[var(--elevated)] border border-[var(--border)] rounded-full text-sm text-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-300 cursor-default"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.03 }}
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
