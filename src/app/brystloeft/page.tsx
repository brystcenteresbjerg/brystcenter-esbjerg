import type { Metadata } from "next";
import Breadcrumb from "@/components/layout/Breadcrumb";
import PageFAQ from "@/components/sections/PageFAQ";

export const metadata: Metadata = {
  title: "Brystløft i Esbjerg | Naturlig form med Ruth Graf teknik",
  description:
    "Få et naturligt brystløft hos Brystcenter Esbjerg. Vi anvender Ruth Graf-teknikken til auto-augmentation, der giver fylde uden implantater. Book tid i dag.",
};

const faqItems = [
  {
    q: "Hvem er egnet til et vertikalt brystløft?",
    a: "Et vertikalt brystløft er velegnet til kvinder med moderate til svære grader af brystptose (hængen), som ønsker et løft og gerne mere fylde – uden at anvende implantat. Det er særligt relevant efter graviditet, amning eller vægttab, hvor brystet har mistet volumen og form. Forudsætningen er tilstrækkeligt brystkirtelvæv til at skabe auto-augmentation. Under konsultationen vurderer vi din anatomi og afklarer, om teknikken er den rette løsning for dig.",
  },
  {
    q: "Hvad er forskellen på et klassisk løft og Ruth Graf teknikken?",
    a: "Et klassisk brystløft fjerner hud og løfter brystkirtlen op, men efterlader brystet fladere. Ruth Graf-teknikken (vertikal mastopeksi med auto-augmentation) omplacerer derimod kirtelvævet indvendigt, så det fungerer som en intern fylde. Det giver volumen i den øvre pol og en mere rund, ungdommelig form – uden implantat. Arlinjen er kortere: kun en vertikal ar og en areola-ar, ingen horisontal ar i brystranden.",
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
        <Breadcrumb current="Brystløft" />

        <article>
          <h1 className="font-serif text-5xl font-semibold leading-tight text-secondary mb-8">
            Brystløft med auto-augmentation (Ruth Graf teknik)
          </h1>

          <h2 className="font-serif text-3xl font-medium text-secondary mt-16 mb-6">
            Genvind din naturlige fylde uden implantater
          </h2>
          <p className="font-sans text-lg leading-relaxed text-on-background">
            Ruth Graf-teknikken er en avanceret form for vertikal mastopeksi,
            der omplacerer patientens eget brystkirtelvæv for at skabe volumen i
            den øvre pol. Resultatet er et løftet, fyldigere bryst med en
            naturlig fremtræden – helt uden fremmedlegemer. Teknikken er
            særligt velegnet til kvinder, der ønsker en permanent forbedring
            uden de vedligeholdelseskrav, der følger med implantater.
          </p>

          <h3 className="font-serif text-xl font-medium text-secondary mt-12 mb-4">
            Hvad er fordelen ved vertikal mastopeksi?
          </h3>
          <p className="font-sans leading-relaxed text-on-background">
            Den vertikale teknik efterlader kun en diskret ar langs brystvorten
            ned til brystranden – uden den lange horisontale ar, der kendes fra
            klassiske løftteknikker. Det vertikale snit komprimerer og former
            brystet indefra og giver en mere rund, ungdommelig kontur.
          </p>

          <h3 className="font-serif text-xl font-medium text-secondary mt-12 mb-4">
            Omplacering af eget væv frem for implantat
          </h3>
          <p className="font-sans leading-relaxed text-on-background">
            Frem for at tilføje et fremmedlegeme omformes det eksisterende
            kirtelvæv og flyttes til en højere position. Dette skaber en
            naturlig intern støtte og volumen, der integreres fuldstændigt med
            kroppen og ikke kræver fremtidig udskiftning.
          </p>

          <h3 className="font-serif text-xl font-medium text-secondary mt-12 mb-4">
            Forventet resultat og ardannelse
          </h3>
          <p className="font-sans leading-relaxed text-on-background">
            Arene er som regel diskrete og lyser op over 12-18 måneder.
            Det endelige resultat ses typisk 6 måneder efter operationen, når
            hævelsen er aftaget og brystet har sat sig. De fleste oplever et
            naturligt, symmetrisk resultat med god projektion.
          </p>

          <PageFAQ items={faqItems} />
        </article>
      </main>
    </>
  );
}
