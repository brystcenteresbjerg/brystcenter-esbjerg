import { ClipboardList, MessageCircle, Scale } from "lucide-react";
import { cta, faqItems, features, hvornaar, intro, introQuote } from "@/data/behandlinger/second-opinion";

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
        image="/images/hero_curls_smile_brunette.jpg"
        subtitle="Det er ikke usædvanligt at sidde tilbage med spørgsmål efter en brystoperation. Vi tilbyder en professionel og uvildig vurdering af dit nuværende resultat og dine fremtidige muligheder."
        cta={{ label: "Book tid til en uvildig vurdering", href: "#book" }}
      />

      {/* ── FACTS BAR ────────────────────────────────────────────── */}
      <TreatmentFactsBar {...treatmentSummaries["second-opinion"]} />

      {/* ── INTRO ────────────────────────────────────────────────── */}
      <section className="px-8 lg:px-16 py-20 bg-surface">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="label mb-6">{intro.label}</p>
            <h2 className="font-serif text-3xl font-semibold text-secondary mb-6 leading-snug">{intro.heading}</h2>
            <p className="font-sans text-lg leading-relaxed text-secondary/75">{intro.body}</p>
          </div>
          <div className="bg-primary-container/30 rounded-sm p-10">
            <p className="font-serif font-light text-lg italic leading-relaxed text-tertiary mb-5">
              &ldquo;{introQuote.text}&rdquo;
            </p>
            <p className="label">- {introQuote.author}</p>
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
          <p className="label mb-6">{hvornaar.label}</p>
          <h2 className="font-serif text-3xl font-semibold text-secondary mb-6 leading-snug">{hvornaar.heading}</h2>
          <p className="font-sans text-lg leading-relaxed text-secondary/75">{hvornaar.body}</p>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <div className="px-8 lg:px-16 py-24 bg-surface-container-low">
        <div className="max-w-3xl mx-auto">
          <PageFAQ items={faqItems} />
        </div>
      </div>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <CtaSection {...cta} background="bg-surface" />
    </>
  );
}
