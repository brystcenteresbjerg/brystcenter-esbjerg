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
    a: "Mængden af væv, der fjernes, afhænger helt af brystets oprindelige volumen, din kropsbygning og det ønskede slutresultat. Ved større brystreduktioner anvendes ofte den klassiske anker-teknik, som giver kirurgen størst fleksibilitet til at fjerne betydelige mængder hud og kirtelvæv. Målet er altid at finde en vægt, der giver fysisk lindring, men som stadig efterlader brystet med en naturlig og smuk fylde, der passer til dine proportioner.",
  },
  {
    q: "Efterlader moderne teknikker som B-teknik færre ar?",
    a: "B-teknikken og den vertikale metode (cirkumvertikal teknik) har fokus på at begrænse ardannelsen sammenlignet med de helt store reduktioner. Ved den vertikale teknik undgår man det lange tværgående ar i folden under brystet. Det er dog vigtigt at forstå, at arrets endelige udseende afhænger af individuel heling. Vi benytter præcisionsteknikker under operationen for at sikre så diskrete og fine ar som overhovedet muligt.",
  },
  {
    q: "Kan man amme efter en brystreduktion?",
    a: "Evnen til at amme efter en brystreduktion afhænger af den anvendte teknik og hvor meget kirtelvæv, der flyttes eller fjernes. Moderne teknikker har stort fokus på at bevare blodforsyning og forbindelser til brystvorten. Hvis amning er et ønske for fremtiden, prioriterer vi en teknik, der er så skånsom som muligt over for mælkegangene. Vi drøfter altid dette grundigt ved din forundersøgelse, så du kender de realistiske forventninger.",
  },
  {
    q: "Hvornår kan man genoptage træning og arbejde?",
    a: "De fleste kan vende tilbage til stillesiddende arbejde efter 1-2 uger, afhængigt af indgrebets omfang og din generelle heling. Lettere fysisk aktivitet som gåture anbefales hurtigt, mens tungere løft og decideret sportstræning typisk skal vente 4-6 uger for at sikre, at vævet har fået ro til at hele stabilt indvendigt. Du får en detaljeret plan for dit efterforløb med dig hjem fra klinikken.",
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
    text: "Tunge bryster kan medføre betydelige fysiske gener, herunder kroniske smerter i nakke, skuldre og ryg samt hudirritation i brystfolden. Ved at fjerne overskydende kirtel- og fedtvæv letter vi belastningen på kroppen, hvilket ofte giver øjeblikkelig lindring og gør det lettere at være fysisk aktiv.",
  },
  {
    label: "Bevarelse af følesans og blodforsyning",
    text: "Ved anvendelse af moderne teknikker som Renault-teknikken er der stort fokus på at bevare vævets naturlige struktur og blodforsyning. Dette er afgørende for både helingsprocessen og for at bevare følesansen i brystvorten i videst muligt omfang.",
  },
  {
    label: "Individuel planlægning af dit armønster",
    text: "Valget af kirurgisk teknik har betydning for placeringen af arrene. Vi tilbyder alt fra den vertikale teknik, hvor arret begrænses til området omkring brystvorten og ned mod brystfolden, til den klassiske ankerformede brystreduktion ved større volumenmæssige behov. Ved forundersøgelsen planlægger vi det præcise armønster, så det tilpasses din anatomi og dit ønske om det mindst mulige synlige spor.",
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
        h1Italic="med fokus på form og proportioner"
        image="/images/hero-silk.png"
        subtitle="En brystreduktion (reduktionsplastik) er et kirurgisk indgreb, der har til formål at reducere brysternes størrelse og vægt, samtidig med at brystets form og proportioner forbedres. Hos Brystcenter Esbjerg betragter vi indgrebet som en individuelt tilpasset proces, hvor vi forener medicinsk nødvendighed med æstetisk præcision."
        buttons={[
          { label: "Book en speciallægekonsultation i Esbjerg", href: "#book" },
          { label: "Se også brystløft", href: "/behandlinger/brystloeft", variant: "outline" },
        ]}
      />

      {/* ── INTRO ────────────────────────────────────────────────── */}
      <section className="px-8 lg:px-16 py-20 bg-surface">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="font-sans text-xs uppercase tracking-[0.15em] mb-6 text-secondary/40">Teknik</p>
            <h2 className="font-serif text-3xl font-semibold text-secondary mb-6 leading-snug">
              Moderne teknikker: B-teknik (Renault)
            </h2>
            <p className="font-sans text-base leading-relaxed text-secondary/65 mb-5">
              Vi anvender veldokumenterede kirurgiske metoder for at sikre det mest harmoniske resultat. En af de mest innovative
              tilgange i vores center er den såkaldte B-teknik, oprindeligt beskrevet af Renault.
            </p>
            <p className="font-sans text-base leading-relaxed text-secondary/65">
              Denne teknik adskiller sig ved at have et særligt fokus på intern vævsomformning, hvilket optimerer brystets støtte
              og projektion. B-teknikken er særligt målrettet patienter med en øget lateral fylde — altså hvor brystet fremstår
              bredt eller er orienteret ud mod armhulen. Ved at reducere og omforme vævet i de laterale dele af brystet kan vi
              skabe en mere centreret, løftet og ungdommelig brystform.
            </p>
          </div>
          <div>
            <p className="font-sans text-xs uppercase tracking-[0.15em] mb-6 text-secondary/40">Formål</p>
            <h2 className="font-serif text-3xl font-semibold text-secondary mb-6 leading-snug">
              Lindring af fysiske gener og æstetisk balance
            </h2>
            <p className="font-sans text-base leading-relaxed text-secondary/65">
              For mange kvinder er en brystreduktion en vej til en markant forbedret livskvalitet. Behandlingen handler ikke kun
              om udseende, men om at genskabe en krop i balance, hvor brysternes tyngde ikke længere begrænser din hverdag.
            </p>
          </div>
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
          <h2 className="font-serif text-4xl font-semibold text-secondary mb-6">
            Klar til en konsultation?
          </h2>
          <p className="font-sans text-base leading-relaxed mb-10 text-secondary/60">
            Book en uforpligtende konsultation og få en præcis vurdering af dine muligheder hos speciallæge Troels Tei.
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
