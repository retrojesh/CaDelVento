import ChiSiamo from './components/ChiSiamo'
import Header from './components/Header'
import Hero from './components/Hero'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ChiSiamo />
        {/* Menu, Galleria e Contatti arrivano nelle prossime PR */}
      </main>
    </>
  )
}

export default App
