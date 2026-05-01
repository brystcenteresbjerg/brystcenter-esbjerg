import type { CtaContent, FAQItem, FeatureItem, SectionContent } from "@/data/types";

export const behandlingSection: SectionContent = {
  label: "Behandling",
  heading: "Regenerativ æstetik: Mere end blot volumen",
  body: "Den moderne tilgang til brystforstørrelse med eget fedt bygger på omfattende international forskning og metoder perfektioneret af specialister som Andrzej Piatkowski og Roger Khouri. Hos Brystcenter Esbjerg ser vi ikke blot behandlingen som en volumenforøgelse, men også som regenerativ æstetik, hvor vi arbejder med kroppens biologiske byggesten for at optimere både form og vævskvalitet.",
};

export const forloebetSection: SectionContent = {
  label: "Forløbet",
  heading: "Hvordan foregår en brystforstørrelse med lipofilling?",
  body: "Processen kræver høj teknisk præcision for at sikre, at de transplanterede celler integreres optimalt i brystvævet. Da fedttransplantation er afhængig af biologiske forhold, vurderes det endelige resultat efter nogle måneder, når kroppen har optaget en del af det transplanterede væv og stabiliseret den nye volumen.",
};

export const cta: CtaContent = {
  heading: "Overvejer du brystforstørrelse med eget fedt?",
  body: "Hos Brystcenter Esbjerg prioriterer vi en grundig forundersøgelse, hvor vi gennemgår dine muligheder og forventninger til resultatet.",
  ctaLabel: "Bestil tid til forundersøgelse i dag",
};

export const faqItems: FAQItem[] = [
  {
    q: "Hvad er fordelen ved stamceller i fedtvæv?",
    a: "Stamcellerne i fedtvævet spiller en central rolle i regenerativ kirurgi. Udover at skabe volumen medvirker de til at forbedre hudens struktur og elasticitet i det behandlede område. Det betyder, at en brystforstørrelse med eget fedt ofte resulterer i en sundere og mere modstandsdygtig hudoverflade, da vævet hjælpes til at forny sig selv indefra.",
  },
  {
    q: "Kan man kombinere implantat og eget fedt (Hybrid)?",
    a: "Ja, en hybridløsning er ofte den ideelle vej til at opnå både betydelig volumen og en naturlig blødhed. Ved at kombinere et implantat med fedttransplantation kan vi bruge fedtet til at blødgøre kanterne af implantatet og skabe en mere jævn overgang. Dette er særligt effektivt til at optimere form og symmetri hos kvinder med meget lidt naturligt brystvæv.",
  },
  {
    q: "Hvor meget af det transplanterede fedt bliver siddende?",
    a: "Ved en lipofilling skal man forvente, at kroppen naturligt absorberer en del af det transplanterede fedt i månederne efter indgrebet - typisk mellem 20% og 40%. Derfor overkorrigerer vi ofte en smule under selve operationen. Det fedt, der er tilbage efter 3–4 måneder, har etableret sin egen blodforsyning og vil i princippet blive siddende permanent. Resultatet vil herefter følge din krops naturlige svingninger i vægt, præcis som dit øvrige fedtvæv. Vi vurderer altid det endelige resultat ved en kontrol efter ca. seks måneder.",
  },
  {
    q: "Efterlader fedttransplantation synlige ar?",
    a: "En af de største fordele ved lipofilling er, at indgrebet efterlader minimale spor. Fedtet suges fra donorområdet (f.eks. mave eller lår) og indsprøjtes i brystet gennem meget tynde kanyler. Det betyder, at arrene sjældent er større end 2–3 millimeter og typisk placeres strategisk i naturlige hudfolder, hvor de med tiden bliver næsten usynlige. Dette gør metoden ideel til kvinder, der ønsker et kosmetisk resultat uden de klassiske ar fra traditionelle brystoperationer eller implantatindgreb.",
  },
];

export const features: FeatureItem[] = [
  {
    label: "Biologisk integration og naturlig konsistens",
    text: "Ved at anvende eget væv undgår man de risici, der er forbundet med implantater, og opnår en konsistens, der føles som naturligt brystvæv. Integrationen sker gradvist, hvilket giver et diskret udtryk, der følger kroppens naturlige aldringsprocesser.",
  },
  {
    label: "Stamcellernes betydning for vævskvaliteten",
    text: "Fedtvæv er rigt på regenerative celler, som ikke blot tilfører fylde, men også har en positiv effekt på hudens kvalitet og den generelle vævsstruktur. Dette bidrager til et resultat, der ser sundt ud og føles levende.",
  },
  {
    label: "Skånsom høst af fedtvæv med moderne systemer",
    text: "For at sikre en høj overlevelsesrate for fedtcellerne anvender vi lukkede og skånsomme systemer gennem hele processen. Denne kontrollerede håndtering minimerer traumer mod vævet og sikrer en ensartet og præcis fordeling af volumen i brystet.",
  },
];

export interface ForlobetStep {
  n: string;
  label: string;
  title: string;
  body: string;
  bullets: string[];
  duration: string;
}

export const forloebetSteps: ForlobetStep[] = [
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
    title: "Præcis micro-injektion i brystet",
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

export const fordeleSection = {
  label: "Fordele",
  heading: "Fordele ved brystforstørrelse uden implantat",
  intro: "Metoden er særligt fordelagtig for dig, der:",
};

export const benefits: FeatureItem[] = [
  {
    label: "Naturlig og uden fremmedlegemer",
    text: "Ønsker en naturlig brystforstørrelse uden brug af fremmedlegemer.",
  },
  {
    label: "Diskret og harmonisk",
    text: "Søger en diskret og harmonisk ændring af brystets størrelse.",
  },
  {
    label: "Kombineret win-win",
    text: "Ønsker at kombinere indgrebet med en fedtsugning af depoter andre steder på kroppen.",
  },
];
