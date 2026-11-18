import { PhotoImage } from '@/components/site/photo-image'
import type { ImagemTrilha } from '@/data/catalogo'

type PhotoFrameProps = {
  imagem: ImagemTrilha
  className?: string
  sizes: string
  priority?: boolean
}

export function PhotoFrame({ imagem, className = '', sizes, priority = false }: PhotoFrameProps) {
  return (
    <div className={`photo-frame ${className}`}>
      <PhotoImage imagem={imagem} sizes={sizes} priority={priority} />
      <span className="photo-frame-shade" aria-hidden="true" />
    </div>
  )
}
