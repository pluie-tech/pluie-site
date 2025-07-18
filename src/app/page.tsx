import { HomePage } from '@/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pluie | Tecnologia que resolve, sem complicar',
  description: 'Entendemos as necessidades da sua empresa e criamos soluções digitais sob medida para promover eficiência e crescimento.',
  keywords: ['desenvolvimento web', 'tecnologia', 'soluções digitais', 'software sob medida', 'automação'],
  openGraph: {
    title: 'Pluie | Tecnologia que resolve, sem complicar',
    description: 'Entendemos as necessidades da sua empresa e criamos soluções digitais sob medida para promover eficiência e crescimento.',
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

export default function Home() {
  return <HomePage />;
}
