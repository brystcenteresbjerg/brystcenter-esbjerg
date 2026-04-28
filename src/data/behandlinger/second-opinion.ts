import type { CtaContent, FAQItem, FeatureItem, Quote, SectionContent } from "@/data/types";

export const intro: SectionContent = {
  label: "Vurdering",
  heading: "En objektiv gennemgang af dit forløb",
  body: "Når du vælger en second opinion hos os, møder du en kirurg, der ser på din sag med friske øjne. Formålet er ikke at vurdere andres arbejde, men at give dig en objektiv status på brystets anatomi, implantatets placering eller vævets heling. Vi gennemgår sammen dit hidtidige forløb og ser på, om dine forventninger stemmer overens med det fysiske resultat.",
};

export const introQuote: Quote = {
  text: "En second opinion handler om at give dig klarhed og tryghed - gennem en saglig gennemgang af din situation.",
  author: "Kirurg, Troels Tei",
};

export const hvornaar: SectionContent = {
  label: "Relevans",
  heading: "Hvornår er en second opinion relevant?",
  body: "En second opinion kan være relevant i mange situationer - eksempelvis hvis du oplever uventede smerter, hvis brystet har ændret form, eller hvis du blot har brug for en bekræftelse på, at din opheling følger den rette kurve. Målet er altid at give dig det fundament, du har brug for, for at kunne træffe den rigtige beslutning for din krop fremover.",
};

export const cta: CtaContent = {
  heading: "Har du brug for ro i maven?",
  body: "Det vigtigste efter en operation er, at du føler dig tryg og velinformeret. Hos Brystcenter Esbjerg prioriterer vi den uvildige dialog, hvor vi tager os tid til at gennemgå din situation og dine muligheder for udbedring.",
  ctaLabel: "Kontakt os for en uvildig vurdering",
};

export const faqItems: FAQItem[] = [
  {
    q: "Hvad skal jeg medbringe til en second opinion?",
    a: "For at kunne give dig den mest præcise vurdering, er det en stor hjælp, hvis du kan medbringe relevante informationer fra din tidligere operation. Det gælder især din operationsbeskrivelse og dit implantatkort (hvis du har implantater), da det fortæller os præcis, hvilken teknik og hvilke materialer der er anvendt. Jo mere indsigt vi har i det oprindelige indgreb, desto bedre kan vi rådgive dig om de næste skridt eller eventuelle korrektioner.",
  },
  {
    q: "Er en second opinion det samme som en klagesag?",
    a: "Nej, en second opinion hos Brystcenter Esbjerg er en lægelig vurdering af din nuværende tilstand og dine fremtidige muligheder. Vi agerer ikke som part i en eventuel klagesag mod en anden klinik, men fokuserer udelukkende på din sundhed og det æstetiske resultat. Vores opgave er at give dig en uvildig, faglig status, så du kan komme videre med ro i maven - uanset om det kræver en korrektion eller blot en beroligende forklaring på din opheling.",
  },
];

export const features: FeatureItem[] = [
  {
    label: "Uvildig rådgivning",
    text: "Vi forklarer de anatomiske årsager til din nuværende situation - uden forudindtagede konklusioner og uden at tage parti.",
  },
  {
    label: "Anbefalinger til udbedring",
    text: "Vi giver konkrete anbefalinger til, hvordan resultatet eventuelt kan optimeres eller korrigeres, baseret på din specifikke anatomi.",
  },
  {
    label: "Tryghed i dialogen",
    text: "Vi tager os tid til de spørgsmål, du måske ikke føler, du har fået svar på tidligere. Ingen spørgsmål er for små.",
  },
];
