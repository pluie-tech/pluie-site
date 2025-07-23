import { SchedulePage } from '@/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Agendar Conversa | Pluie',
  description: 'Agende uma conversa conosco para discutir seu projeto. Vamos entender suas necessidades e apresentar a melhor solução para sua empresa.',
  keywords: ['agendar reunião', 'consulta gratuita', 'conversa sobre projeto', 'reunião comercial', 'Pluie'],
  openGraph: {
    title: 'Agendar Conversa | Pluie',
    description: 'Agende uma conversa conosco para discutir seu projeto. Vamos entender suas necessidades e apresentar a melhor solução para sua empresa.',
    type: 'website',
    locale: 'pt_BR',
    images: [
      {
        url: 'https://pluie.com.br/images/460/services/applications.jpg',
        width: 460,
        height: 460,
        alt: 'Logo da Pluie'
      }
    ]
  },
  robots: 'index, follow',
};

export default function AgendarConversa() {
  return <SchedulePage />
}
