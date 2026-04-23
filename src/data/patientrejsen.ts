import type { FAQItem } from "@/data/types";

export interface Step {
  number: string;
  label: string;
  title: string;
  body: string;
  time?: string;
}

export const steps: Step[] = [
  {
    number: "01",
    label: "Første kontakt",
    time: "Dag 1",
    title: "Du tager det første skridt",
    body: "Det hele begynder med, at du kontakter os i Esbjerg. Vi besvarer dine indledende spørgsmål og aftaler et tidspunkt til en uforpligtende konsultation. Hos os er der ingen ventelister, og du får direkte kontakt til det team, der følger dig hele vejen.",
  },
  {
    number: "02",
    label: "Konsultation",
    time: "Uge 1–2",
    title: "En grundig og personlig samtale",
    body: "Ved konsultationen i vores vante rammer i Esbjerg møder du speciallæge Troels Tei. Vi gennemgår din anatomi, dine ønsker og dine muligheder, så vi sammen kan lægge en plan, der skaber naturlig harmoni. Du modtager altid en præcis prisindikation med det samme.",
  },
  {
    number: "03",
    label: "Planlægning",
    time: "Uge 2–6",
    title: "Vi tilrettelægger dit forløb",
    body: "Når du har besluttet dig, planlægger vi din operationsdag i Esbjerg. Du modtager detaljerede forberedelsesretningslinjer, og da du er tilknyttet den samme speciallæge gennem hele forløbet, er vi altid tilgængelige for spørgsmål helt frem til operationsdagen.",
  },
  {
    number: "04",
    label: "Operationsdagen",
    time: "1–3 timer",
    title: "I trygge hænder fra start til slut",
    body: "Du ankommer til klinikken i Esbjerg, hvor du modtages af vores faste team. Indgrebet foregår i fuld narkose, og Troels Tei gennemgår planen med dig umiddelbart inden operationen. Du er i de samme kendte hænder fra start til slut.",
  },
  {
    number: "05",
    label: "Restitution",
    time: "Uge 1–8",
    title: "Ro og tæt opfølgning",
    body: "De første dage efter operationen er hvile vigtigt. Du modtager skriftlige plejevejledninger og har direkte adgang til klinikken i Esbjerg ved spørgsmål. Vi planlægger dine kontroller, så vi sikrer, at din opheling følger planen i trygge og vante omgivelser.",
  },
  {
    number: "06",
    label: "Det endelige resultat",
    time: "Måned 3–6",
    title: "Dit resultat sætter sig",
    body: "Hævelse og spænding aftager gradvist over de første 4-8 uger. Det endelige resultat er typisk synligt 3-6 måneder efter operationen. Vi er her stadig - og ved den afsluttende kontrol i Esbjerg sikrer vi os sammen, at du er fuldt tilfreds med dit resultat.",
  },
];

export const faqs: FAQItem[] = [
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
