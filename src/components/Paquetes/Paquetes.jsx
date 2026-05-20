import { useReveal } from '../../hooks/useReveal'
import { packages } from '../../data/packages'
import s from './Paquetes.module.css'

export default function Paquetes() {
  const header = useReveal()

  return (
    <section id="paquetes" className={s.section}>
      <div className="wrap">
        <div ref={header} className="r sh">
          <div className="label">[ 02 ] Paquetes</div>
          <h2>El plan para<br /><em className="accent">tu etapa.</em></h2>
          <p>Cada paquete está diseñado para un momento específico de tu negocio. No vendemos webs — vendemos crecimiento.</p>
        </div>

        <div className={s.grid}>
          {packages.map((pkg, i) => (
            <div key={pkg.id} className={`r ${i > 0 ? `d${i}` : ''} ${s.pkg} ${pkg.hot ? s.hot : ''}`}>
              {pkg.badge && <div className={s.badge}>{pkg.badge}</div>}
              <div className={s.pkgN}>{pkg.n}</div>
              <h3>{pkg.name}</h3>
              <p className={s.ideal}>{pkg.ideal}</p>
              <div className={s.divider} />
              <ul className={s.list}>
                {pkg.features.map(f => <li key={f}>{f}</li>)}
              </ul>
              <div className={s.cta}>
                <a
                  href={pkg.cta.href}
                  className={`btn btn-${pkg.cta.variant} ${s.ctaBtn}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {pkg.cta.label}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
