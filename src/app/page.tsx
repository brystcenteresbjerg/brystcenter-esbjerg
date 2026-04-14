import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FAQAccordion from "@/components/sections/FAQAccordion";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Brystcenter Esbjerg | Specialister i naturlig brystkirurgi",
  description:
    "Skræddersyet brystkirurgi i Esbjerg. Implantater, fedttransplantation, brystløft og reduktion hos specialister. Book konsultation.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Hvad koster brystkirurgi i Esbjerg?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Prisen afhænger af den valgte procedure, kompleksiteten og dine individuelle ønsker. Vi tilbyder en indledende konsultation, hvor vi gennemgår din situation og giver en præcis prisindikation. Hos Brystcenter Esbjerg er gennemsigtighed en prioritet – vi ønsker, at du har alle informationer, inden du træffer en beslutning. Book en uforpligtende konsultation for at høre mere.",
      },
    },
    {
      "@type": "Question",
      name: "Er brystforstørrelse med eget fedt permanent?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lipofilling giver et langtidsholdbart resultat. Typisk overlever 60–80% af det transplanterede fedtvæv permanent, afhængigt af teknik og biologiske faktorer. Det overlevede fedt opfører sig som kroppens eget og vil påvirkes af vægtudsving. Resultatet stabiliserer sig over de første 3–6 måneder, hvorefter det er stabilt. En anden behandling kan øge volumenet yderligere, hvis ønsket.",
      },
    },
    {
      "@type": "Question",
      name: "Hvor lang tid tager genopretningen efter et brystløft?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "De fleste er klar til let kontorarbejde efter 1–2 uger. Fysisk krævende aktiviteter og sport frarådes i 4–6 uger. Hævelse og ømhed aftager gradvist over de første 4–8 uger. Det endelige resultat ses typisk 6 måneder efter operationen, når vævet har sat sig. Vi følger alle patienter tæt op med planlagte kontroller efter indgrebet.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "Hvad koster brystkirurgi i Esbjerg?",
    a: "Prisen afhænger af den valgte procedure, kompleksiteten og dine individuelle ønsker. Vi tilbyder en indledende konsultation, hvor vi gennemgår din situation og giver en præcis prisindikation. Hos Brystcenter Esbjerg er gennemsigtighed en prioritet – vi ønsker, at du har alle informationer, inden du træffer en beslutning.",
  },
  {
    q: "Er brystforstørrelse med eget fedt permanent?",
    a: "Lipofilling giver et langtidsholdbart resultat. Typisk overlever 60–80% af det transplanterede fedtvæv permanent, afhængigt af teknik og biologiske faktorer. Det overlevede fedt opfører sig som kroppens eget og vil påvirkes af vægtudsving. Resultatet stabiliserer sig over de første 3–6 måneder, hvorefter det er stabilt.",
  },
  {
    q: "Hvor lang tid tager genopretningen efter et brystløft?",
    a: "De fleste er klar til let kontorarbejde efter 1–2 uger. Fysisk krævende aktiviteter og sport frarådes i 4–6 uger. Hævelse og ømhed aftager gradvist. Det endelige resultat ses typisk 6 måneder efter operationen, når vævet har sat sig.",
  },
];

const services = [
  {
    title: "Brystforstørrelse",
    desc: "Opnå dit ønskede volumen med implantat eller eget fedt. Vi skræddersyr løsningen til din anatomi og dine ønsker.",
    href: "/bfo-implantat",
    bg: "linear-gradient(160deg, var(--tertiary) 0%, var(--primary) 100%)",
  },
  {
    title: "Brystløft",
    desc: "Genvind din naturlige form med Ruth Graf-teknikken og auto-augmentation — uden implantat.",
    href: "/brystloeft",
    bg: "linear-gradient(135deg, var(--primary-container) 0%, var(--tertiary) 100%)",
  },
  {
    title: "Brystreduktion",
    desc: "Find din naturlige balance. Moderne B-teknik for optimal form, projektion og lindring af fysiske gener.",
    href: "/brystreduktion",
    bg: "linear-gradient(180deg, var(--tertiary) 0%, var(--primary) 100%)",
  },
  {
    title: "Implantatudskiftning",
    desc: "Revisionskirurgi med avancerede PU-overflader for præcis placering og langvarig stabilitet.",
    href: "/udskiftning-af-protese",
    bg: "linear-gradient(145deg, var(--tertiary) 0%, var(--primary) 100%)",
  },
];

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="flex min-h-[92vh]">
        {/* Left: text */}
        <div className="flex flex-1 items-center px-8 lg:px-24 py-24 bg-surface">
          <div className="max-w-lg">
            <p className="font-sans text-xs uppercase tracking-[0.15em] mb-8 text-primary">
              Brystcenter Esbjerg
            </p>

            <h1 className="font-serif text-5xl xl:text-6xl font-semibold leading-[1.1] text-secondary mb-8">
              Brystcenter Esbjerg –{" "}
              <span className="block italic font-light">Skræddersyet</span>
              <span className="block">brystkirurgi</span>
            </h1>

            <p className="font-sans text-base leading-relaxed mb-10 max-w-sm text-secondary/65">
              Fra første konsultation til det endelige resultat. Vi kombinerer
              klinisk præcision med en personlig tilgang for naturlig harmoni.
            </p>

            <Button href="#book">
              Book en konsultation
            </Button>

            {/* Philosophy pillars */}
            <div className="mt-16 grid grid-cols-2 gap-8">
              <div>
                <p className="font-serif text-3xl mb-2 text-primary">
                  ←
                </p>
                <p className="font-sans text-sm font-semibold text-secondary mb-1">
                  Kompromisløst og æstetisk
                </p>
                <p className="font-sans text-xs leading-relaxed text-secondary/55">
                  Naturlige resultater der harmonerer med din krop og dit liv
                </p>
              </div>
              <div>
                <p className="font-serif text-3xl mb-2 text-primary">
                  4
                </p>
                <p className="font-sans text-sm font-semibold text-secondary mb-1">
                  Kirurgisk præcision
                </p>
                <p className="font-sans text-xs leading-relaxed text-secondary/55">
                  Specialiserede ydelser med dokumenterede teknikker
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: hero image */}
        <div className="hidden lg:block w-[44%] shrink-0 relative">
          <Image
            src="/hero-silk.png"
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* ── VORES FILOSOFI ───────────────────────────────────────── */}
      <section className="px-8 lg:px-16 py-14 bg-surface-container-low">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-24 lg:items-start">
          <p className="font-sans text-xs uppercase tracking-[0.12em] shrink-0 pt-1 text-secondary/40">
            Vores filosofi
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 flex-1">
            <div>
              <p className="font-serif text-lg font-semibold text-secondary mb-3">
                Specialister i naturlig harmoni
              </p>
              <p className="font-sans text-sm leading-relaxed text-secondary/65">
                Vi tror på, at det bedste kirurgiske resultat er det, der aldrig
                behøver at forklare sig. Vores mål er naturlige proportioner —
                resultater der ser ud som om de altid har hørt til kroppen.
              </p>
            </div>
            <div>
              <p className="font-serif text-lg font-semibold text-secondary mb-3">
                Individuel tilpasning fra start til slut
              </p>
              <p className="font-sans text-sm leading-relaxed text-secondary/65">
                Ingen standardløsninger. Hvert forløb begynder med en grundig
                analyse af din anatomi, dine ønsker og dine forudsætninger —
                og afsluttes med et resultat, der er unikt dig.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── VORES EKSPERTISE ─────────────────────────────────────── */}
      <section className="px-8 lg:px-16 py-24 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-serif text-4xl font-semibold text-secondary mb-4">
              Vores Ekspertise
            </h2>
            <p className="font-sans text-base max-w-md mx-auto text-secondary/60">
              Udvalgte indgreb med fokus på naturlighed, holdbarhed og individuel
              tilpasning til din anatomi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group relative overflow-hidden rounded-2xl flex flex-col justify-end p-8 min-h-70"
              >
                <div
                  className="absolute inset-0"
                  style={{ background: s.bg }}
                />
                <div className="absolute inset-0 bg-secondary/60" />
                <div className="relative z-10">
                  <h3 className="font-serif text-2xl font-semibold text-white mb-2">
                    {s.title}
                  </h3>
                  <p className="font-sans text-sm leading-relaxed mb-4 text-on-primary/68">
                    {s.desc}
                  </p>
                  <span className="font-sans text-xs transition-opacity group-hover:opacity-100 text-on-primary/45">
                    Læs mere →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── HVORFOR VÆLGE OS ─────────────────────────────────────── */}
      <section className="px-8 lg:px-16 py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl font-semibold text-secondary mb-16 text-center">
            Hvorfor vælge os?
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Three pillars */}
            <div className="space-y-10">
              {[
                {
                  label: "Ekspertise",
                  text: "Troels Tei er speciallæge med dybdegående erfaring i regenerativ brystkirurgi og avancerede teknikker som Ruth Graf mastopeksi og PU-belagte implantater.",
                },
                {
                  label: "Tryghed",
                  text: "Fra den første konsultation til den afsluttende opfølgning er du i trygge hænder. Vi prioriterer ærlighed og tager os tid til at besvare alle dine spørgsmål.",
                },
                {
                  label: "Resultater",
                  text: "Vores filosofi er naturlig harmoni. Resultater der ser ud som om de altid har hørt til — aldrig overdrevne, altid æstetisk afbalancerede og holdbare.",
                },
              ].map((item) => (
                <div key={item.label} className="flex gap-5">
                  <div className="w-0.5 rounded-full shrink-0 self-stretch bg-tertiary" />
                  <div>
                    <p className="font-sans text-xs font-semibold uppercase tracking-widest mb-2 text-secondary">
                      {item.label}
                    </p>
                    <p className="font-sans text-base leading-relaxed text-secondary/70">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Testimonial */}
            <div className="rounded-2xl p-10 bg-surface shadow-ambient">
              <p className="font-serif text-xl leading-relaxed text-secondary mb-8">
                &ldquo;Jeg oplevede hos Brystcenter Esbjerg et meget professionelt
                og menneskeligt behandlingsforløb. Jeg føler mig tryg og i de
                kompetente hænder.&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full shrink-0 bg-primary-container" />
                <div>
                  <p className="font-sans text-sm font-semibold text-secondary">
                    Maria, 34 år
                  </p>
                  <p className="font-sans text-xs text-secondary/50">
                    Brystforstørrelse
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section id="book" className="px-8 lg:px-16 py-24 bg-surface">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-serif text-4xl font-semibold text-secondary mb-6">
            Klar til at tage det første skridt?
          </h2>
          <p className="font-sans text-base leading-relaxed mb-10 text-secondary/60">
            En uforpligtende konsultation er det første skridt mod det resultat,
            du ønsker. Vi gennemgår dine muligheder og besvarer alle dine
            spørgsmål.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="mailto:kontakt@brystcenter-esbjerg.dk">
              Book en konsultation
            </Button>
            <Button href="tel:+4576185656" variant="outline">
              Ring til os: +45 76 18 56 56
            </Button>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section className="px-8 lg:px-16 py-24 bg-surface-container-low">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl font-semibold text-secondary mb-14 text-center">
            Spørgsmål & Svar
          </h2>
          <FAQAccordion items={faqItems} />
        </div>
      </section>
    </main>
  );
}
