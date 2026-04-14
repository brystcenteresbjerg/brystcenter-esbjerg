import type { Metadata } from "next";
import Breadcrumb from "@/components/layout/Breadcrumb";
import PageFAQ from "@/components/sections/PageFAQ";

export const metadata: Metadata = {
  title: "Speciallæge Troels Tei | Ekspert i regenerativ brystkirurgi",
  description:
    "Mød Troels Tei hos Brystcenter Esbjerg. Hør om hans filosofi for naturlig harmoni og hans ekspertise inden for Ruth Graf teknik og avancerede implantater.",
};

const faqItems = [
  {
    q: "Hvad er Troels Teis specialisering?",
    a: "Troels Tei er speciallæge i plastikkirurgi med særlig ekspertise i regenerativ brystkirurgi. Han arbejder med avancerede teknikker som Ruth Graf vertikal mastopeksi med auto-augmentation, fedttransplantation (lipofilling) og PU-belagte implantater ved revisionskirurgi. Hans filosofi tager udgangspunkt i naturlig harmoni: resultater, der ser ud som om de altid har hørt til kroppen. Troels Tei er tilknyttet Brystcenter Esbjerg, hvor han tilbyder personlige konsultationer.",
  },
  {
    q: "Hvilke teknikker anvender Troels Tei?",
    a: "Troels Tei anvender et bredt repertoire af brystkirurgiske teknikker tilpasset den individuelle patients anatomi og ønsker. Det inkluderer Ruth Graf vertikal mastopeksi, lipofilling med stammecelleanrigede fedttransplantater, brystforstørrelse med anatomiske og runde høj-kohæsive implantater, hybrid-teknikker samt revisionskirurgi med PU-overflader. Fælles for alle indgreb er en grundig præoperativ analyse og et fokus på langsigtet æstetisk resultat.",
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
        <Breadcrumb current="Troels Tei" />

        <article>
          <h1 className="font-serif text-5xl font-semibold leading-tight text-secondary mb-8">
            Troels Tei – Speciallæge i regenerativ brystkirurgi
          </h1>

          <h2 className="font-serif text-3xl font-medium text-secondary mt-16 mb-6">
            En filosofi om naturlig harmoni
          </h2>
          <p className="font-sans text-lg leading-relaxed text-on-background">
            {/* Placeholder – erstattes med Troels Teis egne ord om sin filosofi */}
            Troels Tei arbejder ud fra én grundlæggende overbevisning: det
            bedste kirurgiske resultat er det, der ser naturligt ud – som om
            det altid har hørt til. Hans tilgang kombinerer klinisk præcision
            med en dyb forståelse for kroppens proportioner og de biologiske
            processer, der sikrer et holdbart og harmonisk resultat.
          </p>

          <h2 className="font-serif text-3xl font-medium text-secondary mt-16 mb-6">
            Ekspertise inden for avancerede teknikker
          </h2>
          <p className="font-sans text-lg leading-relaxed text-on-background">
            Troels Tei er specialiseret i regenerativ brystkirurgi, herunder
            Ruth Graf vertikal mastopeksi, lipofilling med stamcellerigt
            fedtvæv og revisionskirurgi med PU-belagte implantater. Han holder
            sig løbende opdateret via internationale konferencer og
            samarbejder med ledende europæiske plastikkirurger.
          </p>

          <h2 className="font-serif text-3xl font-medium text-secondary mt-16 mb-6">
            Uddannelse og faglig baggrund
          </h2>
          <p className="font-sans text-lg leading-relaxed text-on-background">
            {/* Placeholder – erstattes med CV og uddannelsesoplysninger */}
            Troels Tei er uddannet speciallæge i plastik- og
            rekonstruktionskirurgi og har bred klinisk erfaring fra både
            offentlige og private sygehuse. Han er tilknyttet Brystcenter
            Esbjerg som primær opererende speciallæge.
          </p>

          <h3 className="font-serif text-xl font-medium text-secondary mt-12 mb-4">
            Ruth Graf-teknikken
          </h3>
          <p className="font-sans leading-relaxed text-on-background">
            Troels Tei er en af de få speciallæger i Danmark, der mestrer Ruth
            Graf vertikal mastopeksi med auto-augmentation – en teknik, der
            giver brystløft og volumen uden implantat ved at omplacere
            patientens eget kirtelvæv.
          </p>

          <h3 className="font-serif text-xl font-medium text-secondary mt-12 mb-4">
            PU-overflader og avancerede implantater
          </h3>
          <p className="font-sans leading-relaxed text-on-background">
            Ved primær brystforstørrelse og revisionskirurgi anvender Troels Tei
            polyuretan-belagte implantater, der dokumenteret reducerer risikoen
            for kapselkontraktur og displacering. Valget af implantat er altid
            individuelt og baseret på en systematisk anatomisk analyse.
          </p>

          <h3 className="font-serif text-xl font-medium text-secondary mt-12 mb-4">
            Regenerativ æstetik og fedttransplantation
          </h3>
          <p className="font-sans leading-relaxed text-on-background">
            Lipofilling er et centralt element i Troels Teis arbejde.
            Stamcelleanrigede fedttransplantater bruges til brystforstørrelse,
            formkorrektion og som supplement til implantatbaserede indgreb for
            at opnå et naturligt, blødt overgangsresultat.
          </p>

          <PageFAQ items={faqItems} />
        </article>
      </main>
    </>
  );
}
