import { siFacebook, siInstagram, type SimpleIcon } from 'simple-icons'
import { locale, messaggioWhatsapp, orari, turniLeggibili } from '../dati'
import Mappa from './Mappa'

const annoCorrente = new Date().getFullYear()

/* Loghi ufficiali dei marchi, presi da simple-icons.
   Sono solo tracciati SVG: nel sito finiscono i due che usiamo, non l'intera raccolta. */
function Logo({ icona }: { icona: SimpleIcon }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-5" aria-hidden="true">
      <path d={icona.path} />
    </svg>
  )
}

function Contatti() {
  return (
    <section id="contatti" className="bg-greige/30">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <p className="occhiello">Contatti</p>
        <h2 className="mt-4 max-w-2xl text-4xl font-light leading-tight md:text-5xl">
          Siamo sulle colline di Monteveglio.
        </h2>

        <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-12">
          <div>
            <h3 className="occhiello text-inchiostro">Dove siamo</h3>
            <address className="mt-4 not-italic leading-relaxed text-inchiostro-tenue">
              {locale.via}
              <br />
              {locale.cap} {locale.comune} ({locale.provincia})
            </address>
          </div>

          <div>
            <h3 className="occhiello text-inchiostro">Orari</h3>
            <dl className="mt-4 space-y-3 text-sm">
              {orari.map((riga) => (
                <div key={riga.giorni}>
                  <dt className="font-semibold">{riga.giorni}</dt>
                  <dd className="text-inchiostro-tenue">
                    {riga.turni.length ? turniLeggibili(riga.turni) : 'Chiuso'}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <h3 className="occhiello text-inchiostro">Prenotazioni</h3>
            <p className="mt-4 text-sm text-inchiostro-tenue">
              Meglio prenotare, soprattutto nel fine settimana.
            </p>

            <a
              href={`https://wa.me/${locale.whatsappLink}?text=${messaggioWhatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-block rounded-full bg-vino px-7 py-3 text-sm font-semibold text-crema transition-opacity hover:opacity-85"
            >
              Prenota su WhatsApp
            </a>

            <div className="mt-5 space-y-1 text-sm">
              <a
                href={`tel:${locale.telefonoLink}`}
                className="block text-lg font-light transition-opacity hover:opacity-70"
              >
                {locale.telefono}
              </a>
              <a
                href={`mailto:${locale.email}`}
                className="block text-inchiostro-tenue underline-offset-4 transition-opacity hover:opacity-70 hover:underline"
              >
                {locale.email}
              </a>
            </div>

            <div className="mt-6 flex gap-3">
              <a
                href={locale.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram di Ca' del Vento"
                className="rounded-full border border-greige-scuro p-2.5 text-inchiostro-tenue transition-colors hover:bg-vino hover:text-crema"
              >
                <Logo icona={siInstagram} />
              </a>
              <a
                href={locale.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook di Ca' del Vento"
                className="rounded-full border border-greige-scuro p-2.5 text-inchiostro-tenue transition-colors hover:bg-vino hover:text-crema"
              >
                <Logo icona={siFacebook} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14">
          <Mappa />
        </div>

        {/* Chiusura di pagina: solo ciò che non compare altrove.
            TODO: la partita IVA è obbligatoria sul sito di un'attività, chiederla ai titolari. */}
        <p className="mt-16 border-t border-greige pt-6 text-xs text-pietra">
          © {annoCorrente} {locale.nome} · P. IVA —
        </p>
      </div>
    </section>
  )
}

export default Contatti
