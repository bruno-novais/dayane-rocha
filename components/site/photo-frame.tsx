import { existsSync } from 'node:fs'
import path from 'node:path'
import type { ComponentType } from 'react'
import { PhotoImage } from '@/components/site/photo-image'

type PhotoFrameProps = {
  imagem: { src: string; alt: string }
  Icone: ComponentType<{ size?: number; strokeWidth?: number; className?: string; 'aria-hidden'?: boolean }>
  className?: string
  sizes: string
  priority?: boolean
}

export function PhotoFrame({ imagem, Icone, className = '', sizes, priority = false }: PhotoFrameProps) {
  const arquivo = path.join(process.cwd(), 'public', imagem.src.replace(/^\/+/, ''))
  const imagemExiste = existsSync(arquivo)

  return (
    <div className={`photo-frame ${className}`}>
      <div className="photo-fallback" aria-hidden="true">
        <svg className="photo-fallback-lines" viewBox="0 0 480 300" fill="none" focusable="false">
          <path d="M-28 208C64 172 92 105 170 118c75 12 83 92 159 76 51-11 83-65 179-72" />
          <path d="M-24 246c93-29 130-101 197-93 61 7 81 60 143 46 66-15 91-88 178-89" />
          <path d="M-12 166c68-10 110-89 174-86 67 3 94 83 157 60 50-18 72-67 143-83" />
          <circle cx="170" cy="118" r="3" />
          <circle cx="329" cy="194" r="3" />
        </svg>
        <Icone className="photo-fallback-icon" size={84} strokeWidth={1.25} aria-hidden={true} />
      </div>
      {imagemExiste && <PhotoImage imagem={imagem} sizes={sizes} priority={priority} />}
      <span className="photo-frame-shade" aria-hidden="true" />
    </div>
  )
}
