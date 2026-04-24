import { faqItems, features } from "@/data/behandlinger/second-opinion";

import Button from "@/components/ui/Button";
import type { Metadata } from "next";
import PageFAQ from "@/components/sections/PageFAQ";
import PageHero from "@/components/sections/PageHero";
import TreatmentFactsBar from "@/components/sections/TreatmentFactsBar";
import { treatmentSummaries } from "@/data/priser";

export const metadata: Metadata = {
  title: "Second opinion ved brystkirurgi | Uvildig vurdering i Esbjerg",
  description:
    "Er du i tvivl efter en operation? Få en uvildig second opinion og professionel vurdering af dine muligheder hos speciallæge Troels Tei i Esbjerg.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <PageHero
        label="Second Opinion"
        h1Main="Uvildig vurdering"
        h1Italic="efter tidligere kirurgi"
        image="/images/woman_stonewall.png"
        subtitle="Det er ikke usædvanligt at sidde tilbage med spørgsmål efter en brystoperation. Vi tilbyder en professionel og uvildig vurdering af dit nuværende resultat og dine fremtidige muligheder."
        buttons={[{ label: "Book tid til en uvildig vurdering", href: "#book" }]}
      />

      {/* ── FACTS BAR ────────────────────────────────────────────── */}
      <TreatmentFactsBar {...treatmentSummaries["second-opinion"]} />

      {/* ── INTRO ────────────────────────────────────────────────── */}
      <section className="px-8 lg:px-16 py-20 bg-surface">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="font-sans text-xs uppercase tracking-[0.15em] mb-6 text-secondary/40">Vurdering</p>
            <h2 className="font-serif text-3xl font-semibold text-secondary mb-6 leading-snug">
              En objektiv gennemgang af dit forløb
            </h2>
            <p className="font-sans text-base leading-relaxed text-secondary/65">
              Når du vælger en second opinion hos os, møder du en kirurg, der ser på din sag med friske øjne. Formålet er ikke at
              vurdere andres arbejde, men at give dig en objektiv status på brystets anatomi, implantatets placering eller vævets
              heling. Vi gennemgår sammen dit hidtidige forløb og ser på, om dine forventninger stemmer overens med det fysiske
              resultat.
            </p>
          </div>
          <div className="bg-primary-container/30 rounded-sm p-10">
            <p className="font-serif font-light text-lg italic leading-relaxed text-tertiary mb-5">
              &ldquo;En second opinion handler om at give dig klarhed og tryghed - gennem en saglig gennemgang af din
              situation.&rdquo;
            </p>
            <p className="font-sans text-xs uppercase tracking-[0.15em] text-secondary/40">- Kirurg, Troels Tei</p>
          </div>
        </div>
      </section>

      {/* ── FEATURES ─────────────────────────────────────────────── */}
      <section className="px-8 lg:px-16 py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-serif text-4xl font-semibold text-secondary mb-4">Oplysning om muligheder og udbedring</h2>
            <p className="font-sans text-base max-w-md mx-auto text-secondary/60">
              Oplever du gener, asymmetri eller blot usikkerhed? Vi kortlægger dine muligheder.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {features.map((item) => (
              <div key={item.label} className="bg-white px-10 py-10 rounded-sm">
                <h3 className="font-sans text-sm font-semibold uppercase tracking-widest text-secondary mb-3">{item.label}</h3>
                <p className="font-sans text-sm leading-relaxed text-secondary/65">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HVORNÅR ──────────────────────────────────────────────── */}
      <section className="px-8 lg:px-16 py-20 bg-surface">
        <div className="max-w-3xl mx-auto">
          <p className="font-sans text-xs uppercase tracking-[0.15em] mb-6 text-secondary/40">Relevans</p>
          <h2 className="font-serif text-3xl font-semibold text-secondary mb-6 leading-snug">
            Hvornår er en second opinion relevant?
          </h2>
          <p className="font-sans text-base leading-relaxed text-secondary/65">
            En second opinion kan være relevant i mange situationer - eksempelvis hvis du oplever uventede smerter, hvis brystet
            har ændret form, eller hvis du blot har brug for en bekræftelse på, at din opheling følger den rette kurve. Målet er
            altid at give dig det fundament, du har brug for, for at kunne træffe den rigtige beslutning for din krop fremover.
          </p>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <div className="px-8 lg:px-16 py-24 bg-surface-container-low">
        <div className="max-w-3xl mx-auto">
          <PageFAQ items={faqItems} />
        </div>
      </div>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section id="book" className="px-8 lg:px-16 py-24 bg-surface">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-serif text-4xl font-semibold text-secondary mb-6">Har du brug for ro i maven?</h2>
          <p className="font-sans text-base leading-relaxed mb-10 text-secondary/60">
            Det vigtigste efter en operation er, at du føler dig tryg og velinformeret. Hos Brystcenter Esbjerg prioriterer vi den
            uvildige dialog, hvor vi tager os tid til at gennemgå din situation og dine muligheder for udbedring.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/booking">Kontakt os for en uvildig vurdering</Button>
            <Button href="tel:+4576185656" variant="outline">
              Ring til os: +45 76 18 56 56
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
