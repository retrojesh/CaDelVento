import { indirizzoCompleto, locale, messaggioWhatsapp, orari } from '../dati'

const { lat, lon } = locale.coordinate

/* Riquadro di mappa centrato sul locale, con un margine di ~600 m per lato */
const bbox = [lon - 0.006, lat - 0.003, lon + 0.006, lat + 0.003].join(',')
const mappaSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat},${lon}`
const mappaLink = `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lon}#map=17/${lat}/${lon}`

function Contatti() {
  return (
    <section id="contatti" className="bg-greige/30">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <p className="occhiello">Contatti</p>
        <h2 className="mt-4 max-w-2xl text-4xl font-light leading-tight md:text-5xl">
          Siamo sulle colline di Monteveglio.
        </h2>

        <div className="mt-14 grid gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <h3 className="occhiello text-inchiostro">Dove siamo</h3>
            <address className="mt-4 not-italic leading-relaxed text-inchiostro-tenue">
              {locale.via}
              <br />
              {locale.cap} {locale.comune} ({locale.provincia})
            </address>

            <a
              href={mappaLink}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-block border-b border-vino pb-0.5 text-sm font-semibold text-vino transition-opacity hover:opacity-70"
            >
              Apri nelle mappe
            </a>

            <h3 className="occhiello mt-10 text-inchiostro">Prenotazioni</h3>
            <p className="mt-4 text-inchiostro-tenue">
              Consigliamo di prenotare, soprattutto nel fine settimana.
            </p>

            <div className="mt-5 flex flex-col items-start gap-3">
              <a
                href={`https://wa.me/${locale.whatsappLink}?text=${messaggioWhatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-vino px-7 py-3 text-sm font-semibold text-crema transition-opacity hover:opacity-85"
              >
                Prenota su WhatsApp
              </a>

              <a
                href={`tel:${locale.telefonoLink}`}
                className="text-xl font-light transition-opacity hover:opacity-70"
              >
                {locale.telefono}
              </a>

              <a
                href={`mailto:${locale.email}`}
                className="text-inchiostro-tenue underline-offset-4 transition-opacity hover:opacity-70 hover:underline"
              >
                {locale.email}
              </a>
            </div>

            <h3 className="occhiello mt-10 text-inchiostro">Seguici</h3>
            <div className="mt-4 flex gap-6">
              <a
                href={locale.instagram}
                target="_blank"
                rel="noreferrer"
                className="border-b border-vino pb-0.5 text-sm font-semibold text-vino transition-opacity hover:opacity-70"
              >
                Instagram
              </a>
              <a
                href={locale.facebook}
                target="_blank"
                rel="noreferrer"
                className="border-b border-vino pb-0.5 text-sm font-semibold text-vino transition-opacity hover:opacity-70"
              >
                Facebook
              </a>
            </div>
          </div>

          <div>
            <h3 className="occhiello text-inchiostro">Orari</h3>
            <dl className="mt-4">
              {orari.map((riga) => (
                <div
                  key={riga.giorni}
                  className="flex flex-wrap justify-between gap-x-6 gap-y-1 border-b border-greige py-4"
                >
                  <dt className="font-semibold">{riga.giorni}</dt>
                  <dd className="text-right text-inchiostro-tenue">
                    {riga.pranzo ? (
                      <>
                        {riga.pranzo}
                        <br />
                        {riga.cena}
                      </>
                    ) : (
                      'Chiuso'
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="mt-14 overflow-hidden rounded-sm border border-greige">
          <iframe
            src={mappaSrc}
            title={`Mappa: ${indirizzoCompleto}`}
            loading="lazy"
            className="block h-80 w-full md:h-96"
          />
        </div>
      </div>
    </section>
  )
}

export default Contatti
