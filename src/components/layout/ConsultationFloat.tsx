import Link from "next/link";

export default function ConsultationFloat() {
  return (
    <div className="fixed bottom-8 right-8 z-40">
      <Link
        href="#book"
        className="flex items-center gap-2 h-11 px-6 rounded-full font-sans text-sm font-medium transition-opacity hover:opacity-90"
        style={{
          backdropFilter: "blur(20px)",
          backgroundColor: "rgba(250, 243, 238, 0.88)",
          color: "#7D562D",
          boxShadow: "0 8px 32px rgba(125, 86, 45, 0.20)",
        }}
      >
        Book konsultation
      </Link>
    </div>
  );
}
