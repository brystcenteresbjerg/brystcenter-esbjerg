import Link from "next/link";

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
    <header
      className="fixed top-0 inset-x-0 z-50"
      style={{
        backdropFilter: "blur(20px)",
        backgroundColor: "rgba(250, 243, 238, 0.80)",
      }}
    >
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

        <Link
          href="#book"
          className="hidden lg:flex h-9 items-center px-5 rounded-full bg-secondary text-on-secondary font-sans text-sm font-medium hover:opacity-90 transition-opacity shrink-0"
        >
          Book konsultation
        </Link>
      </div>
    </header>
  );
}
