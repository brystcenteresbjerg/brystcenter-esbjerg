import Link from "next/link";

export default function Breadcrumb({ current }: { current: string }) {
  return (
    <nav className="mb-16 text-lg font-sans text-tertiary">
      <Link href="/" className="text-primary hover:underline">
        Brystkirurgi
      </Link>
      <span className="mx-2">›</span>
      {current}
    </nav>
  );
}
