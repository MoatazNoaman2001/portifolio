'use client';

import { CustomCursor } from '@/components/animations/CustomCursor';
import { Navigation } from '@/components/layout/Navigation';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { ExperienceTimeline } from '@/components/sections/ExperienceTimeline';
import { Work } from '@/components/sections/Work';
import { Skills } from '@/components/sections/Skills';
import { Contact } from '@/components/sections/Contact';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

export default function Home() {
  useSmoothScroll();

  return (
    <main className="relative min-h-screen">
      <CustomCursor />
      <Navigation />
      <Hero />
      <About />
      <ExperienceTimeline />
      <Work />
      <Skills />
      <Contact />
    </main>
  );
}
