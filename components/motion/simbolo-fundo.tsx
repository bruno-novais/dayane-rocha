'use client'

import Image from 'next/image'
import { m, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'

type SimboloFundoProps = { secundario?: boolean }

export function SimboloFundo({ secundario = false }: SimboloFundoProps) {
  const reference = useRef<HTMLDivElement>(null)
  const reducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['-12%', '12%'])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08])

  return (
    <m.div
      ref={reference}
      aria-hidden="true"
      className={`symbol-background${secundario ? ' symbol-background--secondary' : ''}`}
      style={reducedMotion ? undefined : { y, scale }}
    >
      <Image
        src="/brand/logo-simbolo.svg"
        alt=""
        width={900}
        height={839}
        priority={false}
        unoptimized
      />
    </m.div>
  )
}
