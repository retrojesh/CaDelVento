import { useEffect, useState } from 'react'

const voci = [
  { href: '#chi-siamo', testo: 'Chi siamo' },
  { href: '#menu', testo: 'Menu' },
  { href: '#galleria', testo: 'Galleria' },
  { href: '#contatti', testo: 'Contatti' },
]

function Header() {
  const [apertoMobile, setApertoMobile] = useState(false)
  const [staccato, setStaccato] = useState(false)

  // Sopra l'hero l'header è trasparente; appena si scorre diventa opaco,
  // altrimenti il testo bianco finisce sul crema e sparisce.
  useEffect(() => {
    const alloScroll = () => setStaccato(window.scrollY > 24)
    alloScroll()
    window.addEventListener('scroll', alloScroll, { passive: true })
    return () => window.removeEventListener('scroll', alloScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        staccato || apertoMobile
          ? 'bg-crema/95 text-inchiostro shadow-sm backdrop-blur'
          : 'bg-transparent text-white'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a
          href="#top"
          className="text-lg font-semibold tracking-wide"
          onClick={() => setApertoMobile(false)}
        >
          Ca' del Vento
        </a>

        <nav className="hidden gap-9 md:flex" aria-label="Navigazione principale">
          {voci.map((voce) => (
            <a
              key={voce.href}
              href={voce.href}
              className="text-sm transition-opacity hover:opacity-60"
            >
              {voce.testo}
            </a>
          ))}
        </nav>

        <button
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
                  className="block py-3 text-sm"
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
