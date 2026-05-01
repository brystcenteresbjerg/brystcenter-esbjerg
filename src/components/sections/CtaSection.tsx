import Button from "@/components/ui/Button";
import FadeUp from "@/components/ui/FadeUp";

interface CtaSectionProps {
  heading: string;
  body: string;
  ctaLabel?: string;
  background?: string;
}

export default function CtaSection({
  heading,
  body,
  ctaLabel = "Book en konsultation",
  background = "bg-surface-container-low",
}: CtaSectionProps) {
  return (
    <section id="book" className={`px-8 lg:px-16 py-24 ${background}`}>
      <FadeUp>
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-serif lg:text-4xl text-2xl font-semibold text-secondary mb-6">{heading}</h2>
          <p className="font-sans text-base leading-relaxed mb-10 text-secondary/80">{body}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/booking">{ctaLabel}</Button>
            <Button href="tel:+4576185656" variant="outline">
              Ring til os: +45 76 18 56 56
            </Button>
          </div>
        </div>
      </FadeUp>
    </section>
  );
}
