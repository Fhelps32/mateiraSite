import { useState } from 'react'
import { Tex } from './Rich.jsx'

const Line = ({ tex }) => <div className="line"><Tex tex={tex} /></div>
const num = (v) => (v === '' || v === '-' ? 0 : Number(v))
const fmt = (n) => String(Math.round(n * 1000) / 1000).replace('.', ',')

function Field({ label, value, onChange }) {
  return (
    <label className="field">
      <span>{label}</span>
      <input type="number" step="any" inputMode="decimal" value={value} onChange={(e) => onChange(e.target.value)} />
    </label>
  )
}

function Displacement() {
  const [x1, setX1] = useState('5')
  const [x2, setX2] = useState('2')
  const [t1, setT1] = useState('0')
  const [t2, setT2] = useState('3')
  const dx = num(x2) - num(x1)
  const dt = num(t2) - num(t1)
  return (
    <div className="widget">
      <h4>Calculadora: deslocamento e velocidade média</h4>
      <div className="fields">
        <Field label="x₁ (m)" value={x1} onChange={setX1} />
        <Field label="x₂ (m)" value={x2} onChange={setX2} />
        <Field label="t₁ (s)" value={t1} onChange={setT1} />
        <Field label="t₂ (s)" value={t2} onChange={setT2} />
      </div>
      <div className="result">
        <Line tex={`\\Delta x = ${fmt(num(x2))} - (${fmt(num(x1))}) = ${fmt(dx)}\\ \\text{m}`} />
        {dt === 0
          ? <p className="muted">Intervalo de tempo igual a zero: a velocidade média não está definida.</p>
          : <Line tex={`V_m = \\dfrac{${fmt(dx)}}{${fmt(dt)}} = ${fmt(dx / dt)}\\ \\text{m/s}`} />}
        <p className="muted">
          {dx > 0 ? 'Movimento no sentido positivo.' : dx < 0 ? 'Movimento no sentido negativo.' : 'Sem deslocamento.'}
        </p>
      </div>
    </div>
  )
}

function VectorSum() {
  const [a, setA] = useState(['2', '1', '0'])
  const [b, setB] = useState(['1', '3', '4'])
  const A = a.map(num)
  const B = b.map(num)
  const S = A.map((v, i) => v + B[i])
  const mod = Math.sqrt(S.reduce((s, v) => s + v * v, 0))
  const set = (arr, setter, i) => (v) => setter(arr.map((x, k) => (k === i ? v : x)))
  return (
    <div className="widget">
      <h4>Calculadora: soma de vetores</h4>
      <div className="fields">
        {['a', 'b'].map((n) => (
          <div className="vrow" key={n}>
            <Tex tex={`\\vec{${n}}`} />
            {[0, 1, 2].map((i) => (
              <Field
                key={i}
                label={['x', 'y', 'z'][i]}
                value={(n === 'a' ? a : b)[i]}
                onChange={n === 'a' ? set(a, setA, i) : set(b, setB, i)}
              />
            ))}
          </div>
        ))}
      </div>
      <div className="result">
        <Line tex={`\\vec{a}+\\vec{b} = (${S.map(fmt).join(',\\ ')}) = ${fmt(S[0])}\\hat{i} + ${fmt(S[1])}\\hat{j} + ${fmt(S[2])}\\hat{k}`} />
        <Line tex={`|\\vec{a}+\\vec{b}| = \\sqrt{${S.map((v) => fmt(v * v)).join(' + ')}} \\approx ${fmt(mod)}`} />
      </div>
    </div>
  )
}

export const widgets = { displacement: Displacement, vectorsum: VectorSum }
