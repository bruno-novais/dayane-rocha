import Link from 'next/link'
import { ArrowUpRight, Brain, UserRound } from 'lucide-react'
import type { Publico } from '@/data/catalogo'
import { site } from '@/data/site'
import { PhotoFrame } from '@/components/site/photo-frame'

type PainelTrilhaProps = { publico: Publico; categorias: string[] }

export function PainelTrilha({ publico, categorias }: PainelTrilhaProps) {
  const Icone = publico.slug === 'fisioterapeutas' ? Brain : UserRound
  const rotulo = publico.slug === 'fisioterapeutas' ? site.ui.rotuloProfissional : site.ui.rotuloEmCasa
  const exibeResumo = categorias.length > 4
  const categoriasVisiveis = exibeResumo ? categorias.slice(0, 3) : categorias

  return (
    <Link className="pathway-panel glass group" data-trilha={publico.slug} href={`/${publico.slug}`}>
      <div className="pathway-photo">
        <PhotoFrame
          imagem={publico.imagem}
          className="pathway-photo-image"
          sizes="(max-width: 639px) calc(100vw - 48px), (max-width: 900px) calc(50vw - 40px), 560px"
          priority
        />
        <span className="pathway-context-label glass">{rotulo}</span>
      </div>
      <span className="pathway-icon" aria-hidden="true"><Icone size={25} strokeWidth={1.75} /></span>
      <div className="pathway-content">
        <h2>{publico.rotuloCurto}</h2>
        <p>{publico.descricao}</p>
        <div className="pathway-footer">
          <div className="pathway-pills" role="list" aria-label={`Categorias de ${publico.titulo}`}>
            {categoriasVisiveis.map((categoria) => <span role="listitem" key={categoria}>{categoria}</span>)}
            {exibeResumo && <span role="listitem">+{categorias.length - 3}</span>}
          </div>
          <span className="sr-only">Ver categorias de {publico.titulo}</span>
          <span className="round-link" aria-hidden="true">
            <ArrowUpRight size={21} strokeWidth={1.75} />
          </span>
        </div>
      </div>
    </Link>
  )
}
