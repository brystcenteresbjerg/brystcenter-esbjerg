import Button from "@/components/ui/Button";
import type { Metadata } from "next";
import PageFAQ from "@/components/sections/PageFAQ";
import PageHero from "@/components/sections/PageHero";
import { faqItems, features } from "@/data/behandlinger/fedttransplantation";

export const metadata: Metadata = {
  title: "Fedttransplantation i Esbjerg | Naturlig fornyelse med eget fedt",
  description:
    "Fedttransplantation (lipofilling) til ansigt, bryster og vævsforbedring hos Brystcenter Esbjerg. Naturlige resultater med kroppens egne stamceller. Book konsultation.",
};

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
