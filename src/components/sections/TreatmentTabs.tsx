"use client";

import { AnimatePresence, motion } from "motion/react";

import Image from "next/image";
import { useState } from "react";

type TreatmentItem = { label: string | null; text: string };
type TreatmentGroup = {
  id: string;
  heading: string;
  intro: string | null;
  image: string;
  items: TreatmentItem[];
};

const fade = {
  initial: { opacity: 0, y: 6 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -6 },
  transition: { duration: 0.28, ease: [0.2, 0.8, 0.2, 1] as [number, number, number, number] },
};

export default function TreatmentTabs({ groups }: { groups: TreatmentGroup[] }) {
  const [activeId, setActiveId] = useState(groups[0].id);
  const group = groups.find((g) => g.id === activeId) ?? groups[0];

  return (
    <section className="px-8 lg:px-16 py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="label mb-4">Behandlinger</p>
          <h2 className="font-serif lg:text-4xl text-2xl font-semibold text-secondary">Behandlingstyper i detaljer</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Tab list */}
          <div className="lg:col-span-4 flex flex-col">
            {groups.map((g, i) => {
              const isActive = activeId === g.id;
              return (
                <button
                  key={g.id}
                  onClick={() => setActiveId(g.id)}
                  className={`text-left py-6 border-t border-secondary/10 last:border-b transition-colors group ${
                    isActive ? "" : "hover:bg-surface/40"
                  }`}
                >
                  <div className="flex items-start gap-5 px-1">
                    <span
                      className={`font-serif text-sm tabular-nums pt-1 transition-colors ${
                        isActive ? "text-primary" : "text-secondary/40"
                      }`}
                    >
                      0{i + 1}
                    </span>
                    <div className="flex-1">
                      <p
                        className={`font-serif text-lg leading-snug transition-colors ${
                          isActive ? "text-secondary" : "text-secondary/55 group-hover:text-secondary/80"
                        }`}
                      >
                        {g.heading}
                      </p>
                    </div>
                    <span
                      className={`font-sans text-lg shrink-0 transition-all ${
                        isActive ? "text-primary translate-x-0" : "text-transparent -translate-x-2"
                      }`}
                    >
                      →
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Content + image */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="relative aspect-3/4 md:aspect-auto md:h-full md:min-h-130 rounded-sm overflow-hidden bg-surface-container">
              <AnimatePresence mode="wait">
                <motion.div key={group.id + "-img"} className="absolute inset-0" {...fade}>
                  <Image src={group.image} alt="" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                </motion.div>
              </AnimatePresence>
            </div>

            <AnimatePresence mode="wait">
              <motion.div key={group.id + "-text"} {...fade}>
                {group.intro && <p className="font-sans text-sm text-secondary/75 leading-relaxed mb-8 italic">{group.intro}</p>}
                <div className="space-y-7">
                  {group.items.map((item, j) => (
                    <div key={j}>
                      {item.label && (
                        <p className="font-sans text-xs font-semibold text-secondary uppercase tracking-[0.12em] mb-2">
                          {item.label}
                        </p>
                      )}
                      <p className="font-sans text-base leading-relaxed text-secondary/75">{item.text}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
