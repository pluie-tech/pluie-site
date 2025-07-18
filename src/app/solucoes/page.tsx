"use client";

import { Hero, About, HowItWorks, Services, FinalCTA, Contact, BaseLayout } from '@/components';
import Button from '@/components/ui/Button';
import { Home } from 'lucide-react';
import { WhatsAppIcon } from '@/components';
import { siteConfig } from '@/siteConfig';

export default function SolutionsPage() {
  return (
    <BaseLayout footerSticky={true}>
      <div className="flex justify-center mt-4 md:mt-6 lg:mt-8">
        <Button variant="outline" leftIcon={Home} href="/">
          Voltar para a página inicial
        </Button>
      </div>
      
      <Hero id="solutions-hero">
        <Hero.Content>
          <Hero.Title>
            Site profissional para empresas
          </Hero.Title>
          <Hero.Subtitle>
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
      
      <About />
      <HowItWorks />
      <Services />
      <FinalCTA />
      <Contact />
    </BaseLayout>
  );
}
