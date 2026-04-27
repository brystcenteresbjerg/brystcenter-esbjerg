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
    <footer className="bg-primary text-on-primary">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 pt-16 pb-10 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <Link href="/" className="block w-56 mb-5 shrink-0">
            <img src="/logos/brystcenter-primary-reversed.svg" alt="Brystcenter Esbjerg Logo" />
          </Link>
          <p className="font-sans text-sm leading-relaxed">Specialister i regenerativ brystkirurgi i Esbjerg.</p>
        </div>

        {/* Ydelser */}
        <div>
          <p className="font-sans text-xs uppercase tracking-widest text-on-primary/80 mb-5">Behandlinger</p>
          <ul className="space-y-3">
            {services.map((s) => (
              <li key={s.href}>
                <Link href={s.href} className="font-sans text-sm  hover:text-on-primary transition-colors">
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Kontakt */}
        <div>
          <p className="font-sans text-xs uppercase tracking-widest text-on-primary/80 mb-5 ">Kontakt</p>
          <address className="not-italic space-y-3">
            <p className="font-sans text-sm">Bavnehøjvej 2</p>
            <p className="font-sans text-sm ">6700 Esbjerg</p>
            <p className="font-sans text-sm ">Tlf. +45 22288888</p>
          </address>
          <Link
            href="https://www.privathospitaletkollund.com/"
            className="font-sans text-sm block hover:text-on-primary mt-3 transition-colors"
          >
            En del af Privathospitalet Kollund
          </Link>
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
