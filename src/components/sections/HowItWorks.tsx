'use client'

import { BicepsFlexed, Calendar, CalendarCheck, FileText } from 'lucide-react'
import IconWrapper from '../ui/IconWrapper'
import Section from '../Section'
import { motion } from 'motion/react'
import Button from '../ui/Button'
import { siteConfig } from '@/siteConfig'

export default function HowItWorks() {
  const title = 'Como funciona';
  const subtitle = 'Sem burocracia. Resolvemos junto com você, passo a passo:';
  const steps = [
    {
      icon: CalendarCheck,
      title: 'Agende uma conversa gratuita',
      description: 'Nos conte o que você precisa - sem compromisso.',
      ctaButton: {
        text: 'Agendar',
        icon: Calendar,
        link: siteConfig.whatsappLink
      }
    },
    {
      icon: FileText,
      title: 'Receba uma proposta personalizada',
      description: 'Analisamos sua demanda e montamos a nossa melhor solução pra você.'
    },
    {
      icon: BicepsFlexed,
      title: 'A gente põe a mão na massa',
      description: 'Você acompanha o progresso e vê sua ideia virar realidade.'
    }
  ];

  return (
    <Section
      id="como-funciona"
      title={title}
      subtitle={subtitle}
      className="px-2 py-8 sm:px-8 sm:py-15"
    >
      <motion.div
        className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-3 bg-border rounded-3xl px-5 py-9 sm:py-10 sm:px-20 xl:py-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 'some' }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 'some' }}
            transition={{ duration: 0.4, delay: index * 0.3, ease: 'easeOut' }}
          >
            <div className="flex">
              <div className="md:hidden left-0 top-0 w-12 mr-2 translate-y-1 shrink-0">
                <motion.div
                  className="flex items-center justify-start"
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 'some' }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.1, ease: 'easeOut' }}
                >
                  <IconWrapper icon={step.icon} size="medium" />
                </motion.div>
                {index < steps.length - 1 && <div className="absolute top-[30px] left-4 border-l-2 h-full border-dashed border-azulao"></div>}
              </div>

              <div className="md:text-center">
                <div className="hidden md:block">
                  <motion.div
                    className="flex items-center justify-center mb-6 xl:mb-9"
                    initial={{ opacity: 0, scale: 0.7 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 'some' }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.1, ease: 'easeOut' }}
                  >
                    <IconWrapper icon={step.icon} size="large" className="z-20" />
                  </motion.div>
                  {index > 0 && <div className="absolute left-[calc(-50%-33px)] top-[31px] w-full border-t-2 border-dashed border-azulao z-10"></div>}
                </div>

                <motion.h3
                  className="text-2xl font-heading font-semibold mb-4 text-azulao leading-[110%] tracking-title max-w-72 md:mx-auto xl:text-[32px]"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 'some' }}
                  transition={{ duration: 0.4, delay: index * 0.2 + 0.1, ease: 'easeOut' }}
                >
                  {step.title}
                </motion.h3>

                <motion.p
                  className="text-xl sm:text-lg xl:text-2xl max-w-80 md:mx-auto"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 'some' }}
                  transition={{ duration: 0.4, delay: index * 0.2 + 0.2, ease: 'easeOut' }}
                >
                  {step.description}
                </motion.p>

                {step.ctaButton && (
                  <motion.div
                    className="mt-6 xl:mt-9"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 'some' }}
                    transition={{ duration: 0.4, delay: index * 0.2 + 0.3, ease: 'easeOut' }}
                  >
                    <Button href={step.ctaButton.link} leftIcon={step.ctaButton.icon} target="_blank" rel="noopener noreferrer">
                      {step.ctaButton.text}
                    </Button>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}
