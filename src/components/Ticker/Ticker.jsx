import s from './Ticker.module.css'

const items = [
  'Páginas web', 'Ecommerce', 'Chatbots WhatsApp', 'SEO y Analítica',
  'Meta Ads', 'Google Ads', 'Automatizaciones', 'Drone Cúcuta',
  'Ventas online', 'GA4 & Clarity',
]

export default function Ticker() {
  const doubled = [...items, ...items]

  return (
    <div className={s.wrap} aria-hidden="true">
      <div className={s.track}>
        {doubled.map((item, i) => (
          <span key={i} className={s.tick}>
            <span className={s.dot} />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
