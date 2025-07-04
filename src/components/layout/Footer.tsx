import { LucideIcon } from 'lucide-react';
import Logo from '../ui/Logo';
import Link from 'next/link';
import { BrandIconType } from '../ui/BrandIcon';

export interface FooterProps {
  description: string;
  socialLinks: Array<{
    name: string;
    href: string;
    icon: LucideIcon | BrandIconType;
  }>;
  contact: {
    email: string;
    phone: string;
  }
}


const navigation = [
  { name: "Quem somos", href: "#quem-somos" },
  { name: "Como funciona", href: "#como-funciona" },
  { name: "Soluções", href: "#solucoes" },
  { name: "Contato", href: "#contato" }
];

export default function Footer({
  description,
  socialLinks,
  contact
}: FooterProps) {
  return (
    <footer className="">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Company Information */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Logo size={96} withName />
            </div>
            <p className="mb-6 max-w-64">
              {description}
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4 text-lg">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="hover:text-gray-900 hover:underline transition-colors duration-200"
                  aria-label={link.name}
                >
                  <link.icon />
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-slate-100">
              Navegação
            </h3>
            <ul className="space-y-3 font-medium">
              {navigation.map((link, index) => (
                <li key={index}>
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-foreground transition-colors duration-200 hover:underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-slate-100">
              Contato
            </h3>
            <div className="space-y-3 font-medium">
              <p>
                <span className="block">{contact.email}</span>
              </p>
              <p>
                <span className="block">{contact.phone}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
