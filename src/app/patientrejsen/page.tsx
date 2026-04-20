import Button from "@/components/ui/Button";
import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import PatientTimeline from "@/components/sections/PatientTimeline";

export const metadata: Metadata = {
  title: "Patientrejsen | Brystcenter Esbjerg",
  description:
    "Fra første konsultation til det endelige resultat. Se hvordan dit forløb ser ud hos Brystcenter Esbjerg — trin for trin.",
};

const steps = [
  {
    number: "01",
    label: "Første kontakt",
    time: "Dag 1",
    title: "Du tager det første skridt",
    body: "Det hele begynder med, at du kontakter os — enten via telefon eller e-mail. Vi besvarer dine indledende spørgsmål og aftaler et tidspunkt til en uforpligtende konsultation. Der er ingen ventelister og ingen forhåndskrav.",
  },
  {
    number: "02",
    label: "Konsultation",
    time: "Uge 1–2",
    title: "En grundig og personlig samtale",
    body: "Ved konsultationen møder du speciallæge Troels Tei. Vi gennemgår din anatomi, dine ønsker og dine muligheder. Vi bruger 3D-simulering og målsystemer til at give dig et realistisk billede af resultatet — og du modtager en præcis prisindikation.",
  },
  {
    number: "03",
    label: "Planlægning",
    time: "Uge 2–6",
    title: "Vi tilrettelægger dit forløb",
    body: "Når du har besluttet dig, planlægger vi operationsdagen. Du modtager detaljerede forberedelsesretningslinjer: hvad du må spise og drikke, hvilke præparater du skal undgå, og hvad du skal medbringe. Vi er tilgængelige for spørgsmål helt frem til operationsdagen.",
  },
  {
    number: "04",
    label: "Operationsdagen",
    time: "1–3 timer",
    title: "I trygge hænder fra start til slut",
    body: "Du ankommer til klinikken, hvor du modtages af vores team. Indgrebet foregår i fuld narkose og varer typisk 1–2 timer afhængigt af proceduren. Troels Tei gennemgår planen med dig umiddelbart inden operationen, og du er i de samme kendte hænder hele vejen.",
  },
  {
    number: "05",
    label: "Restitution",
    time: "Uge 1–8",
    title: "Ro og tæt opfølgning",
    body: "De første dage er hvile vigtig. Du modtager skriftlige plejevejledninger og har direkte adgang til klinikken ved spørgsmål. Vi planlægger kontroller ved 1 uge, 1 måned og 6 måneder efter operationen — så vi følger dit resultat hele vejen til det endelige udtryk.",
  },
  {
    number: "06",
    label: "Det endelige resultat",
    time: "Måned 3–6",
    title: "Dit resultat sætter sig",
    body: "Hævelse og spænding aftager gradvist over de første 4–8 uger. Det endelige resultat er typisk synligt 3–6 måneder efter operationen. Vi er her stadig — og ved den afsluttende kontrol sikrer vi os, at du er fuldt tilfreds med resultatet.",
  },
];

const faqs = [
  {
    q: "Hvor lang tid fra konsultation til operation?",
    a: "Det afhænger af dit ønskede tidspunkt og vores kapacitet. Typisk er der 2–6 ugers ventetid fra konsultation til operationsdag.",
  },
  {
    q: "Kan jeg have nogen med til konsultationen?",
    a: "Ja, du er meget velkommen til at medbringe en ven eller partner. Mange oplever det som en tryghed at have støtte med til den indledende samtale.",
  },
  {
    q: "Hvornår kan jeg vende tilbage til arbejde?",
    a: "De fleste er klar til let kontorarbejde efter 1–2 uger. Fysisk krævende arbejde frarådes i 4–6 uger. Vi tilpasser altid anbefalingerne til dit specifikke indgreb.",
  },
];

export default function Page() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <PageHero
        label="Patientrejsen"
        h1Main="Fra første tanke"
        h1Italic="til endeligt resultat"
        image="/images/hero-silk.png"
        subtitle="Vi tror på, at tryghed skabes af klarhed. Her ser du præcist, hvad du kan forvente — trin for trin."
      />

      {/* ── STEPS ────────────────────────────────────────────────── */}
      <section className="bg-surface">
        <PatientTimeline steps={steps} />
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section className="px-8 lg:px-24 py-20 bg-surface-container-low">
        <div className="max-w-3xl">
          <p className="font-sans text-xs uppercase tracking-[0.15em] text-secondary/30 mb-10">Praktiske spørgsmål</p>
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
