"use client";

import { useState } from "react";

type FAQItem = { q: string; a: string };

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div>
      {items.map((item, i) => (
        <div
          key={i}
          style={{
            borderBottom: "1px solid rgba(44, 62, 80, 0.10)",
          }}
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-start justify-between gap-8 py-6 text-left"
          >
            <span className="font-serif text-xl text-secondary leading-snug">
              {item.q}
            </span>
            <span
              className="font-sans text-2xl shrink-0 mt-0.5 transition-transform"
              style={{
                color: "#7D562D",
                transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
              }}
            >
              +
            </span>
          </button>
          {open === i && (
            <p className="pb-6 font-sans text-base leading-relaxed max-w-2xl"
               style={{ color: "rgba(44, 62, 80, 0.70)" }}>
              {item.a}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
