import type { Metadata } from 'next'
import { Epilogue, Cabin } from 'next/font/google'
import { WithContext, LocalBusiness } from 'schema-dts'
import './globals.css'
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'
import { ConsentProvider } from '@/contexts/ConsentContext'

const cabin = Cabin({
  variable: '--font-cabin',
  subsets: ['latin']
})

const epilogue = Epilogue({
  variable: '--font-epilogue',
  subsets: ['latin']
})

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Pluie - Tecnologia que resolve, sem complicar',
    description: 'Entendemos as necessidades da sua empresa e criamos soluções digitais sob medida para promover eficiência e crescimento.'
  }
}

const schema: WithContext<LocalBusiness> = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Pluie',
  url: 'https://pluie.com.br',
  description: 'Pluie é um estúdio de software que cria soluções digitais sob medida para negócios em crescimento.',
  image: 'https://pluie.com.br/logo.png',
  email: 'contato@pluie.com.br',
  telephone: '+55 41 98492-6574',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Curitiba',
    addressRegion: 'PR',
    addressCountry: 'BR'
  },
  openingHours: 'Mo-Fr 09:00-18:00',
  priceRange: '$$',
  areaServed: {
    '@type': 'Place',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'BR'
    }
  },
  sameAs: ['https://www.linkedin.com/company/pluietech', 'https://wa.me/5541984926574'],
  makesOffer: [
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Criação de sites, aplicativos e sistemas personalizados',
        description: 'Do conceito ao código: criamos produtos digitais que entregam resultados.',
        serviceType: 'Desenvolvimento de Software'
      }
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Consultoria em usabilidade e UX',
        description: 'Seus clientes reclamam? Ajudamos a identificar e corrigir falhas que prejudicam a experiência.',
        serviceType: 'Consultoria'
      }
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Automações e integrações sob demanda',
        description: 'Tarefas repetitivas? Economizamos seu tempo com tecnologia inteligente.',
        serviceType: 'Automação'
      }
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Criação de identidade visual',
        description: 'Precisa de cara nova? Desenvolvemos marcas que comunicam clareza e confiança.',
        serviceType: 'Design'
      }
    }
  ]
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </head>
      <body className={`${cabin.variable} ${epilogue.variable} antialiased`}>
        <ConsentProvider>
          {children}
          <GoogleAnalytics gaId="G-B6V7NTQDR0" />
          <GoogleTagManager gtmId="AW-17383313168" />
        </ConsentProvider>
      </body>
    </html>
  )
}
