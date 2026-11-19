'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

const CARD_SELECTOR = '[data-card-observe]'

export function CardScrollObserver() {
  const pathname = usePathname()

  useEffect(() => {
    const cards = Array.from(document.querySelectorAll<HTMLElement>(CARD_SELECTOR))
    const touchViewport = window.matchMedia('(hover: none)')
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)')
    const areas = new Map<HTMLElement, number>()
    let scrollActiveCard: HTMLElement | undefined
    let pressedCard: HTMLElement | undefined

    cards.forEach((card) => card.removeAttribute('data-estado'))
    if (cards.length === 0) return

    const syncStates = () => {
      const hoveredCard = finePointer.matches ? cards.find((card) => card.matches(':hover')) : undefined
      const focusedCard = cards.find((card) => card.matches(':has(:focus-visible)'))
      const activeCard = pressedCard ?? focusedCard ?? (touchViewport.matches ? scrollActiveCard : hoveredCard)

      cards.forEach((card) => {
        if (card === activeCard) card.setAttribute('data-estado', 'ativo')
        else card.removeAttribute('data-estado')
      })
    }

    const refreshStates = () => window.requestAnimationFrame(syncStates)
    const press = (event: PointerEvent) => {
      if (event.button !== 0) return
      pressedCard = event.currentTarget as HTMLElement
      syncStates()
    }
    const release = () => {
      pressedCard = undefined
      syncStates()
    }

    cards.forEach((card) => {
      card.addEventListener('pointerenter', refreshStates)
      card.addEventListener('pointerleave', refreshStates)
      card.addEventListener('focusin', refreshStates)
      card.addEventListener('focusout', refreshStates)
      card.addEventListener('pointerdown', press)
    })
    document.addEventListener('pointerup', release)
    document.addEventListener('pointercancel', release)

    let observer: IntersectionObserver | undefined
    if (touchViewport.matches && 'IntersectionObserver' in window) {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const card = entry.target as HTMLElement
          const { width, height } = entry.intersectionRect
          const area = entry.isIntersecting ? width * height : 0
          if (area > 0) areas.set(card, area)
          else areas.delete(card)
        })

        let largestArea = 0
        scrollActiveCard = undefined
        areas.forEach((area, card) => {
          if (area > largestArea) {
            largestArea = area
            scrollActiveCard = card
          }
        })
        syncStates()
      }, {
        rootMargin: '-35% 0px -35% 0px',
        threshold: [0, 0.01, 0.1, 0.25, 0.5, 0.75, 1],
      })

      cards.forEach((card) => observer?.observe(card))
    }

    return () => {
      observer?.disconnect()
      cards.forEach((card) => {
        card.removeEventListener('pointerenter', refreshStates)
        card.removeEventListener('pointerleave', refreshStates)
        card.removeEventListener('focusin', refreshStates)
        card.removeEventListener('focusout', refreshStates)
        card.removeEventListener('pointerdown', press)
        card.removeAttribute('data-estado')
      })
      document.removeEventListener('pointerup', release)
      document.removeEventListener('pointercancel', release)
    }
  }, [pathname])

  return null
}
