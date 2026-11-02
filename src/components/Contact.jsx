import Icon from './Icon.jsx'
import { profile } from '../data/profile.js'

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="cta">
          <h2>Let's build something together.</h2>
          <p>Have a project or an opportunity in mind? Email is the fastest way to reach me.</p>
          <div className="btn-row center">
            <a className="btn btn-light" href={`mailto:${profile.email}`}><Icon name="mail" /> {profile.email}</a>
            <a className="btn btn-ghost" href={`tel:${profile.phone.replace(/\s/g, '')}`}><Icon name="phone" /> {profile.phone}</a>
          </div>
          <div className="btn-row center">
            <a className="btn btn-ghost" href={profile.linkedin} target="_blank" rel="noopener noreferrer"><Icon name="linkedin" /> LinkedIn</a>
            <a className="btn btn-ghost" href={profile.github} target="_blank" rel="noopener noreferrer"><Icon name="github" /> GitHub</a>
            <a className="btn btn-ghost" href={profile.resume} download><Icon name="download" /> Resume</a>
          </div>
        </div>
      </div>
    </section>
  )
}
