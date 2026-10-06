import katex from 'katex'

export function Tex({ tex, block = false }) {
  const html = katex.renderToString(tex, { displayMode: block, throwOnError: false })
  const Tag = block ? 'div' : 'span'
  return <Tag className={block ? 'tex-block' : undefined} dangerouslySetInnerHTML={{ __html: html }} />
}

// Texto com $fórmula$, **negrito** e *itálico*.
export default function Rich({ text }) {
  return text.split(/(\$[^$]+\$)/g).map((part, i) => {
    if (part.startsWith('$') && part.endsWith('$') && part.length > 1) {
      return <Tex key={i} tex={part.slice(1, -1)} />
    }
    return part.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g).map((s, j) => {
      if (s.startsWith('**')) return <strong key={`${i}-${j}`}>{s.slice(2, -2)}</strong>
      if (s.startsWith('*') && s.length > 1) return <em key={`${i}-${j}`}>{s.slice(1, -1)}</em>
      return s
    })
  })
}
