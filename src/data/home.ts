import type { FAQItem } from "@/data/types";

export const introSection = {
  patientrejsen: {
    label: "Patientrejsen",
    heading: "Hele forløbet samlet ét sted - i Esbjerg",
    bodyPre: "Hos Brystcenter Esbjerg tror vi på, at tryghed skabes gennem kontinuitet. Vi har valgt at samle hele din",
    linkLabel: "patientrejse",
    linkHref: "/patientrejsen",
    bodyPost: "under ét tag, så du aldrig skal rejse mellem forskellige byer eller klinikker for at gennemføre dit forløb.",
    body2:
      "Fra din første forundersøgelse til selve operationsdagen og de efterfølgende kontroller foregår alt i vores rammer i Esbjerg. Du er gennem hele forløbet tilknyttet den samme speciallæge, som kender din forhistorie og dine ønsker.",
  },
  filosofi: {
    label: "Filosofi",
    heading: "Specialister i naturlig harmoni",
    body: "Uanset om dit ønske er en brystforstørrelse, et brystløft eller en brystreduktion, tilbyder vi et forløb baseret på tryghed og faglig tyngde. Vi arbejder ud fra en filosofi om naturlig harmoni, hvor valget af metode altid afhænger af din specifikke vævskvalitet, anatomi og det ønskede resultat. Hos os møder du ikke standardløsninger, men individuelle løsninger med fokus på ukompliceret kirurgi og fravær af problemer.",
  },
};

export const faqItems: FAQItem[] = [
  {
    q: "Hvad koster brystkirurgi i Esbjerg?",
    a: "Prisen afhænger af den valgte procedure, kompleksiteten og dine individuelle ønsker. Vi tilbyder en indledende konsultation, hvor vi gennemgår din situation og giver en præcis prisindikation. Hos Brystcenter Esbjerg er gennemsigtighed en prioritet – vi ønsker, at du har alle informationer, inden du træffer en beslutning.",
    link: { label: "Se vores priser", href: "/priser" },
  },
  {
    q: "Er brystforstørrelse med eget fedt permanent?",
    a: "Lipofilling giver et langtidsholdbart resultat. Typisk overlever 60–80% af det transplanterede fedtvæv permanent, afhængigt af teknik og biologiske faktorer. Det overlevede fedt opfører sig som kroppens eget og vil påvirkes af vægtudsving. Resultatet stabiliserer sig over de første 3–6 måneder, hvorefter det er stabilt.",
  },
  {
    q: "Hvor lang er helingsperioden efter et brystløft?",
    a: "De fleste er klar til let kontorarbejde efter 1–2 uger. Fysisk krævende aktiviteter og sport frarådes i 4–6 uger. Hævelse og ømhed aftager gradvist. Det endelige resultat ses typisk 6 måneder efter operationen, når vævet har sat sig.",
  },
];

export const services = [
  {
    category: "01 · Brystforstørrelse (BFO)",
    title: "Implantat eller eget fedt",
    links: [
      { label: "Implantat →", href: "/behandlinger/bfo-implantat" },
      { label: "Eget fedt →", href: "/behandlinger/bfo-eget-fedt-lipofilling" },
    ],
    image: "/images/brunette_smile.jpg",
    span: "md:col-span-2",
    minHeight: "min-h-[320px]",
  },
  {
    category: "02 · Mastopeksi",
    title: "Brystløft",
    links: [{ label: "Læs mere →", href: "/behandlinger/brystloeft" }],
    image: "/images/body_breast_hand.jpg",
    span: "md:col-span-1",
    minHeight: "min-h-[240px]",
  },
  {
    category: "03 · Reduktion",
    title: "Brystreduktion",
    links: [{ label: "Læs mere →", href: "/behandlinger/brystreduktion" }],
    image: "/images/collarbones_shoulders_brunette.jpg",
    span: "md:col-span-1",
    minHeight: "min-h-[240px]",
  },
  {
    category: "04 · Revision",
    title: "Implantatudskiftning",
    links: [{ label: "Læs mere →", href: "/behandlinger/udskiftning-af-protese" }],
    image: "/images/expertise_udskiftning.jpg",
    span: "md:col-span-2",
    minHeight: "min-h-[240px]",
  },
];

export const treatmentDetails = [
  {
    id: "bfo",
    heading: "Brystforstørrelse med implantat eller eget fedt",
    intro: "Vi tilbyder flere metoder til volumenøgning, så vi kan ramme præcis det udtryk, du søger:",
    image: "/images/implants_hand_one.jpg",
    items: [
      {
        label: "Implantater",
        text: "Velegnet til en tydelig volumenøgning. Vi tilbyder flere implantattyper, profiler og producenter, så vi kan opfylde dine ønsker til form og projektion.",
      },
      {
        label: "Fedttransplantation (lipofilling)",
        text: "Naturlig volumen med dit eget væv. Velegnet til en diskret brystforstørrelse og formforbedring. Vi anvender et dedikeret lipofilling-system (Lipografter) for optimal overlevelse af fedtcellerne.",
      },
      {
        label: "Hybrid brystforstørrelse",
        text: "En kombination af implantat og fedt, der giver både volumen og en blødere kontur. Valget afhænger af en individuel vurdering af din vævskvalitet.",
      },
    ],
  },
  {
    id: "loft",
    heading: "Brystløft",
    intro:
      "Ved korrektion af brystets form og tyngde anvender vi individuelt tilpassede teknikker afhængig af hudoverskud og graden af ptose (hæng):",
    image: "/images/breast_back_ponytail_smile.jpg",
    items: [
      {
        label: "Brystløft",
        text: "Vi udfører alt fra klassiske ankerformede brystløft til vertikale brystløft med Ruth Graf-teknik, hvor eget væv omplaceres til de øvre dele af brystet for naturlig fylde. Vi tilbyder også B-teknik (Renault), særligt velegnet hvis brystet fremstår bredt eller er orienteret ud mod armhulen.",
      },
    ],
  },
  {
    id: "reduktion",
    heading: "Brystreduktion",
    intro:
      "Ved korrektion af brystets form og tyngde anvender vi individuelt tilpassede teknikker afhængig af hudoverskud og graden af ptose (hæng):",
    image: "/images/breast_back_ponytail_smile.jpg",
    items: [
      {
        label: "Brystreduktion",
        text: "Vi anvender gennemprøvede kirurgiske teknikker for at opnå reduktion af volumen og vægt samt lindring af fysiske gener. Målet er altid et funktionelt og æstetisk balanceret resultat.",
      },
    ],
  },
  {
    id: "udskiftning",
    heading: "Udskiftning af brystimplantater",
    intro: "Revision af tidligere brystoperationer stiller særlige krav til kirurgisk erfaring og præcis planlægning:",
    image: "/images/collarbones_skin.jpg",
    items: [
      {
        label: "Revision og udskiftning",
        text: "Revision og implantatudskiftning kræver særlig erfaring, da lommen (kaviteten) fra tidligere operationer ofte afviger fra det nye implantats størrelse og form. For at sikre optimal stabilitet anvender vi implantater med særlige overflader (PU-implantater), som reducerer risikoen for forskydning og rotation.",
      },
    ],
  },
];
