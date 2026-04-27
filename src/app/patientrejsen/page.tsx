import { faqs, steps } from "@/data/patientrejsen";

import Button from "@/components/ui/Button";
import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import PatientTimeline from "@/components/sections/PatientTimeline";

export const metadata: Metadata = {
  title: "Patientrejsen | Brystcenter Esbjerg",
  description:
    "Fra første konsultation til det endelige resultat. Se hvordan dit forløb ser ud hos Brystcenter Esbjerg - trin for trin.",
};

export default function Page() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <PageHero
        label="Patientrejsen"
        h1Main="Fra første tanke"
        h1Italic="til endeligt resultat"
        video="./videos/skin_freckles.mp4"
        subtitle="Vi tror på, at tryghed skabes af klarhed. Her ser du præcist, hvad du kan forvente - trin for trin."
      />

      {/* ── STEPS ────────────────────────────────────────────────── */}
      <section className="bg-surface">
        <PatientTimeline steps={steps} />
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section className="px-8 lg:px-24 py-20 bg-surface-container-low">
        <div className="max-w-3xl">
          <p className="label mb-10">Praktiske spørgsmål</p>
          <div className="space-y-8">
            {faqs.map((item) => (
              <div key={item.q} className="border-b border-secondary/8 pb-8 last:border-0">
                <p className="font-sans text-sm font-semibold text-secondary mb-3">{item.q}</p>
                <p className="font-sans text-sm leading-relaxed text-secondary/60">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section id="book" className="px-8 lg:px-16 py-24 bg-surface">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-serif text-4xl font-semibold text-secondary mb-6">Klar til at begynde?</h2>
          <p className="font-sans text-base leading-relaxed mb-10 text-secondary/60">
            Tag det første skridt og book en uforpligtende konsultation med speciallæge Troels Tei.
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
