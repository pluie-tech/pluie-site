import { LucideIcon } from 'lucide-react';
import type { WhatsAppIconType } from '../ui/WhatsAppIcon';
import Section from '../Section';
import Logo from '../ui/Logo';
import Button from '../ui/Button';
import { motion } from 'motion/react';

export interface FinalCTAButton {
  text: string;
  icon: LucideIcon | WhatsAppIconType;
}

export interface FinalCTAProps {
  title: string;
  subtitle: string;
  buttons: FinalCTAButton[];
}

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
        <motion.div 
          className="flex justify-center mb-6 sm:mb-10"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Logo size={80} />
        </motion.div>
      }
    >
      <motion.div 
        className="mt-10 flex justify-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      >
        <div className="flex flex-col gap-4">
          {buttons.map((button, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.5 + (index * 0.2), ease: "easeOut" }}
            >
              <Button
                key={index}
                href='#contato'
                leftIcon={button.icon}
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
