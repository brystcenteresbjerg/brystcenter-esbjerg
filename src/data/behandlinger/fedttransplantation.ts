import type { CtaContent, FAQItem, FeatureItem, Quote, SectionContent } from "@/data/types";

export const intro: SectionContent = {
  label: "Behandling",
  heading: "Mere end blot volumen: En biologisk opgradering",
  body: "Fedttransplantation (lipofilling) er en af de mest alsidige teknikker inden for moderne plastikkirurgi. Ved at anvende dine egne fedtceller som en naturlig filler kan vi ikke blot genskabe tabt volumen, men også forbedre selve vævets kvalitet. Det skyldes fedtvævets rige indhold af stamceller, som har en unik regenerativ effekt på hud og underliggende væv.",
};

export const introQuote: Quote = {
  text: "Det handler om at arbejde med kroppen, ikke mod den - volumen og biologisk fornyelse i ét indgreb.",
  author: "Kirurg, Troels Tei",
};

export const cta: CtaContent = {
  heading: "Få en faglig vurdering af dine muligheder",
  body: "Drømmer du om et naturligt resultat baseret på dine egne biologiske forudsætninger? Book en uforpligtende konsultation og hør mere om regenerativ æstetik hos speciallæge Troels Tei.",
};

export const faqItems: FAQItem[] = [
  {
    q: "Hvorfor kaldes det regenerativ behandling?",
    a: "I modsætning til kunstige materialer er fedt et levende biologisk væv. Det indeholder en høj koncentration af stamceller, som stimulerer dannelsen af nye blodkar og reducerer arvæv (antifibrose). Når vi flytter fedt til et nyt område, aktiverer vi kroppens egne reparationsmekanismer. Det betyder, at hudens overflade ofte bliver pænere, mere smidig og får en sundere glød. Det er denne kombination af volumen og biologisk fornyelse, vi kalder regenerativ æstetik - det handler om at arbejde med kroppen, ikke mod den.",
  },
  {
    q: "Hvorfor foregår alt i Esbjerg?",
    a: "Præcision er altafgørende ved fedttransplantation. For at fedtcellerne skal overleve flytningen, kræver det en ekstremt skånsom håndtering og specialiseret udstyr. Ved at samle hele forløbet i Esbjerg sikrer vi, at din kirurg, Troels Tei, har fuld kontrol over hele processen - fra den skånsomme fedtsugning til den præcise injektion. Du bliver fulgt tæt samme sted, som du bliver opereret, hvilket giver os de bedste forudsætninger for at sikre, at det transplanterede væv integreres optimalt.",
  },
];

export const features: FeatureItem[] = [
  {
    label: "Ansigtsforyngelse",
    text: "Vi kan genoprette volumen i kinder, tindinger og læber med et resultat, der er blødere og mere permanent end syntetiske fillers.",
  },
  {
    label: "Brystforstørrelse",
    text: "Til dig, der ønsker en moderat volumenøgning og en naturlig følelse - helt uden implantater.",
  },
  {
    label: "Ar og vævsforbedring",
    text: "Vi kan blødgøre stramt arvæv og forbedre hudens elasticitet efter tidligere operationer eller strålebehandling.",
  },
];
