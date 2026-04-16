import Link from "next/link";

type Variant = "primary" | "outline" | "float";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  onClick?: () => void;
}

const variants: Record<Variant, string> = {
  primary: "bg-primary text-on-secondary hover:opacity-90",
  outline: "border border-secondary/20 text-secondary hover:opacity-70",
  float: "gap-2 bg-surface/90 backdrop-blur-[20px] text-primary shadow-float hover:opacity-90",
};

const sizes: Record<Size, string> = {
  sm: "h-9  px-5",
  md: "h-11 px-6",
  lg: "h-12 px-8",
};

const base = "inline-flex items-center justify-center rounded-full font-sans text-sm font-medium transition-opacity";

export default function Button({ href, children, variant = "primary", size = "lg", className = "", onClick }: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`.trim();

  if (href.startsWith("mailto:") || href.startsWith("tel:")) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} onClick={onClick}>
      {children}
    </Link>
  );
}
