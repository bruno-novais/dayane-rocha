export const EASE_OUT_EXPO = [0.22, 1, 0.36, 1] as const

export const MOTION = {
  micro: 0.25,
  reveal: 0.7,
  route: 0.25,
  blur: 12,
  viewport: {
    once: true,
    amount: 0.25,
    margin: '-10% 0px',
  },
  stagger: 0.08,
} as const

export const blurReveal = {
  hidden: { opacity: 0, filter: 'blur(12px)', y: 14 },
  visible: { opacity: 1, filter: 'blur(0px)', y: 0 },
}

export const blockReveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}
