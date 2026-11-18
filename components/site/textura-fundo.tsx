type TexturaFundoProps = { variante?: 'hero' | 'sobre' }

export function TexturaFundo({ variante }: TexturaFundoProps) {
  if (variante) return null
  return <div className="texture-grain" aria-hidden="true" />
}
