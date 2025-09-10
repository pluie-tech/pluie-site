import { AgrobayPage } from '@/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Agrobay - Case de Sucesso | Pluie',
  description: 'Redesenhamos a experiência do usuário do aplicativo Agrobay com foco em usabilidade e eficiência para motoristas em viagem. Case de sucesso da Pluie.',
  keywords: ['agrobay', 'aplicativo', 'design', 'usabilidade', 'case de sucesso', 'pluie'],
  openGraph: {
    title: 'Agrobay - Case de Sucesso | Pluie',
    description: 'Redesenhamos a experiência do usuário do aplicativo Agrobay com foco em usabilidade e eficiência para motoristas em viagem. Case de sucesso da Pluie.',
    images: ['/images/cases/agrobay/hero.png'],
  },
};

export default function Agrobay() {
  return <AgrobayPage />;
}
