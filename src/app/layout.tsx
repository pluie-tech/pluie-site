import type { Metadata } from "next";
import { Epilogue, Cabin } from "next/font/google";
import Script from "next/script";
import { WithContext, LocalBusiness } from 'schema-dts';
import { Header, Footer } from '@/components';
import { siteConfig } from '@/siteConfig';
import "./globals.css";

const cabin = Cabin({
  variable: "--font-cabin",
  subsets: ["latin"],
});

const epilogue = Epilogue({
  variable: "--font-epilogue",
  subsets: ["latin"],
});


export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Pluie - Tecnologia que resolve, sem complicar',
    description: 'Entendemos as necessidades da sua empresa e criamos soluções digitais sob medida para promover eficiência e crescimento.',
  }
}

const schema: WithContext<LocalBusiness> = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Pluie",
  "url": "https://pluie.software",
  "description": "Pluie é um estúdio de software que cria soluções digitais sob medida para negócios em crescimento.",
  "image": "https://pluie.tech/logo.png",
  "email": "contato@pluie.com",
  "telephone": "+55 41 98492-6574",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Curitiba",
    "addressRegion": "PR",
    "addressCountry": "BR"
  },
  "openingHours": "Mo-Fr 09:00-18:00",
  "priceRange": "$$",
  "areaServed": {
    "@type": "Place",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "BR"
    }
  },
  "sameAs": [
    "https://www.linkedin.com/company/pluietech",
    "https://wa.me/5541984926574"
  ],
  "makesOffer": [
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Criação de sites, aplicativos e sistemas personalizados"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Consultoria em usabilidade e UX"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Automações e integrações sob demanda"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Criação de identidade visual"
      }
    }
  ]
}

function isProduction(): boolean {
  return process.env.NODE_ENV === 'production';
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className={`${cabin.variable} ${epilogue.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
        {isProduction() && (
          <Script
            src="https://analytics.pluie.tech/script.js"
            data-website-id={siteConfig.umamiSiteId}
            strategy="afterInteractive"
          />
        )}
      </body>
    </html>
  );
}
