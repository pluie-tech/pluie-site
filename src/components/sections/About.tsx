import Image from 'next/image';
import Section from '../Section';

export interface AboutProps {
  title: string;
  intro: string;
  sections: Array<{
    icon?: string;
    content?: string;
    title?: string;
    points?: Array<{
      title: string;
      description: string;
    }>;
  }>;
}

export default function About({
  title,
  intro,
  sections,
}: AboutProps) {
  return (
    <Section
      id="quem-somos"
      title={title}
      subtitle={intro}
    >  
      <div className="mx-auto mt-16 max-w-5xl flex flex-col sm:flex-row gap-1">
        <div className="rounded-3xl bg-border p-8 sm:p-12 grid gap-6 sm:w-2/5">
          <div>
            <Image src="/Pluie-logo.svg" alt="Pluie Logo" width={64} height={74} />
          </div>
          <p className="text-2xl">
            {sections && sections[0].content}
          </p>
          <h3 className="text-2xl font-bold font-heading">
            Por isso, fundamos a Pluie.
          </h3>
        </div>
            
            
        <div className="rounded-3xl p-8 sm:p-12 sm:w-3/5 bg-gradient-to-b from-[#E1EFF899]/60 to-[#E0F8ED99]/60">
          <h4 className="text-4xl font-black font-heading mb-5 sm:mb-8">{sections && sections[1].title}</h4>
          <div className="grid grid-cols-1 gap-8">
            {sections && sections[1].points && sections[1].points.map((feature, index) => (
              <div key={index} className="flex items-start">
                <Image src="/mini-logo.svg" alt={feature.title} width={28} height={28} />
                <div className="ml-4">
                  <h4 className="text-2xl font-bold mb-3 font-heading">
                    {feature.title}
                  </h4>
                  <p className="text-xl leading-6">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}