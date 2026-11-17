import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import type { Publico } from '@/data/catalogo'
import { site } from '@/data/site'

type PainelTrilhaProps = { publico: Publico; categorias: string[] }

export function PainelTrilha({ publico, categorias }: PainelTrilhaProps) {
  return (
    <Link className="pathway-panel glass group" href={`/${publico.slug}`}>
      <span className="pathway-index" aria-hidden="true">{publico.trilha}</span>
      <div className="pathway-content">
        <span className="pathway-eyebrow">{site.ui.trilha} {publico.trilha}</span>
        <h2>{publico.rotuloCurto}</h2>
        <p>{publico.descricao}</p>
        <span className="pathway-pills" aria-label={categorias.join(', ')}>
          {categorias.map((categoria) => <span key={categoria}>{categoria}</span>)}
        </span>
        <span className="round-link" aria-hidden="true">
          <ArrowUpRight size={21} strokeWidth={1.75} />
        </span>
      </div>
    </Link>
  )
}
