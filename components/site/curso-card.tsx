import { FileText, Package, Video } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import type { Curso, Formato } from '@/data/catalogo'
import { MODO_DEMO, site } from '@/data/site'
import { HotmartLink } from '@/components/site/hotmart-link'

const formatos: Record<Formato, string> = {
  video: site.ui.video,
  documento: site.ui.documento,
  kit: site.ui.kit,
}
const IconesFormato = { video: Video, documento: FileText, kit: Package }

export function CursoCard({ curso }: { curso: Curso }) {
  const FormatoIcone = IconesFormato[curso.formatos[0]]
  const disponivel = curso.status === 'ativo'

  return (
    <article className={`course-card${disponivel ? '' : ' is-soon'}`}>
      <div className="course-cover" aria-hidden="true">
        <span className="course-cover-icon"><FormatoIcone size={56} strokeWidth={1.35} /></span>
        {!disponivel && <Badge variant="outline" className="course-status">{site.ui.emBreve}</Badge>}
      </div>
      <div className="course-content">
        <div className="course-tags" role="group" aria-label={site.ui.informacoesCurso}>
          {curso.formatos.map((formato) => (
            <span className="course-tag" key={formato}>{formatos[formato]}</span>
          ))}
          {curso.nivel && <span className="course-tag">{site.ui.niveis[curso.nivel]}</span>}
          {MODO_DEMO && <span className="course-tag course-example-tag">{site.ui.exemplo}</span>}
        </div>
        <h2>
          {disponivel ? (
            <HotmartLink curso={curso} className="course-title-link">{curso.titulo}</HotmartLink>
          ) : curso.titulo}
        </h2>
        <p>{curso.descricao}</p>
        <div className="course-action-row">
          <span>{disponivel ? site.ui.disponivel : site.ui.emBreve}</span>
          {disponivel && (
            <HotmartLink curso={curso} className="button-primary" mostrarIcone>
              {site.ui.verCurso}
            </HotmartLink>
          )}
        </div>
      </div>
    </article>
  )
}
