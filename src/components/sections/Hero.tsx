"use client";

import { motion } from 'motion/react';
import Button from '../ui/Button';
import { WhatsAppIcon } from '@/components';
import { siteConfig } from '@/siteConfig';
import { trackWhatsAppCTA, useTrackSectionView } from "@/lib/analytics";
import Image from 'next/image';

export default function Hero() {
  const ref = useTrackSectionView("hero");
  const title = 'Tecnologia que resolve, sem complicar.';
  const subtitle = 'Entendemos as necessidades da sua empresa e criamos soluções digitais sob medida para promover eficiência e crescimento.';
  const ctaText = 'Agende uma conversa';
  const ctaLink = siteConfig.whatsappLink;
  const ctaIcon = WhatsAppIcon;
  const backgroundImage = '/images/hero.png';

  return (
    <section 
      ref={ref}
      id="home"
      className="relative flex items-center justify-center p-2 sm:p-7"
    >
      <div className="relative w-full rounded-3xl overflow-hidden">
        {backgroundImage && (
          <Image
            src={backgroundImage}
            alt="Background da seção Hero"
            fill
            className="object-cover object-center"
            priority
          />
        )}
        <div
          className="relative mx-auto lg:max-w-3xl px-4 pt-12 pb-8 sm:px-6 sm:pt-20 sm:pb-20 lg:pt-24 lg:pn-28 lg:px-8"
        >
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-[34px] font-black tracking-title leading-small text-background sm:text-[54px] md:text-7xl font-heading"
              initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              {title}
            </motion.h1>
            <motion.p 
              className="mt-6 sm:text-xl md:text-2xl leading-body text-background max-w-xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              {subtitle}
            </motion.p>
            <motion.div 
              className="mt-10 flex items-center justify-center gap-x-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            >
              <Button
                href={ctaLink}
                leftIcon={ctaIcon}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppCTA('hero')}
              >
                {ctaText}
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
