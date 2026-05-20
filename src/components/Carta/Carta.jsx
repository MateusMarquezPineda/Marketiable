import { useReveal } from '../../hooks/useReveal'
import { cartaItems } from '../../data/carta'
import s from './Carta.module.css'

export default function Carta() {
  const header = useReveal()
  const pills  = useReveal()

  return (
    <section id="carta" className={s.section}>
      <div className="wrap">
        <div ref={header} className="r sh">
          <div className="label">[ 06 ] À la carte</div>
          <h2>¿Solo necesitas<br /><em className="accent">un servicio?</em></h2>
          <p>Sin paquetes, sin compromisos. Elige lo que necesitas y cotizamos.</p>
        </div>

        <div ref={pills} className={`r ${s.pills}`}>
          {cartaItems.map(item => (
            <a
              key={item.label}
              href={item.href}
              className={s.pill}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={s.pillIcon}>{item.icon}</span>
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
