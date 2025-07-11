"use client";

import Section from '../Section';
import Button, { ButtonVariant } from '../ui/Button';
import { WhatsAppIcon } from '@/components';
import { siteConfig } from '@/siteConfig';

export default function FinalCTA() {
  const title = 'Agende uma conversa gratuita';
  const subtitle = 'A gente escuta, entende e mostra como pode ajudar.';

  return (
    <Section
      id="cta-final"
      title={title}
      subtitle={subtitle}
      color="black"
      rounded="bottom"
      className='pb-12 pt-8 sm:pt-10 sm:pb-15'
      contentClassName='mt-6 sm:mt-10'
    >
      <div 
        className="flex justify-center"
      >
        <Button
          href={siteConfig.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className='w-54'
          variant={'primary' as ButtonVariant}
          leftIcon={WhatsAppIcon}
        >
          Fale conosco
        </Button>
      </div>
    </Section>
  );
}
