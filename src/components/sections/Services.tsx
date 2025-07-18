"use client";

import { Bird, ChartPie, LayoutTemplate, Palette, Puzzle, Shrub, Smile, Star, Target, Timer, TrendingUp, WandSparkles } from 'lucide-react'
import { cn, generateImageUrl } from '@/lib/utils'
import Section from '../Section'
import { motion } from 'motion/react'
import { ReactNode } from 'react'
import { Feature, Service } from '@/types';

interface ServicesProps {
  children: ReactNode;
  id?: string;
  title?: string;
  subtitle?: string;
  color?: 'white' | 'black';
  rounded?: 'top' | 'bottom' | 'full' | 'none';
  className?: string;
  contentClassName?: string;
  titleClassName?: string;
}

interface ServicesListProps {
  children: ReactNode;
  className?: string;
}

interface ServiceItemProps {
  title?: string;
  description?: string;
  features: Feature[];
  imagePath?: string;
  imageSize?: number;
  inverted?: boolean;
  index?: number;
  className?: string;
}

interface ServiceContentProps {
  children: ReactNode;
  className?: string;
}

interface ServiceTitleProps {
  children: ReactNode;
  index?: number;
  className?: string;
}

interface ServiceDescriptionProps {
  children: ReactNode;
  index?: number;
  className?: string;
}

interface ServiceFeaturesProps {
  features: Feature[];
  index?: number;
  className?: string;
}

interface ServiceImageProps {
  src: string;
  alt: string;
  index?: number;
  className?: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
  fetchPriority?: 'high' | 'low' | 'auto';
}

function ServicesRoot({ 
  children, 
  id = "services", 
  title, 
  subtitle, 
  color = "black", 
  rounded = "top",
  className = "pt-9 sm:pt-16 pb-8",
  contentClassName = "px-0.5 sm:px-8",
  titleClassName = "max-w-3xl mx-auto text-center"
}: ServicesProps) {
  return (
    <Section
      id={id}
      title={title}
      subtitle={subtitle}
      color={color}
      rounded={rounded}
      className={className}
      contentClassName={contentClassName}
      titleClassName={titleClassName}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </Section>
  );
}

function ServicesList({ children, className = "mx-auto px-0.5 sm:px-0 space-y-0.5" }: ServicesListProps) {
  return (
    <motion.div 
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 'some' }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function ServiceItem({
  title,
  description,
  features,
  imagePath,
  imageSize = 460,
  inverted = false,
  index = 0,
  className = ""
}: ServiceItemProps) {
  return (
    <motion.div 
      className={cn("xl:flex xl:items-center bg-background p-3 rounded-3xl text-foreground", inverted && "flex-row-reverse", className)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 'some' }}
      transition={{ duration: 0.1, ease: "easeOut" }}
    >
      <Services.Content>
        <div className={cn(title || description ? "pb-6 xl:pb-0 mb-6 border-b-3 border-border xl:border-b-0" : "")}>
          {title && <Services.Title index={index}>{title}</Services.Title>}
          {description && <Services.Description index={index}>{description}</Services.Description>}
        </div>
        <Services.Features features={features} index={index} />
      </Services.Content>
      
      {imagePath && (
        <Services.Image 
          src={imagePath}
          alt={title || 'Imagem do serviço'}
          index={index}
          width={imageSize}
          height={imageSize}
          loading="lazy"
          fetchPriority="low"
        />
      )}
    </motion.div>
  );
}

function ServiceContent({ children, className = "flex-1 p-3 sm:p-9 md:p-7 xl:p-9 flex flex-col" }: ServiceContentProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}

function ServiceTitle({ children, index = 0, className = "" }: ServiceTitleProps) {
  return (
    <motion.h3 
      className={`font-black text-[40px] font-heading tracking-title leading-small ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 'some' }}
      transition={{ duration: 0.3, delay: index * 0.05 + 0.1, ease: "easeOut" }}
    >
      {children}
    </motion.h3>
  );
}

function ServiceDescription({ children, index = 0, className = "" }: ServiceDescriptionProps) {
  return (
    <motion.p 
      className={`mt-4 text-lg leading-body ${className}`}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 'some' }}
      transition={{ duration: 0.3, delay: index * 0.05 + 0.1, ease: "easeOut" }}
    >
      {children}
    </motion.p>
  );
}

function ServiceFeatures({ features, index = 0, className = "" }: ServiceFeaturesProps) {
  return (
    <motion.div 
      className={cn('grid xl:grid-cols-3 xl:divide-x-[3px] xl:divide-y-0 divide-border', className)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 'some' }}
      transition={{ duration: 0.4, delay: index * 0.1 + 0.1, ease: "easeOut" }}
    >
      {features.map((feature, featureIndex: number) => (
        <motion.div 
          key={featureIndex} 
          className={cn(
            "xl:pr-6 xl:mr-6",
          )}
        >
          {featureIndex > 0 && (
            <hr className="border-t-3 border-border xl:border-t-0 my-4 xl:mt-0" />
          )}
          <motion.div>
            <feature.icon size={40} className="w-10 h-10 mb-4" />
          </motion.div>
          <motion.p
            role="heading" 
            className="text-2xl leading-body font-semibold mb-3"
          >
            {feature.title}
          </motion.p>
          <motion.p 
            className="text-lg leading-body"
          >
            {feature.description}
          </motion.p>
        </motion.div>
      ))}
    </motion.div>
  );
}

function ServiceImage({ 
  src, 
  alt, 
  index = 0, 
  className = "", 
  width = 460, 
  height = 460, 
  loading = "lazy", 
  fetchPriority = "low" 
}: ServiceImageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 'some' }}
      transition={{ duration: 0.4, delay: index * 0.2 + 0.2, ease: "easeOut" }}
      className={`h-full hidden xl:block ${className}`}
    >
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        className="object-cover w-full xl:w-auto rounded-xl mt-2 xl:mt-0"
        style={{
          width: `${width}px`,
          height: `${height}px`
        }}
        fetchPriority={fetchPriority}
      />
    </motion.div>
  );
}

// Compound component with sub-components
const Services = Object.assign(ServicesRoot, {
  List: ServicesList,
  Item: ServiceItem,
  Content: ServiceContent,
  Title: ServiceTitle,
  Description: ServiceDescription,
  Features: ServiceFeatures,
  Image: ServiceImage,
});

export default Services;

// Export the original services data for backward compatibility
export const servicesData: Service[] = [
  {
    title: 'Sites, Aplicativos e Sistemas',
    description: 'Do conceito ao código: criamos produtos digitais que entregam resultados.',
    features: [
      {
        title: 'Entrega rápida',
        description: 'Software pronto em semanas, não em meses.',
        icon: Timer
      },
      {
        title: 'Prontos para crescer',
        description: 'Ótima usabilidade e estrutura sólida, feito para durar e crescer com o seu negócio.',
        icon: Shrub
      },
      {
        title: 'MVP com foco',
        description: 'Faça seu MVP: Tiramos sua ideia do papel com foco no essencial. Para você testar, aprender e evoluir.',
        icon: Target
      }
    ],
    imagePath: generateImageUrl('/services/applications.jpg', 460)
  },
  {
    title: 'Consultoria em Usabilidade',
    description: 'Seus clientes reclamam? Ajudamos a identificar e corrigir falhas que prejudicam a experiência.',
    features: [
      {
        title: 'Mais satisfação',
        description: 'Seus clientes vão adorar seu sistema, site ou aplicativo.',
        icon: Smile
      },
      {
        title: 'Interface intuitiva',
        description: 'Elimine telas confusas e dores de cabeça.',
        icon: WandSparkles
      },
      {
        title: 'Impacto real',
        description: 'Exemplos práticos de como as mudanças vão gerar resultados.',
        icon: TrendingUp
      }
    ],
    imagePath: generateImageUrl('/services/usability.jpg', 460)
  },
  {
    title: 'Automações',
    description: 'Tarefas repetitivas? Economizamos seu tempo com tecnologia inteligente.',
    features: [
      {
        title: 'Mais tempo livre',
        description: 'Faça o sistema trabalhar por você e foque no que realmente importa.',
        icon: Bird
      },
      {
        title: 'Integra com o que você usa',
        description: 'Integração com suas planilhas, e-mails e sistemas.',
        icon: Puzzle
      },
      {
        title: 'Acompanhe com dados',
        description: 'Relatórios de acompanhamento de resultados.',
        icon: ChartPie
      }
    ],
    imagePath: generateImageUrl('/services/automations.jpg', 460)
  },
  {
    title: 'Identidade Visual',
    description: 'Precisa de cara nova? Desenvolvemos marcas que comunicam clareza e confiança.',
    features: [
      {
        title: 'Marca memorável',
        description: 'Seus clientes vão reconhecer e lembrar de sua marca.',
        icon: Star
      },
      {
        title: 'Kit de aplicações',
        description: 'Kits para usar em várias aplicações.',
        icon: Palette
      },
      {
        title: 'Organização visual',
        description: 'Style guide e design system para organizar seu trabalho.',
        icon: LayoutTemplate
      }
    ],
    imagePath: generateImageUrl('/services/identity.jpg', 460)
  }
];
