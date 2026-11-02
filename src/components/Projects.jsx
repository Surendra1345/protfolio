import Reveal from './Reveal.jsx'
import Icon from './Icon.jsx'
import { visuals } from './Visuals.jsx'
import { projects } from '../data/profile.js'

export default function Projects() {
  return (
    <section id="work" className="section">
      <div className="container">
        <p className="kicker">Selected work</p>
        <h2 className="section-title">Things I've built</h2>

        <div className="cases">
          {projects.map((p, n) => {
            const Visual = visuals[p.visual]
            return (
              <Reveal key={p.id}>
                <article className={`case ${n % 2 ? 'flip' : ''}`}>
                  <div className={`case-visual tint-${p.tint}`}>
                    <Visual />
                  </div>
                  <div className="case-body">
                    <p className="kicker small">{p.kind}</p>
                    <h3>{p.title}</h3>
                    <p className="tagline">{p.tagline}</p>
                    <p className="muted">{p.summary}</p>
                    <ul className="checks">
                      {p.highlights.map((h) => (
                        <li key={h}><Icon name="check" size={16} />{h}</li>
                      ))}
                    </ul>
                    <div className="tags">
                      {p.stack.map((s) => <span className="tag" key={s}>{s}</span>)}
                    </div>
                    <a className="btn btn-sm" href={p.github} target="_blank" rel="noopener noreferrer">
                      <Icon name="github" size={16} /> View code <Icon name="arrow" size={16} />
                    </a>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
