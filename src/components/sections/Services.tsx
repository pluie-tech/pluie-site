'use client'

import Image from 'next/image'
import { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import Section from '../Section'

export interface Feature {
  title: string
  description: string
  icon: LucideIcon
}

export interface Service {
  title: string
  description: string
  features: Feature[]
  imagePath: string
}

export interface ServicesProps {
  title: string
  subtitle: string
  services: Service[]
}

export default function Services({
  title,
  subtitle,
  services
}: ServicesProps) {
  return (
    <Section id="solucoes" title={title} subtitle={subtitle} color="black" rounded="full">
      <div className="max-w-7xl mx-auto">
        <div className="mx-auto px-6 grid gap-4 lg:gap-8">
          {services && services.map((service, index) => (
            <ServiceItem service={service} inverted={index % 2 === 0} key={index} />
          ))}
        </div>
      </div>
    </Section>
  )
}

function ServiceItem({
  service,
  inverted
}: {
  service: Service,
  inverted: boolean
}) {
  return (
    <div className={cn("lg:flex bg-background py-8 sm:py-10 lg:py-14 rounded-3xl", inverted && "flex-row-reverse")}>
      <div className="flex-1 px-8 sm:px-10 lg:px-14 flex flex-col">
        <h3 className={`font-extrabold text-3xl sm:text-4xl font-heading`}>
          {service.title}
        </h3>
        <p className="mt-4 text-lg leading-normal flex-grow">{service.description}</p>

        <div className="grid lg:grid-cols-3 divide-y lg:divide-x lg:divide-y-0 divide-gray-300 mt-5">
          {service.features.map((feature, index) => (
            <div key={index} className="pb-4 mb-4 lg:pr-6 lg:mr-6 lg:pb-0 lg:mb-0">
              <feature.icon size={40} className="w-10 h-10 mb-4" />
              <h4 className="text-lg leading-tight font-semibold mb-3">{feature.title}</h4>
              <p className="leading-tight">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div
        className={
          cn("flex-1 overflow-hidden px-8 lg:px-0",
            
          )
        }>
        <Image
          src={service.imagePath}
          alt={service.title}
          width={300}
          height={300}
          className={
            cn("w-full max-h-[400px] object-cover rounded-xl lg:rounded-none mt-2 lg:mt-0",
              inverted ? "lg:rounded-tr-xl lg:rounded-br-xl" : "lg:rounded-tl-xl lg:rounded-bl-xl"
            )
          }
        />
      </div>
    </div>
  )
}