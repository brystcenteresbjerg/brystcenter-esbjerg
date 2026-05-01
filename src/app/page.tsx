import { BriefcaseMedical, Microscope, Star } from "lucide-react";
import { faqItems, services, treatmentDetails } from "@/data/home";

import CtaSection from "@/components/sections/CtaSection";
import FadeUp from "@/components/ui/FadeUp";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import PageFAQ from "@/components/sections/PageFAQ";
import PageHero from "@/components/sections/PageHero";
import Testimonial from "@/components/sections/Testimonial";
import TreatmentTabs from "@/components/sections/TreatmentTabs";

export const metadata: Metadata = {
  title: "Brystcenter Esbjerg | Specialister i naturlig brystkirurgi",
  description:
    "Skræddersyet brystkirurgi i Esbjerg. Implantater, fedttransplantation, brystløft og brystreduktion hos specialister. Book konsultation.",
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

export default function Home() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <PageHero
        label="Brystcenter Esbjerg"
        h1Main="Skræddersyet kosmetisk"
        h1Italic="plastikkirurgi"
        subtitle="En specialiseret enhed under Privathospitalet Kollund, dedikeret til brystkirurgi med et kompromisløst fokus på det individuelle resultat."
        video="/videos/woman_sunlight_one.mp4"
        videoPoster="/images/video_cap.jpg"
        mediaPosition="center 20%"
        cta={{ label: "Book konsultation", href: "#book" }}
        secondaryCta={{ label: "Mød os", href: "/moed-os" }}
      />

      {/* ── HELE FORLØBET ────────────────────────────────────────── */}
      <section className="px-8 lg:px-16 py-14 bg-surface-container-low">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p className="label mb-4">Patientrejsen</p>
            <h2 className="font-serif lg:text-2xl text-lg font-semibold text-secondary mb-5 leading-snug">
              Hele forløbet samlet ét sted - i Esbjerg
            </h2>
            <p className="font-sans text-base leading-relaxed text-secondary/85 mb-4">
              Hos Brystcenter Esbjerg tror vi på, at tryghed skabes gennem kontinuitet. Vi har valgt at samle hele din{" "}
              <Link href="/patientrejsen" className="text-primary hover:underline underline-offset-2">
                patientrejse
              </Link>{" "}
              under ét tag, så du aldrig skal rejse mellem forskellige byer eller klinikker for at gennemføre dit forløb.
            </p>
            <p className="font-sans text-base leading-relaxed text-secondary/85">
              Fra din første forundersøgelse til selve operationsdagen og de efterfølgende kontroller foregår alt i vores rammer i
              Esbjerg. Du er gennem hele forløbet tilknyttet den samme speciallæge, som kender din forhistorie og dine ønsker.
            </p>
          </div>
          <div>
            <p className="label mb-4">Filosofi</p>
            <h2 className="font-serif lg:text-2xl text-lg font-semibold text-secondary mb-5 leading-snug">
              Specialister i naturlig harmoni
            </h2>
            <p className="font-sans text-base leading-relaxed text-secondary/85">
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
            <h2 className="font-serif lg:text-4xl text-2xl font-semibold text-secondary mb-4">Vores Ekspertise</h2>
            <p className="font-sans text-base max-w-md mx-auto text-secondary/80">
              Udvalgte indgreb med fokus på naturlighed, holdbarhed og individuel tilpasning til din anatomi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {services.map((s, i) => (
              <FadeUp key={s.title} delay={i * 0.08} className={`${s.span} ${s.minHeight}`}>
                <div className="group relative overflow-hidden rounded-sm flex flex-col justify-between p-8 h-full w-full">
                  <Image
                    src={s.image}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div
                    className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-80"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(30,20,10,0.80) 0%, rgba(30,20,10,0.35) 70%, rgba(30,20,10,0.10) 100%)",
                    }}
                  />
                  <p className="relative z-10 font-sans text-[10px] uppercase tracking-[0.18em] text-white/95">{s.category}</p>
                  <div className="relative z-10">
                    <h2 className="font-serif lg:text-2xl text-xl font-semibold text-white mb-2">{s.title}</h2>
                    {s.showDesc && <p className="font-sans text-base leading-relaxed mb-5 text-on-primary/68">{s.desc}</p>}
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
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── BEHANDLINGSTYPER ─────────────────────────────────────── */}
      <TreatmentTabs groups={treatmentDetails} />

      {/* ── HVORFOR VÆLGE OS ─────────────────────────────────────── */}
      <section className="px-8 lg:px-16 py-24 bg-surface">
        <div className="max-w-7xl mx-auto">
          <h3 className="font-serif lg:text-4xl text-2xl font-semibold text-secondary mb-16 text-center">
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
                    <p className="font-sans text-lg font-semibold text-secondary mb-2">{item.label}</p>
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
      <CtaSection
        heading="Tag det næste skridt mod et naturligt resultat"
        body="Vejen til naturlig harmoni starter med en samtale. Kontakt vores specialister i Esbjerg for at høre mere om, hvordan vi kan hjælpe dig med at opnå dine ønsker."
        ctaLabel="Kontakt Brystcenter Esbjerg"
      />

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section className="px-8 lg:px-16 py-24 bg-surface">
        <div className="max-w-3xl mx-auto">
          <PageFAQ items={faqItems} />
        </div>
      </section>
    </main>
  );
}
