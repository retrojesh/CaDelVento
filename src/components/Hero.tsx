function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center justify-center">
      {/* TODO: sostituire il segnaposto con la foto d'apertura (paesaggio o sala).
          Formato consigliato: 2400×1600, .webp, sotto i 400 KB. */}
      <div className="foto-segnaposto absolute inset-0" aria-hidden="true" />

      {/* Velo scuro: senza, il testo bianco non ha contrasto sufficiente sulla foto */}
      <div className="absolute inset-0 bg-inchiostro/40" aria-hidden="true" />

      <div className="relative mx-auto max-w-3xl px-6 text-center text-white">
        <p className="occhiello text-white/80">Monteveglio · Colli bolognesi</p>

        <h1 className="mt-6 text-5xl font-light tracking-tight sm:text-6xl md:text-7xl">
          Ca' del Vento
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg font-light leading-relaxed text-white/90">
          Agriturismo e cucina a km 0 sulle colline bolognesi. Coltiviamo il
          nostro orto e cuciniamo la tradizione, con le ricette di sempre.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#menu"
            className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-inchiostro transition-colors hover:bg-greige"
          >
            Guarda il menu
          </a>
          <a
            href="#contatti"
            className="rounded-full border border-white/70 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            Prenota un tavolo
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
