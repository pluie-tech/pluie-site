import { DesafiadoPage } from '@/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Desafiado - Case de Sucesso | Pluie',
  description: 'Conheça o desenvolvimento do Desafiado, aplicativo de desafios pessoais que transforma metas em diversão. Case de sucesso da Pluie.',
  keywords: ['desafiado', 'aplicativo', 'gamificação', 'metas', 'case de sucesso', 'pluie'],
  openGraph: {
    title: 'Desafiado - Case de Sucesso | Pluie',
    description: 'Conheça o desenvolvimento do Desafiado, aplicativo de desafios pessoais que transforma metas em diversão.',
    images: ['/images/cases/desafiado/hero.png'],
  },
};

export default function Desafiado() {
  return <DesafiadoPage />;
}
