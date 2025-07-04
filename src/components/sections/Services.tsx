"use client";

import Image from 'next/image'
import { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import Section from '../Section'
import { motion } from 'motion/react'

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
    <Section
      id="solucoes"
      title={title}
      subtitle={subtitle}
      color="black"
      rounded="top"
      titleClassName="max-w-3xl mx-auto text-center"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="mx-auto px-0.5 space-y-0.5"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 'some' }}
          transition={{ duration: 0.8, ease: "easeOut" }}
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
      className={cn("xl:flex xl:items-center bg-background p-3 rounded-3xl", inverted && "flex-row-reverse")}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 'some' }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
    >
      <div 
        className="flex-1 p-6 sm:p-12 md:p-10 xl:p-12 flex flex-col"
      >
        <motion.h3 
          className={`font-black text-[40px] font-heading tracking-title leading-small`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 'some' }}
          transition={{ duration: 0.8, delay: index * 0.1 + 0.4, ease: "easeOut" }}
        >
          {service.title}
        </motion.h3>
        <motion.p 
          className="mt-4 text-lg leading-body"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 'some' }}
          transition={{ duration: 0.8, delay: index * 0.1 + 0.5, ease: "easeOut" }}
        >
          {service.description}
        </motion.p>

        <motion.div 
          className="grid xl:grid-cols-3 xl:divide-x-[3px] xl:divide-y-0 divide-border mt-9"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 'some' }}
          transition={{ duration: 0.8, delay: index * 0.1 + 0.4, ease: "easeOut" }}
        >
          {service.features.map((feature, featureIndex) => (
            <motion.div 
              key={featureIndex} 
              className="pb-4 mb-4 pt-8 xl:pt-0 xl:pr-6 xl:mr-6 xl:pb-0 xl:mb-0 border-t-3 border-border xl:border-t-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 'some' }}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.5 + (featureIndex * 0.1), ease: "easeOut" }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 'some' }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.6 + (featureIndex * 0.1), ease: "easeOut" }}
              >
                <feature.icon size={40} className="w-10 h-10 mb-4" />
              </motion.div>
              <motion.h4 
                className="text-lg leading-tight font-semibold mb-3"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 'some' }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.7 + (featureIndex * 0.1), ease: "easeOut" }}
              >
                {feature.title}
              </motion.h4>
              <motion.p 
                className="leading-tight"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 'some' }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.8 + (featureIndex * 0.1), ease: "easeOut" }}
              >
                {feature.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 'some' }}
        transition={{ duration: 0.8, delay: index * 0.3 + 0.3, ease: "easeOut" }}
        className="h-full"
      >
        <Image
          src={service.imagePath}
          alt={service.title}
          width={460}
          height={460}
          className="object-cover w-full xl:w-[460px] rounded-xl mt-2 xl:mt-0"
        />
      </motion.div>
    </motion.div>
  )
}