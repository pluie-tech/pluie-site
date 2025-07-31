"use client";

import { motion } from 'motion/react';
import { Hero, Services, FinalCTA, Contact, BaseLayout, Section, BackToHomeButton } from '@/components';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import { generateImageUrl } from '@/lib/utils';
import { generateBreadcrumbSchema, generateServiceSchema, serializeSchema } from '@/lib/schema';
import { webServicesData } from '@/data/services';
import { sitesTargetAudience, sitesWorkflowSteps } from '@/data/sites';

export default function SitesPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://pluie.com.br' },
    { name: 'Sites', url: 'https://pluie.com.br/sites' }
  ]);

  const serviceSchema = generateServiceSchema({
    name: 'Desenvolvimento de Sites Profissionais',
    description: 'Criamos sites que unem performance, identidade visual e experiência do usuário. Da arquitetura à publicação, entregamos soluções pensadas para atrair, converter e fidelizar seus clientes.',
    url: 'https://pluie.com.br/sites',
    provider: {
      name: 'Pluie',
      url: 'https://pluie.com.br'
    },
    serviceType: 'Web Development'
  });

  return (
    <BaseLayout footerSticky={true}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeSchema(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeSchema(serviceSchema) }}
      />
      <div className="bg-gradient-to-b from-[#E1EFF8]/60 to-[#E0F8ED]/60 relative z-10">

      <BackToHomeButton />

        <Hero id="sites-hero" className="bg-transparent p-0">
          <Hero.Content className="py-8!">
            <Hero.Title className="text-foreground">
              Site profissional para empresas
            </Hero.Title>
            <Hero.Subtitle className="text-foreground">
              Criamos sites que unem performance, identidade visual e experiência do usuário. Da arquitetura à publicação, entregamos soluções pensadas para atrair, converter e fidelizar seus clientes.
            </Hero.Subtitle>
            <Hero.Action>
              <WhatsAppButton
                text="Começar meu projeto"
                messageType="sites"
              />
            </Hero.Action>
          </Hero.Content>
        </Hero>

        <Section id="web-sites" className="bg-transparent mb-8 sm:mb-10 lg:mb-15">
          <div className="px-2 sm:px-8 xl:px-0">
            <Services.List className="max-w-7xl mx-auto">
              <Services.Item
                features={webServicesData.features}
                imagePath={webServicesData.imagePath ? generateImageUrl(webServicesData.imagePath, 280) : undefined}
                imageSize={280}
                initialHeading={2}
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
                {sitesTargetAudience.map((audience, index) => (
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
                {sitesWorkflowSteps.map((step, index) => (
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
                    {index < sitesWorkflowSteps.length - 1 && <div className="absolute top-[33px] left-[15px] border-l-2 h-full border-dashed border-azulao"></div>}
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
