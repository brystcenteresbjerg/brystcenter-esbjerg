import { Activity, HeartPulse, PenLine } from "lucide-react";
import { faqItems, features } from "@/data/behandlinger/brystreduktion";

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
        image="/images/hero-silk.png"
        subtitle="En brystreduktion (reduktionsplastik) er et kirurgisk indgreb, der har til formål at reducere brysternes størrelse og vægt, samtidig med at brystets form og proportioner forbedres. Hos Brystcenter Esbjerg betragter vi indgrebet som en individuelt tilpasset proces, hvor vi forener medicinsk nødvendighed med æstetisk præcision."
        cta={{ label: "Book en speciallægekonsultation i Esbjerg", href: "#book" }}
        secondaryCta={{ label: "Se også brystløft", href: "/behandlinger/brystloeft" }}
      />

      {/* ── FACTS BAR ────────────────────────────────────────────── */}
      <TreatmentFactsBar {...treatmentSummaries["brystreduktion"]} />

      {/* ── INTRO ────────────────────────────────────────────────── */}
      <section className="px-8 lg:px-16 py-20 bg-surface">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="label mb-6">Teknik</p>
            <h2 className="font-serif text-3xl font-semibold text-secondary mb-6 leading-snug">
              Moderne teknikker: B-teknik (Renault)
            </h2>
            <p className="font-sans text-base leading-relaxed text-secondary/75 mb-5">
              Vi anvender veldokumenterede kirurgiske metoder for at sikre det mest harmoniske resultat. En af de mest innovative
              tilgange i vores center er den såkaldte B-teknik, oprindeligt beskrevet af Renault.
            </p>
            <p className="font-sans text-base leading-relaxed text-secondary/75">
              Denne teknik adskiller sig ved at have et særligt fokus på intern vævsomformning, hvilket optimerer brystets støtte
              og projektion. B-teknikken er særligt målrettet patienter med en øget lateral fylde - altså hvor brystet fremstår
              bredt eller er orienteret ud mod armhulen. Ved at reducere og omforme vævet i de laterale dele af brystet kan vi
              skabe en mere centreret, løftet og ungdommelig brystform.
            </p>
          </div>
          <div>
            <p className="label mb-6">Formål</p>
            <h2 className="font-serif text-3xl font-semibold text-secondary mb-6 leading-snug">
              Lindring af fysiske gener og æstetisk balance
            </h2>
            <p className="font-sans text-base leading-relaxed text-secondary/75">
              For mange kvinder er en brystreduktion en vej til en markant forbedret livskvalitet. Behandlingen handler ikke kun
              om udseende, men om at genskabe en krop i balance, hvor brysternes tyngde ikke længere begrænser din hverdag.
            </p>
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
      <CtaSection
        heading="Klar til en konsultation?"
        body="Book en uforpligtende konsultation og få en præcis vurdering af dine muligheder hos speciallæge Troels Tei."
        ctaLabel="Bestil tid til forundersøgelse i dag"
      />
    </>
  );
}
