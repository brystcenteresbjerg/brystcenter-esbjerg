import Button from "@/components/ui/Button";
import PageFAQ from "@/components/sections/PageFAQ";
import PageHero from "@/components/sections/PageHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Speciallæge Troels Tei | Ekspert i regenerativ brystkirurgi",
  description:
    "Mød Troels Tei hos Brystcenter Esbjerg. Hør om hans filosofi for naturlig harmoni og hans ekspertise inden for Ruth Graf teknik og avancerede implantater.",
};

const faqItems = [
  {
    q: "Hvad er Troels Teis specialisering?",
    a: "Troels Tei er speciallæge i plastikkirurgi med særlig ekspertise i regenerativ brystkirurgi. Han arbejder med avancerede teknikker som Ruth Graf vertikal mastopeksi med auto-augmentation, fedttransplantation (lipofilling) og PU-belagte implantater ved revisionskirurgi. Hans filosofi tager udgangspunkt i naturlig harmoni: resultater, der ser ud som om de altid har hørt til kroppen.",
  },
  {
    q: "Hvilke teknikker anvender Troels Tei?",
    a: "Troels Tei anvender et bredt repertoire af brystkirurgiske teknikker tilpasset den individuelle patients anatomi og ønsker. Det inkluderer Ruth Graf vertikal mastopeksi, lipofilling med stamcelleanrigede fedttransplantater, brystforstørrelse med anatomiske og runde høj-kohæsive implantater, hybrid-teknikker samt revisionskirurgi med PU-overflader.",
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

const expertiseItems = [
  {
    label: "Ruth Graf-teknikken",
    text: "Troels Tei er en af de få speciallæger i Danmark, der mestrer Ruth Graf vertikal mastopeksi med auto-augmentation — en teknik, der giver brystløft og volumen uden implantat ved at omplacere patientens eget kirtelvæv.",
  },
  {
    label: "PU-overflader og implantater",
    text: "Ved primær brystforstørrelse og revisionskirurgi anvender Troels Tei polyuretan-belagte implantater, der dokumenteret reducerer risikoen for kapselkontraktur og displacering. Valget er altid individuelt og baseret på en systematisk anatomisk analyse.",
  },
  {
    label: "Regenerativ æstetik",
    text: "Lipofilling er et centralt element i Troels Teis arbejde. Stamcelleanrigede fedttransplantater bruges til brystforstørrelse, formkorrektion og som supplement til implantatbaserede indgreb for et naturligt, blødt overgangsresultat.",
  },
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <PageHero
        label="Mød Kirurgen"
        h1Main="Troels Tei"
        h1Italic="Speciallæge"
        subtitle="Speciallæge i plastikkirurgi med særlig ekspertise i regenerativ brystkirurgi og avancerede teknikker for naturlige resultater."
        buttons={[
          { label: "Book konsultation", href: "#book" },
          { label: "Se patientrejsen", href: "/patientrejsen", variant: "outline" },
        ]}
      />

      {/* ── FILOSOFI ─────────────────────────────────────────────── */}
      <section className="px-8 lg:px-16 py-20 bg-surface">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-sans text-xs uppercase tracking-[0.15em] mb-6 text-secondary/40">Filosofi</p>
            <h2 className="font-serif text-3xl font-semibold text-secondary mb-6 leading-snug">
              En filosofi om naturlig harmoni
            </h2>
            <p className="font-sans text-base leading-relaxed text-secondary/65">
              Troels Tei arbejder ud fra én grundlæggende overbevisning: det bedste kirurgiske resultat er det, der ser
              naturligt ud — som om det altid har hørt til. Hans tilgang kombinerer klinisk præcision med en dyb forståelse
              for kroppens proportioner og de biologiske processer, der sikrer et holdbart og harmonisk resultat.
            </p>
          </div>
          <div className="bg-primary-container/30 rounded-2xl p-10">
            <p className="font-serif font-light text-xl italic leading-relaxed text-tertiary mb-6">
              &ldquo;Det bedste kirurgiske resultat er det, der ser naturligt ud — som om det altid har hørt til kroppen.&rdquo;
            </p>
            <p className="font-sans text-xs uppercase tracking-[0.15em] text-secondary/40">— Troels Tei, Speciallæge</p>
          </div>
        </div>
      </section>

      {/* ── EKSPERTISE ───────────────────────────────────────────── */}
      <section className="px-8 lg:px-16 py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-serif text-4xl font-semibold text-secondary mb-4">Ekspertise</h2>
            <p className="font-sans text-base max-w-md mx-auto text-secondary/60">
              Avancerede teknikker med fokus på naturlighed, holdbarhed og individuel tilpasning.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {expertiseItems.map((item) => (
              <div key={item.label} className="bg-white px-10 py-10 rounded-2xl">
                <h3 className="font-sans text-sm font-semibold uppercase tracking-widest text-secondary mb-3">{item.label}</h3>
                <p className="font-sans text-sm leading-relaxed text-secondary/65">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── UDDANNELSE ───────────────────────────────────────────── */}
      <section className="px-8 lg:px-16 py-20 bg-surface">
        <div className="max-w-3xl mx-auto">
          <p className="font-sans text-xs uppercase tracking-[0.15em] mb-6 text-secondary/40">Baggrund</p>
          <h2 className="font-serif text-3xl font-semibold text-secondary mb-6 leading-snug">
            Uddannelse og faglig baggrund
          </h2>
          <p className="font-sans text-base leading-relaxed text-secondary/65">
            Troels Tei er uddannet speciallæge i plastik- og rekonstruktionskirurgi og har bred klinisk erfaring fra både
            offentlige og private sygehuse. Han holder sig løbende opdateret via internationale konferencer og samarbejder
            med ledende europæiske plastikkirurger. Han er tilknyttet Brystcenter Esbjerg som primær opererende speciallæge.
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
          <h2 className="font-serif text-4xl font-semibold text-secondary mb-6">Book en konsultation med Troels Tei</h2>
          <p className="font-sans text-base leading-relaxed mb-10 text-secondary/60">
            Tag det første skridt mod dit ønskede resultat. Vi besvarer alle dine spørgsmål og gennemgår dine muligheder.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/booking">Book en konsultation</Button>
            <Button href="tel:+4576185656" variant="outline">Ring til os: +45 76 18 56 56</Button>
          </div>
        </div>
      </section>
    </>
  );
}
