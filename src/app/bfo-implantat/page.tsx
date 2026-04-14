import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Brystforstørrelse med implantat | Skræddersyet i Esbjerg",
  description:
    "Drømmer du om mere volumen? Få en brystforstørrelse med implantater hos Brystcenter Esbjerg. Vi skræddersyr løsningen til din anatomi. Book her.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Hvor lang tid holder et brystimplantat?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Moderne brystimplantater har ingen fast udløbsdato, men de fleste producenter anbefaler en vurdering efter 10-15 år. Mange kvinder beholder deres implantater i årtier uden problemer. Behovet for udskiftning opstår typisk ved kapselkontraktur, displacering eller ønske om en størrelsesændring. Hos Brystcenter Esbjerg anvender vi høj-kohæsive gel-implantater med dokumenteret holdbarhed, og vi rådgiver om langsigtet opfølgning allerede ved den første konsultation.",
      },
    },
    {
      "@type": "Question",
      name: "Kan man amme efter en brystforstørrelse?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "I de fleste tilfælde er det muligt at amme efter en brystforstørrelse med implantat. Valget af operationsteknik og implantatplacering har betydning: en submandibulær (under brystmusklen) eller dual-plane placering bevarer typisk kirtelvævet og mælkegangene intakte. Vi drøfter dine planer om eventuel fremtidig graviditet og amning under konsultationen, så vi kan tilpasse teknikken til dit liv.",
      },
    },
    {
      "@type": "Question",
      name: "Gør det ondt at få lagt implantater ind?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Indgrebet foregår i fuld narkose, så du ikke mærker noget under operationen. De første dage efterfølgende oplever de fleste ømhed og en følelse af stramhed, særligt hvis implantatet placeres under brystmusklen. Smerterne håndteres effektivt med ordineret smertestillende medicin. Hævelsen aftager gradvist over 4-6 uger, og de fleste er klar til let arbejde inden for 1-2 uger.",
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
          Brystforstørrelse med implantat
        </nav>

        <article>
          <h1 className="font-serif text-5xl font-semibold leading-tight text-secondary mb-8">
            Brystforstørrelse med implantater
          </h1>

          <h2 className="font-serif text-3xl font-medium text-secondary mt-16 mb-6">
            En &ldquo;à la carte&rdquo;-tilgang til din krop
          </h2>
          <p className="font-sans text-lg leading-relaxed text-on-background">
            Ingen to kvinder er ens – og det skal resultatet afspejle. Hos
            Brystcenter Esbjerg starter enhver brystforstørrelse med en grundig
            analyse af din anatomi, din hudkvalitet og dine ønsker. Vi bruger
            3D-simulering og målsystemer til at identificere det implantat, der
            harmonerer med din proportioner, frem for blot at opfylde en
            størrelsesbetegnelse.
          </p>

          <h2 className="font-serif text-3xl font-medium text-secondary mt-16 mb-6">
            Valg af implantat
          </h2>
          <p className="font-sans text-lg leading-relaxed text-on-background">
            Vi arbejder primært med høj-kohæsive anatomiske gel-implantater
            samt runde implantater afhængigt af ønsket form og udgangspunkt.
            Valget af overflade – glat, tekstureret eller polyuretan – har
            betydning for implantatets stabilitet og risikoen for rotation og
            displacering. Vi gennemgår fordele og ulemper ved hvert valg
            individuelt under konsultationen.
          </p>

          <h2 className="font-serif text-3xl font-medium text-secondary mt-16 mb-6">
            Placering og kirurgisk præcision
          </h2>
          <p className="font-sans text-lg leading-relaxed text-on-background">
            Implantatplacering under brystmusklen (sub-muskulær eller
            dual-plane) giver ofte et mere naturligt udseende og reducerer
            risikoen for kapselkontraktur. Incisionen placeres diskret i
            brystranden eller akslen, tilpasset din anatomi. Præcis
            kaveteforberedelse er afgørende for implantatets langsigtede
            stabilitet og det æstetiske resultat.
          </p>

          <section className="mt-20 bg-surface-container-low rounded-2xl p-10">
            <h2 className="font-serif text-2xl font-medium text-secondary mb-8">
              Hyppige spørgsmål
            </h2>

            <div className="mb-10">
              <h2 className="font-serif text-lg font-semibold text-secondary mb-3">
                Hvor lang tid holder et brystimplantat?
              </h2>
              <p className="font-sans leading-relaxed text-on-background">
                Moderne brystimplantater har ingen fast udløbsdato, men de
                fleste producenter anbefaler en vurdering efter 10-15 år. Mange
                kvinder beholder deres implantater i årtier uden problemer.
                Behovet for udskiftning opstår typisk ved kapselkontraktur,
                displacering eller ønske om en størrelsesændring. Vi rådgiver
                om langsigtet opfølgning allerede ved den første konsultation.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="font-serif text-lg font-semibold text-secondary mb-3">
                Kan man amme efter en brystforstørrelse?
              </h2>
              <p className="font-sans leading-relaxed text-on-background">
                I de fleste tilfælde er det muligt at amme efter en
                brystforstørrelse med implantat. Valget af operationsteknik og
                implantatplacering har betydning. En submandibulær placering
                bevarer typisk kirtelvævet og mælkegangene intakte. Vi drøfter
                dine planer om eventuel fremtidig graviditet og amning under
                konsultationen, så vi kan tilpasse teknikken.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-lg font-semibold text-secondary mb-3">
                Gør det ondt at få lagt implantater ind?
              </h2>
              <p className="font-sans leading-relaxed text-on-background">
                Indgrebet foregår i fuld narkose. De første dage efterfølgende
                oplever de fleste ømhed og stramhed, særligt ved placering
                under musklen. Smerterne håndteres effektivt med ordineret
                medicin. Hævelsen aftager over 4-6 uger, og de fleste er klar
                til let arbejde inden for 1-2 uger.
              </p>
            </div>
          </section>
        </article>
      </main>
    </>
  );
}
