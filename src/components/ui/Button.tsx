import { LucideIcon } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { ComponentPropsWithoutRef, ElementType } from 'react';

export interface ButtonProps {
  variant?: 'primary' | 'outline';
  className?: string;
  leftIcon?: LucideIcon | typeof WhatsAppIcon | null;
  leftIconSize?: number;
  as?: ElementType;
  children?: React.ReactNode;
}

export default function Button({
  variant = 'primary',
  className = "",
  leftIcon: LeftIcon = null,
  leftIconSize = 16,
  as: Component = 'a',
  children,
  ...props
}: ButtonProps & ComponentPropsWithoutRef<'a'> & ComponentPropsWithoutRef<'button'>) {
  // Classes base comuns a todas as variantes
  const baseClasses = "inline-flex justify-center items-center rounded-xl font-heading transition-colors";
  
  // Classes específicas para cada variante
  const variantClasses = {
    primary: "px-6 py-4 bg-primary text-foreground shadow font-bold hover:bg-primary/90",
    outline: "px-6 py-2 border border-gray-300 bg-background text-foreground font-semibold hover:bg-gray-100"
  };

  return (
    <Component
      {...props}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      aria-label={String(children)}
    >
      {LeftIcon && (
        <span className="mr-2 -translate-y-0.5">
          <LeftIcon size={leftIconSize} />
        </span>
      )}
      <span className={variant === 'primary' ? 'leading-none' : ''}>
        {children}
      </span>
    </Component>
  );
}