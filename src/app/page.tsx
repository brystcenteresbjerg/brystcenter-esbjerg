import { BriefcaseMedical, Microscope, Star } from "lucide-react";

import Button from "@/components/ui/Button";
import Link from "next/link";
import type { Metadata } from "next";
import PageFAQ from "@/components/sections/PageFAQ";
import PageHero from "@/components/sections/PageHero";
import Testimonial from "@/components/sections/Testimonial";

export const metadata: Metadata = {
  title: "Brystcenter Esbjerg | Specialister i naturlig brystkirurgi",
  description:
    "Skræddersyet brystkirurgi i Esbjerg. Implantater, fedttransplantation, brystløft og brystreduktion hos specialister. Book konsultation.",
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
    category: "01 · Brystforstørrelse",
    title: "Implantat eller eget fedt",
    desc: "Opnå dit ønskede volumen med implantat eller eget fedt. Vi skræddersyr løsningen til din anatomi og dine ønsker.",
    showDesc: true,
    links: [
      { label: "Implantat →", href: "/behandlinger/bfo-implantat" },
      { label: "Eget fedt →", href: "/behandlinger/bfo-eget-fedt-lipofilling" },
    ],
    image: "/images/brunette_happy.png",
    span: "md:col-span-2",
    minHeight: "min-h-[320px]",
  },
  {
    category: "02 · Mastopeksi",
    title: "Brystløft",
    desc: "",
    showDesc: false,
    links: [{ label: "Læs mere →", href: "/behandlinger/brystloeft" }],
    image: "/images/body_boobs.png",
    span: "md:col-span-1",
    minHeight: "min-h-[240px]",
  },
  {
    category: "03 · Reduktion",
    title: "Brystreduktion",
    desc: "",
    showDesc: false,
    links: [{ label: "Læs mere →", href: "/behandlinger/brystreduktion" }],
    image: "/images/hero-silk.png",
    span: "md:col-span-1",
    minHeight: "min-h-[240px]",
  },
  {
    category: "04 · Revision",
    title: "Implantatudskiftning",
    desc: "Revisionskirurgi med avancerede PU-overflader for præcis placering og langvarig stabilitet.",
    showDesc: true,
    links: [{ label: "Læs mere →", href: "/behandlinger/udskiftning-af-protese" }],
    image: "/images/implants_hands.png",
    span: "md:col-span-2",
    minHeight: "min-h-[240px]",
  },
];

const treatmentDetails = [
  {
    heading: "Brystforstørrelse med implantat eller eget fedt",
    intro: "Vi tilbyder flere metoder til volumenøgning, så vi kan ramme præcis det udtryk, du søger:",
    items: [
      {
        label: "Implantater",
        text: "Velegnet til en tydelig volumenøgning. Vi tilbyder flere implantattyper, profiler og producenter, så vi kan opfylde dine ønsker til form og projektion.",
      },
      {
        label: "Fedttransplantation (lipofilling)",
        text: "Naturlig volumen med dit eget væv. Velegnet til en diskret brystforstørrelse og formforbedring. Vi anvender et dedikeret lipofilling-system (Lipografter) for optimal overlevelse af fedtcellerne.",
      },
      {
        label: "Hybrid brystforstørrelse",
        text: "En kombination af implantat og fedt, der giver både volumen og en blødere kontur. Valget afhænger af en individuel vurdering af din vævskvalitet.",
      },
    ],
  },
  {
    heading: "Brystløft og brystreduktion",
    intro:
      "Ved korrektion af brystets form og tyngde anvender vi individuelt tilpassede teknikker afhængig af hudoverskud og graden af ptose (hæng):",
    items: [
      {
        label: "Brystløft",
        text: "Vi udfører alt fra klassiske ankerformede brystløft til vertikale brystløft med Ruth Graf-teknik, hvor eget væv omplaceres til de øvre dele af brystet for naturlig fylde. Vi tilbyder også B-teknik (Renault), særligt velegnet hvis vævet overvejende er lateraliseret.",
      },
      {
        label: "Brystreduktion",
        text: "Vi anvender gennemprøvede kirurgiske teknikker for at opnå reduktion af volumen og vægt samt lindring af fysiske gener. Målet er altid et funktionelt og æstetisk balanceret resultat.",
      },
    ],
  },
  {
    heading: "Ekspertise i udskiftning af brystimplantater",
    intro: null,
    items: [
      {
        label: null,
        text: "Revision og implantatudskiftning kræver særlig erfaring, da lommen (kaviteten) fra tidligere operationer ofte afviger fra det nye implantats størrelse og form. For at sikre optimal stabilitet anvender vi implantater med særlige overflader, som reducerer risikoen for forskydning og rotation.",
      },
    ],
  },
];

export default function Home() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <PageHero
        label="Brystcenter Esbjerg - Speciallæge Troels Tei"
        h1Main="Skræddersyet"
        h1Italic="brystkirurgi"
        subtitle="En specialiseret enhed under Privathospitalet Kollund, dedikeret til brystkirurgi med et kompromisløst fokus på det individuelle resultat."
        image="/images/woman_stonewall.png"
        buttons={[
          { label: "Book konsultation", href: "#book" },
          { label: "Mød Troels Tei", href: "/troels-tei", variant: "outline" },
        ]}
      />

      {/* ── HELE FORLØBET ────────────────────────────────────────── */}
      <section className="px-8 lg:px-16 py-14 bg-surface-container-low">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p className="font-sans text-xs uppercase tracking-[0.12em] text-secondary/40 mb-4">Patientrejsen</p>
            <h2 className="font-serif text-2xl font-semibold text-secondary mb-5 leading-snug">
              Hele forløbet samlet ét sted — i Esbjerg
            </h2>
            <p className="font-sans text-sm leading-relaxed text-secondary/65 mb-4">
              Hos Brystcenter Esbjerg tror vi på, at tryghed skabes gennem kontinuitet. Vi har valgt at samle hele din{" "}
              <Link href="/patientrejsen" className="text-primary hover:underline underline-offset-2">
                patientrejse
              </Link>{" "}
              under ét tag, så du aldrig skal rejse mellem forskellige byer eller klinikker for at gennemføre dit forløb.
            </p>
            <p className="font-sans text-sm leading-relaxed text-secondary/65">
              Fra din første forundersøgelse til selve operationsdagen og de efterfølgende kontroller foregår alt i vores rammer i
              Esbjerg. Du er gennem hele forløbet tilknyttet den samme speciallæge, som kender din forhistorie og dine ønsker.
            </p>
          </div>
          <div>
            <p className="font-sans text-xs uppercase tracking-[0.12em] text-secondary/40 mb-4">Filosofi</p>
            <h2 className="font-serif text-2xl font-semibold text-secondary mb-5 leading-snug">
              Specialister i naturlig harmoni
            </h2>
            <p className="font-sans text-sm leading-relaxed text-secondary/65">
              Uanset om dit ønske er en brystforstørrelse, et brystløft eller en brystreduktion, tilbyder vi et forløb baseret på
              tryghed og faglig tyngde. Vi arbejder ud fra en filosofi om naturlig harmoni, hvor valget af metode altid afhænger
              af din specifikke vævskvalitet, anatomi og det ønskede resultat. Hos os møder du ikke standardløsninger, men
              individuelle løsninger med fokus på ukompliceret kirurgi og fravær af problemer.
            </p>
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
                className={`group relative overflow-hidden rounded-2xl flex flex-col justify-between p-8 ${s.span} ${s.minHeight}`}
              >
                <img
                  src={s.image}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-80"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(30,20,10,0.80) 0%, rgba(30,20,10,0.35) 55%, rgba(30,20,10,0.10) 100%)",
                  }}
                />
                <p className="relative z-10 font-sans text-[10px] uppercase tracking-[0.18em] text-white/40">{s.category}</p>
                <div className="relative z-10">
                  <h2 className="font-serif text-2xl font-semibold text-white mb-2">{s.title}</h2>
                  {s.showDesc && <p className="font-sans text-sm leading-relaxed mb-5 text-on-primary/68">{s.desc}</p>}
                  <div className={`flex flex-wrap gap-3 ${!s.showDesc ? "mt-3" : ""}`}>
                    {s.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="inline-flex items-center gap-1.5 font-sans text-xs tracking-[0.15em] uppercase font-bold text-tertiary hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BEHANDLINGSTYPER ─────────────────────────────────────── */}
      <section className="px-8 lg:px-16 py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {treatmentDetails.map((group) => (
            <div key={group.heading}>
              <h2 className="font-serif text-xl font-semibold text-secondary mb-4 leading-snug">{group.heading}</h2>
              {group.intro && <p className="font-sans text-sm text-secondary/60 leading-relaxed mb-6">{group.intro}</p>}
              <div className="space-y-5">
                {group.items.map((item, i) => (
                  <div key={i}>
                    {item.label && <p className="font-sans text-xs font-semibold text-secondary mb-1">{item.label}</p>}
                    <p className="font-sans text-xs leading-relaxed text-secondary/55">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── HVORFOR VÆLGE OS ─────────────────────────────────────── */}
      <section className="px-8 lg:px-16 py-24 bg-surface">
        <div className="max-w-7xl mx-auto">
          <h3 className="font-serif text-4xl font-semibold text-secondary mb-16 text-center">
            Hvorfor vælge Brystcenter Esbjerg?
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Three pillars */}
            <div className="space-y-10">
              {[
                {
                  icon: <Star size={20} className="text-tertiary" />,
                  label: "Skræddersyet behandling",
                  text: "Vi arbejder ikke med standardløsninger, men tilpasser hver operation til den enkelte patient, så der opnås en individuel løsning med fokus på ukompliceret kirurgi.",
                },
                {
                  icon: <Microscope size={20} className="text-tertiary" />,
                  label: "Teknisk overskud",
                  text: "Vi har mange kirurgiske teknikker, implantattyper og producenter til rådighed, hvilket giver de bedste forudsætninger for et præcist valg tilpasset din anatomi.",
                },
                {
                  icon: <BriefcaseMedical size={20} className="text-tertiary" />,
                  label: "Æstetik og præcision",
                  text: "Vi forener det smukke resultat med kirurgisk integritet og fokus på lav risiko for komplikationer. Naturlig harmoni er målet i hvert eneste indgreb.",
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

            {/* Stats + testimonial */}
            <Testimonial
              quote="Meget kompetent rådgivning hele vejen igennem. Jeg fik lavet en brystforstørrelse. Mit ønske var at få lavet noget, der så naturligt ud og passede til min krop. Troels Tei har ramt helt plet og jeg er meget tilfreds med både behandling og resultat."
              name="Karina"
              treatment="Brystforstørrelse med implantater"
            />
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section id="book" className="px-8 lg:px-16 py-24 bg-surface-container-low">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-serif text-4xl font-semibold text-secondary mb-6">
            Tag det næste skridt mod et naturligt resultat
          </h2>
          <p className="font-sans text-base leading-relaxed mb-10 text-secondary/60">
            Vejen til naturlig harmoni starter med en samtale. Kontakt vores specialister i Esbjerg for at høre mere om, hvordan
            vi kan hjælpe dig med at opnå dine ønsker.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/booking">Kontakt Brystcenter Esbjerg</Button>
            <Button href="tel:+4576185656" variant="outline">
              Ring til os: +45 76 18 56 56
            </Button>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section className="px-8 lg:px-16 py-24 bg-surface">
        <div className="max-w-3xl mx-auto">
          <PageFAQ items={faqItems} />
        </div>
      </section>
    </main>
  );
}
