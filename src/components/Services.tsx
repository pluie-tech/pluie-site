import { Lightbulb } from 'lucide-react';
import IconWrapper from './IconWrapper';
import CTAButton from './CTAButton';
import WhatsAppIcon from './WhatsAppIcon';
import Section from './Section';

export interface Service {
  title: string;
  description: string;
  features: string[];
  icon?: string;
  action?: {
    text: string;
    link: string;
  }
}

export interface ServicesProps {
  title?: string;
  subtitle?: string;
  services?: Service[];
}

export default function Services({
  title = "Soluções",
  subtitle = "De sites a sistemas completos, desenvolvemos o que o seu negócio precisa. Sempre sob medida, para resolver seu desafio.",
  services = [
    {
      title: "Sites, Aplicativos e Sistemas",
      description: "Do conceito ao código: criamos produtos digitais que entregam resultados.",
      features: [
        "Software pronto em semanas, não em meses.",
        "Ótima usabilidade e estrutura sólida, feito para durar e crescer com o seu negócio.",
        "Faça seu MVP: Tiramos sua ideia do papel com foco no essencial. Para você testar, aprender e evoluir."
      ],
      icon: "💻",
      action: {
        text: "Preciso de um MVP",
        link: "#contato"
      }
    },
    {
      title: "Consultoria em Usabilidade",
      description: "Seus clientes reclamam? Ajudamos a identificar e corrigir falhas que prejudicam a experiência.",
      features: [
        "Seus clientes vão adorar seu sistema, site ou aplicativo.",
        "Elimine telas confusas e dores de cabeça.",
        "Exemplos práticos de como as mudanças vão gerar resultados."
      ],
      icon: "🎯"
    },
    {
      title: "Automações",
      description: "Tarefas repetitivas? Economizamos seu tempo com tecnologia inteligente.",
      features: [
        "Faça o sistema trabalhar por você e foque no que realmente importa.",
        "Integração com suas planilhas, e-mails e sistemas.",
        "Relatórios de acompanhamento de resultados."
      ],
      icon: "⚡"
    },
    {
      title: "Identidade Visual",
      description: "Precisa de cara nova? Desenvolvemos marcas que comunicam clareza e confiança.",
      features: [
        "Seus clientes vão reconhecer e lembrar de sua marca.",
        "Kits para usar em várias aplicações.",
        "Style guide e design system para organizar seu trabalho."
      ],
      icon: "🎨"
    }
  ]
}: ServicesProps) {
  return (
    <Section
      id="solucoes"
      title={title}
      subtitle={subtitle}
      color="black"
      rounded="full"
    >
      <div className="grid sm:grid-cols-2 2xl:grid-cols-4 gap-0.5 lg:max-w-none lg:grid-cols-2 xl:grid-cols-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col rounded-3xl bg-white px-7 md:px-10 2xl:px-8 py-12"
          >
            <h5 className="text-3xl md:text-[40px] font-black font-heading">
              {service.title}
            </h5>
    
            <p className="mt-4 leading-7 text-lg">
              {service.description}
            </p>
    
            <ul className="mt-8 space-y-4">
              {service.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-start">
                  <IconWrapper icon={Lightbulb} size="small" />
                  <span className="ml-3 text-xl">{feature}</span>
                </li>
              ))}
            </ul>

            {service.action && (
              <div className="mt-8 w-full">
                <CTAButton
                  className="w-full md:w-fit lg:w-full text-center"
                  leftIcon={WhatsAppIcon}
                  leftIconSize={18}
                  text={service.action.text}
                  link={service.action.link}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
