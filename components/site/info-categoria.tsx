'use client'

import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverTitle,
  PopoverTrigger,
} from '@/components/ui/popover'
import type { Categoria } from '@/data/catalogo'
import { site } from '@/data/site'

export function InfoCategoria({ categoria }: { categoria: Categoria }) {
  return (
    <Popover>
      <PopoverTrigger className="info-trigger" aria-label={`${site.ui.maisInformacoes} ${categoria.titulo}`}>
        i
      </PopoverTrigger>
      <PopoverContent className="info-popover glass" side="bottom" align="end" sideOffset={12}>
        <PopoverTitle className="info-popover-title">{categoria.titulo}</PopoverTitle>
        <PopoverDescription className="info-popover-description">{categoria.explicacao}</PopoverDescription>
        <strong>{site.ui.exemplos}</strong>
        <ul>
          {categoria.exemplos.map((exemplo) => <li key={exemplo}>{exemplo}</li>)}
        </ul>
      </PopoverContent>
    </Popover>
  )
}
