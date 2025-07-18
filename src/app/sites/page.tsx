import { SitesPage } from '@/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Site Profissional para Empresas | Pluie',
  description: 'Criamos sites que unem performance, identidade visual e experiência do usuário. Da arquitetura à publicação, entregamos soluções pensadas para atrair, converter e fidelizar seus clientes.',
  keywords: ['site profissional', 'desenvolvimento web', 'site empresarial', 'site responsivo', 'SEO', 'performance'],
  openGraph: {
    title: 'Site Profissional para Empresas | Pluie',
    description: 'Criamos sites que unem performance, identidade visual e experiência do usuário. Da arquitetura à publicação, entregamos soluções pensadas para atrair, converter e fidelizar seus clientes.',
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

export default function Sites() {
  return <SitesPage />;
}
