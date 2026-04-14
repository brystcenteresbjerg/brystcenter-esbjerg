import Link from "next/link";
import Button from "@/components/ui/Button";

const navLinks = [
  { label: "Brystforstørrelse", href: "/bfo-implantat" },
  { label: "Eget fedt", href: "/bfo-eget-fedt-lipofilling" },
  { label: "Brystløft", href: "/brystloeft" },
  { label: "Brystreduktion", href: "/brystreduktion" },
  { label: "Implantatudskiftning", href: "/udskiftning-af-protese" },
  { label: "Troels Tei", href: "/troels-tei" },
];

export default function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-surface/80 backdrop-blur-[20px]">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 h-16 flex items-center justify-between gap-8">
        <Link
          href="/"
          className="font-serif text-secondary font-semibold tracking-tight shrink-0"
        >
          Brystcenter Esbjerg
        </Link>

        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-sans text-sm text-on-background/70 hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Button href="#book" size="sm" className="hidden lg:flex shrink-0">
          Book konsultation
        </Button>
      </div>
    </header>
  );
}
