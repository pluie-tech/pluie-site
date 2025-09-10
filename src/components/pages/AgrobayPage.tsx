'use client'

import CaseStudy from '@/components/templates/CaseStudy'
import { FinalCTA, Contact } from '@/components'
import { agrobayCaseStudy } from '@/data/cases'
import { Titillium_Web } from 'next/font/google'
import { cn } from '@/lib/utils'

const Titillium = Titillium_Web({
  variable: '--font-titillium',
  weight: ['300', '700', '900'],
  subsets: ['latin']
})

export default function AgrobayPage() {
  const caseData = agrobayCaseStudy

  return (
    <CaseStudy>
      <CaseStudy.Hero heroImage={caseData.heroImage} title={caseData.title} className="bg-[#E5F6F5]">
        <CaseStudy.Hero.Content>
          <CaseStudy.Hero.Title>{caseData.title}</CaseStudy.Hero.Title>
          <CaseStudy.Hero.Subtitle>{caseData.subtitle}</CaseStudy.Hero.Subtitle>
          <CaseStudy.Hero.Description>{caseData.description}</CaseStudy.Hero.Description>
        </CaseStudy.Hero.Content>
      </CaseStudy.Hero>

      <CaseStudy.Banner src={caseData.bannerImage} alt={`${caseData.title} banner`} title={caseData.title} />

      <CaseStudy.About title={caseData.aboutContent.title} subtitle={caseData.aboutContent.subtitle}>
        <CaseStudy.About.Content>
          <div className="flex max-w-6xl mx-auto">
            <div className="sm:max-w-[45%] overflow-hidden">
              <div className="relative h-full inline-block px-20 gradient-mask aspect-[0.84]">
                <img src="/images/cases/agrobay/mobile-mockup.png" alt="Mobile mockup" className="w-full object-cover relative z-1" />
                <div className="absolute top-0 left-0 w-full h-full z-0">
                  <svg viewBox="0 0 100 100" className="absolute top-20 left-12 w-8" preserveAspectRatio="xMidYMid meet" role="img">
                    <circle cx="50" cy="50" r="50" fill="#D8EDF6" />
                  </svg>

                  <svg viewBox="0 0 100 100" className="absolute w-16 top-30 right-18" preserveAspectRatio="xMidYMid meet" role="img">
                    <circle cx="50" cy="50" r="50" fill="#D8EDF6" />
                  </svg>

                  <svg viewBox="0 0 100 100" className="absolute w-24 left-8 bottom-20" preserveAspectRatio="xMidYMid meet" role="img">
                    <circle cx="50" cy="50" r="50" fill="#D8EDF6" />
                  </svg>

                  <svg viewBox="0 0 100 100" className="absolute w-5 top-80 right-12" preserveAspectRatio="xMidYMid meet" role="img">
                    <circle cx="50" cy="50" r="50" fill="#D8EDF6" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <img
                src="/images/cases/agrobay/about-content-completed.png" alt="Conteúdo sobre o Agrobay"
                className="w-full"
              />
            </div>
          </div>
        </CaseStudy.About.Content>
      </CaseStudy.About>

      <CaseStudy.Sections
        title={caseData.sections.title}
        className="bg-gradient-to-b from-[#E1EFF8]/60 to-[#E0F8ED]/60"
        preSection={
          caseData.sections.image ? (
            <div className="flex justify-center mb-2 sm:mb-4 lg:mb-6">
              <img src={caseData.sections.image} alt={`${caseData.title} section`} width={100} height={100} className="w-25 h-25 object-cover rounded-2xl" />
            </div>
          ) : null
        }
      >
        <CaseStudy.Sections.Grid>
          {caseData.sections.items.map((sectionItem, index) => (
            <CaseStudy.Sections.Item key={index} icon={sectionItem.icon} title={sectionItem.title} index={index}>
              {sectionItem.items ? (
                <>
                  <p className="text-gray-neutral sm:text-lg mb-6">{sectionItem.content}</p>
                  <div className="grid grid-cols-5 sm:grid-cols-10 md:grid-cols-5 gap-2">
                    {sectionItem.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex flex-col items-center mb-1">
                        <div className="aspect-square h-12 rounded-[45%] flex items-center justify-center mb-2" style={{ backgroundColor: item.color }}>
                          <item.icon className="w-5 h-5 text-white" />
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <p className="text-gray-neutral sm:text-lg">{sectionItem.content}</p>
              )}
            </CaseStudy.Sections.Item>
          ))}
        </CaseStudy.Sections.Grid>

        <div className="flex justify-center mt-10">
          <CaseStudy.CTA.Button href={caseData.appUrl} target="_blank" rel="noopener noreferrer">
            {caseData.ctaText}
          </CaseStudy.CTA.Button>
        </div>
      </CaseStudy.Sections>

      <CaseStudy.Guidelines title="Linha visual" subtitle="Amigável, limpa, contrastante, boa legibilidade e redução da fadiga visual.">
        <div className="flex justify-center">
          <div className="w-full sm:w-auto flex flex-col-reverse sm:grid grid-cols-2 gap-2">
            <div>
              <div className="bg-border p-8 rounded-4xl">
                <p className="text-sm text-gray-neutral leading-body mb-2">Tipografia</p>
                <div>
                  <p className={cn('font-bold tracking-title text-[40px]', Titillium.variable, 'leading-tight')} style={{ fontFamily: 'var(--font-titillium)' }}>
                    Titillium Web
                  </p>
                  <span className={cn('font-extrabold tracking-title text-[100px]', Titillium.variable, 'leading-tight')} style={{ fontFamily: 'var(--font-titillium)' }}>
                    A
                  </span>
                  <span className={cn('font-light tracking-title text-[100px]', Titillium.variable, 'leading-tight')} style={{ fontFamily: 'var(--font-titillium)' }}>
                    a
                  </span>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-border p-8 rounded-4xl">
                <p className="text-sm text-gray-neutral leading-body mb-3">Cores</p>
                <div>
                  <img src="/images/cases/agrobay/colors-grid.svg" className="w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </CaseStudy.Guidelines>

      <FinalCTA title="Agende uma conversa gratuita" subtitle="A gente escuta, entende e mostra como pode ajudar." color="black" rounded="full" className="py-13 sm:py-15 lg:py-20">
        <FinalCTA.Action>
          <FinalCTA.Button>Fale conosco</FinalCTA.Button>
        </FinalCTA.Action>
      </FinalCTA>

      <Contact color="white">
        <Contact.Container>
          <Contact.Info title="Quer um app profissional?" subtitle="Fale com a Pluie e receba uma proposta sob medida." showLogo={true} />
          <Contact.Form
            submitButtonText="Solicitar proposta"
            serviceOptions={['Aplicativo mobile', 'Sistema web', 'Site institucional', 'E-commerce', 'Consultoria em UX/UI', 'Automações', 'Outro (descrever abaixo)']}
          />
        </Contact.Container>
      </Contact>
    </CaseStudy>
  )
}
