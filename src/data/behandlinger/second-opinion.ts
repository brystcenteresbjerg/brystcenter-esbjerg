import type { CtaContent, FAQItem, FeatureItem, Quote, SectionContent } from "@/data/types";

export const intro: SectionContent = {
  label: "Vurdering",
  heading: "En objektiv gennemgang af dit forløb",
  body: "Når du vælger en second opinion hos os, møder du en kirurg, der ser på din sag med friske øjne. Formålet er ikke at vurdere andres arbejde, men at give dig en objektiv status på brystets anatomi, implantatets placering eller vævets heling. Vi gennemgår sammen dit hidtidige forløb og ser på, om dine forventninger stemmer overens med det fysiske resultat.",
};

export const introQuote: Quote = {
  text: "En second opinion handler om at vurdere tidligere udførte operationer ud fra best practice og standarder, der giver dig overblik over dine muligheder for at opnå et andet og bedre resultat, der gør dig tilfreds.",
  author: "Plastikkirurg, Troels Tei",
};

export const cta: CtaContent = {
  heading: "Har du brug for ro i maven?",
  body: "Det vigtigste efter en operation er, at du føler dig tryg og velinformeret. Hos Brystcenter Esbjerg prioriterer vi den uvildige dialog, hvor vi tager os tid til at gennemgå din situation og dine muligheder for udbedring.",
  ctaLabel: "Kontakt os for en uvildig vurdering",
};

export const faqItems: FAQItem[] = [
  {
    q: "Hvad skal jeg medbringe til en second opinion?",
    a: "For at kunne give dig den mest præcise vurdering, er det en stor hjælp, hvis du kan medbringe relevante informationer fra din tidligere operation. Det gælder især din operationsbeskrivelse og dit implantatkort (hvis du har implantater), da det fortæller os præcis, hvilken teknik der er anvendt. Jo mere indsigt vi har i det oprindelige indgreb, desto bedre kan vi rådgive dig om de næste skridt eller eventuelle korrektioner.",
  },
];

export const features: FeatureItem[] = [
  {
    label: "Uvildig rådgivning",
    text: "Vi forklarer de anatomiske årsager til din nuværende situation ud fra best practice og standarder indenfor plastikkirurgi.",
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
