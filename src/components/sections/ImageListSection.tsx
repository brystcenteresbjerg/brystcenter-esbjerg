import type { ReactNode } from "react";

interface ImageListSectionProps {
  image: string;
  quote?: { text: string; author: string };
  label: string;
  heading: string;
  intro?: string | string[];
  items: { text: string; icon: ReactNode }[];
}

export default function ImageListSection({ image, quote, label, heading, intro, items }: ImageListSectionProps) {
  const paragraphs = intro ? (Array.isArray(intro) ? intro : [intro]) : [];

  return (
    <section>
      <div className="max-w-7xl mx-auto px-8 lg:px-16 py-20 grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-16 items-center">
        <div className="relative rounded-sm overflow-hidden aspect-square">
          <img src={image} alt="" className="w-full h-full object-cover" />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to top, rgba(0,0,0,0.25) 0%, transparent 55%)" }}
          />
          {quote && (
            <div
              className="absolute bottom-5 left-5 w-1/2 rounded-md p-5"
              style={{ background: "rgba(250,243,238,0.82)", backdropFilter: "blur(12px)" }}
            >
              <p className="font-serif font-light text-base italic leading-relaxed text-secondary">&ldquo;{quote.text}&rdquo;</p>
              <p className="font-sans text-xs uppercase tracking-[0.15em] mt-3 text-secondary/65">- {quote.author}</p>
            </div>
          )}
        </div>
        <div>
          <p className="label mb-6">{label}</p>
          <h2 className="font-serif text-3xl font-semibold text-secondary mb-6 leading-snug">{heading}</h2>
          {paragraphs.length > 0 && (
            <div className="font-sans text-sm leading-relaxed text-secondary/75 mb-6 space-y-4">
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          )}
          <ul>
            {items.map((item) => (
              <li
                key={item.text}
                className="flex items-center gap-4 font-sans font-medium text-sm leading-relaxed text-secondary border-b border-secondary/8 py-6"
              >
                <span className="text-primary/75 shrink-0">{item.icon}</span>
                {item.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
