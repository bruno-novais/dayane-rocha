import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { site } from '@/data/site'

export default function NotFound() {
  return (
    <section className="container-site error-shell">
      <span className="eyebrow glass">404</span>
      <h1 className="display-title">{site.ui.naoEncontrado}</h1>
      <Link className="button-primary" href="/">
        <ArrowLeft size={17} aria-hidden="true" />{site.ui.voltar}
      </Link>
    </section>
  )
}
