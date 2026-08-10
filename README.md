# Ca' del Vento

Sito vetrina per l'agriturismo Ca' del Vento — Via Barlete 10/1, Monteveglio (BO).
Cucina a km 0 con le verdure dell'orto e le ricette della tradizione bolognese.

## Stack

- **Vite 8** — dev server e build
- **React 19** + **TypeScript 6**
- **Tailwind CSS 4** — via plugin `@tailwindcss/vite` (nessun `tailwind.config.js`: i token del tema si dichiarano in `src/index.css`)
- **Oxlint** — linting

## Comandi

```bash
npm install      # installa le dipendenze
npm run dev      # server di sviluppo su http://localhost:5173
npm run build    # build di produzione in dist/
npm run preview  # anteprima locale della build
```

## Sezioni

- [x] Hero + Chi siamo
- [x] Menu — struttura pronta, piatti da inserire
- [x] Galleria foto — griglia pronta, foto da inserire
- [x] Contatti, mappa e orari

## Stato

Tutte le sezioni sono in pagina. Testi e contatti sono quelli reali; i contenuti
che ancora mancano stanno tutti in `src/dati.ts`, marcati `TODO`:

- **le foto** — hero, "chi siamo" e galleria mostrano segnaposto a gradiente.
  Vanno ridimensionate e convertite in `.webp` prima di entrare nel repo;
- **i piatti del menu** — nome, descrizione e prezzo per ogni categoria. Nessun
  piatto e nessun prezzo è inventato: le categorie vuote appaiono come
  "in aggiornamento";
- **la partita IVA** — obbligatoria per legge, ora è un trattino in chiusura;
- **il dominio** — serve per l'anteprima di condivisione e per la sitemap.

Indirizzo, orari e recapiti stanno tutti in `src/dati.ts`: si aggiornano lì.
