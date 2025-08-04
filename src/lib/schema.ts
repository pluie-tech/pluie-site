import { WithContext, BreadcrumbList, Service, LocalBusiness } from 'schema-dts'

export interface BreadcrumbItem {
  name: string
  url: string
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]): WithContext<BreadcrumbList> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: {
        '@type': 'WebPage',
        '@id': item.url,
        url: item.url,
        name: item.name
      }
    }))
  }
}

export interface ServiceSchemaProps {
  name: string
  description: string
  url: string
  provider: {
    name: string
    url: string
  }
  areaServed?: string
  serviceType?: string
}

export function generateServiceSchema(props: ServiceSchemaProps): WithContext<Service> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: props.name,
    description: props.description,
    url: props.url,
    provider: {
      '@type': 'Organization',
      name: props.provider.name,
      url: props.provider.url
    },
    areaServed: props.areaServed || 'BR',
    serviceType: props.serviceType || 'Professional Service'
  }
}

export interface LocalBusinessConfig {
  name?: string
  url?: string
  description?: string
  image?: string
  email?: string
  telephone?: string
  address?: {
    addressLocality?: string
    addressRegion?: string
    addressCountry?: string
  }
  openingHours?: string
  priceRange?: string
  sameAs?: string[]
}

export function generateLocalBusinessSchema(config?: LocalBusinessConfig): WithContext<LocalBusiness> {
  const defaultConfig = {
    name: 'Pluie',
    url: 'https://pluie.com.br',
    description: 'Pluie é um estúdio de software que cria soluções digitais sob medida para negócios em crescimento.',
    image: 'https://pluie.com.br/logo.png',
    email: 'contato@pluie.com.br',
    telephone: '+55 41 98492-6574',
    address: {
      addressLocality: 'Curitiba',
      addressRegion: 'PR',
      addressCountry: 'BR'
    },
    openingHours: 'Mo-Fr 09:00-18:00',
    priceRange: '$$',
    sameAs: ['https://www.linkedin.com/company/pluietech', 'https://wa.me/5541984926574']
  }

  const finalConfig = { ...defaultConfig, ...config }

  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: finalConfig.name,
    url: finalConfig.url,
    description: finalConfig.description,
    image: finalConfig.image,
    email: finalConfig.email,
    telephone: finalConfig.telephone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: finalConfig.address.addressLocality,
      addressRegion: finalConfig.address.addressRegion,
      addressCountry: finalConfig.address.addressCountry
    },
    openingHours: finalConfig.openingHours,
    priceRange: finalConfig.priceRange,
    areaServed: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressCountry: finalConfig.address.addressCountry
      }
    },
    sameAs: finalConfig.sameAs,
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
}

// Utility function to serialize schema objects to JSON strings
export function serializeSchema(schema: WithContext<BreadcrumbList | Service | LocalBusiness>): string {
  return JSON.stringify(schema)
}

// Utility function to create multiple schemas at once
export function createMultipleSchemas(
  schemaGenerators: (() => WithContext<BreadcrumbList | Service | LocalBusiness>)[]
): WithContext<BreadcrumbList | Service | LocalBusiness>[] {
  return schemaGenerators.map(generator => generator())
}
