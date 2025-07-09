import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const sitemap: MetadataRoute.Sitemap = [
    {
      url: 'https://pluie.tech',
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 1,
    }
  ]

  return sitemap
}