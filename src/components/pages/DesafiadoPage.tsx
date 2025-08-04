"use client";

import CaseStudy from '@/components/templates/CaseStudy';
import { FinalCTA, Contact } from '@/components';
import { desafiadoCaseStudy } from '@/data/cases';
import { User, Target, Timer, TrendingUp, Code2, Database, Figma, Palette } from 'lucide-react';

export default function DesafiadoPage() {
  const caseData = desafiadoCaseStudy;

  return (
    <CaseStudy>
      <CaseStudy.Hero
        heroImage={caseData.heroImage}
        title={caseData.title}
      >
        <CaseStudy.Hero.Content>
          <CaseStudy.Hero.Title>
            {caseData.title}
          </CaseStudy.Hero.Title>
          <CaseStudy.Hero.Subtitle>
            {caseData.subtitle}
          </CaseStudy.Hero.Subtitle>
          <CaseStudy.Hero.Description>
            {caseData.description}
          </CaseStudy.Hero.Description>
          <CaseStudy.Hero.Action>
            <CaseStudy.Hero.Button
              href={caseData.appUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {caseData.ctaText}
            </CaseStudy.Hero.Button>
          </CaseStudy.Hero.Action>
        </CaseStudy.Hero.Content>
      </CaseStudy.Hero>

      <CaseStudy.Banner
        src={caseData.bannerImage}
        alt={`${caseData.title} banner`}
        title={caseData.title}
      />

      <CaseStudy.About
        title={caseData.aboutContent.title}
        subtitle={caseData.aboutContent.subtitle}
      >
        <CaseStudy.About.Content>
          <div className="flex max-w-6xl mx-auto">
            <div className="sm:max-w-[45%] overflow-hidden">
              <div className="relative h-full inline-block px-20 gradient-mask aspect-[0.84]">
                <img
                  src="/images/cases/desafiado/mobile-mockup.png" alt="Mobile mockup"
                  className="w-full object-cover"
                />

              </div>
            </div>
            <div className="flex-1">
              <img
                src="/images/cases/desafiado/about-content.svg" alt="Conteúdo sobre o Desafiado"
                className="w-full"
              />
            </div>
          </div>

        </CaseStudy.About.Content>
      </CaseStudy.About>

      <CaseStudy.Sections>
        <CaseStudy.Sections.Grid>
          <CaseStudy.Sections.Item
            icon={User}
            title="Experiência do usuário"
            index={0}
          >
            <CaseStudy.Sections.Content>
              Interface clean e intuitiva que torna o acompanhamento de metas uma experiência agradável e motivadora.
            </CaseStudy.Sections.Content>
          </CaseStudy.Sections.Item>

          <CaseStudy.Sections.Item
            icon={Target}
            title="Gamificação"
            index={1}
          >
            <CaseStudy.Sections.Content>
              Sistema de pontos, conquistas e rankings que mantém os usuários engajados e motivados.
            </CaseStudy.Sections.Content>
          </CaseStudy.Sections.Item>

          <CaseStudy.Sections.Item
            icon={Timer}
            title="Produtividade"
            index={2}
          >
            <CaseStudy.Sections.Content>
              Ferramentas de acompanhamento que ajudam a manter o foco e a consistência nas metas.
            </CaseStudy.Sections.Content>
          </CaseStudy.Sections.Item>

          <CaseStudy.Sections.Item
            icon={TrendingUp}
            title="Resultados"
            index={3}
          >
            <CaseStudy.Sections.Content>
              Analytics detalhados do progresso e insights personalizados para melhorar performance.
            </CaseStudy.Sections.Content>
          </CaseStudy.Sections.Item>
        </CaseStudy.Sections.Grid>
      </CaseStudy.Sections>

      <CaseStudy.Resources>
        <CaseStudy.Resources.List>
          <CaseStudy.Resources.Item icon={Code2} category="frontend" index={0}>
            React Native
          </CaseStudy.Resources.Item>
          <CaseStudy.Resources.Item icon={Code2} category="frontend" index={1}>
            TypeScript
          </CaseStudy.Resources.Item>
          <CaseStudy.Resources.Item icon={Database} category="backend" index={2}>
            Firebase
          </CaseStudy.Resources.Item>
          <CaseStudy.Resources.Item icon={Database} category="backend" index={3}>
            Firestore
          </CaseStudy.Resources.Item>
          <CaseStudy.Resources.Item icon={Figma} category="design" index={4}>
            Figma
          </CaseStudy.Resources.Item>
          <CaseStudy.Resources.Item icon={Palette} category="design" index={5}>
            Design System
          </CaseStudy.Resources.Item>
        </CaseStudy.Resources.List>
      </CaseStudy.Resources>

      <CaseStudy.Guidelines>
        <CaseStudy.Guidelines.Grid>
          <CaseStudy.Guidelines.Group title="Cores primárias" index={0}>
            <CaseStudy.Guidelines.Item
              name="Azul Principal"
              value="#3B82F6"
              type="color"
              preview="#3B82F6"
            />
            <CaseStudy.Guidelines.Item
              name="Verde Sucesso"
              value="#10B981"
              type="color"
              preview="#10B981"
            />
            <CaseStudy.Guidelines.Item
              name="Laranja Energia"
              value="#F59E0B"
              type="color"
              preview="#F59E0B"
            />
          </CaseStudy.Guidelines.Group>

          <CaseStudy.Guidelines.Group title="Tipografia" index={1}>
            <CaseStudy.Guidelines.Item
              name="Título Principal"
              value="Inter Bold 24px"
              type="font"
            />
            <CaseStudy.Guidelines.Item
              name="Subtítulo"
              value="Inter Medium 18px"
              type="font"
            />
            <CaseStudy.Guidelines.Item
              name="Corpo"
              value="Inter Regular 16px"
              type="font"
            />
          </CaseStudy.Guidelines.Group>
        </CaseStudy.Guidelines.Grid>
      </CaseStudy.Guidelines>

      <FinalCTA
        title="Gostou do que viu?"
        subtitle="Vamos criar algo incrível para o seu negócio também."
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

      <Contact>
        <Contact.Container>
          <Contact.Info
            title="Pronto para o próximo projeto?"
            subtitle="Conte com a Pluie para criar sua próxima solução digital de sucesso."
            showLogo={true}
          />
          <Contact.Form 
            submitButtonText="Iniciar projeto"
            serviceOptions={[
              'Aplicativo mobile',
              'Sistema web',
              'Site institucional',
              'E-commerce',
              'Consultoria em UX/UI',
              'Automações',
              'Outro (descrever abaixo)'
            ]}
          />
        </Contact.Container>
      </Contact>
    </CaseStudy>
  );
}
