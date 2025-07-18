"use client";

import { motion } from 'motion/react';
import { Hero, Services, FinalCTA, Contact, BaseLayout, Section, BackToHomeButton } from '@/components';
import { Service } from '@/types';
import { Lightbulb, LucideIcon, Shrub, Target, Timer } from 'lucide-react';
import { WhatsAppIcon } from '@/components';
import { siteConfig } from '@/siteConfig';
import { generateImageUrl } from '@/lib/utils';
import Button from '@/components/ui/Button';

type TargetAudience = {
  icon: LucideIcon,
  name: string,
}

const webServicesData: Service = {
  imagePath: '/services/applications.jpg',
  features: [
    {
      title: 'Entrega rápida',
      description: 'Site pronto em poucas semanas, não em meses.',
      icon: Timer
    },
    {
      title: 'Pronto para crescer',
      description: 'Ótima usabilidade e estrutura sólida, feito para durar e crescer com o seu negócio.',
      icon: Shrub
    },
    {
      title: 'Monitore os resultados',
      description: 'Acompanhe o desempenho através de ferramentas de Analytics.',
      icon: Target
    }
  ]
};

const targetAudience: TargetAudience[] = [
  {
    icon: Lightbulb,
    name: 'Pet shops e clínicas veterinárias',
  },
  {
    icon: Lightbulb,
    name: 'Imobiliárias e incorporadoras',
  },
  {
    icon: Lightbulb,
    name: 'Consultórios e clínicas médicas',
  },
  {
    icon: Lightbulb,
    name: 'Escritórios de advocacia',
  },
  {
    icon: Lightbulb,
    name: 'Negócios locais e prestadores de serviço',
  },
];

const howWeWorkSteps = [
  'Entendimento do negócio',
  'Arquitetura e experiência do usuário',
  'Design visual e responsivo',
  'Implementação leve e escalável',
  'SEO técnico e integração com ferramentas como WhatsApp, Google Maps e Analytics'
];

export default function SolutionsPage() {
  return (
    <BaseLayout footerSticky={true}>
      <div className="bg-gradient-to-b from-[#E1EFF8]/60 to-[#E0F8ED]/60 relative z-10">

      <BackToHomeButton />

        <Hero id="solutions-hero" className="bg-transparent p-0">
          <Hero.Content className="py-8!">
            <Hero.Title className="text-foreground">
              Site profissional para empresas
            </Hero.Title>
            <Hero.Subtitle className="text-foreground">
              Criamos sites que unem performance, identidade visual e experiência do usuário. Da arquitetura à publicação, entregamos soluções pensadas para atrair, converter e fidelizar seus clientes.
            </Hero.Subtitle>
            <Hero.Action>
              <Button
                href={siteConfig.whatsappLink}
                leftIcon={WhatsAppIcon}
                target="_blank"
                rel="noopener noreferrer"
              >
                Começar meu projeto
              </Button>
            </Hero.Action>
          </Hero.Content>
        </Hero>

        <Section id="web-solutions" className="bg-transparent mb-8 sm:mb-10 lg:mb-15">
          <div className="px-2 sm:px-8 xl:px-0">
            <Services.List className="max-w-7xl mx-auto">
              <Services.Item
                features={webServicesData.features}
                imagePath={webServicesData.imagePath ? generateImageUrl(webServicesData.imagePath, 280) : undefined}
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
              <h4 className="font-heading font-black text-[40px] leading-small tracking-title mb-9">Pra quem é</h4>
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
              <h4 className="font-heading font-black text-[40px] leading-small tracking-title mb-3">Como fazemos</h4>
              <p className="text-lg mb-5 sm:mb-10 leading-body">Cada projeto é único. Nosso processo é colaborativo, direto e técnico:</p>
              <div className="grid gap-8">
                {howWeWorkSteps.map((step, index) => (
                  <div key={index} className="flex items-center space-x-2 relative">
                    <motion.div
                      className="flex items-start justify-start"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true, amount: 'some' }}
                      transition={{ duration: 0.4, delay: 0.1 + index * 0.05, ease: 'easeOut' }}
                    >
                      <span
                        className="flex-shrink-0 inline-flex items-center mt-px justify-center bg-azulao text-background w-8 h-8 rounded-[12px] p-[6px] mr-4"
                      >
                        {index + 1}
                      </span>
                      <h6 className="text-2xl font-semibold text-azulao">{step}</h6>
                    </motion.div>
                    {index < howWeWorkSteps.length - 1 && <div className="absolute top-[33px] left-[15px] border-l-2 h-full border-dashed border-azulao"></div>}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </Section>
        
        <FinalCTA
          title="Agende uma conversa gratuita"
          subtitle="A gente escuta, entende e mostra como pode ajudar."
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
            title="Quer um site profissional?"
            subtitle="Fale com a Pluie e receba uma proposta sob medida."
            showLogo={true}
          />
          <Contact.Form 
            submitButtonText="Solicitar proposta"
            serviceOptions={[
              'Site institucional',
              'E-commerce',
              'Landing page',
              'Aplicação web',
              'Redesign de site existente',
              'Consultoria em performance',
              'Outro (descrever abaixo)'
            ]}
          />
        </Contact.Container>
      </Contact>
    </BaseLayout>
  );
}
