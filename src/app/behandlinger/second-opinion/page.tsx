import { ClipboardList, MessageCircle, Scale } from "lucide-react";
import { faqItems, features } from "@/data/behandlinger/second-opinion";

import CtaSection from "@/components/sections/CtaSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
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
        image="/images/curls_smile_brunette.jpg"
        subtitle="Det er ikke usædvanligt at sidde tilbage med spørgsmål efter en brystoperation. Vi tilbyder en professionel og uvildig vurdering af dit nuværende resultat og dine fremtidige muligheder."
        cta={{ label: "Book tid til en uvildig vurdering", href: "#book" }}
      />

      {/* ── FACTS BAR ────────────────────────────────────────────── */}
      <TreatmentFactsBar {...treatmentSummaries["second-opinion"]} />

      {/* ── INTRO ────────────────────────────────────────────────── */}
      <section className="px-8 lg:px-16 py-20 bg-surface">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="label mb-6">Vurdering</p>
            <h2 className="font-serif text-3xl font-semibold text-secondary mb-6 leading-snug">
              En objektiv gennemgang af dit forløb
            </h2>
            <p className="font-sans text-base leading-relaxed text-secondary/75">
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
            <p className="label">- Kirurg, Troels Tei</p>
          </div>
        </div>
      </section>

      {/* ── FEATURES ─────────────────────────────────────────────── */}
      <FeaturesSection
        heading="Oplysning om muligheder og udbedring"
        intro="Oplever du gener, asymmetri eller blot usikkerhed? Vi kortlægger dine muligheder."
        headingAlign="center"
        items={features.map((f, i) => ({
          ...f,
          icon: [<Scale size={22} />, <ClipboardList size={22} />, <MessageCircle size={22} />][i],
        }))}
      />

      {/* ── HVORNÅR ──────────────────────────────────────────────── */}
      <section className="px-8 lg:px-16 py-20 bg-surface">
        <div className="max-w-3xl mx-auto">
          <p className="label mb-6">Relevans</p>
          <h2 className="font-serif text-3xl font-semibold text-secondary mb-6 leading-snug">
            Hvornår er en second opinion relevant?
          </h2>
          <p className="font-sans text-base leading-relaxed text-secondary/75">
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
      <CtaSection
        heading="Har du brug for ro i maven?"
        body="Det vigtigste efter en operation er, at du føler dig tryg og velinformeret. Hos Brystcenter Esbjerg prioriterer vi den uvildige dialog, hvor vi tager os tid til at gennemgå din situation og dine muligheder for udbedring."
        ctaLabel="Kontakt os for en uvildig vurdering"
        background="bg-surface"
      />
    </>
  );
}
