import { Nunito } from 'next/font/google'

// TROCAR por next/font/local com AllRoundGothic-Regular/Medium/Bold/ExtraBold .woff2 em /public/fonts
export const brandFont = Nunito({
  subsets: ['latin'],
  weight: ['400', '500', '700', '800'],
  variable: '--font-brand',
  display: 'swap',
  fallback: ['system-ui', 'sans-serif'],
})
