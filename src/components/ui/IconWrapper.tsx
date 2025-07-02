import { cn } from '@/lib/util';
import { LucideIcon } from 'lucide-react';

type Size = 'small' | 'medium' | 'large';
type IconWrapperProps = {
  icon: LucideIcon
  className?: string;
  size?: Size;
}

const sizeClasses = {
  small: "w-7 h-7 rounded-xl p-[6px]",
  medium: "w-9 h-9 rounded-2xl p-2",
  large: "w-16 h-16 rounded-3xl p-3",
};

export default function IconWrapper({
  icon: Icon,
  className = "",
  size = 'medium'
}: IconWrapperProps) {
  
  return (
    <span
      className={cn("inline-flex items-center justify-center bg-azulao text-white ", sizeClasses[size], className)}
    >
      {<Icon />}
    </span>
  );
}