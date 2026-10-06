import { useEffect, useState } from 'react'
import { topics } from './content/topics.js'
import Blocks from './components/Blocks.jsx'
import Quiz from './components/Quiz.jsx'
import Rich from './components/Rich.jsx'

const STORE = 'fisica-estudados'

const load = () => {
  try { return JSON.parse(localStorage.getItem(STORE)) || [] } catch { return [] }
}
const save = (v) => {
  try { localStorage.setItem(STORE, JSON.stringify(v)) } catch { /* sem armazenamento */ }
}
const fromHash = () => {
  const i = topics.findIndex((t) => t.id === window.location.hash.slice(1))
  return i < 0 ? 0 : i
}

export default function App() {
  const [index, setIndex] = useState(fromHash)
  const [done, setDone] = useState(load)
  const [menu, setMenu] = useState(false)
  const topic = topics[index]

  useEffect(() => {
    const onHash = () => setIndex(fromHash())
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = `${topic.title} · Física Experimental`
  }, [topic])

  const go = (i) => {
    window.location.hash = topics[i].id
    setMenu(false)
  }
  const toggleDone = () => {
    const next = done.includes(topic.id) ? done.filter((d) => d !== topic.id) : [...done, topic.id]
    setDone(next)
    save(next)
  }
  const isDone = done.includes(topic.id)
  const pct = Math.round((done.length / topics.length) * 100)

  return (
    <div className="layout">
      <header className="topbar">
        <button className="ghost" onClick={() => setMenu(!menu)} aria-expanded={menu} aria-controls="nav">
          {menu ? 'Fechar' : 'Menu'}
        </button>
        <strong>Física Experimental</strong>
      </header>

      <nav id="nav" className={`sidebar${menu ? ' open' : ''}`} aria-label="Tópicos">
        <div className="brand">
          <h1>Física Experimental</h1>
          <p className="muted">Guia de estudo para a prova</p>
        </div>
        <div className="progress" aria-label={`${pct}% estudado`}>
          <div className="bar"><div style={{ width: `${pct}%` }} /></div>
          <span>{done.length}/{topics.length} estudados</span>
        </div>
        <ol>
          {topics.map((t, i) => (
            <li key={t.id}>
              <a
                href={`#${t.id}`}
                className={i === index ? 'active' : ''}
                aria-current={i === index ? 'page' : undefined}
                onClick={(e) => { e.preventDefault(); go(i) }}
              >
                <span className={`dot${done.includes(t.id) ? ' on' : ''}`}>{done.includes(t.id) ? '✓' : i + 1}</span>
                {t.short}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <main className="content">
        <article>
          <p className="kicker">Tópico {index + 1} de {topics.length}</p>
          <h2>{topic.title}</h2>
          <p className="lead"><Rich text={topic.summary} /></p>
          <Blocks blocks={topic.blocks} />
          <Quiz key={topic.id} items={topic.quiz} />
          <button className={`primary${isDone ? ' is-done' : ''}`} onClick={toggleDone}>
            {isDone ? '✓ Estudado (clique para desmarcar)' : 'Marcar como estudado'}
          </button>
        </article>
        <div className="pager">
          <button className="ghost" disabled={index === 0} onClick={() => go(index - 1)}>
            ← {index > 0 ? topics[index - 1].short : ''}
          </button>
          <button className="ghost" disabled={index === topics.length - 1} onClick={() => go(index + 1)}>
            {index < topics.length - 1 ? topics[index + 1].short : ''} →
          </button>
        </div>
      </main>
    </div>
  )
}
