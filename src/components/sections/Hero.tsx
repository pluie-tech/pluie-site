"use client";

import { motion } from 'motion/react';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface HeroProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

interface HeroTitleProps {
  children: ReactNode;
  className?: string;
}

interface HeroSubtitleProps {
  children: ReactNode;
  className?: string;
}

interface HeroBackgroundImageProps {
  src: string;
  alt: string;
  srcSet?: string;
  fetchPriority?: 'high' | 'low' | 'auto';
  className?: string;
}

interface HeroActionProps {
  children: ReactNode;
  className?: string;
}

function HeroRoot({ children, id = "hero", className = "" }: HeroProps) {
  return (
    <section 
      id={id}
      className={cn("relative flex items-center justify-center p-2 sm:p-7", className)}
    >
      <div className="relative w-full rounded-3xl overflow-hidden">
        {children}
      </div>
    </section>
  );
}

function HeroTitle({ children, className = "" }: HeroTitleProps) {
  return (
    <motion.h1 
      className={cn(
        "text-[34px] font-black tracking-title leading-small text-background sm:text-[54px] md:text-7xl font-heading",
        className
      )}
      initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
    >
      {children}
    </motion.h1>
  );
}

function HeroSubtitle({ children, className = "" }: HeroSubtitleProps) {
  return (
    <motion.p 
      className={cn(
        "mt-6 sm:text-xl md:text-2xl leading-body text-background max-w-xl mx-auto",
        className
      )}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
    >
      {children}
    </motion.p>
  );
}

function HeroBackgroundImage({ 
  src, 
  alt, 
  srcSet, 
  fetchPriority = "high", 
  className = "" 
}: HeroBackgroundImageProps) {
  return (
    <img
      alt={alt}
      className={cn(
        "object-cover object-center absolute w-full h-full inset-0 text-transparent",
        className
      )}
      srcSet={srcSet}
      src={src}
      fetchPriority={fetchPriority}
    />
  );
}

function HeroAction({ children, className = "" }: HeroActionProps) {
  return (
    <motion.div 
      className={cn(
        "mt-10 flex items-center justify-center gap-x-6",
        className
      )}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

// Content wrapper for the hero content
function HeroContent({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn(
      "relative mx-auto lg:max-w-3xl px-4 pt-12 pb-8 sm:px-6 sm:pt-20 sm:pb-20 lg:pt-24 lg:pb-28 lg:px-8",
      className
    )}>
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
}

// Compound component with sub-components
const Hero = Object.assign(HeroRoot, {
  Title: HeroTitle,
  Subtitle: HeroSubtitle,
  BackgroundImage: HeroBackgroundImage,
  Action: HeroAction,
  Content: HeroContent,
});

export default Hero;
