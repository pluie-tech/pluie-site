"use client";

import CaseStudy from '@/components/templates/CaseStudy';
import { FinalCTA, Contact } from '@/components';
import { desafiadoCaseStudy } from '@/data/cases';
import { WandSparkles, TrendingUp, Code2, Database, Figma, Palette, Star, BellRing } from 'lucide-react';

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
            <CaseStudy.CTA.Button
              href={caseData.appUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {caseData.ctaText}
            </CaseStudy.CTA.Button>
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

      <CaseStudy.Sections
        title={caseData.sections.title}
        className='bg-gradient-to-b from-[#E1EFF8]/60 to-[#E0F8ED]/60'
        preSection={
          caseData.sections.image ? (
          <div className="flex justify-center mb-6">
            <div
              className="border-4 border-white rounded-full p-4 flex items-center justify-center mb-6"
              style={{
                backgroundColor: '#eff7fd'
              }}
            >
              <img
                src={caseData.sections.image}
                alt={`${caseData.title} section`}
                width={64}
                height={64}
                className="w-16 h-16 object-cover rounded-2xl"
              />
            </div>
          </div>
        ) : null}
      >
        <CaseStudy.Sections.Grid>
          {caseData.sections.items.map((sectionItem, index) => (
            <CaseStudy.Sections.Item
              key={index}
              icon={sectionItem.icon}
              title={sectionItem.title}
              index={index}
            >
              {sectionItem.items
                ? (
                  <>
                    <p className="text-gray-neutral sm:text-lg mb-6">{sectionItem.content}</p>
                    <div className="grid grid-cols-5 sm:grid-cols-10 md:grid-cols-5 gap-2">
                      {sectionItem.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex flex-col items-center mb-6">
                          <div
                            className="aspect-square h-12 rounded-[45%] flex items-center justify-center mb-2"
                            style={{ backgroundColor: item.color }}
                          >
                            <item.icon className="w-5 h-5 text-white" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )
                : (
                  <p className="text-gray-neutral sm:text-lg">{sectionItem.content}</p>
                )
              }
            </CaseStudy.Sections.Item>
          ))}

        </CaseStudy.Sections.Grid>

        <div className="flex justify-center mt-10">
          <CaseStudy.CTA.Button
            href={caseData.appUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {caseData.ctaText}
          </CaseStudy.CTA.Button>
        </div>
      </CaseStudy.Sections>

      <CaseStudy.Resources title='Recursos' className="bg-background">
        <CaseStudy.Resources.List>
          {caseData.resources.map((resource, index) => (
            <CaseStudy.Resources.Item
              key={index}
              icon={resource.icon}
              label={resource.name}
            />
          ))}
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
