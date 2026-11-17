'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Menu, X } from 'lucide-react'
import { site } from '@/data/site'

export function SiteHeader() {
  const pathname = usePathname()
  const headerRef = useRef<HTMLElement>(null)
  const [scrollY, setScrollY] = useState(0)
  const [hidden, setHidden] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const nextY = window.scrollY
      const movingDown = nextY > lastScrollY.current + 6
      const movingUp = nextY < lastScrollY.current - 6
      const focusWithin = headerRef.current?.contains(document.activeElement) ?? false

      setScrollY(nextY)
      if (menuOpen || focusWithin || nextY <= 24) setHidden(false)
      else if (movingDown && nextY > 100) setHidden(true)
      else if (movingUp) setHidden(false)
      lastScrollY.current = nextY
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [menuOpen])

  return (
    <header
      ref={headerRef}
      className={`site-header glass${scrollY > 24 ? ' is-condensed' : ''}${hidden && !menuOpen ? ' is-hidden' : ''}`}
      inert={hidden && !menuOpen ? true : undefined}
    >
      <div className="header-inner">
        <Link className="header-logo" href="/" aria-label={site.ui.voltarInicio}>
          <Image src="/brand/logo-lockup.svg" alt={site.nome} width={166} height={54} priority unoptimized />
        </Link>
        <nav className="header-nav" aria-label={site.ui.navegacaoPrincipal}>
          {site.navegacao.map((item) => (
            <Link key={item.href} href={item.href} aria-current={pathname.startsWith(item.href) ? 'page' : undefined}>
              {item.rotulo}
            </Link>
          ))}
        </nav>
        <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
          <SheetTrigger className="menu-trigger" aria-label={site.ui.abrirMenu}>
            <Menu aria-hidden="true" size={21} strokeWidth={1.75} />
          </SheetTrigger>
          <SheetContent>
              <div className="mobile-sheet-head">
                <SheetTitle>{site.ui.menuTitulo}</SheetTitle>
                <SheetClose className="mobile-sheet-close" aria-label={site.ui.fecharMenu}>
                  <X aria-hidden="true" size={19} strokeWidth={1.75} />
                </SheetClose>
              </div>
              <nav className="mobile-nav" aria-label={site.ui.navegacaoPrincipal}>
                {site.navegacao.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={pathname.startsWith(item.href) ? 'page' : undefined}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.rotulo}
                  </Link>
                ))}
              </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
