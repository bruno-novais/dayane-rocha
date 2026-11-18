import Link from 'next/link'
import { Activity, ArrowUpRight, Brain, FileText, Hand, HeartHandshake, Search, Zap } from 'lucide-react'
import type { ComponentType } from 'react'
import type { Categoria } from '@/data/catalogo'
import { getCursos } from '@/data/catalogo'
import { site } from '@/data/site'
import { InfoCategoria } from '@/components/site/info-categoria'
import { Reveal } from '@/components/motion/reveal'
import { PhotoFrame } from '@/components/site/photo-frame'

const icones: Record<string, ComponentType<{ size?: number; strokeWidth?: number; className?: string; 'aria-hidden'?: boolean }>> = {
  brain: Brain,
  zap: Zap,
  hand: Hand,
  'file-text': FileText,
  search: Search,
  activity: Activity,
  'heart-handshake': HeartHandshake,
}

export function CategoriaCard({ categoria, indice = 0 }: { categoria: Categoria; indice?: number }) {
  const Icone = icones[categoria.icone] ?? Activity
  const cursos = getCursos(categoria.publico, categoria.slug)
  const ativos = cursos.filter((curso) => curso.status === 'ativo').length
  const quantidade = ativos > 0
    ? `${ativos} ${ativos === 1 ? site.ui.cursoSingular : site.ui.cursoPlural}`
    : site.ui.emBreve

  return (
    <Reveal atraso={indice * 0.08} className="category-reveal">
      <article className="category-card glass" data-trilha={categoria.publico}>
        <div className="category-photo">
          <PhotoFrame
            imagem={categoria.imagem}
            className="category-photo-image"
            sizes="(max-width: 639px) calc(100vw - 48px), (max-width: 1023px) calc(50vw - 40px), 520px"
          />
          <div className="category-photo-meta">
            <span className="category-order glass">{categoria.ordem}</span>
            <InfoCategoria categoria={categoria} />
          </div>
        </div>
        <span className="category-icon" aria-hidden="true">
          <Icone size={24} strokeWidth={1.75} />
        </span>
        <Link className="category-title-link" href={`/${categoria.publico}/${categoria.slug}`}>
          <div className="category-card-body">
            <h2>{categoria.titulo}</h2>
            <span className="sr-only">{site.ui.acessarCategoria}</span>
            <p>{categoria.resumo}</p>
            <div className="category-footer">
              <span className="category-count">{quantidade}</span>
              <span className="category-arrow" aria-hidden="true"><ArrowUpRight size={21} strokeWidth={1.75} /></span>
            </div>
          </div>
        </Link>
      </article>
    </Reveal>
  )
}
