"use client";

import { Hero, About, HowItWorks, Services, FinalCTA, Contact, BaseLayout } from '@/components';
import { WhatsAppFAB } from '@/components/ui/WhatsAppFAB';
import Button from '@/components/ui/Button';
import { WhatsAppIcon } from '@/components';
import { siteConfig } from '@/siteConfig';

export default function Home() {
  return (
    <BaseLayout footerSticky={true}>
      <main className="overflow-hidden relative z-20">
        <Hero id="home">
          <Hero.BackgroundImage
            src="/images/full/hero.png"
            alt="Background da seção Hero"
            srcSet={`
              /images/400/hero.png 400w,
              /images/480/hero.png 480w,
              /images/640/hero.png 640w,
              /images/720/hero.png 720w,
              /images/1024/hero.png 1024w,
              /images/1200/hero.png 1200w,
              /images/full/hero.png 1400w
            `}
            fetchPriority="high"
          />
          <Hero.Content>
            <Hero.Title>
              Tecnologia que resolve, sem complicar.
            </Hero.Title>
            <Hero.Subtitle>
              Entendemos as necessidades da sua empresa e criamos soluções digitais sob medida para promover eficiência e crescimento.
            </Hero.Subtitle>
            <Hero.Action>
              <Button
                href={siteConfig.whatsappLink}
                leftIcon={WhatsAppIcon}
                target="_blank"
                rel="noopener noreferrer"
              >
                Agende uma conversa
              </Button>
            </Hero.Action>
          </Hero.Content>
        </Hero>
        <About />
        <HowItWorks />
        <Services />
        <FinalCTA />
        <Contact />
        <WhatsAppFAB />
      </main>
    </BaseLayout>
  );
}
