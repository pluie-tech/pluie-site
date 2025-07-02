'use client';

import Image from 'next/image';
import Section from '../Section';
import Button from '../ui/Button';

export interface Project {
  name: string;
  description: string;
  image: string;
  cta_button: {
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
  title,
  subtitle,
  projects
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
        {projects && projects.map((project, index) => (
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
  cta_button
}: Project) {
  return (
    <div className="flex flex-col sm:flex-row p-3 rounded-[36px] bg-background">
      <div className="rounded-[32px] overflow-hidden shrink-0 mb-4 sm:mb-0">
        <Image
          src={`/public/images/works/${image}`}
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
          <Button variant="outline" href={cta_button.href} className="w-full sm:w-auto">
            {cta_button.text}
          </Button>
        </div>
      </div>
      
    </div>
  );
}
