import FadeUp from "@/components/ui/FadeUp";
import Link from "next/link";
import type { TreatmentFact } from "@/data/priser";

interface TreatmentFactsBarProps {
  name: string;
  price: string;
  facts: TreatmentFact[];
}

export default function TreatmentFactsBar({ name, price, facts }: TreatmentFactsBarProps) {
  return (
    <div className="px-8 lg:px-16 py-10 bg-surface-container-low">
      <FadeUp>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-16">
          <div className="lg:w-56 shrink-0">
            <p className="font-sans text-sm font-semibold text-secondary mb-1">{name}</p>
            <p className="font-serif text-lg font-light text-primary mb-5">{price}</p>
            <Link
              href="/priser"
              className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-[0.12em] border border-secondary/20 rounded-full px-5 py-2.5 text-secondary hover:bg-secondary/5 transition-colors"
            >
              Se priser →
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6 flex-1">
            {facts.map((fact, i) => (
              <FadeUp key={fact.label} delay={i * 0.06}>
                <div>
                  <p className="font-sans text-[10px] uppercase tracking-[0.15em] text-secondary/55 mb-1.5">{fact.label}</p>
                  <p className="font-sans text-sm font-medium text-secondary">{fact.value}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </FadeUp>
    </div>
  );
}
