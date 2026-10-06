import { useState } from 'react'
import Rich from './Rich.jsx'

export default function Quiz({ items }) {
  const [open, setOpen] = useState({})
  return (
    <section className="quiz">
      <h3>Teste-se</h3>
      <p className="muted">Tente responder de cabeça antes de abrir a resposta.</p>
      {items.map((it, i) => (
        <div className="qa" key={i}>
          <div className="q"><span className="qn">{i + 1}</span><Rich text={it.q} /></div>
          <button className="ghost" onClick={() => setOpen({ ...open, [i]: !open[i] })}>
            {open[i] ? 'Esconder resposta' : 'Ver resposta'}
          </button>
          {open[i] && <div className="a"><Rich text={it.a} /></div>}
        </div>
      ))}
    </section>
  )
}
