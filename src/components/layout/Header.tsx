"use client";

import { ChevronDown, Menu, X } from "lucide-react";

import Button from "@/components/ui/Button";
import Link from "next/link";
import { useState } from "react";

const treatments = [
  { label: "Brystforstørrelse med implantat", href: "/behandlinger/bfo-implantat" },
  { label: "Brystforstørrelse med eget fedt", href: "/behandlinger/bfo-eget-fedt-lipofilling" },
  { label: "Brystløft", href: "/behandlinger/brystloeft" },
  { label: "Brystreduktion", href: "/behandlinger/brystreduktion" },
  { label: "Implantatudskiftning", href: "/behandlinger/udskiftning-af-protese" },
];

const navLinks = [
  { label: "Priser", href: "/priser" },
  { label: "Mød Kirurgen", href: "/troels-tei" },
  { label: "Patientrejsen", href: "/patientrejsen" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [treatmentsOpen, setTreatmentsOpen] = useState(false);

  const close = () => {
    setOpen(false);
    setTreatmentsOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 bg-surface/80 backdrop-blur-[20px]">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 h-16 flex items-center justify-between gap-8">
          <Link href="/" className="shrink-0 w-62 mt-1 mb-1" onClick={close}>
            <img src="/logos/brystcenter-primary.svg" alt="Brystcenter Esbjerg Logo" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            <div className="group relative">
              <button className="flex items-center gap-1.5 font-sans text-sm text-on-background/70 hover:text-primary transition-colors cursor-pointer">
                Behandlinger
                <ChevronDown size={14} className="opacity-50 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-5 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200">
                <div
                  className="bg-surface/95 backdrop-blur-[20px] rounded-2xl overflow-hidden min-w-72"
                  style={{ boxShadow: "0 24px 64px rgba(44,62,80,0.10), 0 2px 8px rgba(44,62,80,0.04)" }}
                >
                  <div className="px-6 pt-5 pb-2">
                    <p className="font-sans text-[10px] uppercase tracking-[0.15em] text-secondary/30">Behandlinger</p>
                  </div>
                  <div className="pb-3">
                    {treatments.map((t) => (
                      <Link
                        key={t.href}
                        href={t.href}
                        className="group/item flex items-center justify-between px-6 py-3 font-sans text-sm text-secondary/65 hover:text-primary transition-colors"
                      >
                        {t.label}
                        <span className="text-primary opacity-0 group-hover/item:opacity-100 transition-opacity text-xs">→</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="font-sans text-sm text-on-background/70 hover:text-primary transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <Button href="/booking" size="sm" className="hidden lg:flex shrink-0">
            Book konsultation
          </Button>

          {/* Burger button — mobile only */}
          <button
            className="lg:hidden flex items-center justify-center w-8 h-8 shrink-0 text-secondary"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {open && (
        <div className="fixed inset-0 z-40 bg-surface pt-16 flex flex-col overflow-y-auto">
          <nav className="px-8 py-10 flex flex-col gap-1">
            {/* Behandlinger expandable */}
            <button
              className="flex items-center justify-between w-full py-4 border-b border-secondary/8 font-sans text-base text-secondary text-left"
              onClick={() => setTreatmentsOpen(!treatmentsOpen)}
            >
              Behandlinger
              <ChevronDown
                size={16}
                className={`opacity-40 transition-transform duration-200 ${treatmentsOpen ? "rotate-180" : ""}`}
              />
            </button>

            {treatmentsOpen && (
              <div className="mb-2">
                {treatments.map((t) => (
                  <Link
                    key={t.href}
                    href={t.href}
                    onClick={close}
                    className="block py-3 pl-4 font-sans text-sm text-secondary/60 hover:text-primary border-b border-secondary/5 last:border-0 transition-colors"
                  >
                    {t.label}
                  </Link>
                ))}
              </div>
            )}

            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={close}
                className="block py-4 border-b border-secondary/8 font-sans text-base text-secondary hover:text-primary transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* <div className="px-8 pb-10 mt-auto">
            <Button href="/booking" className="w-full justify-center" onClick={close}>
              Book konsultation
            </Button>
          </div> */}
        </div>
      )}
    </>
  );
}
