import { locale, messaggioWhatsapp, orari } from '../dati'

const annoCorrente = new Date().getFullYear()

function Footer() {
  return (
    <footer className="bg-inchiostro text-crema">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="text-lg font-semibold">{locale.nome}</p>
            <p className="mt-3 text-sm leading-relaxed text-crema/70">
              Agriturismo e cucina a km 0
              <br />
              {locale.via}
              <br />
              {locale.cap} {locale.comune} ({locale.provincia})
            </p>
          </div>

          <div>
            <p className="occhiello text-crema/50">Contatti</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href={`tel:${locale.telefonoLink}`}
                  className="transition-opacity hover:opacity-70"
                >
                  {locale.telefono}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${locale.whatsappLink}?text=${messaggioWhatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-opacity hover:opacity-70"
                >
                  WhatsApp {locale.whatsapp}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${locale.email}`}
                  className="transition-opacity hover:opacity-70"
                >
                  {locale.email}
                </a>
              </li>
            </ul>

            <div className="mt-5 flex gap-5 text-sm">
              <a
                href={locale.instagram}
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 transition-opacity hover:opacity-70"
              >
                Instagram
              </a>
              <a
                href={locale.facebook}
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 transition-opacity hover:opacity-70"
              >
                Facebook
              </a>
            </div>
          </div>

          <div>
            <p className="occhiello text-crema/50">Orari</p>
            <ul className="mt-4 space-y-2 text-sm text-crema/70">
              {orari.map((riga) => (
                <li key={riga.giorni}>
                  <span className="text-crema">{riga.giorni}</span>
                  <br />
                  {riga.pranzo ? `${riga.pranzo} · ${riga.cena}` : 'Chiuso'}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-crema/15 pt-6 text-xs text-crema/50 sm:flex-row sm:justify-between">
          <p>
            © {annoCorrente} {locale.nome}
          </p>
          {/* TODO: la partita IVA è obbligatoria sul sito di un'attività. Chiederla ai titolari. */}
          <p>P. IVA —</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
