import Link from "next/link";

const services = [
  { label: "Brystforstørrelse med eget fedt", href: "/bfo-eget-fedt-lipofilling" },
  { label: "Brystforstørrelse med implantat", href: "/bfo-implantat" },
  { label: "Brystløft", href: "/brystloeft" },
  { label: "Brystreduktion", href: "/brystreduktion" },
  { label: "Implantatudskiftning", href: "/udskiftning-af-protese" },
];

export default function Footer() {
  return (
    <footer className="bg-primary">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 pt-16 pb-10 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <p className="font-serif text-lg font-semibold text-on-primary mb-3">
            Brystcenter Esbjerg
          </p>
          <p className="font-sans text-sm leading-relaxed text-on-primary/50">
            Specialister i regenerativ<br />brystkirurgi i Esbjerg.
          </p>
        </div>

        {/* Ydelser */}
        <div>
          <p className="font-sans text-xs uppercase tracking-widest mb-5 text-on-primary/40">
            Ydelser
          </p>
          <ul className="space-y-3">
            {services.map((s) => (
              <li key={s.href}>
                <Link
                  href={s.href}
                  className="font-sans text-sm text-on-primary/65 hover:text-on-primary transition-colors"
                >
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Kontakt */}
        <div>
          <p className="font-sans text-xs uppercase tracking-widest mb-5 text-on-primary/40">
            Kontakt
          </p>
          <address className="not-italic space-y-3">
            <p className="font-sans text-sm text-on-primary/65">
              Speciallæge Troels Tei
            </p>
            <p className="font-sans text-sm text-on-primary/65">
              Esbjerg
            </p>
            <Link
              href="/troels-tei"
              className="font-sans text-sm block text-on-primary/65 hover:text-on-primary transition-colors"
            >
              Om Troels Tei →
            </Link>
          </address>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 lg:px-16 py-5 border-t border-on-primary/10">
        <p className="font-sans text-xs text-on-primary/30">
          © {new Date().getFullYear()} Brystcenter Esbjerg. Alle rettigheder forbeholdes.
        </p>
      </div>
    </footer>
  );
}
