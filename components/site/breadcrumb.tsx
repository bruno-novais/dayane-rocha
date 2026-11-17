import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { site } from '@/data/site'

type BreadcrumbItem = { label: string; href?: string }

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav className="breadcrumb" aria-label={site.ui.voceEstaEm}>
      <Link href="/">{site.ui.inicio}</Link>
      {items.map((item, index) => {
        const last = index === items.length - 1
        return (
          <span className="breadcrumb-part" key={`${item.label}-${index}`}>
            <ChevronRight size={15} strokeWidth={1.75} aria-hidden="true" />
            {item.href && !last ? (
              <Link href={item.href}>{item.label}</Link>
            ) : (
              <span aria-current="page">{item.label}</span>
            )}
          </span>
        )
      })}
    </nav>
  )
}
