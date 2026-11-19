import Link from 'next/link'
import { ArrowUpRight, Brain, UserRound } from 'lucide-react'
import type { Publico } from '@/data/catalogo'
import { site } from '@/data/site'
import { PhotoFrame } from '@/components/site/photo-frame'

type PainelTrilhaProps = { publico: Publico; categorias: Array<{ rotuloCurto: string }> }

export function PainelTrilha({ publico, categorias }: PainelTrilhaProps) {
  const Icone = publico.slug === 'fisioterapeutas' ? Brain : UserRound
  const rotulo = publico.slug === 'fisioterapeutas' ? site.ui.rotuloProfissional : site.ui.rotuloEmCasa
  const exibeResumo = categorias.length > 4
  const categoriasVisiveis = exibeResumo ? categorias.slice(0, 3) : categorias

  return (
    <Link
      className="pathway-panel"
      href={`/${publico.slug}`}
      aria-label={`Entrar na trilha: ${publico.titulo}`}
      data-trilha={publico.slug}
      data-card-observe
    >
      <div className="pathway-photo">
        <PhotoFrame
          imagem={publico.imagem}
          className="pathway-photo-image"
          sizes="(max-width: 639px) calc(100vw - 48px), (max-width: 900px) calc(50vw - 40px), 560px"
          priority
        />
      </div>
      <span className="card-glass-blur" aria-hidden="true" />
      <span className="card-glass-shade" aria-hidden="true" />
      <span className="card-glass-tint" aria-hidden="true" />
      <span className="pathway-context-label glass" aria-hidden="true">{rotulo}</span>
      <span className="pathway-icon glass" aria-hidden="true"><Icone size={20} strokeWidth={1.75} /></span>
      <div className="pathway-content">
        <div className="pathway-heading-row">
          <h2>{publico.rotuloCurto}</h2>
          <span className="pathway-count-badge glass">{categorias.length} categorias</span>
        </div>
        <p>{publico.descricao}</p>
        <div className="pathway-pills" role="list" aria-label={`Categorias de ${publico.titulo}`}>
          {categoriasVisiveis.map((categoria) => <span role="listitem" key={categoria.rotuloCurto}>{categoria.rotuloCurto}</span>)}
          {exibeResumo && <span role="listitem">+{categorias.length - 3}</span>}
        </div>
        <span className="card-wide-button" aria-hidden="true">
          <span>Entrar na trilha</span>
          <ArrowUpRight size={20} strokeWidth={1.8} />
        </span>
      </div>
    </Link>
  )
}
