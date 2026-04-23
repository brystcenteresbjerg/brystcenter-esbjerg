export interface Supplement {
  label: string;
  price: string;
}

export interface TreatmentItem {
  label: string;
  desc?: string;
  duration?: string;
  recovery?: string;
  anbefales?: string;
  price: string | null;
  href: string;
  supplements?: Supplement[];
}

export interface TreatmentGroup {
  category: string;
  items: TreatmentItem[];
}

export interface FeaturedCard {
  title: string;
  price: string;
  popular?: boolean;
  bullets: string[];
}

export const featured: FeaturedCard[] = [
  {
    title: "Implantat",
    price: "40.000 kr.",
    bullets: ["Høj-kohæsiv gel", "1,5–2 t operation", "Inkl. narkose og efterkontrol"],
  },
  {
    title: "Eget fedt",
    price: "54.000 kr.",
    popular: true,
    bullets: ["Inkl. fedttransplantation", "Ingen fremmedlegemer", "1 uges restitution"],
  },
  {
    title: "Brystløft",
    price: "32.000 kr.",
    bullets: ["Traditionelt el. Ruth Graf", "Inkl. narkose", "Minimale ar"],
  },
];

export const treatments: TreatmentGroup[] = [
  {
    category: "Konsultation",
    items: [
      {
        label: "Forundersøgelse",
        desc: "Gennemgang af dine ønsker og muligheder med speciallæge Troels Tei.",
        price: "750 kr.",
        href: "/booking",
      },
      {
        label: "Second Opinion",
        desc: "Uafhængig vurdering af dit forløb el. tidligere behandlingsplan.",
        price: "1.500 kr.",
        href: "/booking",
      },
    ],
  },
  {
    category: "Brystforstørrelse",
    items: [
      {
        label: "Brystforstørrelse med implantat",
        desc: "Høj-kohæsive gel-implantater tilpasset din anatomi. 3D-simulering og individuel planlægning.",
        duration: "45-60 min.",
        recovery: "1–2 uger",
        anbefales: "Ønske om volumen eller øge symmetrien",
        price: "fra 40.000 kr.",
        href: "/behandlinger/bfo-implantat",
        supplements: [
          { label: "Tillæg ved implantater over 500 ml.", price: "+ 5.000 kr." },
          { label: "Tillæg v. anatomiske implantater", price: "+?." },
          { label: "Tillæg v. anatomiske Mentor implantater", price: "+?." },
        ],
      },
      {
        label: "Brystforstørrelse med eget fedt (lipofilling)",
        desc: "Naturlig volumen uden fremmedlegemer. Stamcelleanrigt fedtvæv. Inkl. tillæg fedttransplantation.",
        duration: "1,5-2 t",
        recovery: "1-2 uger",
        anbefales: "Moderat volumenønske uden fremmedlegemer og samtidig fedtsuget et el. flere områder",
        price: "fra 32.000 kr.",
        href: "/behandlinger/bfo-eget-fedt-lipofilling",
        supplements: [
          { label: "Tillæg ved implantater over 500 ml.", price: "+ 5.000 kr." },
          { label: "Touch-up 2. behandling", price: "+ 25.000 kr." },
        ],
      },
      {
        label: "Hybrid brystforstørrelse",
        desc: "Kombination af implantat og fedttransplantation for optimalt volumen og naturlighed.",
        duration: "2 t",
        recovery: "1-2 uger",
        anbefales: "Moderat volumenønske og stort mellemrum mellem brysterne",
        price: "fra 44.000 kr.",
        href: "/booking",
        supplements: [
          { label: "Tillæg ved implantater over 500 ml.", price: "+ 5.000 kr." },
          { label: "Tillæg v. anatomiske implantater", price: "+?." },
          { label: "Tillæg v. Mentor implantater", price: "+?." },
        ],
      },
    ],
  },
  {
    category: "Brystløft",
    items: [
      {
        label: "Traditionelt brystløft",
        desc: "Klassisk mastopeksi med fokus på form og projektion. Inkl. narkose.",
        duration: "1,5–2 t",
        recovery: "1-2 uger",
        anbefales: "Efter amning, vægttab eller naturlig hæng",
        price: "36.000 kr.",
        href: "/behandlinger/brystloeft",
      },
      {
        label: "Brystløft · Ruth Graf-teknik",
        desc: "Vertikal mastopeksi med auto-augmentation. Løft og fylde uden implantat — minimale ar. Inkl. narkose.",
        duration: "1,5–2 t",
        recovery: "1-2 uger",
        anbefales: "Hvis passende til din anatomi: efter amning, vægttab eller naturlig hæng",
        price: "36.000 kr.",
        href: "/behandlinger/brystloeft",
      },
    ],
  },
  {
    category: "Brystreduktion",
    items: [
      {
        label: "Brystreduktion",
        desc: "Moderne B-teknik for optimal form og projektion. Lindring af fysiske gener og æstetisk balance.",
        duration: "2 t",
        recovery: "2 uger",
        anbefales: "Fysiske gener eller ubalance i proportioner",
        price: "42.000 kr.",
        href: "/behandlinger/brystreduktion",
      },
      {
        label: "B-plastik / Renault-teknik",
        desc: "Brystløft med reducerende effekt. Teknikvalget afhænger af din anatomi og ønsker.",
        duration: "2 t",
        recovery: "2 uger",
        anbefales: "Fysiske gener eller ubalance i proportioner",
        price: "42.000 kr.",
        href: "/behandlinger/brystreduktion",
      },
    ],
  },
  {
    category: "Revisionskirurgi",
    items: [
      {
        label: "Udskiftning af implantat",
        desc: "Revisionskirurgi med PU-belagte implantater. Præcis placering og langvarig stabilitet.",
        duration: "1–2 t",
        recovery: "1–2 uger",
        anbefales: "Ønske om ændring, kapseldannelse el. implantatkomplikationer",
        price: "45.000 kr.",
        href: "/behandlinger/udskiftning-af-protese",
        supplements: [
          { label: "Tillæg ved implantater over 500 ml.", price: "+ 5.000 kr." },
          { label: "Tillæg v. anatomiske implantater", price: "+?." },
          { label: "Tillæg v. Mentor implantater", price: "+?." },
          { label: "Tillæg v. ved kapseldannelse", price: "+5.000 kr." },
        ],
      },
      {
        label: "Fjernelse af implantat (Eksplantation)",
        desc: "Fjernelse af eksisterende implantater uden indsættelse af nyt implantat.",
        duration: "30-90 min.",
        recovery: "1–2 uger",
        anbefales: "Æstetiske såvel som fysiologiske faktorer",
        price: "30.000 kr.",
        href: "/booking",
        supplements: [
          { label: "Ruptur", price: "fra 3.000 kr." },
          { label: "Kapseldannelse", price: "fra 5.000 kr." },
        ],
      },
    ],
  },
  {
    category: "Fedttransplantation",
    items: [
      {
        label: "Fedttransplantation til ansigtet",
        desc: "Stamcelleanrigt fedt til naturlig volumengenopbygning i ansigtet.",
        duration: "1 t",
        recovery: "2-14 dage",
        anbefales: "Permanent volumenopbygning alternativt til midlertidlige fillers",
        price: "14.000 kr.",
        href: "/booking",
        supplements: [{ label: "Touch up 2. behandling", price: "fra 10.000 kr." }],
      },
      {
        label: "Fedttransplantation til ar og vævsforbedring",
        desc: "Målrettet fedttransplantation til korrektion af ar og forbedring af vævskvalitet.",
        duration: "1–2 t",
        recovery: "2-14 dage",
        anbefales: "Forbedring af ar eller vævskvalitet, f.eks. efter tidligere operationer eller traumer",
        price: "fra 14.000 kr.",
        href: "/booking",
        supplements: [{ label: "Tillæg v. fuld narkose", price: "fra 4.000 kr." }],
      },
    ],
  },
  {
    category: "Korrektioner",
    items: [
      {
        label: "Korrektion af brystvorter",
        desc: "Inddragne brystvorter el. reduktion af areola el. brystvorte. Udføres ofte i lokalbedøvelse.",
        price: "fra 14.000 kr.",
        href: "/booking",
      },
    ],
  },
];

export const included: string[] = [
  "Indledende konsultation med speciallæge",
  "Selve operationen inkl. narkose",
  "Ophold på klinikken",
  "Planlagte efterkontroller",
  "Adgang til kirurgen ved spørgsmål",
];
