import Section from '../Section';
import { Calendar, LucideIcon } from 'lucide-react';
import WhatsAppIcon from '../ui/WhatsAppIcon';
import Button from '../ui/Button';
import Logo from '../ui/Logo';
import { motion } from 'motion/react';

export interface FinalCTAButton {
  text: string;
  icon: LucideIcon | typeof WhatsAppIcon;
  href?: string;
  variant?: 'primary' | 'outline';
}

export interface FinalCTAProps {
  title?: string;
  subtitle?: string;
  buttons?: FinalCTAButton[];
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
        <motion.div 
          className="flex justify-center mb-6 sm:mb-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Logo size={80} />
        </motion.div>
      }
    >
      <motion.div 
        className="mt-10 flex justify-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      >
        <div className="flex flex-col gap-4">
          {buttons.map((button, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + (index * 0.2), ease: "easeOut" }}
            >
              <Button
                href={button.href}
                leftIcon={button.icon}
                variant={button.variant}
              >
                {button.text}
              </Button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
