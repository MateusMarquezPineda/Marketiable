import { EMAIL } from '../../data/config'
import s from './Footer.module.css'

const serviceLinks = ['Páginas web', 'Ecommerce', 'Automatizaciones', 'SEO', 'Pauta digital', 'Drone']
const companyLinks = [
  { label: 'Nosotros',  href: '#porque' },
  { label: 'Proceso',   href: '#proceso' },
  { label: 'Portafolio',href: '#portafolio' },
  { label: 'FAQ',       href: '#faq' },
  { label: 'Contacto',  href: `mailto:${EMAIL}` },
]

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className="wrap">
        <div className={s.top}>
          <div className={s.brand}>
            <a href="#" className={s.logo}>Marketiable<em>.</em></a>
            <p>Soluciones digitales para que los negocios vendan más, atiendan mejor y crezcan con tecnología.</p>
          </div>

          <div className={s.cols}>
            <div className={s.col}>
              <h4>Servicios</h4>
              <ul>
                {serviceLinks.map(l => (
                  <li key={l}><a href="#servicios">{l}</a></li>
                ))}
              </ul>
            </div>
            <div className={s.col}>
              <h4>Empresa</h4>
              <ul>
                {companyLinks.map(l => (
                  <li key={l.label}><a href={l.href}>{l.label}</a></li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className={s.wordmark}>Marketiable</div>

        <div className={s.bottom}>
          <p>© {new Date().getFullYear()} Marketiable. Todos los derechos reservados.</p>
          <div className={s.socials}>
            <a href="https://instagram.com/marketiable" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://wa.me/573000000000" target="_blank" rel="noopener noreferrer">WhatsApp</a>
            <a href={`mailto:${EMAIL}`}>Email</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
