import type { ReactNode } from "react";

interface SplitSectionProps {
  label: string;
  heading: string;
  body: string;
  icon?: ReactNode;
  children: ReactNode;
  background?: string;
  align?: "start" | "center";
}

export default function SplitSection({
  label,
  heading,
  body,
  icon,
  children,
  background = "",
  align = "start",
}: SplitSectionProps) {
  return (
    <section className={background}>
      <div
        className={`max-w-7xl mx-auto px-8 lg:px-16 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 ${
          align === "center" ? "items-center" : "items-start"
        }`}
      >
        <div>
          {icon && <div className="mb-5 text-tertiary">{icon}</div>}
          <p className="label mb-6">{label}</p>
          <h2 className="font-serif text-3xl font-semibold text-secondary mb-6 leading-snug">{heading}</h2>
          <p className="font-sans text-base leading-relaxed text-secondary/75">{body}</p>
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
}
