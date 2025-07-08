import type { Metadata } from "next";
import { Epilogue, Cabin } from "next/font/google";
import Script from "next/script";
import { Header, Footer } from '@/components';
import "./globals.css";
import { siteConfig } from '@/siteConfig';

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
