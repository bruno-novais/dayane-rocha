import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { ImageResponse } from 'next/og'
import { site } from '@/data/site'

export const runtime = 'nodejs'
export const alt = 'Dayane Rocha · Fisioterapeuta Especializada em Neuro'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OpenGraphImage() {
  const symbol = await readFile(path.join(process.cwd(), 'public/brand/logo-simbolo.svg'))
  const symbolUrl = `data:image/svg+xml;base64,${symbol.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 76,
          padding: '80px',
          background: '#1E1E1E',
          color: '#F5F1ED',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <img src={symbolUrl} width="300" height="280" alt="" />
        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '650px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', fontSize: 58, fontWeight: 700, lineHeight: 1.14 }}>
            <span style={{ color: '#E8836A' }}>Fisioterapeuta</span>
            <span style={{ color: '#F5F1ED', marginLeft: 14 }}>Especializada em</span>
            <span style={{ color: '#E8836A', marginLeft: 14 }}>Neuro</span>
          </div>
          <div style={{ display: 'flex', marginTop: 32, color: '#F5F1ED', opacity: 0.75, fontSize: 28 }}>
            {site.nome} · Cursos de fisioterapia
          </div>
        </div>
      </div>
    ),
    { ...size },
  )
}
