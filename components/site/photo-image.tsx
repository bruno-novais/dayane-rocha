'use client'

import Image from 'next/image'
import { useState } from 'react'

type PhotoImageProps = {
  imagem: { src: string; alt: string }
  sizes: string
  priority: boolean
}

export function PhotoImage({ imagem, sizes, priority }: PhotoImageProps) {
  const [falhou, setFalhou] = useState(false)

  if (falhou) return null

  return (
    <Image
      className="photo-frame-image"
      src={imagem.src}
      alt={imagem.alt}
      fill
      sizes={sizes}
      priority={priority}
      onError={() => setFalhou(true)}
    />
  )
}
