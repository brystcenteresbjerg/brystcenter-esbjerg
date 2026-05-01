import { featured, included, treatments } from "@/data/priser";

import Button from "@/components/ui/Button";
import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";

export const metadata: Metadata = {
  title: "Priser | Brystcenter Esbjerg",
  description:
    "Se priser på brystforstørrelse, brystløft, brystreduktion og implantatudskiftning hos Brystcenter Esbjerg. Book en uforpligtende konsultation.",
};

export default function Page() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <PageHero
        label="Priser"
        h1Main="Gennemsigtige"
        h1Italic="priser"
        image="/images/hero_implants_hands_one_clay.jpg"
        subtitle="Alle priser er vejledende og inkluderer konsultation, indgreb, narkose og efterkontrol. Den endelige pris fastsættes ved konsultationen."
      />

      {/* ── FEATURED CARDS ───────────────────────────────────────── */}
      <section className="px-8 lg:px-24 pt-16 pb-4 bg-surface">
        <div className="max-w-3xl">
          <p className="label mb-8">Mest efterspurgte</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {featured.map((card) => (
              <div
                key={card.title}
                className={`relative rounded-sm p-6 flex flex-col gap-4 border ${
                  card.popular ? "bg-surface-container-low border-primary/25" : "bg-surface border-secondary/8"
                }`}
              >
                {card.popular && (
                  <span className="absolute top-4 right-4 font-sans text-[9px] uppercase tracking-[0.2em] font-semibold text-primary">
                    Mest valgte
                  </span>
                )}
                <p className="font-serif text-lg font-semibold text-secondary">{card.title}</p>
                <div>
                  <p className="font-sans text-[10px] uppercase tracking-[0.12em] font-semibold text-secondary/55 mb-1">Fra</p>
                  <p className="font-serif text-3xl font-light text-primary leading-none">{card.price}</p>
                </div>
                <ul className="flex flex-col gap-2 mt-auto">
                  {card.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 font-sans text-xs leading-relaxed text-secondary/70">
                      <span className="text-primary mt-0.5 shrink-0">-</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FULL PRICE LIST ──────────────────────────────────────── */}
      <section className="px-8 lg:px-24 pt-12 pb-16 bg-surface">
        <div className="max-w-3xl">
          <p className="label mb-8">Alle behandlinger</p>
          {treatments.map((group, i) => (
            <div key={group.category} className={i > 0 ? "mt-12" : ""}>
              <p className="font-sans text-[10px] uppercase tracking-[0.15em] text-secondary/25 mb-4">{group.category}</p>
              <div>
                {group.items.map((item) => (
                  <div key={item.label} className="border-b border-secondary/8 last:border-0">
                    <Link
                      href={item.href}
                      className="group flex items-start justify-between gap-8 py-6 hover:opacity-70 transition-opacity"
                    >
                      <div className="flex-1 min-w-0">
                        <p className="font-sans text-lg font-medium text-secondary mb-1">{item.label}</p>
                        {item.desc && <p className="font-sans text-xs text-secondary/65 leading-relaxed mb-3">{item.desc}</p>}
                        {(item.duration || item.recovery || item.anbefales) && (
                          <div className="flex flex-wrap gap-x-5 gap-y-1">
                            {item.duration && <span className="font-sans text-[11px] text-secondary/55">⏱ {item.duration}</span>}
                            {item.recovery && <span className="font-sans text-[11px] text-secondary/55">↻ {item.recovery}</span>}
                            {item.anbefales && (
                              <span className="font-sans text-[11px] text-secondary/55">◇ {item.anbefales}</span>
                            )}
                          </div>
                        )}
                      </div>
                      <div className="shrink-0 flex flex-col items-end gap-2 pt-0.5">
                        {item.price ? (
                          <p className="font-serif text-lg font-light text-primary">{item.price}</p>
                        ) : (
                          <p className="font-sans text-xs text-secondary/35 mt-1">Kontakt os</p>
                        )}
                        <span className="font-sans text-[11px] text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                          {item.href.startsWith("/behandlinger") ? "Læs mere →" : "Book →"}
                        </span>
                      </div>
                    </Link>
                    {item.supplements && item.supplements.length > 0 && (
                      <div className="pb-5 space-y-1.5">
                        {item.supplements.map((s) => (
                          <div key={s.label} className="flex justify-between gap-8">
                            <span className="font-sans text-[11px] text-label">- {s.label}</span>
                            <span className="font-sans text-[11px] text-label shrink-0">{s.price}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── NOTE ─────────────────────────────────────────────────── */}
      <section className="px-8 lg:px-24 py-16 bg-surface-container-low">
        <div className="max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="font-serif text-xl font-semibold text-secondary mb-4">Hvad er inkluderet?</h2>
            <ul className="space-y-3">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3 font-sans text-base text-secondary/75">
                  <span className="text-primary mt-0.5">-</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-serif text-xl font-semibold text-secondary mb-4">Finansiering</h2>
            <p className="font-sans text-base leading-relaxed text-secondary/75">
              Vi samarbejder med udvalgte finansieringspartnere, så du har mulighed for at fordele betalingen. Spørg os om
              mulighederne ved din konsultation.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section id="book" className="px-8 lg:px-16 py-24 bg-surface">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-serif text-4xl font-semibold text-secondary mb-6">Book en konsultation</h2>
          <p className="font-sans text-base leading-relaxed mb-10 text-secondary/70">
            Få en præcis prisindikation tilpasset netop din situation hos speciallæge Troels Tei.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/booking">Book en konsultation</Button>
            <Button href="tel:+4576185656" variant="outline">
              Ring til os: +45 76 18 56 56
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
