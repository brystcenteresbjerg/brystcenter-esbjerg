type FAQItem = { q: string; a: string };

export default function PageFAQ({ items }: { items: FAQItem[] }) {
  return (
    <section className="mt-20 bg-surface-container-low rounded-2xl p-10">
      <h2 className="font-serif text-2xl font-medium text-secondary mb-8">
        Hyppige spørgsmål
      </h2>
      {items.map((item, i) => (
        <div key={i} className={i < items.length - 1 ? "mb-10" : ""}>
          <h3 className="font-serif text-lg font-semibold text-secondary mb-3">
            {item.q}
          </h3>
          <p className="font-sans leading-relaxed text-on-background">
            {item.a}
          </p>
        </div>
      ))}
    </section>
  );
}
