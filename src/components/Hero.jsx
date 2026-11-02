import Icon from './Icon.jsx'
import { profile, highlights } from '../data/profile.js'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero-grid">
        <div>
          <div className="intro">
            <div className="portrait"><img src={profile.photo} alt={profile.name} /></div>
            <div>
              <h1>{profile.name}</h1>
              <p className="role">{profile.role}</p>
            </div>
          </div>
          <p className="lead">
            I build React and FastAPI applications and LLM agents that solve real business problems
            across industries.
          </p>
          <div className="btn-row">
            <a className="btn btn-primary" href="#work">View my work <Icon name="arrowDown" /></a>
            <a className="btn" href={profile.resume} download="Surendra_Reddy_Resume.pdf"><Icon name="download" /> Resume</a>
          </div>
          <div className="social">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Icon name="github" size={20} /></a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Icon name="linkedin" size={20} /></a>
            <a href={`mailto:${profile.email}`} aria-label="Email"><Icon name="mail" size={20} /></a>
          </div>
        </div>

      </div>

      <div className="container metrics">
        {highlights.map((h) => (
          <div key={h.label}><b>{h.value}</b><span>{h.label}</span></div>
        ))}
      </div>
    </section>
  )
}
