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
  const textColorClass = color === 'black' ? 'text-foreground' : 'text-white';
  return (
    <div className={`text-center mb-12 ${className}`}>
      <h2 className={`text-[40px] sm:text-[64px] font-extrabold ${textColorClass} sm:text-4xl font-heading`}>{title}</h2>
      {subtitle && <p className={`mt-3 sm:mt-4 text-xl sm:text-2xl ${textColorClass}`}>{subtitle}</p>}
    </div>
  );
}