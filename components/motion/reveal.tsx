'use client'

import type { ReactNode } from 'react'
import { m, useReducedMotion } from 'motion/react'
import { EASE_OUT_EXPO, MOTION, blockReveal } from '@/lib/motion'
import { useIntro } from '@/components/site/intro-provider'

type RevealProps = {
  children: ReactNode
  className?: string
  atraso?: number
  enabled?: boolean
  as?: 'div' | 'section'
  aguardarAbertura?: boolean
}

export function Reveal({ children, className, atraso = 0, enabled = true, as = 'div', aguardarAbertura = true }: RevealProps) {
  const reducedMotion = useReducedMotion()
  const { ready } = useIntro()
  const canReveal = enabled && (!aguardarAbertura || ready)
  const Tag = m[as]

  return (
    <Tag
      className={`reveal-block${className ? ` ${className}` : ''}`}
      initial={reducedMotion ? false : 'hidden'}
      animate={!canReveal ? 'hidden' : reducedMotion ? 'visible' : undefined}
      whileInView={canReveal && !reducedMotion ? 'visible' : undefined}
      viewport={MOTION.viewport}
      variants={blockReveal}
      transition={{ duration: reducedMotion ? 0.15 : MOTION.reveal, delay: reducedMotion ? 0 : atraso, ease: EASE_OUT_EXPO }}
    >
      {children}
    </Tag>
  )
}
