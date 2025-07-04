"use client";

import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';
import type { BrandIconType } from '../ui/BrandIcon';
import Section from '../Section';
import Button from '../ui/Button';

export interface FinalCTAButton {
  text: string;
  icon: LucideIcon | BrandIconType;
  variant: 'primary' | 'outline';
  link: string;
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
                variant={button.variant}
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
