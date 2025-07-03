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
    <Section id="solucoes" title={title} subtitle={subtitle} color="black" rounded="full">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="mx-auto px-6 grid gap-4 lg:gap-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 'some' }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {services && services.map((service, index) => (
            <ServiceItem service={service} inverted={index % 2 === 0} key={index} index={index} />
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
      className={cn("lg:flex bg-background py-8 sm:py-10 lg:py-14 rounded-3xl", inverted && "flex-row-reverse")}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 'some' }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
    >
      <motion.div 
        className="flex-1 px-8 sm:px-10 lg:px-14 flex flex-col"
        initial={{ opacity: 0, x: inverted ? 40 : -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 'some' }}
        transition={{ duration: 0.8, delay: index * 0.1 + 0.2, ease: "easeOut" }}
      >
        <motion.h3 
          className={`font-extrabold text-3xl sm:text-4xl font-heading`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 'some' }}
          transition={{ duration: 0.8, delay: index * 0.1 + 0.4, ease: "easeOut" }}
        >
          {service.title}
        </motion.h3>
        <motion.p 
          className="mt-4 text-lg leading-normal flex-grow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 'some' }}
          transition={{ duration: 0.8, delay: index * 0.1 + 0.5, ease: "easeOut" }}
        >
          {service.description}
        </motion.p>

        <motion.div 
          className="grid lg:grid-cols-3 divide-y lg:divide-x lg:divide-y-0 divide-gray-300 mt-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 'some' }}
          transition={{ duration: 0.8, delay: index * 0.1 + 0.4, ease: "easeOut" }}
        >
          {service.features.map((feature, featureIndex) => (
            <motion.div 
              key={featureIndex} 
              className="pb-4 mb-4 lg:pr-6 lg:mr-6 lg:pb-0 lg:mb-0"
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
      </motion.div>
      <motion.div
        className={
          cn("flex-1 overflow-hidden px-8 lg:px-0",
            
          )
        }
        initial={{ opacity: 0, x: inverted ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 'some' }}
        transition={{ duration: 0.8, delay: index * 0.3 + 0.3, ease: "easeOut" }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 'some' }}
          transition={{ duration: 0.8, delay: index * 0.3 + 0.5, ease: "easeOut" }}
        >
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
        </motion.div>
      </motion.div>
    </motion.div>
  )
}