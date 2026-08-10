/** Dati reali del locale. Unico punto da aggiornare se cambia qualcosa. */

/**
 * TODO: SOSTITUIRE con il dominio vero appena esiste.
 * Serve per l'anteprima di condivisione (WhatsApp, Facebook) e per la sitemap,
 * che richiedono indirizzi assoluti. Finché resta questo segnaposto,
 * l'anteprima non funziona.
 */
export const sitoUrl = 'https://DOMINIO-DA-DEFINIRE.it'

/** Titolo e descrizione della pagina: usati nel tab, su Google e nelle anteprime. */
export const titoloPagina = "Ca' del Vento — Agriturismo e cucina a km 0, Monteveglio"
export const descrizionePagina =
  'Agriturismo a Monteveglio, sulle colline bolognesi: cucina a km 0 con le verdure del nostro orto e le ricette della tradizione. Prenotazioni allo 051 284 5582.'

export const locale = {
  nome: "Ca' del Vento",
  via: 'Via Barlete 10/1',
  cap: '40050',
  comune: 'Monteveglio',
  provincia: 'BO',
  telefono: '051 284 5582',
  /** Stesso numero in formato internazionale, per il link "chiama" */
  telefonoLink: '+390512845582',
  whatsapp: '347 443 1497',
  /** Solo cifre con prefisso: è il formato che vuole wa.me */
  whatsappLink: '393474431497',
  email: 'agr.cadelvento@gmail.com',
  instagram: 'https://www.instagram.com/agriturismo.cadelvento/',
  facebook: 'https://www.facebook.com/profile.php?id=61563379956859',
  coordinate: { lat: 44.4564367, lon: 11.0988158 },
} as const

/** Messaggio già scritto nella chat WhatsApp: chi prenota deve solo completarlo. */
export const messaggioWhatsapp = encodeURIComponent(
  `Buongiorno, vorrei prenotare un tavolo a Ca' del Vento.\nData: \nOrario: \nPersone: `,
)

export const indirizzoCompleto = `${locale.via}, ${locale.cap} ${locale.comune} ${locale.provincia}`

/**
 * Giorni accorpati: martedì-venerdì e sabato-domenica hanno gli stessi orari.
 * `giorniSchema` e `turni` servono ai dati strutturati per Google: stanno qui
 * perché gli orari vanno scritti una volta sola, non due.
 */
export const orari = [
  { giorni: 'Lunedì', giorniSchema: ['Monday'], turni: [] },
  {
    giorni: 'Martedì – Venerdì',
    giorniSchema: ['Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    turni: [
      ['12:00', '14:00'],
      ['19:30', '00:00'],
    ],
  },
  {
    giorni: 'Sabato e domenica',
    giorniSchema: ['Saturday', 'Sunday'],
    turni: [
      ['12:30', '14:00'],
      ['19:30', '01:00'],
    ],
  },
] as const

/**
 * Il menu, diviso per categoria.
 *
 * TODO: mancano i piatti veri. Servono, per ogni categoria, i nomi dei piatti,
 * la descrizione breve degli ingredienti e il prezzo in euro. Finché `piatti`
 * resta vuoto la categoria compare in pagina come "in aggiornamento":
 * nessun piatto e nessun prezzo è inventato di proposito.
 *
 * Esempio di riga, quando arriveranno i dati:
 *   { nome: 'Tortellini in brodo', descrizione: 'Brodo di cappone', prezzo: 14 }
 */
export const menu: readonly {
  categoria: string
  piatti: readonly { nome: string; descrizione?: string; prezzo: number }[]
}[] = [
  { categoria: 'Antipasti', piatti: [] },
  { categoria: 'Primi', piatti: [] },
  { categoria: 'Secondi', piatti: [] },
  { categoria: 'Contorni', piatti: [] },
  { categoria: 'Dolci', piatti: [] },
]

/** Prezzo in euro come si scrive in carta: 14 → «14 €», 12.5 → «12,50 €». */
export function prezzoLeggibile(prezzo: number) {
  return `${prezzo.toLocaleString('it-IT', {
    minimumFractionDigits: Number.isInteger(prezzo) ? 0 : 2,
  })} €`
}

/**
 * Le foto della galleria.
 *
 * TODO: mancano le foto. Vanno messe in `public/galleria/`, già ridimensionate
 * (lato lungo 1600 px) e convertite in `.webp` sotto i 250 KB l'una: entrano nel
 * repo, quindi il peso resta per sempre. L'`alt` descrive la foto a chi non la
 * vede ed è obbligatorio. Finché l'elenco è vuoto la sezione mostra i segnaposto.
 *
 * Esempio di riga: { file: '/galleria/sala.webp', alt: 'La sala apparecchiata' }
 */
export const galleria: readonly { file: string; alt: string }[] = []

/** Quanti segnaposto mostrare finché le foto vere non ci sono. */
export const segnapostiGalleria = 6

/** Come mostrare i turni di un giorno in pagina. Stringa vuota = chiuso. */
export function turniLeggibili(turni: readonly (readonly string[])[]) {
  return turni.map(([apre, chiude]) => `${apre} – ${chiude}`).join(' · ')
}
