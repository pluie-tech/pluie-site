import { cn } from '@/lib/utils';

export interface SectionTitleProps {
  title: string;
  subtitle?: string;
  color?: 'black' | 'white' | 'primary' | 'secondary';
  className?: string;
}

export default function SectionTitle({
  title = '',
  subtitle = '',
  color = 'black',
  className = "",
}: SectionTitleProps) {
  const textColorClass = color === 'black' ? 'text-foreground' : 'text-background';
  return (
    <div className={cn('text-center', className)}>
      <h2 className={cn(`text-[40px] md:text-[64px] font-black tracking-title font-heading leading-small`, textColorClass)}>{title}</h2>
      {subtitle && <p className={cn(`mt-3 sm:mt-5 text-xl sm:text-2xl`, textColorClass)}>{subtitle}</p>}
    </div>
  );
}