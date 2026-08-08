import ChiSiamo from './components/ChiSiamo'
import Contatti from './components/Contatti'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ChiSiamo />
        <Contatti />
        {/* Menu e Galleria arrivano nelle prossime PR */}
      </main>
      <Footer />
    </>
  )
}

export default App
