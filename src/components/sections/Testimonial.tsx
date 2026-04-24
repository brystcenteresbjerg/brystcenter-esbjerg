interface TestimonialProps {
  quote: string;
  name: string;
  treatment: string;
}

const stats = [
  { num: "2.400+", label: "Udførte indgreb" },
  { num: "18 år", label: "Som speciallæge" },
];

export default function Testimonial({ quote, name, treatment }: TestimonialProps) {
  const initials = name.slice(0, 2).toUpperCase();
  return (
    <div className="flex flex-col gap-4">
      {/* Stats */}
      <div className="grid grid-cols-2 gap-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-sm p-5 bg-surface border border-secondary/8 flex flex-col gap-1">
            <p className="font-serif text-2xl font-light text-primary leading-none">{s.num}</p>
            <p className="font-sans text-[10px] uppercase tracking-[0.15em] text-secondary/40 leading-snug">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Testimonial */}
      <div className="rounded-sm p-8 bg-surface border border-secondary/8 grid grid-cols-[64px_1fr] gap-5 items-start">
        <div className="w-16 h-16 rounded-full shrink-0 bg-primary-container bg-cover bg-center flex items-center justify-center font-extrabold text-primary tracking-widest">
          {initials}
        </div>
        <div>
          <p className="font-serif text-base leading-relaxed text-secondary mb-4">&ldquo;{quote}&rdquo;</p>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <p className="font-sans text-xs font-semibold text-secondary">{name}</p>
            <span className="text-secondary/20">·</span>
            <p className="font-sans text-xs text-secondary/50">{treatment}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
