import type { MetadataRoute } from 'next'
import { categorias, publicos } from '@/data/catalogo'
import { site } from '@/data/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    ...publicos.map((publico) => `/${publico.slug}`),
    ...categorias.map((categoria) => `/${categoria.publico}/${categoria.slug}`),
    '/sobre',
  ]

  return [
    { url: site.url, changeFrequency: 'monthly', priority: 1 },
    ...routes.map((route) => ({
      url: new URL(route, site.url).toString(),
      changeFrequency: 'monthly' as const,
      priority: route === '/sobre' ? 0.6 : 0.8,
    })),
  ]
}
