import "./globals.css";

import { Manrope, Noto_Serif } from "next/font/google";

import ConsultationFloat from "@/components/layout/ConsultationFloat";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import type { Metadata } from "next";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { site } from "@/data/site";

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const description =
  "Skræddersyet brystkirurgi i Esbjerg. Implantater, fedttransplantation, brystløft og reduktion hos specialister. Book konsultation.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Brystcenter Esbjerg | Specialister i naturlig brystkirurgi",
    template: "%s | Brystcenter Esbjerg",
  },
  description,
  openGraph: {
    type: "website",
    siteName: site.name,
    title: "Brystcenter Esbjerg | Specialister i naturlig brystkirurgi",
    description,
    url: site.url,
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="da" className={`${notoSerif.variable} ${manrope.variable} h-full antialiased`}>
      <head>
        {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-P4RX4RPL');` }} />
        {/* End Google Tag Manager */}
        <link rel="icon" href="/icon_light.svg" type="image/svg+xml" media="(prefers-color-scheme: light)" />
        <link rel="icon" href="/icon_dark.svg" type="image/svg+xml" media="(prefers-color-scheme: dark)" />
      </head>
      <body className="min-h-full flex flex-col bg-surface text-on-background">
        {/* Google Tag Manager (noscript) */}
        <noscript dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P4RX4RPL" height="0" width="0" style="display:none;visibility:hidden"></iframe>` }} />
        {/* End Google Tag Manager (noscript) */}
        <Header />
        <div className="flex-1 pt-20">{children}</div>
        <ConsultationFloat />
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
