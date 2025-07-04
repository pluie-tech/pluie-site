import { LucideIcon } from 'lucide-react';
import { BrandIconType } from '../ui/BrandIcon';
import Link from 'next/link';

export interface FooterProps {
  companyName: string;
  socialLinks: Array<{
    name: string;
    href: string;
    icon: LucideIcon | BrandIconType;
  }>;
}

export default function Footer({
  companyName,
  socialLinks
}: FooterProps) {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-foreground py-8 px-8 flex flex-col gap-8 items-center sm:flex-row sm:justify-between">
      <p className="text-background text-sm">© {currentYear} {companyName}. Todos os direitos reservados.</p>
      {/* Social Links */}
      <div className="flex space-x-4 text-lg">
        {socialLinks.map((link, index) => (
          <div key={index} className="bg-background border-border-dark rounded-full p-2">
            <Link
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 hover:underline transition-colors duration-200"
              aria-label={link.name}
            >
              <link.icon size={18} />
            </Link>
          </div>
        ))}
      </div>
    </footer>
  );
}
