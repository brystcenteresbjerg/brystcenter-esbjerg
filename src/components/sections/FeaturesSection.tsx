"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";

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
  columns?: 2 | 3;
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function FeaturesSection({
  label,
  heading,
  intro,
  items,
  background = "bg-surface-container-low",
  cardBackground = "bg-white",
  headingAlign = "left",
  columns = 3,
}: FeaturesSectionProps) {
  const hasHeader = label || heading || intro;
  const isCenter = headingAlign === "center";

  return (
    <section className={`px-8 lg:px-16 py-24 ${background}`}>
      <div className="max-w-7xl mx-auto">
        {hasHeader && (
          <motion.div
            className={`mb-14 ${isCenter ? "text-center" : ""}`}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {label && <p className="label mb-6">{label}</p>}
            {heading && (
              <h2 className={`font-serif font-semibold text-secondary mb-4 ${isCenter ? "text-4xl" : "text-2xl leading-snug"}`}>
                {heading}
              </h2>
            )}
            {intro && (
              <p
                className={`font-sans text-base leading-relaxed ${isCenter ? "text-secondary/85 max-w-md mx-auto" : "max-w-2xl"}`}
              >
                {intro}
              </p>
            )}
          </motion.div>
        )}
        <motion.div
          className={`grid grid-cols-1 gap-10 ${columns === 2 ? "md:grid-cols-2" : "md:grid-cols-3"}`}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {items.map((item) => (
            <motion.div key={item.label} variants={cardVariants} className={`${cardBackground} px-10 py-10 rounded-sm`}>
              {item.icon && <div className="mb-4 text-tertiary">{item.icon}</div>}
              <h3 className="font-sans text-sm font-semibold uppercase tracking-widest text-secondary mb-3">{item.label}</h3>
              <p className="font-sans text-base leading-relaxed text-secondary/85">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
