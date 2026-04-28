export interface FAQItem {
  q: string;
  a: string;
}

export interface FeatureItem {
  label: string;
  text: string;
}

export interface SectionContent {
  label: string;
  heading: string;
  body: string;
  body2?: string;
}

export interface Quote {
  text: string;
  author: string;
}

export interface TestimonialContent {
  quote: string;
  name: string;
  treatment: string;
}

export interface CtaContent {
  heading: string;
  body: string;
  ctaLabel?: string;
}
