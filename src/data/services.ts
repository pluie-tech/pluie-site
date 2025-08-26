import { Service } from '@/types';
import { generateImageUrl } from '@/lib/utils';
import { 
  Bird, 
  ChartPie, 
  LayoutTemplate, 
  Palette, 
  Puzzle, 
  Shrub, 
  Smile, 
  Star, 
  Target, 
  Timer, 
  TrendingUp, 
  WandSparkles 
} from 'lucide-react';

// Main services data for HomePage
export const homeServicesData: Service[] = [
  {
    title: 'Sites, Aplicativos e Sistemas',
    description: 'Do conceito ao código: criamos produtos digitais que entregam resultados.',
    features: [
      {
        title: 'Entrega rápida',
        description: 'Software pronto em semanas, não em meses.',
        icon: Timer
      },
      {
        title: 'Prontos para crescer',
        description: 'Ótima usabilidade e estrutura sólida, feito para durar e crescer com o seu negócio.',
        icon: Shrub
      },
      {
        title: 'MVP com foco',
        description: 'Faça seu MVP: Tiramos sua ideia do papel com foco no essencial. Para você testar, aprender e evoluir.',
        icon: Target
      }
    ],
    imagePath: generateImageUrl('/services/applications.jpg', 460)
  },
  {
    title: 'Consultoria em Usabilidade',
    description: 'Seus clientes reclamam? Ajudamos a identificar e corrigir falhas que prejudicam a experiência.',
    features: [
      {
        title: 'Mais satisfação',
        description: 'Seus clientes vão adorar seu sistema, site ou aplicativo.',
        icon: Smile
      },
      {
        title: 'Interface intuitiva',
        description: 'Elimine telas confusas e dores de cabeça.',
        icon: WandSparkles
      },
      {
        title: 'Impacto real',
        description: 'Exemplos práticos de como as mudanças vão gerar resultados.',
        icon: TrendingUp
      }
    ],
    imagePath: generateImageUrl('/services/usability.jpg', 460)
  },
  {
    title: 'Automações',
    description: 'Tarefas repetitivas? Economizamos seu tempo com tecnologia inteligente.',
    features: [
      {
        title: 'Mais tempo livre',
        description: 'Faça o sistema trabalhar por você e foque no que realmente importa.',
        icon: Bird
      },
      {
        title: 'Integra com o que você usa',
        description: 'Integração com suas planilhas, e-mails e sistemas.',
        icon: Puzzle
      },
      {
        title: 'Acompanhe com dados',
        description: 'Relatórios de acompanhamento de resultados.',
        icon: ChartPie
      }
    ],
    imagePath: generateImageUrl('/services/automations.jpg', 460)
  },
  {
    title: 'Identidade Visual',
    description: 'Precisa de cara nova? Desenvolvemos marcas que comunicam clareza e confiança.',
    features: [
      {
        title: 'Marca memorável',
        description: 'Seus clientes vão reconhecer e lembrar de sua marca.',
        icon: Star
      },
      {
        title: 'Kit de aplicações',
        description: 'Kits para usar em várias aplicações.',
        icon: Palette
      },
      {
        title: 'Organização visual',
        description: 'Style guide e design system para organizar seu trabalho.',
        icon: LayoutTemplate
      }
    ],
    imagePath: generateImageUrl('/services/identity.jpg', 460)
  }
];

// Web services data for SitesPage (moved from inline definition)
export const webServicesData: Service = {
  imagePath: '/services/applications.jpg',
  features: [
    {
      title: 'Entrega rápida',
      description: 'Site pronto em poucas semanas, não em meses.',
      icon: Timer
    },
    {
      title: 'Pronto para crescer',
      description: 'Ótima usabilidade e estrutura sólida, feito para durar e crescer com o seu negócio.',
      icon: Shrub
    },
    {
      title: 'Monitore os resultados',
      description: 'Acompanhe o desempenho através de ferramentas de Analytics.',
      icon: Target
    }
  ]
};

// Backward compatibility - keep the original export name
export const servicesData = homeServicesData;
