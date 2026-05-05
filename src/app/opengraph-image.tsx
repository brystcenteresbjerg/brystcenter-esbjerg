import { ImageResponse } from "next/og";
import { join } from "node:path";
import { readFile } from "node:fs/promises";

export const alt = "Brystcenter Esbjerg – Specialister i naturlig brystkirurgi";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadGoogleFont(family: string, weight: number, italic = false) {
  const axis = italic ? `ital,wght@1,${weight}` : `wght@${weight}`;
  const css = await fetch(`https://fonts.googleapis.com/css2?family=${encodeURIComponent(family)}:${axis}&display=swap`, {
    // IE11 UA → Google Fonts returns woff (Satori supports woff but not woff2)
    headers: { "User-Agent": "Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; rv:11.0) like Gecko" },
  }).then((r) => r.text());

  const urls = [...css.matchAll(/src: url\(([^)]+)\) format\('woff'\)/g)].map((m) => m[1]);
  const fontUrl = urls.at(-1);
  if (!fontUrl) throw new Error(`Font not found: ${family} ${weight}${italic ? " italic" : ""}`);
  return fetch(fontUrl).then((r) => r.arrayBuffer());
}

export default async function OGImage() {
  const [logoPng, photoData, serifMedium, serifLightItalic, manropeMedium] = await Promise.all([
    readFile(join(process.cwd(), "public/logos/logo_primary_og.png")),
    readFile(join(process.cwd(), "public/images/hero_curls_smile_brunette.jpg")),
    loadGoogleFont("Noto Serif", 500),
    loadGoogleFont("Noto Serif", 300, true),
    loadGoogleFont("Manrope", 500),
  ]);

  const logoSrc = `data:image/png;base64,${logoPng.toString("base64")}`;
  const photoSrc = `data:image/jpeg;base64,${photoData.toString("base64")}`;

  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex" }}>
      {/* Left: photo */}
      <div
        style={{
          width: 540,
          height: 630,
          flexShrink: 0,
          backgroundImage: `url(${photoSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "120% center",
        }}
      />

      {/* Right: content */}
      <div
        style={{
          flex: 1,
          background: "#faf6f1",
          padding: "64px 72px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={200} height={55} alt="" />

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              fontFamily: "Manrope",
              fontSize: 14,
              fontWeight: 500,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#7D562D",
              marginBottom: 28,
            }}
          >
            Plastikkirurgi · Esbjerg
          </span>
          <span
            style={{
              fontFamily: "Noto Serif",
              fontSize: 44,
              fontWeight: 600,
              lineHeight: 1.05,
              letterSpacing: "-0.015em",
              color: "#2C3E50",
            }}
          >
            Skræddersyet kosmetisk
          </span>
          <span
            style={{
              fontFamily: "Noto Serif",
              fontSize: 44,
              fontWeight: 300,
              fontStyle: "italic",
              lineHeight: 1.1,
              letterSpacing: "-0.015em",
              color: "#2C3E50",
              marginTop: 4,
            }}
          >
            plastikkirurgi
          </span>
        </div>

        {/* Meta strip */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: 24,
            borderTop: "1px solid rgba(44,62,80,0.15)",
            fontFamily: "Manrope",
            fontSize: 13,
            fontWeight: 500,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "rgba(44,62,80,0.55)",
          }}
        >
          <span>Brystforstørrelse · Brystløft</span>
          <span>brystcenteresbjerg.dk</span>
        </div>
      </div>
    </div>,
    {
      ...size,
      fonts: [
        { name: "Noto Serif", data: serifMedium, weight: 500, style: "normal" },
        { name: "Noto Serif", data: serifLightItalic, weight: 300, style: "italic" },
        { name: "Manrope", data: manropeMedium, weight: 500, style: "normal" },
      ],
    },
  );
}
