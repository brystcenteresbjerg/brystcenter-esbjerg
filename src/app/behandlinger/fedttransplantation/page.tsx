import Button from "@/components/ui/Button";
import type { Metadata } from "next";
import PageFAQ from "@/components/sections/PageFAQ";
import PageHero from "@/components/sections/PageHero";

export const metadata: Metadata = {
  title: "Fedttransplantation i Esbjerg | Naturlig fornyelse med eget fedt",
  description:
    "Fedttransplantation (lipofilling) til ansigt, bryster og vævsforbedring hos Brystcenter Esbjerg. Naturlige resultater med kroppens egne stamceller. Book konsultation.",
};

const faqItems = [
  {
    q: "Hvorfor kaldes det regenerativ behandling?",
    a: "I modsætning til kunstige materialer er fedt et levende biologisk væv. Det indeholder en høj koncentration af stamceller, som stimulerer dannelsen af nye blodkar og reducerer arvæv (antifibrose). Når vi flytter fedt til et nyt område, aktiverer vi kroppens egne reparationsmekanismer. Det betyder, at hudens overflade ofte bliver pænere, mere smidig og får en sundere glød. Det er denne kombination af volumen og biologisk fornyelse, vi kalder regenerativ æstetik — det handler om at arbejde med kroppen, ikke mod den.",
  },
  {
    q: "Hvorfor foregår alt i Esbjerg?",
    a: "Præcision er altafgørende ved fedttransplantation. For at fedtcellerne skal overleve flytningen, kræver det en ekstremt skånsom håndtering og specialiseret udstyr. Ved at samle hele forløbet i Esbjerg sikrer vi, at din kirurg, Troels Tei, har fuld kontrol over hele processen — fra den skånsomme fedtsugning til den præcise injektion. Du bliver fulgt tæt samme sted, som du bliver opereret, hvilket giver os de bedste forudsætninger for at sikre, at det transplanterede væv integreres optimalt.",
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
    label: "Ansigtsforyngelse",
    text: "Vi kan genoprette volumen i kinder, tindinger og læber med et resultat, der er blødere og mere permanent end syntetiske fillers.",
  },
  {
    label: "Brystforstørrelse",
    text: "Til dig, der ønsker en moderat volumenøgning og en naturlig følelse — helt uden implantater.",
  },
  {
    label: "Ar og vævsforbedring",
    text: "Vi kan blødgøre stramt arvæv og forbedre hudens elasticitet efter tidligere operationer eller strålebehandling.",
  },
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <PageHero
        label="Fedttransplantation"
        h1Main="Naturlig fornyelse"
        h1Italic="med kroppens eget væv"
        image="/images/woman_stonewall.png"
        subtitle="Fedttransplantation (lipofilling) genskaber volumen og forbedrer vævets kvalitet med kroppens egne stamceller — for et resultat, der er naturligt indefra og ud."
        buttons={[
          { label: "Book konsultation", href: "#book" },
          { label: "Brystforstørrelse med eget fedt", href: "/behandlinger/bfo-eget-fedt-lipofilling", variant: "outline" },
        ]}
      />

      {/* ── INTRO ────────────────────────────────────────────────── */}
      <section className="px-8 lg:px-16 py-20 bg-surface">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="font-sans text-xs uppercase tracking-[0.15em] mb-6 text-secondary/40">Behandling</p>
            <h2 className="font-serif text-3xl font-semibold text-secondary mb-6 leading-snug">
              Mere end blot volumen: En biologisk opgradering
            </h2>
            <p className="font-sans text-base leading-relaxed text-secondary/65">
              Fedttransplantation (lipofilling) er en af de mest alsidige teknikker inden for moderne plastikkirurgi. Ved at
              anvende dine egne fedtceller som en naturlig filler kan vi ikke blot genskabe tabt volumen, men også forbedre selve
              vævets kvalitet. Det skyldes fedtvævets rige indhold af stamceller, som har en unik regenerativ effekt på hud og
              underliggende væv.
            </p>
          </div>
          <div className="bg-primary-container/30 rounded-2xl p-10">
            <p className="font-serif font-light text-lg italic leading-relaxed text-tertiary mb-5">
              &ldquo;Det handler om at arbejde med kroppen, ikke mod den — volumen og biologisk fornyelse i ét indgreb.&rdquo;
            </p>
            <p className="font-sans text-xs uppercase tracking-[0.15em] text-secondary/40">— Kirurg, Troels Tei</p>
          </div>
        </div>
      </section>

      {/* ── FEATURES ─────────────────────────────────────────────── */}
      <section className="px-8 lg:px-16 py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-serif text-4xl font-semibold text-secondary mb-4">Hvad kan vi behandle med eget fedt?</h2>
            <p className="font-sans text-base max-w-md mx-auto text-secondary/60">
              Fedttransplantation kan anvendes bredt — fra æstetisk foryngelse til medicinsk vævsforbedring.
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

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <div className="px-8 lg:px-16 py-24 bg-surface">
        <div className="max-w-3xl mx-auto">
          <PageFAQ items={faqItems} />
        </div>
      </div>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section id="book" className="px-8 lg:px-16 py-24 bg-surface-container-low">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-serif text-4xl font-semibold text-secondary mb-6">Få en faglig vurdering af dine muligheder</h2>
          <p className="font-sans text-base leading-relaxed mb-10 text-secondary/60">
            Drømmer du om et naturligt resultat baseret på dine egne biologiske forudsætninger? Book en uforpligtende
            konsultation og hør mere om regenerativ æstetik hos speciallæge Troels Tei.
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
