"use client";

import { animate, useInView } from "motion/react";
import { useEffect, useRef } from "react";

import FadeUp from "@/components/ui/FadeUp";

interface TestimonialProps {
  quote: string;
  name: string;
  treatment: string;
}

const stats = [
  { target: 2400, suffix: "+", label: "Udførte indgreb" },
  { target: 18, suffix: " år", label: "Som speciallæge" },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const el = ref.current;
    const controls = animate(0, target, {
      duration: 1.5,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(value) {
        el.textContent = new Intl.NumberFormat("da-DK").format(Math.round(value)) + suffix;
      },
    });
    return () => controls.stop();
  }, [inView, target, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

export default function Testimonial({ quote, name, treatment }: TestimonialProps) {
  const initials = name.slice(0, 2).toUpperCase();
  return (
    <div className="flex flex-col gap-4">
      {/* Stats */}
      <div className="grid grid-cols-2 gap-4">
        {stats.map((s, i) => (
          <FadeUp key={s.label} delay={i * 0.1}>
            <div className="rounded-sm p-5 bg-surface border border-secondary/10 flex flex-col gap-1 h-full">
              <p className="font-serif lg:text-2xl text-xl font-light text-primary leading-none">
                <CountUp target={s.target} suffix={s.suffix} />
              </p>
              <p className="font-sans text-[10px] uppercase tracking-[0.15em] text-secondary/70 leading-snug">{s.label}</p>
            </div>
          </FadeUp>
        ))}
      </div>

      {/* Testimonial */}
      <FadeUp delay={0.2}>
        <div
          className="rounded-sm p-8 bg-surface border border-secondary/10
                  grid grid-cols-[auto_1fr] gap-x-3 gap-y-4
                  sm:grid-cols-[64px_1fr] sm:gap-x-5 sm:gap-y-3"
        >
          <p
            className="col-span-2 font-serif text-base leading-relaxed text-secondary
                  sm:col-span-1 sm:col-start-2 sm:row-start-1"
          >
            &ldquo;{quote}&rdquo;
          </p>

          <div
            className="w-11 h-11 rounded-full shrink-0 bg-primary-container
                    flex items-center justify-center
                    font-extrabold text-primary tracking-widest text-xs
                    self-center
                    sm:w-16 sm:h-16 sm:text-base sm:row-start-1 sm:self-start"
          >
            {initials}
          </div>

          <div
            className="flex flex-col gap-y-0.5 self-center
                    sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-3
                    sm:row-start-2 sm:col-start-2"
          >
            <p className="font-sans text-xs font-semibold text-secondary">{name}</p>
            <span className="hidden text-secondary/40 sm:inline">·</span>
            <p className="font-sans text-xs text-secondary/70">{treatment}</p>
          </div>
        </div>
      </FadeUp>
    </div>
  );
}
