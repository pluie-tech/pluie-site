import Image from 'next/image';
import Section from './Section';
import { Calendar, LucideIcon } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import Button from './Button';

export interface CTAButton {
  text: string;
  icon: LucideIcon | typeof WhatsAppIcon;
  href?: string;
  variant?: 'primary' | 'outline';
}

export interface FinalCTAProps {
  title?: string;
  subtitle?: string;
  buttons?: CTAButton[];
}

export default function FinalCTA({
  title = "Agende uma conversa gratuita",
  subtitle = "A gente escuta, entende e mostra como pode ajudar.",
  buttons = [
    {
      text: "Escolher horário",
      icon: Calendar,
      href: "#contato",
      variant: "primary"
    },
    {
      text: "Fale conosco",
      icon: WhatsAppIcon,
      href: "#contato",
      variant: "outline"
    }
  ]
}: FinalCTAProps) {
  return (
    <Section
      id="cta-final"
      title={title}
      subtitle={subtitle}
      color="black"
      preSection={
        <div className="flex justify-center mb-6 sm:mb-10">
          <Image src="/Pluie-logo.svg" alt="Pluie Logo" width={64} height={74} />
        </div>
      }
    >
      <div className="mt-10 flex justify-center">
        <div className="flex flex-col gap-4">
          {buttons.map((button, index) => (
            <Button
              key={index}
              href={button.href}
              leftIcon={button.icon}
              variant={button.variant}
            >
              {button.text}
            </Button>
          ))}
        </div>
      </div>
    </Section>
  );
}
