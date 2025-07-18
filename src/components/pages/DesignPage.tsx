"use client";

import { motion } from 'motion/react';
import { Hero, Services, FinalCTA, Contact, BaseLayout, Section, BackToHomeButton } from '@/components';
import { Service } from '@/types';
import { Lightbulb, LucideIcon, Palette, Monitor, Layers } from 'lucide-react';
import { WhatsAppIcon } from '@/components';
import { siteConfig } from '@/siteConfig';
import { generateImageUrl } from '@/lib/utils';
import Button from '@/components/ui/Button';

type TargetAudience = {
  icon: LucideIcon,
  name: string,
}

const designServicesData: Service = {
  imagePath: '/services/identity.jpg',
  features: [
    {
      title: 'Criação de identidade visual',
      description: 'Logo, paleta de cores, tipografia e guia de aplicação da marca.',
      icon: Palette
    },
    {
      title: 'UX/UI Design para sites e sistemas',
      description: 'Interfaces intuitivas focadas na experiência do usuário.',
      icon: Monitor
    },
    {
      title: 'Prototipação e wireframes interativos',
      description: 'Validação de ideias antes do desenvolvimento.',
      icon: Layers
    }
  ]
};

const targetAudience: TargetAudience[] = [
  {
    icon: Lightbulb,
    name: 'Empresas lançando uma nova marca',
  },
  {
    icon: Lightbulb,
    name: 'Negócios que querem reposicionar sua comunicação',
  },
  {
    icon: Lightbulb,
    name: 'Sistemas e produtos digitais que precisam melhorar usabilidade',
  },
  {
    icon: Lightbulb,
    name: 'Equipes que precisam de consistência visual entre canais',
  },
];

export default function DesignPage() {
  return (
    <BaseLayout footerSticky={true}>
      <div className="bg-gradient-to-b from-[#E1EFF8]/60 to-[#E0F8ED]/60 relative z-10">

        <BackToHomeButton />

        <Hero id="design-hero" className="bg-transparent p-0">
          <Hero.Content className="py-8!">
            <Hero.Title className="text-foreground">
              Design estratégico pela Pluie
            </Hero.Title>
            <Hero.Subtitle className="text-foreground">
              Design que comunica, fideliza e diferencia
            </Hero.Subtitle>
            <motion.p 
              className="mt-4 text-lg leading-body text-foreground max-w-xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.25, ease: "easeOut" }}
            >
              A identidade visual e a experiência do seu site ou sistema são o primeiro ponto de contato com o cliente. Criamos marcas e interfaces coerentes, limpas e memoráveis.
            </motion.p>
            <Hero.Action>
              <Button
                href={siteConfig.whatsappLink}
                leftIcon={WhatsAppIcon}
                target="_blank"
                rel="noopener noreferrer"
                aria-label='Fale conosco'
              >
                Começar meu projeto
              </Button>
            </Hero.Action>
          </Hero.Content>
        </Hero>

        <Section id="design-services" className="bg-transparent mb-8 sm:mb-10 lg:mb-15">
          <div className="px-2 sm:px-8 xl:px-0">
            <Services.List className="max-w-7xl mx-auto">
              <Services.Item
                features={designServicesData.features}
                imagePath={designServicesData.imagePath ? generateImageUrl(designServicesData.imagePath, 280) : undefined}
                imageSize={280}
                inverted
              />
            </Services.List>
          </div>
        </Section>

        <Section id="target-audience" className="bg-background py-10 xl:py-15 2xl:py-20" contentClassName='mt-0'>
          <motion.div
            className="mx-auto max-w-7xl grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-9 px-5 sm:px-8 xl:px-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 'some' }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            <div>
              <h4 className="font-heading font-black text-[40px] leading-small tracking-title mb-9">Para quem é</h4>
              <div className="grid grid-cols-1 gap-6">
                {targetAudience.map((audience, index) => (
                  <motion.div
                    key={audience.name}
                    className="flex items-center space-x-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 'some' }}
                    transition={{ duration: 0.4, delay: 0.1 + index * 0.05, ease: 'easeOut' }}
                  >
                    <audience.icon className="h-8 w-8 text-foreground flex-shrink-0" />
                    <span className="text-2xl text-foreground leading-body">{audience.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl bg-border p-8 lg:p-12">
              <h4 className="font-heading font-black text-[40px] leading-small tracking-title mb-3">Por que importa</h4>
              <p className="text-lg mb-5 sm:mb-10 leading-body">
                O design não é apenas estética – é estratégia. Uma identidade visual forte e uma experiência de usuário bem planejada:
              </p>
              <div className="grid gap-6">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-azulao rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-lg leading-body">Aumenta reconhecimento e confiança da marca</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-azulao rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-lg leading-body">Melhora conversões e reduz abandono</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-azulao rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-lg leading-body">Diferencia da concorrência</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-azulao rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-lg leading-body">Facilita comunicação entre equipes</span>
                </div>
              </div>
            </div>
          </motion.div>
        </Section>
        
        <FinalCTA
          title="Agende uma conversa gratuita"
          subtitle="Deixe a Pluie criar algo que represente você com clareza e sofisticação."
          color="black"
          rounded="full"
          className="py-13 sm:py-15 lg:py-20"
        >
          <FinalCTA.Action>
            <FinalCTA.Button>
              Fale conosco
            </FinalCTA.Button>
          </FinalCTA.Action>
        </FinalCTA>
      </div>
      <Contact>
        <Contact.Container>
          <Contact.Info
            title="Precisa de design estratégico?"
            subtitle="Fale com a Pluie e receba uma proposta personalizada."
            showLogo={true}
          />
          <Contact.Form 
            submitButtonText="Solicitar proposta"
            serviceOptions={[
              'Identidade visual completa',
              'Logo e aplicações',
              'UX/UI Design',
              'Redesign de interface',
              'Prototipação',
              'Consultoria em design',
              'Outro (descrever abaixo)'
            ]}
          />
        </Contact.Container>
      </Contact>
    </BaseLayout>
  );
}
