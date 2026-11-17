import { Info } from 'lucide-react'
import { site } from '@/data/site'

type AvisoSaudeProps = { completo?: boolean }

export function AvisoSaude({ completo = false }: AvisoSaudeProps) {
  return (
    <aside className="health-notice glass" aria-label={site.avisoSaude.rotulo}>
      <span className="health-icon" aria-hidden="true">
        <Info size={19} strokeWidth={1.75} />
      </span>
      <p>
        <strong>{site.avisoSaude.rotulo}</strong>
        {completo ? site.avisoSaude.completo : site.avisoSaude.curto}
      </p>
    </aside>
  )
}
