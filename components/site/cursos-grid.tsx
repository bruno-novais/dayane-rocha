'use client'

import { Suspense } from 'react'
import Link from 'next/link'
import { AnimatePresence, m, useReducedMotion } from 'motion/react'
import { useSearchParams } from 'next/navigation'
import type { Curso, Formato } from '@/data/catalogo'
import type { QueixaSlug } from '@/data/catalogo'
import { QUEIXAS, site } from '@/data/site'
import { CursoCard } from '@/components/site/curso-card'

const formats: Formato[] = ['video', 'documento', 'kit']
const formatLabels: Record<Formato, string> = {
  video: site.ui.video,
  documento: site.ui.documento,
  kit: site.ui.kit,
}

type CursosGridProps = {
  cursos: Curso[]
  mostrarFiltros: boolean
  publico: string
  categoria: string
}

function FilterLink({ href, label, active, group }: { href: string; label: string; active: boolean; group: string }) {
  const reducedMotion = useReducedMotion()

  return (
    <Link className="filter-chip" href={href} replace scroll={false} aria-current={active ? 'true' : undefined}>
      {active && (
        <m.span
          className="filter-chip-active"
          layoutId={`filter-active-${group}`}
          transition={reducedMotion ? { duration: 0.15 } : { type: 'spring', stiffness: 420, damping: 34 }}
        />
      )}
      <span>{label}</span>
    </Link>
  )
}

function CursosGridContent({ cursos, mostrarFiltros, publico, categoria }: CursosGridProps) {
  const searchParams = useSearchParams()
  const reducedMotion = useReducedMotion()
  const rawQueixa = searchParams.get('queixa')
  const rawFormato = searchParams.get('formato')
  const selectedQueixa = QUEIXAS.find((queixa) => queixa.slug === rawQueixa)?.slug ?? null
  const selectedFormato = formats.find((formato) => formato === rawFormato) ?? null
  const filtered = cursos.filter((curso) => {
    const matchesQueixa = !selectedQueixa || curso.queixa === selectedQueixa
    const matchesFormato = !selectedFormato || curso.formatos.includes(selectedFormato)
    return matchesQueixa && matchesFormato
  })

  function filterHref(key: 'queixa' | 'formato', value: string | null) {
    const params = new URLSearchParams(searchParams.toString())
    if (value) params.set(key, value)
    else params.delete(key)
    const query = params.toString()
    return `/${publico}/${categoria}${query ? `?${query}` : ''}`
  }

  return (
    <>
      {mostrarFiltros && (
        <div className="filters-sticky glass" role="group" aria-label={site.ui.filtros}>
          <div className="filters-row">
            <span id="filter-caption-queixa" className="filter-caption">{site.ui.filtroPorQueixa}</span>
            <div className="filter-chip-list" role="group" aria-labelledby="filter-caption-queixa">
              <FilterLink href={filterHref('queixa', null)} label={site.ui.todos} active={!selectedQueixa} group="queixa" />
              {QUEIXAS.map((queixa) => (
                <FilterLink
                  key={queixa.slug}
                  href={filterHref('queixa', queixa.slug)}
                  label={queixa.rotulo}
                  active={selectedQueixa === queixa.slug}
                  group="queixa"
                />
              ))}
            </div>
          </div>
          <div className="filters-row">
            <span id="filter-caption-formato" className="filter-caption">{site.ui.filtroPorFormato}</span>
            <div className="filter-chip-list" role="group" aria-labelledby="filter-caption-formato">
              <FilterLink href={filterHref('formato', null)} label={site.ui.todos} active={!selectedFormato} group="formato" />
              {formats.map((formato) => (
                <FilterLink
                  key={formato}
                  href={filterHref('formato', formato)}
                  label={formatLabels[formato]}
                  active={selectedFormato === formato}
                  group="formato"
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {filtered.length > 0 ? (
        <div className="course-grid">
          <AnimatePresence mode="popLayout" initial={false}>
            {filtered.map((curso, index) => (
              <m.div
                key={curso.slug}
                layout={!reducedMotion}
                initial={reducedMotion ? false : { opacity: 0, filter: 'blur(4px)', y: 8 }}
                animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                exit={reducedMotion ? { opacity: 0 } : { opacity: 0, filter: 'blur(4px)', y: -4 }}
                transition={{ duration: reducedMotion ? 0.15 : 0.3, delay: reducedMotion ? 0 : index * 0.04 }}
              >
                <CursoCard curso={curso} />
              </m.div>
            ))}
          </AnimatePresence>
        </div>
      ) : (
        <div className="empty-state" role="status">
          <p>{site.ui.estadoVazio}</p>
          <Link className="button-primary" href={`/${publico}/${categoria}`} replace scroll={false}>
            {site.ui.limparFiltro}
          </Link>
        </div>
      )}
    </>
  )
}

function CursosGridFallback({ cursos }: Pick<CursosGridProps, 'cursos'>) {
  return (
    <div className="course-grid">
      {cursos.map((curso) => <CursoCard key={curso.slug} curso={curso} />)}
    </div>
  )
}

export function CursosGrid(props: CursosGridProps) {
  return (
    <Suspense fallback={<CursosGridFallback cursos={props.cursos} />}>
      <CursosGridContent {...props} />
    </Suspense>
  )
}
