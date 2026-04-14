import type { Metadata } from "next";
import Breadcrumb from "@/components/layout/Breadcrumb";
import PageFAQ from "@/components/sections/PageFAQ";

export const metadata: Metadata = {
  title: "Brystreduktion i Esbjerg | Fokus på form & proportioner",
  description:
    "Få mindre bryster og bedre velvære hos Brystcenter Esbjerg. Vi anvender moderne teknikker som B-teknik for optimal form og projektion. Book konsultation.",
};

const faqItems = [
  {
    q: "Hvor meget vægt kan man fjerne ved en brystreduktion?",
    a: "Mængden af væv, der fjernes, afhænger af udgangspunktet og det ønskede resultat. Det er ikke ualmindeligt at fjerne 300-800 gram per side, og i tilfælde af makromasti kan der fjernes betydeligt mere. Vi prioriterer altid æstetisk balance og proportioner frem for et specifikt antal gram. Planlægningen sker individuelt baseret på din krop, din livsstil og dine ønsker om det endelige resultat.",
  },
  {
    q: "Efterlader moderne teknikker som B-teknik færre ar?",
    a: "B-teknikken (Renault) er designet til at optimere form og projektion med minimal ardannelse. Arlinjen følger areola-kanten, en kort vertikal linje og en diskret horisontal ar i brystranden. Sammenlignet med ældre teknikker er aret kortere og placeret mere skjult. Ardannelse afhænger desuden af individuelle faktorer som heling, hudtype og genetik. Vi rådgiver om arpleje fra dag ét for at sikre det bedste resultat.",
  },
  {
    q: "Kan man amme efter en brystreduktion?",
    a: "Ammemuligheder efter brystreduktion afhænger af den anvendte teknik og mængden af fjernet væv. Moderne teknikker som B-teknikken søger at bevare forbindelsen mellem brystvorte og kirtelvæv, hvilket øger sandsynligheden for at kunne amme. Det kan dog ikke garanteres. Kvinder, der planlægger graviditet og amning, bør drøfte dette med speciallægen inden operationen, da tidspunktet for indgrebet kan tilpasses.",
  },
  {
    q: "Hvornår kan man genoptage træning og arbejde?",
    a: "De fleste kan vende tilbage til stillesiddende arbejde efter 1-2 uger. Fysisk krævende arbejde og sport frarådes i 4-6 uger for at sikre en god heling. Øvre kropsøvelser og løb bør undgås i mindst 6 uger. Vi udleverer detaljerede retningslinjer for genoptræning og kontrollerer helingen løbende ved de planlagte opfølgningsbesøg.",
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
        <Breadcrumb current="Brystreduktion" />

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
            Armønsteret tilpasses din anatomi og udgangspunktet for
            operationen. Vi tegner og diskuterer planlægningen i stående
            stilling forud for operationen, så du præcist ved, hvad du kan
            forvente.
          </p>

          <PageFAQ items={faqItems} />
        </article>
      </main>
    </>
  );
}
