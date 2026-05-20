import { useReveal } from '../../hooks/useReveal'
import WhatsAppIcon from '../../assets/icons/WhatsAppIcon'
import { waLink } from '../../data/config'
import s from './Hero.module.css'

const stackItems = [
  { icon: '🌐', label: 'Páginas web & Ecommerce' },
  { icon: '🤖', label: 'Chatbots & Automatización' },
  { icon: '📈', label: 'SEO & Analítica' },
  { icon: '🎯', label: 'Meta Ads & Google Ads' },
  { icon: '🚁', label: 'Producción con Drone' },
]

export default function Hero() {
  const badge    = useReveal()
  const heading  = useReveal()
  const sub      = useReveal()
  const actions  = useReveal()
  const stats    = useReveal()
  const card     = useReveal()

  return (
    <section id="hero" className={s.section}>
      <div className={`blob ${s.blob1}`} />
      <div className={`blob ${s.blob2}`} />

      <div className={s.grid}>
        <div>
          <div ref={badge} className={`r ${s.badge}`}>
            <div className={s.badgeDot} />
            <span>Agencia digital · Colombia</span>
          </div>

          <h1 ref={heading} className={`r d1 ${s.h1}`}>
            Tu negocio<br />merece<br />
            <em className="accent">vender más.</em>
          </h1>

          <p ref={sub} className={`r d2 ${s.sub}`}>
            Creamos soluciones digitales para que tu negocio venda más, atienda mejor y crezca con tecnología. Páginas web, ecommerce, chatbots, SEO y pauta.
          </p>

          <div ref={actions} className={`r d3 ${s.actions}`}>
            <a
              href={waLink('Hola, quiero información sobre los servicios de Marketiable')}
              className="btn btn-wa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon /> Hablar por WhatsApp
            </a>
            <a href="#servicios" className="btn btn-ghost">Ver servicios</a>
          </div>

          <div ref={stats} className={`r ${s.statsRow}`}>
            <div className={s.stat}>
              <strong>6</strong><span>Líneas de servicio</span>
            </div>
            <div className={s.statDiv} />
            <div className={s.stat}>
              <strong>100%</strong><span>Enfocados en resultados</span>
            </div>
            <div className={s.statDiv} />
            <div className={s.stat}>
              <strong>CO</strong><span>Colombia y Latam</span>
            </div>
          </div>
        </div>

        <div ref={card} className={`r ${s.stackCard}`}>
          <span className={`label ${s.stackLabel}`}>// Stack</span>
          {stackItems.map(item => (
            <div key={item.label} className={s.stackRow}>
              <div className={s.stackIcon}>{item.icon}</div>
              <span className={s.stackText}>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
