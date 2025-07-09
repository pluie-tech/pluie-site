"use client";

import { Hero, About, HowItWorks, Services, FinalCTA, Contact } from '@/components';
import { WhatsAppFAB } from '@/components/ui/WhatsAppFAB';

export default function Home() {
  return (
    <main className="overflow-hidden mb-[630px] lg:mb-[284px] relative z-20">
      <Hero />
      <About />
      <HowItWorks />
      <Services />
      <FinalCTA />
      <Contact />
      <WhatsAppFAB />
    </main>
  );
}
