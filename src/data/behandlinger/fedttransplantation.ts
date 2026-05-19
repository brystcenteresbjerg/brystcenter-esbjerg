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

export const forloebetSection: SectionContent = {
  label: "Forløbet",
  heading: "Hvordan foregår en fedttransplantation?",
  body: "Processen kræver høj teknisk præcision for at sikre, at de transplanterede celler integreres optimalt i målvævet. Da fedttransplantation er afhængig af biologiske forhold, vurderes det endelige resultat efter nogle måneder, når kroppen har optaget en del af det transplanterede væv og stabiliseret den nye volumen.",
};

export const forloebetSteps = [
  {
    n: "01",
    label: "Fedthøst",
    title: "Skånsom fedtsugning af donorområde",
    body: "Indgrebet starter med en kontrolleret høst af fedt fra de aftalte områder. Vi anvender lukkede, lavtryks-systemer og tynde kanyler, så fedtcellerne forbliver intakte. Den skånsomme teknik er afgørende for cellernes overlevelse – og donorområdet får samtidig en fin konturering.",
    bullets: ["Lukket, vævsbeskyttende system", "Tynde kanyler – minimal arvæv", "Konturering af mave / hofter / lår"],
    duration: "45–60 min",
  },
  {
    n: "02",
    label: "Bearbejdning",
    title: "Rensning og koncentration af fedtvæv",
    body: "Det høstede væv overføres til et lukket, sterilt kredsløb, hvor olie, blod og bedøvelsesvæske separeres fra de levedygtige fedtceller og stamceller. Resultatet er et koncentreret, rent transplantat – kun det bedst egnede væv injiceres tilbage.",
    bullets: ["Sterilt, lukket kredsløb", "Adskillelse af olie og bedøvelse", "Bevarelse af regenerative celler"],
    duration: "20–30 min",
  },
  {
    n: "03",
    label: "Transplantation",
    title: "Præcis micro-injektion",
    body: "Fedtet placeres i mange små depoter gennem 2–3 mm kanyler – i flere lag og fra forskellige indstik for at opnå en jævn, tredimensionel fordeling. Den fine spredning sikrer, at hver enkelt fedtcelle hurtigt får adgang til ilt og blodforsyning, hvilket er forudsætningen for permanent integration. Vi overkorrigerer typisk en smule, da kroppen naturligt absorberer 20–40 % af det indsatte fedt.",
    bullets: ["Multi-layer micro-droplet teknik", "2–3 mm indstik – næsten usynlige ar", "Bevidst overkorrektion 20–30 %"],
    duration: "60–90 min",
  },
  {
    n: "04",
    label: "Heling & kontrol",
    title: "Restitution og endelig vurdering",
    body: "De første dage er præget af mild ømhed og hævelse. De fleste er tilbage på let kontorarbejde efter 1–2 uger. Det transplanterede væv etablerer egen blodforsyning over de første 3–4 måneder, og det endelige resultat vurderes ved kontrol efter ca. 6 måneder, når volumen har stabiliseret sig.",
    bullets: ["Tilbage på job efter 1–2 uger", "Stabilisering 3–6 måneder", "Endelig kontrol efter 6 måneder"],
    duration: "Op til 6 mdr.",
  },
];
