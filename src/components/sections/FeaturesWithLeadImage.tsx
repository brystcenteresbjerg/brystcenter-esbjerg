import Image from "next/image";
import type { ReactNode } from "react";

interface FeatureItem {
  label: string;
  text: string;
  icon?: ReactNode;
}

interface FeaturesWithLeadImageProps {
  items: [FeatureItem, FeatureItem, FeatureItem];
  image: string;
  background?: string;
  cardBackground?: string;
}

export default function FeaturesWithLeadImage({
  items,
  image,
  background = "",
  cardBackground = "bg-nude",
}: FeaturesWithLeadImageProps) {
  const [lead, second, third] = items;

  return (
    <section className={`px-8 lg:px-16 py-24 ${background}`}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left: lead card with image */}
        <div className={`${cardBackground} rounded-sm overflow-hidden flex flex-col`}>
          <div className="px-10 py-10 flex-1">
            <div className="relative aspect-video overflow-hidden rounded-sm mb-6">
              <Image src={image} alt="" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
            <div className="flex">
              {lead.icon && <div className="mb-4 mr-2 text-tertiary">{lead.icon}</div>}
              <h3 className="font-sans text-base font-semibold uppercase tracking-widest text-secondary mb-3">{lead.label}</h3>
            </div>
            <p className="font-sans text-base leading-relaxed text-secondary/75">{lead.text}</p>
          </div>
        </div>

        {/* Right: two stacked cards */}
        <div className="flex flex-col gap-6">
          {[second, third].map((item) => (
            <div key={item.label} className={`${cardBackground} rounded-sm px-10 py-10 flex-1`}>
              <div className="flex">
                {item.icon && <div className="mb-4 mr-2 text-tertiary">{item.icon}</div>}
                <h3 className="font-sans text-base font-semibold uppercase tracking-widest text-secondary mb-3">{item.label}</h3>
              </div>
              <p className="font-sans text-base leading-relaxed text-secondary/75">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
