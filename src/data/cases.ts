import { Apple, BellRing, ChartNoAxesColumnIncreasing, ChartNoAxesCombined, CircleUser, Dumbbell, Flower, Glasses, Heart, Joystick, LucideIcon, Mail, MessageSquareDot, Mic, Music, Notebook, Pointer, Proportions, Route, ShieldCheck, SoapDispenserDroplet, SquareCheck, SquaresSubtract, Star, TabletSmartphone, Trophy, Wallet, WandSparkles } from 'lucide-react';
import { TrendingUp } from 'lucide-react';

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
  };
  sections: {
    image?: string;
    icon?: LucideIcon;
    title?: string;
    items: CaseStudySection[];
  };
  resources?: CaseStudyResource[];
  visualGuidelines?: CaseStudyVisualGuideline[];
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
    subtitle: 'O Desafiado é um aplicativo gratuito para criação e manutenção de hábitos.'
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
};

export const agrobayCaseStudy: CaseStudy = {
  id: 'agrobay',
  title: 'Agrobay',
  subtitle: 'Controle de tarefas em visitas a clientes por meio de comandos de voz.',
  bannerImage: '/cases/agrobay/banner.png',
  aboutImage: '/cases/agrobay/about.png',
  appIconImage: '/images/cases/agrobay/icon.png',
  appUrl: 'https://agrobay.com',
  ctaText: 'Ver na loja',
  aboutReversed: true,
  aboutContent: {
    title: 'Sobre',
    subtitle: 'Redesenhamos a experiência do usuário do aplicativo Agrobay, desenvolvido pela Utronics, com foco em usabilidade e eficiência para motoristas em viagem. As melhorias garantem uma jornada mais intuitiva e segura nas estradas.'
  },
  sections: {
    image: '/images/cases/agrobay/logo.png',
    title: 'Funcionalidades',
    items: [
      {
        icon: Mic,
        title: 'Do áudio à tarefa',
        content: 'Botão de gravação ao alcance do polegar. Uso de inteligência artificial para interpretar audios e transformar em tarefas.'
      },
      {
        icon: SquareCheck,
        title: 'Visualização e gerenciamento',
        content: 'Acompanhamento em tempo real do status das tarefas e visualização integrada dos relacionamentos do Salesforce.'
      },
      {
        icon: Joystick,
        title: 'Gamificação de tarefas',
        content: 'Indicadores visuais para maior adesão, satisfação e eficiência.'
      },
      {
        icon: Pointer,
        title:  'Interface flexível',
        content: 'Modo destro e modo canhoto para eficiência e ergonomia.'
      }
    ],
  },
  visualGuidelines: [
    {
      title: 'Identidade Visual',
      items: [
        { type: 'color', name: 'Verde Primário', value: '#4CAF50', preview: '#4CAF50' },
        { type: 'color', name: 'Cinza Secundário', value: '#9E9E9E', preview: '#9E9E9E' },
        { type: 'font', name: 'Fonte Principal', value: 'Roboto, sans-serif' },
        { type: 'font', name: 'Fonte Secundária', value: 'Open Sans, sans-serif' },
        { type: 'other', name: 'Logotipo', value: '/images/cases/agrobay/logo.png' },
      ]
    }
  ]
};

// Export all case studies for easy access
export const allCaseStudies: CaseStudy[] = [
  desafiadoCaseStudy,
  agrobayCaseStudy
];
