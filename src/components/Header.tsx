import { useEffect, useRef, useState } from 'react'

const voci = [
  { href: '#chi-siamo', testo: 'Chi siamo' },
  { href: '#menu', testo: 'Menu' },
  { href: '#galleria', testo: 'Galleria' },
  { href: '#contatti', testo: 'Contatti' },
]

function Header() {
  const [apertoMobile, setApertoMobile] = useState(false)
  const [staccato, setStaccato] = useState(false)
  const [voceAttiva, setVoceAttiva] = useState('')
  const pulsanteMenu = useRef<HTMLButtonElement>(null)

  // Sopra l'hero l'header è trasparente; appena si scorre diventa opaco,
  // altrimenti il testo bianco finisce sul crema e sparisce. Nello stesso
  // giro si decide anche quale voce di navigazione accendere: la sezione
  // che occupa la riga a un terzo dello schermo, cioè quella in lettura.
  useEffect(() => {
    const alloScroll = () => {
      const scorso = window.scrollY > 24
      setStaccato(scorso)

      if (!scorso) {
        // Sull'hero non si sta leggendo nessuna sezione: nessuna voce accesa.
        setVoceAttiva('')
        return
      }

      const riga = window.innerHeight / 3
      const inLettura = voci.findLast((voce) => {
        const sezione = document.querySelector(voce.href)
        return sezione ? sezione.getBoundingClientRect().top <= riga : false
      })
      setVoceAttiva(inLettura ? inLettura.href : '')
    }
    alloScroll()
    window.addEventListener('scroll', alloScroll, { passive: true })
    return () => window.removeEventListener('scroll', alloScroll)
  }, [])

  // Esc chiude il menu e riporta il focus sul pulsante, altrimenti chi naviga
  // da tastiera si ritrova il cursore nel nulla.
  useEffect(() => {
    if (!apertoMobile) return

    const allEsc = (evento: KeyboardEvent) => {
      if (evento.key === 'Escape') {
        setApertoMobile(false)
        pulsanteMenu.current?.focus()
      }
    }

    document.addEventListener('keydown', allEsc)
    return () => document.removeEventListener('keydown', allEsc)
  }, [apertoMobile])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        staccato || apertoMobile
          ? 'bg-crema/95 text-inchiostro shadow-sm backdrop-blur'
          : 'bg-transparent text-white'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href="#top" onClick={() => setApertoMobile(false)}>
          {/* Il logo è nero: sopra l'hero scuro va invertito, cioè reso bianco */}
          <img
            src="/logo.png"
            alt="Ca' del Vento — Agriturismo"
            width={1000}
            height={594}
            className={`h-12 w-auto transition-[filter] duration-300 md:h-14 ${
              staccato || apertoMobile ? '' : 'brightness-0 invert'
            }`}
          />
        </a>

        <nav className="hidden gap-9 md:flex" aria-label="Navigazione principale">
          {voci.map((voce) => (
            <a
              key={voce.href}
              href={voce.href}
              // Letto dagli screen reader come "pagina corrente": l'evidenza
              // non è solo un fatto di colore.
              aria-current={voceAttiva === voce.href ? 'true' : undefined}
              // Solo il filetto sotto, non il grassetto: cambiando peso le voci
              // cambierebbero larghezza e la barra ballerebbe a ogni sezione.
              className={`border-b pb-1 text-sm transition-opacity hover:opacity-60 ${
                voceAttiva === voce.href ? 'border-current' : 'border-transparent'
              }`}
            >
              {voce.testo}
            </a>
          ))}
        </nav>

        <button
          ref={pulsanteMenu}
          type="button"
          className="md:hidden"
          aria-expanded={apertoMobile}
          aria-controls="menu-mobile"
          aria-label={apertoMobile ? 'Chiudi il menu' : 'Apri il menu'}
          onClick={() => setApertoMobile((aperto) => !aperto)}
        >
          <span aria-hidden="true" className="text-xl">
            {apertoMobile ? '✕' : '☰'}
          </span>
        </button>
      </div>

      {apertoMobile && (
        <nav
          id="menu-mobile"
          className="border-t border-greige md:hidden"
          aria-label="Navigazione principale (mobile)"
        >
          <ul className="flex flex-col px-6 py-2">
            {voci.map((voce) => (
              <li key={voce.href}>
                <a
                  href={voce.href}
                  aria-current={voceAttiva === voce.href ? 'true' : undefined}
                  className={`block py-3 text-sm ${
                    voceAttiva === voce.href ? 'font-semibold text-vino' : ''
                  }`}
                  onClick={() => setApertoMobile(false)}
                >
                  {voce.testo}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}

export default Header
