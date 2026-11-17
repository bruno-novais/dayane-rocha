type TexturaFundoProps = { variante?: 'hero' | 'sobre' }

export function TexturaFundo({ variante }: TexturaFundoProps) {
  if (!variante) {
    return <div className="texture-grain" aria-hidden="true" />
  }

  return (
    <svg
      className={`texture-contours texture-contours--${variante}`}
      viewBox="0 0 1200 700"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <g className="texture-contour-lines">
        <path d="M-88 195C58 102 168 92 270 143c89 45 102 129 210 125 86-3 115-69 201-68 95 1 114 80 213 69 83-10 142-91 294-111" />
        <path d="M-80 260C55 170 170 155 266 208c86 48 113 126 216 127 91 1 123-62 208-55 102 8 119 89 215 77 83-11 147-85 288-95" />
        <path d="M-74 326C54 242 169 220 258 273c83 49 117 123 218 132 92 8 131-48 214-36 101 14 122 96 215 87 85-8 152-72 283-75" />
        <path d="M-66 394C54 316 165 287 250 339c80 49 120 119 219 136 91 16 137-34 217-16 98 22 124 103 214 99 88-4 158-60 280-53" />
        <path d="M-58 462C54 392 158 354 242 405c78 48 124 116 220 140 90 22 141-20 219 5 95 31 127 108 214 110 90 2 162-45 277-31" />
        <path d="M-50 530C53 469 151 422 234 471c76 45 128 113 221 144 87 29 144-7 219 26 92 40 130 112 213 120 92 9 164-28 274-8" />
      </g>
      <g className="texture-contour-nodes">
        <circle cx="270" cy="143" r="3" />
        <circle cx="677" cy="252" r="3" />
        <circle cx="1103" cy="339" r="3" />
      </g>
    </svg>
  )
}
