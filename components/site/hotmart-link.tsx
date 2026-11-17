'use client'

import type { MouseEventHandler, ReactNode } from 'react'
import { track } from '@vercel/analytics'
import { ExternalLink } from 'lucide-react'
import { isHotmartUrlValida, type Curso } from '@/data/catalogo'
import { site } from '@/data/site'

type HotmartLinkProps = {
  curso: Curso
  className?: string
  children: ReactNode
  mostrarIcone?: boolean
}

export function HotmartLink({ curso, className, children, mostrarIcone = false }: HotmartLinkProps) {
  if (!isHotmartUrlValida(curso.hotmartUrl)) return <>{children}</>

  let href = curso.hotmartUrl
  try {
    const url = new URL(curso.hotmartUrl)
    url.searchParams.set('utm_source', 'site')
    url.searchParams.set('utm_medium', curso.publico)
    url.searchParams.set('utm_campaign', curso.categoria)
    url.searchParams.set('utm_content', curso.slug)
    href = url.toString()
  } catch {
    href = curso.hotmartUrl
  }

  const onClick: MouseEventHandler<HTMLAnchorElement> = () => {
    track('clique_hotmart', {
      curso: curso.slug,
      categoria: curso.categoria,
      publico: curso.publico,
    })
  }

  return (
    <a
      className={className}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      aria-label={`${curso.titulo}, ${site.ui.novaAba}`}
    >
      {children}
      {mostrarIcone && <ExternalLink size={16} strokeWidth={1.75} aria-hidden="true" />}
    </a>
  )
}
