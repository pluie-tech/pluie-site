import { LucideIcon } from 'lucide-react';
import { Lightbulb } from 'lucide-react';

export type TargetAudience = {
  icon: LucideIcon;
  name: string;
}

export const sitesTargetAudience: TargetAudience[] = [
  {
    icon: Lightbulb,
    name: 'Pet shops e clínicas veterinárias',
  },
  {
    icon: Lightbulb,
    name: 'Imobiliárias e incorporadoras',
  },
  {
    icon: Lightbulb,
    name: 'Consultórios e clínicas médicas',
  },
  {
    icon: Lightbulb,
    name: 'Escritórios de advocacia',
  },
  {
    icon: Lightbulb,
    name: 'Negócios locais e prestadores de serviço',
  },
];

export const sitesWorkflowSteps = [
  'Entendimento do negócio',
  'Arquitetura e experiência do usuário',
  'Design visual e responsivo',
  'Implementação leve e escalável',
  'SEO técnico e integração com ferramentas como WhatsApp, Google Maps e Analytics'
];
