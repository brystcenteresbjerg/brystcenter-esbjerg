import Link from "next/link";

const services = [
  { label: "Brystforstørrelse med eget fedt", href: "/behandlinger/bfo-eget-fedt-lipofilling" },
  { label: "Brystforstørrelse med implantat", href: "/behandlinger/bfo-implantat" },
  { label: "Brystløft", href: "/behandlinger/brystloeft" },
  { label: "Brystreduktion", href: "/behandlinger/brystreduktion" },
  { label: "Implantatudskiftning", href: "/behandlinger/udskiftning-af-protese" },
];

export default function Footer() {
  return (
    <footer className="bg-primary">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 pt-16 pb-10 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <Link href="/" className="block w-56 mb-5 shrink-0">
            <img src="/logos/brystcenter-primary-reversed.svg" alt="Brystcenter Esbjerg Logo" />
          </Link>
          <p className="font-sans text-sm leading-relaxed text-on-primary/50">
            Specialister i regenerativ brystkirurgi i Esbjerg.
          </p>
        </div>

        {/* Ydelser */}
        <div>
          <p className="font-sans text-xs uppercase tracking-widest mb-5 text-tertiary">Behandlinger</p>
          <ul className="space-y-3">
            {services.map((s) => (
              <li key={s.href}>
                <Link href={s.href} className="font-sans text-sm text-on-primary/65 hover:text-on-primary transition-colors">
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Kontakt */}
        <div>
          <p className="font-sans text-xs uppercase tracking-widest mb-5 text-tertiary">Kontakt</p>
          <address className="not-italic space-y-3">
            <p className="font-sans text-sm text-on-primary/65">Bavnehøjvej 2</p>
            <p className="font-sans text-sm text-on-primary/65">6700 Esbjerg</p>
            <p className="font-sans text-sm text-on-primary/65">Tlf. +45 22288888</p>

            <Link
              href="/troels-tei"
              className="font-sans text-sm block text-on-primary/65 hover:text-on-primary transition-colors"
            >
              Book en konsultation
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
