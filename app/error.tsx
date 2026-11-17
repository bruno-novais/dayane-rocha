'use client'

import Link from 'next/link'
import { RefreshCw } from 'lucide-react'
import { site } from '@/data/site'

type ErrorPageProps = { error: Error & { digest?: string }; reset: () => void }

export default function ErrorPage({ reset }: ErrorPageProps) {
  return (
    <section className="container-site error-shell" role="alert">
      <h1 className="section-title">{site.ui.erroTitulo}</h1>
      <p className="muted-copy">{site.ui.errorDetail}</p>
      <div className="error-actions">
        <button className="button-primary" onClick={reset} type="button">
          <RefreshCw size={16} aria-hidden="true" />{site.ui.tentarNovamente}
        </button>
        <Link className="text-link" href="/">{site.ui.voltar}</Link>
      </div>
    </section>
  )
}
