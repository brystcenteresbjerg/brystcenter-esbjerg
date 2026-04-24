import { Dna, Droplets, Microscope } from "lucide-react";
import { benefits, faqItems, features } from "@/data/behandlinger/bfo-eget-fedt-lipofilling";

import Button from "@/components/ui/Button";
import FeaturesSection from "@/components/sections/FeaturesSection";
import type { Metadata } from "next";
import PageFAQ from "@/components/sections/PageFAQ";
import PageHero from "@/components/sections/PageHero";
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
        image="/images/hero-silk.png"
        subtitle="Fedttransplantation anvender kroppens eget fedt til at genskabe volumen og forbedre brystets konturer - for et resultat, der føles naturligt og harmonerer med din krops egne proportioner."
        buttons={[
          { label: "Book konsultation", href: "#book" },
          { label: "Implantat som alternativ", href: "/behandlinger/bfo-implantat", variant: "outline" },
        ]}
      />

      {/* ── FACTS BAR ────────────────────────────────────────────── */}
      <TreatmentFactsBar {...treatmentSummaries["bfo-eget-fedt-lipofilling"]} />

      {/* ── INTRO ────────────────────────────────────────────────── */}
      <section className="px-8 lg:px-16 py-20 bg-surface">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="label mb-6">Behandling</p>
            <h2 className="font-serif text-3xl font-semibold text-secondary mb-6 leading-snug">
              Regenerativ æstetik: Mere end blot volumen
            </h2>
            <p className="font-sans text-base leading-relaxed text-secondary/65">
              Den moderne tilgang til brystforstørrelse med eget fedt bygger på omfattende international forskning og metoder
              perfektioneret af specialister som Andrzej Piatkowski og Roger Khouri. Hos Brystcenter Esbjerg ser vi ikke blot
              behandlingen som en volumenforøgelse, men også som regenerativ æstetik, hvor vi arbejder med kroppens biologiske
              byggesten for at optimere både form og vævskvalitet.
            </p>
          </div>
          <div>
            <p className="label mb-6">Fordele</p>
            <h2 className="font-serif text-3xl font-semibold text-secondary mb-6 leading-snug">
              Fordele ved brystforstørrelse uden implantat
            </h2>
            <p className="font-sans text-sm leading-relaxed text-secondary/65 mb-5">
              Metoden er særligt fordelagtig for dig, der:
            </p>
            <ul className="space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 font-sans text-sm leading-relaxed text-secondary/65">
                  <span className="text-primary mt-0.5 shrink-0">-</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── PROCEDURE ────────────────────────────────────────────── */}
      <section className="px-8 lg:px-16 py-20 bg-surface-container-low">
        <div className="max-w-3xl mx-auto">
          <p className="label mb-6">Forløbet</p>
          <h2 className="font-serif text-3xl font-semibold text-secondary mb-6 leading-snug">
            Hvordan foregår en brystforstørrelse med lipofilling?
          </h2>
          <p className="font-sans text-base leading-relaxed text-secondary/65">
            Processen kræver høj teknisk præcision for at sikre, at de transplanterede celler integreres optimalt i brystvævet. Da
            fedttransplantation er afhængig af biologiske forhold, vurderes det endelige resultat efter nogle måneder, når kroppen
            har optaget en del af det transplanterede væv og stabiliseret den nye volumen.
          </p>
        </div>
      </section>

      {/* ── FEATURES ─────────────────────────────────────────────── */}
      <FeaturesSection
        background="bg-surface"
        cardBackground="bg-surface-container-low"
        items={features.map((f, i) => ({
          ...f,
          icon: [<Dna size={22} />, <Microscope size={22} />, <Droplets size={22} />][i],
        }))}
      />

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <div className="px-8 lg:px-16 py-24 bg-surface-container-low">
        <div className="max-w-3xl mx-auto">
          <PageFAQ items={faqItems} />
        </div>
      </div>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section id="book" className="px-8 lg:px-16 py-24 bg-surface">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-serif text-4xl font-semibold text-secondary mb-6">Overvejer du brystforstørrelse med eget fedt?</h2>
          <p className="font-sans text-base leading-relaxed mb-10 text-secondary/60">
            Hos Brystcenter Esbjerg prioriterer vi en grundig forundersøgelse, hvor vi gennemgår dine muligheder og forventninger
            til resultatet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/booking">Bestil tid til forundersøgelse i dag</Button>
            <Button href="tel:+4576185656" variant="outline">
              Ring til os: +45 76 18 56 56
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
