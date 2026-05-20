import { useReveal } from '../../hooks/useReveal'
import s from './Proceso.module.css'

const steps = [
  { n: '// 01', title: 'Diagnóstico',       desc: 'Conversamos por WhatsApp o videollamada. Entendemos tu negocio, tus objetivos y qué necesitas realmente.' },
  { n: '// 02', title: 'Propuesta',         desc: 'En máximo 48 horas tienes una propuesta clara: alcance, entregables, tiempo y valor. Sin letra pequeña.' },
  { n: '// 03', title: 'Producción',        desc: 'Diseño, desarrollo y configuración. Te mantenemos al tanto con actualizaciones reales, no promesas.' },
  { n: '// 04', title: 'Revisión y ajustes',desc: 'Tienes rondas de revisión incluidas. Ajustamos hasta que quede justo como lo necesitas.' },
  { n: '// 05', title: 'Entrega y soporte', desc: 'Lanzamos, entregamos accesos y te explicamos todo. El proyecto no termina en el lanzamiento.' },
]

export default function Proceso() {
  const header = useReveal()

  return (
    <section id="proceso" className={s.section}>
      <div className="wrap">
        <div ref={header} className="r sh">
          <div className="label">[ 04 ] Proceso</div>
          <h2>Del brief al<br /><em className="accent">resultado.</em></h2>
          <p>Cinco pasos claros, sin sorpresas. Sabemos que tu tiempo vale.</p>
        </div>

        <div className={s.steps}>
          {steps.map(step => (
            <div key={step.n} className={`r ${s.step}`}>
              <div className={s.stepN}>{step.n}</div>
              <div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
