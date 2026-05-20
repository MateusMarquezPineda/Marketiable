import { useReveal } from '../../hooks/useReveal'
import { waLink } from '../../data/config'
import s from './Portafolio.module.css'

const projects = [
  {
    bg: 'linear-gradient(135deg,var(--bg-3),rgba(107,91,255,.18))',
    icon: '🌐',
    tag: 'Web corporativa',
    title: 'Próximamente',
  },
  {
    bg: 'linear-gradient(135deg,var(--bg-3),rgba(200,255,61,.1))',
    icon: '🛒',
    tag: 'Ecommerce',
    title: 'Próximamente',
  },
]

export default function Portafolio() {
  const header = useReveal()
  const grid   = useReveal()
  const foot   = useReveal()

  return (
    <section id="portafolio" className={s.section}>
      <div className="wrap">
        <div ref={header} className="r sh">
          <div className="label">[ 05 ] Portafolio</div>
          <h2>Proyectos que<br /><em className="accent">hablan solos.</em></h2>
          <p>Casos reales, resultados reales. Más proyectos próximamente.</p>
        </div>

        <div ref={grid} className={`r ${s.grid}`}>
          {projects.map(p => (
            <div key={p.tag} className={s.card}>
              <div className={s.cardBg} style={{ background: p.bg }} />
              <div className={s.cardPh}>{p.icon}</div>
              <div className={s.info}>
                <div className={s.tag}>{p.tag}</div>
                <h3>{p.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div ref={foot} className={`r ${s.foot}`}>
          <a
            href={waLink('Hola, quiero ver más del portafolio de Marketiable')}
            className="btn btn-ghost"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver portafolio completo
          </a>
        </div>
      </div>
    </section>
  )
}
