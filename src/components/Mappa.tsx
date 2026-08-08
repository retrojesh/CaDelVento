import { indirizzoCompleto, locale } from '../dati'

const { lat, lon } = locale.coordinate

/* Riquadro centrato sul locale, circa 950 m per 670 m */
const bbox = [lon - 0.006, lat - 0.003, lon + 0.006, lat + 0.003].join(',')
const src = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat},${lon}`

function Mappa() {
  return (
    <div className="overflow-hidden rounded-sm border border-greige">
      <iframe
        src={src}
        title={`Mappa: ${indirizzoCompleto}`}
        loading="lazy"
        className="block h-80 w-full md:h-96"
      />
    </div>
  )
}

export default Mappa
