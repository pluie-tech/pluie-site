'use client';

import { BaseLayout } from '@/components';
import Button from '@/components/ui/Button';
import { Home } from 'lucide-react';
import { motion } from 'motion/react';

export default function NotFound() {
  return (
    <BaseLayout footerSticky={false}>
      <div className="min-h-screen bg-gradient-to-b from-[#E1EFF8]/60 to-[#E0F8ED]/60 flex items-center justify-center px-4">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <h1 className="text-[120px] sm:text-[200px] md:text-[280px] font-black font-heading text-foreground leading-none tracking-title mb-4">
              404
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
            className="mb-8"
          >
            <h2 className="text-[32px] sm:text-[40px] font-black font-heading text-foreground mb-4 tracking-title leading-small">
              Página não encontrada
            </h2>
            <p className="text-lg sm:text-xl text-foreground/80 leading-body max-w-md mx-auto">
              A página que você está procurando não existe ou foi movida.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
          >
            <Button 
              href="/"
              leftIcon={Home}
              variant="primary"
              className="text-lg px-8 py-4"
            >
              Voltar para a página inicial
            </Button>
          </motion.div>
        </div>
      </div>
    </BaseLayout>
  );
}
