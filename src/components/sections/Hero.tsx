"use client";

import { motion } from 'motion/react';
import Button from '../ui/Button';
import { BrandIconType } from '../ui/BrandIcon';

export interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  ctaIcon: BrandIconType
  backgroundImage: string;
}

export default function Hero({
  title,
  subtitle,
  ctaText,
  ctaLink,
  ctaIcon,
  backgroundImage
}: HeroProps) {
  return (
    <section 
      id="home"
      className="relative flex items-center justify-center p-5"
    >
      <div
        className="w-full rounded-3xl"
        style={backgroundImage ? {
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        } : undefined}>
        <div
          className="relative mx-auto lg:max-w-3xl px-4 pt-24 pb-20 sm:px-6 sm:pt-28 sm:pb-24 lg:px-8"
        >
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-[34px] font-black tracking-title leading-small text-white sm:text-[54px] md:text-7xl font-heading"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              {title}
            </motion.h1>
            <motion.p 
              className="mt-6 text-2xl leading-8 text-white max-w-xl mx-auto"
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
