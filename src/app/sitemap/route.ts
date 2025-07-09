import type { MetadataRoute } from 'next'
export const dynamic = 'force-static' // força geração estática

function generateSitemap() {
  const sitemap: MetadataRoute.Sitemap = [
    {
      url: 'https://pluie.tech',
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 1,
    }
  ]
  
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${sitemap.map((url) => `<url>
    <loc>${url.url}</loc>
    <lastmod>${url.lastModified}</lastmod>
    <changefreq>${url.changeFrequency}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('')}
</urlset>`

  return sitemapXml
}

export async function GET() {
  const sitemap = generateSitemap()

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
 
