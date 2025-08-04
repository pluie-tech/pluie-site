"use client";

import { motion } from 'motion/react';
import { Hero, BaseLayout, Section, BackToHomeButton, Button } from '@/components';
import { ExternalLink } from 'lucide-react';
import { generateImageUrl } from '@/lib/utils';
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

interface CaseStudyHeroActionProps {
  children: ReactNode;
}

interface CaseStudyHeroButtonProps {
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
  children: ReactNode;
  icon: React.ComponentType<{ className?: string }>;
  category: 'frontend' | 'backend' | 'design' | 'other';
  index?: number;
}

// Visual Guidelines Components
interface CaseStudyGuidelinesProps {
  children: ReactNode;
  id?: string;
  className?: string;
  title?: string;
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
  return <Hero.Content>{children}</Hero.Content>;
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

function CaseStudyHeroAction({ children }: CaseStudyHeroActionProps) {
  return <Hero.Action>{children}</Hero.Action>;
}

function CaseStudyHeroButton({ children, href, target, rel }: CaseStudyHeroButtonProps) {
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
        className=""
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
      className={`py-10 xl:py-15 2xl:py-20 bg-white ${className || ''}`}
      title={title}
      subtitle={subtitle}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 'some' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
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
function CaseStudySections({ children, id = "case-sections", className, title }: CaseStudySectionsProps) {
  return (
    <Section id={id} className={`py-10 xl:py-15 2xl:py-20 bg-background ${className || ''}`}>
      <motion.div
        className="mx-auto max-w-7xl px-5 sm:px-8 xl:px-0"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 'some' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {title && (
          <h3 className="font-heading font-black text-[40px] leading-small tracking-title mb-12 text-center">
            {title}
          </h3>
        )}
        {children}
      </motion.div>
    </Section>
  );
}

function CaseStudySectionsGrid({ children, className }: CaseStudySectionsGridProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 ${className || ''}`}>
      {children}
    </div>
  );
}

function CaseStudySectionItem({ children, icon: Icon, title, index = 0 }: CaseStudySectionItemProps) {
  return (
    <motion.div
      className="space-y-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 'some' }}
      transition={{ duration: 0.4, delay: index * 0.1, ease: 'easeOut' }}
    >
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-azulao/10 rounded-xl flex items-center justify-center">
          <Icon className="w-6 h-6 text-azulao" />
        </div>
        <h4 className="font-heading font-bold text-2xl text-foreground">
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
    <Section id={id} className={`py-10 xl:py-15 2xl:py-20 ${className || ''}`}>
      <motion.div
        className="mx-auto max-w-7xl px-5 sm:px-8 xl:px-0"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 'some' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <h3 className="font-heading font-black text-[40px] leading-small tracking-title mb-12 text-center">
          {title}
        </h3>
        {children}
      </motion.div>
    </Section>
  );
}

function CaseStudyResourcesList({ children, className }: CaseStudyResourcesListProps) {
  return (
    <div className={`flex flex-wrap gap-4 justify-center ${className || ''}`}>
      {children}
    </div>
  );
}

function CaseStudyResourceItem({ children, icon: Icon, category, index = 0 }: CaseStudyResourceItemProps) {
  const categoryColors = {
    frontend: 'bg-blue-100 text-blue-800',
    backend: 'bg-green-100 text-green-800',
    design: 'bg-purple-100 text-purple-800',
    other: 'bg-gray-100 text-gray-800'
  };

  return (
    <motion.div
      className={`flex items-center gap-2 px-4 py-2 rounded-full ${categoryColors[category]}`}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 'some' }}
      transition={{ duration: 0.3, delay: index * 0.05, ease: 'easeOut' }}
    >
      <Icon className="w-4 h-4" />
      <span className="font-medium">{children}</span>
    </motion.div>
  );
}

// Visual Guidelines Components Implementation
function CaseStudyGuidelines({ children, id = "case-guidelines", className, title = "Guia visual" }: CaseStudyGuidelinesProps) {
  return (
    <Section id={id} className={`py-10 xl:py-15 2xl:py-20 bg-background ${className || ''}`}>
      <motion.div
        className="mx-auto max-w-7xl px-5 sm:px-8 xl:px-0"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 'some' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <h3 className="font-heading font-black text-[40px] leading-small tracking-title mb-12 text-center">
          {title}
        </h3>
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
    Action: React.FC<CaseStudyHeroActionProps>;
    Button: React.FC<CaseStudyHeroButtonProps>;
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
}

function CaseStudy({ children }: CaseStudyProps) {
  return (
    <BaseLayout footerSticky={true}>
      <div className="bg-gradient-to-b from-[#E1EFF8]/60 to-[#E0F8ED]/60 relative z-10">
        <BackToHomeButton />
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
CaseStudyComponent.Hero.Action = CaseStudyHeroAction;
CaseStudyComponent.Hero.Button = CaseStudyHeroButton;

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

export default CaseStudyComponent;
