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
- [ ] Menu
- [ ] Galleria foto
- [x] Contatti, mappa e orari

## Stato

Testi e contatti sono quelli reali. Mancano il menu, la galleria e **tutte le
foto**: al loro posto ci sono segnaposto a gradiente, marcati `TODO` nel codice.

Indirizzo, orari e recapiti stanno tutti in `src/dati.ts`: si aggiornano lì.
