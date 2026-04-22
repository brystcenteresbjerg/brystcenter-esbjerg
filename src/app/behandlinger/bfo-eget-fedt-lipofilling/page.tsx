import Button from "@/components/ui/Button";
import type { Metadata } from "next";
import PageFAQ from "@/components/sections/PageFAQ";
import PageHero from "@/components/sections/PageHero";

export const metadata: Metadata = {
  title: "Brystforstørrelse med eget fedt | Regenerativ æstetik",
  description:
    "Ønsker du større bryster uden implantater? Få en naturlig brystforstørrelse med eget fedt (lipofilling) hos Brystcenter Esbjerg.",
};

const faqItems = [
  {
    q: "Hvad er fordelen ved stamceller i fedtvæv?",
    a: "Stamcellerne i fedtvævet spiller en central rolle i regenerativ kirurgi. Udover at skabe volumen medvirker de til at forbedre hudens struktur og elasticitet i det behandlede område. Det betyder, at en brystforstørrelse med eget fedt ofte resulterer i en sundere og mere modstandsdygtig hudoverflade, da vævet hjælpes til at forny sig selv indefra.",
  },
  {
    q: "Kan man kombinere implantat og eget fedt (Hybrid)?",
    a: "Ja, en hybridløsning er ofte den ideelle vej til at opnå både betydelig volumen og en naturlig blødhed. Ved at kombinere et implantat med fedttransplantation kan vi bruge fedtet til at blødgøre kanterne af implantatet og skabe en mere jævn overgang. Dette er særligt effektivt til at optimere form og symmetri hos kvinder med meget lidt naturligt brystvæv.",
  },
  {
    q: "Hvor meget af det transplanterede fedt bliver siddende?",
    a: "Ved en lipofilling skal man forvente, at kroppen naturligt absorberer en del af det transplanterede fedt i månederne efter indgrebet — typisk mellem 20% og 40%. Derfor overkorrigerer vi ofte en smule under selve operationen. Det fedt, der er tilbage efter 3–4 måneder, har etableret sin egen blodforsyning og vil i princippet blive siddende permanent. Resultatet vil herefter følge din krops naturlige svingninger i vægt, præcis som dit øvrige fedtvæv. Vi vurderer altid det endelige resultat ved en kontrol efter ca. seks måneder.",
  },
  {
    q: "Efterlader fedttransplantation synlige ar?",
    a: "En af de største fordele ved lipofilling er, at indgrebet efterlader minimale spor. Fedtet suges fra donorområdet (f.eks. mave eller lår) og indsprøjtes i brystet gennem meget tynde kanyler. Det betyder, at arrene sjældent er større end 2–3 millimeter og typisk placeres strategisk i naturlige hudfolder, hvor de med tiden bliver næsten usynlige. Dette gør metoden ideel til kvinder, der ønsker et kosmetisk resultat uden de klassiske ar fra traditionelle brystoperationer eller implantatindgreb.",
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
    label: "Biologisk integration og naturlig konsistens",
    text: "Ved at anvende eget væv undgår man de risici, der er forbundet med implantater, og opnår en konsistens, der føles som naturligt brystvæv. Integrationen sker gradvist, hvilket giver et diskret udtryk, der følger kroppens naturlige aldringsprocesser.",
  },
  {
    label: "Stamcellernes betydning for vævskvaliteten",
    text: "Fedtvæv er rigt på regenerative celler, som ikke blot tilfører fylde, men også har en positiv effekt på hudens kvalitet og den generelle vævsstruktur. Dette bidrager til et resultat, der ser sundt ud og føles levende.",
  },
  {
    label: "Skånsom høst af fedtvæv med moderne systemer",
    text: "For at sikre en høj overlevelsesrate for fedtcellerne anvender vi lukkede og skånsomme systemer gennem hele processen. Denne kontrollerede håndtering minimerer traumer mod vævet og sikrer en ensartet og præcis fordeling af volumen i brystet.",
  },
];

const benefits = [
  "Ønsker en naturlig brystforstørrelse uden brug af fremmedlegemer.",
  "Søger en diskret og harmonisk ændring af brystets størrelse.",
  "Ønsker at kombinere indgrebet med en fedtsugning af depoter andre steder på kroppen — en såkaldt win-win situation.",
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <PageHero
        label="Brystforstørrelse / Eget fedt"
        h1Main="Brystforstørrelse"
        h1Italic="med eget fedt"
        image="/images/hero-silk.png"
        subtitle="Fedttransplantation anvender kroppens eget fedt til at genskabe volumen og forbedre brystets konturer — for et resultat, der føles naturligt og harmonerer med din krops egne proportioner."
        buttons={[
          { label: "Book konsultation", href: "#book" },
          { label: "Implantat som alternativ", href: "/behandlinger/bfo-implantat", variant: "outline" },
        ]}
      />

      {/* ── INTRO ────────────────────────────────────────────────── */}
      <section className="px-8 lg:px-16 py-20 bg-surface">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="font-sans text-xs uppercase tracking-[0.15em] mb-6 text-secondary/40">Behandling</p>
            <h2 className="font-serif text-3xl font-semibold text-secondary mb-6 leading-snug">
              Regenerativ æstetik: Mere end blot volumen
            </h2>
            <p className="font-sans text-base leading-relaxed text-secondary/65">
              Den moderne tilgang til brystforstørrelse med eget fedt bygger på omfattende international forskning og metoder
              perfektioneret af specialister som Andrzej Piatkowski og Roger Khouri. Hos Brystcenter Esbjerg ser vi ikke blot
              behandlingen som en volumenforøgelse, men også som regenerativ æstetik, hvor vi arbejder med kroppens biologiske
              byggesten for at optimere både form og vævskvalitet.
            </p>
          </div>
          <div>
            <p className="font-sans text-xs uppercase tracking-[0.15em] mb-6 text-secondary/40">Fordele</p>
            <h2 className="font-serif text-3xl font-semibold text-secondary mb-6 leading-snug">
              Fordele ved brystforstørrelse uden implantat
            </h2>
            <p className="font-sans text-sm leading-relaxed text-secondary/65 mb-5">
              Metoden er særligt fordelagtig for dig, der:
            </p>
            <ul className="space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 font-sans text-sm leading-relaxed text-secondary/65">
                  <span className="text-primary mt-0.5 shrink-0">—</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── PROCEDURE ────────────────────────────────────────────── */}
      <section className="px-8 lg:px-16 py-20 bg-surface-container-low">
        <div className="max-w-3xl mx-auto">
          <p className="font-sans text-xs uppercase tracking-[0.15em] mb-6 text-secondary/40">Forløbet</p>
          <h2 className="font-serif text-3xl font-semibold text-secondary mb-6 leading-snug">
            Hvordan foregår en brystforstørrelse med lipofilling?
          </h2>
          <p className="font-sans text-base leading-relaxed text-secondary/65">
            Processen kræver høj teknisk præcision for at sikre, at de transplanterede celler integreres optimalt i brystvævet.
            Da fedttransplantation er afhængig af biologiske forhold, vurderes det endelige resultat efter nogle måneder, når
            kroppen har optaget en del af det transplanterede væv og stabiliseret den nye volumen.
          </p>
        </div>
      </section>

      {/* ── FEATURES ─────────────────────────────────────────────── */}
      <section className="px-8 lg:px-16 py-24 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {features.map((item) => (
              <div key={item.label} className="bg-surface-container-low px-10 py-10 rounded-2xl">
                <h3 className="font-sans text-sm font-semibold uppercase tracking-widest text-secondary mb-3">{item.label}</h3>
                <p className="font-sans text-sm leading-relaxed text-secondary/65">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <div className="px-8 lg:px-16 py-24 bg-surface-container-low">
        <div className="max-w-3xl mx-auto">
          <PageFAQ items={faqItems} />
        </div>
      </div>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section id="book" className="px-8 lg:px-16 py-24 bg-surface">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-serif text-4xl font-semibold text-secondary mb-6">
            Overvejer du brystforstørrelse med eget fedt?
          </h2>
          <p className="font-sans text-base leading-relaxed mb-10 text-secondary/60">
            Hos Brystcenter Esbjerg prioriterer vi en grundig forundersøgelse, hvor vi gennemgår dine muligheder og forventninger
            til resultatet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/booking">Bestil tid til forundersøgelse i dag</Button>
            <Button href="tel:+4576185656" variant="outline">
              Ring til os: +45 76 18 56 56
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
