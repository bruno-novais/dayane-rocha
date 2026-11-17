'use client'

import { m, useInView, useReducedMotion } from 'motion/react'
import { useRef } from 'react'
import { MOTION, EASE_OUT_EXPO } from '@/lib/motion'
import { useIntro } from '@/components/site/intro-provider'

export function LineReveal() {
  const reference = useRef<HTMLDivElement>(null)
  const reducedMotion = useReducedMotion()
  const { ready } = useIntro()
  const inView = useInView(reference, MOTION.viewport)

  return (
    <m.div
      ref={reference}
      className="process-rule"
      aria-hidden="true"
      initial={false}
      animate={{ scaleX: reducedMotion || (ready && inView) ? 1 : 0 }}
      transition={{ duration: reducedMotion ? 0.15 : 0.7, ease: EASE_OUT_EXPO }}
    />
  )
}
