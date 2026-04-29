import { Dna, Droplets, Leaf, Microscope, Sliders, Zap } from "lucide-react";
import {
  behandlingSection,
  benefits,
  cta,
  faqItems,
  features,
  fordeleSection,
  forloebetSection,
} from "@/data/behandlinger/bfo-eget-fedt-lipofilling";

import CtaSection from "@/components/sections/CtaSection";
import Image from "next/image";
import FeaturesSection from "@/components/sections/FeaturesSection";
import FeaturesWithLeadImage from "@/components/sections/FeaturesWithLeadImage";
import type { Metadata } from "next";
import PageFAQ from "@/components/sections/PageFAQ";
import PageHero from "@/components/sections/PageHero";
import SplitSection from "@/components/sections/SplitSection";
import TreatmentFactsBar from "@/components/sections/TreatmentFactsBar";
import { treatmentSummaries } from "@/data/priser";

export const metadata: Metadata = {
  title: "Brystforstørrelse med eget fedt | Regenerativ æstetik",
  description:
    "Ønsker du større bryster uden implantater? Få en naturlig brystforstørrelse med eget fedt (lipofilling) hos Brystcenter Esbjerg.",
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
        label="Brystforstørrelse / Eget fedt"
        h1Main="Brystforstørrelse"
        h1Italic="med eget fedt"
        video="/videos/woman_sunlight_two.mp4"
        subtitle="Fedttransplantation anvender kroppens eget fedt til at genskabe volumen og forbedre brystets konturer - for et resultat, der føles naturligt og harmonerer med din krops egne proportioner."
        cta={{ label: "Book konsultation", href: "#book" }}
        secondaryCta={{ label: "Implantat som alternativ", href: "/behandlinger/bfo-implantat" }}
      />

      {/* ── FACTS BAR ────────────────────────────────────────────── */}
      <TreatmentFactsBar {...treatmentSummaries["bfo-eget-fedt-lipofilling"]} />

      {/* ── BEHANDLING ───────────────────────────────────────────── */}
      <SplitSection
        label={behandlingSection.label}
        heading={behandlingSection.heading}
        body={behandlingSection.body}
        align="center"
      >
        <div className="grid grid-cols-2 gap-4">
          <div className="relative rounded-sm overflow-hidden aspect-square">
            <Image src="/images/collarbone_shoulder_hair.jpg" alt="" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
          </div>
          <div className="relative rounded-sm overflow-hidden aspect-square mt-8">
            <Image src="/images/curls_smile_brunette.jpg" alt="" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
          </div>
        </div>
      </SplitSection>

      {/* ── FORDELE ──────────────────────────────────────────────── */}
      <FeaturesSection
        label={fordeleSection.label}
        heading={fordeleSection.heading}
        intro={fordeleSection.intro}
        items={benefits.map((f, i) => ({
          ...f,
          icon: [<Leaf size={18} />, <Sliders size={18} />, <Zap size={18} />][i],
        }))}
      />

      {/* ── FEATURES ─────────────────────────────────────────────── */}
      <FeaturesWithLeadImage
        image="/images/body_breast_hand.jpg"
        items={[
          { ...features[0], icon: <Dna size={22} /> },
          { ...features[1], icon: <Microscope size={22} /> },
          { ...features[2], icon: <Droplets size={22} /> },
        ]}
      />

      {/* ── FORLØBET ─────────────────────────────────────────────── */}
      <SplitSection
        label={forloebetSection.label}
        heading={forloebetSection.heading}
        body={forloebetSection.body}
        align="center"
        background="bg-surface-container-low"
      >
        <div className="grid grid-cols-2 gap-4">
          <div className="relative rounded-sm overflow-hidden aspect-square">
            <Image src="/images/abdomen.jpg" alt="" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
          </div>
          <div className="relative rounded-sm overflow-hidden aspect-square mt-8">
            <Image src="/images/skin.jpg" alt="" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
          </div>
        </div>
      </SplitSection>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <div className="px-8 lg:px-16 py-24">
        <div className="max-w-3xl mx-auto">
          <PageFAQ items={faqItems} />
        </div>
      </div>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <CtaSection {...cta} background="bg-surface-container-low" />
    </>
  );
}
