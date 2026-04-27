import { Shield, Target, TrendingUp } from "lucide-react";
import { faqItems, features } from "@/data/behandlinger/udskiftning-af-protese";

import CtaSection from "@/components/sections/CtaSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import type { Metadata } from "next";
import PageFAQ from "@/components/sections/PageFAQ";
import PageHero from "@/components/sections/PageHero";
import TreatmentFactsBar from "@/components/sections/TreatmentFactsBar";
import { treatmentSummaries } from "@/data/priser";

export const metadata: Metadata = {
  title: "Udskiftning af brystimplantater i Esbjerg | Fokus på stabilitet",
  description:
    "Skal dine brystimplantater udskiftes? Hos Brystcenter Esbjerg bruger vi implantater med PU-overflader for at sikre præcis placering og stabilitet. Læs mere her.",
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
        label="Revisionskirurgi"
        h1Main="Udskiftning af brystimplantater"
        h1Italic="Stabilitet og præcision"
        image="/images/hero_implants_hands_three_beige.jpg"
        subtitle="Udskiftning eller korrektion af tidligere indsatte brystimplantater kræver en særlig grad af kirurgisk præcision og erfaring. Hos Brystcenter Esbjerg prioriterer vi en stabil og korrekt placering af det nye implantat."
        cta={{ label: "Book en speciallægekonsultation i Esbjerg", href: "#book" }}
        secondaryCta={{ label: "Om brystimplantater", href: "/behandlinger/bfo-implantat" }}
      />

      {/* ── FACTS BAR ────────────────────────────────────────────── */}
      <TreatmentFactsBar {...treatmentSummaries["udskiftning-af-protese"]} />

      {/* ── INTRO ────────────────────────────────────────────────── */}
      <section className="px-8 lg:px-16 py-20 bg-surface">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="label mb-6">Hvornår</p>
            <h2 className="font-serif text-3xl font-semibold text-secondary mb-6 leading-snug">
              Hvornår bør man få foretaget en implantatudskiftning?
            </h2>
            <p className="font-sans text-base leading-relaxed text-secondary/75">
              Der kan være mange årsager til at ønske en udskiftning af brystimplantater. For nogle handler det om et ønske om en
              ny størrelse eller form, mens det for andre er en nødvendighed grundet kapseldannelse, implantatbrud eller at
              implantatet har flyttet sig (displacering). Ved en grundig forundersøgelse vurderer vi dit nuværende udgangspunkt og
              lægger en plan, der sikrer harmoni og langsigtede resultater.
            </p>
          </div>
          <div>
            <p className="label mb-6">Tilgang</p>
            <h2 className="font-serif text-3xl font-semibold text-secondary mb-6 leading-snug">
              Implantater med PU-overflader for optimal sikkerhed
            </h2>
            <p className="font-sans text-base leading-relaxed text-secondary/75">
              I forbindelse med revisionskirurgi anvender vi ofte implantater med en særlig overfladestruktur, kendt som en
              polyuretanbelagt (PU) overflade. Denne teknologi er designet til at interagere aktivt med kroppens eget væv, hvilket
              giver en række væsentlige fordele for dig som patient.
            </p>
          </div>
        </div>
      </section>

      {/* ── FEATURES ─────────────────────────────────────────────── */}
      <FeaturesSection
        items={features.map((f, i) => ({
          ...f,
          icon: [<Shield size={22} />, <Target size={22} />, <TrendingUp size={22} />][i],
        }))}
      />

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <div className="px-8 lg:px-16 py-24 bg-surface">
        <div className="max-w-3xl mx-auto">
          <PageFAQ items={faqItems} />
        </div>
      </div>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <CtaSection
        heading="Overvejer du en implantatudskiftning?"
        body="Book en uforpligtende konsultation og få en præcis vurdering af dine muligheder hos speciallæge Troels Tei."
        ctaLabel="Bestil tid til forundersøgelse i dag"
      />
    </>
  );
}
