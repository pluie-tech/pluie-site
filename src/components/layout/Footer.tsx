'use client'

import { Linkedin, Mail } from 'lucide-react'
import { useState } from 'react'
import Logo from '../ui/Logo'
import Link from 'next/link'
import { WhatsAppIcon } from '../ui/BrandIcon'
import { siteConfig } from '@/siteConfig'
import { useMotionValueEvent, useScroll } from 'motion/react'
import { cn } from '@/lib/utils'

type FooterProps = {
  sticky?: boolean
}

const solutions = [
  { name: 'Sites profissionais', href: '/sites' },
  { name: 'Design & UX', href: '/design' }
]

const description = 'Pluie é um estúdio de software que cria soluções digitais sob medida para negócios em crescimento.'

export default function Footer({ sticky = false }: FooterProps) {
  const { scrollYProgress } = useScroll()
  const [hasScrolled, setHasScrolled] = useState(false)

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    setHasScrolled(latest > 0.9)
  })

  return (
    <footer className={cn(
      'text-background',
      hasScrolled ? 'bg-foreground' : 'bg-foreground',
      sticky ? 'sticky bottom-0 left-0 w-full z-10' : '',
    )}>
      <div className="mx-auto max-w-7xl px-4 pt-6 pb-4 sm:py-12 sm:px-6 lg:px-8 lg:py-14">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Company Information */}
          <div className="lg:col-span-1">
            <div className="mb-4 flex items-center gap-4">
              <Logo size={36} />
            </div>
            <p className="md:mb-6 max-w-64">{description}</p>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Soluções</h3>
            <ul className="space-y-3 font-medium">
              {solutions.map((link, index) => (
                <li key={index}>
                  <Link key={link.name} href={link.href} className="text-background hover:underline">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Contato</h3>
            <div className="space-y-3 font-medium">
              <p>
                <span className="block">{siteConfig.email}</span>
              </p>
              <p>
                <span className="block">{siteConfig.phone}</span>
              </p>
            </div>
            {/* Social Links */}
            <div className="flex space-x-4 text-lg mt-4">
              <Link href={siteConfig.whatsappLink} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <WhatsAppIcon className="text-background fill-background" />
              </Link>
              <Link href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="text-background stroke-2" />
              </Link>
              <Link href={`mailto:${siteConfig.email}`} target="_blank" rel="noopener noreferrer" aria-label="E-mail">
                <Mail className="text-background stroke-2" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-4 border-t border-neutral-800 pt-4 flex justify-between items-center">
          <a href="/politica-de-privacidade/" className="text-sm text-background hover:underline">
            Política de privacidade
          </a>
        </div>
      </div>
    </footer>
  )
}
