'use client';

import Link from 'next/link';
import { motion, AnimatePresence, useScroll, useMotionValueEvent, useTransform } from 'motion/react'
import Logo from '../ui/Logo';
import { useEffect, useRef, useState } from 'react';
import Button from '../ui/Button';
import { useClickAway } from '@/hooks/useClickAway';
import { Menu, X } from 'lucide-react';
import { siteConfig } from '@/siteConfig';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/useIsMobile';

const navigation = [
  { name: 'Quem somos', href: '/#quem-somos' },
  { name: 'Como funciona', href: '/#como-funciona' },
  { name: 'Soluções', href: '/#solucoes' }
];

export default function Header() {
  const { scrollY } = useScroll()
  const isMobile = useIsMobile()
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setMobileMenuOpen(false));

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setHasScrolled(latest > 40);
  });

  const dynamicHeaderHeight = useTransform(scrollY, [0, 400], ['80px', '68px']);
  const dynamicLogoSize = useTransform(scrollY, [0, 400], [110, 84]);
  const dynamicTop = useTransform(scrollY, [0, 400], ['0px', '16px']);

  const headerHeight = isMobile ? dynamicHeaderHeight : '80px';
  const logoSize = isMobile ? dynamicLogoSize : 110;
  const top = isMobile ? '0px' : dynamicTop;

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'auto';
  }, [isMobileMenuOpen]);

  return (
    <motion.header
      className={cn("sticky z-50 bg-background max-w-7xl lg:rounded-4xl lg:mx-auto top-0", {
        'shadow-sm': hasScrolled,
      })}
      style={{
        top
      }}
    >
      <nav className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8" aria-label="Top">
        <motion.div className="flex w-full items-center justify-between" style={{ height: headerHeight  }}>
          <div className="flex justify-around items-center">
            <Link href="/">
              <span className="sr-only">Pluie</span>
              <div className="inline">
                <Logo size={logoSize} withName />
              </div>
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8 font-medium">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-foreground px-3 py-2 transition-colors duration-200 hover:underline"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden lg:inline">
            <Button
              href={siteConfig.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-foreground text-background hover:bg-black transition-colors duration-200"
            >
                Fale conosco
            </Button>
          </div>

          {/* Mobile navigation */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed left-0 top-0 h-dvh w-full flex justify-center flex-col items-center bg-white"
              >
                <>
                  <button
                    type="button"
                    className="absolute top-6 right-7 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 cursor-pointer"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <X className="h-8 w-8 stroke-2 text-foreground" />
                  </button>
                  <ul className="flex flex-col gap-6 relative -top-20">
                    {navigation.map((item, idx) => {
                      return (
                          <motion.li
                            initial={{ scale: 0, opacity: 0, filter: 'blur(10px)' }}
                            animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
                            transition={{
                              type: "spring",
                              stiffness: 140,
                              damping: 20,
                              delay: 0.1 + idx / 10,
                            }}
                            key={item.name}
                            className="w-full text-center"
                          >
                            <Link
                              key={item.name}
                              href={item.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="text-foreground py-4 font-heading text-2xl transition-colors duration-200 hover:underline"
                            >
                              {item.name}
                            </Link>
                          </motion.li>
                      );
                    })}
                    <motion.li
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: 0.1 + 4 / 10,
                      }}
                      className="mt-10"
                    >
                      <Button
                        href={siteConfig.whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className='w-fit pb-4 pt-5 text-xl font-medium bg-foreground text-background hover:bg-black transition-colors duration-200'
                      >
                        Fale conosco
                      </Button>
                    </motion.li>
                  </ul>
                </>
              </motion.div>
            )}
          </AnimatePresence>
          <div className="lg:hidden">
            <button
              type="button"
              className="rounded-md p-2 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset cursor-pointer"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
            >
              <span className="sr-only">Abrir menu</span>
              <Menu className="h-7 w-7 stroke-2 text-foreground" />
            </button>
          </div>
        </motion.div>
      </nav>
    </motion.header>
  );
}
