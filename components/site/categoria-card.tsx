import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import type { Categoria } from '@/data/catalogo'
import { getCursos } from '@/data/catalogo'
import { site } from '@/data/site'
import { InfoCategoria } from '@/components/site/info-categoria'
import { Reveal } from '@/components/motion/reveal'
import { PhotoFrame } from '@/components/site/photo-frame'

export function CategoriaCard({ categoria, indice = 0 }: { categoria: Categoria; indice?: number }) {
  const cursos = getCursos(categoria.publico, categoria.slug)
  const ativos = cursos.filter((curso) => curso.status === 'ativo').length
  const quantidade = ativos > 0
    ? `${ativos} ${ativos === 1 ? site.ui.cursoSingular : site.ui.cursoPlural}`
    : site.ui.emBreve

  return (
    <Reveal atraso={indice * 0.08} className="category-reveal">
      <article className="category-card" data-trilha={categoria.publico} data-card-observe>
        <div className="category-photo">
          <PhotoFrame
            imagem={categoria.imagem}
            className="category-photo-image"
            sizes="(max-width: 639px) calc(100vw - 48px), (max-width: 1023px) calc(50vw - 40px), 520px"
          />
        </div>
        <span className="card-glass-blur" aria-hidden="true" />
        <span className="card-glass-shade" aria-hidden="true" />
        <span className="card-glass-tint" aria-hidden="true" />
        <div className="category-photo-meta">
          <span className="category-order glass" aria-hidden="true">{categoria.ordem}</span>
          <InfoCategoria categoria={categoria} />
        </div>
        <div className="category-card-body">
          <h3>
            <Link className="category-title-link" href={`/${categoria.publico}/${categoria.slug}`}>
              {categoria.titulo}
              <span className="sr-only"> — {site.ui.acessarCategoria}</span>
            </Link>
          </h3>
          <p>{categoria.resumo}</p>
          <div className="category-footer">
            <span className="category-count glass">{quantidade}</span>
            <span className="card-wide-button" aria-hidden="true">
              <span>Ver cursos</span>
              <ArrowUpRight size={20} strokeWidth={1.8} />
            </span>
          </div>
        </div>
      </article>
    </Reveal>
  )
}
