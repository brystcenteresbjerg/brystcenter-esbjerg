import Button from "@/components/ui/Button";
import PageHero from "@/components/sections/PageHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Priser | Brystcenter Esbjerg",
  description:
    "Se priser på brystforstørrelse, brystløft, brystreduktion og implantatudskiftning hos Brystcenter Esbjerg. Book en uforpligtende konsultation.",
};

const treatments = [
  {
    category: "Brystforstørrelse",
    items: [
      {
        label: "Brystforstørrelse med implantat",
        description: "Inkl. konsultation, operation, narkose og efterkontrol",
        price: "Fra 48.000 kr.",
      },
      {
        label: "Brystforstørrelse med eget fedt (lipofilling)",
        description: "Inkl. liposuktion, fedttransplantation og efterkontrol",
        price: "Fra 42.000 kr.",
      },
    ],
  },
  {
    category: "Brystløft & Reduktion",
    items: [
      {
        label: "Brystløft (mastopeksi)",
        description: "Ruth Graf-teknik. Inkl. konsultation, operation og efterkontrol",
        price: "Fra 44.000 kr.",
      },
      {
        label: "Brystreduktion",
        description: "B-teknik. Inkl. konsultation, operation og efterkontrol",
        price: "Fra 46.000 kr.",
      },
    ],
  },
  {
    category: "Revisionskirurgi",
    items: [
      {
        label: "Implantatudskiftning",
        description: "Inkl. fjernelse af eksisterende implantat, nyt implantat og efterkontrol",
        price: "Fra 38.000 kr.",
      },
    ],
  },
];

export default function Page() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <PageHero
        label="Priser"
        h1Main="Gennemsigtige"
        h1Italic="priser"
        subtitle="Alle priser er vejledende og inkluderer konsultation, indgreb, narkose og efterkontrol. Den endelige pris fastsættes ved konsultationen."
      />

      {/* ── PRICE LIST ───────────────────────────────────────────── */}
      <section className="px-8 lg:px-24 py-16 bg-surface">
        <div className="max-w-3xl">
          {treatments.map((group, i) => (
            <div key={group.category} className={i > 0 ? "mt-16" : ""}>
              <p className="font-sans text-xs uppercase tracking-[0.15em] text-secondary/30 mb-6">{group.category}</p>
              <div className="space-y-px">
                {group.items.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start justify-between gap-8 py-6 border-b border-secondary/8 last:border-0"
                  >
                    <div>
                      <p className="font-sans text-sm font-medium text-secondary mb-1">{item.label}</p>
                      <p className="font-sans text-xs text-secondary/45 leading-relaxed">{item.description}</p>
                    </div>
                    <p className="font-serif text-lg font-light text-primary shrink-0">{item.price}</p>
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
              {[
                "Indledende konsultation med speciallæge",
                "Selve operationen inkl. narkose",
                "Ophold på klinikken",
                "Planlagte efterkontroller",
                "Adgang til kirurgen ved spørgsmål",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 font-sans text-sm text-secondary/65">
                  <span className="text-primary mt-0.5">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-serif text-xl font-semibold text-secondary mb-4">Finansiering</h2>
            <p className="font-sans text-sm leading-relaxed text-secondary/65">
              Vi samarbejder med udvalgte finansieringspartnere, så du har mulighed for at fordele betalingen. Spørg os
              om mulighederne ved din konsultation.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section id="book" className="px-8 lg:px-16 py-24 bg-surface">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-serif text-4xl font-semibold text-secondary mb-6">Book en konsultation</h2>
          <p className="font-sans text-base leading-relaxed mb-10 text-secondary/60">
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
