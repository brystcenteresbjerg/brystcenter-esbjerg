import Button from "@/components/ui/Button";
import type { Metadata } from "next";
import PageFAQ from "@/components/sections/PageFAQ";
import PageHero from "@/components/sections/PageHero";

export const metadata: Metadata = {
  title: "Implantatudskiftning i Esbjerg | Stabilitet med PU-protese",
  description:
    "Skal dine brystimplantater udskiftes? Hos Brystcenter Esbjerg bruger vi avancerede PU-overflader for at sikre præcis placering og stabilitet. Læs mere her.",
};

const faqItems = [
  {
    q: "Hvad er fordelen ved en polyuretanbelagt (PU) overflade?",
    a: "Polyuretan-overfladen (PU) har en mikroporøs struktur, der fremmer vævsvækst ind i overfladen og forankrer implantatet på plads. Det reducerer markant risikoen for rotation og displacering, som er de hyppigste årsager til revisionskirurgi. PU-overfladen har desuden den laveste dokumenterede rate for kapselkontraktur blandt tilgængelige implantatoverflader. Det gør PU-implantater særligt velegnede ved revisionskirurgi, hvor kaviteten og vævskvaliteten kan være påvirket af det tidligere implantat.",
  },
  {
    q: "Kan man skifte fra implantat til eget fedt?",
    a: "Ja, det er muligt at fjerne eksisterende implantater og erstatte volumen med fedttransplantation (lipofilling). Resultatet afhænger af patientens tilgængelige fedtdepoter og det ønskede volumen. Det kræver typisk to eller flere behandlinger for at opnå tilstrækkeligt volumen, da fedt transplanteres i lag. For patienter, der ønsker en helt implantatfri løsning, er dette et realistisk alternativ, som vi vurderer individuelt under konsultationen.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

const features = [
  {
    label: "PU-overflader",
    text: "PU-overfladen har den laveste dokumenterede rate for kapselkontraktur og rotation. Den mikroporøse struktur skaber en stabil biologisk forankring — særlig værdifuld i en kavitet, der har gennemgået fibrotisk reaktion.",
  },
  {
    label: "Korrektion af kavitet",
    text: "Displacering og asymmetri er hyppige årsager til revisionsønske. Vi korrigerer kaviteten kirurgisk og sikrer korrekt implantatposition ved hjælp af interne suturer og valg af det rette PU-implantat.",
  },
  {
    label: "Forudsigelighed",
    text: "God revisionskirurgi starter med grundig planlægning. Vi gennemgår 3D-analyser, implantatmåling og diskuterer realistiske forventninger til resultatet, inden vi bestemmer den endelige plan.",
  },
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <PageHero
        label="Revisionskirurgi"
        h1Main="Implantatudskiftning"
        h1Italic="med præcision"
        image="/images/hero-silk.png"
        subtitle="Revisionskirurgi med avancerede PU-overflader for præcis placering, minimal risiko for kapselkontraktur og langvarig stabilitet."
        buttons={[
          { label: "Book konsultation", href: "#book" },
          { label: "Om brystimplantater", href: "/behandlinger/bfo-implantat", variant: "outline" },
        ]}
      />

      {/* ── INTRO ────────────────────────────────────────────────── */}
      <section className="px-8 lg:px-16 py-20 bg-surface">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="font-sans text-xs uppercase tracking-[0.15em] mb-6 text-secondary/40">Hvornår</p>
            <h2 className="font-serif text-3xl font-semibold text-secondary mb-6 leading-snug">
              Hvornår bør man få foretaget en implantatudskiftning?
            </h2>
            <p className="font-sans text-base leading-relaxed text-secondary/65">
              Revisionskirurgi kan blive aktuelt af flere årsager: kapselkontraktur, implantatruptur, displacering, ønske om
              størrelsesændring eller blot et ønske om at opdatere et forældet implantat. Hos Brystcenter Esbjerg foretager vi en
              grundig vurdering af dit forløb, din eksisterende kavitet og dine ønsker, inden vi anbefaler en specifik tilgang.
            </p>
          </div>
          <div>
            <p className="font-sans text-xs uppercase tracking-[0.15em] mb-6 text-secondary/40">Tilgang</p>
            <h2 className="font-serif text-3xl font-semibold text-secondary mb-6 leading-snug">
              En individuel vurdering af dit forløb
            </h2>
            <p className="font-sans text-base leading-relaxed text-secondary/65">
              Ingen to revisionssager er ens. Vi lægger stor vægt på at forstå dit primære forløb, herunder operationsrapport,
              implantattype og eventuelle komplikationer, så vi kan planlægge revisionen med størst mulig forudsigelighed.
            </p>
          </div>
        </div>
      </section>

      {/* ── FEATURES ─────────────────────────────────────────────── */}
      <section className="px-8 lg:px-16 py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-serif text-4xl font-semibold text-secondary mb-4">Avancerede PU-overflader</h2>
            <p className="font-sans text-base max-w-md mx-auto text-secondary/60">
              Tre grunde til at PU-implantater er vores foretrukne valg ved revisionskirurgi.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {features.map((item) => (
              <div key={item.label} className="bg-white px-10 py-10 rounded-2xl">
                <h3 className="font-sans text-sm font-semibold uppercase tracking-widest text-secondary mb-3">{item.label}</h3>
                <p className="font-sans text-sm leading-relaxed text-secondary/65">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <div className="px-8 lg:px-16 py-24 bg-surface">
        <div className="max-w-3xl mx-auto">
          <PageFAQ items={faqItems} />
        </div>
      </div>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section id="book" className="px-8 lg:px-16 py-24 bg-surface-container-low">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-serif text-4xl font-semibold text-secondary mb-6">Klar til at tage det første skridt?</h2>
          <p className="font-sans text-base leading-relaxed mb-10 text-secondary/60">
            Book en uforpligtende konsultation og få en præcis vurdering af dine muligheder hos speciallæge Troels Tei.
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
