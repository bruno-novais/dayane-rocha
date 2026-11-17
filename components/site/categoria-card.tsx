import Link from 'next/link'
import { Activity, Brain, FileText, Hand, HeartHandshake, Search, Zap } from 'lucide-react'
import type { ComponentType } from 'react'
import type { Categoria } from '@/data/catalogo'
import { getCursos } from '@/data/catalogo'
import { site } from '@/data/site'
import { InfoCategoria } from '@/components/site/info-categoria'
import { Reveal } from '@/components/motion/reveal'
import { ArrowUpRight } from 'lucide-react'

const icones: Record<string, ComponentType<{ size?: number; strokeWidth?: number; 'aria-hidden'?: boolean }>> = {
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
    ? `${ativos} ${ativos === 1 ? site.ui.cursoSingular : site.ui.cursoPlural} ${ativos === 1 ? site.ui.cursoDisponivel : site.ui.cursosDisponiveis}`
    : site.ui.emBreve

  return (
    <Reveal atraso={indice * 0.08} className="category-reveal">
      <article className="category-card glass">
        <div className="category-card-top">
          <span className="category-order">{categoria.ordem}</span>
          <span className="category-icon" aria-hidden="true">
            <Icone size={24} strokeWidth={1.75} />
          </span>
          <InfoCategoria categoria={categoria} />
        </div>
        <Link className="category-title-link" href={`/${categoria.publico}/${categoria.slug}`}>
          <h2>{categoria.titulo}</h2>
          <span className="sr-only">{site.ui.acessarCategoria}</span>
          <span className="category-arrow" aria-hidden="true"><ArrowUpRight size={19} strokeWidth={1.75} /></span>
        </Link>
        <p>{categoria.resumo}</p>
        <span className="category-count">{quantidade}</span>
      </article>
    </Reveal>
  )
}
