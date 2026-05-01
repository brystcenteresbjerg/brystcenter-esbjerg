import { Asterisk, Layers, Ruler, Shapes, Users, Waves } from "lucide-react";
import {
  alaCarteIntro,
  alaCartePoints,
  alaCarteSection,
  cta,
  faqItems,
  featuresContent,
  implantChoices,
  splitContent,
} from "@/data/behandlinger/bfo-implantat";

import CtaSection from "@/components/sections/CtaSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import Image from "next/image";
import ImageListSection from "@/components/sections/ImageListSection";
import type { Metadata } from "next";
import PageFAQ from "@/components/sections/PageFAQ";
import PageHero from "@/components/sections/PageHero";
import SplitSection from "@/components/sections/SplitSection";
import TreatmentFactsBar from "@/components/sections/TreatmentFactsBar";
import { treatmentSummaries } from "@/data/priser";

export const metadata: Metadata = {
  title: "Brystforstørrelse med implantat | Skræddersyet i Esbjerg",
  description:
    "Drømmer du om mere volumen? Få en brystforstørrelse med implantater hos Brystcenter Esbjerg. Vi skræddersyr løsningen til din anatomi. Book her.",
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
        label="Brystforstørrelse / Implantat"
        h1Main="Brystforstørrelse"
        h1Italic="med implantater"
        subtitle="Vi ser det som en individuel behandling, hvor målet altid er et harmonisk og naturligt resultat, der respekterer din krops proportioner og dine personlige ønsker."
        image="/images/hero_implants_hands_one_clay.jpg"
        mobileImage="/images/implants_hands_one.jpg"
        cta={{ label: "Book en personlig konsultation i Esbjerg", href: "#book" }}
        secondaryCta={{ label: "Eget fedt som alternativ", href: "/behandlinger/bfo-eget-fedt-lipofilling" }}
        mobileGradient="linear-gradient(to top, rgba(250,243,238,0.5) 0%, rgba(250,243,238,0.4) 20%, rgba(250,243,238,0) 30%)"
      />

      {/* ── FACTS BAR ────────────────────────────────────────────── */}
      <TreatmentFactsBar {...treatmentSummaries["bfo-implantat"]} />

      {/* ── À LA CARTE ───────────────────────────────────────────── */}
      <ImageListSection
        image={alaCarteSection.image}
        quote={alaCarteSection.quote}
        label={alaCarteSection.label}
        heading={alaCarteSection.heading}
        intro={alaCarteIntro}
        items={alaCartePoints.map((text, i) => ({
          text,
          icon: [<Asterisk size={18} />, <Waves size={18} />, <Users size={18} />][i],
        }))}
      />

      {/* ── VALG AF IMPLANTAT ────────────────────────────────────── */}
      <FeaturesSection
        label={featuresContent.label}
        heading={featuresContent.heading}
        intro={featuresContent.intro}
        items={implantChoices.map((f, i) => ({
          ...f,
          icon: [<Shapes size={22} />, <Ruler size={22} />, <Layers size={22} />][i],
        }))}
      />

      {/* ── PLACERING & KIRURGISK PRÆCISION ──────────────────────── */}
      <SplitSection label={splitContent.label} heading={splitContent.heading} body={splitContent.body}>
        <div className="grid grid-cols-2 gap-4">
          <div className="relative rounded-sm overflow-hidden aspect-square">
            <Image
              src="/images/implants_hand_one.jpg"
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 50vw, 25vw"
            />
          </div>
          <div className="relative rounded-sm overflow-hidden aspect-square mt-8">
            <Image
              src="/images/body_covering_breasts_hands.jpg"
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 50vw, 25vw"
            />
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
      <CtaSection {...cta} background="bg-surface" />
    </>
  );
}
