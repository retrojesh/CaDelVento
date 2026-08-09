import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'
// L'estensione .js è richiesta dalla risoluzione moduli di Node: punta comunque a dati.ts
import { descrizionePagina, locale, orari, sitoUrl, titoloPagina } from './src/dati.js'

/**
 * Genera i metadati per i motori di ricerca leggendoli da src/dati.ts.
 * Stanno qui e non scritti a mano in index.html perché indirizzo, orari e
 * telefono devono avere una sola fonte: se cambia un orario, cambia ovunque.
 */
function metadatiSeo(): Plugin {
  // Formato che si aspetta schema.org: un blocco per ogni turno.
  // Il giorno di chiusura si dichiara con apertura e chiusura a mezzanotte.
  const fasceOrarie = orari.flatMap((riga) =>
    riga.turni.length
      ? riga.turni.map(([apre, chiude]) => ({
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: riga.giorniSchema,
          opens: apre,
          closes: chiude,
        }))
      : [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: riga.giorniSchema,
            opens: '00:00',
            closes: '00:00',
          },
        ],
  )

  const datiStrutturati = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: locale.nome,
    description: descrizionePagina,
    url: sitoUrl,
    image: `${sitoUrl}/anteprima.png`,
    logo: `${sitoUrl}/logo.png`,
    telephone: locale.telefonoLink,
    email: locale.email,
    servesCuisine: 'Cucina bolognese tradizionale, km 0',
    address: {
      '@type': 'PostalAddress',
      streetAddress: locale.via,
      postalCode: locale.cap,
      addressLocality: locale.comune,
      addressRegion: locale.provincia,
      addressCountry: 'IT',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: locale.coordinate.lat,
      longitude: locale.coordinate.lon,
    },
    openingHoursSpecification: fasceOrarie,
    sameAs: [locale.instagram, locale.facebook],
  }

  return {
    name: 'metadati-seo',

    transformIndexHtml() {
      return [
        { tag: 'title', children: titoloPagina, injectTo: 'head' },
        {
          tag: 'meta',
          attrs: { name: 'description', content: descrizionePagina },
          injectTo: 'head',
        },
        { tag: 'link', attrs: { rel: 'canonical', href: sitoUrl }, injectTo: 'head' },

        // Anteprima quando il link viene condiviso su WhatsApp, Facebook, Telegram
        { tag: 'meta', attrs: { property: 'og:type', content: 'website' }, injectTo: 'head' },
        { tag: 'meta', attrs: { property: 'og:site_name', content: locale.nome }, injectTo: 'head' },
        { tag: 'meta', attrs: { property: 'og:title', content: titoloPagina }, injectTo: 'head' },
        {
          tag: 'meta',
          attrs: { property: 'og:description', content: descrizionePagina },
          injectTo: 'head',
        },
        { tag: 'meta', attrs: { property: 'og:url', content: sitoUrl }, injectTo: 'head' },
        { tag: 'meta', attrs: { property: 'og:locale', content: 'it_IT' }, injectTo: 'head' },
        {
          tag: 'meta',
          attrs: { property: 'og:image', content: `${sitoUrl}/anteprima.png` },
          injectTo: 'head',
        },
        { tag: 'meta', attrs: { property: 'og:image:width', content: '1200' }, injectTo: 'head' },
        { tag: 'meta', attrs: { property: 'og:image:height', content: '630' }, injectTo: 'head' },
        {
          tag: 'meta',
          attrs: { property: 'og:image:alt', content: `Logo di ${locale.nome}` },
          injectTo: 'head',
        },
        {
          tag: 'meta',
          attrs: { name: 'twitter:card', content: 'summary_large_image' },
          injectTo: 'head',
        },

        // Indirizzo e orari in formato leggibile da Google
        {
          tag: 'script',
          attrs: { type: 'application/ld+json' },
          children: JSON.stringify(datiStrutturati),
          injectTo: 'head',
        },
      ]
    },

    // robots.txt e sitemap.xml: generati qui per non ripetere il dominio altrove
    generateBundle() {
      this.emitFile({
        type: 'asset',
        fileName: 'robots.txt',
        source: `User-agent: *\nAllow: /\n\nSitemap: ${sitoUrl}/sitemap.xml\n`,
      })
      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source: `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${sitoUrl}/</loc>
    <lastmod>${new Date().toISOString().slice(0, 10)}</lastmod>
  </url>
</urlset>
`,
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), metadatiSeo()],
})
