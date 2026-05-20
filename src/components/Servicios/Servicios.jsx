import { useReveal } from '../../hooks/useReveal'
import { services } from '../../data/services'
import ServiceCard from './ServiceCard'
import s from './Servicios.module.css'

export default function Servicios() {
  const header = useReveal()

  return (
    <section id="servicios" className={s.section}>
      <div className="wrap">
        <div ref={header} className="r sh">
          <div className="label">[ 01 ] Servicios</div>
          <h2>Todo lo que tu negocio<br />necesita para <em className="accent">crecer.</em></h2>
          <p>Seis líneas de servicio para que encuentres exactamente lo que necesitas hoy, y lo que vas a necesitar mañana.</p>
        </div>

        <div className={s.grid}>
          {services.map((service, i) => (
            <ServiceCard key={service.n} service={service} delay={i % 3} />
          ))}
        </div>
      </div>
    </section>
  )
}
