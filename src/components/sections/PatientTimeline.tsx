"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { ChevronDown, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface Step {
  number: string;
  label: string;
  title: string;
  body: string;
  time?: string;
}

export default function PatientTimeline({ steps }: { steps: Step[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const index = Math.min(Math.floor(latest * steps.length), steps.length - 1);
    setActiveStep(index);
  });

  const scrollToStep = (index: number) => {
    if (!containerRef.current) return;
    const containerTop = containerRef.current.offsetTop;
    const containerHeight = containerRef.current.offsetHeight;
    const progress = (index + 0.1) / steps.length;
    const targetY = containerTop + progress * (containerHeight - window.innerHeight);
    window.scrollTo({ top: targetY, behavior: "smooth" });
  };

  useEffect(() => {
    if (!drawerOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDrawerOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [drawerOpen]);

  const progressPct = ((activeStep + 0.5) / steps.length) * 100;
  const current = steps[activeStep];

  return (
    <div ref={containerRef} style={{ height: `${steps.length * 100}vh`, position: "relative" }}>
      <div className="sticky top-0 h-dvh flex items-center px-5 lg:px-24">
        {/* ── Desktop (≥lg) — original wide-rail layout ─────────── */}
        <div className="hidden lg:grid w-full max-w-4xl grid-cols-[56px_1fr] gap-20 items-center">
          <div className="flex flex-col items-center">
            {steps.map((step, i) => {
              const isActive = i === activeStep;
              const isPast = i < activeStep;
              return (
                <div key={step.number} className="flex flex-col items-center">
                  <button
                    onClick={() => scrollToStep(i)}
                    aria-label={`Gå til trin ${step.number}: ${step.label}`}
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-500 cursor-pointer ${
                      isActive
                        ? "bg-primary"
                        : isPast
                          ? "bg-primary-container"
                          : "border border-secondary/12 hover:border-secondary/30"
                    }`}
                  >
                    <span
                      className={`font-sans text-[10px] font-semibold transition-colors duration-500 ${
                        isActive ? "text-on-primary" : isPast ? "text-primary" : "text-secondary/25"
                      }`}
                    >
                      {step.number}
                    </span>
                  </button>
                  {i < steps.length - 1 && (
                    <div className="relative w-px h-9 bg-secondary/10 my-1 overflow-hidden">
                      <motion.div
                        className="absolute inset-0 bg-primary origin-top"
                        animate={{ scaleY: isPast ? 1 : 0 }}
                        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="grid grid-cols-[1fr_auto] gap-12 items-center"
            >
              <div>
                <p className="label font-semibold mb-5">{current.label}</p>
                <h2 className="font-serif text-4xl xl:text-5xl font-semibold text-secondary mb-6 leading-tight">
                  {current.title}
                </h2>
                <p className="font-sans text-base leading-relaxed text-secondary/75 max-w-lg">{current.body}</p>
                {activeStep < steps.length - 1 && (
                  <motion.div className="mt-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                    <motion.div
                      animate={{ y: [0, 6, 0], opacity: [0.3, 0.7, 0.3] }}
                      transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <ChevronDown size={20} className="text-secondary/55" />
                    </motion.div>
                  </motion.div>
                )}
              </div>
              {current.time && <p className="font-sans text-base text-secondary/60 tracking-[0.08em] shrink-0">{current.time}</p>}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── Mobile (<lg) — slim edge rail + bottom-sheet ──────── */}
        <div className="lg:hidden w-full flex">
          {/* Edge rail: thin track + animated progress fill */}
          <div className="relative w-7 shrink-0">
            <div className="absolute left-1/2 -translate-x-1/2 top-8 bottom-16 w-px bg-secondary/10" />
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 top-8 w-px bg-primary origin-top"
              style={{ height: `calc((100% - 96px) * ${progressPct / 100})` }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            />
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0 pr-2 py-4">
            {/* Static: dot + meta row — never animates */}
            <div className="flex items-center gap-3 mb-3 -ml-7">
              <div
                className="w-7 h-7 rounded-full bg-primary text-on-primary flex items-center justify-center text-[10px] font-semibold shrink-0"
                style={{ boxShadow: "0 0 0 4px var(--surface)" }}
              >
                {current.number}
              </div>
              <div className="flex items-baseline gap-2.5 min-w-0">
                <p className="label text-[10px]">
                  Trin {current.number} / {String(steps.length).padStart(2, "0")}
                </p>
                {current.time && (
                  <>
                    <span className="w-3.5 h-px bg-primary/30 shrink-0" />
                    <p className="label text-[10px] text-secondary/55">{current.time}</p>
                  </>
                )}
              </div>
            </div>

            {/* Animated: label, title, body, button, chevron */}
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
              >
                <p className="font-sans text-[13px] font-semibold text-primary mb-2">{current.label}</p>

                <h2
                  className="font-serif text-[28px] font-semibold text-secondary mb-4 leading-[1.15]"
                  style={{ textWrap: "pretty" } as React.CSSProperties}
                >
                  {current.title}
                </h2>
                <p className="font-sans text-[15px] leading-[1.65] text-secondary/75">{current.body}</p>

                <button
                  type="button"
                  onClick={() => setDrawerOpen(true)}
                  className="mt-7 inline-flex items-center gap-2 border border-primary/30 rounded-full px-3.5 py-2 text-xs font-medium text-secondary"
                >
                  Se alle {steps.length} trin
                  <span className="text-primary">→</span>
                </button>

                {activeStep < steps.length - 1 && (
                  <motion.div
                    className="mt-7 flex justify-start"
                    animate={{ y: [0, 6, 0], opacity: [0.3, 0.7, 0.3] }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ChevronDown size={18} className="text-secondary/55" />
                  </motion.div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* ── Mobile drawer — full step overview ────────────────── */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden fixed inset-0 z-40 bg-secondary/40"
              onClick={() => setDrawerOpen(false)}
            />
            <motion.div
              key="sheet"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
              className="lg:hidden fixed inset-x-0 bottom-0 z-50 bg-surface rounded-t-2xl px-5 pt-3 pb-8 max-h-[80vh] overflow-y-auto"
              style={{ boxShadow: "0 -20px 60px rgba(44,62,80,0.18)" }}
              role="dialog"
              aria-label="Patientrejsen – alle trin"
            >
              <div className="flex justify-center mb-4">
                <span className="w-9 h-1 bg-secondary/20 rounded-full" />
              </div>
              <div className="flex items-center justify-between mb-4">
                <p className="label">Patientrejsen</p>
                <button
                  type="button"
                  onClick={() => setDrawerOpen(false)}
                  aria-label="Luk oversigt"
                  className="w-8 h-8 -mr-1 flex items-center justify-center rounded-full text-secondary/60 hover:text-secondary"
                >
                  <X size={18} />
                </button>
              </div>
              <ol className="list-none p-0 m-0">
                {steps.map((step, i) => {
                  const isActive = i === activeStep;
                  const isPast = i < activeStep;
                  return (
                    <li key={step.number} className={i < steps.length - 1 ? "border-b border-secondary/8" : ""}>
                      <button
                        type="button"
                        onClick={() => {
                          setDrawerOpen(false);
                          setTimeout(() => scrollToStep(i), 50);
                        }}
                        className="w-full flex items-center gap-3.5 py-3 text-left"
                      >
                        <span
                          className={`w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-semibold shrink-0 transition-colors ${
                            isActive
                              ? "bg-primary text-on-primary"
                              : isPast
                                ? "bg-primary-container text-primary"
                                : "border border-secondary/18 text-secondary/35"
                          }`}
                        >
                          {step.number}
                        </span>
                        <span className="flex-1 min-w-0">
                          <span
                            className={`block font-sans text-sm ${isActive ? "font-semibold text-secondary" : "font-medium text-secondary"}`}
                          >
                            {step.label}
                          </span>
                        </span>
                        {step.time && (
                          <span className="font-sans text-[11px] text-secondary/45 tracking-[0.06em] shrink-0">{step.time}</span>
                        )}
                      </button>
                    </li>
                  );
                })}
              </ol>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
