import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Brystreduktion i Esbjerg | Fokus på form & proportioner",
  description:
    "Få mindre bryster og bedre velvære hos Brystcenter Esbjerg. Vi anvender moderne teknikker som B-teknik for optimal form og projektion. Book konsultation.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Hvor meget vægt kan man fjerne ved en brystreduktion?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mængden af væv, der fjernes, afhænger af udgangspunktet og det ønskede resultat. Det er ikke ualmindeligt at fjerne 300-800 gram per side, og i tilfælde af makromasti kan der fjernes betydeligt mere. Vi prioriterer altid æstetisk balance og proportioner frem for et specifikt antal gram. Planlægningen sker individuelt baseret på din krop, din livsstil og dine ønsker om det endelige resultat.",
      },
    },
    {
      "@type": "Question",
      name: "Efterlader moderne teknikker som B-teknik færre ar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "B-teknikken (Renault) er designet til at optimere form og projektion med minimal ardannelse. Arlinjen følger areola-kanten, en kort vertikal linje og en diskret horisontal ar i brystranden. Sammenlignet med ældre teknikker er aret kortere og placeret mere skjult. Ardannelse afhænger desuden af individuelle faktorer som heling, hudtype og genetik. Vi rådgiver om arpleje fra dag ét for at sikre det bedste resultat.",
      },
    },
    {
      "@type": "Question",
      name: "Kan man amme efter en brystreduktion?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ammemuligheder efter brystreduktion afhænger af den anvendte teknik og mængden af fjernet væv. Moderne teknikker som B-teknikken søger at bevare forbindelsen mellem brystvorte og kirtelvæv, hvilket øger sandsynligheden for at kunne amme. Det kan dog ikke garanteres. Kvinder, der planlægger graviditet og amning, bør drøfte dette med speciallægen inden operationen, da tidspunktet for indgrebet kan tilpasses.",
      },
    },
    {
      "@type": "Question",
      name: "Hvornår kan man genoptage træning og arbejde?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "De fleste kan vende tilbage til stillesiddende arbejde efter 1-2 uger. Fysisk krævende arbejde og sport frarådes i 4-6 uger for at sikre en god heling. Øvre kropsøvelser og løb bør undgås i mindst 6 uger. Vi udleverer detaljerede retningslinjer for genoptræning og kontrollerer helingen løbende ved de planlagte opfølgningsbesøg.",
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
          Brystreduktion
        </nav>

        <article>
          <h1 className="font-serif text-5xl font-semibold leading-tight text-secondary mb-8">
            Brystreduktion med fokus på form og proportioner
          </h1>

          <h2 className="font-serif text-3xl font-medium text-secondary mt-16 mb-6">
            Moderne teknikker: B-teknik (Renault)
          </h2>
          <p className="font-sans text-lg leading-relaxed text-on-background">
            B-teknikken er en avanceret reductions- og formgivningsteknik
            udviklet af den franske plastikkirurg Renault. Teknikken er kendetegnet
            ved sin evne til at give brystet en naturlig, fremspringende form og
            god projektion, selv efter fjernelse af store mængder væv. Hos
            Brystcenter Esbjerg anvender vi B-teknikken som standard ved
            brystreduktioner for at sikre det bedst mulige æstetiske resultat.
          </p>

          <h2 className="font-serif text-3xl font-medium text-secondary mt-16 mb-6">
            Lindring af fysiske gener og æstetisk balance
          </h2>
          <p className="font-sans text-lg leading-relaxed text-on-background">
            Store bryster kan føre til kroniske smerter, nedsat livskvalitet og
            begrænsninger i hverdagen. En brystreduktion er ikke blot et
            æstetisk indgreb – for mange patienter er det en medicinsk
            nødvendighed. Vi behandler helhedsorienteret og kombinerer lindring
            af fysiske symptomer med et æstetisk resultat i harmoni med resten
            af kroppen.
          </p>

          <h3 className="font-serif text-xl font-medium text-secondary mt-12 mb-4">
            Lindring af nakke- og rygsmerter
          </h3>
          <p className="font-sans leading-relaxed text-on-background">
            Tyngden af store bryster belaster nakke, skuldre og ryg og kan
            forårsage kroniske spændinger og postural ubalance. De fleste
            patienter oplever en markant lindring af disse symptomer allerede i
            de første uger efter operationen.
          </p>

          <h3 className="font-serif text-xl font-medium text-secondary mt-12 mb-4">
            Bevarelse af følesans og blodforsyning
          </h3>
          <p className="font-sans leading-relaxed text-on-background">
            B-teknikken bevarer en robust blodforsyning og nerveforsyning til
            brystvorte og areola, hvilket mindsker risikoen for nedsat
            følsomhed og understøtter en god heling.
          </p>

          <h3 className="font-serif text-xl font-medium text-secondary mt-12 mb-4">
            Individuel planlægning af dit armønster
          </h3>
          <p className="font-sans leading-relaxed text-on-background">
            Armønsteret tilpasses din anatomii og udgangspunktet for
            operationen. Vi tegner og diskuterer planlægningen i stående
            stilling forud for operationen, så du præcist ved, hvad du kan
            forvente.
          </p>

          <section className="mt-20 bg-surface-container-low rounded-2xl p-10">
            <h2 className="font-serif text-2xl font-medium text-secondary mb-8">
              Hyppige spørgsmål
            </h2>

            <div className="mb-10">
              <h2 className="font-serif text-lg font-semibold text-secondary mb-3">
                Hvor meget vægt kan man fjerne ved en brystreduktion?
              </h2>
              <p className="font-sans leading-relaxed text-on-background">
                Mængden af fjernet væv afhænger af udgangspunktet og det
                ønskede resultat. Det er ikke ualmindeligt at fjerne 300-800
                gram per side, og ved makromasti kan der fjernes betydeligt
                mere. Vi prioriterer æstetisk balance og proportioner frem for
                et specifikt antal gram og planlægger individuelt baseret på
                din krop og dine ønsker.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="font-serif text-lg font-semibold text-secondary mb-3">
                Efterlader moderne teknikker som B-teknik færre ar?
              </h2>
              <p className="font-sans leading-relaxed text-on-background">
                B-teknikken er designet til at optimere form og projektion med
                minimal ardannelse. Arlinjen er kortere og mere skjult end ved
                ældre teknikker. Ardannelse afhænger desuden af individuelle
                faktorer som heling, hudtype og genetik. Vi rådgiver om arpleje
                fra dag ét.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="font-serif text-lg font-semibold text-secondary mb-3">
                Kan man amme efter en brystreduktion?
              </h2>
              <p className="font-sans leading-relaxed text-on-background">
                Ammemuligheder afhænger af teknik og mængden af fjernet væv.
                B-teknikken søger at bevare forbindelsen mellem brystvorte og
                kirtelvæv, men amning kan ikke garanteres. Kvinder, der
                planlægger graviditet og amning, bør drøfte dette inden
                operationen, da tidspunktet for indgrebet kan tilpasses.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-lg font-semibold text-secondary mb-3">
                Hvornår kan man genoptage træning og arbejde?
              </h2>
              <p className="font-sans leading-relaxed text-on-background">
                Stillesiddende arbejde er muligt efter 1-2 uger. Fysisk
                krævende arbejde og sport frarådes i 4-6 uger. Øvre
                kropsøvelser og løb bør undgås i mindst 6 uger. Vi udleverer
                detaljerede retningslinjer og kontrollerer helingen ved
                planlagte opfølgningsbesøg.
              </p>
            </div>
          </section>
        </article>
      </main>
    </>
  );
}
