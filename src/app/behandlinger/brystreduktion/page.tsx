import Button from "@/components/ui/Button";
import type { Metadata } from "next";
import PageFAQ from "@/components/sections/PageFAQ";
import PageHero from "@/components/sections/PageHero";

export const metadata: Metadata = {
  title: "Brystreduktion i Esbjerg | Fokus på form & proportioner",
  description:
    "Få mindre bryster og bedre velvære hos Brystcenter Esbjerg. Vi anvender moderne teknikker som B-teknik for optimal form og projektion. Book konsultation.",
};

const faqItems = [
  {
    q: "Hvor meget vægt kan man fjerne ved en brystreduktion?",
    a: "Mængden af væv, der fjernes, afhænger af udgangspunktet og det ønskede resultat. Det er ikke ualmindeligt at fjerne 300–800 gram per side, og i tilfælde af makromasti kan der fjernes betydeligt mere. Vi prioriterer altid æstetisk balance og proportioner frem for et specifikt antal gram. Planlægningen sker individuelt baseret på din krop, din livsstil og dine ønsker om det endelige resultat.",
  },
  {
    q: "Efterlader moderne teknikker som B-teknik færre ar?",
    a: "B-teknikken (Renault) er designet til at optimere form og projektion med minimal ardannelse. Arlinjen følger areola-kanten, en kort vertikal linje og en diskret horisontal ar i brystranden. Sammenlignet med ældre teknikker er aret kortere og placeret mere skjult. Ardannelse afhænger desuden af individuelle faktorer som heling, hudtype og genetik. Vi rådgiver om arpleje fra dag ét for at sikre det bedste resultat.",
  },
  {
    q: "Kan man amme efter en brystreduktion?",
    a: "Ammemuligheder efter brystreduktion afhænger af den anvendte teknik og mængden af fjernet væv. Moderne teknikker som B-teknikken søger at bevare forbindelsen mellem brystvorte og kirtelvæv, hvilket øger sandsynligheden for at kunne amme. Det kan dog ikke garanteres. Kvinder, der planlægger graviditet og amning, bør drøfte dette med speciallægen inden operationen.",
  },
  {
    q: "Hvornår kan man genoptage træning og arbejde?",
    a: "De fleste kan vende tilbage til stillesiddende arbejde efter 1–2 uger. Fysisk krævende arbejde og sport frarådes i 4–6 uger for at sikre en god heling. Øvre kropsøvelser og løb bør undgås i mindst 6 uger. Vi udleverer detaljerede retningslinjer for genoptræning og kontrollerer helingen løbende ved de planlagte opfølgningsbesøg.",
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

const features = [
  {
    label: "Lindring af nakke- og rygsmerter",
    text: "Tyngden af store bryster belaster nakke, skuldre og ryg og kan forårsage kroniske spændinger og postural ubalance. De fleste patienter oplever en markant lindring af disse symptomer allerede i de første uger efter operationen.",
  },
  {
    label: "Bevarelse af følesans",
    text: "B-teknikken bevarer en robust blodforsyning og nerveforsyning til brystvorte og areola, hvilket mindsker risikoen for nedsat følsomhed og understøtter en god heling.",
  },
  {
    label: "Individuel arplanlægning",
    text: "Armønsteret tilpasses din anatomi og udgangspunktet for operationen. Vi tegner og diskuterer planlægningen i stående stilling forud for operationen, så du præcist ved, hvad du kan forvente.",
  },
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <PageHero
        label="Brystreduktion"
        h1Main="Brystreduktion"
        h1Italic="med fokus på form"
        image="/images/hero-silk.png"
        subtitle="Find din naturlige balance. Moderne B-teknik for optimal form, projektion og lindring af fysiske gener."
        buttons={[
          { label: "Book konsultation", href: "#book" },
          { label: "Se også brystløft", href: "/behandlinger/brystloeft", variant: "outline" },
        ]}
      />

      {/* ── INTRO ────────────────────────────────────────────────── */}
      <section className="px-8 lg:px-16 py-20 bg-surface">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="font-sans text-xs uppercase tracking-[0.15em] mb-6 text-secondary/40">Teknik</p>
            <h2 className="font-serif text-3xl font-semibold text-secondary mb-6 leading-snug">Moderne B-teknik (Renault)</h2>
            <p className="font-sans text-base leading-relaxed text-secondary/65">
              B-teknikken er en avanceret reduktionsteknik udviklet af den franske plastikkirurg Renault. Den er kendetegnet ved
              sin evne til at give brystet en naturlig, fremspringende form og god projektion, selv efter fjernelse af store
              mængder væv. Hos Brystcenter Esbjerg anvender vi B-teknikken som standard ved brystreduktioner for at sikre det
              bedst mulige æstetiske resultat.
            </p>
          </div>
          <div>
            <p className="font-sans text-xs uppercase tracking-[0.15em] mb-6 text-secondary/40">Formål</p>
            <h2 className="font-serif text-3xl font-semibold text-secondary mb-6 leading-snug">
              Lindring af fysiske gener og æstetisk balance
            </h2>
            <p className="font-sans text-base leading-relaxed text-secondary/65">
              Store bryster kan føre til kroniske smerter, nedsat livskvalitet og begrænsninger i hverdagen. En brystreduktion er
              ikke blot et æstetisk indgreb — for mange patienter er det en medicinsk nødvendighed. Vi behandler helhedsorienteret
              og kombinerer lindring af fysiske symptomer med et æstetisk resultat i harmoni med resten af kroppen.
            </p>
          </div>
        </div>
      </section>

      {/* ── FEATURES ─────────────────────────────────────────────── */}
      <section className="px-8 lg:px-16 py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-serif text-4xl font-semibold text-secondary mb-4">Hvad vi fokuserer på</h2>
            <p className="font-sans text-base max-w-md mx-auto text-secondary/60">
              Tre centrale hensyn ved enhver brystreduktion hos Brystcenter Esbjerg.
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
