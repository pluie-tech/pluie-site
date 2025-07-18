"use client";

import Section from '../Section';
import Button, { ButtonVariant } from '../ui/Button';
import { WhatsAppIcon } from '@/components';
import { siteConfig } from '@/siteConfig';
import { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';
import { BrandIconType } from '../ui/BrandIcon';

interface FinalCTAProps {
  children: ReactNode;
  id?: string;
  title?: string;
  subtitle?: string;
  color?: 'white' | 'black';
  rounded?: 'top' | 'bottom' | 'full' | 'none';
  className?: string;
  contentClassName?: string;
  titleClassName?: string;
}

interface CTAContentProps {
  children: ReactNode;
  className?: string;
}

interface CTAActionProps {
  children: ReactNode;
  className?: string;
}

interface CTAButtonProps {
  children: ReactNode;
  href?: string;
  target?: string;
  rel?: string;
  variant?: ButtonVariant;
  leftIcon?: LucideIcon | BrandIconType | null;
  className?: string;
  onClick?: () => void;
}

function FinalCTARoot({ 
  children, 
  id = "cta-final", 
  title, 
  subtitle, 
  color = "black", 
  rounded = "bottom",
  className = "pb-12 pt-8 sm:pt-10 sm:pb-15",
  contentClassName = "mt-6 sm:mt-10",
  titleClassName
}: FinalCTAProps) {
  return (
    <Section
      id={id}
      title={title}
      subtitle={subtitle}
      color={color}
      rounded={rounded}
      className={className}
      contentClassName={contentClassName}
      titleClassName={titleClassName}
    >
      {children}
    </Section>
  );
}

function CTAContent({ children, className = "" }: CTAContentProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}

function CTAAction({ children, className = "flex justify-center" }: CTAActionProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}

function CTAButton({ 
  children, 
  href = siteConfig.whatsappLink,
  target = "_blank",
  rel = "noopener noreferrer",
  variant = 'primary' as ButtonVariant,
  leftIcon = WhatsAppIcon,
  className = "w-54",
  onClick
}: CTAButtonProps) {
  return (
    <Button
      href={href}
      target={target}
      rel={rel}
      variant={variant}
      leftIcon={leftIcon}
      className={className}
      onClick={onClick}
      aria-label="Fale conosco"
    >
      {children}
    </Button>
  );
}

// Compound component with sub-components
const FinalCTA = Object.assign(FinalCTARoot, {
  Content: CTAContent,
  Action: CTAAction,
  Button: CTAButton,
});

export default FinalCTA;
