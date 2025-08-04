import { LucideIcon } from 'lucide-react';
import { 
  Database, 
  Palette, 
  Code2, 
  Figma,
  User,
  Target,
  Timer,
  TrendingUp
} from 'lucide-react';

export type CaseStudySection = {
  icon: LucideIcon;
  title: string;
  content: string;
}

export type CaseStudyResource = {
  icon: LucideIcon;
  name: string;
  category: 'frontend' | 'backend' | 'design' | 'other';
}

export type CaseStudyVisualGuideline = {
  title: string;
  items: {
    type: 'color' | 'font' | 'other';
    name: string;
    value: string;
    preview?: string; // For colors, this would be the hex value
  }[];
}

export type CaseStudy = {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  heroImage?: string;
  bannerImage: string;
  aboutImage: string;
  appIconImage: string;
  appUrl?: string;
  ctaText: string;
  aboutReversed?: boolean;
  aboutContent: {
    title: string;
    subtitle?: string;
    items: string[];
  };
  sections: CaseStudySection[];
  resources: CaseStudyResource[];
  visualGuidelines: CaseStudyVisualGuideline[];
}

// Desafiado case study data
export const desafiadoCaseStudy: CaseStudy = {
  id: 'desafiado',
  title: 'Web app: Desafiado',
  subtitle: 'Transforme objetivos em hábitos duradouros.',
  bannerImage: '/cases/desafiado/banner.png',
  aboutImage: '/cases/desafiado/about.png',
  appIconImage: '/images/cases/desafiado/icon.png',
  appUrl: 'https://desafiado.app',
  ctaText: 'Experimentar',
  aboutReversed: false,
  aboutContent: {
    title: 'Sobre',
    subtitle: 'O Desafiado é um aplicativo gratuito para criação e manutenção de hábitos.',
    items: [
      'Interface intuitiva e gamificada',
      'Sistema de desafios personalizáveis',
      'Conexão social entre usuários',
      'Acompanhamento de progresso em tempo real',
      'Notificações inteligentes'
    ]
  },
  sections: [
    {
      icon: User,
      title: 'Experiência do usuário',
      content: 'Interface clean e intuitiva que torna o acompanhamento de metas uma experiência agradável e motivadora.'
    },
    {
      icon: Target,
      title: 'Gamificação',
      content: 'Sistema de pontos, conquistas e rankings que mantém os usuários engajados e motivados.'
    },
    {
      icon: Timer,
      title: 'Produtividade',
      content: 'Ferramentas de acompanhamento que ajudam a manter o foco e a consistência nas metas.'
    },
    {
      icon: TrendingUp,
      title: 'Resultados',
      content: 'Analytics detalhados do progresso e insights personalizados para melhorar performance.'
    }
  ],
  resources: [
    { icon: Code2, name: 'React Native', category: 'frontend' },
    { icon: Code2, name: 'TypeScript', category: 'frontend' },
    { icon: Database, name: 'Firebase', category: 'backend' },
    { icon: Database, name: 'Firestore', category: 'backend' },
    { icon: Figma, name: 'Figma', category: 'design' },
    { icon: Palette, name: 'Design System', category: 'design' }
  ],
  visualGuidelines: [
    {
      title: 'Cores primárias',
      items: [
        { type: 'color', name: 'Azul Principal', value: '#3B82F6', preview: '#3B82F6' },
        { type: 'color', name: 'Verde Sucesso', value: '#10B981', preview: '#10B981' },
        { type: 'color', name: 'Laranja Energia', value: '#F59E0B', preview: '#F59E0B' }
      ]
    },
    {
      title: 'Tipografia',
      items: [
        { type: 'font', name: 'Título Principal', value: 'Inter Bold 24px' },
        { type: 'font', name: 'Subtítulo', value: 'Inter Medium 18px' },
        { type: 'font', name: 'Corpo', value: 'Inter Regular 16px' }
      ]
    }
  ]
};

// Export all case studies for easy access
export const allCaseStudies: CaseStudy[] = [
  desafiadoCaseStudy
];
