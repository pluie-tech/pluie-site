import { cn } from '@/lib/utils';
import Button from './Button';
import { Home } from 'lucide-react';

interface BackToHomeButtonProps {
  className?: string;
}

export default function BackToHomeButton({ className = "" }: BackToHomeButtonProps) {
  return (
    <div className={cn("flex justify-center", className)}>
      <Button 
        variant="outline" 
        leftIcon={Home} 
        href="/" 
        aria-label="Voltar para a página inicial"
      >
        Voltar para a página inicial
      </Button>
    </div>
  );
}
