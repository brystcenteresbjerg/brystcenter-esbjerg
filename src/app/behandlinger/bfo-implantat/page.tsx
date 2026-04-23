import Button from "@/components/ui/Button";
import type { Metadata } from "next";
import PageFAQ from "@/components/sections/PageFAQ";
import PageHero from "@/components/sections/PageHero";
import { alaCartePoints, faqItems, implantChoices } from "@/data/behandlinger/bfo-implantat";

export const metadata: Metadata = {
  title: "Brystforstørrelse med implantat | Skræddersyet i Esbjerg",
  description:
    "Drømmer du om mere volumen? Få en brystforstørrelse med implantater hos Brystcenter Esbjerg. Vi skræddersyr løsningen til din anatomi. Book her.",
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
        label="Brystforstørrelse / Implantat"
        h1Main="Brystforstørrelse"
        h1Italic="med implantater"
        subtitle="Vi ser det som en individuel behandling, hvor målet altid er et harmonisk og naturligt resultat, der respekterer din krops proportioner og dine personlige ønsker."
        image="/images/hero-silk.png"
        buttons={[
          { label: "Book en personlig konsultation i Esbjerg", href: "#book" },
          { label: "Eget fedt som alternativ", href: "/behandlinger/bfo-eget-fedt-lipofilling", variant: "outline" },
        ]}
      />

      {/* ── À LA CARTE ───────────────────────────────────────────── */}
      <section>
        <div className="max-w-7xl mx-auto px-8 lg:px-16 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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
            <p className="font-sans text-base leading-relaxed text-secondary/65 mb-6">
              Vi tror ikke på standardløsninger. Der findes ikke ét implantat, der passer til alle. Derfor arbejder vi ud fra et
              &ldquo;à la carte&rdquo;-princip, hvor vi udvælger både implantattype og kirurgisk teknik specifikt til dig. Denne
              differentierede tilgang betyder, at vi kan tage præcis højde for:
            </p>
            <ul className="space-y-3">
              {alaCartePoints.map((p) => (
                <li key={p} className="flex items-start gap-3 font-sans text-sm leading-relaxed text-secondary/65">
                  <span className="text-primary mt-0.5 shrink-0">—</span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── VALG AF IMPLANTAT ────────────────────────────────────── */}
      <section className="px-8 lg:px-16 py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <p className="font-sans text-xs uppercase tracking-[0.15em] mb-6 text-secondary/40">Rådgivning</p>
            <h2 className="font-serif text-3xl font-semibold text-secondary mb-6 leading-snug">Valg af implantat</h2>
            <p className="font-sans text-base leading-relaxed text-secondary/65 max-w-2xl">
              For at sikre det perfekte match tilbyder vi et bredt udvalg af implantater fra førende producenter. Ved
              forundersøgelsen gennemgår vi dine muligheder i detaljer, så du er tryg ved dit valg. Vi rådgiver dig om
              forskellene på:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {implantChoices.map((item) => (
              <div key={item.label} className="bg-white px-10 py-10 rounded-2xl">
                <h3 className="font-sans text-sm font-semibold uppercase tracking-widest text-secondary mb-3">{item.label}</h3>
                <p className="font-sans text-sm leading-relaxed text-secondary/65">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PLACERING & KIRURGISK PRÆCISION ──────────────────────── */}
      <section>
        <div className="max-w-7xl mx-auto px-8 lg:px-16 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="font-sans text-xs uppercase tracking-[0.15em] mb-6 text-secondary/40">Teknik</p>
            <h2 className="font-serif text-3xl font-semibold text-secondary mb-6 leading-snug">
              Placering og kirurgisk præcision
            </h2>
            <p className="font-sans text-base leading-relaxed text-secondary/65">
              Teknikken bag placeringen af implantatet er afgørende for det endelige udtryk. Afhængig af mængden af dit eget
              brystvæv kan implantatet placeres enten over eller under brystmusklen. Vores plastikkirurg Troels Tei benytter
              teknikker, der sikrer, at overgangen mellem dit eget væv og implantatet bliver så usynlig som muligt — essentielt
              for at opnå den naturlige harmoni, vi efterstræber.
            </p>
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
      <section id="book" className="px-8 lg:px-16 py-24 bg-surface">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-serif text-4xl font-semibold text-secondary mb-6">
            Tag det næste skridt mod naturlig harmoni
          </h2>
          <p className="font-sans text-base leading-relaxed mb-10 text-secondary/60">
            Vi tror på, at de bedste resultater skabes gennem individuel planlægning og kirurgisk præcision. Kontakt klinikken i
            Esbjerg for en samtale om dine muligheder.
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
