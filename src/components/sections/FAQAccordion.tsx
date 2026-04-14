"use client";

import { useState } from "react";

type FAQItem = { q: string; a: string };

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div>
      {items.map((item, i) => (
        <div key={i} className="border-b border-secondary/10">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-start justify-between gap-8 py-6 text-left"
          >
            <span className="font-serif text-xl text-secondary leading-snug">
              {item.q}
            </span>
            <span
              className={`font-sans text-2xl text-primary shrink-0 mt-0.5 transition-transform ${open === i ? "rotate-45" : ""}`}
            >
              +
            </span>
          </button>
          {open === i && (
            <p className="pb-6 font-sans text-base leading-relaxed text-secondary/70 max-w-2xl">
              {item.a}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
