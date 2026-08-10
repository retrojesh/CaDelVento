import { galleria, locale, segnapostiGalleria } from '../dati'

/* Ritagli alternati: tutte le celle uguali darebbero una griglia da catalogo,
   che è l'opposto del tono che vogliamo. */
const formati = ['aspect-4/5', 'aspect-square', 'aspect-4/5']

function Galleria() {
  const vuota = galleria.length === 0

  return (
    <section id="galleria" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <p className="occhiello">Galleria</p>

      <h2 className="mt-4 max-w-2xl text-4xl font-light leading-tight md:text-5xl">
        L'orto, la sala, la tavola.
      </h2>

      <div className="mt-14 grid gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6">
        {vuota
          ? /* TODO: spariscono da soli appena `galleria` in dati.ts avrà le foto. */
            Array.from({ length: segnapostiGalleria }, (_, indice) => (
              <div
                key={indice}
                className={`foto-segnaposto w-full rounded-sm ${formati[indice % formati.length]}`}
                aria-hidden="true"
              />
            ))
          : galleria.map((foto, indice) => (
              <img
                key={foto.file}
                src={foto.file}
                alt={foto.alt}
                /* La prima schermata di foto va caricata subito: in lazy
                   comparirebbe a scatti sotto gli occhi di chi legge. */
                loading={indice < 3 ? 'eager' : 'lazy'}
                decoding="async"
                className={`w-full rounded-sm object-cover ${formati[indice % formati.length]}`}
              />
            ))}
      </div>

      {vuota && (
        <p className="mt-8 text-sm text-inchiostro-tenue">
          Le foto arrivano presto. Nel frattempo ne trovate parecchie sul nostro{' '}
          <a
            href={locale.instagram}
            target="_blank"
            rel="noreferrer"
            className="border-b border-vino pb-0.5 font-semibold text-vino transition-opacity hover:opacity-70"
          >
            profilo Instagram
            <span className="sr-only"> (si apre in una nuova finestra)</span>
          </a>
          .
        </p>
      )}
    </section>
  )
}

export default Galleria
