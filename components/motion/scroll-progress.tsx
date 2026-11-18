'use client'

import { m, useReducedMotion, useScroll, useSpring } from 'motion/react'

export function ScrollProgress({ publico }: { publico?: 'fisioterapeutas' | 'pacientes' }) {
  const { scrollYProgress } = useScroll()
  const reducedMotion = useReducedMotion()
  const spring = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })
  const progress = reducedMotion ? scrollYProgress : spring

  return (
    <m.div
      className="route-progress"
      data-trilha={publico}
      aria-hidden="true"
      style={{ scaleX: progress }}
    />
  )
}
