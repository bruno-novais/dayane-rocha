import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { categorias, cursos, getCategoria, getCursos, getPublico } from '@/data/catalogo'
import { site } from '@/data/site'
import { Breadcrumb } from '@/components/site/breadcrumb'
import { CursosGrid } from '@/components/site/cursos-grid'
import { AvisoSaude } from '@/components/site/aviso-saude'
import { RevealText } from '@/components/motion/reveal-text'
import { Reveal } from '@/components/motion/reveal'
import { ScrollProgress } from '@/components/motion/scroll-progress'

export const dynamicParams = false

export function generateStaticParams() {
  return categorias.map(({ publico, slug }) => ({ publico, categoria: slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ publico: string; categoria: string }> }): Promise<Metadata> {
  const { publico, categoria } = await params
  const currentPublico = getPublico(publico)
  const currentCategoria = getCategoria(publico, categoria)
  if (!currentPublico || !currentCategoria) return {}

  return {
    title: `${currentCategoria.titulo} · ${currentPublico.titulo}`,
    description: currentCategoria.resumo,
    alternates: { canonical: `/${publico}/${categoria}` },
    openGraph: {
      title: currentCategoria.titulo,
      description: currentCategoria.resumo,
      images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: site.introducao.acessivel }],
    },
    twitter: {
      card: 'summary_large_image',
      title: currentCategoria.titulo,
      description: currentCategoria.resumo,
      images: ['/opengraph-image'],
    },
  }
}

export default async function CursosPage({ params }: { params: Promise<{ publico: string; categoria: string }> }) {
  const { publico: publicoSlug, categoria: categoriaSlug } = await params
  const publico = getPublico(publicoSlug)
  const categoria = getCategoria(publicoSlug, categoriaSlug)
  if (!publico || !categoria) notFound()

  const lista = getCursos(publicoSlug, categoriaSlug)
  if (!lista.length) notFound()

  return (
    <div className="courses-page" data-trilha={publico.slug}>
      <ScrollProgress publico={publico.slug} />
      <section className="page-heading container-site">
        <div className="page-heading-inner">
          <span className="page-audience-label">{publico.slug === 'fisioterapeutas' ? site.ui.rotuloProfissional : site.ui.rotuloEmCasa}</span>
          <Breadcrumb items={[
            { label: publico.titulo, href: `/${publico.slug}` },
            { label: categoria.titulo },
          ]} />
          <span className="eyebrow glass">{site.ui.trilha} {publico.trilha}</span>
          <RevealText
            as="h1"
            segmentos={[{ texto: categoria.titulo, classe: 'text-primary' }]}
            modo="letters"
            className="display-title"
          />
          <Reveal><p>{categoria.resumo}</p></Reveal>
          <Reveal><p className="category-explanation">{categoria.explicacao}</p></Reveal>
        </div>
      </section>

      <section className="container-site course-section" aria-label={site.ui.listaDeCursos}>
        <CursosGrid
          cursos={lista}
          mostrarFiltros={publico.slug === 'pacientes' && categoria.slug === 'movimento-e-mobilidade'}
          publico={publico.slug}
          categoria={categoria.slug}
        />
        {publico.slug === 'pacientes' && <AvisoSaude completo />}
      </section>
    </div>
  )
}
