import Button from "@/components/ui/Button";
import type { Metadata } from "next";
import PageFAQ from "@/components/sections/PageFAQ";
import PageHero from "@/components/sections/PageHero";

export const metadata: Metadata = {
  title: "Udskiftning af brystimplantater i Esbjerg | Fokus på stabilitet",
  description:
    "Skal dine brystimplantater udskiftes? Hos Brystcenter Esbjerg bruger vi implantater med PU-overflader for at sikre præcis placering og stabilitet. Læs mere her.",
};

const faqItems = [
  {
    q: "Hvad er fordelen ved en polyuretanbelagt (PU) overflade?",
    a: "Den primære fordel ved en polyuretanbelagt (PU) overflade er dens evne til at hæfte til det omkringliggende væv. Dette skaber en unik stabilitet, som minimerer risikoen for, at implantatet flytter sig eller roterer inde i brystet. Samtidig er PU-overflader dokumenteret til at have en lavere risiko for kapseldannelse sammenlignet med traditionelle overflader. Dette gør dem særligt velegnede til kvinder, der har oplevet problemer med deres nuværende implantater, eller som ønsker den højest mulige grad af sikkerhed for et stabilt resultat.",
  },
  {
    q: "Kan man skifte fra implantat til eget fedt?",
    a: "Ja, det er i mange tilfælde muligt at fjerne eksisterende implantater og erstatte volumenet med dit eget fedt (lipofilling). Dette indgreb vælges ofte af kvinder, der ønsker at slippe helt for fremmedlegemer i kroppen. Man skal dog være opmærksom på, at man typisk ikke kan opnå den samme faste projektion og store volumen med fedt alene, som man kan med et implantat. Ved en forundersøgelse kan vi vurdere, om du har tilstrækkeligt fedtvæv til at opnå et tilfredsstillende resultat uden implantater.",
  },
  {
    q: "Er det sværere at udskifte implantater end at få dem første gang?",
    a: "En implantatudskiftning er teknisk set mere kompleks, da kirurgen skal navigere i eksisterende arvæv og ofte korrigere den lomme, som det gamle implantat har dannet. Derfor kræver det en kirurg med særlig erfaring inden for revisionskirurgi for at sikre, at vævet håndteres skånsomt, og at det nye implantat placeres præcist. Selvom indgrebet er mere komplekst, er selve restitutionstiden ofte sammenlignelig med den første operation, og målet er altid at forbedre både brystets sundhed og dets æstetiske fremtoning.",
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
    label: "Derfor anvender vi polyuretan (PU) overflader",
    text: "Formålet med at vælge en PU-overflade er at understøtte en stabil placering af implantatet. Overfladen fungerer som en form for biologisk anker eller velcrobånd, der sikrer, at implantatet i højere grad fastholdes i den ønskede position, hvilket er afgørende for et forudsigeligt og æstetisk resultat.",
  },
  {
    label: "Korrektion af eksisterende kavitet og displacering",
    text: "Ved en genoperation er den eksisterende lomme (kaviteten) i vævet ofte præget af det tidligere implantat. Det kan betyde, at der er behov for at korrigere lommen for at sikre, at det nye implantat ikke skrider eller roterer. Her er PU-overflader særligt effektive, da de markant reducerer risikoen for både displacering (forskydning) og rotation af implantatet.",
  },
  {
    label: "Forudsigelighed ved revisionskirurgi",
    text: "Revisionskirurgi er teknisk udfordrende, fordi vævet allerede har været påvirket af tidligere operationer. Ved at kombinere kirurgisk ekspertise med de rette materialer, skaber vi de bedste forudsætninger for et resultat, der ikke blot ser smukt ud nu, men som forbliver stabilt og harmonisk i mange år frem.",
  },
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <PageHero
        label="Revisionskirurgi"
        h1Main="Udskiftning af brystimplantater"
        h1Italic="Stabilitet og præcision"
        image="/images/hero-silk.png"
        subtitle="Udskiftning eller korrektion af tidligere indsatte brystimplantater kræver en særlig grad af kirurgisk præcision og erfaring. Hos Brystcenter Esbjerg prioriterer vi en stabil og korrekt placering af det nye implantat."
        buttons={[
          { label: "Book en speciallægekonsultation i Esbjerg", href: "#book" },
          { label: "Om brystimplantater", href: "/behandlinger/bfo-implantat", variant: "outline" },
        ]}
      />

      {/* ── INTRO ────────────────────────────────────────────────── */}
      <section className="px-8 lg:px-16 py-20 bg-surface">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="font-sans text-xs uppercase tracking-[0.15em] mb-6 text-secondary/40">Hvornår</p>
            <h2 className="font-serif text-3xl font-semibold text-secondary mb-6 leading-snug">
              Hvornår bør man få foretaget en implantatudskiftning?
            </h2>
            <p className="font-sans text-base leading-relaxed text-secondary/65">
              Der kan være mange årsager til at ønske en udskiftning af brystimplantater. For nogle handler det om et ønske om
              en ny størrelse eller form, mens det for andre er en nødvendighed grundet kapseldannelse, implantatbrud eller at
              implantatet har flyttet sig (displacering). Ved en grundig forundersøgelse vurderer vi dit nuværende udgangspunkt
              og lægger en plan, der sikrer harmoni og langsigtede resultater.
            </p>
          </div>
          <div>
            <p className="font-sans text-xs uppercase tracking-[0.15em] mb-6 text-secondary/40">Tilgang</p>
            <h2 className="font-serif text-3xl font-semibold text-secondary mb-6 leading-snug">
              Implantater med PU-overflader for optimal sikkerhed
            </h2>
            <p className="font-sans text-base leading-relaxed text-secondary/65">
              I forbindelse med revisionskirurgi anvender vi ofte implantater med en særlig overfladestruktur, kendt som en
              polyuretanbelagt (PU) overflade. Denne teknologi er designet til at interagere aktivt med kroppens eget væv,
              hvilket giver en række væsentlige fordele for dig som patient.
            </p>
          </div>
        </div>
      </section>

      {/* ── FEATURES ─────────────────────────────────────────────── */}
      <section className="px-8 lg:px-16 py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {features.map((item) => (
              <div key={item.label} className="bg-white px-10 py-10 rounded-2xl">
                <h3 className="font-sans text-sm font-semibold uppercase tracking-widest text-secondary mb-3">{item.label}</h3>
                <p className="font-sans text-sm leading-relaxed text-secondary/65">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <div className="px-8 lg:px-16 py-24 bg-surface">
        <div className="max-w-3xl mx-auto">
          <PageFAQ items={faqItems} />
        </div>
      </div>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section id="book" className="px-8 lg:px-16 py-24 bg-surface-container-low">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-serif text-4xl font-semibold text-secondary mb-6">
            Overvejer du en implantatudskiftning?
          </h2>
          <p className="font-sans text-base leading-relaxed mb-10 text-secondary/60">
            Book en uforpligtende konsultation og få en præcis vurdering af dine muligheder hos speciallæge Troels Tei.
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
