import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Dayane Rocha · Cursos de Fisioterapia',
    short_name: 'Dayane Rocha',
    description: 'Cursos online de fisioterapia neurofuncional.',
    start_url: '/',
    display: 'standalone',
    background_color: '#1E1E1E',
    theme_color: '#1E1E1E',
    lang: 'pt-BR',
    icons: [
      { src: '/icon.png', sizes: '512x512', type: 'image/png' },
      { src: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  }
}
