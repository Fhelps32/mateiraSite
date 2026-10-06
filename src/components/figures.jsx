// Figuras SVG simples, redesenhadas a partir dos esquemas do caderno.
const ink = 'var(--ink)'
const red = 'var(--accent)'
const blue = 'var(--blue)'
const green = 'var(--green)'

function Arrow({ id, color }) {
  return (
    <marker id={id} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0 0 L10 5 L0 10 z" fill={color} />
    </marker>
  )
}

function Axis() {
  const ticks = [-4, -3, -2, -1, 0, 1, 2, 3, 4]
  return (
    <svg viewBox="0 0 480 90" role="img" aria-label="Eixo x com origem no zero">
      <defs><Arrow id="a-ax" color={ink} /></defs>
      <line x1="20" y1="45" x2="455" y2="45" stroke={ink} strokeWidth="2" markerEnd="url(#a-ax)" />
      {ticks.map((t) => (
        <g key={t}>
          <line x1={240 + t * 48} y1="38" x2={240 + t * 48} y2="52" stroke={ink} strokeWidth="1.5" />
          {t !== 0 && <text x={240 + t * 48} y="70" textAnchor="middle" fontSize="12" fill="var(--muted)">{t > 0 ? `+${t}` : t}</text>}
        </g>
      ))}
      <circle cx="240" cy="45" r="5" fill={red} />
      <text x="240" y="26" textAnchor="middle" fontSize="13" fontWeight="700" fill={red}>0 (origem)</text>
      <text x="470" y="30" textAnchor="end" fontSize="13" fontStyle="italic" fill={ink}>x (m)</text>
    </svg>
  )
}

function Route() {
  return (
    <svg viewBox="0 0 480 130" role="img" aria-label="Eixo com SP, VR (origem) e RJ">
      <defs><Arrow id="a-r" color={red} /><Arrow id="a-g" color={green} /></defs>
      <line x1="30" y1="60" x2="450" y2="60" stroke={ink} strokeWidth="2" />
      <text x="30" y="40" fontSize="22" fontWeight="700" fill={red}>−</text>
      <text x="448" y="40" textAnchor="end" fontSize="22" fontWeight="700" fill={green}>+</text>
      {[['SP', 70], ['VR', 240], ['RJ', 410]].map(([n, x]) => (
        <g key={n}>
          <circle cx={x} cy="60" r="6" fill={n === 'VR' ? red : ink} />
          <text x={x} y="88" textAnchor="middle" fontSize="15" fontWeight="700" fill={ink}>{n}</text>
        </g>
      ))}
      <text x="240" y="108" textAnchor="middle" fontSize="12" fill="var(--muted)">VR = origem</text>
      <line x1="248" y1="42" x2="400" y2="42" stroke={green} strokeWidth="3" markerEnd="url(#a-g)" />
      <text x="324" y="34" textAnchor="middle" fontSize="12" fill={green}>Δx &gt; 0</text>
      <line x1="232" y1="42" x2="80" y2="42" stroke={red} strokeWidth="3" markerEnd="url(#a-r)" strokeDasharray="6 4" />
      <text x="156" y="34" textAnchor="middle" fontSize="12" fill={red}>Δx &lt; 0</text>
    </svg>
  )
}

function Axes3D() {
  return (
    <svg viewBox="0 0 300 220" role="img" aria-label="Versores i, j e k nos eixos x, y e z">
      <defs>
        <Arrow id="a-i" color={red} /><Arrow id="a-j" color={green} /><Arrow id="a-k" color={blue} />
      </defs>
      <line x1="90" y1="160" x2="250" y2="160" stroke={red} strokeWidth="3" markerEnd="url(#a-i)" />
      <line x1="90" y1="160" x2="150" y2="105" stroke={green} strokeWidth="3" markerEnd="url(#a-j)" />
      <line x1="90" y1="160" x2="90" y2="30" stroke={blue} strokeWidth="3" markerEnd="url(#a-k)" />
      <text x="255" y="178" fontSize="16" fontStyle="italic" fill={red}>î (x)</text>
      <text x="152" y="98" fontSize="16" fontStyle="italic" fill={green}>ĵ (y)</text>
      <text x="100" y="40" fontSize="16" fontStyle="italic" fill={blue}>k̂ (z)</text>
      <circle cx="90" cy="160" r="4" fill={ink} />
      <text x="62" y="178" fontSize="12" fill="var(--muted)">(0,0,0)</text>
    </svg>
  )
}

function VectorSum() {
  return (
    <svg viewBox="0 0 320 200" role="img" aria-label="Soma de vetores pela regra do paralelogramo">
      <defs>
        <Arrow id="v-a" color={blue} /><Arrow id="v-b" color={green} /><Arrow id="v-s" color={red} />
      </defs>
      <polygon points="40,160 150,50 280,80 170,190" fill="none" stroke="var(--muted)" strokeDasharray="5 4" />
      <line x1="40" y1="160" x2="148" y2="52" stroke={blue} strokeWidth="3" markerEnd="url(#v-a)" />
      <line x1="40" y1="160" x2="168" y2="188" stroke={green} strokeWidth="3" markerEnd="url(#v-b)" />
      <line x1="40" y1="160" x2="278" y2="82" stroke={red} strokeWidth="3.5" markerEnd="url(#v-s)" />
      <text x="78" y="96" fontSize="16" fontWeight="700" fill={blue}>a⃗</text>
      <text x="96" y="192" fontSize="16" fontWeight="700" fill={green}>b⃗</text>
      <text x="190" y="108" fontSize="16" fontWeight="700" fill={red}>a⃗ + b⃗</text>
    </svg>
  )
}

export const figures = { axis: Axis, route: Route, axes3d: Axes3D, vectorsum: VectorSum }
