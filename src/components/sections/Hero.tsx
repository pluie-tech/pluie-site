"use client";

import { motion } from 'motion/react';
import Button from '../ui/Button';
import { WhatsAppIcon } from '@/components';
import { siteConfig } from '@/siteConfig';

export default function Hero() {
  const title = 'Tecnologia que resolve, sem complicar.';
  const subtitle = 'Entendemos as necessidades da sua empresa e criamos soluções digitais sob medida para promover eficiência e crescimento.';
  const ctaText = 'Agende uma conversa';

  return (
    <section 
      id="home"
      className="relative flex items-center justify-center p-2 sm:p-7 bg-background"
    >
      <div className="relative w-full rounded-3xl overflow-hidden">
        <img
          alt="Background da seção Hero"
          className="object-cover object-center absolute w-full h-full inset-0 text-transparent"
          srcSet={`
            /images/400/hero.png 400w,
            /images/480/hero.png 480w,
            /images/640/hero.png 640w,
            /images/720/hero.png 720w,
            /images/1024/hero.png 1024w,
            /images/1200/hero.png 1200w,
            /images/full/hero.png 1400w
          `}
          src='/images/full/hero.png'
          fetchPriority="high"
        />
        <div
          className="relative mx-auto lg:max-w-3xl px-4 pt-12 pb-8 sm:px-6 sm:pt-20 sm:pb-20 lg:pt-24 lg:pn-28 lg:px-8"
        >
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-[34px] font-black tracking-title leading-small text-background sm:text-[54px] md:text-7xl font-heading"
              initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
            >
              {title}
            </motion.h1>
            <motion.p 
              className="mt-6 sm:text-xl md:text-2xl leading-body text-background max-w-xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
            >
              {subtitle}
            </motion.p>
            <motion.div 
              className="mt-10 flex items-center justify-center gap-x-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
            >
              <Button
                href={siteConfig.whatsappLink}
                leftIcon={WhatsAppIcon}
                target="_blank"
                rel="noopener noreferrer"
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
