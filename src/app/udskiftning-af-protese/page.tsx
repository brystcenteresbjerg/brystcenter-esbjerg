import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Implantatudskiftning i Esbjerg | Stabilitet med PU-protese",
  description:
    "Skal dine brystimplantater udskiftes? Hos Brystcenter Esbjerg bruger vi avancerede PU-overflader for at sikre præcis placering og stabilitet. Læs mere her.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Hvad er fordelen ved en polyuretanbelagt (PU) overflade?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Polyuretan-overfladen (PU) har en mikroporøs struktur, der fremmer vævsvækst ind i overfladen og forankrer implantatet på plads. Det reducerer markant risikoen for rotation og displacering, som er de hyppigste årsager til revisionskirurgi. PU-overfladen har desuden den laveste dokumenterede rate for kapselkontraktur blandt tilgængelige implantatoverflader. Det gør PU-implantater særligt velegnede ved revisionskirurgi, hvor kaviteten og vævskvaliteten kan være påvirket af det tidligere implantat.",
      },
    },
    {
      "@type": "Question",
      name: "Kan man skifte fra implantat til eget fedt?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja, det er muligt at fjerne eksisterende implantater og erstatte volumen med fedttransplantation (lipofilling). Resultatet afhænger af patientens tilgængelige fedtdepoter og det ønskede volumen. Det kræver typisk to eller flere behandlinger for at opnå tilstrækkeligt volumen, da fedt transplanteres i lag. For patienter, der ønsker en helt implantatfri løsning, er dette et realistisk alternativ, som vi vurderer individuelt under konsultationen.",
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="max-w-3xl mx-auto px-8 py-24">
        <nav className="mb-16 text-sm font-sans text-tertiary">
          <Link href="/" className="text-primary hover:underline">
            Brystkirurgi
          </Link>
          <span className="mx-2">›</span>
          Implantatudskiftning
        </nav>

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

          <section className="mt-20 bg-surface-container-low rounded-2xl p-10">
            <h2 className="font-serif text-2xl font-medium text-secondary mb-8">
              Hyppige spørgsmål
            </h2>

            <div className="mb-10">
              <h2 className="font-serif text-lg font-semibold text-secondary mb-3">
                Hvad er fordelen ved en polyuretanbelagt (PU) overflade?
              </h2>
              <p className="font-sans leading-relaxed text-on-background">
                PU-overfladen har en mikroporøs struktur, der fremmer
                vævsvækst og forankrer implantatet. Det reducerer risikoen for
                rotation og displacering markant og har den laveste
                dokumenterede rate for kapselkontraktur. PU-implantater er
                derfor særligt velegnede ved revisionskirurgi, hvor kaviteten
                kan være påvirket af det tidligere implantat.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-lg font-semibold text-secondary mb-3">
                Kan man skifte fra implantat til eget fedt?
              </h2>
              <p className="font-sans leading-relaxed text-on-background">
                Ja, det er muligt at fjerne implantater og erstatte volumen med
                fedttransplantation (lipofilling). Resultatet afhænger af
                tilgængelige fedtdepoter og ønsket volumen. Det kræver typisk
                to eller flere behandlinger for tilstrækkeligt volumen. For
                patienter, der ønsker en implantatfri løsning, er dette et
                realistisk alternativ, der vurderes individuelt.
              </p>
            </div>
          </section>
        </article>
      </main>
    </>
  );
}
