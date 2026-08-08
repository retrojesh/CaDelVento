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

          {/* TODO: tutti i testi qui sotto sono una bozza, da rivedere con i titolari */}
          <h2 className="mt-4 text-4xl font-light leading-tight md:text-5xl">
            Una casa sulla collina,
            <br />
            e una cucina che cambia
            <br />
            con le stagioni.
          </h2>

          <div className="mt-8 space-y-5 text-inchiostro-tenue leading-relaxed">
            <p>
              Ca' del Vento nasce dove il vento non manca mai: in cima alla
              collina, con la vista che si apre sulla valle. Da qui viene il
              nome, e anche il modo di lavorare — senza fretta, seguendo quello
              che la stagione mette a disposizione.
            </p>
            <p>
              Il menu è corto per scelta. Pochi piatti, cambiati spesso, con
              materie prime dei produttori che conosciamo di persona. Quello che
              non troviamo buono, semplicemente non lo mettiamo in carta.
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
