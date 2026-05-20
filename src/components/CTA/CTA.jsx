import { useReveal } from '../../hooks/useReveal'
import WhatsAppIcon from '../../assets/icons/WhatsAppIcon'
import { waLink, EMAIL } from '../../data/config'
import s from './CTA.module.css'

export default function CTA() {
  const label   = useReveal()
  const heading = useReveal()
  const sub     = useReveal()
  const actions = useReveal()

  return (
    <section id="cta" className={s.section}>
      <div className={`blob ${s.blobV}`} />
      <div className={`blob ${s.blobL}`} />
      <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
        <div ref={label} className={`r label ${s.label}`}>[ ¿Listo? ]</div>
        <h2 ref={heading} className={`r ${s.heading}`}>
          Tu negocio merece<br /><em className="accent">crecer con tecnología.</em>
        </h2>
        <p ref={sub} className={`r ${s.sub}`}>
          Escríbenos hoy. En menos de 24 horas tienes una respuesta con orientación real, sin compromiso.
        </p>
        <div ref={actions} className={`r ${s.actions}`}>
          <a
            href={waLink('Hola, quiero hacer crecer mi negocio con Marketiable')}
            className="btn btn-wa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon /> Hablar ahora por WhatsApp
          </a>
          <a href={`mailto:${EMAIL}`} className="btn btn-ghost">{EMAIL}</a>
        </div>
      </div>
    </section>
  )
}
