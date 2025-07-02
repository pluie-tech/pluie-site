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
  icon: LucideIcon
  imagePath: string
  className: string
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
      <div className="">
        <div className="mx-auto max-w-5xl px-6">
          <div className="">
            {services && services.map((service, index) => (
              <ServiceItem service={service} inverted={index % 2 === 0} key={index} />
            ))}
          </div>
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
    <div className={cn("flex", inverted && "flex-row-reverse bg-background py-16 rounded-3xl")}>
      <div className="flex-1 px-16">
        <h3 className={`font-extrabold text-3xl sm:text-4xl font-heading`}>
          {service.title}
        </h3>
        <p className="mt-4 text-lg leading-normal">{service.description}</p>
      </div>
      <div className="flex-1">
        <Image
          src={service.imagePath}
          alt={service.title}
          width={300}
          height={300}
          className="w-full h-auto"
        />
      </div>
    </div>
  )
}