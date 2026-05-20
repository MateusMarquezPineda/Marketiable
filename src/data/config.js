export const WA_NUMBER = '573000000000'
export const EMAIL = 'hola@marketiable.com'

export const waLink = (text) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`
