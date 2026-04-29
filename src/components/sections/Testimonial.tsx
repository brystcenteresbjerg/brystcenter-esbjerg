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
          <div key={s.label} className="rounded-sm p-5 bg-surface border border-secondary/10 flex flex-col gap-1">
            <p className="font-serif lg:text-2xl text-xl font-light text-primary leading-none">{s.num}</p>
            <p className="font-sans text-[10px] uppercase tracking-[0.15em] text-secondary/70 leading-snug">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Testimonial */}
      {/* <div className="rounded-sm p-8 bg-surface border border-secondary/10 grid grid-cols-[64px_1fr] gap-5 items-start">
        <div className="w-16 h-16 rounded-full shrink-0 bg-primary-container bg-cover bg-center flex items-center justify-center font-extrabold text-primary tracking-widest">
          {initials}
        </div>
        <div>
          <p className="font-serif text-base leading-relaxed text-secondary mb-4">&ldquo;{quote}&rdquo;</p>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <p className="font-sans text-xs font-semibold text-secondary">{name}</p>
            <span className="text-secondary/40">·</span>
            <p className="font-sans text-xs text-secondary/70">{treatment}</p>
          </div>
        </div>
      </div> */}
      <div
        className="rounded-sm p-8 bg-surface border border-secondary/10
                grid grid-cols-[auto_1fr] gap-x-3 gap-y-4
                sm:grid-cols-[64px_1fr] sm:gap-x-5 sm:gap-y-3"
      >
        {/* Quote: spans both cols on mobile, right col on desktop */}
        <p
          className="col-span-2 font-serif text-base leading-relaxed text-secondary
                sm:col-span-1 sm:col-start-2 sm:row-start-1"
        >
          &ldquo;{quote}&rdquo;
        </p>

        {/* Circle: bottom-left on mobile, top-left on desktop */}
        <div
          className="w-11 h-11 rounded-full shrink-0 bg-primary-container
                  flex items-center justify-center
                  font-extrabold text-primary tracking-widest text-xs
                  self-center
                  sm:w-16 sm:h-16 sm:text-base sm:row-start-1 sm:self-start"
        >
          {initials}
        </div>

        {/* Name + treatment: next to circle on mobile, below quote on desktop */}
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
    </div>
  );
}
