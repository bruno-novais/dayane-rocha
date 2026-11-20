'use client'

import { createContext, useCallback, useContext, useState } from 'react'
import type { ReactNode } from 'react'

type IntroContextValue = { ready: boolean; markReady: () => void }
const IntroContext = createContext<IntroContextValue>({ ready: false, markReady: () => {} })

export function useIntro() {
  return useContext(IntroContext)
}

export function IntroProvider({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false)
  const markReady = useCallback(() => setReady(true), [])

  return <IntroContext.Provider value={{ ready, markReady }}>{children}</IntroContext.Provider>
}
