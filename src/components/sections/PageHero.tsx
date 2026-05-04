"use client";

import { stagger, useAnimate } from "motion/react";

import Button from "@/components/ui/Button";
import Image from "next/image";
import { useEffect } from "react";

interface PageHeroProps {
  label: string;
  h1Main: string;
  h1Italic: string;
  subtitle: string;
  cta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  /** If provided, renders a full-height image hero instead of solid background */
  image?: string;
  /** If provided, renders a full-height looping video hero instead of image */
  video?: string;
  /** Optional portrait image for mobile (shown below lg, falls back to image if omitted) */
  mobileImage?: string;
  /** CSS object-position for image/video, e.g. "top", "center 30%" (default: "center") */
  mediaPosition?: string;
  /** Override the default desktop gradient */
  gradient?: string;
  /** Override the default mobile gradient */
  mobileGradient?: string;
  /** Poster image shown while video loads — becomes the LCP element */
  videoPoster?: string;
}

export default function PageHero({
  label,
  h1Main,
  h1Italic,
  subtitle,
  cta,
  secondaryCta,
  image,
  video,
  mobileImage,
  mediaPosition = "center",
  gradient,
  mobileGradient,
  videoPoster,
}: PageHeroProps) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      ".hero-item",
      { opacity: [0, 1], y: [14, 0] },
      { duration: 0.6, ease: "easeOut", delay: stagger(0.12, { startDelay: 0.25 }) },
    );
  }, [animate]);

  const desktopGradient =
    gradient ?? "linear-gradient(to right, rgba(250,243,238,0.6) 0%, rgba(250,243,238,0.5) 30%, rgba(250,243,238,0) 75%)";
  const mobileGradientBg =
    mobileGradient ?? "linear-gradient(to top, rgba(250,243,238,0.8) 0%, rgba(250,243,238,0.6) 60%, rgba(250,243,238,0) 100%)";

  if (video || image) {
    return (
      <section className="relative flex items-end h-[80vh]">
        {video ? (
          <video
            src={video}
            autoPlay
            muted
            loop
            playsInline
            poster={videoPoster}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: mediaPosition }}
          />
        ) : (
          <>
            <Image
              src={image!}
              alt={h1Main}
              fill
              sizes={mobileImage ? "(min-width: 1024px) 100vw, 0vw" : "100vw"}
              quality={90}
              className={`object-cover ${mobileImage ? "hidden lg:block" : ""}`}
              style={{ objectPosition: mediaPosition }}
              priority
            />
            {mobileImage && (
              <Image
                src={mobileImage}
                alt={h1Main}
                fill
                sizes="(min-width: 1024px) 0px, 100vw"
                quality={90}
                className="object-cover lg:hidden"
                style={{ objectPosition: mediaPosition }}
                priority
              />
            )}
          </>
        )}
        <div className="absolute inset-0 hidden lg:block" style={{ background: desktopGradient }} />
        <div className="absolute inset-0 lg:hidden" style={{ background: mobileGradientBg }} />
        <div ref={scope} className="relative z-10 w-full px-8 lg:px-24 lg:pb-20 pb-10 pt-32">
          <p className="hero-item label mb-8 font-semibold">{label}</p>
          <h1 className="hero-item font-serif text-2xl lg:text-3xl xl:text-5xl font-semibold leading-[1.1] text-secondary mb-8 max-w-5xl">
            {h1Main} <span className="block italic font-light">{h1Italic}</span>
          </h1>
          <p className="hero-item font-sans text-base leading-relaxed mb-10 lg:max-w-lg text-black/80">{subtitle}</p>
          {(cta || secondaryCta) && (
            <div className="hero-item flex flex-col lg:flex-row lg:flex-wrap gap-4">
              {cta && (
                <Button href={cta.href} className="w-full lg:w-auto">
                  {cta.label}
                </Button>
              )}
              {secondaryCta && (
                <Button href={secondaryCta.href} variant="outline" className="w-full lg:w-auto">
                  {secondaryCta.label}
                </Button>
              )}
            </div>
          )}
        </div>
      </section>
    );
  }

  return (
    <section ref={scope} className="relative px-8 lg:px-24 pt-40 pb-20 bg-surface">
      <p className="hero-item label mb-8 font-semibold">{label}</p>
      <h1 className="hero-item font-serif text-2xl lg:text-3xl xl:text-5xl font-semibold leading-[1.1] text-secondary mb-8 max-w-5xl">
        {h1Main} <span className="block italic font-light">{h1Italic}</span>
      </h1>
      <p className="hero-item font-sans text-base leading-relaxed mb-10 lg:max-w-lg text-black/80">{subtitle}</p>
      {(cta || secondaryCta) && (
        <div className="hero-item flex flex-col lg:flex-row lg:flex-wrap gap-4">
          {cta && (
            <Button href={cta.href} className="w-full lg:w-auto">
              {cta.label}
            </Button>
          )}
          {secondaryCta && (
            <Button href={secondaryCta.href} variant="outline" className="w-full lg:w-auto">
              {secondaryCta.label}
            </Button>
          )}
        </div>
      )}
    </section>
  );
}
