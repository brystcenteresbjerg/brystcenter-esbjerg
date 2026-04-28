import { Asterisk, Layers, Ruler, Shapes, Users, Waves } from "lucide-react";
import { alaCarteIntro, alaCartePoints, faqItems, implantChoices } from "@/data/behandlinger/bfo-implantat";

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
      />

      {/* ── FACTS BAR ────────────────────────────────────────────── */}
      <TreatmentFactsBar {...treatmentSummaries["bfo-implantat"]} />

      {/* ── À LA CARTE ───────────────────────────────────────────── */}
      <ImageListSection
        image="/images/collarbone_hands_breasts_cover.jpg"
        quote={{
          text: "Det bedste kirurgiske resultat er det, der ser naturligt ud - som om det altid har hørt til.",
          author: "Kirurg, Troels Tei",
        }}
        label="Behandling"
        heading="En «à la carte»-tilgang til din krop"
        intro={alaCarteIntro}
        items={alaCartePoints.map((text, i) => ({
          text,
          icon: [<Asterisk size={18} />, <Waves size={18} />, <Users size={18} />][i],
        }))}
      />

      {/* ── VALG AF IMPLANTAT ────────────────────────────────────── */}
      <FeaturesSection
        label="Rådgivning"
        heading="Valg af implantat"
        intro="For at sikre det perfekte match tilbyder vi et bredt udvalg af implantater fra førende producenter. Ved forundersøgelsen gennemgår vi dine muligheder i detaljer, så du er tryg ved dit valg. Vi rådgiver dig om forskellene på:"
        items={implantChoices.map((f, i) => ({
          ...f,
          icon: [<Shapes size={22} />, <Ruler size={22} />, <Layers size={22} />][i],
        }))}
      />

      {/* ── PLACERING & KIRURGISK PRÆCISION ──────────────────────── */}
      <SplitSection
        label="Teknik"
        heading="Placering og kirurgisk præcision"
        body="Teknikken bag placeringen af implantatet er afgørende for det endelige udtryk. Afhængig af mængden af dit eget brystvæv kan implantatet placeres enten over eller under brystmusklen. Vores plastikkirurg Troels Tei benytter teknikker, der sikrer, at overgangen mellem dit eget væv og implantatet bliver så usynlig som muligt — essentielt for at opnå den naturlige harmoni, vi efterstræber."
      >
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-sm overflow-hidden aspect-square">
            <img src="/images/implants_hand_one.jpg" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-sm overflow-hidden aspect-square mt-8">
            <img src="/images/body_covering_breasts_hands.jpg" alt="" className="w-full h-full object-cover" />
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
        heading="Tag det næste skridt mod naturlig harmoni"
        body="Vi tror på, at de bedste resultater skabes gennem individuel planlægning og kirurgisk præcision. Kontakt klinikken i Esbjerg for en samtale om dine muligheder."
        ctaLabel="Bestil tid til forundersøgelse i dag"
        background="bg-surface"
      />
    </>
  );
}
