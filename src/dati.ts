/** Dati reali del locale. Unico punto da aggiornare se cambia qualcosa. */

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

/** Giorni accorpati: martedì-venerdì e sabato-domenica hanno gli stessi orari. */
export const orari = [
  { giorni: 'Lunedì', pranzo: null, cena: null },
  { giorni: 'Martedì – Venerdì', pranzo: '12:00 – 14:00', cena: '19:30 – 00:00' },
  { giorni: 'Sabato e domenica', pranzo: '12:30 – 14:00', cena: '19:30 – 01:00' },
] as const
