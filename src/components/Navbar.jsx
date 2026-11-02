import { useState } from 'react'
import Icon from './Icon.jsx'
import { profile, sections } from '../data/profile.js'
import { useActiveSection } from '../hooks/useActiveSection.js'

const ids = sections.map((s) => s.id)

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const active = useActiveSection(ids)

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="#top" className="brand">
          {profile.name}
        </a>

        <nav className={`nav-links ${open ? 'is-open' : ''}`} aria-label="Primary">
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`} className={active === s.id ? 'is-active' : ''} onClick={() => setOpen(false)}>
              {s.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <button className="icon-btn menu-btn" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu" aria-expanded={open}>
            <Icon name={open ? 'close' : 'menu'} />
          </button>
        </div>
      </div>
    </header>
  )
}
