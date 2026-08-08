function ChiSiamo() {
  return (
    <section id="chi-siamo" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
        {/* TODO: sostituire con una foto vera (la sala, la cucina, chi ci lavora).
            Formato consigliato: 1200×1500 verticale, .webp. */}
        <div
          className="foto-segnaposto aspect-4/5 w-full rounded-sm"
          aria-hidden="true"
        />

        <div>
          <p className="occhiello">Chi siamo</p>

          <h2 className="mt-4 text-4xl font-light leading-tight md:text-5xl">
            Coltiviamo quello
            <br />
            che cuciniamo.
          </h2>

          <div className="mt-8 space-y-5 text-inchiostro-tenue leading-relaxed">
            <p>
              Ca' del Vento è un piccolo agriturismo sulle colline bolognesi. Il
              km 0, da noi, è una cosa concreta: gran parte di quello che arriva
              in tavola nasce nel nostro orto, a pochi passi dalla cucina.
            </p>
            <p>
              In carta c'è la cucina bolognese di sempre, fatta con le ricette
              autentiche e con quello che la stagione mette a disposizione. Nient'altro:
              né scorciatoie, né ingredienti che hanno viaggiato più di noi.
            </p>
          </div>

          <a
            href="#contatti"
            className="mt-10 inline-block border-b border-vino pb-1 text-sm font-semibold text-vino transition-opacity hover:opacity-70"
          >
            Vieni a trovarci
          </a>
        </div>
      </div>
    </section>
  )
}

export default ChiSiamo
