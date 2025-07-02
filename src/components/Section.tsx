import { cn } from '@/lib/util'
import SectionTitle from './SectionTitle'

interface SectionProps {
  title?: string
  subtitle?: string
  id: string
  color?: 'black' | 'white'
  rounded?: 'top' | 'full' | 'none'
  preSection?: React.ReactNode
  children: React.ReactNode
}

export default function Section({ title, subtitle, id, color = 'white', rounded = 'none', preSection, children }: SectionProps) {
  const sectionBgColorClass = color === 'black' ? 'bg-foreground' : 'bg-background'
  const sectionRoundedClass = rounded === 'none' ? '' : rounded === 'top' ? 'rounded-t-4xl' : 'rounded-4xl'
  return (
    <section id={id} className={cn(`py-13 sm:py-16 2xl:py-20`, sectionBgColorClass, sectionRoundedClass)}>
      {preSection && <>{preSection}</>}
      <div className="px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <div className="mx-auto max-w-2xl text-center">
            <SectionTitle title={title || ''} subtitle={subtitle} color={color === 'black' ? 'white' : 'black'} />
          </div>
        )}
        <div className="mx-auto mt-16 container">{children}</div>
      </div>
    </section>
  )
}
