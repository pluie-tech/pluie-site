import type { Metadata } from 'next'
import { Epilogue, Cabin } from 'next/font/google'
import './globals.css'
import { GoogleTagManager } from '@next/third-parties/google'
import { ConsentProvider } from '@/contexts/ConsentContext'
import { generateLocalBusinessSchema } from '@/lib/schema'

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

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const schema = generateLocalBusinessSchema();

  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <GoogleTagManager gtmId="GTM-5VLQP24G" />
      </head>
      <body className={`${cabin.variable} ${epilogue.variable} antialiased`}>
        <ConsentProvider>
          {children}
        </ConsentProvider>
      </body>
    </html>
  )
}
