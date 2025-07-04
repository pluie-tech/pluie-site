'use client';

import Link from 'next/link';
import Logo from '../ui/Logo';
import { generateWhatsappLink } from '@/lib/utils';
import { siteContent } from '@/content'

export interface HeaderProps {
  companyName?: string;
}

const navigation = [
  { name: 'Quem somos', href: '#quem-somos' },
  { name: 'Como funciona', href: '#como-funciona' },
  { name: 'Soluções', href: '#solucoes' },
];

const whatsappLink = generateWhatsappLink(siteContent.contactInformation.phone, siteContent.contactInformation.whatsappMessage)
export default function Header({ companyName = "Pluie" }: HeaderProps) {

  return (
    <header className="sticky top-0 z-50 bg-white shadow-header">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between py-4">
          <div className="flex justify-around items-center">
            <Link href="/">
              <span className="sr-only">{companyName}</span>
              <div className="hidden md:inline">
                <Logo size={120} withName />
              </div>
              <div className="md:hidden">
                <Logo size={32} />
              </div>
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8 font-medium">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-foreground px-3 py-2 transition-colors duration-200 hover:underline"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <Link
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full p-2.5 border border-[#707070]"
              aria-label="Fale conosco no WhatsApp"
            >
              <svg
                className="h-4 w-4 text-foreground"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M20.52 3.48A11.93 11.93 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.59 5.97L0 24l6.19-1.62A11.93 11.93 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22c-1.85 0-3.67-.5-5.24-1.44l-.37-.22-3.68.96.98-3.59-.24-.37A9.93 9.93 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.6c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.35-.01-.54-.01-.19 0-.5.07-.76.34-.26.27-1 1-.98 2.44.02 1.44 1.03 2.84 1.18 3.04.15.2 2.03 3.1 4.92 4.22.69.27 1.23.43 1.65.55.69.22 1.32.19 1.81.12.55-.08 1.65-.67 1.89-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z"/>
              </svg>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
