# Brystcenter Esbjerg

Marketing website for Brystcenter Esbjerg — a specialist breast surgery clinic in Esbjerg, Denmark. Built with Next.js 16 App Router, Tailwind CSS v4, and TypeScript.

## Tech stack

- **Next.js 16** (App Router) — routing, per-page metadata, image optimisation
- **React 19** — UI
- **Tailwind CSS v4** — styling via custom design tokens
- **TypeScript 5** — full type coverage
- **Motion v12** — animations (accordion, transitions)
- **Lucide React** — icons

## Project structure

```
src/
├── app/                        # Routes (Next.js App Router)
│   ├── behandlinger/           # Treatment pages
│   │   ├── bfo-implantat/      # Breast augmentation with implants
│   │   ├── bfo-eget-fedt-lipofilling/  # Fat transfer augmentation
│   │   ├── brystloeft/         # Breast lift
│   │   ├── brystreduktion/     # Breast reduction
│   │   ├── fedttransplantation/# Fat transplantation
│   │   ├── second-opinion/     # Second opinion consultation
│   │   └── udskiftning-af-protese/     # Implant replacement
│   ├── booking/                # Booking page
│   ├── moed-os/                # About / meet us
│   ├── patientrejsen/          # Patient journey
│   └── priser/                 # Pricing
├── components/
│   ├── layout/                 # Header, Footer, ConsultationFloat
│   ├── sections/               # Reusable page sections
│   │   ├── PageHero.tsx        # Full-bleed hero (image or video)
│   │   ├── TreatmentFactsBar.tsx
│   │   ├── SplitSection.tsx
│   │   ├── FeaturesSection.tsx
│   │   ├── FeaturesWithLeadImage.tsx
│   │   ├── ImageListSection.tsx
│   │   ├── PageFAQ.tsx         # Animated accordion
│   │   ├── CtaSection.tsx
│   │   ├── Testimonial.tsx
│   │   └── PatientTimeline.tsx
│   └── ui/                     # Button and other primitives
└── data/
    ├── behandlinger/           # Per-page copy (label, heading, body, FAQ, features)
    ├── priser.ts               # Treatment pricing and facts bar data
    └── types.ts                # Shared TypeScript interfaces
```

## Content architecture

All page copy lives in `src/data/behandlinger/<slug>.ts` — pages import from there and are purely structural (which components, which images, which icons). This keeps SEO text versioned alongside code and makes it easy to update copy without touching layout.

Shared interfaces (`SectionContent`, `FeatureItem`, `FAQItem`, `CtaContent`, etc.) are defined in `src/data/types.ts`.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm run start
```
