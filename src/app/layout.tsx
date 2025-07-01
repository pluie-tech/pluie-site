import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header, Footer } from '@/components';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pluie - Tecnologia que resolve, sem complicar",
  description: "Entendemos as necessidades da sua empresa e criamos soluções digitais sob medida para promover eficiência e crescimento.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header companyName="Pluie" />
        {children}
        <Footer 
          companyName="Pluie"
          description="Building innovative solutions for businesses worldwide. We're committed to excellence and delivering results that matter."
          socialLinks={[
            { name: "Twitter", href: "https://twitter.com", icon: "🐦" },
            { name: "LinkedIn", href: "https://linkedin.com", icon: "💼" },
            { name: "GitHub", href: "https://github.com", icon: "🐙" }
          ]}
        />
      </body>
    </html>
  );
}
