import { Award, Leaf, Shield } from "lucide-react";
import { expertiseItems, faqItems } from "@/data/moed-os";

import Button from "@/components/ui/Button";
import FeaturesSection from "@/components/sections/FeaturesSection";
import type { Metadata } from "next";
import PageFAQ from "@/components/sections/PageFAQ";
import PageHero from "@/components/sections/PageHero";
import Testimonial from "@/components/sections/Testimonial";

export const metadata: Metadata = {
  title: "Speciallæge Troels Tei | Kirurgisk præcision og naturlig harmoni",
  description:
    "Mød Troels Tei hos Brystcenter Esbjerg. Hør om hans filosofi for naturlig harmoni og hans ekspertise inden for Ruth Graf teknik og avancerede implantater.",
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
        label="Mød din kirurg"
        h1Main="Troels Tei"
        h1Italic="Speciallæge"
        video="/videos/woman_sunlight_one.mp4"
        subtitle="Kirurgisk præcision og naturlig harmoni - brystkirurgi med kompromisløst fokus på det individuelle resultat."
        buttons={[
          { label: "Book konsultation", href: "#book" },
          { label: "Se patientrejsen", href: "/patientrejsen", variant: "outline" },
        ]}
      />

      {/* ── EN DEDIKATION ────────────────────────────────────────── */}
      <section className="px-8 lg:px-16 py-20 bg-surface">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="label mb-6">Filosofi</p>
            <h2 className="font-serif text-3xl font-semibold text-secondary mb-6 leading-snug">
              En dedikation til det personlige resultat
            </h2>
            <p className="font-sans text-base leading-relaxed text-secondary/65">
              Min tilgang til brystkirurgi er baseret på håndværksmæssig stolthed, faglige erfaringer og kompetencer samt den
              individuelle rådgivning. Jeg tror ikke på standardløsninger, da ingen bryster er ens. Vi skal respektere det
              forskellige og bruge det til at finde de små, usynlige detaljer, der gør det endelige resultat naturligt og
              harmonisk for den enkelte kvinde.
            </p>
          </div>
          <Testimonial
            quote="Jeg tror ikke på standardløsninger, da ingen bryster er ens. Vi skal respektere det forskellige og bruge det til at finde de små, usynlige detaljer, der gør det endelige resultat naturligt og harmonisk for den enkelte kvinde."
            name="Troels Tei"
            treatment="Speciallæge i plastikkirurgi"
          />
        </div>
      </section>

      {/* ── FAGLIG INTEGRITET ────────────────────────────────────── */}
      <section className="px-8 lg:px-16 py-20 bg-surface-container-low">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="label mb-6">Baggrund</p>
            <h2 className="font-serif text-3xl font-semibold text-secondary mb-6 leading-snug">
              Faglig integritet og specialisering
            </h2>
            <p className="font-sans text-base leading-relaxed text-secondary/65 mb-5">
              Jeg har mange års erfaring som speciallæge og henter inspiration fra førende klinikker i USA, Brasilien og Europa.
              Jeg arbejder efter internationale principper for skånsom kirurgi uden komplikationer, der sikrer de mest harmoniske
              resultater.
            </p>
            <p className="font-sans text-base leading-relaxed text-secondary/65">
              Jeg har specialiseret mig i teknikker som Ruth Graf og lukkede systemer til fedttransplantation (Lipografter), der
              sikrer maksimal overlevelse af fedtcellerne. For mig handler brystkirurgi om at forene høj sikkerhed med et æstetisk
              udtryk, der respekterer din naturlige anatomi.
            </p>
          </div>

          {/* ── BILLEDPLADSHOLDER ── skift src til det rigtige foto ── */}
          <div className="rounded-sm overflow-hidden aspect-3/4 lg:max-w-sm lg:ml-auto w-full">
            <img src="/images/troels_tei.png" alt="Speciallæge Troels Tei" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* ── EKSPERTISE ───────────────────────────────────────────── */}
      <FeaturesSection
        heading="Ekspertise"
        intro="Avancerede teknikker med fokus på naturlighed, holdbarhed og individuel tilpasning."
        headingAlign="center"
        background="bg-surface"
        items={expertiseItems.map((f, i) => ({
          ...f,
          icon: [<Award size={22} />, <Shield size={22} />, <Leaf size={22} />][i],
        }))}
      />

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <div className="px-8 lg:px-16 py-14 bg-surface-container-low">
        <div className="max-w-3xl mx-auto">
          <PageFAQ items={faqItems} />
        </div>
      </div>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section id="book" className="px-8 lg:px-16 py-24 bg-surface">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-serif text-4xl font-semibold text-secondary mb-6">Book en konsultation med Troels Tei</h2>
          <p className="font-sans text-base leading-relaxed mb-10 text-secondary/60">
            Tag det første skridt mod dit ønskede resultat. Vi besvarer alle dine spørgsmål og gennemgår dine muligheder.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/booking">Book en konsultation</Button>
            <Button href="tel:+4576185656" variant="outline">
              Ring til os: +45 76 18 56 56
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
