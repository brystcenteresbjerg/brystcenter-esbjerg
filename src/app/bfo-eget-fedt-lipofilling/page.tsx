import type { Metadata } from "next";
import Breadcrumb from "@/components/layout/Breadcrumb";
import PageFAQ from "@/components/sections/PageFAQ";

export const metadata: Metadata = {
  title: "Brystforstørrelse med eget fedt | Regenerativ æstetik",
  description:
    "Ønsker du større bryster uden implantater? Få en naturlig brystforstørrelse med eget fedt (lipofilling) hos Brystcenter Esbjerg. Læs om regenerativ æstetik her.",
};

const faqItems = [
  {
    q: "Hvad er fordelen ved stamceller i fedtvæv?",
    a: "Fedtvæv indeholder en naturlig koncentration af stamceller, som fremmer vævsheling og regeneration. Når fedtet transplanteres til brystet, bidrager stamcellerne ikke blot til volumen, men forbedrer også vævskvaliteten i det omgivende væv. Resultatet er en gradvis forbedring af hudens tekstur og elasticitet over tid. Stamcellerne understøtter den biologiske integration og øger andelen af fedt, der overlever transplantationen, hvilket giver et mere varigt og naturligt udseende.",
  },
  {
    q: "Kan man kombinere implantat og eget fedt (Hybrid)?",
    a: "Ja, en hybridtilgang kombinerer et implantat med fedttransplantation og er særligt velegnet til patienter, der ønsker mere volumen end eget fedt alene kan give, men som også ønsker et naturligt udseende. Implantatet sikrer strukturel volumen, mens lipofillingen former konturerne, dækker implantatets kanter og skaber en blødere overgang. Hybrid-teknikken kræver specialiseret erfaring og individuel planlægning for at opnå det bedste æstetiske resultat.",
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
        <Breadcrumb current="Brystforstørrelse med eget fedt" />

        <article>
          <h1 className="font-serif text-5xl font-semibold leading-tight text-secondary mb-8">
            Brystforstørrelse med eget fedt (Lipofilling)
          </h1>

          <h2 className="font-serif text-3xl font-medium text-secondary mt-16 mb-6">
            Regenerativ æstetik: Mere end blot volumen
          </h2>
          <p className="font-sans text-lg leading-relaxed text-on-background">
            Lipofilling er en teknik, der bruger patientens eget fedtvæv til at
            forme og forstørre brystet. Resultatet er et naturligt udseende og
            en blød konsistens, fordi materialet biologisk er identisk med det
            omgivende brystvæv. Hos Brystcenter Esbjerg behandler vi fedtet med
            omhu for at bevare stamcellernes regenerative egenskaber.
          </p>

          <h2 className="font-serif text-3xl font-medium text-secondary mt-16 mb-6">
            Fordele ved brystforstørrelse uden implantat
          </h2>
          <p className="font-sans text-lg leading-relaxed text-on-background">
            Ingen fremmedlegemer. Ingen risiko for kapseldannelse eller
            implantatsvigt. Brystforstørrelse med eget fedt er et skånsomt
            indgreb, der kombinerer konturering af donorstedet (typisk mave,
            lår eller flanker) med tilføjelse af volumen i brystet. Det er et
            dobbelt æstetisk resultat i ét forløb.
          </p>

          <h2 className="font-serif text-3xl font-medium text-secondary mt-16 mb-6">
            Hvordan foregår en brystforstørrelse med lipofilling?
          </h2>
          <p className="font-sans text-lg leading-relaxed text-on-background">
            Indgrebet foregår i fuld narkose og tager typisk 2-3 timer. Fedtet
            høstes via mini-liposuktion, renses og transplanteres i præcise
            lag. Den nødvendige optagningstid og mængden, der overlever, afhænger
            af teknikken og vævsbetingelserne.
          </p>

          <h3 className="font-serif text-xl font-medium text-secondary mt-12 mb-4">
            Biologisk integration og naturlig konsistens
          </h3>
          <p className="font-sans leading-relaxed text-on-background">
            Det transplanterede fedt integreres gradvist i brystet over de
            første 3-6 måneder. Det endelige resultat er blødt, naturligt og
            svært at skelne fra naturligt brystvæv ved palpation.
          </p>

          <h3 className="font-serif text-xl font-medium text-secondary mt-12 mb-4">
            Stamcellernes betydning for vævskvaliteten
          </h3>
          <p className="font-sans leading-relaxed text-on-background">
            Fedtvæv er rigt på mesenkymale stamceller, der understøtter
            vaskularisering og vævsheling. En skånsom høst- og
            behandlingsteknik bevarer disse celler og forbedrer resultatet.
          </p>

          <h3 className="font-serif text-xl font-medium text-secondary mt-12 mb-4">
            Skånsom høst af fedtvæv med moderne systemer
          </h3>
          <p className="font-sans leading-relaxed text-on-background">
            Vi anvender lavtryks-liposuktion og lukkede systemer, der
            minimerer mekanisk skade på fedtcellerne. Det øger andelen af
            levedygtigt fedt og reducerer hævelse ved donorstedet.
          </p>

          <PageFAQ items={faqItems} />
        </article>
      </main>
    </>
  );
}
