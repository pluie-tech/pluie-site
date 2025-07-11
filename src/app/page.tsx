"use client";

import { Hero, About, HowItWorks, Services, FinalCTA, Contact, BaseLayout } from '@/components';
import { WhatsAppFAB } from '@/components/ui/WhatsAppFAB';

export default function Home() {
  return (
    <BaseLayout footerSticky={true}>
      <Hero />
      <About />
      <HowItWorks />
      <Services />
      <FinalCTA />
      <Contact />
      <WhatsAppFAB />
    </BaseLayout>
  );
}
