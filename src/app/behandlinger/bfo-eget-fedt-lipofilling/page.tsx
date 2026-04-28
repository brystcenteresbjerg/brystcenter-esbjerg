import { Dna, Droplets, Leaf, Microscope, Sliders, Zap } from "lucide-react";
import { benefits, benefitsIntro, faqItems, features } from "@/data/behandlinger/bfo-eget-fedt-lipofilling";

import CtaSection from "@/components/sections/CtaSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import ImageListSection from "@/components/sections/ImageListSection";
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
        label="Behandling"
        heading="Regenerativ æstetik: Mere end blot volumen"
        body="Den moderne tilgang til brystforstørrelse med eget fedt bygger på omfattende international forskning og metoder perfektioneret af specialister som Andrzej Piatkowski og Roger Khouri. Hos Brystcenter Esbjerg ser vi ikke blot behandlingen som en volumenforøgelse, men også som regenerativ æstetik, hvor vi arbejder med kroppens biologiske byggesten for at optimere både form og vævskvalitet."
        align="center"
      >
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-sm overflow-hidden aspect-square">
            <img src="/images/collarbone_shoulder_hair.jpg" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-sm overflow-hidden aspect-square mt-8">
            <img src="/images/curls_smile_brunette.jpg" alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </SplitSection>

      {/* ── FORDELE ──────────────────────────────────────────────── */}
      <ImageListSection
        image="/images/body_breast_hand.jpg"
        label="Fordele"
        heading="Fordele ved brystforstørrelse uden implantat"
        intro={benefitsIntro}
        items={benefits.map((text, i) => ({
          text,
          icon: [<Leaf size={18} />, <Sliders size={18} />, <Zap size={18} />][i],
        }))}
      />

      {/* ── FEATURES ─────────────────────────────────────────────── */}
      <FeaturesSection
        items={features.map((f, i) => ({
          ...f,
          icon: [<Dna size={22} />, <Microscope size={22} />, <Droplets size={22} />][i],
        }))}
      />

      {/* ── FORLØBET ─────────────────────────────────────────────── */}
      <SplitSection
        label="Forløbet"
        heading="Hvordan foregår en brystforstørrelse med lipofilling?"
        body="Processen kræver høj teknisk præcision for at sikre, at de transplanterede celler integreres optimalt i brystvævet. Da fedttransplantation er afhængig af biologiske forhold, vurderes det endelige resultat efter nogle måneder, når kroppen har optaget en del af det transplanterede væv og stabiliseret den nye volumen."
        align="center"
      >
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-sm overflow-hidden aspect-square">
            <img src="/images/abdomen.jpg" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-sm overflow-hidden aspect-square mt-8">
            <img src="/images/skin.jpg" alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </SplitSection>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <div className="px-8 lg:px-16 py-24 bg-surface-container-low">
        <div className="max-w-3xl mx-auto">
          <PageFAQ items={faqItems} />
        </div>
      </div>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <CtaSection
        heading="Overvejer du brystforstørrelse med eget fedt?"
        body="Hos Brystcenter Esbjerg prioriterer vi en grundig forundersøgelse, hvor vi gennemgår dine muligheder og forventninger til resultatet."
        ctaLabel="Bestil tid til forundersøgelse i dag"
        background="bg-surface"
      />
    </>
  );
}
