import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { site } from '@/data/site'
import { RevealText } from '@/components/motion/reveal-text'
import { Reveal } from '@/components/motion/reveal'
import { TexturaFundo } from '@/components/site/textura-fundo'

export const metadata: Metadata = {
  title: 'Sobre',
  description: site.sobre.apresentacao,
  alternates: { canonical: '/sobre' },
  openGraph: {
    title: `${site.nome} · Sobre`,
    description: site.sobre.apresentacao,
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: site.introducao.acessivel }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.nome} · Sobre`,
    description: site.sobre.apresentacao,
    images: ['/opengraph-image'],
  },
}

export default function SobrePage() {
  return (
    <div className="about-page">
      <section className="container-site about-intro">
        <span className="eyebrow glass">{site.inicio.sobreEyebrow}</span>
        <RevealText
          as="h1"
          segmentos={[{ texto: 'Dayane ' }, { texto: 'Rocha', classe: 'text-primary' }]}
          modo="letters"
          className="display-title"
        />
        <Reveal>
          <p className="about-subtitle">{site.sobre.subtitulo}</p>
          <p>{site.sobre.apresentacao}</p>
        </Reveal>
        <Reveal className="about-seal about-page-seal">
          <Image src="/brand/logo-selo.png" alt={site.ui.altSelo} width={210} height={210} />
        </Reveal>
      </section>

      <section className="values-section">
        <TexturaFundo variante="sobre" />
        <div className="container-site values-content">
          <RevealText as="h2" segmentos={[{ texto: site.sobre.valoresTitulo }]} modo="words" className="section-title" />
          <div className="values-list">
            {site.sobre.valores.map((valor, index) => (
              <Reveal key={valor.titulo} atraso={index * 0.08} className="value-row">
                <h3>{valor.titulo}</h3>
                <p>{valor.frase}</p>
              </Reveal>
            ))}
          </div>
          <div className="about-cta">
            <h2>{site.sobre.convite}</h2>
            <div className="about-cta-links">
              {site.navegacao.slice(0, 2).map((item) => (
                <Link key={item.href} className="button-primary" href={item.href}>
                  {item.rotulo}<ArrowUpRight size={17} aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
