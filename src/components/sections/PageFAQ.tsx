import FAQAccordion from "@/components/sections/FAQAccordion";

type FAQItem = { q: string; a: string };

export default function PageFAQ({ items }: { items: FAQItem[] }) {
  return (
    <section className="mt-20 bg-surface-container-low rounded-2xl p-10">
      <h2 className="font-serif text-2xl font-medium text-secondary mb-8">
        Hyppige spørgsmål
      </h2>
      <FAQAccordion items={items} />
    </section>
  );
}
