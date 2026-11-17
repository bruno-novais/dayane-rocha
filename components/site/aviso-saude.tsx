import { Info } from 'lucide-react'
import { site } from '@/data/site'

type AvisoSaudeProps = { completo?: boolean; compacto?: boolean }

export function AvisoSaude({ completo = false, compacto = false }: AvisoSaudeProps) {
  return (
    <aside
      className={`health-notice${completo ? ' glass' : ''}${compacto ? ' health-notice--compact' : ''}`}
      aria-label={completo ? site.avisoSaude.rotulo : undefined}
    >
      <span className="health-icon" aria-hidden="true">
        <Info size={19} strokeWidth={1.75} />
      </span>
      <p>
        {completo && <strong>{site.avisoSaude.rotulo}</strong>}
        {completo ? site.avisoSaude.completo : site.ui.conteudoEducativoCurto}
      </p>
    </aside>
  )
}
