import Image from 'next/image'
import type { ImagemTrilha } from '@/data/catalogo'

type PhotoImageProps = {
  imagem: ImagemTrilha
  sizes: string
  priority: boolean
}

export function PhotoImage({ imagem, sizes, priority }: PhotoImageProps) {
  return (
    <Image
      className="photo-frame-image"
      src={imagem.src}
      alt={imagem.alt}
      fill
      sizes={sizes}
      priority={priority}
      placeholder="blur"
      style={{ objectPosition: imagem.posicao, transform: `scale(${imagem.zoom ?? 1})` }}
    />
  )
}
