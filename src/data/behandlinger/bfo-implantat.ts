import type { FAQItem, FeatureItem } from "@/data/types";

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
    a: "Selve operationen foregår i fuld bedøvelse, så du mærker intet. I dagene efter vil der være ømhed og en følelse af spænding, som minder om en kraftig muskelpine. Vi lægger en individuel smerteplan til dig, så du er dækket ind i den første tid, og de fleste kan vende tilbage til stillesiddende arbejde efter 1–2 uger.",
  },
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
    text: "Vi anvender PU-implantater for at sikre maksimal stabilitet og minimere risikoen for komplikationer som kapseldannelse.",
  },
];
