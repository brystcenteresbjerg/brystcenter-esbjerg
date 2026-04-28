import { ArrowUp, Scissors, Sparkles } from "lucide-react";
import { cta, faqItems, features, intro, testimonial } from "@/data/behandlinger/brystloeft";

import CtaSection from "@/components/sections/CtaSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import type { Metadata } from "next";
import PageFAQ from "@/components/sections/PageFAQ";
import PageHero from "@/components/sections/PageHero";
import Testimonial from "@/components/sections/Testimonial";
import TreatmentFactsBar from "@/components/sections/TreatmentFactsBar";
import { treatmentSummaries } from "@/data/priser";

export const metadata: Metadata = {
  title: "Brystløft med Ruth Graf teknik | Genvind fylde uden implantat",
  description:
    "Ønsker du et løftet bryst med naturlig fylde i toppen? Læs om brystløft med auto-augmentation (Ruth Graf teknik) hos Brystcenter Esbjerg. Book her.",
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
        label="Brystløft"
        h1Main="Brystløft"
        h1Italic="med auto-augmentation"
        image="/images/hero_brunette_smile.jpg"
        subtitle="Et brystløft med auto-augmentation er en kirurgisk teknik til dig, der ønsker at genvinde brystets ungdommelige projektion og form uden brug af fremmedlegemer."
        cta={{ label: "Book en uforpligtende konsultation i Esbjerg", href: "#book" }}
        secondaryCta={{ label: "Brystforstørrelse med implantat", href: "/behandlinger/bfo-implantat" }}
      />

      {/* ── FACTS BAR ────────────────────────────────────────────── */}
      <TreatmentFactsBar {...treatmentSummaries["brystloeft"]} />

      {/* ── INTRO ────────────────────────────────────────────────── */}
      <section className="px-8 lg:px-16 py-20 bg-surface">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="label mb-6">{intro.label}</p>
            <h2 className="font-serif text-3xl font-semibold text-secondary mb-6 leading-snug">{intro.heading}</h2>
            <p className="font-sans text-base leading-relaxed text-secondary/75">{intro.body}</p>
          </div>
          <Testimonial quote={testimonial.quote} name={testimonial.name} treatment={testimonial.treatment} />
        </div>
      </section>

      {/* ── FEATURES ─────────────────────────────────────────────── */}
      <FeaturesSection
        items={features.map((f, i) => ({
          ...f,
          icon: [<Scissors size={22} />, <ArrowUp size={22} />, <Sparkles size={22} />][i],
        }))}
      />

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <div className="px-8 lg:px-16 py-24 bg-surface">
        <div className="max-w-3xl mx-auto">
          <PageFAQ items={faqItems} />
        </div>
      </div>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <CtaSection {...cta} />
    </>
  );
}
