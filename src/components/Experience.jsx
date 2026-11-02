import Reveal from './Reveal.jsx'
import { experience as job } from '../data/profile.js'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <Reveal>
          <p className="kicker">Experience</p>
          <h2 className="section-title">Where I've worked</h2>
          <div className="job">
            <div className="job-meta">
              <b>{job.company}</b>
              <span>{job.period}</span>
            </div>
            <div>
              <h3>{job.title}</h3>
              <ul className="dots">
                {job.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
