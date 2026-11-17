'use client'

import { m, useReducedMotion } from 'motion/react'
import { MOTION, EASE_OUT_EXPO } from '@/lib/motion'
import { useIntro } from '@/components/site/intro-provider'

type TextSegment = { texto: string; classe?: string }
type RevealTextProps = {
  as?: 'h1' | 'h2' | 'p'
  segmentos: readonly TextSegment[]
  modo?: 'letters' | 'words'
  className?: string
  atraso?: number
  enabled?: boolean
  decorativo?: boolean
  aguardarAbertura?: boolean
}

export function RevealText({
  as = 'p',
  segmentos,
  modo = 'words',
  className,
  atraso = 0,
  enabled = true,
  decorativo = false,
  aguardarAbertura = true,
}: RevealTextProps) {
  const reducedMotion = useReducedMotion()
  const { ready } = useIntro()
  const canReveal = enabled && (!aguardarAbertura || ready)
  const Tag = m[as]
  const accessibleText = segmentos.map(({ texto }) => texto).join('')
  let sequence = 0

  return (
    <Tag className={className} aria-hidden={decorativo || undefined}>
      {!decorativo && <span className="sr-only">{accessibleText}</span>}
      <span className="reveal-text-visual" aria-hidden="true">
        {segmentos.map((segmento, segmentIndex) => {
          const tokens = segmento.texto.match(/\s+|\S+/g) ?? []

          return (
            <span key={`${segmentIndex}-${segmento.texto}`} className={segmento.classe}>
              {tokens.map((token, tokenIndex) => {
                if (/^\s+$/.test(token)) return <span key={`${tokenIndex}-space`}>{token}</span>
                const current = sequence++

                if (modo === 'letters') {
                  sequence += Array.from(token).length - 1
                  return (
                    <span className="reveal-word" key={`${tokenIndex}-${token}`}>
                      {Array.from(token).map((letter, letterIndex) => {
                        const index = current + letterIndex
                        return (
                          <m.span
                            className="reveal-text-unit"
                            key={`${letter}-${letterIndex}`}
                            initial={reducedMotion ? false : 'hidden'}
                            animate={!canReveal ? 'hidden' : reducedMotion ? 'visible' : undefined}
                            whileInView={canReveal && !reducedMotion ? 'visible' : undefined}
                            viewport={MOTION.viewport}
                            variants={{
                              hidden: { opacity: 0, filter: 'blur(12px)', y: 14 },
                              visible: { opacity: 1, filter: 'blur(0px)', y: 0 },
                            }}
                            transition={{
                              duration: reducedMotion ? 0.15 : 0.65,
                              delay: reducedMotion ? 0 : atraso + index * 0.025,
                              ease: EASE_OUT_EXPO,
                            }}
                          >
                            {letter}
                          </m.span>
                        )
                      })}
                    </span>
                  )
                }

                const index = current
                return (
                  <m.span
                    className="reveal-text-unit reveal-word"
                    key={`${tokenIndex}-${token}`}
                    initial={reducedMotion ? false : 'hidden'}
                    animate={!canReveal ? 'hidden' : reducedMotion ? 'visible' : undefined}
                    whileInView={canReveal && !reducedMotion ? 'visible' : undefined}
                    viewport={MOTION.viewport}
                    variants={{
                      hidden: { opacity: 0, filter: 'blur(12px)', y: 14 },
                      visible: { opacity: 1, filter: 'blur(0px)', y: 0 },
                    }}
                    transition={{
                      duration: reducedMotion ? 0.15 : 0.65,
                      delay: reducedMotion ? 0 : atraso + index * 0.06,
                      ease: EASE_OUT_EXPO,
                    }}
                  >
                    {token}
                  </m.span>
                )
              })}
            </span>
          )
        })}
      </span>
    </Tag>
  )
}
