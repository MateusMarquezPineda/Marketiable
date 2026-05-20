import { useReveal } from '../../hooks/useReveal'
import { faqs } from '../../data/faq'
import s from './FAQ.module.css'

function FAQItem({ faq }) {
  const ref = useReveal()
  return (
    <details ref={ref} className={`r ${s.item}`}>
      <summary className={s.summary}>
        {faq.q}
        <svg className={s.ico} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      </summary>
      <div className={s.body}>{faq.a}</div>
    </details>
  )
}

export default function FAQ() {
  const header = useReveal()

  return (
    <section id="faq" className={s.section}>
      <div className="wrap">
        <div ref={header} className="r sh">
          <div className="label">[ 07 ] Preguntas frecuentes</div>
          <h2>Tus dudas,<br /><em className="accent">resueltas.</em></h2>
        </div>

        <div className={s.list}>
          {faqs.map(faq => <FAQItem key={faq.q} faq={faq} />)}
        </div>
      </div>
    </section>
  )
}
