import type { Metadata } from "next";
import Breadcrumb from "@/components/layout/Breadcrumb";
import PageFAQ from "@/components/sections/PageFAQ";

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

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="max-w-3xl mx-auto px-8 py-24">
        <Breadcrumb current="Implantatudskiftning" />

        <article>
          <h1 className="font-serif text-5xl font-semibold leading-tight text-secondary mb-8">
            Udskiftning af brystimplantater – Stabilitet og præcision
          </h1>

          <h2 className="font-serif text-3xl font-medium text-secondary mt-16 mb-6">
            Hvornår bør man få foretaget en implantatudskiftning?
          </h2>
          <p className="font-sans text-lg leading-relaxed text-on-background">
            Revisionskirurgi kan blive aktuelt af flere årsager: kapselkontraktur,
            implantatruptur, displacering, ønsket om størrelsesændring eller
            blot et ønske om at opdatere et forældet implantat. Hos Brystcenter
            Esbjerg foretager vi en grundig vurdering af dit forløb, din
            eksisterende kavitet og dine ønsker, inden vi anbefaler en specifik
            tilgang. Revisionskirurgi kræver særlig planlægning og erfaring.
          </p>

          <h2 className="font-serif text-3xl font-medium text-secondary mt-16 mb-6">
            Avancerede PU-overflader for optimal sikkerhed
          </h2>
          <p className="font-sans text-lg leading-relaxed text-on-background">
            Ved implantatudskiftning anvender vi primært polyuretan-belagte
            (PU) implantater. Denne overfladetype er særligt velegnet ved
            revisionskirurgi, fordi den biologisk forankrer sig i vævet og
            modstår displacering – et hyppigt problem ved konventionelle
            overflader i en allerede eksisterende kavitet.
          </p>

          <h2 className="font-serif text-3xl font-medium text-secondary mt-16 mb-6">
            En individuel vurdering af dit forløb
          </h2>
          <p className="font-sans text-lg leading-relaxed text-on-background">
            Ingen to revisionssager er ens. Vi lægger stor vægt på at forstå
            dit primære forløb, herunder operationsrapport, implantattype og
            eventuelle komplikationer, så vi kan planlægge revisionen med
            størst mulig forudsigelighed.
          </p>

          <h3 className="font-serif text-xl font-medium text-secondary mt-12 mb-4">
            Derfor anvender vi polyuretan (PU) overflader
          </h3>
          <p className="font-sans leading-relaxed text-on-background">
            PU-overfladen har den laveste dokumenterede rate for
            kapselkontraktur og rotation. Den mikroporøse struktur skaber en
            stabil biologisk forankring, der er særlig værdifuld i en kavitet,
            der har gennemgået fibrotisk reaktion fra det tidligere implantat.
          </p>

          <h3 className="font-serif text-xl font-medium text-secondary mt-12 mb-4">
            Korrektion af eksisterende kavitet og displacering
          </h3>
          <p className="font-sans leading-relaxed text-on-background">
            Displacering og asymmetri er hyppige årsager til revisionsønske.
            Vi korrigerer kaviteten kirurgisk og sikrer korrekt implantatposition
            ved hjælp af interne suturer og valg af det rette PU-implantat.
          </p>

          <h3 className="font-serif text-xl font-medium text-secondary mt-12 mb-4">
            Forudsigelighed ved revisionskirurgi
          </h3>
          <p className="font-sans leading-relaxed text-on-background">
            God revisionskirurgi starter med grundig planlægning. Vi
            gennemgår 3D-analyser, implantatmåling og diskuterer realistiske
            forventninger til resultatet, inden vi bestemmer den endelige plan.
          </p>

          <PageFAQ items={faqItems} />
        </article>
      </main>
    </>
  );
}
