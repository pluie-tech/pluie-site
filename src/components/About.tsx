import Image from 'next/image';
import Section from './Section';

export interface AboutProps {
  title?: string;
  description?: string;
  features?: Array<{
    title: string;
    description: string;
    icon?: string;
  }>;
}

export default function About({
  title = "Quem somos",
  description = "Dois veteranos da tecnologia que viram produtos bons morrerem em processos ruins.",
  features = [
    {
      title: "Ouvimos antes de criar",
      description: "Entendemos sua realidade para sugerir a solução ideal (não a mais complexa).",
      icon: "�"
    },
    {
      title: "Software que funciona",
      description: "Seu sistema nasce rápido, com boa usabilidade e pronto para crescer.",
      icon: "⚡"
    },
    {
      title: "Sem dor de cabeça",
      description: "Levamos nosso trabalho a sério. Você ganha tempo e qualidade.",
      icon: "✨"
    }
  ]
}: AboutProps) {
  return (
    <Section
      id="quem-somos"
      title={title}
      subtitle={description}
    >  
      <div className="mx-auto mt-16 max-w-5xl flex flex-col sm:flex-row gap-1">
        <div className="rounded-3xl bg-border p-8 sm:p-12 grid gap-6 sm:w-2/5">
          <div>
            <Image src="/Pluie-logo.svg" alt="Pluie Logo" width={64} height={74} />
          </div>
          <p className="text-2xl">
            Nos conhecemos no mercado de trabalho, onde aprendemos uma lição valiosa: times inflados e hierarquias engessadas criam produtos caros, lentos e distantes de quem realmente importa – o cliente.
          </p>
          <h3 className="text-2xl font-bold font-heading">
            Por isso, fundamos a Pluie.
          </h3>
        </div>
            
            
        <div className="rounded-3xl p-8 sm:p-12 sm:w-3/5 bg-gradient-to-b from-[#E1EFF899]/60 to-[#E0F8ED99]/60">
          <h4 className="text-4xl font-black font-heading mb-5 sm:mb-8">Por que somos diferentes</h4>
          <div className="grid grid-cols-1 gap-8">
            {features.map((feature, index) => (
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
