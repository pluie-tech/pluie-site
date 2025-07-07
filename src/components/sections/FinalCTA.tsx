"use client";

import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';
import type { BrandIconType } from '../ui/BrandIcon';
import Section from '../Section';
import Button from '../ui/Button';
import { WhatsAppIcon } from '@/components';

export default function FinalCTA() {
  const title = 'Agende uma conversa gratuita';
  const subtitle = 'A gente escuta, entende e mostra como pode ajudar.';
  const buttons = [
    {
      text: 'Fale conosco',
      icon: WhatsAppIcon,
      variant: 'primary',
      link: 'https://wa.me/5541984926574?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20Pluie.'
    }
  ];

  return (
    <Section
      id="cta-final"
      title={title}
      subtitle={subtitle}
      color="black"
      rounded="bottom"
    >
      <motion.div 
        className="mt-10 flex justify-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 'some' }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      >
        <div className="flex flex-col gap-4">
          {buttons.map((button, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 'some' }}
              transition={{ duration: 0.6, delay: 0.5 + (index * 0.2), ease: "easeOut" }}
            >
              <Button
                key={index}
                href={button.link}
                target="_blank"
                rel="noopener noreferrer"
                className='w-54'
                variant={button.variant as any}
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
