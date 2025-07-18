'use client';

import { Header, Footer } from '@/components';
import { WhatsAppFAB } from '@/components/ui/WhatsAppFAB';


interface BaseLayoutProps {
  children: React.ReactNode;
  footerSticky?: boolean;
}

export default function BaseLayout({ children, footerSticky = false }: BaseLayoutProps) {
  return (
    <>
      <Header />
      <main className="overflow-hidden relative z-20 bg-background">{children}</main>
      <Footer sticky={footerSticky} />
      <WhatsAppFAB />
    </>
  );
}
