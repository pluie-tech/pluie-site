'use client'

import Image from 'next/image'
import Section from '../Section'
import Button from '../ui/Button'
import { motion } from 'motion/react'

type Work = {
  name: string;
  description: string;
  image: string;
  ctaButton: {
    text: string;
    href?: string;
  }
}

export default function LatestWorks() {
  const title = 'Nossos últimos trabalhos';
  const subtitle = 'Esses são algumas de nossas últimas entregas. Soluções digitais feitas sob medida, com cuidado em cada detalhe.';
  const projects = [
    {
      name: 'Desafiado',
      description: 'Transforme objetivos em hábitos duradouros.',
      image: "/images/works/desafiado.png",
      ctaButton: {
        text: 'Experimentar'
      }
    },
    {
      name: 'Agrobay',
      description: 'Projetamos toda a experiência do usuário e o aplicativo foi desenvolvido pela Utronics.',
      image: "/images/works/agrobay.png",
      ctaButton: {
        text: 'Ver na loja'
      }
    }
  ];

  return (
    <Section
      id="trabalhos"
      title={title}
      subtitle={subtitle}
      color="black"
      rounded="full"
      className="pb-0.5 px-0.5"
      titleClassName="max-w-3xl mx-auto text-center">
      <motion.div
        className="grid lg:grid-cols-2 max-w-7xl gap-0.5 mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 'some' }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        {projects.map((project, index) => (
          <Work key={index} index={index} {...project} />
        ))}
      </motion.div>
    </Section>
  )
}

function Work({ name, description, image, ctaButton, index }: Work & { index: number }) {
  return (
    <motion.div
      className="flex flex-col sm:flex-row sm:items-center p-3 rounded-b-[30px] rounded-t-[36px] sm:rounded-b-[36px] sm:rounded-t-[36px] bg-background"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 'some' }}
      transition={{ duration: 0.4, delay: index * 0.3, ease: 'easeOut' }}
    >
      <motion.div
        className="mb-4 sm:mb-0"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 'some' }}
        transition={{ duration: 0.4, delay: index * 0.3 + 0.2, ease: 'easeOut' }}
      >
        <Image src={image} width={240} height={240} alt={`Imagem do projeto ${name}`} className="object-cover size-fit rounded-[32px] sm:min-w-60 sm:max-w-60" />
      </motion.div>

      <div className="text-center sm:text-left lg:ml-8 xl:ml-12 flex flex-col">
        <motion.h3
          className="text-2xl font-bold font-heading mb-2 xl:mb-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 'some' }}
          transition={{ duration: 0.4, delay: index * 0.3 + 0.4, ease: 'easeOut' }}
        >
          {name}
        </motion.h3>

        <motion.p
          className="text-lg mb-4 xl:mb-5 flex-grow leading-body"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 'some' }}
          transition={{ duration: 0.4, delay: index * 0.3 + 0.5, ease: 'easeOut' }}
        >
          {description}
        </motion.p>

        <motion.div
          className="mt-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 'some' }}
          transition={{ duration: 0.4, delay: index * 0.3 + 0.6, ease: 'easeOut' }}
        >
          <Button variant="outline" href={ctaButton.href} target="_blank" rel="noopener noreferrer">
            {ctaButton.text}
          </Button>
        </motion.div>
      </div>
    </motion.div>
  )
}
