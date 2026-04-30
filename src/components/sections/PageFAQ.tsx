"use client";

import { AnimatePresence, motion } from "motion/react";

import { useState } from "react";

type FAQItem = { q: string; a: string };

interface PageFAQProps {
  items: FAQItem[];
  /** @default "full" */
  variant?: "card" | "full";
}

function Accordion({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div>
      {items.map((item, i) => (
        <div key={i} className="border-b border-secondary/10">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-start justify-between gap-8 py-6 text-left"
          >
            <span className="font-serif text-xl text-secondary leading-snug">{item.q}</span>
            <motion.span
              animate={{ rotate: open === i ? 45 : 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="font-sans lg:text-2xl text-xl text-primary shrink-0 mt-0.5 inline-block"
            >
              +
            </motion.span>
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <p className="pb-6 font-sans text-lg leading-relaxed text-secondary/75 max-w-2xl">{item.a}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

export default function PageFAQ({ items, variant = "full" }: PageFAQProps) {
  if (variant === "full") {
    return (
      <div>
        <h2 className="font-serif lg:text-2xl text-xl font-semibold text-secondary mb-14 text-center">FAQ</h2>
        <Accordion items={items} />
      </div>
    );
  }

  return (
    <section className="mt-20 bg-surface-container-low rounded-sm p-10">
      <h2 className="font-serif lg:text-2xl text-xl font-medium text-secondary mb-8">FAQ</h2>
      <Accordion items={items} />
    </section>
  );
}
