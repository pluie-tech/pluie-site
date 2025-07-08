"use client";

import { motion } from 'motion/react';
import Section from '../Section';
import Button, { ButtonVariant } from '../ui/Button';
import { WhatsAppIcon } from '@/components';
import { siteConfig } from '@/siteConfig';
import { trackWhatsAppCTA, useTrackSectionView } from "@/lib/analytics";

export default function FinalCTA() {
  const ref = useTrackSectionView("cta_final");
  const title = 'Agende uma conversa gratuita';
  const subtitle = 'A gente escuta, entende e mostra como pode ajudar.';

  return (
    <Section
      ref={ref}
      id="cta-final"
      title={title}
      subtitle={subtitle}
      color="black"
      rounded="bottom"
      className='pb-12 pt-8 sm:pt-10 sm:pb-15'
      contentClassName='mt-6 sm:mt-10'
    >
      <motion.div 
        className="flex justify-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 'some' }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      >
        <div className="flex flex-col gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 'some' }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          >
            <Button
              href={siteConfig.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className='w-54'
              variant={'primary' as ButtonVariant}
              leftIcon={WhatsAppIcon}
              onClick={() => trackWhatsAppCTA('cta_final')}
            >
              Fale conosco
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
}
