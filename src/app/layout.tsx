import type { Metadata } from "next";
import { Epilogue, Cabin } from "next/font/google";
import { Header, Footer } from '@/components';
import { Linkedin, Mail } from 'lucide-react';
import { WhatsAppIcon } from '@/components';
import "./globals.css";

const cabin = Cabin({
  variable: "--font-cabin",
  subsets: ["latin"],
});

const epilogue = Epilogue({
  variable: "--font-epilogue",
  subsets: ["latin"],
});

const contactInformation = {
  whatsappLink: 'https://wa.me/5541984926574?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20Pluie.',
  socialLinks: [
    { name: "WhatsApp", href: 'https://wa.me/5541984926574?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20Pluie.', icon: WhatsAppIcon },
    { name: "LinkedIn", href: "https://www.linkedin.com/company/pluietech/", icon: Linkedin },
    { name: "E-mail", href: `mailto:contato@pluie.com`, icon: Mail },
  ],
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Pluie - Tecnologia que resolve, sem complicar',
    description: 'Entendemos as necessidades da sua empresa e criamos soluções digitais sob medida para promover eficiência e crescimento.',
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${cabin.variable} ${epilogue.variable} antialiased`}>
        <Header companyName="Pluie" whatsappLink={contactInformation.whatsappLink} />
        {children}
        <Footer
          companyName="Pluie"
          socialLinks={contactInformation.socialLinks}
        />
      </body>
    </html>
  );
}
