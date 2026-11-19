import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { brandFont } from '@/lib/fonts'
import { site } from '@/data/site'
import { IntroProvider } from '@/components/site/intro-provider'
import { MotionProvider } from '@/components/motion/motion-provider'
import { SiteFooter } from '@/components/site/site-footer'
import { SiteHeader } from '@/components/site/site-header'
import { CardScrollObserver } from '@/components/site/card-scroll-observer'
import { TexturaFundo } from '@/components/site/textura-fundo'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.nome} · ${site.titulo}`,
    template: `%s · ${site.nome}`,
  },
  description: site.descricao,
  alternates: { canonical: '/' },
  generator: 'Next.js',
  openGraph: {
    title: `${site.nome} · ${site.titulo}`,
    description: site.descricao,
    siteName: site.nome,
    locale: 'pt_BR',
    type: 'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: site.introducao.acessivel }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.nome} · ${site.titulo}`,
    description: site.descricao,
    images: ['/opengraph-image'],
  },
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png',
  },
  manifest: '/manifest.webmanifest',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#1E1E1E',
}

const introScript = `(function(){try{var p=window.location.pathname;var s=sessionStorage.getItem('dr-intro-visto');var r=window.matchMedia('(prefers-reduced-motion: reduce)').matches;if(p==='/'&&!s&&!r){document.documentElement.dataset.intro='play'}else{sessionStorage.setItem('dr-intro-visto','1')}}catch(e){}})()`

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={brandFont.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: introScript }} />
      </head>
      <body>
        <TexturaFundo />
        <noscript>
          <style>{`.reveal-text-unit,.reveal-block,.intro-overlay{opacity:1!important;filter:none!important;transform:none!important}.intro-overlay{display:none!important}`}</style>
        </noscript>
        <MotionProvider>
          <IntroProvider>
            <a className="skip-link" href="#conteudo">{site.ui.pularConteudo}</a>
            <SiteHeader />
            <CardScrollObserver />
            <main id="conteudo" className="site-main" tabIndex={-1}>
              {children}
            </main>
            <SiteFooter />
          </IntroProvider>
        </MotionProvider>
        <Analytics />
      </body>
    </html>
  )
}
