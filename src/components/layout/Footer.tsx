import { Linkedin } from "lucide-react";
import Logo from '../ui/Logo';
import Link from 'next/link';

export interface FooterProps {
  companyName?: string;
  description?: string;
  socialLinks?: Array<{
    name: string;
    href: string;
    icon: React.ReactNode;
  }>;
  quickLinks?: Array<{
    name: string;
    href: string;
  }>;
  contact?: {
    email: string;
    phone: string;
  }
}

export default function Footer({
  description = "Tecnologia sob medida para resolver problemas reais.",
  socialLinks = [
    { name: "LinkedIn", href: "#", icon: <Linkedin /> }
  ],
  quickLinks = [
    { name: "Quem somos", href: "#quem-somos" },
    { name: "Como funciona", href: "#como-funciona" },
    { name: "Soluções", href: "#solucoes" },
    { name: "Contato", href: "#contato" },
  ],
  contact = {
    email: "contato@pluie.tech",
    phone: "(41) 8492-6574"
  }
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
            <p className="mb-6 font-medium max-w-64">
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
                  {link.icon}
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
              {quickLinks.map((link, index) => (
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
