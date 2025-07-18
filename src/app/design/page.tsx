import { DesignPage } from '@/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Identidade Visual e UX – Design Estratégico | Pluie',
  description: 'Criação de marcas, interfaces e experiências digitais alinhadas com o posicionamento do seu negócio.',
  keywords: ['identidade visual', 'design UX', 'UI design', 'branding', 'design estratégico', 'prototipação'],
  openGraph: {
    title: 'Identidade Visual e UX – Design Estratégico | Pluie',
    description: 'Criação de marcas, interfaces e experiências digitais alinhadas com o posicionamento do seu negócio.',
    type: 'website',
    locale: 'pt_BR',
    images: [
      {
        url: 'https://pluie.com.br/images/460/services/identity.jpg',
        width: 460,
        height: 460,
        alt: 'Logo da Pluie'
      }
    ]
  },
  robots: 'index, follow',
};

export default function Design() {
  return <DesignPage />;
}
