import type { ReactNode } from "react";

interface FeaturesItem {
  label: string;
  text: string;
  icon?: ReactNode;
}

interface FeaturesSectionProps {
  label?: string;
  heading?: string;
  intro?: string;
  items: FeaturesItem[];
  background?: string;
  cardBackground?: string;
  headingAlign?: "left" | "center";
}

export default function FeaturesSection({
  label,
  heading,
  intro,
  items,
  background = "bg-surface-container-low",
  cardBackground = "bg-white",
  headingAlign = "left",
}: FeaturesSectionProps) {
  const hasHeader = label || heading || intro;
  const isCenter = headingAlign === "center";

  return (
    <section className={`px-8 lg:px-16 py-24 ${background}`}>
      <div className="max-w-7xl mx-auto">
        {hasHeader && (
          <div className={`mb-14 ${isCenter ? "text-center" : ""}`}>
            {label && (
              <p className="label mb-6">{label}</p>
            )}
            {heading && (
              <h2
                className={`font-serif font-semibold text-secondary mb-4 ${
                  isCenter ? "text-4xl" : "text-3xl leading-snug"
                }`}
              >
                {heading}
              </h2>
            )}
            {intro && (
              <p
                className={`font-sans text-base leading-relaxed ${
                  isCenter ? "text-secondary/60 max-w-md mx-auto" : "text-secondary/65 max-w-2xl"
                }`}
              >
                {intro}
              </p>
            )}
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {items.map((item) => (
            <div key={item.label} className={`${cardBackground} px-10 py-10 rounded-sm`}>
              {item.icon && <div className="mb-4 text-tertiary">{item.icon}</div>}
              <h3 className="font-sans text-sm font-semibold uppercase tracking-widest text-secondary mb-3">
                {item.label}
              </h3>
              <p className="font-sans text-sm leading-relaxed text-secondary/65">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
