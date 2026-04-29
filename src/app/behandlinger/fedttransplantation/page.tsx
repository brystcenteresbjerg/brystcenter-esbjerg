import { ArrowUp, Sparkles, Zap } from "lucide-react";
import { cta, faqItems, features, intro, introQuote } from "@/data/behandlinger/fedttransplantation";

import CtaSection from "@/components/sections/CtaSection";
import Image from "next/image";
import FeaturesSection from "@/components/sections/FeaturesSection";
import type { Metadata } from "next";
import PageFAQ from "@/components/sections/PageFAQ";
import PageHero from "@/components/sections/PageHero";
import SplitSection from "@/components/sections/SplitSection";
import TreatmentFactsBar from "@/components/sections/TreatmentFactsBar";
import { treatmentSummaries } from "@/data/priser";

export const metadata: Metadata = {
  title: "Fedttransplantation i Esbjerg | Naturlig fornyelse med eget fedt",
  description:
    "Fedttransplantation (lipofilling) til ansigt, bryster og vævsforbedring hos Brystcenter Esbjerg. Naturlige resultater med kroppens egne stamceller. Book konsultation.",
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
        label="Fedttransplantation"
        h1Main="Naturlig fornyelse"
        h1Italic="med kroppens eget væv"
        video="/videos/skin_freckles.mp4"
        subtitle="Fedttransplantation (lipofilling) genskaber volumen og forbedrer vævets kvalitet med kroppens egne stamceller - for et resultat, der er naturligt indefra og ud."
        cta={{ label: "Book konsultation", href: "#book" }}
        secondaryCta={{ label: "Brystforstørrelse med eget fedt", href: "/behandlinger/bfo-eget-fedt-lipofilling" }}
        gradient="linear-gradient(to right, rgba(250,243,238,0.50) 30%, rgba(250,243,238,0.6) 35%, rgba(250,243,238,0) 100%)"
      />

      {/* ── FACTS BAR ────────────────────────────────────────────── */}
      <TreatmentFactsBar {...treatmentSummaries["fedttransplantation"]} />

      {/* ── INTRO ────────────────────────────────────────────────── */}
      <SplitSection label={intro.label} heading={intro.heading} body={intro.body} align="center">
        <div className="grid grid-cols-2 gap-4">
          <div className="relative rounded-sm overflow-hidden aspect-square">
            <Image src="/images/leg_hands_touching.jpg" alt="" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
          </div>
          <div className="relative rounded-sm overflow-hidden aspect-square mt-8">
            <Image src="/images/skin.jpg" alt="" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
          </div>
        </div>
      </SplitSection>

      {/* ── FEATURES ─────────────────────────────────────────────── */}
      <FeaturesSection
        heading="Hvad kan vi behandle med eget fedt?"
        intro="Fedttransplantation kan anvendes bredt - fra æstetisk foryngelse til medicinsk vævsforbedring."
        headingAlign="center"
        items={features.map((f, i) => ({
          ...f,
          icon: [<Sparkles size={22} />, <ArrowUp size={22} />, <Zap size={22} />][i],
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
