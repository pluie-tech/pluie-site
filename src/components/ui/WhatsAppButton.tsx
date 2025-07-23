'use client';

import { siteConfig } from '@/siteConfig';
import { generateWhatsappLink } from '@/lib/utils';
import Button, { ButtonProps, ButtonVariant } from './Button';
import { WhatsAppIcon } from './BrandIcon';

export interface WhatsAppButtonProps extends Omit<ButtonProps, 'href' | 'target' | 'rel' | 'variant'> {
  /** Text displayed on the button */
  text?: string;
  /** Custom WhatsApp message. If not provided, uses default from siteConfig */
  message?: string;
  /** Whether to show WhatsApp icon. Default is true */
  showIcon?: boolean;
  /** Custom WhatsApp icon size. Default is 16 */
  iconSize?: number;
  /** Button variant type */
  variant?: ButtonVariant | 'fab';
}

const DEFAULT_MESSAGES = {
  default: 'Olá, gostaria de saber mais sobre os serviços da Pluie.',
  sites: 'Olá, gostaria de saber mais sobre criação de sites profissionais.',
  design: 'Olá, gostaria de saber mais sobre serviços de design.',
  agendar: 'Olá, gostaria de agendar uma conversa gratuita.',
  projeto: 'Olá, gostaria de começar um projeto com a Pluie.',
} as const;

export type MessageType = keyof typeof DEFAULT_MESSAGES;

interface WhatsAppButtonWithMessageProps extends Omit<WhatsAppButtonProps, 'message'> {
  /** Predefined message type */
  messageType?: MessageType;
  /** Custom message (overrides messageType) */
  message?: string;
}

export default function WhatsAppButton({
  text = 'Fale conosco',
  message,
  messageType = 'default',
  showIcon = true,
  iconSize = 16,
  variant = 'primary' as ButtonVariant | 'fab',
  className = '',
  leftIcon,
  ...props
}: WhatsAppButtonWithMessageProps) {
  // Generate WhatsApp link
  const finalMessage = message || DEFAULT_MESSAGES[messageType];

  const whatsappLink = generateWhatsappLink(siteConfig.phone, finalMessage);

  // Determine which icon to use
  const iconToUse = leftIcon || (showIcon ? WhatsAppIcon : null);

  // Handle FAB variant
  if (variant === 'fab') {
    return (
      <Button
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale Conosco"
        className="fixed lg:hidden bottom-6 right-4 bg-green-600 text-background rounded-full p-3 shadow-lg hover:bg-green-700 transition-colors duration-300 z-50">
        <WhatsAppIcon className="fill-background" size={36} />
      </Button>
    );
  }

  return (
    <Button
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={text}
      variant={variant}
      className={className}
      leftIcon={iconToUse}
      leftIconSize={iconSize}
      {...props}
    >
      {text}
    </Button>
  );
}

// Convenience components for common use cases
export const WhatsAppCTAButton = (props: Omit<WhatsAppButtonWithMessageProps, 'variant'>) => (
  <WhatsAppButton variant="primary" className="w-54" {...props} />
);

export const WhatsAppHeaderButton = (props: Omit<WhatsAppButtonWithMessageProps, 'variant'>) => {
  const { className, ...otherProps } = props;
  return (
    <WhatsAppButton 
      variant="primary" 
      className={`bg-foreground text-background hover:bg-black transition-colors duration-200 ${className || ''}`}
      {...otherProps}
    />
  );
};

export const WhatsAppFAB = (props: Omit<WhatsAppButtonWithMessageProps, 'variant' | 'showIcon'>) => (
  <WhatsAppButton variant="fab" showIcon={true} {...props} />
);
