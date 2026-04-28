import Button from "@/components/ui/Button";
import Image from "next/image";

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
  /** Override the default gradient with a custom CSS gradient value */
  gradient?: string;
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
}: PageHeroProps) {
  const gradientBg =
    gradient ?? "linear-gradient(to right, rgba(250,243,238,0.6) 0%, rgba(250,243,238,0.5) 30%, rgba(250,243,238,0) 75%)";

  if (video || image) {
    return (
      <section className="relative flex items-end h-[70vh]">
        {video ? (
          <video
            src={video}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: mediaPosition }}
          />
        ) : (
          <>
            <Image
              src={image!}
              alt={h1Main}
              fill
              sizes="100vw"
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
        <div className="absolute inset-0" style={{ background: gradientBg }} />
        <div className="relative z-10 w-full px-8 lg:px-24 pb-20 pt-32">
          <p className="label mb-8 font-semibold">{label}</p>
          <h1 className="font-serif text-4xl xl:text-6xl font-semibold leading-[1.1] text-secondary mb-8 max-w-5xl">
            {h1Main} <span className="block italic font-light">{h1Italic}</span>
          </h1>
          <p className="font-sans text-base leading-relaxed mb-10 max-w-md text-black/60">{subtitle}</p>
          {(cta || secondaryCta) && (
            <div className="flex flex-wrap gap-4">
              {cta && <Button href={cta.href}>{cta.label}</Button>}
              {secondaryCta && (
                <Button href={secondaryCta.href} variant="outline">
                  {secondaryCta.label}
                </Button>
              )}
            </div>
          )}
        </div>
      </section>
    );
  }
}
