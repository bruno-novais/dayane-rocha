import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { publicos, getPublico, getCategorias } from '@/data/catalogo'
import { QUEIXAS, site } from '@/data/site'
import { CategoriaCard } from '@/components/site/categoria-card'
import { Breadcrumb } from '@/components/site/breadcrumb'
import { HealthSection } from '@/components/site/health-section'
import { SimboloFundo } from '@/components/motion/simbolo-fundo'
import { RevealText } from '@/components/motion/reveal-text'
import { Reveal } from '@/components/motion/reveal'

export const dynamicParams = false

export function generateStaticParams() {
  return publicos.map(({ slug }) => ({ publico: slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ publico: string }> }): Promise<Metadata> {
  const { publico: slug } = await params
  const publico = getPublico(slug)
  if (!publico) return {}

  return {
    title: publico.titulo,
    description: publico.descricao,
    alternates: { canonical: `/${publico.slug}` },
    openGraph: { title: publico.titulo, description: publico.descricao },
  }
}

function realcarUltimaPalavra(texto: string) {
  const palavras = texto.trim().split(/\s+/)
  const destaque = palavras.pop() ?? ''
  return [
    { texto: `${palavras.join(' ')}${palavras.length ? ' ' : ''}` },
    { texto: destaque, classe: 'text-primary' },
  ]
}

export default async function PublicoPage({ params }: { params: Promise<{ publico: string }> }) {
  const { publico: slug } = await params
  const publico = getPublico(slug)
  if (!publico) notFound()

  const lista = getCategorias(publico.slug)

  return (
    <div className="audience-page">
      <section className="page-heading container-site">
        <SimboloFundo />
        <div className="page-heading-inner">
          <Breadcrumb items={[{ label: publico.titulo }]} />
          <span className="eyebrow glass">{site.ui.trilha} {publico.trilha}</span>
          <RevealText as="h1" segmentos={realcarUltimaPalavra(publico.chamada)} modo="letters" className="display-title" />
          <Reveal><p>{publico.descricao}</p></Reveal>
        </div>
      </section>

      {publico.slug === 'pacientes' && (
        <section className="container-site queixa-section" aria-labelledby="queixa-heading">
          <div className="queixa-intro">
            <h2 id="queixa-heading" className="queixa-label">{site.ui.buscarQueixa}</h2>
            <p>{site.ui.buscarQueixaDescricao}</p>
          </div>
          {QUEIXAS.map((queixa) => (
            <Link
              className="filter-chip glass"
              href={`/pacientes/movimento-e-mobilidade?queixa=${queixa.slug}`}
              key={queixa.slug}
            >
              {queixa.rotulo}
            </Link>
          ))}
        </section>
      )}

      <section className="container-site category-grid" aria-label={site.ui.categoriasDeAprendizado}>
        {lista.map((categoria, index) => <CategoriaCard categoria={categoria} indice={index} key={categoria.slug} />)}
      </section>

      {publico.slug === 'pacientes' && <HealthSection />}
    </div>
  )
}
