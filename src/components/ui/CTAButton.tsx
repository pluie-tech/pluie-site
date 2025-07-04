import { LucideIcon } from 'lucide-react';
import WhatsAppIcon from './BrandIcon';
import Button from './Button';

export interface CTAButtonProps {
  text?: string;
  link?: string;
  className?: string;
  leftIcon?: LucideIcon | typeof WhatsAppIcon | null;
  leftIconSize?: number;
}

export default function CTAButton({
  text = "Call to Action",
  link = "#",
  className = "",
  leftIcon: LeftIcon = null,
  leftIconSize = 16
}: CTAButtonProps) {
  return (
    <Button 
      href={link}
      leftIcon={LeftIcon}
      leftIconSize={leftIconSize}
      variant='primary'
      aria-label={text}
      className={className}
    >
      {text}
    </Button>
  );
}
