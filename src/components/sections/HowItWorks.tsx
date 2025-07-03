import { LucideIcon } from 'lucide-react'
import IconWrapper from '../ui/IconWrapper'
import CTAButton from '../ui/CTAButton'
import Section from '../Section'
import { motion } from 'motion/react'

export interface HowItWorksStep {
  icon: LucideIcon
  title: string
  description: string
  ctaButton?: {
    text: string
    icon?: LucideIcon
  }
}

export interface HowItWorksProps {
  title: string
  subtitle: string
  steps: HowItWorksStep[]
}

export default function HowItWorks({
  title,
  subtitle,
  steps
}: HowItWorksProps) {
  return (
    <Section id="como-funciona" title={title} subtitle={subtitle}>
      <motion.div 
        className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 bg-border rounded-3xl px-5 py-9 sm:py-10 xl:py-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {steps.map((step, index) => (
          <motion.div 
            key={index} 
            className="relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: index * 0.3, ease: "easeOut" }}
          >
            <div className="flex">
              <div className="md:hidden left-0 top-0 w-12 mr-2 translate-y-1 shrink-0">
                <motion.div 
                  className="flex items-center justify-start"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.3 + 0.2, ease: "easeOut" }}
                >
                  <IconWrapper icon={step.icon} size="medium" />
                </motion.div>
                {index < steps.length - 1 && <div className="absolute top-[30px] left-4 border-l-2 h-full border-dashed border-azulao"></div>}
              </div>

              <div className="md:text-center">
                <div className="hidden md:block">
                  <motion.div 
                    className="flex items-center justify-center mb-6"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: index * 0.3 + 0.2, ease: "easeOut" }}
                  >
                    <IconWrapper icon={step.icon} size="large" />
                  </motion.div>
                  {index > 0 && <div className="absolute -left-1/2 top-[31px] w-full border-t-2 border-dashed border-azulao"></div>}
                </div>

                <motion.h3 
                  className="text-2xl text-heading font-semibold mb-4 text-azulao text-wrap-balance max-w-60 md:mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.8, delay: index * 0.3 + 0.4, ease: "easeOut" }}
                >
                  {step.title}
                </motion.h3>

                <motion.p 
                  className=" text-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.8, delay: index * 0.3 + 0.5, ease: "easeOut" }}
                >
                  {step.description}
                </motion.p>

                {step.ctaButton && (
                  <motion.div 
                    className="mt-5"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, delay: index * 0.3 + 0.6, ease: "easeOut" }}
                  >
                    <CTAButton text={step.ctaButton.text} leftIcon={step.ctaButton.icon} />
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
