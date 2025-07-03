'use client';

import Image from 'next/image';
import Section from '../Section';
import Button from '../ui/Button';
import { motion } from 'motion/react';

export interface Project {
  name: string;
  description: string;
  image: string;
  ctaButton: {
    text: string;
    href?: string;
  };
}

export interface LatestWorksProps {
  title?: string;
  subtitle?: string;
  projects?: Project[];
}

export default function LatestWorks({
  title = "Nossos últimos trabalhos",
  subtitle = "Esses são algumas de nossas últimas entregas. Soluções digitais feitas sob medida, com cuidado em cada detalhe.",
  projects = [
    {
      name: "Desafiado",
      description: "Transforme objetivos em hábitos duradouros.",
      image: "/images/works/desafiado.png",
      ctaButton: {
        text: "Experimentar",
        href: "#"
      }
    },
    {
      name: "Agrobay",
      description: "Projetamos toda a experiência do usuário e o aplicativo foi desenvolvido pela Utronics.",
      image: "/images/works/agrobay.png",
      ctaButton: {
        text: "Ver na loja",
        href: "#"
      }
    }
  ]
}: LatestWorksProps) {
  return (
    <Section
      id="trabalhos"
      title={title}
      subtitle={subtitle}
      color="black"
      rounded="top"
    >   
      <motion.div 
        className="grid sm:grid-cols-2 gap-0.5"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {projects.map((project, index) => (
          <Work key={index} index={index} {...project} />
        ))}
      </motion.div>
    </Section>
  );
}

function Work({
  name,
  description,
  image,
  ctaButton,
  index
}: Project & { index: number }) {
  return (
    <motion.div 
      className="flex flex-col sm:flex-row p-3 rounded-[36px] bg-background"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.3, ease: "easeOut" }}
    >
      <motion.div 
        className="rounded-[32px] overflow-hidden shrink-0 mb-4 sm:mb-0"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: index * 0.3 + 0.2, ease: "easeOut" }}
      >
        <Image
          src={image}
          width={256}
          height={256}
          alt={`Imagem do projeto ${name}`}
          className="object-cover size-fit sm:min-w-64 sm:max-w-64"
        />
      </motion.div>

      <div className="py-8 text-center sm:text-left sm:ml-12 flex flex-col">
        <motion.h3 
          className="text-2xl font-bold font-heading mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.3 + 0.4, ease: "easeOut" }}
        >
          {name}
        </motion.h3>
        
        <motion.p 
          className="text-lg mb-6 flex-grow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.3 + 0.5, ease: "easeOut" }}
        >
          {description}
        </motion.p>
        
        <motion.div 
          className="mt-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.3 + 0.6, ease: "easeOut" }}
        >
          <Button variant="outline" href={ctaButton.href} className="w-full sm:w-auto">
            {ctaButton.text}
          </Button>
        </motion.div>
      </div>
      
    </motion.div>
  );
}
