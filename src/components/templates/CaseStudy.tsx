"use client";

import { motion } from 'motion/react';
import { Hero, BaseLayout, Section, BackToHomeButton, Button } from '@/components';
import { ExternalLink } from 'lucide-react';
import { cn, generateImageUrl } from '@/lib/utils';
import { ReactNode } from 'react';

// Main CaseStudy Component
interface CaseStudyProps {
  children: ReactNode;
}

// Hero Components
interface CaseStudyHeroProps {
  children: ReactNode;
  id?: string;
  className?: string;
  heroImage?: string;
  title: string;
}

interface CaseStudyHeroContentProps {
  children: ReactNode;
}

interface CaseStudyHeroTitleProps {
  children: ReactNode;
  className?: string;
}

interface CaseStudyHeroSubtitleProps {
  children: ReactNode;
  className?: string;
}

interface CaseStudyHeroDescriptionProps {
  children: ReactNode;
  className?: string;
}


interface CaseStudyCTAButtonProps {
  children: ReactNode;
  href?: string;
  target?: string;
  rel?: string;
}

// Banner Components
interface CaseStudyBannerProps {
  src: string;
  alt: string;
  title?: string;
  className?: string;
  id?: string;
}

// About Components
interface CaseStudyAboutProps {
  id?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

interface CaseStudyAboutContentProps {
  children: ReactNode;
  className?: string;
}

// Sections Components
interface CaseStudySectionsProps {
  children: ReactNode;
  id?: string;
  className?: string;
  title?: string;
  preSection?: React.ReactNode;
}

interface CaseStudySectionsGridProps {
  children: ReactNode;
  className?: string;
}

interface CaseStudySectionItemProps {
  children: ReactNode;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  index?: number;
}

interface CaseStudySectionContentProps {
  children: ReactNode;
}

// Resources Components
interface CaseStudyResourcesProps {
  children: ReactNode;
  id?: string;
  className?: string;
  title?: string;
}

interface CaseStudyResourcesListProps {
  children: ReactNode;
  className?: string;
}

interface CaseStudyResourceItemProps {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}

// Visual Guidelines Components
interface CaseStudyGuidelinesProps {
  children: ReactNode;
  id?: string;
  className?: string;
  title?: string;
  subtitle?: string;
}

interface CaseStudyGuidelinesGridProps {
  children: ReactNode;
  className?: string;
}

interface CaseStudyGuidelineGroupProps {
  children: ReactNode;
  title: string;
  index?: number;
}

interface CaseStudyGuidelineItemProps {
  name: string;
  value: string;
  type: 'color' | 'font' | 'other';
  preview?: string;
}

interface CaseStudyTitleProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

function CaseStudyTitle({ title, subtitle, className }: CaseStudyTitleProps) {
  if (!title && !subtitle) {
    return null;
  }
  return (
    <div className={cn("mb-8 md:mb-15", className)}>
      <h3 className="font-heading font-semibold text-2xl sm:text-3xl md:text-[52px] text-center max-w-lg mx-auto">{title}</h3>
      {subtitle && <p className="text-lg sm:text-2xl text-center max-w-lg mx-auto">{subtitle}</p>}
    </div>
  );
}

// Hero Components Implementation
function CaseStudyHero({ children, id = "case-hero", className, heroImage, title }: CaseStudyHeroProps) {
  return (
    <Hero id={id} className={className}>
      {heroImage && (
        <Hero.BackgroundImage
          src={heroImage}
          alt={`${title} hero background`}
          fetchPriority="high"
        />
      )}
      {children}
    </Hero>
  );
}

function CaseStudyHeroContent({ children }: CaseStudyHeroContentProps) {
  return <Hero.Content className="py-8!">{children}</Hero.Content>;
}

function CaseStudyHeroTitle({ children, className }: CaseStudyHeroTitleProps) {
  return <Hero.Title className={`text-foreground ${className || ''}`}>{children}</Hero.Title>;
}

function CaseStudyHeroSubtitle({ children, className }: CaseStudyHeroSubtitleProps) {
  return <Hero.Subtitle className={`text-foreground mb-4 ${className || ''}`}>{children}</Hero.Subtitle>;
}

function CaseStudyHeroDescription({ children, className }: CaseStudyHeroDescriptionProps) {
  return (
    <p className={`text-xl text-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed ${className || ''}`}>
      {children}
    </p>
  );
}

function CaseStudyCTAButton({ children, href, target, rel }: CaseStudyCTAButtonProps) {
  return (
    <Button
      as="a"
      href={href}
      target={target}
      rel={rel}
      variant="primary"
    >
      <div className="flex items-center gap-2">
        {children}
        <ExternalLink className="w-5 h-5" />
      </div>
    </Button>
  );
}

// Banner Component Implementation
function CaseStudyBanner({ src, alt, className, id = "case-banner" }: CaseStudyBannerProps) {
  const imagesSrcSet = [480, 640, 800, 1024, 1400, 1600, 1920].map(size => {
    const path = generateImageUrl(src, size);
    return `${path} ${size}w`;
  }).join(', ');

  return (
    <Section id={id} className={className}>
      <motion.div
        className='bg-gradient-to-b from-[#863D4A] to-[#18496E] p-px'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 'some' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <img
          className="w-full h-auto"
          alt={alt}
          width={1200}
          height={600}
          src={src}
          srcSet={imagesSrcSet}
        />
      </motion.div>
    </Section>
  );
}

// About Components Implementation
function CaseStudyAbout({ children, id = "case-about", className, title, subtitle }: CaseStudyAboutProps) {
  return (
    <Section
      id={id}
      className={`py-10 xl:py-15 px-8 2xl:py-20 bg-white ${className || ''}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 'some' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <CaseStudyTitle title={title} subtitle={subtitle} />
        {children}
      </motion.div>
    </Section>
  );
}


function CaseStudyAboutContent({ children, className }: CaseStudyAboutContentProps) {
  return (
    <motion.div
      className={`space-y-8 ${className || ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 'some' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

// Sections Components Implementation
function CaseStudySections({ children, id = "case-sections", className, title, preSection }: CaseStudySectionsProps) {
  return (
    <Section id={id} className={cn("py-10 xl:py-15 2xl:py-20 bg-background", className)}>
      <motion.div
        className="mx-auto max-w-5xl px-1 sm:px-8 xl:px-0"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 'some' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {preSection && <>{preSection}</>}
        <CaseStudyTitle title={title} />
        {children}
      </motion.div>
    </Section>
  );
}

function CaseStudySectionsGrid({ children, className }: CaseStudySectionsGridProps) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-1 sm:gap-3", className)}>
      {children}
    </div>
  );
}

function CaseStudySectionItem({ children, icon: Icon, title, index = 0 }: CaseStudySectionItemProps) {
  return (
    <motion.div
      className="bg-white rounded-4xl p-12 border border-border"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 'some' }}
      transition={{ duration: 0.4, delay: index * 0.1, ease: 'easeOut' }}
    >
      <div>
        <Icon className="w-8 h-8 mb-4 stroke-2"  />
        <h4 className="font-heading font-semibold text-xl sm:text-2xl">
          {title}
        </h4>
      </div>
      {children}
    </motion.div>
  );
}

function CaseStudySectionContent({ children }: CaseStudySectionContentProps) {
  return (
    <p className="text-lg text-foreground/80 leading-relaxed">
      {children}
    </p>
  );
}

// Resources Components Implementation
function CaseStudyResources({ children, id = "case-resources", className, title = "Tecnologias utilizadas" }: CaseStudyResourcesProps) {
  return (
    <Section id={id} className={cn("py-10 xl:py-15 2xl:py-20", className)}>
      <motion.div
        className="mx-auto max-w-7xl px-1 sm:px-8 xl:px-0"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 'some' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <CaseStudyTitle title={title} />
        {children}
      </motion.div>
    </Section>
  );
}

function CaseStudyResourcesList({ children, className }: CaseStudyResourcesListProps) {
  return (
    <div className={cn("flex flex-wrap gap-2 justify-center max-w-5xl mx-auto", className)}>
      {children}
    </div>
  );
}

function CaseStudyResourceItem({ icon: Icon, label }: CaseStudyResourceItemProps) {
  return (
    <div className="flex items-center space-x-2 px-3 py-1.5 rounded-lg border border-secondary">
      <Icon className="w-4 h-4" />
      <span className="text-lg leading-body">{label}</span>
    </div>
  )
}

// Visual Guidelines Components Implementation
function CaseStudyGuidelines({ children, id = "case-guidelines", className, title, subtitle }: CaseStudyGuidelinesProps) {
  return (
    <Section id={id} className={`py-10 xl:py-15 2xl:py-20 bg-background ${className || ''}`}>
      <motion.div
        className="mx-auto max-w-7xl px-1 sm:px-8 xl:px-0"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 'some' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
       <CaseStudyTitle title={title} subtitle={subtitle} />
        {children}
      </motion.div>
    </Section>
  );
}

function CaseStudyGuidelinesGrid({ children, className }: CaseStudyGuidelinesGridProps) {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 ${className || ''}`}>
      {children}
    </div>
  );
}

function CaseStudyGuidelineGroup({ children, title, index = 0 }: CaseStudyGuidelineGroupProps) {
  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 'some' }}
      transition={{ duration: 0.4, delay: index * 0.1, ease: 'easeOut' }}
    >
      <h4 className="font-heading font-bold text-2xl text-foreground">
        {title}
      </h4>
      <div className="space-y-4">
        {children}
      </div>
    </motion.div>
  );
}

function CaseStudyGuidelineItem({ name, value, type, preview }: CaseStudyGuidelineItemProps) {
  return (
    <div className="flex items-center gap-4">
      {type === 'color' && preview && (
        <div 
          className="w-8 h-8 rounded-lg border border-gray-200"
          style={{ backgroundColor: preview }}
        />
      )}
      <div>
        <p className="font-medium text-foreground">{name}</p>
        <p className="text-sm text-foreground/60">{value}</p>
      </div>
    </div>
  );
}

// Main CaseStudy Component with proper typing for compound components
interface CaseStudyComponent extends React.FC<CaseStudyProps> {
  Hero: React.FC<CaseStudyHeroProps> & {
    Content: React.FC<CaseStudyHeroContentProps>;
    Title: React.FC<CaseStudyHeroTitleProps>;
    Subtitle: React.FC<CaseStudyHeroSubtitleProps>;
    Description: React.FC<CaseStudyHeroDescriptionProps>;
  };
  Banner: React.FC<CaseStudyBannerProps>;
  About: React.FC<CaseStudyAboutProps> & {
    Content: React.FC<CaseStudyAboutContentProps>;
  };
  Sections: React.FC<CaseStudySectionsProps> & {
    Grid: React.FC<CaseStudySectionsGridProps>;
    Item: React.FC<CaseStudySectionItemProps>;
    Content: React.FC<CaseStudySectionContentProps>;
  };
  Resources: React.FC<CaseStudyResourcesProps> & {
    List: React.FC<CaseStudyResourcesListProps>;
    Item: React.FC<CaseStudyResourceItemProps>;
  };
  Guidelines: React.FC<CaseStudyGuidelinesProps> & {
    Grid: React.FC<CaseStudyGuidelinesGridProps>;
    Group: React.FC<CaseStudyGuidelineGroupProps>;
    Item: React.FC<CaseStudyGuidelineItemProps>;
  };
  CTA: {
    Button: React.FC<CaseStudyCTAButtonProps>;
  }
}

function CaseStudy({ children }: CaseStudyProps) {
  return (
    <BaseLayout footerSticky={true}>
      <div className="relative z-10">
        <div className="bg-[#E5F6F5]">
          <BackToHomeButton className="pt-4 md:pt-6 lg:pt-10" />
        </div>
        {children}
      </div>
    </BaseLayout>
  );
}

// Attach all sub-components to the main component
const CaseStudyComponent = CaseStudy as CaseStudyComponent;

CaseStudyComponent.Hero = CaseStudyHero as typeof CaseStudyComponent.Hero;
CaseStudyComponent.Hero.Content = CaseStudyHeroContent;
CaseStudyComponent.Hero.Title = CaseStudyHeroTitle;
CaseStudyComponent.Hero.Subtitle = CaseStudyHeroSubtitle;
CaseStudyComponent.Hero.Description = CaseStudyHeroDescription;

CaseStudyComponent.Banner = CaseStudyBanner;

CaseStudyComponent.About = CaseStudyAbout as typeof CaseStudyComponent.About;
CaseStudyComponent.About.Content = CaseStudyAboutContent;

CaseStudyComponent.Sections = CaseStudySections as typeof CaseStudyComponent.Sections;
CaseStudyComponent.Sections.Grid = CaseStudySectionsGrid;
CaseStudyComponent.Sections.Item = CaseStudySectionItem;
CaseStudyComponent.Sections.Content = CaseStudySectionContent;

CaseStudyComponent.Resources = CaseStudyResources as typeof CaseStudyComponent.Resources;
CaseStudyComponent.Resources.List = CaseStudyResourcesList;
CaseStudyComponent.Resources.Item = CaseStudyResourceItem;

CaseStudyComponent.Guidelines = CaseStudyGuidelines as typeof CaseStudyComponent.Guidelines;
CaseStudyComponent.Guidelines.Grid = CaseStudyGuidelinesGrid;
CaseStudyComponent.Guidelines.Group = CaseStudyGuidelineGroup;
CaseStudyComponent.Guidelines.Item = CaseStudyGuidelineItem;

CaseStudyComponent.CTA = {
  Button: CaseStudyCTAButton
};

export default CaseStudyComponent;
