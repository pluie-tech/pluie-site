"use client";

import { Bird, ChartPie, LayoutTemplate, LucideIcon, Palette, Puzzle, Shrub, Smile, Star, Target, Timer, TrendingUp, WandSparkles } from 'lucide-react'
import { cn } from '@/lib/utils'
import Section from '../Section'
import { motion } from 'motion/react'

type Feature = {
  title: string;
  description: string;
  icon: LucideIcon
}

type Service = {
  title: string;
  description: string;
  features: Feature[];
  imagePath: string;
}

const title = 'Soluções';
const subtitle = 'De sites a sistemas completos, desenvolvemos o que o seu negócio precisa. Sempre sob medida, para resolver seu desafio.';
const services: Service[] = [
  {
    title: 'Sites, Aplicativos e Sistemas',
    description: 'Do conceito ao código: criamos produtos digitais que entregam resultados.',
    features: [
      {
        title: 'Entrega rápida',
        description: 'Software pronto em semanas, não em meses.',
        icon: Timer
      },
      {
        title: 'Prontos para crescer',
        description: 'Ótima usabilidade e estrutura sólida, feito para durar e crescer com o seu negócio.',
        icon: Shrub
      },
      {
        title: 'MVP com foco',
        description: 'Faça seu MVP: Tiramos sua ideia do papel com foco no essencial. Para você testar, aprender e evoluir.',
        icon: Target
      }
    ],
    imagePath: '/services/applications.jpg'
  },
  {
    title: 'Consultoria em Usabilidade',
    description: 'Seus clientes reclamam? Ajudamos a identificar e corrigir falhas que prejudicam a experiência.',
    features: [
      {
        title: 'Mais satisfação',
        description: 'Seus clientes vão adorar seu sistema, site ou aplicativo.',
        icon: Smile
      },
      {
        title: 'Interface intuitiva',
        description: 'Elimine telas confusas e dores de cabeça.',
        icon: WandSparkles
      },
      {
        title: 'Impacto real',
        description: 'Exemplos práticos de como as mudanças vão gerar resultados.',
        icon: TrendingUp
      }
    ],
    imagePath: '/services/usability.jpg'
  },
  {
    title: 'Automações',
    description: 'Tarefas repetitivas? Economizamos seu tempo com tecnologia inteligente.',
    features: [
      {
        title: 'Mais tempo livre',
        description: 'Faça o sistema trabalhar por você e foque no que realmente importa.',
        icon: Bird
      },
      {
        title: 'Integra com o que você usa',
        description: 'Integração com suas planilhas, e-mails e sistemas.',
        icon: Puzzle
      },
      {
        title: 'Acompanhe com dados',
        description: 'Relatórios de acompanhamento de resultados.',
        icon: ChartPie
      }
    ],
    imagePath: '/services/automations.jpg'
  },
  {
    title: 'Identidade Visual',
    description: 'Precisa de cara nova? Desenvolvemos marcas que comunicam clareza e confiança.',
    features: [
      {
        title: 'Marca memorável',
        description: 'Seus clientes vão reconhecer e lembrar de sua marca.',
        icon: Star
      },
      {
        title: 'Kit de aplicações',
        description: 'Kits para usar em várias aplicações.',
        icon: Palette
      },
      {
        title: 'Organização visual',
        description: 'Style guide e design system para organizar seu trabalho.',
        icon: LayoutTemplate
      }
    ],
    imagePath: '/services/identity.jpg'
  }
];

export default function Services() {
  return (
    <Section
      id="solucoes"
      title={title}
      subtitle={subtitle}
      color="black"
      rounded="top"
      className="pt-9 sm:pt-16 pb-8"
      contentClassName="px-0.5 sm:px-8"
      titleClassName="max-w-3xl mx-auto text-center"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="mx-auto px-0.5 sm:px-0 space-y-0.5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 'some' }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          {services && services.map((service, index) => (
            <ServiceItem service={service} inverted key={index} index={index} />
          ))}
        </motion.div>
      </div>
    </Section>
  )
}

function ServiceItem({
  service,
  inverted,
  index
}: {
  service: Service,
  inverted: boolean,
  index: number
}) {
  return (
    <motion.div 
      className={cn("xl:flex xl:items-center bg-background p-3 rounded-3xl text-foreground", inverted && "flex-row-reverse")}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 'some' }}
      transition={{ duration: 0.1, ease: "easeOut" }}
    >
      <div 
        className="flex-1 p-6 sm:p-12 md:p-10 xl:p-12 flex flex-col"
      >
        <motion.h3 
          className={`font-black text-[40px] font-heading tracking-title leading-small`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 'some' }}
          transition={{ duration: 0.3, delay: index * 0.1 + 0.1, ease: "easeOut" }}
        >
          {service.title}
        </motion.h3>
        <motion.p 
          className="mt-4 text-lg leading-body"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 'some' }}
          transition={{ duration: 0.3, delay: index * 0.1 + 0.2, ease: "easeOut" }}
        >
          {service.description}
        </motion.p>

        <motion.div 
          className="grid xl:grid-cols-3 xl:divide-x-[3px] xl:divide-y-0 divide-border mt-6 sm:mt-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 'some' }}
          transition={{ duration: 0.4, delay: index * 0.1 + 0.3, ease: "easeOut" }}
        >
          {service.features.map((feature, featureIndex: number) => (
            <motion.div 
              key={featureIndex} 
              className="mb-4 pt-4 sm:pb-4 sm:pt-8 xl:pt-0 xl:pr-6 xl:mr-6 xl:pb-0 xl:mb-0 border-t-3 border-border xl:border-t-0"
            >
              <motion.div>
                <feature.icon size={40} className="w-10 h-10 mb-4" />
              </motion.div>
              <motion.h4 
                className="text-2xl leading-body font-semibold mb-3"
              >
                {feature.title}
              </motion.h4>
              <motion.p 
                className="text-lg leading-body"
              >
                {feature.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 'some' }}
        transition={{ duration: 0.4, delay: index * 0.2 + 0.2, ease: "easeOut" }}
        className="h-full hidden xl:block"
      >
        <img
          src={`/images/460${service.imagePath}`}
          alt={service.title}
          width={460}
          height={460}
          loading="lazy"
          className="object-cover w-full xl:w-[460px] rounded-xl mt-2 xl:mt-0"
          fetchPriority="low"
        />
      </motion.div>
    </motion.div>
  )
}