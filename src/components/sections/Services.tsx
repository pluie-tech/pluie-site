import { Lightbulb } from 'lucide-react';
import IconWrapper from '../ui/IconWrapper';
import CTAButton from '../ui/CTAButton';
import WhatsAppIcon from '../ui/WhatsAppIcon';
import Section from '../Section';
import { motion } from 'motion/react';

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
      <motion.div 
        className="grid sm:grid-cols-2 2xl:grid-cols-4 gap-0.5 lg:max-w-none lg:grid-cols-2 xl:grid-cols-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="flex flex-col rounded-3xl bg-white px-7 md:px-10 2xl:px-8 py-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
          >
            <motion.h5 
              className="text-3xl md:text-[40px] font-black font-heading"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 + 0.2, ease: "easeOut" }}
            >
              {service.title}
            </motion.h5>
    
            <motion.p 
              className="mt-4 leading-7 text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 + 0.3, ease: "easeOut" }}
            >
              {service.description}
            </motion.p>
    
            <motion.ul 
              className="mt-8 space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 + 0.4, ease: "easeOut" }}
            >
              {service.features.map((feature, featureIndex) => (
                <motion.li 
                  key={featureIndex} 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.5 + (featureIndex * 0.1), ease: "easeOut" }}
                >
                  <IconWrapper icon={Lightbulb} size="small" />
                  <span className="ml-3 text-xl">{feature}</span>
                </motion.li>
              ))}
            </motion.ul>

            {service.action && (
              <motion.div 
                className="mt-8 w-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 + 0.8, ease: "easeOut" }}
              >
                <CTAButton
                  className="w-full md:w-fit lg:w-full text-center"
                  leftIcon={WhatsAppIcon}
                  leftIconSize={18}
                  text={service.action.text}
                  link={service.action.link}
                />
              </motion.div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
