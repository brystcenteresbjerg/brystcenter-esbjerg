import { ArrowRight, BriefcaseMedical, Heart, Microscope, Sparkles, Star } from "lucide-react";

import Button from "@/components/ui/Button";
import FAQAccordion from "@/components/sections/FAQAccordion";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

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
    links: [
      { label: "Implantat", href: "/behandlinger/bfo-implantat" },
      { label: "Eget fedt", href: "/behandlinger/bfo-eget-fedt-lipofilling" },
    ],
    image: "/brunette_happy.png",
    span: "md:col-span-2",
    minHeight: "min-h-[320px]",
  },
  {
    title: "Brystløft",
    desc: "Genvind din naturlige form med Ruth Graf-teknikken og auto-augmentation — uden implantat.",
    links: [{ label: "Læs mere", href: "/behandlinger/brystloeft" }],
    image: "/body_boobs.png",
    span: "md:col-span-1",
    minHeight: "min-h-[240px]",
  },
  {
    title: "Brystreduktion",
    desc: "Find din naturlige balance. Moderne B-teknik for optimal form, projektion og lindring af fysiske gener.",
    links: [{ label: "Læs mere", href: "/behandlinger/brystreduktion" }],
    image: "/hero-silk.png",
    span: "md:col-span-1",
    minHeight: "min-h-[240px]",
  },
  {
    title: "Implantatudskiftning",
    desc: "Revisionskirurgi med avancerede PU-overflader for præcis placering og langvarig stabilitet.",
    links: [{ label: "Læs mere", href: "/behandlinger/udskiftning-af-protese" }],
    image: "/implants_hands.png",
    span: "md:col-span-2",
    minHeight: "min-h-[240px]",
  },
];

export default function Home() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative flex items-end">
        {/* 1. background image */}
        <Image src="/hero-silk.png" alt="Brystcenter Esbjerg" fill sizes="100vw" className="object-cover" priority />
        {/* 2. gradient overlay */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to right, #FAF3EE 0%, rgba(250,243,238,0.7) 10%, rgba(250,243,238,0) 80%)" }}
        />
        {/* 3. content */}
        <div className="relative z-10 w-full px-8 lg:px-24 pb-20 pt-32">
          <p className="font-sans text-xs uppercase tracking-[0.15em] mb-8 text-primary">Brystcenter Esbjerg</p>

          <h1 className="font-serif text-5xl xl:text-6xl font-semibold leading-[1.1] text-secondary mb-8 max-w-xl">
            Skræddersyet <span className="block italic font-light">brystkirurgi</span>
          </h1>

          <p className="font-sans text-base leading-relaxed mb-10 max-w-sm text-secondary/65">
            Fra første konsultation til det endelige resultat. Vi kombinerer klinisk præcision med en personlig tilgang for
            naturlig harmoni.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button href="#book">Book konsultation</Button>
            <Button href="/behandlinger/bfo-eget-fedt-lipofilling" variant="outline">
              Mød vores kirurg
            </Button>
          </div>
        </div>
      </section>

      {/* ── VORES FILOSOFI ───────────────────────────────────────── */}
      <section className="px-8 lg:px-16 py-14 bg-surface-container-low">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-24 lg:items-start">
          <p className="font-sans text-xs uppercase tracking-[0.12em] shrink-0 pt-1 text-secondary/40">Vores filosofi</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 flex-1">
            <div>
              <div className="w-10 h-10 rounded-full border border-secondary/15 flex items-center justify-center mb-4">
                <Sparkles size={18} className="text-tertiary" />
              </div>
              <p className="font-serif text-lg font-semibold text-secondary mb-3">Specialister i naturlig harmoni</p>
              <p className="font-sans text-sm leading-relaxed text-secondary/65">
                Vi tror på, at det bedste kirurgiske resultat er det, der aldrig behøver at forklare sig. Vores mål er naturlige
                proportioner — resultater der ser ud som om de altid har hørt til kroppen.
              </p>
            </div>
            <div>
              <div className="w-10 h-10 rounded-full border border-secondary/15 flex items-center justify-center mb-4">
                <Microscope size={18} className="text-tertiary" />
              </div>
              <p className="font-serif text-lg font-semibold text-secondary mb-3">Individuel tilpasning fra start til slut</p>
              <p className="font-sans text-sm leading-relaxed text-secondary/65">
                Ingen standardløsninger. Hvert forløb begynder med en grundig analyse af din anatomi, dine ønsker og dine
                forudsætninger — og afsluttes med et resultat, der er unikt dig.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── VORES EKSPERTISE ─────────────────────────────────────── */}
      <section className="px-8 lg:px-16 py-24 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-serif text-4xl font-semibold text-secondary mb-4">Vores Ekspertise</h2>
            <p className="font-sans text-base max-w-md mx-auto text-secondary/60">
              Udvalgte indgreb med fokus på naturlighed, holdbarhed og individuel tilpasning til din anatomi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {services.map((s) => (
              <div
                key={s.title}
                className={`relative overflow-hidden rounded-2xl flex flex-col justify-end p-8 ${s.span} ${s.minHeight}`}
              >
                <img src={s.image} alt="" className="absolute inset-0 w-full h-full object-cover" />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(30,20,10,0.80) 0%, rgba(30,20,10,0.35) 55%, rgba(30,20,10,0.10) 100%)",
                  }}
                />
                <div className="relative z-10">
                  <h2 className="font-serif text-2xl font-semibold text-white mb-2">{s.title}</h2>
                  <p className="font-sans text-sm leading-relaxed mb-5 text-on-primary/68">{s.desc}</p>
                  <div className="flex flex-wrap gap-3">
                    {s.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="inline-flex items-center gap-1.5 font-sans text-xs tracking-[0.15em] uppercase font-bold text-tertiary hover:text-white transition-colors"
                      >
                        {link.label} <ArrowRight size={12} />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HVORFOR VÆLGE OS ─────────────────────────────────────── */}
      <section className="px-8 lg:px-16 py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <h3 className="font-serif text-4xl font-semibold text-secondary mb-16 text-center">
            Hvorfor vælge Brystcenter Esbjerg?
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Three pillars */}
            <div className="space-y-10">
              {[
                {
                  icon: <BriefcaseMedical size={20} className="text-tertiary" />,
                  label: "Ekspertise",
                  text: "Troels Tei er speciallæge med dybdegående erfaring i regenerativ brystkirurgi og avancerede teknikker som Ruth Graf mastopeksi og PU-belagte implantater.",
                },
                {
                  icon: <Heart size={20} className="text-tertiary" />,
                  label: "Tryghed",
                  text: "Fra den første konsultation til den afsluttende opfølgning er du i trygge hænder. Vi prioriterer ærlighed og tager os tid til at besvare alle dine spørgsmål.",
                },
                {
                  icon: <Star size={20} className="text-tertiary" />,
                  label: "Resultater",
                  text: "Vores filosofi er naturlig harmoni. Resultater der ser ud som om de altid har hørt til — aldrig overdrevne, altid æstetisk afbalancerede og holdbare.",
                },
              ].map((item) => (
                <div key={item.label} className="flex gap-5 items-start">
                  <div className="w-12 h-12 rounded-full border border-secondary/10 bg-surface-container-low flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div className="pt-1">
                    <p className="font-sans text-sm font-semibold text-secondary mb-2">{item.label}</p>
                    <p className="font-sans text-base leading-relaxed text-secondary/70">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Testimonial */}
            <div className="rounded-2xl p-10 bg-surface shadow-ambient">
              <p className="font-serif text-xl leading-relaxed text-secondary mb-8">
                &ldquo;Jeg oplevede hos Brystcenter Esbjerg et meget professionelt og menneskeligt behandlingsforløb. Jeg føler
                mig tryg og i de kompetente hænder.&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full shrink-0 bg-primary-container" />
                <div>
                  <p className="font-sans text-sm font-semibold text-secondary">Maria, 34 år</p>
                  <p className="font-sans text-xs text-secondary/50">Brystforstørrelse</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section id="book" className="px-8 lg:px-16 py-24 bg-surface">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-serif text-4xl font-semibold text-secondary mb-6">Klar til at tage det første skridt?</h2>
          <p className="font-sans text-base leading-relaxed mb-10 text-secondary/60">
            En uforpligtende konsultation er det første skridt mod det resultat, du ønsker. Vi gennemgår dine muligheder og
            besvarer alle dine spørgsmål.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/booking">Book en konsultation</Button>
            <Button href="tel:+4576185656" variant="outline">
              Ring til os: +45 76 18 56 56
            </Button>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section className="px-8 lg:px-16 py-24 bg-surface-container-low">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-2xl font-semibold text-secondary mb-14 text-center">Spørgsmål & Svar</h2>
          <FAQAccordion items={faqItems} />
        </div>
      </section>
    </main>
  );
}
