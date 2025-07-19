'use client';

import { motion, AnimatePresence } from 'motion/react';
import { X, Cookie } from 'lucide-react';
import Button from './Button';
import { cn } from '@/lib/utils';
import { useConsent } from '@/contexts/ConsentContext';

interface CookieConsentProps {
  className?: string;
}

export default function CookieConsent({ className }: CookieConsentProps) {
  const { hasConsented, isLoaded, acceptCookies, rejectCookies } = useConsent();

  if (!isLoaded || hasConsented) {
    return null;
  }

  return (
    <AnimatePresence>
      <>        
        {/* Cookie Banner */}
        <motion.div
          className={cn(
            "fixed bottom-4 left-4 right-4 md:left-6 md:right-6 lg:left-8 lg:right-8 xl:left-auto xl:right-8 xl:max-w-lg z-[101]",
            "bg-white border border-gray-200 rounded-2xl shadow-2xl shadow-black/10",
            className
          )}
          initial={{ opacity: 0, y: 100, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 100, scale: 0.95 }}
          transition={{ 
            duration: 0.3, 
            ease: [0.4, 0, 0.2, 1],
            type: "spring",
            stiffness: 300,
            damping: 30
          }}
        >
          <div className="p-6">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <Cookie className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 text-lg">
                  Melhorar sua experiência
                </h3>
              </div>
              <button
                onClick={rejectCookies}
                className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="space-y-3 mb-6">
              <p className="text-gray-700 text-sm leading-relaxed">
                Utilizamos o Google Analytics para entender como você interage com nosso site e melhorar continuamente nossos serviços. 
                Os dados coletados são completamente anônimos e não permitem sua identificação.
              </p>
              <p className="text-gray-600 text-xs">
                Ao clicar em &ldquo;Aceitar&rdquo;, você nos ajuda a oferecer uma experiência ainda melhor e concorda com nossa{' '}
                <a 
                  href="/politica-de-privacidade" 
                  className="text-blue-600 hover:text-blue-800 underline font-medium"
                >
                  Política de Privacidade
                </a>
                .
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-3">
              <Button
                as="button"
                onClick={acceptCookies}
                variant="primary"
                className="w-full text-sm font-medium"
              >
                Aceitar e continuar
              </Button>
              <button
                onClick={rejectCookies}
                className="text-xs text-gray-500 hover:text-gray-700 transition-colors"
              >
                Continuar sem aceitar
              </button>
            </div>

            {/* Fine print */}
            <p className="text-xs text-gray-500 mt-3 text-center">
              Você pode alterar suas preferências a qualquer momento na nossa política de privacidade.
            </p>
          </div>
        </motion.div>
      </>
    </AnimatePresence>
  );
}
