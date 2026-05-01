"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { motion } from "motion/react";

interface ImageListSectionProps {
  image: string;
  quote?: { text: string; author: string };
  label: string;
  heading: string;
  intro?: string | string[];
  items: { text: string; icon: ReactNode }[];
}

const listContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const listItemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

export default function ImageListSection({ image, quote, label, heading, intro, items }: ImageListSectionProps) {
  const paragraphs = intro ? (Array.isArray(intro) ? intro : [intro]) : [];

  return (
    <section>
      <div className="max-w-7xl mx-auto px-8 lg:px-16 py-20 grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-16 items-center">
        <motion.div
          className="relative rounded-sm overflow-hidden aspect-square"
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Image src={image} alt="" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 33vw" />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to top, rgba(0,0,0,0.25) 0%, transparent 55%)" }}
          />
          {quote && (
            <div
              className="absolute top-5 left-5 lg:w-2/3 w-90% rounded-md p-5 mr-5"
              style={{ background: "rgba(250,243,238,0.82)", backdropFilter: "blur(12px)" }}
            >
              <p className="font-serif font-light text-base italic leading-relaxed text-secondary">&ldquo;{quote.text}&rdquo;</p>
              <p className="font-sans text-xs uppercase tracking-[0.15em] mt-3 text-secondary/80">- {quote.author}</p>
            </div>
          )}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        >
          <p className="label mb-6">{label}</p>
          <h2 className="font-serif text-3xl font-semibold text-secondary mb-6 leading-snug">{heading}</h2>
          {paragraphs.length > 0 && (
            <div className="font-sans text-base leading-relaxed text-secondary/85 mb-6 space-y-4">
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          )}
          <motion.ul
            variants={listContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {items.map((item) => (
              <motion.li
                key={item.text}
                variants={listItemVariants}
                className="flex items-center gap-4 font-sans text-sm leading-relaxed text-secondary border-b border-secondary/8 py-5"
              >
                <span className="text-primary/60 shrink-0">{item.icon}</span>
                {item.text}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}
