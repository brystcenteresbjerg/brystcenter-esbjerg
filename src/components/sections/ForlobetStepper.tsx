"use client";

import { AnimatePresence, motion } from "motion/react";

import { useState } from "react";

export interface ForlobetStep {
  n: string;
  label: string;
  title: string;
  body: string;
  bullets: string[];
  duration: string;
}

interface Props {
  label: string;
  heading: string;
  body: string;
  steps: ForlobetStep[];
  summary: { duration: string; note: string };
}

export default function ForlobetStepper({ label, heading, body, steps, summary }: Props) {
  const [active, setActive] = useState(0);
  const s = steps[active];
  const progress = ((active + 1) / steps.length) * 100;

  return (
    <section className="px-8 lg:px-16 py-24 bg-surface-container-low" aria-labelledby="forlobet-heading">
      <div className="max-w-6xl mx-auto">
        {/* Intro */}
        <div className="max-w-3xl mb-14">
          <p className="label mb-6">{label}</p>
          <h2 id="forlobet-heading" className="font-serif text-3xl font-semibold text-secondary mb-6 leading-snug">
            {heading}
          </h2>
          <p className="font-sans text-base leading-relaxed text-secondary/90">{body}</p>
        </div>

        {/* Step tabs */}
        <div
          role="tablist"
          className={`grid grid-cols-2 ${{ 2: "md:grid-cols-2", 3: "md:grid-cols-3", 4: "md:grid-cols-4", 5: "md:grid-cols-5" }[steps.length] ?? "md:grid-cols-4"}`}
          style={{ borderTop: "1px solid rgba(44,62,80,0.10)" }}
        >
          {steps.map((step, i) => {
            const isActive = i === active;
            return (
              <button
                key={step.n}
                role="tab"
                aria-selected={isActive}
                aria-controls="forlobet-panel"
                id={`forlobet-tab-${i}`}
                onClick={() => setActive(i)}
                className="text-left py-5 px-4 -mt-px transition-colors"
                style={{
                  background: "transparent",
                  border: "none",
                  borderTop: `2px solid ${isActive ? "var(--primary)" : "transparent"}`,
                  cursor: "pointer",
                  outline: "none",
                }}
              >
                <span
                  className="font-serif block mb-1.5 transition-colors"
                  style={{
                    fontSize: 14,
                    color: isActive ? "var(--primary)" : "rgba(44,62,80,0.75)",
                    fontWeight: 500,
                    letterSpacing: "0.05em",
                  }}
                >
                  {step.n}
                </span>
                <p
                  className="font-sans transition-colors"
                  style={{
                    fontSize: 13,
                    fontWeight: isActive ? 600 : 500,
                    color: isActive ? "var(--secondary)" : "rgba(44,62,80,0.80)",
                    lineHeight: 1.3,
                  }}
                >
                  {step.label}
                </p>
              </button>
            );
          })}
        </div>

        {/* Active panel */}
        <div
          id="forlobet-panel"
          role="tabpanel"
          aria-labelledby={`forlobet-tab-${active}`}
          className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12"
        >
          {/* Left — content */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
              >
                <p
                  className="font-sans uppercase mb-3"
                  style={{ fontSize: 11, letterSpacing: "0.18em", color: "var(--primary)" }}
                >
                  Trin {active + 1} af {steps.length} · {s.duration}
                </p>
                <h3 className="font-serif text-2xl text-secondary mb-5 leading-snug" style={{ fontWeight: 500 }}>
                  {s.title}
                </h3>
                <p className="font-sans text-base leading-relaxed text-secondary/90 mb-7">{s.body}</p>
                <ul
                  className="flex flex-col gap-2.5 mb-10"
                  style={{ borderLeft: "2px solid var(--primary-container)", paddingLeft: 18 }}
                >
                  {s.bullets.map((b) => (
                    <li key={b} className="font-sans text-sm text-secondary/85">
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>

            {/* Progress + nav */}
            <div className="flex items-center gap-6">
              <button
                onClick={() => setActive(Math.max(0, active - 1))}
                disabled={active === 0}
                className="font-sans text-sm"
                style={{
                  color: active === 0 ? "rgba(44,62,80,0.30)" : "var(--secondary)",
                  background: "transparent",
                  border: "none",
                  cursor: active === 0 ? "default" : "pointer",
                  padding: 0,
                }}
              >
                ← Forrige
              </button>
              <div className="flex-1 h-0.5 relative" style={{ background: "rgba(125,86,45,0.15)" }}>
                <motion.div
                  className="absolute left-0 top-0 h-full"
                  style={{ background: "var(--primary)" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
              </div>
              <button
                onClick={() => setActive(Math.min(steps.length - 1, active + 1))}
                disabled={active === steps.length - 1}
                className="font-sans text-sm font-medium"
                style={{
                  color: active === steps.length - 1 ? "rgba(44,62,80,0.30)" : "var(--primary)",
                  background: "transparent",
                  border: "none",
                  cursor: active === steps.length - 1 ? "default" : "pointer",
                  padding: 0,
                }}
              >
                Næste →
              </button>
            </div>
          </div>

          {/* Right — side card */}
          <aside className="lg:col-span-5">
            <div className="rounded-sm p-8" style={{ background: "var(--surface)", border: "1px solid rgba(44,62,80,0.10)" }}>
              <p
                className="font-sans uppercase mb-5"
                style={{ fontSize: 10, letterSpacing: "0.20em", color: "rgba(44,62,80,0.80)" }}
              >
                Trin i overblik
              </p>
              <ol className="flex flex-col gap-3">
                {steps.map((step, i) => {
                  const isActive = i === active;
                  const isPast = i < active;
                  return (
                    <li key={step.n} className="flex items-baseline gap-4">
                      <span
                        className="font-serif tabular-nums shrink-0 transition-colors"
                        style={{
                          fontSize: 13,
                          color: isActive ? "var(--primary)" : isPast ? "rgba(125,86,45,0.80)" : "rgba(44,62,80,0.65)",
                          fontWeight: isActive ? 500 : 400,
                          width: 24,
                        }}
                      >
                        {step.n}
                      </span>
                      <span
                        className="font-sans text-sm transition-colors"
                        style={{
                          color: isActive ? "var(--secondary)" : "rgba(44,62,80,0.80)",
                          fontWeight: isActive ? 600 : 400,
                        }}
                      >
                        {step.label}
                      </span>
                      <span
                        className="font-sans ml-auto"
                        style={{ fontSize: 11, color: "rgba(44,62,80,0.75)", letterSpacing: "0.05em" }}
                      >
                        {step.duration}
                      </span>
                    </li>
                  );
                })}
              </ol>
              <div className="mt-7 pt-6" style={{ borderTop: "1px solid rgba(44,62,80,0.10)" }}>
                <p
                  className="font-sans uppercase mb-2"
                  style={{ fontSize: 10, letterSpacing: "0.18em", color: "rgba(44,62,80,0.75)" }}
                >
                  Samlet
                </p>
                <p className="font-serif text-lg text-secondary" style={{ fontWeight: 500 }}>
                  {summary.duration}
                </p>
                <p className="font-sans text-xs text-secondary/85 mt-1">{summary.note}</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
