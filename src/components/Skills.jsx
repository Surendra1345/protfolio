import Reveal from './Reveal.jsx'
import { skills } from '../data/profile.js'

export default function Skills() {
  return (
    <section id="skills" className="section alt">
      <div className="container">
        <Reveal>
          <p className="kicker">Toolbox</p>
          <h2 className="section-title">What I work with</h2>
          <div className="skill-rows">
            {skills.map((g) => (
              <div className="skill-row" key={g.group}>
                <h3>{g.group}</h3>
                <div className="tags">
                  {g.items.map((i) => <span className="tag" key={i}>{i}</span>)}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
