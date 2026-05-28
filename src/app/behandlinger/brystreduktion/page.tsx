import { Activity, HeartPulse, PenLine } from "lucide-react";
import { cta, faqItems, features, introLeft, introRight } from "@/data/behandlinger/brystreduktion";

import CtaSection from "@/components/sections/CtaSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import type { Metadata } from "next";
import PageFAQ from "@/components/sections/PageFAQ";
import PageHero from "@/components/sections/PageHero";
import TreatmentFactsBar from "@/components/sections/TreatmentFactsBar";
import { treatmentSummaries } from "@/data/priser";

export const metadata: Metadata = {
  title: "Brystreduktion i Esbjerg | Fokus på form & proportioner",
  description:
    "Få mindre bryster og bedre velvære hos Brystcenter Esbjerg. Vi anvender moderne teknikker som B-teknik for optimal form og projektion. Book konsultation.",
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
        label="Brystreduktion"
        h1Main="Brystreduktion"
        h1Italic="med fokus på form og proportioner"
        image="/images/hero_blonde_woman_looking.jpg"
        subtitle="En brystreduktion (reduktionsplastik) er et kirurgisk indgreb, der reducerer brysternes størrelse og vægt, samtidig med at form og proportioner forbedres. Hos Brystcenter Esbjerg er det en individuelt tilpasset proces, der forener medicinsk nødvendighed med æstetisk præcision."
        cta={{ label: "Book en speciallægekonsultation i Esbjerg", href: "#book" }}
        secondaryCta={{ label: "Se også brystløft", href: "/behandlinger/brystloeft" }}
      />

      {/* ── FACTS BAR ────────────────────────────────────────────── */}
      <TreatmentFactsBar {...treatmentSummaries["brystreduktion"]} />

      {/* ── INTRO ────────────────────────────────────────────────── */}
      <section className="px-8 lg:px-16 py-20 bg-surface">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="label mb-6">{introLeft.label}</p>
            <h2 className="font-serif text-3xl font-semibold text-secondary mb-6 leading-snug">{introLeft.heading}</h2>
            <p className="font-sans text-base leading-relaxed text-secondary/75 mb-5">{introLeft.body}</p>
            {introLeft.body2 && <p className="font-sans text-base leading-relaxed text-secondary/75">{introLeft.body2}</p>}
          </div>
          <div>
            <p className="label mb-6">{introRight.label}</p>
            <h2 className="font-serif text-3xl font-semibold text-secondary mb-6 leading-snug">{introRight.heading}</h2>
            <p className="font-sans text-base leading-relaxed text-secondary/75">{introRight.body}</p>
          </div>
        </div>
      </section>

      {/* ── FEATURES ─────────────────────────────────────────────── */}
      <FeaturesSection
        items={features.map((f, i) => ({
          ...f,
          icon: [<HeartPulse size={22} />, <Activity size={22} />, <PenLine size={22} />][i],
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
