import Button from "@/components/ui/Button";
import type { Metadata } from "next";
import PageFAQ from "@/components/sections/PageFAQ";
import PageHero from "@/components/sections/PageHero";

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

const features = [
  {
    label: "Biologisk integration",
    text: "Det transplanterede fedt integreres gradvist i brystet over de første 3–6 måneder. Det endelige resultat er blødt, naturligt og svært at skelne fra naturligt brystvæv ved palpation.",
  },
  {
    label: "Stamcellernes rolle",
    text: "Fedtvæv er rigt på mesenkymale stamceller, der understøtter vaskularisering og vævsheling. En skånsom høst- og behandlingsteknik bevarer disse celler og forbedrer resultatet.",
  },
  {
    label: "Skånsom høstteknik",
    text: "Vi anvender lavtryks-liposuktion og lukkede systemer, der minimerer mekanisk skade på fedtcellerne. Det øger andelen af levedygtigt fedt og reducerer hævelse ved donorstedet.",
  },
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
        subtitle="Et naturligt og skånsomt alternativ til implantat — med dit eget fedtvæv som det eneste materiale."
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
              Lipofilling er en teknik, der bruger patientens eget fedtvæv til at forme og forstørre brystet. Resultatet er et
              naturligt udseende og en blød konsistens, fordi materialet biologisk er identisk med det omgivende brystvæv. Hos
              Brystcenter Esbjerg behandler vi fedtet med omhu for at bevare stamcellernes regenerative egenskaber.
            </p>
          </div>
          <div>
            <p className="font-sans text-xs uppercase tracking-[0.15em] mb-6 text-secondary/40">Fordele</p>
            <h2 className="font-serif text-3xl font-semibold text-secondary mb-6 leading-snug">
              Ingen implantater. Dobbelt æstetisk resultat.
            </h2>
            <p className="font-sans text-base leading-relaxed text-secondary/65">
              Ingen fremmedlegemer. Ingen risiko for kapseldannelse eller implantatsvigt. Indgrebet kombinerer konturering af
              donorstedet — typisk mave, lår eller flanker — med tilføjelse af volumen i brystet. Det er et dobbelt æstetisk
              resultat i ét forløb.
            </p>
          </div>
        </div>
      </section>

      {/* ── FEATURES ─────────────────────────────────────────────── */}
      <section className="px-8 lg:px-16 py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-serif text-4xl font-semibold text-secondary mb-4">Teknik og biologi</h2>
            <p className="font-sans text-base max-w-md mx-auto text-secondary/60">
              Tre aspekter der tilsammen sikrer et naturligt og holdbart resultat.
            </p>
          </div>
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

      {/* ── PROCEDURE ────────────────────────────────────────────── */}
      <section className="px-8 lg:px-16 py-20 bg-surface">
        <div className="max-w-3xl mx-auto">
          <p className="font-sans text-xs uppercase tracking-[0.15em] mb-6 text-secondary/40">Forløbet</p>
          <h2 className="font-serif text-3xl font-semibold text-secondary mb-6 leading-snug">
            Hvordan foregår en brystforstørrelse med lipofilling?
          </h2>
          <p className="font-sans text-base leading-relaxed text-secondary/65">
            Indgrebet foregår i fuld narkose og tager typisk 2–3 timer. Fedtet høstes via mini-liposuktion, renses og
            transplanteres i præcise lag. Den nødvendige optagningstid og mængden, der overlever, afhænger af teknikken og
            vævsbetingelserne. Typisk overlever 60–80% af det transplanterede fedt permanent.
          </p>
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
          <h2 className="font-serif text-4xl font-semibold text-secondary mb-6">Klar til at tage det første skridt?</h2>
          <p className="font-sans text-base leading-relaxed mb-10 text-secondary/60">
            Book en uforpligtende konsultation og få en præcis vurdering af dine muligheder hos speciallæge Troels Tei.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/booking">Book en konsultation</Button>
            <Button href="tel:+4576185656" variant="outline">
              Ring til os: +45 76 18 56 56
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
