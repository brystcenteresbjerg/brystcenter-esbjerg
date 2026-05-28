import type { CtaContent, FAQItem, FeatureItem, Quote, SectionContent } from "@/data/types";

export const alaCarteSection = {
  image: "/images/collarbone_hands_breasts_cover.jpg",
  quote: {
    text: "Kosmetisk kirurgi skal være sikkert og ukompliceret.",
    author: "Plastikkirurg, Troels Tei",
  } satisfies Quote,
  label: "Behandling",
  heading: "En «à la carte»-tilgang til din krop",
};

export const featuresContent = {
  label: "Rådgivning",
  heading: "Valg af implantat",
  intro:
    "For at sikre det perfekte match tilbyder vi et bredt udvalg af implantater fra anerkendte producenter. Ved forundersøgelsen gennemgår vi dine muligheder i detaljer, så du er tryg ved dit valg. Vi rådgiver dig om forskellene på:",
};

export const splitContent: SectionContent = {
  label: "Teknik",
  heading: "Placering og kirurgisk præcision",
  body: "Teknikken bag placeringen af implantatet er afgørende for det endelige udtryk. Afhængig af mængden af dit eget brystvæv kan implantatet placeres enten over eller under brystmusklen. Vores plastikkirurg Troels Tei benytter teknikker, der sikrer, at overgangen mellem dit eget væv og implantatet bliver så usynlig som muligt — essentielt for at opnå den naturlige harmoni, vi efterstræber.",
};

export const cta: CtaContent = {
  heading: "Tag det næste skridt mod naturlig harmoni",
  body: "Vi tror på, at de bedste resultater skabes gennem individuel planlægning og kirurgisk præcision. Kontakt klinikken i Esbjerg for en samtale om dine muligheder.",
  ctaLabel: "Bestil tid til forundersøgelse i dag",
};

export const faqItems: FAQItem[] = [
  {
    q: "Hvor lang tid holder et brystimplantat?",
    a: "Moderne implantater af høj kvalitet er skabt til at holde i mange år. Selvom der ikke findes en decideret 'udløbsdato', anbefaler vi regelmæssige tjek. Mange vælger at få dem udskiftet efter 10–15 år, enten på grund af naturlige forandringer i kroppen eller ønske om en ny form. Vi anvender kun dokumenterede implantater med livslang produktgaranti mod brud.",
  },
  {
    q: "Kan man amme efter en brystforstørrelse?",
    a: "I langt de fleste tilfælde kan man amme normalt efter en brystforstørrelse med implantater. Fordi vi placerer implantatet bag brystkirtlen eller muskelvævet, bliver mælkegangene og nerveforsyningen til brystvorten som regel ikke berørt. Ved forundersøgelsen gennemgår vi dine fremtidsplaner, så vi kan vælge den mest skånsomme teknik.",
  },
  {
    q: "Gør det ondt at få lagt implantater ind?",
    a: "Selve operationen foregår i fuld bedøvelse, så du mærker intet. I dagene efter vil der være ømhed og en følelse af spænding, som minder om en kraftig muskelpine. Vi ilægger lokalbedøvelse i hulrummet, hvor implantatet er placeret og anvender muskelafslappende medicin, så man minimerer behovet for morfin og undgår de kendte bivirkninger med kvalme. Vi lægger en individuel smerteplan til dig, så du er dækket ind den første tid, og de fleste kan vende tilbage til stillesiddende arbejde efter 1–2 uger.",
  },
];

export const alaCarteIntro: string[] = [
  "Vi tror ikke på standardløsninger. Der findes ikke ét implantat, der passer til alle. Derfor arbejder vi ud fra et «à la carte»-princip, hvor vi udvælger både implantattype og kirurgisk teknik specifikt til dig.",
  "Denne differentierede tilgang betyder, at vi kan tage præcis højde for:",
];

export const alaCartePoints: string[] = [
  "Brystets nuværende udgangspunkt og symmetri.",
  "Din huds elasticitet og vævets kvalitet.",
  "Den ønskede volumen og form i balance med din øvrige kropsbygning.",
];

export const implantChoices: FeatureItem[] = [
  {
    label: "Runde vs. Anatomiske (dråbeformede)",
    text: "Afhængig af om du ønsker mest fylde øverst eller et mere naturligt fald.",
  },
  {
    label: "Profil og Projektion",
    text: "Hvor meget brystet skal træde frem fra brystkassen.",
  },
  {
    label: "Overfladestruktur",
    text: "Vi anvender implantater med alle typer overflader inkl. PU-implantater for at sikre maksimal stabilitet og minimere risikoen for komplikationer som forskydning, rotation og kapseldannelse.",
  },
];
