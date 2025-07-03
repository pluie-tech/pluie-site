"use client";

import { Hero, About, HowItWorks, Services, Testimonials, LatestWorks, FinalCTA, Contact } from '@/components';
import { siteContent } from '@/content';

export default function Home() {
  const { hero, aboutUs, howItWorks, solutions, testimonials, latestWorks, finalCta, contact } = siteContent.page;

  return (
    <main className="overflow-hidden">
      <Hero
        title={hero.title}
        subtitle={hero.subtitle}
        ctaText={hero.ctaButton.text}
        ctaLink="#contato"
        backgroundImage='/images/hero.png'
      />
      <About {...aboutUs} />
      <HowItWorks {...howItWorks} />
      <Services {...solutions} />
      <Testimonials {...testimonials} />
      <LatestWorks {...latestWorks} />
      <FinalCTA {...finalCta} />
      <Contact {...contact} />
    </main>
  );
}
