import { Calendar, LucideIcon, MessageCircle } from 'lucide-react';
import WhatsAppIcon from '../ui/WhatsAppIcon';
import Section from '../Section';
import Logo from '../ui/Logo';
import Button from '../ui/Button';

export interface FinalCTAButton {
  text: string;
  icon: string;
  href?: string;
  variant?: 'primary' | 'outline';
}

export interface FinalCTAProps {
  title?: string;
  subtitle?: string;
  buttons?: FinalCTAButton[];
}

const icons: { [key: string]: LucideIcon | typeof WhatsAppIcon } = {
  "calendar": Calendar,
  "whatsapp": WhatsAppIcon,
  "message": MessageCircle,
};

export default function FinalCTA({
  title,
  subtitle,
  buttons
}: FinalCTAProps) {
  return (
    <Section
      id="cta-final"
      title={title}
      subtitle={subtitle}
      color="black"
      preSection={
        <div className="flex justify-center mb-6 sm:mb-10">
          <Logo size={80} />
        </div>
      }
    >
      <div className="mt-10 flex justify-center">
        <div className="flex flex-col gap-4">
          {buttons && buttons.map((button, index) => (
            <Button
              key={index}
              href={button.href}
              leftIcon={icons[button.icon]}
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
