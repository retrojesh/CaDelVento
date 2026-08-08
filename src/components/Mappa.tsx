import { useState } from 'react'
import { indirizzoCompleto, locale } from '../dati'

const { lat, lon } = locale.coordinate

/* Riquadro centrato sul locale, circa 950 m per 670 m */
const bbox = [lon - 0.006, lat - 0.003, lon + 0.006, lat + 0.003].join(',')

const mappaDisegnata = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat},${lon}`

/* Vista satellitare: immagine statica dal servizio pubblico Esri, senza chiave.
   Il riquadro è centrato sul locale, quindi il segnaposto va al centro esatto. */
const mappaSatellite = `https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/export?bbox=${bbox}&bboxSR=4326&imageSR=3857&size=1600,800&format=jpg&f=image`

const collegamentoEsterno = `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lon}#map=17/${lat}/${lon}`

type Vista = 'mappa' | 'satellite'

function Mappa() {
  const [vista, setVista] = useState<Vista>('mappa')

  return (
    <div>
      <div className="mb-3 flex gap-2" role="group" aria-label="Tipo di mappa">
        {(['mappa', 'satellite'] as const).map((tipo) => (
          <button
            key={tipo}
            type="button"
            aria-pressed={vista === tipo}
            onClick={() => setVista(tipo)}
            className={`rounded-full px-5 py-2 text-sm font-semibold capitalize transition-colors ${
              vista === tipo
                ? 'bg-inchiostro text-crema'
                : 'bg-greige/60 text-inchiostro-tenue hover:bg-greige'
            }`}
          >
            {tipo}
          </button>
        ))}
      </div>

      <div className="relative overflow-hidden rounded-sm border border-greige">
        {vista === 'mappa' ? (
          <iframe
            src={mappaDisegnata}
            title={`Mappa: ${indirizzoCompleto}`}
            loading="lazy"
            className="block h-80 w-full md:h-96"
          />
        ) : (
          <>
            <img
              src={mappaSatellite}
              alt={`Vista satellitare di ${indirizzoCompleto}`}
              loading="lazy"
              className="block h-80 w-full object-cover md:h-96"
            />

            {/* Il ritaglio di object-cover è centrato, quindi il centro resta il locale */}
            <span
              className="pointer-events-none absolute left-1/2 top-1/2 size-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-vino shadow-md"
              aria-hidden="true"
            />

            {/* Attribuzione richiesta dalle condizioni d'uso di Esri */}
            <span className="absolute bottom-0 right-0 bg-inchiostro/60 px-2 py-1 text-[10px] text-white">
              Esri, Maxar, Earthstar Geographics
            </span>
          </>
        )}
      </div>

      <a
        href={collegamentoEsterno}
        target="_blank"
        rel="noreferrer"
        className="mt-3 inline-block border-b border-vino pb-0.5 text-sm font-semibold text-vino transition-opacity hover:opacity-70"
      >
        Apri nelle mappe
      </a>
    </div>
  )
}

export default Mappa
