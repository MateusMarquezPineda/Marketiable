import { useState, useEffect } from 'react'
import s from './Nav.module.css'
import { waLink } from '../../data/config'

const navLinks = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#paquetes',  label: 'Paquetes' },
  { href: '#portafolio',label: 'Portafolio' },
  { href: '#faq',       label: 'FAQ' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActiveId(e.target.id) }),
      { rootMargin: '-50% 0px -50% 0px' }
    )
    sections.forEach(sec => obs.observe(sec))
    return () => obs.disconnect()
  }, [])

  const close = () => setOpen(false)

  return (
    <>
      <nav className={s.nav}>
        <div className={s.inner}>
          <a href="#" className={s.logo}>Marketiable<em>.</em></a>

          <ul className={s.links}>
            {navLinks.map(l => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`${s.link} ${activeId === l.href.slice(1) ? s.active : ''}`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className={s.right}>
            <a href="#paquetes" className="btn btn-ghost">Ver paquetes</a>
            <a
              href={waLink('Hola, me interesa conocer más sobre Marketiable')}
              className="btn btn-lime"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
            <button
              className={`${s.hamburger} ${open ? s.open : ''}`}
              onClick={() => setOpen(o => !o)}
              aria-label="Menú"
              aria-expanded={open}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>

      <div className={`${s.drawer} ${open ? s.drawerOpen : ''}`}>
        {navLinks.map(l => (
          <a key={l.href} href={l.href} onClick={close}>{l.label}</a>
        ))}
        <a
          href={waLink('Hola, me interesa conocer más sobre Marketiable')}
          target="_blank"
          rel="noopener noreferrer"
          className={s.drawerWa}
          onClick={close}
        >
          WhatsApp →
        </a>
      </div>
    </>
  )
}
