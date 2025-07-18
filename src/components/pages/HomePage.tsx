"use client";

import { Hero, About, HowItWorks, Services, FinalCTA, Contact, BaseLayout } from '@/components';
import { servicesData } from '@/components/sections/Services';
import { WhatsAppFAB } from '@/components/ui/WhatsAppFAB';
import Button from '@/components/ui/Button';
import { WhatsAppIcon } from '@/components';
import { siteConfig } from '@/siteConfig';

export default function HomePage() {
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
              /images/800/hero.png 800w,
               /images/720/hero.png 720w,
              /images/1024/hero.png 1024w,
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
                aria-label='Fale conosco'
              >
                Agende uma conversa
              </Button>
            </Hero.Action>
          </Hero.Content>
        </Hero>
        <About />
        <HowItWorks />
        <Services
          id="solucoes"
          title="Soluções"
          subtitle="De sites a sistemas completos, desenvolvemos o que o seu negócio precisa. Sempre sob medida, para resolver seu desafio."
          color="black"
          rounded="top"
        >
          <Services.List>
            {servicesData.map((service, index) => (
              <Services.Item
                key={index}
                title={service.title}
                description={service.description}
                features={service.features}
                imagePath={service.imagePath}
                inverted={true}
                index={index}
              />
            ))}
          </Services.List>
        </Services>
        <FinalCTA
          title="Agende uma conversa gratuita"
          subtitle="A gente escuta, entende e mostra como pode ajudar."
        >
          <FinalCTA.Action>
            <FinalCTA.Button>
              Fale conosco
            </FinalCTA.Button>
          </FinalCTA.Action>
        </FinalCTA>
        <Contact>
          <Contact.Container>
            <Contact.Info
              title="Pronto para começar seu projeto?"
              subtitle="Conte com a Pluie para desenvolver ou aprimorar sua solução digital."
            />
            <Contact.Form />
          </Contact.Container>
        </Contact>
        <WhatsAppFAB />
      </main>
    </BaseLayout>
  );
}
