'use client'

import { forwardRef, HTMLAttributes } from 'react'
import Image from 'next/image'
import { Smartphone, PanelLeft, Workflow, Palette, LucideIcon } from 'lucide-react'

import { cn } from '@/lib/utils'
import Section from '../Section'

export interface Service {
  title: string
  description: string
  features: string[]
  icon: LucideIcon
  imagePath: string
  className: string
}

export interface ServicesProps {
  title?: string
  subtitle?: string
  services?: Service[]
}

export default function Services({
  title = 'Soluções',
  subtitle = 'De sites a sistemas completos, desenvolvemos o que o seu negócio precisa. Sempre sob medida, para resolver seu desafio.',
  services = [
    {
      title: 'Sites, Aplicativos e Sistemas',
      description: 'Do conceito ao código: criamos produtos digitais que entregam resultados.',
      features: [
        'Software pronto em semanas, não em meses.',
        'Ótima usabilidade e estrutura sólida, feito para durar e crescer com o seu negócio.',
        'Faça seu MVP: Tiramos sua ideia do papel com foco no essencial. Para você testar, aprender e evoluir.'
      ],
      icon: Smartphone,
      imagePath: '/images/services/applications.jpg',
      className: 'md:col-span-3 md:rounded-tl-xl'
    },
    {
      title: 'Consultoria em Usabilidade',
      description: 'Seus clientes reclamam? Ajudamos a identificar e corrigir falhas que prejudicam a experiência.',
      features: ['Seus clientes vão adorar seu sistema, site ou aplicativo.', 'Elimine telas confusas e dores de cabeça.', 'Exemplos práticos de como as mudanças vão gerar resultados.'],
      icon: PanelLeft,
      imagePath: '/images/services/usability.jpg',
      className: 'md:col-span-2 md:rounded-tr-xl'
    },
    {
      title: 'Automações',
      description: 'Tarefas repetitivas? Economizamos seu tempo com tecnologia inteligente.',
      features: ['Faça o sistema trabalhar por você e foque no que realmente importa.', 'Integração com suas planilhas, e-mails e sistemas.', 'Relatórios de acompanhamento de resultados.'],
      icon: Workflow,
      imagePath: '/images/services/automations.jpg',
      className: 'md:col-span-2 md:rounded-bl-xl'
    },
    {
      title: 'Identidade Visual',
      description: 'Precisa de cara nova? Desenvolvemos marcas que comunicam clareza e confiança.',
      features: ['Seus clientes vão reconhecer e lembrar de sua marca.', 'Kits para usar em várias aplicações.', 'Style guide e design system para organizar seu trabalho.'],
      icon: Palette,
      imagePath: '/images/services/identity.jpg',
      className: 'md:col-span-3 md:rounded-br-xl'
    }
  ]
}: ServicesProps) {
  return (
    <Section id="solucoes" title={title} subtitle={subtitle} color="black" rounded="full">
      <div className="">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mx-auto grid gap-2 sm:grid-cols-5">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                className={cn('group overflow-hidden col-span-5 md:rounded-none', service.className)}
              >
                <CardHeader>
                  <div className="md:px-4 md:pt-4 md:pb-2">
                     <h5 className="text-3xl md:text-[40px] font-black font-heading">
                      {service.title}
                    </h5>
                    <p className="mt-2 leading-7 text-lg">
                      {service.description}
                    </p>
                  </div>
                </CardHeader>

                <div className="relative max-h-[300px] md:pl-10">
                  <div className="absolute -inset-6 [background:radial-gradient(75%_95%_at_50%_0%,transparent,hsl(var(--background))_100%)]"></div>

                  <div className="bg-background overflow-hidden">
                    <Image
                      src={service.imagePath}
                      alt={service.title}
                      width={300}
                      height={300}
                      className="w-full min-h-[200px] object-cover"
                    />
                  </div>
                </div>
              </ServiceCard>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}

const ServiceCard = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('rounded-lg bg-card text-card-foreground', className)} {...props} />
))
ServiceCard.displayName = 'ServiceCard'

const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => <div ref={ref} className={cn('flex flex-col space-y-1.5 p-6', className)} {...props} />)
CardHeader.displayName = 'CardHeader'

const CardTitle = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLHeadingElement>>(({ className, ...props }, ref) => (
  <h3 ref={ref} className={cn('text-2xl font-semibold leading-none tracking-tight', className)} {...props} />
))
CardTitle.displayName = 'CardTitle'

const CardDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(({ className, ...props }, ref) => (
  <p ref={ref} className={cn('text-sm text-muted-foreground', className)} {...props} />
))
CardDescription.displayName = 'CardDescription'

const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />)
CardContent.displayName = 'CardContent'

const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => <div ref={ref} className={cn('flex items-center p-6 pt-0', className)} {...props} />)
CardFooter.displayName = 'CardFooter'
