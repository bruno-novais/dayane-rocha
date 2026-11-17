'use client'

import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { site } from '@/data/site'

type IntroContextValue = { ready: boolean }
const IntroContext = createContext<IntroContextValue>({ ready: false })

export function useIntro() {
  return useContext(IntroContext)
}

export function IntroProvider({ children }: { children: React.ReactNode }) {
  const reducedMotion = useRef(false)
  const [ready, setReady] = useState(false)
  const [active, setActive] = useState(false)
  const [leaving, setLeaving] = useState(false)
  const [skipping, setSkipping] = useState(false)
  const timers = useRef<ReturnType<typeof setTimeout>[]>([])
  const skipRef = useRef<HTMLButtonElement>(null)

  const finish = useCallback(() => {
    timers.current.forEach(clearTimeout)
    timers.current = []
    setActive(false)
    setLeaving(false)
    setSkipping(false)
    document.documentElement.removeAttribute('data-intro')
    window.requestAnimationFrame(() => {
      document.getElementById('conteudo')?.focus({ preventScroll: true })
    })
    setReady(true)
  }, [])

  const skip = useCallback(() => {
    if (!active || leaving) return
    timers.current.forEach(clearTimeout)
    timers.current = []
    setLeaving(true)
    setSkipping(true)
    timers.current.push(setTimeout(finish, 400))
  }, [active, finish, leaving])

  useEffect(() => {
    const shouldPlay = document.documentElement.dataset.intro === 'play'
    reducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (shouldPlay && !reducedMotion.current) {
      try {
        sessionStorage.setItem('dr-intro-visto', '1')
      } catch {}
      setActive(true)
      timers.current.push(setTimeout(() => setLeaving(true), 2500))
      timers.current.push(setTimeout(finish, 3600))
    } else {
      try {
        sessionStorage.setItem('dr-intro-visto', '1')
      } catch {}
      document.documentElement.removeAttribute('data-intro')
      setReady(true)
    }

    return () => timers.current.forEach(clearTimeout)
  }, [finish])

  useEffect(() => {
    if (!active) return
    skipRef.current?.focus({ preventScroll: true })
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        skip()
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [active, skip])

  return (
    <IntroContext.Provider value={{ ready }}>
      <div data-site-content inert={active || undefined}>
        {children}
      </div>
      <div
        className={`intro-overlay${leaving ? ' is-leaving' : ''}${skipping ? ' is-skipping' : ''}`}
        role="dialog"
        aria-modal={active ? true : undefined}
        aria-label={site.ui.abertura}
        aria-hidden={!active}
      >
        <span className="sr-only">{site.introducao.acessivel}</span>
        <div className="intro-center" aria-hidden="true">
          <Image className="intro-symbol" src="/brand/logo-simbolo.svg" alt="" width={128} height={120} priority unoptimized />
          <h1 className="intro-name">
            {Array.from(site.introducao.nome).map((letter, index) => (
              <span
                className={letter === ' ' ? 'intro-space' : undefined}
                key={`${letter}-${index}`}
                style={{ animationDelay: `${0.7 + index * 0.055}s`, ['--intro-index' as string]: index }}
              >
                {letter === ' ' ? '\u00a0' : letter}
              </span>
            ))}
          </h1>
          <p className="intro-tagline">
            {site.introducao.frase.map((segmento, segmentIndex) =>
              segmento.texto.split(/\s+/).filter(Boolean).map((word, wordIndex) => (
                <span
                  className={'classe' in segmento ? segmento.classe : undefined}
                  key={`${segmentIndex}-${wordIndex}-${word}`}
                  style={{ animationDelay: `${1.5 + (segmentIndex + wordIndex) * 0.09}s` }}
                >
                  {word}
                </span>
              )),
            )}
          </p>
        </div>
        <button ref={skipRef} className="intro-skip glass" type="button" onClick={skip} tabIndex={active ? 0 : -1}>
          {site.introducao.pular}
        </button>
        <span className="intro-progress" aria-hidden="true" />
      </div>
    </IntroContext.Provider>
  )
}
