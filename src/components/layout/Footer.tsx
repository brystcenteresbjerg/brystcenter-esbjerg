import Link from "next/link";
import { site } from "@/data/site";

const services = [
  { label: "Brystforstørrelse med eget fedt", href: "/behandlinger/bfo-eget-fedt-lipofilling" },
  { label: "Brystforstørrelse med implantat", href: "/behandlinger/bfo-implantat" },
  { label: "Brystløft", href: "/behandlinger/brystloeft" },
  { label: "Brystreduktion", href: "/behandlinger/brystreduktion" },
  { label: "Implantatudskiftning", href: "/behandlinger/udskiftning-af-protese" },
  { label: "Second Opinion", href: "/behandlinger/second-opinion" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-on-primary">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 pt-16 pb-10 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <Link href="/" className="block w-56 mb-5 shrink-0">
            <img src="/logos/logo_nude.svg" alt="Brystcenter Esbjerg Logo" />
          </Link>
          <p className="font-sans text-base leading-relaxed">Specialister i regenerativ brystkirurgi i Esbjerg.</p>
        </div>

        {/* Ydelser */}
        <div>
          <p className="font-sans text-sm uppercase font-medium tracking-widest text-on-primary/80 mb-5">Behandlinger</p>
          <ul className="space-y-3">
            {services.map((s) => (
              <li key={s.href}>
                <Link href={s.href} className="font-sans text-base  hover:text-on-primary transition-colors">
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Kontakt */}
        <div>
          <p className="font-sans text-sm font-medium uppercase tracking-widest text-on-primary/80 mb-5 ">Kontakt</p>
          <address className="not-italic space-y-3">
            <p className="font-sans text-base">{site.address.street}</p>
            <p className="font-sans text-base ">{site.address.city}</p>
            <p className="font-sans text-base ">Tlf. {site.footerPhone}</p>
          </address>
          <Link
            href={site.partner.url}
            className="font-sans text-base block hover:text-on-primary mt-3 transition-colors"
          >
            En del af {site.partner.name}
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
