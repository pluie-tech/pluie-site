import type { Metadata } from "next";
import { Epilogue, Cabin } from "next/font/google";
import { Header, Footer } from '@/components';
import { siteContent } from '@/content';
import "./globals.css";
import { generateWhatsappLink } from '@/lib/utils';

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
    title: siteContent.title,
    description: siteContent.description,
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const whatsappLink = generateWhatsappLink(siteContent.contactInformation.phone, siteContent.contactInformation.whatsappMessage)

  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${cabin.variable} ${epilogue.variable} antialiased`}>
        <Header companyName="Pluie" whatsappLink={whatsappLink} />
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
