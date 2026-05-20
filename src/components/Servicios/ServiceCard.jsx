import { useState } from 'react'
import s from './Servicios.module.css'

export default function ServiceCard({ service, delay }) {
  const [glowPos, setGlowPos] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setGlowPos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  return (
    <div className={`r ${delay ? `d${delay}` : ''} ${s.card}`} onMouseMove={handleMouseMove}>
      <div
        className={s.glow}
        style={{ left: glowPos.x, top: glowPos.y }}
      />
      <div className={s.cardN}>{service.n}</div>
      <span className={s.cardIco}>{service.icon}</span>
      <h3>{service.title}</h3>
      <p>{service.desc}</p>
      <div className={s.tags}>
        {service.tags.map(tag => (
          <span key={tag} className={s.tag}>{tag}</span>
        ))}
      </div>
    </div>
  )
}
