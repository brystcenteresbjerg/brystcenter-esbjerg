import { AlignJustify, Gem, Ruler } from "lucide-react";

import Button from "@/components/ui/Button";
import Link from "next/link";
import type { Metadata } from "next";
import PageFAQ from "@/components/sections/PageFAQ";
import PageHero from "@/components/sections/PageHero";

export const metadata: Metadata = {
  title: "Brystforstørrelse med implantat | Skræddersyet i Esbjerg",
  description:
    "Drømmer du om mere volumen? Få en brystforstørrelse med implantater hos Brystcenter Esbjerg. Vi skræddersyr løsningen til din anatomi. Book her.",
};

const faqItems = [
  {
    q: "Hvor lang tid holder et brystimplantat?",
    a: "Moderne brystimplantater har ingen fast udløbsdato, men de fleste producenter anbefaler en vurdering efter 10-15 år. Mange kvinder beholder deres implantater i årtier uden problemer. Behovet for udskiftning opstår typisk ved kapselkontraktur, displacering eller ønske om en størrelsesændring. Hos Brystcenter Esbjerg anvender vi høj-kohæsive gel-implantater med dokumenteret holdbarhed, og vi rådgiver om langsigtet opfølgning allerede ved den første konsultation.",
  },
  {
    q: "Kan man amme efter en brystforstørrelse?",
    a: "I de fleste tilfælde er det muligt at amme efter en brystforstørrelse med implantat. Valget af operationsteknik og implantatplacering har betydning: en submandibulær (under brystmusklen) eller dual-plane placering bevarer typisk kirtelvævet og mælkegangene intakte. Vi drøfter dine planer om eventuel fremtidig graviditet og amning under konsultationen, så vi kan tilpasse teknikken til dit liv.",
  },
  {
    q: "Gør det ondt at få lagt implantater ind?",
    a: "Indgrebet foregår i fuld narkose, så du ikke mærker noget under operationen. De første dage efterfølgende oplever de fleste ømhed og en følelse af stramhed, særligt hvis implantatet placeres under brystmusklen. Smerterne håndteres effektivt med ordineret smertestillende medicin. Hævelsen aftager gradvist over 4-6 uger, og de fleste er klar til let arbejde inden for 1-2 uger.",
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

const implantProperties = [
  {
    icon: <Gem size={18} className="text-tertiary" />,
    label: "Kvalitet & Konsistens",
    text: "Vi anvender udelukkende høj-kohæsive gel-implantater fra certificerede producenter. Konsistensen er tilpasset det ønskede resultat — fra blød og naturlig til fastere og mere projicerende.",
  },
  {
    icon: <AlignJustify size={18} className="text-tertiary rotate-45" />,
    label: "Overflade & Cohesion",
    text: "Valget af overflade — glat, tekstureret eller polyuretan — påvirker implantatets stabilitet og risikoen for rotation. Vi gennemgår fordele og ulemper ved hvert valg individuelt under konsultationen.",
  },
  {
    icon: <Ruler size={18} className="text-tertiary" />,
    label: "Volumen & Profil",
    text: "Størrelse alene er ikke nok. Profilen — lav, medium eller høj — bestemmer projektionen og harmonien med din eksisterende anatomi. Vi bruger målsystemer og 3D-simulering til at finde det rette match.",
  },
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <PageHero
        label="Brystforstørrelse / Implantat"
        h1Main="Brystforstørrelse"
        h1Italic="med implantater"
        subtitle="Et skræddersyet indgreb, der tager udgangspunkt i din anatomi, dine proportioner og dine ønsker — ikke en standardstørrelse."
        image="/images/hero-silk.png"
        gradient={false}
        buttons={[
          { label: "Book konsultation", href: "#book" },
          { label: "Eget fedt som alternativ", href: "/behandlinger/bfo-eget-fedt-lipofilling", variant: "outline" },
        ]}
      />

      {/* ── À LA CARTE ───────────────────────────────────────────── */}
      <section className="">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Portrait image with floating quote card */}
          <div className="relative rounded-2xl overflow-hidden aspect-square">
            <img src="/images/body_boobs.png" alt="" className="w-full h-full object-cover" />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to top, rgba(0,0,0,0.25) 0%, transparent 55%)" }}
            />
            <div
              className="absolute bottom-5 left-5 w-1/2 rounded-xl p-5"
              style={{ background: "rgba(250,243,238,0.82)", backdropFilter: "blur(12px)" }}
            >
              <p className="font-serif font-light text-base italic leading-relaxed text-secondary">
                &ldquo;Det bedste kirurgiske resultat er det, der ser naturligt ud — som om det altid har hørt til.&rdquo;
              </p>
              <p className="font-sans text-xs uppercase tracking-[0.15em] mt-3 text-secondary/50">— Kirurg, Troels Tei</p>
            </div>
          </div>
          <div>
            <p className="font-sans text-xs uppercase tracking-[0.15em] mb-6 text-secondary/40">Behandling</p>
            <h2 className="font-serif text-3xl font-semibold text-secondary mb-6 leading-snug">
              En &ldquo;à la carte&rdquo;-tilgang til din krop
            </h2>
            <p className="font-sans text-base leading-relaxed text-secondary/65">
              Ingen to kvinder er ens — og det skal resultatet afspejle. Hos Brystcenter Esbjerg starter enhver brystforstørrelse
              med en grundig analyse af din anatomi, din hudkvalitet og dine ønsker. Vi bruger 3D-simulering og målsystemer til at
              identificere det implantat, der harmonerer med dine proportioner, frem for blot at opfylde en størrelsesbetegnelse.
            </p>
          </div>
        </div>
      </section>

      {/* ── VALG AF IMPLANTAT ────────────────────────────────────── */}
      <section className="px-8 lg:px-16 py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-serif text-4xl font-semibold text-secondary mb-4">Valg af implantat</h2>
            <p className="font-sans text-base max-w-md mx-auto text-secondary/60">
              Tre parametre der tilsammen definerer dit resultat. Vi gennemgår dem alle grundigt ved konsultationen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {implantProperties.map((item) => (
              <div key={item.label} className="bg-white px-12 py-12 rounded-2xl">
                <div className="w-9 h-9 rounded-full border border-secondary/15 flex items-center justify-center mb-5">
                  {item.icon}
                </div>
                <h3 className="font-sans text-sm font-semibold uppercase tracking-widest text-secondary mb-3">{item.label}</h3>
                <p className="font-sans text-sm leading-relaxed text-secondary/65">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PLACERING & KIRURGISK PRÆCISION ──────────────────────── */}
      <section className="">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="font-sans text-xs uppercase tracking-[0.15em] mb-8 text-secondary/40">Teknik</p>
            <h2 className="font-serif text-3xl font-semibold text-secondary mb-10 leading-snug">
              Placering og kirurgisk præcision
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="font-sans text-xs font-semibold uppercase tracking-widest text-secondary mb-3">Placering</h3>
                <p className="font-sans text-sm leading-relaxed text-secondary/65">
                  Implantatplacering under brystmusklen (sub-muskulær eller dual-plane) giver ofte et mere naturligt udseende og
                  reducerer risikoen for kapselkontraktur. Vi vælger placeringen individuelt baseret på din hudkvalitet og mængden
                  af kirtelvæv.
                </p>
              </div>

              <div>
                <h3 className="font-sans text-xs font-semibold uppercase tracking-widest text-secondary mb-3">
                  Kirurgisk incision
                </h3>
                <p className="font-sans text-sm leading-relaxed text-secondary/65">
                  Incisionen placeres diskret i brystranden (inframammær fold) eller akslen, tilpasset din anatomi og
                  implantattype. Præcis kaveteforberedelse er afgørende for implantatets langsigtede stabilitet og det æstetiske
                  resultat.
                </p>
              </div>

              <Link
                href="#book"
                className="inline-flex items-center gap-2 font-sans text-sm font-medium text-primary hover:opacity-70 transition-opacity"
              >
                Dual Plane metode →
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden aspect-square">
              <img src="/images/gemini_generated_image_implants.png" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-square mt-8">
              <img src="/images/gemini_generated_image_implants_hands.png" alt="" className="w-full h-full object-cover" />
            </div>
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
      <section id="book" className="px-8 lg:px-16 py-24">
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
