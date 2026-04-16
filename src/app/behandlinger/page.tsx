import Button from "@/components/ui/Button";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Behandlinger | Brystcenter Esbjerg",
  description:
    "Se alle brystkirurgiske behandlinger hos Brystcenter Esbjerg — brystforstørrelse, brystløft, brystreduktion og implantatudskiftning. Skræddersyet til din anatomi.",
};

const treatments = [
  {
    title: "Brystforstørrelse med implantat",
    desc: "Høj-kohæsive gel-implantater tilpasset din anatomi og ønsker. 3D-simulering og individuel planlægning.",
    href: "/behandlinger/bfo-implantat",
  },
  {
    title: "Brystforstørrelse med eget fedt",
    desc: "Naturlig volumen uden fremmedlegemer. Fedttransplantation med stamcelleanrigt væv fra dit eget donorsted.",
    href: "/behandlinger/bfo-eget-fedt-lipofilling",
  },
  {
    title: "Brystløft",
    desc: "Ruth Graf vertikal mastopeksi med auto-augmentation. Løft og fylde uden implantat — minimale ar.",
    href: "/behandlinger/brystloeft",
  },
  {
    title: "Brystreduktion",
    desc: "Moderne B-teknik for optimal form og projektion. Lindring af fysiske gener og æstetisk balance.",
    href: "/behandlinger/brystreduktion",
  },
  {
    title: "Implantatudskiftning",
    desc: "Revisionskirurgi med PU-belagte implantater. Præcis placering, minimal kapselkontraktur og langvarig stabilitet.",
    href: "/behandlinger/udskiftning-af-protese",
  },
];

export default function Page() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="bg-surface pt-40 pb-20 px-8 lg:px-24">
        <div className="max-w-2xl">
          <p className="font-sans text-xs uppercase tracking-[0.15em] mb-8 text-primary">Behandlinger</p>
          <h1 className="font-serif text-5xl xl:text-6xl font-semibold leading-[1.1] text-secondary mb-8">
            Skræddersyede <span className="block italic font-light">behandlinger</span>
          </h1>
          <p className="font-sans text-base leading-relaxed text-secondary/65 max-w-sm">
            Alle indgreb tilpasses individuelt til din anatomi, dine proportioner og dine ønsker — ikke en standardløsning.
          </p>
        </div>
      </section>

      {/* ── TREATMENT LIST ───────────────────────────────────────── */}
      <section className="px-8 lg:px-24 pb-24 bg-surface">
        <div className="max-w-3xl space-y-px">
          {treatments.map((t, i) => (
            <Link
              key={t.href}
              href={t.href}
              className="group flex items-start justify-between gap-8 py-8 border-b border-secondary/8 last:border-0 hover:opacity-70 transition-opacity"
            >
              <div>
                <p className="font-sans text-xs uppercase tracking-[0.15em] text-secondary/30 mb-2">0{i + 1}</p>
                <h2 className="font-serif text-2xl font-semibold text-secondary mb-3">{t.title}</h2>
                <p className="font-sans text-sm leading-relaxed text-secondary/60 max-w-md">{t.desc}</p>
              </div>
              <span className="text-primary text-xl mt-6 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section id="book" className="px-8 lg:px-16 py-24 bg-surface-container-low">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-serif text-4xl font-semibold text-secondary mb-6">Ikke sikker på hvad du har brug for?</h2>
          <p className="font-sans text-base leading-relaxed mb-10 text-secondary/60">
            Book en uforpligtende konsultation. Vi gennemgår dine muligheder og anbefaler den rette behandling til dig.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/booking">Book en konsultation</Button>
            <Button href="tel:+4576185656" variant="outline">Ring til os: +45 76 18 56 56</Button>
          </div>
        </div>
      </section>
    </>
  );
}
