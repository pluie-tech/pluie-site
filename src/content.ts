import { BarChart3, BicepsFlexed, Box, Calendar, CalendarCheck, FileText, LayoutDashboard, LayoutTemplate, Link, Palette, Repeat, Smile, Star, Timer, TrendingUp, WandSparkles } from 'lucide-react';
import { WhatsAppIcon } from './components';
import { LinkedInIcon } from './components/ui/BrandIcon';
import { ButtonVariant } from './components/ui/Button';

export const siteContent = {
  title: 'Pluie - Tecnologia que resolve, sem complicar',
  description: 'Entendemos as necessidades da sua empresa e criamos soluções digitais sob medida para promover eficiência e crescimento.',
  page: {
    header: {
      logo: 'pluie',
      navigation: [
        {
          text: 'Quem somos',
          url: '#'
        },
        {
          text: 'Como funciona',
          url: '#'
        },
        {
          text: 'Soluções',
          url: '#'
        }
      ],
      contactIcon: 'WhatsApp'
    },
    hero: {
      title: 'Tecnologia que resolve, sem complicar.',
      subtitle: 'Entendemos as necessidades da sua empresa e criamos soluções digitais sob medida para promover eficiência e crescimento.',
      ctaButton: {
        text: 'Agende uma conversa',
        icon: Calendar
      }
    },
    aboutUs: {
      title: 'Quem somos',
      intro: 'Dois veteranos da tecnologia que viram produtos bons morrerem em processos ruins.',
      sections: [
        {
          content:
            'Nos conhecemos no mercado de trabalho, onde aprendemos uma lição valiosa: times inflados e hierarquias engessadas criam produtos caros, lentos e distantes de quem realmente importa – o cliente. Por isso, fundamos a Pluie.'
        },
        {
          title: 'Por que somos diferentes',
          points: [
            {
              title: 'Ouvimos antes de criar',
              description: 'Entendemos sua realidade para sugerir a solução ideal (não a mais complexa).'
            },
            {
              title: 'Software que funciona',
              description: 'Seu sistema nasce rápido, com boa usabilidade e pronto para crescer.'
            },
            {
              title: 'Sem dor de cabeça',
              description: 'Levamos nosso trabalho a sério. Você ganha tempo e qualidade.'
            }
          ]
        }
      ]
    },
    howItWorks: {
      title: 'Como funciona',
      subtitle: 'Sem burocracia. Resolvemos junto com você, passo a passo:',
      steps: [
        {
          icon: CalendarCheck,
          title: 'Agende uma conversa gratuita',
          description: 'Nos conte o que você precisa - sem compromisso.',
          ctaButton: {
            text: 'Agendar',
            icon: Calendar
          }
        },
        {
          icon: FileText,
          title: 'Receba uma proposta personalizada',
          description: 'Analisamos sua demanda e montamos a nossa melhor solução pra você.'
        },
        {
          icon: BicepsFlexed,
          title: 'A gente põe a mão na massa',
          description: 'Você acompanha o progresso e vê sua ideia virar realidade.'
        }
      ]
    },
    solutions: {
      title: 'Soluções',
      subtitle: 'De sites a sistemas completos, desenvolvemos o que o seu negócio precisa. Sempre sob medida, para resolver seu desafio.',
      services: [
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
              icon: LayoutDashboard
            },
            {
              title: 'MVP com foco',
              description: 'Faça seu MVP: Tiramos sua ideia do papel com foco no essencial. Para você testar, aprender e evoluir.',
              icon: Box
            }
          ],
          imagePath: '/images/services/applications.jpg'
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
              title: 'Telas mais claras',
              description: 'Elimine telas confusas e dores de cabeça.',
              icon: WandSparkles
            },
            {
              title: 'Impacto real',
              description: 'Exemplos práticos de como as mudanças vão gerar resultados.',
              icon: TrendingUp
            }
          ],
          imagePath: '/images/services/usability.jpg'
        },
        {
          title: 'Automações',
          description: 'Tarefas repetitivas? Economizamos seu tempo com tecnologia inteligente.',
          features: [
            {
              title: 'Mais tempo livre',
              description: 'Faça o sistema trabalhar por você e foque no que realmente importa.',
              icon: Repeat
            },
            {
              title: 'Integra com o que você usa',
              description: 'Integração com suas planilhas, e-mails e sistemas.',
              icon: Link
            },
            {
              title: 'Acompanhe com dados',
              description: 'Relatórios de acompanhamento de resultados.',
              icon: BarChart3
            }
          ],
          imagePath: '/images/services/automations.jpg'
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
          imagePath: '/images/services/identity.jpg'
        }
      ],
    },
    testimonials: {
      title: 'Tecnologia que faz sentido pra todo mundo',
      subtitle: 'Não importa se é dono do negócio ou se é quem está usando: o que a gente faz resolve e funciona de verdade.',
      quotes: [
        {
          quote: 'Eu não entendo nada de tecnologia, mas eles explicaram tudo com clareza e foram super parceiros do começo ao fim.',
          author: 'Irene, dona de clínica',
          authorImage: '/images/testimonials/testimonial1.png'
        },
        {
          quote: 'Usei o DESAFIADO e consegui alcançar meus objetivos de vida.',
          author: 'Pi, dono de zoológico',
          authorImage: '/images/testimonials/testimonial2.png'
        },
        {
          quote: 'Graças ao GASTADO eu consegui comprar minha coleção de bonecos de Jojo Parte 3.',
          author: 'Cleia, otaku safada',
          authorImage: '/images/testimonials/testimonial3.png'
        }
      ]
    },
    latestWorks: {
      title: 'Nossos últimos trabalhos',
      subtitle: 'Esses são algumas de nossas últimas entregas. Soluções digitais feitas sob medida, com cuidado em cada detalhe.',
      projects: [
        {
          name: 'Desafiado',
          description: 'Transforme objetivos em hábitos duradouros.',
          image: "/images/works/desafiado.png",
          ctaButton: {
            text: 'Experimentar'
          }
        },
        {
          name: 'Agrobay',
          description: 'Projetamos toda a experiência do usuário e o aplicativo foi desenvolvido pela Utronics.',
          image: "/images/works/agrobay.png",
          ctaButton: {
            text: 'Ver na loja'
          }
        }
      ]
    },
    finalCta: {
      title: 'Agende uma conversa gratuita',
      subtitle: 'A gente escuta, entende e mostra como pode ajudar.',
      buttons: [
        {
          text: 'Escolher horário',
          icon: Calendar,
          variant: 'primary' as ButtonVariant
        },
        {
          text: 'Fale conosco',
          icon: WhatsAppIcon,
          variant: 'outline' as ButtonVariant
        }
      ]
    },
    contact: {
      title: 'Pronto para começar seu projeto?',
      subtitle: 'Conte com a Pluie para desenvolver ou aprimorar sua solução digital.'
    },
    footer: {
      shortDescription: 'Tecnologia sob medida para resolver problemas reais.'
    }
  },
  contactInformation: {
    email: 'contato@pluie.tech',
    phone: '(41) 9 8492-6574',
    whatsappMessage: 'Olá, gostaria de saber mais sobre os serviços da Pluie.',
    socialLinks: [
      { name: "LinkedIn", href: "#", icon: LinkedInIcon }
    ],
  }
}

export type SiteContent = typeof siteContent;
