import Button from "@/components/ui/Button";
import type { Metadata } from "next";
import PageFAQ from "@/components/sections/PageFAQ";
import PageHero from "@/components/sections/PageHero";
import Testimonial from "@/components/sections/Testimonial";

export const metadata: Metadata = {
  title: "Speciallæge Troels Tei | Kirurgisk præcision og naturlig harmoni",
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
        label="Mød din kirurg"
        h1Main="Troels Tei"
        h1Italic="Speciallæge"
        image="/images/woman_stonewall.png"
        subtitle="Kirurgisk præcision og naturlig harmoni — brystkirurgi med kompromisløst fokus på det individuelle resultat."
        buttons={[
          { label: "Book konsultation", href: "#book" },
          { label: "Se patientrejsen", href: "/patientrejsen", variant: "outline" },
        ]}
      />

      {/* ── EN DEDIKATION ────────────────────────────────────────── */}
      <section className="px-8 lg:px-16 py-20 bg-surface">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-sans text-xs uppercase tracking-[0.15em] mb-6 text-secondary/40">Filosofi</p>
            <h2 className="font-serif text-3xl font-semibold text-secondary mb-6 leading-snug">
              En dedikation til det personlige resultat
            </h2>
            <p className="font-sans text-base leading-relaxed text-secondary/65">
              Min tilgang til brystkirurgi er baseret på håndværksmæssig stolthed, faglige erfaringer og kompetencer samt den
              individuelle rådgivning. Jeg tror ikke på standardløsninger, da ingen bryster er ens. Vi skal respektere det
              forskellige og bruge det til at finde de små, usynlige detaljer, der gør det endelige resultat naturligt og
              harmonisk for den enkelte kvinde.
            </p>
          </div>
          <Testimonial
            quote="Jeg tror ikke på standardløsninger, da ingen bryster er ens. Vi skal respektere det forskellige og bruge det til at finde de små, usynlige detaljer, der gør det endelige resultat naturligt og harmonisk for den enkelte kvinde."
            name="Troels Tei"
            treatment="Speciallæge i plastikkirurgi"
            verified={false}
          />
        </div>
      </section>

      {/* ── FAGLIG INTEGRITET ────────────────────────────────────── */}
      <section className="px-8 lg:px-16 py-20 bg-surface-container-low">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-sans text-xs uppercase tracking-[0.15em] mb-6 text-secondary/40">Baggrund</p>
            <h2 className="font-serif text-3xl font-semibold text-secondary mb-6 leading-snug">
              Faglig integritet og specialisering
            </h2>
            <p className="font-sans text-base leading-relaxed text-secondary/65 mb-5">
              Jeg har mange års erfaring som speciallæge og henter inspiration fra førende klinikker i USA, Brasilien og Europa.
              Jeg arbejder efter internationale principper for skånsom kirurgi uden komplikationer, der sikrer de mest harmoniske
              resultater.
            </p>
            <p className="font-sans text-base leading-relaxed text-secondary/65">
              Jeg har specialiseret mig i teknikker som Ruth Graf og lukkede systemer til fedttransplantation (Lipografter), der
              sikrer maksimal overlevelse af fedtcellerne. For mig handler brystkirurgi om at forene høj sikkerhed med et æstetisk
              udtryk, der respekterer din naturlige anatomi.
            </p>
          </div>

          {/* ── BILLEDPLADSHOLDER ── skift src til det rigtige foto ── */}
          <div className="rounded-2xl overflow-hidden aspect-3/4 lg:max-w-sm lg:ml-auto w-full">
            <img src="/images/troels_tei.png" alt="Speciallæge Troels Tei" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* ── EKSPERTISE ───────────────────────────────────────────── */}
      <section className="px-8 lg:px-16 py-24 bg-surface">
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

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <div className="px-8 lg:px-16 py-14 bg-surface-container-low">
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
            <Button href="tel:+4576185656" variant="outline">
              Ring til os: +45 76 18 56 56
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
