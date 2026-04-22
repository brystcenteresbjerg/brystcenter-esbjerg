import Button from "@/components/ui/Button";
import Image from "next/image";

interface PageHeroProps {
  label: string;
  h1Main: string;
  h1Italic: string;
  subtitle: string;
  buttons?: { label: string; href: string; variant?: "primary" | "outline" }[];
  /** If provided, renders a full-height image hero instead of solid background */
  image?: string;
  /** Show left-to-right gradient overlay on image hero (default: true) */
  gradient?: boolean;
}

export default function PageHero({ label, h1Main, h1Italic, subtitle, buttons, image, gradient = true }: PageHeroProps) {
  if (image) {
    return (
      <section className="relative flex items-end h-[50vh]">
        <Image src={image} alt={h1Main} fill sizes="100vw" className="object-cover" priority />
        {gradient && (
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to right, #FAF3EE 0%, rgba(250,243,238,0.7) 4%, rgba(250,243,238,0) 50%)",
            }}
          />
        )}
        <div className="relative z-10 w-full px-8 lg:px-24 pb-20 pt-32">
          <p className="font-sans text-xs uppercase tracking-[0.15em] mb-8 text-primary">{label}</p>
          <h1 className="font-serif text-5xl xl:text-6xl font-semibold leading-[1.1] text-secondary mb-8 max-w-xl">
            {h1Main} <span className="block italic font-light">{h1Italic}</span>
          </h1>
          <p className="font-sans text-base leading-relaxed mb-10 max-w-sm text-secondary/65">{subtitle}</p>
          {buttons && buttons.length > 0 && (
            <div className="flex flex-wrap gap-4">
              {buttons.map((btn) => (
                <Button key={btn.href} href={btn.href} variant={btn.variant ?? "primary"}>
                  {btn.label}
                </Button>
              ))}
            </div>
          )}
        </div>
      </section>
    );
  }

  return (
    <section className="bg-surface pt-40 pb-20 px-8 lg:px-24">
      <div className="max-w-2xl">
        <p className="font-sans text-xs uppercase tracking-[0.15em] mb-8 text-primary">{label}</p>
        <h1 className="font-serif text-5xl xl:text-6xl font-semibold leading-[1.1] text-secondary mb-8">
          {h1Main} <span className="block italic font-light">{h1Italic}</span>
        </h1>
        <p className="font-sans text-base leading-relaxed text-secondary/65 max-w-sm">{subtitle}</p>
        {buttons && buttons.length > 0 && (
          <div className="flex flex-wrap gap-4 mt-10">
            {buttons.map((btn) => (
              <Button key={btn.href} href={btn.href} variant={btn.variant ?? "primary"}>
                {btn.label}
              </Button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
