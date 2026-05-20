import { useReveal } from '../../hooks/useReveal'
import s from './Porque.module.css'

const reasons = [
  { n: '01', title: 'Resultados medibles', desc: 'Todo lo que hacemos se puede medir. Conversiones, tráfico, ventas. Nada de humo ni métricas de vanidad.' },
  { n: '02', title: 'Stack completo', desc: 'Web, ecommerce, automatización, SEO y pauta bajo un mismo equipo. Sin coordinar proveedores distintos.' },
  { n: '03', title: 'Tecnología accesible', desc: 'Las herramientas de las grandes marcas, adaptadas a tu tamaño y presupuesto. Sin tecnicismos innecesarios.' },
  { n: '04', title: 'Presencia en Colombia', desc: 'Remotos en todo el país y Latam. Producción con drone en Cúcuta, Bogotá y otras ciudades según disponibilidad.' },
]

export default function Porque() {
  const header = useReveal()

  return (
    <section id="porque" className={s.section}>
      <div className="wrap">
        <div ref={header} className="r sh">
          <div className="label">[ 03 ] Por qué Marketiable</div>
          <h2>No vendemos webs.<br />Vendemos <em className="accent">crecimiento.</em></h2>
        </div>

        <div className={s.grid}>
          {reasons.map((r, i) => (
            <div key={r.n} className={`r ${i % 2 === 1 ? 'd1' : ''} ${s.why}`}>
              <div className={s.whyN}>{r.n}</div>
              <h3>{r.title}</h3>
              <p>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
