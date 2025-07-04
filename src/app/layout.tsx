import type { Metadata } from "next";
import { Epilogue, Cabin } from "next/font/google";
import { Header, Footer } from '@/components';
import { siteContent } from '@/content';
import "./globals.css";

const cabin = Cabin({
  variable: "--font-cabin",
  subsets: ["latin"],
});

const epilogue = Epilogue({
  variable: "--font-epilogue",
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
      <body className={`${cabin.variable} ${epilogue.variable} antialiased`}>
        <Header companyName="Pluie" />
        {children}
        <Footer
          description={siteContent.page.footer.shortDescription}
          contact={siteContent.contactInformation}
          socialLinks={siteContent.contactInformation.socialLinks}
        />
      </body>
    </html>
  );
}
