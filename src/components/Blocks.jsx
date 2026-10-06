import Rich, { Tex } from './Rich.jsx'
import { figures } from './figures.jsx'
import { widgets } from './widgets.jsx'

const CALLOUT_LABEL = { def: 'Definição', dica: 'Dica', prova: 'Cai na prova', atencao: 'Atenção' }

const renderers = {
  p: (b) => <p><Rich text={b.text} /></p>,
  ul: (b) => <ul>{b.items.map((x, i) => <li key={i}><Rich text={x} /></li>)}</ul>,
  ol: (b) => <ol>{b.items.map((x, i) => <li key={i}><Rich text={x} /></li>)}</ol>,
  formula: (b) => (
    <figure className="formula">
      <Tex tex={b.tex} block />
      {b.caption && <figcaption><Rich text={b.caption} /></figcaption>}
    </figure>
  ),
  callout: (b) => (
    <aside className={`callout callout-${b.kind}`}>
      <div className="callout-title">
        <span className="tag">{CALLOUT_LABEL[b.kind]}</span> {b.title}
      </div>
      <p><Rich text={b.text} /></p>
    </aside>
  ),
  cards: (b) => (
    <div className="cards">
      {b.items.map((c, i) => (
        <div className="card" key={i}>
          <h4>{c.title}</h4>
          <p><Rich text={c.text} /></p>
        </div>
      ))}
    </div>
  ),
  steps: (b) => (
    <ol className="steps">
      {b.items.map((s, i) => (
        <li key={i}>
          <span className="step-n">{i + 1}</span>
          <div><strong>{s.title}</strong><p><Rich text={s.text} /></p></div>
        </li>
      ))}
    </ol>
  ),
  table: (b) => (
    <div className="table-wrap">
      <table>
        <thead><tr>{b.head.map((h, i) => <th key={i}>{h}</th>)}</tr></thead>
        <tbody>
          {b.rows.map((r, i) => (
            <tr key={i}>{r.map((c, j) => <td key={j}><Rich text={c} /></td>)}</tr>
          ))}
        </tbody>
      </table>
    </div>
  ),
  figure: (b) => {
    const Fig = figures[b.name]
    return (
      <figure className="figure">
        <Fig />
        {b.caption && <figcaption>{b.caption}</figcaption>}
      </figure>
    )
  },
  widget: (b) => {
    const W = widgets[b.name]
    return <W />
  },
}

export default function Blocks({ blocks }) {
  return blocks.map((b, i) => {
    const render = renderers[b.t]
    return <div className="block" key={i}>{render(b)}</div>
  })
}
