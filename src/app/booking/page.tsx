import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Book konsultation | Brystcenter Esbjerg",
  description: "Book en uforpligtende konsultation hos Brystcenter Esbjerg.",
};

export default function Page() {
  return (
    <div className="min-h-screen py-16 flex justify-center px-8 ">
      <div
        id="gecko_d6700305c12e401a4b54e1e3a573666db12068"
        className="w-full max-w-3xl bg-surface-container-low px-5 py-2 md:px-20 md:py-10"
      />
      <Script
        src="https://privathospitaletkollund.app5.geckobooking.dk/site/iframe.js?icCode=d6700305c12e401a4b54e1e3a573666db12068"
        strategy="afterInteractive"
      />
    </div>
  );
}
