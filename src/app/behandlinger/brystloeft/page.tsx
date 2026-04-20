import Button from "@/components/ui/Button";
import type { Metadata } from "next";
import PageFAQ from "@/components/sections/PageFAQ";
import PageHero from "@/components/sections/PageHero";

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

const features = [
  {
    label: "Vertikal mastopeksi",
    text: "Den vertikale teknik efterlader kun en diskret ar langs brystvorten ned til brystranden – uden den lange horisontale ar fra klassiske teknikker. Det vertikale snit komprimerer og former brystet indefra.",
  },
  {
    label: "Omplacering af eget væv",
    text: "Frem for at tilføje et fremmedlegeme omformes det eksisterende kirtelvæv og flyttes til en højere position. Dette skaber en naturlig intern støtte og volumen, der ikke kræver fremtidig udskiftning.",
  },
  {
    label: "Forventet resultat",
    text: "Arene lyser op over 12–18 måneder. Det endelige resultat ses typisk 6 måneder efter operationen. De fleste oplever et naturligt, symmetrisk resultat med god projektion i den øvre pol.",
  },
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <PageHero
        label="Brystløft"
        h1Main="Brystløft"
        h1Italic="med auto-augmentation"
        image="/images/hero-silk.png"
        subtitle="Ruth Graf-teknikken løfter og former brystet med dit eget kirtelvæv — uden implantater og med minimale ar."
        buttons={[
          { label: "Book konsultation", href: "#book" },
          { label: "Brystforstørrelse med implantat", href: "/behandlinger/bfo-implantat", variant: "outline" },
        ]}
      />

      {/* ── INTRO ────────────────────────────────────────────────── */}
      <section className="px-8 lg:px-16 py-20 bg-surface">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="font-sans text-xs uppercase tracking-[0.15em] mb-6 text-secondary/40">Behandling</p>
            <h2 className="font-serif text-3xl font-semibold text-secondary mb-6 leading-snug">
              Genvind din naturlige fylde uden implantater
            </h2>
            <p className="font-sans text-base leading-relaxed text-secondary/65">
              Ruth Graf-teknikken er en avanceret form for vertikal mastopeksi, der omplacerer patientens eget brystkirtelvæv for
              at skabe volumen i den øvre pol. Resultatet er et løftet, fyldigere bryst med en naturlig fremtræden – helt uden
              fremmedlegemer. Teknikken er særligt velegnet til kvinder, der ønsker en permanent forbedring uden de
              vedligeholdelseskrav, der følger med implantater.
            </p>
          </div>
          <div className="bg-primary-container/30 rounded-2xl p-10">
            <p className="font-serif font-light text-lg italic leading-relaxed text-tertiary mb-5">
              &ldquo;Det bedste kirurgiske resultat er det, der ser naturligt ud — som om det altid har hørt til.&rdquo;
            </p>
            <p className="font-sans text-xs uppercase tracking-[0.15em] text-secondary/40">— Kirurg, Troels Tei</p>
          </div>
        </div>
      </section>

      {/* ── FEATURES ─────────────────────────────────────────────── */}
      <section className="px-8 lg:px-16 py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-serif text-4xl font-semibold text-secondary mb-4">Teknik og resultat</h2>
            <p className="font-sans text-base max-w-md mx-auto text-secondary/60">
              Tre nøgleaspekter ved Ruth Graf vertikal mastopeksi.
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
