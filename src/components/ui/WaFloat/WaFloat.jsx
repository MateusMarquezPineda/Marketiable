import { waLink } from '../../../data/config'
import WhatsAppIcon from '../../../assets/icons/WhatsAppIcon'
import s from './WaFloat.module.css'

export default function WaFloat() {
  return (
    <a
      href={waLink('Hola, me interesa Marketiable')}
      className={s.btn}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
    >
      <WhatsAppIcon size={26} />
    </a>
  )
}
