'use client'

import { useCallback, useEffect, useState } from 'react'
import { m, useReducedMotion } from 'motion/react'
import { useIntro } from '@/components/site/intro-provider'
import { EASE_OUT_EXPO } from '@/lib/motion'
import { site } from '@/data/site'

const logoItemVariants = {
  hidden: { opacity: 0, filter: 'blur(12px)', y: 6, scale: 0.97 },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    y: 0,
    scale: 1,
    transition: { duration: 0.36, ease: EASE_OUT_EXPO },
  },
  exit: {
    opacity: 0,
    filter: 'blur(12px)',
    y: -4,
    transition: { duration: 0.2, ease: EASE_OUT_EXPO },
  },
}

const reducedMotionItemVariants = {
  hidden: { opacity: 1 },
  visible: { opacity: 1 },
  exit: { opacity: 0, transition: { duration: 0.4, ease: 'linear' as const } },
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
    }, prefersReducedMotion ? 0 : 1450)

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

  const itemVariants = prefersReducedMotion ? reducedMotionItemVariants : logoItemVariants
  const stagger = prefersReducedMotion ? 0 : 0.045
  const logoVariants = {
    hidden: {},
    visible: { transition: { delayChildren: stagger, staggerChildren: stagger } },
    exit: { transition: { staggerChildren: stagger } },
  }
  const wordmarkVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: stagger } },
    exit: { transition: { staggerChildren: stagger } },
  }

  return (
    <m.div
      className={`splash-screen fixed inset-0 z-[9999] flex items-center justify-center bg-[#141414]${leaving ? ' is-leaving pointer-events-none' : ''}`}
      initial={false}
      animate={{ opacity: leaving ? 0 : 1 }}
      transition={{
        duration: prefersReducedMotion ? 0.4 : 0.45,
        delay: leaving && !prefersReducedMotion ? 0.25 : 0,
        ease: 'linear',
      }}
      onAnimationComplete={handleAnimationComplete}
      role="status"
      aria-live="polite"
      aria-label={site.introducao.acessivel}
      style={{ willChange: 'opacity' }}
    >
      <m.div
        className="splash-screen__identity flex flex-col items-center gap-5 text-center"
        variants={logoVariants}
        initial={prefersReducedMotion ? false : 'hidden'}
        animate={leaving ? 'exit' : 'visible'}
        aria-hidden="true"
      >
        <m.span
          className="splash-screen__mark splash-item relative block aspect-[1868/1740] w-24 sm:w-28"
          variants={itemVariants}
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
        <m.p
          className="m-0 whitespace-nowrap text-[clamp(2.5rem,8vw,4.5rem)] font-extrabold leading-none tracking-[-0.055em] text-[#F5F1ED]"
          variants={wordmarkVariants}
        >
          {Array.from('Dayane Rocha')
            .filter((letter) => letter !== ' ')
            .map((letter, index) => (
              <m.span
                className="splash-item inline-block"
                key={`${letter}-${index}`}
                variants={itemVariants}
                style={{
                  marginInlineEnd: index === 5 ? '0.22em' : undefined,
                  willChange: 'transform, opacity, filter',
                }}
              >
                {letter}
              </m.span>
            ))}
        </m.p>
      </m.div>
    </m.div>
  )
}
