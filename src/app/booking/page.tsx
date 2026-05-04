import type { Metadata } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Book konsultation | Brystcenter Esbjerg",
  description: "Book en uforpligtende konsultation hos Brystcenter Esbjerg.",
};

export default function Page() {
  return (
    <div className="min-h-screen py-16 flex justify-center px-8">
      <iframe
        src={site.booking.iframeSrc}
        className="w-full max-w-3xl min-h-150 border-0"
        title="Book konsultation"
      />
    </div>
  );
}
