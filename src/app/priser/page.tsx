import Button from "@/components/ui/Button";
import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";

export const metadata: Metadata = {
  title: "Priser | Brystcenter Esbjerg",
  description:
    "Se priser på brystforstørrelse, brystløft, brystreduktion og implantatudskiftning hos Brystcenter Esbjerg. Book en uforpligtende konsultation.",
};

const featured = [
  {
    title: "Implantat",
    price: "48.000 kr.",
    bullets: ["Høj-kohæsiv gel", "1,5–2 t operation", "Inkl. konsultation og efterkontrol"],
  },
  {
    title: "Eget fedt",
    price: "42.000 kr.",
    popular: true,
    bullets: ["Ingen fremmedlegemer", "Dobbelt æstetisk resultat", "1 uges restitution"],
  },
  {
    title: "Brystløft",
    price: "44.000 kr.",
    bullets: ["Ruth Graf-teknik", "Uden implantat", "Minimale ar"],
  },
];

const treatments = [
  {
    category: "Brystforstørrelse",
    items: [
      {
        label: "Brystforstørrelse med implantat",
        desc: "Høj-kohæsive gel-implantater tilpasset din anatomi. 3D-simulering og individuel planlægning.",
        duration: "1,5–2 t",
        recovery: "1–2 ugers restitution",
        anbefales: "Ønske om markant volumen",
        price: "Fra 48.000 kr.",
        href: "/behandlinger/bfo-implantat",
      },
      {
        label: "Brystforstørrelse med eget fedt (lipofilling)",
        desc: "Naturlig volumen uden fremmedlegemer. Fedttransplantation med stamcelleanrigt væv.",
        duration: "2–3 t",
        recovery: "1 uges restitution",
        anbefales: "Moderat volumeønske uden fremmedlegemer",
        price: "Fra 42.000 kr.",
        href: "/behandlinger/bfo-eget-fedt-lipofilling",
      },
    ],
  },
  {
    category: "Brystløft & Reduktion",
    items: [
      {
        label: "Brystløft (mastopeksi) · Ruth Graf",
        desc: "Vertikal mastopeksi med auto-augmentation. Løft og fylde uden implantat — minimale ar.",
        duration: "2–3 t",
        recovery: "2 ugers restitution",
        anbefales: "Efter vægttab eller amning",
        price: "Fra 44.000 kr.",
        href: "/behandlinger/brystloeft",
      },
      {
        label: "Brystreduktion",
        desc: "Moderne B-teknik for optimal form og projektion. Lindring af fysiske gener og æstetisk balance.",
        duration: "2–3 t",
        recovery: "2 ugers restitution",
        anbefales: "Fysiske gener eller ubalance i proportioner",
        price: "Fra 46.000 kr.",
        href: "/behandlinger/brystreduktion",
      },
    ],
  },
  {
    category: "Revisionskirurgi",
    items: [
      {
        label: "Implantatudskiftning",
        desc: "Revisionskirurgi med PU-belagte implantater. Præcis placering og langvarig stabilitet.",
        duration: "1–2 t",
        recovery: "1–2 ugers restitution",
        anbefales: "Eksisterende implantater over 10–15 år",
        price: "Fra 38.000 kr.",
        href: "/behandlinger/udskiftning-af-protese",
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
        image="/images/woman_stonewall.png"
        subtitle="Alle priser er vejledende og inkluderer konsultation, indgreb, narkose og efterkontrol. Den endelige pris fastsættes ved konsultationen."
      />

      {/* ── FEATURED CARDS ───────────────────────────────────────── */}
      <section className="px-8 lg:px-24 pt-16 pb-4 bg-surface">
        <div className="max-w-3xl">
          <p className="font-sans text-xs uppercase tracking-[0.15em] text-secondary/30 mb-8">Mest efterspurgte</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {featured.map((card) => (
              <div
                key={card.title}
                className={`relative rounded-2xl p-6 flex flex-col gap-4 border ${
                  card.popular ? "bg-surface-container-low border-primary/25" : "bg-surface border-secondary/8"
                }`}
              >
                {card.popular && (
                  <span className="absolute top-4 right-4 font-sans text-[9px] uppercase tracking-[0.2em] font-semibold text-primary">
                    Mest valgte
                  </span>
                )}
                <p className="font-serif text-base font-semibold text-secondary">{card.title}</p>
                <div>
                  <p className="font-sans text-[10px] uppercase tracking-[0.12em] font-semibold text-secondary/40 mb-1">Fra</p>
                  <p className="font-serif text-3xl font-light text-primary leading-none">{card.price}</p>
                </div>
                <ul className="flex flex-col gap-2 mt-auto">
                  {card.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 font-sans text-xs leading-relaxed text-secondary/60">
                      <span className="text-primary mt-0.5 shrink-0">—</span>
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
          <p className="font-sans text-xs uppercase tracking-[0.15em] text-secondary/30 mb-8">Alle behandlinger</p>
          {treatments.map((group, i) => (
            <div key={group.category} className={i > 0 ? "mt-12" : ""}>
              <p className="font-sans text-[10px] uppercase tracking-[0.15em] text-secondary/25 mb-4">{group.category}</p>
              <div>
                {group.items.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="group flex items-start justify-between gap-8 py-6 border-b border-secondary/8 last:border-0 hover:opacity-70 transition-opacity"
                  >
                    <div className="flex-1 min-w-0">
                      <p className="font-sans text-sm font-medium text-secondary mb-1">{item.label}</p>
                      <p className="font-sans text-xs text-secondary/50 leading-relaxed mb-3">{item.desc}</p>
                      <div className="flex flex-wrap gap-x-5 gap-y-1">
                        <span className="font-sans text-[11px] text-secondary/40">⏱ {item.duration}</span>
                        <span className="font-sans text-[11px] text-secondary/40">↻ {item.recovery}</span>
                        <span className="font-sans text-[11px] text-secondary/40">◇ {item.anbefales}</span>
                      </div>
                    </div>
                    <div className="shrink-0 flex flex-col items-end gap-2 pt-0.5">
                      <p className="font-serif text-lg font-light text-primary">{item.price}</p>
                      <span className="font-sans text-[11px] text-primary opacity-0 group-hover:opacity-100 transition-opacity">Læs mere →</span>
                    </div>
                  </Link>
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
