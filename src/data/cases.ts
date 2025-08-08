import { generateImageUrl } from '@/lib/utils';
import { Apple, BellRing, ChartNoAxesColumnIncreasing, ChartNoAxesCombined, CircleUser, Dumbbell, Flower, Glasses, Heart, LucideIcon, Mail, MessageSquareDot, Music, Notebook, Pointer, Proportions, Route, ShieldCheck, SoapDispenserDroplet, SquaresSubtract, Star, TabletSmartphone, Trophy, Wallet, WandSparkles } from 'lucide-react';
import {
  Database,
  Palette,
  Code2,
  Figma, TrendingUp
} from 'lucide-react';

export type CaseStudySection = {
  icon: LucideIcon;
  title: string;
  content: string;
  items?: { color: string; icon: LucideIcon }[];
}

export type CaseStudyResource = {
  icon: LucideIcon;
  name: string;
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
  sections: {
    image?: string;
    icon?: LucideIcon;
    title: string;
    items: CaseStudySection[];
  };
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
  sections: {
    image: '/images/cases/desafiado/logo.svg',
    title: 'Mantenha o foco',
    items: [
      {
        icon: WandSparkles,
        title: 'Crie seus desafios',
        content: '10 categorias para se inspirar.',
        items: [
          { color: '#00C951', icon: Apple },
          { color: '#FB2C36', icon: Dumbbell },
          { color: '#FE9A00', icon: Wallet },
          { color: '#00BBA7', icon: ChartNoAxesCombined },
          { color: '#F0B100', icon: Glasses },
          { color: '#AD46FF', icon: Music },
          { color: '#615FFF', icon: Flower },
          { color: '#F6339A', icon: Heart },
          { color: '#00B8DB', icon: Notebook },
          { color: '#8E51FF', icon: SoapDispenserDroplet },
        ]
      },
      {
        icon: TrendingUp,
        title: 'Acompanhe seu progresso',
        content: 'Tenha acesso a um contador de sequências e estatísticas detalhadas. Pequenas ações diárias criam grandes transformações.'
      },
      {
        icon: Star,
        title: 'Sistema de conquistas',
        content: 'Desbloqueie mais de 50 conquistas. Medalhas de progresso, consistência e marcos para manter sua motivação sempre em alta.'
      },
      {
        icon: BellRing,
        title: 'Notificações',
        content: 'Receba push para receber lembretes dos seus desafios. Não esqueça seus objetivos.'
      }
    ],
  },
  resources: [
    { icon: TabletSmartphone, name: 'Progressive Web App (PWA)' },
    { icon: MessageSquareDot, name: 'Notificações Push com agendamento' },
    { icon: SquaresSubtract, name: 'Funcionamento em segundo plano' },
    { icon: CircleUser, name: 'Login social' },
    { icon: Mail, name: 'Suporte a login por e-mail' },
    { icon: ShieldCheck, name: 'Sessões seguras e estáveis' },
    { icon: Proportions, name: 'Interface responsiva' },
    { icon: Pointer, name: 'Interação por toque e gestos' },
    { icon: Trophy, name: 'Gamificação e recompensas' },
    { icon: Route, name: 'Conquistas integradas à jornada' },
    { icon: ChartNoAxesColumnIncreasing, name: 'Trilhas de progresso para engajamento' },
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
