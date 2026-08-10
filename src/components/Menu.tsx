import { menu, prezzoLeggibile } from '../dati'

function Menu() {
  return (
    <section id="menu" className="bg-greige/30">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <p className="occhiello">Menu</p>

        <h2 className="mt-4 max-w-2xl text-4xl font-light leading-tight md:text-5xl">
          La tradizione bolognese,
          <br className="hidden sm:block" /> con l'orto qui fuori.
        </h2>

        <p className="mt-8 max-w-xl leading-relaxed text-inchiostro-tenue">
          La carta cambia con le stagioni: seguiamo quello che l'orto dà in quel
          momento. Per le intolleranze o un menu su misura, basta dircelo quando
          prenotate.
        </p>

        <div className="mt-14 grid gap-x-16 gap-y-12 md:grid-cols-2">
          {menu.map((sezione) => (
            <div key={sezione.categoria}>
              <h3 className="occhiello text-inchiostro">{sezione.categoria}</h3>

              {sezione.piatti.length ? (
                <ul className="mt-5 space-y-5">
                  {sezione.piatti.map((piatto) => (
                    <li key={piatto.nome}>
                      {/* Il prezzo va a destra, il puntinato riempie il vuoto:
                          è la lettura tipica di una carta. */}
                      <div className="flex items-baseline gap-3">
                        <span className="font-semibold">{piatto.nome}</span>
                        <span
                          className="h-px flex-1 border-b border-dotted border-greige-scuro"
                          aria-hidden="true"
                        />
                        <span className="shrink-0 text-inchiostro-tenue">
                          {prezzoLeggibile(piatto.prezzo)}
                        </span>
                      </div>
                      {piatto.descrizione && (
                        <p className="mt-1 text-sm leading-relaxed text-inchiostro-tenue">
                          {piatto.descrizione}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              ) : (
                /* TODO: sparisce da sola appena `menu` in dati.ts avrà i piatti. */
                <p className="mt-5 text-sm italic text-pietra">In aggiornamento</p>
              )}
            </div>
          ))}
        </div>

        <p className="mt-14 border-t border-greige pt-8 text-sm text-inchiostro-tenue">
          Il menu completo non è ancora online.{' '}
          <a
            href="#contatti"
            className="border-b border-vino pb-0.5 font-semibold text-vino transition-opacity hover:opacity-70"
          >
            Chiamateci
          </a>{' '}
          e vi diciamo cosa c'è oggi.
        </p>
      </div>
    </section>
  )
}

export default Menu
