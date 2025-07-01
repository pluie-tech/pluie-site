'use client';

import Image from 'next/image';
import Section from './Section';
import Button from './Button';

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
      <div className="grid sm:grid-cols-2 gap-0.5">
        {projects.map((project, index) => (
          <Work key={index} {...project} />
        ))}
      </div>
    </Section>
  );
}

function Work({
  name,
  description,
  image,
  ctaButton
}: Project) {
  return (
    <div className="flex flex-col sm:flex-row p-3 rounded-[36px] bg-background">
      <div className="rounded-[32px] overflow-hidden shrink-0 mb-4 sm:mb-0">
        <Image
          src={image}
          width={256}
          height={256}
          alt={`Imagem do projeto ${name}`}
          className="object-cover size-fit sm:min-w-64 sm:max-w-64"
        />
      </div>

      <div className="py-8 text-center sm:text-left sm:ml-12 flex flex-col">
        <h3 className="text-2xl font-bold font-heading mb-3">
          {name}
        </h3>
        
        <p className="text-lg mb-6 flex-grow">
          {description}
        </p>
        
        <div className="mt-auto">
          <Button variant="outline" href={ctaButton.href} className="w-full sm:w-auto">
            {ctaButton.text}
          </Button>
        </div>
      </div>
      
    </div>
  );
}
