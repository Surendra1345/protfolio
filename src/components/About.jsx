import Reveal from './Reveal.jsx'
import { profile, background } from '../data/profile.js'

export default function About() {
  return (
    <section id="about" className="section alt">
      <div className="container">
        <Reveal>
          <div className="about">
            <div>
              <p className="kicker">About</p>
              <h2 className="section-title">A bit about me</h2>
              <div className="avatar">
                {profile.photo ? <img src={profile.photo} alt={profile.name} /> : profile.initials}
              </div>
              <p className="muted">{profile.about}</p>
            </div>
            <ul className="facts">
              {background.map((b) => (
                <li key={b.title}>
                  <small>{b.label}</small>
                  <b>{b.title}</b>
                  <span>{b.meta}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
