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
    <footer style={{ backgroundColor: "#2C3E50" }}>
      <div className="max-w-7xl mx-auto px-8 lg:px-16 pt-16 pb-10 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <p className="font-serif text-lg font-semibold text-white mb-3">
            Brystcenter Esbjerg
          </p>
          <p
            className="font-sans text-sm leading-relaxed"
            style={{ color: "rgba(255,255,255,0.50)" }}
          >
            Specialister i regenerativ<br />brystkirurgi i Esbjerg.
          </p>
        </div>

        {/* Ydelser */}
        <div>
          <p
            className="font-sans text-xs uppercase tracking-[0.1em] mb-5"
            style={{ color: "rgba(255,255,255,0.40)" }}
          >
            Ydelser
          </p>
          <ul className="space-y-3">
            {services.map((s) => (
              <li key={s.href}>
                <Link
                  href={s.href}
                  className="font-sans text-sm transition-opacity hover:opacity-100"
                  style={{ color: "rgba(255,255,255,0.65)" }}
                >
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Kontakt */}
        <div>
          <p
            className="font-sans text-xs uppercase tracking-[0.1em] mb-5"
            style={{ color: "rgba(255,255,255,0.40)" }}
          >
            Kontakt
          </p>
          <address className="not-italic space-y-3">
            <p
              className="font-sans text-sm"
              style={{ color: "rgba(255,255,255,0.65)" }}
            >
              Speciallæge Troels Tei
            </p>
            <p
              className="font-sans text-sm"
              style={{ color: "rgba(255,255,255,0.65)" }}
            >
              Esbjerg
            </p>
            <Link
              href="/troels-tei"
              className="font-sans text-sm block transition-opacity hover:opacity-100"
              style={{ color: "rgba(255,255,255,0.65)" }}
            >
              Om Troels Tei →
            </Link>
          </address>
        </div>
      </div>

      <div
        className="max-w-7xl mx-auto px-8 lg:px-16 py-5"
        style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
      >
        <p
          className="font-sans text-xs"
          style={{ color: "rgba(255,255,255,0.30)" }}
        >
          © {new Date().getFullYear()} Brystcenter Esbjerg. Alle rettigheder forbeholdes.
        </p>
      </div>
    </footer>
  );
}
