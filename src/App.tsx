import ChiSiamo from './components/ChiSiamo'
import Contatti from './components/Contatti'
import Galleria from './components/Galleria'
import Header from './components/Header'
import Hero from './components/Hero'
import Menu from './components/Menu'

function App() {
  return (
    <>
      {/*
        Primo elemento raggiunto col Tab: permette a chi naviga da tastiera o
        con uno screen reader di scavalcare la navigazione. Invisibile finché
        non riceve il focus.
      */}
      <a
        href="#contenuto"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-100 focus:rounded-full focus:bg-vino focus:px-6 focus:py-3 focus:text-sm focus:font-semibold focus:text-crema"
      >
        Salta al contenuto
      </a>

      <Header />

      <main id="contenuto">
        <Hero />
        <ChiSiamo />
        <Menu />
        <Galleria />
        <Contatti />
      </main>
    </>
  )
}

export default App
