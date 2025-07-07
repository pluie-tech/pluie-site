"use client";

import { Hero, About, HowItWorks, Services, Testimonials, LatestWorks, FinalCTA, Contact } from '@/components';


export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <About />
      <HowItWorks />
      <Services />
      <FinalCTA />
      <Testimonials />
      <LatestWorks />
      <Contact />
    </main>
  );
}
