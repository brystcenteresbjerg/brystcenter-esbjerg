import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book konsultation | Brystcenter Esbjerg",
  description: "Book en uforpligtende konsultation hos Brystcenter Esbjerg.",
};

export default function Page() {
  return (
    <div className="min-h-screen py-16 flex justify-center px-8">
      <iframe
        src="https://privathospitaletkollund.app5.geckobooking.dk/site/index.php?icCode=d6700305c12e401a4b54e1e3a573666db12068&dtPiv=1"
        className="w-full max-w-3xl min-h-150 border-0"
        title="Book konsultation"
      />
    </div>
  );
}
