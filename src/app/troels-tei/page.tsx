import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Speciallæge Troels Tei | Ekspert i regenerativ brystkirurgi",
  description:
    "Mød Troels Tei hos Brystcenter Esbjerg. Hør om hans filosofi for naturlig harmoni og hans ekspertise inden for Ruth Graf teknik og avancerede implantater.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Hvad er Troels Teis specialisering?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Troels Tei er speciallæge i plastikkirurgi med særlig ekspertise i regenerativ brystkirurgi. Han arbejder med avancerede teknikker som Ruth Graf vertikal mastopeksi med auto-augmentation, fedttransplantation (lipofilling) og PU-belagte implantater ved revisionskirurgi. Hans filosofi tager udgangspunkt i naturlig harmoni: resultater, der ser ud som om de altid har hørt til kroppen. Troels Tei er tilknyttet Brystcenter Esbjerg, hvor han tilbyder personlige konsultationer.",
      },
    },
    {
      "@type": "Question",
      name: "Hvilke teknikker anvender Troels Tei?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Troels Tei anvender et bredt repertoire af brystkirurgiske teknikker tilpasset den individuelle patients anatomi og ønsker. Det inkluderer Ruth Graf vertikal mastopeksi, lipofilling med stammecelleanrigede fedttransplantater, brystforstørrelse med anatomiske og runde høj-kohæsive implantater, hybrid-teknikker samt revisionskirurgi med PU-overflader. Fælles for alle indgreb er en grundig præoperativ analyse og et fokus på langsigtet æstetisk resultat.",
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
          Troels Tei
        </nav>

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

          <section className="mt-20 bg-surface-container-low rounded-2xl p-10">
            <h2 className="font-serif text-2xl font-medium text-secondary mb-8">
              Hyppige spørgsmål
            </h2>

            <div className="mb-10">
              <h2 className="font-serif text-lg font-semibold text-secondary mb-3">
                Hvad er Troels Teis specialisering?
              </h2>
              <p className="font-sans leading-relaxed text-on-background">
                Troels Tei er speciallæge i plastikkirurgi med særlig
                ekspertise i regenerativ brystkirurgi. Han arbejder med Ruth
                Graf vertikal mastopeksi, fedttransplantation og PU-belagte
                implantater ved revisionskirurgi. Hans filosofi tager
                udgangspunkt i naturlig harmoni: resultater, der ser ud som om
                de altid har hørt til kroppen.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-lg font-semibold text-secondary mb-3">
                Hvilke teknikker anvender Troels Tei?
              </h2>
              <p className="font-sans leading-relaxed text-on-background">
                Troels Tei anvender et bredt repertoire tilpasset den
                individuelle patients anatomi: Ruth Graf mastopeksi, lipofilling
                med stamcellerig fedtvæv, brystforstørrelse med høj-kohæsive
                implantater, hybrid-teknikker og revisionskirurgi med
                PU-overflader. Fælles er en grundig præoperativ analyse og
                fokus på langsigtet resultat.
              </p>
            </div>
          </section>
        </article>
      </main>
    </>
  );
}
