'use client'

import { usePathname } from 'next/navigation'
import { m, useReducedMotion } from 'motion/react'
import type { ReactNode } from 'react'
import { EASE_OUT_EXPO } from '@/lib/motion'

export default function Template({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const reducedMotion = useReducedMotion()

  return (
    <m.div
      key={pathname}
      initial={reducedMotion ? false : { opacity: 0, filter: 'blur(6px)', y: 8 }}
      animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
      transition={{
        duration: reducedMotion ? 0.15 : 0.25,
        ease: EASE_OUT_EXPO,
      }}
    >
      {children}
    </m.div>
  )
}
