import Link from 'next/link'
import { ArrowUpRight, Brain, UserRound } from 'lucide-react'
import type { Publico } from '@/data/catalogo'
import { site } from '@/data/site'
import { PhotoFrame } from '@/components/site/photo-frame'

type PainelTrilhaProps = { publico: Publico; categorias: string[] }

export function PainelTrilha({ publico, categorias }: PainelTrilhaProps) {
  const Icone = publico.slug === 'fisioterapeutas' ? Brain : UserRound
  const rotulo = publico.slug === 'fisioterapeutas' ? site.ui.rotuloProfissional : site.ui.rotuloEmCasa

  return (
    <Link className="pathway-panel glass group" data-trilha={publico.slug} href={`/${publico.slug}`}>
      <div className="pathway-photo">
        <PhotoFrame
          imagem={publico.imagem}
          Icone={Icone}
          className="pathway-photo-image"
          sizes="(max-width: 639px) 360px, (max-width: 900px) 50vw, 610px"
          priority
        />
        <span className="pathway-photo-label glass">{site.ui.trilha} {publico.trilha}</span>
        <span className="pathway-context-label glass-salmao">{rotulo}</span>
      </div>
      <span className="pathway-icon" aria-hidden="true"><Icone size={25} strokeWidth={1.75} /></span>
      <div className="pathway-content">
        <h2>{publico.rotuloCurto}</h2>
        <p>{publico.descricao}</p>
        <span className="pathway-pills" aria-label={categorias.join(', ')}>
          {categorias.map((categoria) => <span key={categoria}>{categoria}</span>)}
        </span>
        <span className="pathway-count-mobile">{categorias.length} categorias</span>
        <span className="pathway-footer">
          <span>{site.ui.verCategorias}</span>
          <span className="round-link" aria-hidden="true">
            <ArrowUpRight size={21} strokeWidth={1.75} />
          </span>
        </span>
      </div>
    </Link>
  )
}
