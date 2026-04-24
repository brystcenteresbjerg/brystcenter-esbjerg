"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { useRef, useState } from "react";

import { ChevronDown } from "lucide-react";

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

  return (
    <div ref={containerRef} style={{ height: `${steps.length * 50}vh` }}>
      <div className="sticky top-0 h-screen flex items-center lg:px-24">
        <div className="w-full max-w-4xl grid grid-cols-[56px_1fr] gap-12 lg:gap-20 items-center">
          {/* Left: step dot rail */}
          <div className="flex flex-col items-center">
            {steps.map((step, i) => {
              const isActive = i === activeStep;
              const isPast = i < activeStep;
              return (
                <div key={step.number} className="flex flex-col items-center">
                  {/* Dot */}
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

                  {/* Line segment to next dot */}
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

          {/* Right: animated content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="grid grid-cols-[1fr_auto] gap-12 items-center"
            >
              <div>
                <p className="label mb-5">{steps[activeStep].label}</p>
                <h2 className="font-serif text-4xl xl:text-5xl font-semibold text-secondary mb-6 leading-tight">
                  {steps[activeStep].title}
                </h2>
                <p className="font-sans text-base leading-relaxed text-secondary/65 max-w-lg">{steps[activeStep].body}</p>

                {activeStep < steps.length - 1 && (
                  <motion.div className="mt-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                    <motion.div
                      animate={{ y: [0, 6, 0], opacity: [0.3, 0.7, 0.3] }}
                      transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <ChevronDown size={20} className="text-secondary/40" />
                    </motion.div>
                  </motion.div>
                )}
              </div>

              {steps[activeStep].time && (
                <p className="font-sans text-sm text-secondary/30 tracking-[0.08em] shrink-0">
                  {steps[activeStep].time}
                </p>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
