import Link from 'next/link';
import { LucideIcon } from 'lucide-react';
import { BrandIconType } from './BrandIcon';
import { ComponentPropsWithoutRef, ElementType } from 'react';
import { cn } from '@/lib/utils';

export type ButtonVariant = 'primary' | 'outline';

export interface ButtonProps {
  variant?: ButtonVariant;
  className?: string;
  leftIcon?: LucideIcon | BrandIconType | null;
  leftIconSize?: number;
  as?: ElementType;
  children?: React.ReactNode;
}

export default function Button({
  variant = 'primary',
  className = "",
  leftIcon: LeftIcon = null,
  leftIconSize = 16,
  as: Component = Link,
  children,
  ...props
}: ButtonProps & ComponentPropsWithoutRef<'a'> & ComponentPropsWithoutRef<'button'>) {
  // Classes base comuns a todas as variantes
  const baseClasses = "inline-flex justify-center items-center rounded-xl font-semibold font-heading transition-colors tracking-title cursor-pointer";
  
  // Classes específicas para cada variante
  const variantClasses = {
    primary: "px-6 pt-4 pb-3.5 bg-primary text-foreground shadow hover:bg-primary/90",
    outline: "px-6 pt-3 pb-2.5 border border-border-dark bg-background text-foreground hover:bg-gray-100 shadow-button"
  };

  return (
    <Component
      {...props}
      className={cn(baseClasses, variantClasses[variant], className)}
    >
      {LeftIcon && (
        <span className="mr-2 -translate-y-0.5">
          <LeftIcon size={leftIconSize} className="stroke-2" />
        </span>
      )}
      <span className={variant === 'primary' ? 'leading-none' : ''}>
        {children}
      </span>
    </Component>
  );
}