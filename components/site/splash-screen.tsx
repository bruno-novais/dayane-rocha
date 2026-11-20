'use client'

import { useCallback, useEffect, useState } from 'react'
import { m, useReducedMotion } from 'motion/react'
import { useIntro } from '@/components/site/intro-provider'
import { site } from '@/data/site'

const FROSTED_EASE = [0.22, 1, 0.36, 1] as const

const iconVariants = {
  hidden: { opacity: 0, filter: 'blur(16px)', scale: 0.84, y: 8 },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    scale: 1,
    y: 0,
    transition: { duration: 0.6, ease: FROSTED_EASE },
  },
  exit: {
    opacity: 0,
    filter: 'blur(14px)',
    scale: 1.03,
    transition: { duration: 0.7, ease: FROSTED_EASE },
  },
}

const markVariants = {
  hidden: { opacity: 0, filter: 'blur(16px)', scale: 0.84, y: 8 },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    scale: 1,
    y: 0,
    transition: { duration: 0.6, ease: FROSTED_EASE },
  },
  exit: {
    opacity: 0,
    filter: 'blur(14px)',
    scale: 1.03,
    transition: { duration: 0.7, ease: FROSTED_EASE },
  },
}

const wordmarkVariants = {
  hidden: {},
  visible: { transition: { delayChildren: 0.25, staggerChildren: 0.04 } },
  exit: { transition: { staggerChildren: 0 } },
}

const letterVariants = {
  hidden: { opacity: 0, filter: 'blur(12px)', y: 5 },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    y: 0,
    transition: { duration: 0.3, ease: FROSTED_EASE },
  },
  exit: {
    opacity: 0,
    filter: 'blur(14px)',
    scale: 1.03,
    transition: { duration: 0.7, ease: FROSTED_EASE },
  },
}

const reducedMotionIconVariants = {
  hidden: { opacity: 1 },
  visible: { opacity: 1 },
  exit: { opacity: 0, transition: { duration: 0.16, ease: 'linear' as const } },
}

const reducedMotionLetterVariants = {
  hidden: { opacity: 1 },
  visible: { opacity: 1 },
  exit: { opacity: 0, transition: { duration: 0.16, ease: 'linear' as const } },
}

export function SplashScreen() {
  const prefersReducedMotion = useReducedMotion() === true
  const { markReady } = useIntro()
  const [leaving, setLeaving] = useState(false)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    document.body.classList.add('splash-active')

    const exitTimer = window.setTimeout(() => {
      document.body.classList.remove('splash-active')
      markReady()
      setLeaving(true)
    }, prefersReducedMotion ? 50 : 1500)

    return () => {
      window.clearTimeout(exitTimer)
      document.body.classList.remove('splash-active')
    }
  }, [markReady, prefersReducedMotion])

  const handleAnimationComplete = useCallback(() => {
    if (!leaving) return
    setVisible(false)
    markReady()
  }, [leaving, markReady])

  if (!visible) return null

  const iconMotion = prefersReducedMotion ? reducedMotionIconVariants : iconVariants
  const markMotion = prefersReducedMotion ? reducedMotionIconVariants : markVariants
  const letterMotion = prefersReducedMotion ? reducedMotionLetterVariants : letterVariants

  return (
    <m.div
      className={`splash-screen fixed inset-0 z-[9999] flex items-center justify-center bg-[#111111]/88 backdrop-blur-2xl${leaving ? ' is-leaving pointer-events-none' : ''}`}
      initial={false}
      animate={{ opacity: leaving ? 0 : 1 }}
      transition={{
        duration: prefersReducedMotion ? 0.16 : 0.5,
        delay: leaving && !prefersReducedMotion ? 0.2 : 0,
        ease: 'linear',
      }}
      onAnimationComplete={handleAnimationComplete}
      role="status"
      aria-live="polite"
      aria-label={site.introducao.acessivel}
      style={{
        backdropFilter: 'blur(28px) saturate(115%)',
        WebkitBackdropFilter: 'blur(28px) saturate(115%)',
        willChange: 'opacity',
      }}
    >
      <div className="splash-screen__identity flex flex-col items-center gap-5 text-center" aria-hidden="true">
        <m.div
          className="splash-screen__emblem relative flex size-16 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.03] shadow-[0_8px_32px_rgba(0,0,0,0.5),0_0_40px_rgba(238,123,99,0.16)] backdrop-blur-xl"
          variants={iconMotion}
          initial={prefersReducedMotion ? false : 'hidden'}
          animate={leaving ? 'exit' : 'visible'}
          style={{ willChange: 'transform, opacity, filter' }}
        >
          <span
            className="pointer-events-none absolute inset-0 rounded-2xl"
            style={{
              background: 'radial-gradient(circle at 50% 42%, rgba(238,123,99,0.09), transparent 72%)',
            }}
          />
          <m.span
            className="splash-screen__mark splash-item relative block w-9 aspect-[1868/1740]"
            variants={markMotion}
            initial={prefersReducedMotion ? false : 'hidden'}
            animate={leaving ? 'exit' : 'visible'}
            style={{
              backgroundColor: '#EE7B63',
              maskImage: "url('/brand/logo-simbolo.svg')",
              maskRepeat: 'no-repeat',
              maskPosition: 'center',
              maskSize: 'contain',
              WebkitMaskImage: "url('/brand/logo-simbolo.svg')",
              WebkitMaskRepeat: 'no-repeat',
              WebkitMaskPosition: 'center',
              WebkitMaskSize: 'contain',
              willChange: 'transform, opacity, filter',
            }}
          />
        </m.div>
        <m.p
          className="m-0 whitespace-nowrap text-[clamp(2.5rem,8vw,4.5rem)] font-extrabold leading-none tracking-[-0.055em] text-[#F5F1ED]"
          variants={wordmarkVariants}
          initial={prefersReducedMotion ? false : 'hidden'}
          animate={leaving ? 'exit' : 'visible'}
        >
          {Array.from('Dayane Rocha')
            .filter((letter) => letter !== ' ')
            .map((letter, index) => (
              <m.span
                className="splash-item inline-block"
                key={`${letter}-${index}`}
                variants={letterMotion}
                style={{
                  marginInlineEnd: index === 5 ? '0.22em' : undefined,
                  willChange: 'transform, opacity, filter',
                }}
              >
                {letter}
              </m.span>
            ))}
        </m.p>
      </div>
    </m.div>
  )
}
