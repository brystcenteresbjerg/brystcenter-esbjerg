import type { CtaContent, FAQItem, FeatureItem, SectionContent } from "@/data/types";

export const behandlingSection: SectionContent = {
  label: "Behandling",
  heading: "Regenerativ æstetik: Mere end blot volumen",
  body: "Den moderne tilgang til brystforstørrelse med eget fedt bygger på omfattende international forskning og metoder perfektioneret af bl.a. specialister som Dr. Andrzej Piatkowski og Dr. Roger Khouri. Hos Brystcenter Esbjerg ser vi ikke blot behandlingen som en volumenforøgelse, men også som regenerativ æstetik, hvor vi arbejder med kroppens biologiske byggesten for at optimere både form og vævskvalitet.",
};

export const forloebetSummary = {
  duration: "1 time · ambulant",
  note: "Fuld narkose · kontrol efter 6 mdr.",
};

export const forloebetSection: SectionContent = {
  label: "Forløbet",
  heading: "Hvordan foregår en brystforstørrelse med lipofilling?",
  body: "Processen kræver høj teknisk præcision for at sikre, at de transplanterede celler integreres optimalt i brystvævet. Da fedttransplantation er afhængig af biologiske forhold, vurderes det endelige resultat efter nogle måneder, når kroppen har integreret størstedelen af det transplanterede væv og stabiliseret den nye volumen.",
};

export const cta: CtaContent = {
  heading: "Overvejer du brystforstørrelse med eget fedt?",
  body: "Hos Brystcenter Esbjerg prioriterer vi en grundig forundersøgelse, hvor vi gennemgår dine muligheder og forventninger til resultatet.",
  ctaLabel: "Bestil tid til forundersøgelse i dag",
};

export const faqItems: FAQItem[] = [
  {
    q: "Hvad er fordelen ved stamceller i fedtvæv?",
    a: "Stamcellerne i fedtvævet spiller en central rolle i regenerativ kirurgi. Udover at skabe volumen, medvirker de til at forbedre hudens struktur og elasticitet i det behandlede område. Det betyder, at brystforstørrelse med eget fedt ofte resulterer i sundere hudoverflade, og eventuelle aldersbetingede ændringer påvirkes gunstigt, da vævet hjælpes til at forny sig selv indefra.",
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
    a: "En af de største fordele ved lipofilling er, at indgrebet efterlader minimale ar. Fedtet suges fra donorområdet (f.eks. mave, hofte eller lår) og indsprøjtes i brystet gennem meget millimeter tynde kanyler. Det betyder, at arrene sjældent er større end 2–3 millimeter og typisk placeres strategisk i naturlige hudfolder, hvor de med tiden bliver næsten usynlige. Dette gør metoden ideel til kvinder, der ønsker et kosmetisk resultat uden de klassiske ar fra traditionelle brystoperationer eller implantatindgreb.",
  },
];

export const features: FeatureItem[] = [
  {
    label: "Biologisk integration og naturlig konsistens",
    text: "Ved at anvende eget væv undgår man de risici, der er forbundet med implantater, og opnår en konsistens, der føles som naturligt brystvæv. Integrationen sker gradvist, hvilket giver et naturligt udtryk.",
  },
  {
    label: "Stamcellernes betydning for vævskvaliteten",
    text: "Fedtvæv er rigt på regenerative celler, som ikke blot tilfører fylde, men også har en positiv effekt på hudens kvalitet og den generelle vævsstruktur. Dette bidrager til et resultat, der ser sundt ud og føles levende.",
  },
  {
    label: "Skånsom høst af fedtvæv med moderne systemer",
    text: "For at sikre en høj overlevelsesrate for fedtcellerne anvender vi lukkede og state of the art systemer gennem hele processen. Denne kontrollerede håndtering minimerer traumer mod vævet og sikrer en ensartet og præcis fordeling af volumen i brystet.",
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
    body: "Indgrebet starter med en kontrolleret høst af fedt fra de aftalte områder. Vi anvender lukkede, lavtrykssystemer og milimeter tynde kanyler, så fedtcellerne forbliver intakte. Den skånsomme teknik er afgørende for cellernes overlevelse – og donorstederne - mave, hofte og lår - som fedtet tages fra  får samtidig en fin konturering.",
    bullets: ["Lukket, vævsbeskyttende system", "Tynde kanyler – minimal arvæv", "Konturering af mave / hofter / lår"],
    duration: "30 min.",
  },
  {
    n: "02",
    label: "Bearbejdning",
    title: "Rensning og koncentration af fedtvæv",
    body: "Det høstede væv overføres til et lukket, sterilt kredsløb, hvor olie, blod og bedøvelsesvæske separeres fra de levedygtige fedtceller og stamceller. Resultatet er et koncentreret, rent transplantat – kun det bedst egnede væv injiceres tilbage.",
    bullets: ["Sterilt, lukket kredsløb", "Adskillelse af olie og bedøvelse", "Bevarelse af regenerative celler"],
    duration: "15 min.",
  },
  {
    n: "03",
    label: "Transplantation",
    title: "Præcis micro-injektion",
    body: "Fedtet placeres i mange små depoter gennem 2–3 mm kanyler – i flere lag og fra forskellige indstik for at opnå en jævn, tredimensionel fordeling. Den fine spredning sikrer, at hver enkelt fedtcelle hurtigt får adgang til ilt og blodforsyning, hvilket er forudsætningen for permanent integration. Vi overkorrigerer typisk en smule, da kroppen naturligt absorberer 20–40 % af det indsatte fedt.",
    bullets: ["Multi-layer micro-droplet teknik", "2–3 mm indstik – næsten usynlige ar", "Bevidst overkorrektion 20–30 %"],
    duration: "20 min.",
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
    text: "Søger en moderat og harmonisk forstørrelse af brystet.",
  },
  {
    label: "Kombineret win-win",
    text: "Ønsker at kombinere indgrebet med en fedtsugning af depoter andre steder på kroppen.",
  },
];
