import Nav        from './components/Nav/Nav'
import Hero       from './components/Hero/Hero'
import Ticker     from './components/Ticker/Ticker'
import Servicios  from './components/Servicios/Servicios'
import Paquetes   from './components/Paquetes/Paquetes'
import Porque     from './components/Porque/Porque'
import Proceso    from './components/Proceso/Proceso'
import Portafolio from './components/Portafolio/Portafolio'
import Carta      from './components/Carta/Carta'
import FAQ        from './components/FAQ/FAQ'
import CTA        from './components/CTA/CTA'
import Footer     from './components/Footer/Footer'
import WaFloat    from './components/ui/WaFloat/WaFloat'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <Servicios />
        <Paquetes />
        <Porque />
        <Proceso />
        <Portafolio />
        <Carta />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <WaFloat />
    </>
  )
}
