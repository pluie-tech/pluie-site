import { cn } from '@/lib/utils';
import SectionTitle from './SectionTitle';

interface SectionProps {
  title?: string
  subtitle?: string
  id: string
  color?: 'black' | 'white'
  rounded?: 'full' | 'top' | 'bottom' | 'none'
  preSection?: React.ReactNode
  className?: string
  titleClassName?: string
  contentClassName?: string
  children: React.ReactNode
}

const roundClassMap = {
  full: 'rounded-4xl',
  top: 'rounded-t-4xl',
  bottom: 'rounded-b-4xl',
  none: ''
}

export default function Section({ title, subtitle, id, color = 'white', rounded = 'none', preSection, className, titleClassName, contentClassName, children }: SectionProps) {
  const sectionBgColorClass = color === 'black' ? 'bg-foreground' : 'bg-background'
  const sectionRoundedClass = roundClassMap[rounded]

  return (
    <section id={id} className={cn(`py-13 sm:py-16 2xl:py-20`, sectionBgColorClass, sectionRoundedClass, className)}>
      {preSection && <>{preSection}</>}
      <div>
        {(title || subtitle) && (
          <div className="text-center">
            <SectionTitle title={title || ''} subtitle={subtitle} color={color === 'black' ? 'white' : 'black'} className={titleClassName} />
          </div>
        )}
        <div className={cn("mx-auto mt-16", contentClassName)}>{children}</div>
      </div>
    </section>
  )
}
