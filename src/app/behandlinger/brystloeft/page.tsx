import Button from "@/components/ui/Button";
import type { Metadata } from "next";
import PageFAQ from "@/components/sections/PageFAQ";
import PageHero from "@/components/sections/PageHero";
import Testimonial from "@/components/sections/Testimonial";
import { faqItems, features } from "@/data/behandlinger/brystloeft";

export const metadata: Metadata = {
  title: "Brystløft med Ruth Graf teknik | Genvind fylde uden implantat",
  description:
    "Ønsker du et løftet bryst med naturlig fylde i toppen? Læs om brystløft med auto-augmentation (Ruth Graf teknik) hos Brystcenter Esbjerg. Book her.",
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
        label="Brystløft"
        h1Main="Brystløft"
        h1Italic="med auto-augmentation"
        image="/images/hero-silk.png"
        subtitle="Et brystløft med auto-augmentation er en kirurgisk teknik til dig, der ønsker at genvinde brystets ungdommelige projektion og form uden brug af fremmedlegemer."
        buttons={[
          { label: "Book en uforpligtende konsultation i Esbjerg", href: "#book" },
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
              Mange kvinder oplever, at brystet med tiden mister fylde i den øvre del, hvilket ofte giver et ønske om både et løft
              af brystet og en øget volumen. Hvor man traditionelt ville indsætte et implantat for at skabe denne fylde, gør Ruth
              Graf-teknikken det muligt at opnå en visuel volumenforøgelse udelukkende ved brug af brystets eget væv. Det er
              regenerativ æstetik, når det er mest virkningsfuldt.
            </p>
          </div>
          <Testimonial
            quote="Fik foretaget en BFO af Troels Tei. Hele forløbet var topprofessionelt og kan kun på det varmeste anbefale Troels. Super æstetisk og smukt resultat."
            name="Amalie"
            treatment="Brystforstørrelse med implantater"
          />
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
          <h2 className="font-serif text-4xl font-semibold text-secondary mb-6">Genvind din naturlige form uden implantater</h2>
          <p className="font-sans text-base leading-relaxed mb-10 text-secondary/60">
            Ønsker du et brystløft, der udelukkende anvender din krops eget væv? Book en uforpligtende konsultation i Esbjerg og
            hør, hvordan vi med Ruth Graf-teknikken kan skabe naturlig fylde og projektion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/booking">Bestil tid til forundersøgelse</Button>
            <Button href="tel:+4576185656" variant="outline">
              Ring til os: +45 76 18 56 56
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
