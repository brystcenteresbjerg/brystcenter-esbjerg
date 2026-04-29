"use client";

import { AnimatePresence, motion } from "motion/react";
import { ChevronDown, Menu, Phone, X } from "lucide-react";

import Button from "@/components/ui/Button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const overlayVariants = {
  hidden: { opacity: 0, y: -12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.25, ease: "easeOut" as const } },
  exit: { opacity: 0, y: -12, transition: { duration: 0.2, ease: "easeIn" as const } },
};

const navListVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.045, delayChildren: 0.1 } },
};

const navItemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" as const } },
};

type NavItem =
  | { label: string; href: string; children?: never }
  | { label: string; href?: never; children: { label: string; href: string }[] };

const navItems: NavItem[] = [
  { label: "Fedttransplantation", href: "/behandlinger/fedttransplantation" },
  {
    label: "Brystkirurgi",
    children: [
      { label: "Brystforstørrelse med implantat", href: "/behandlinger/bfo-implantat" },
      { label: "Brystforstørrelse med eget fedt", href: "/behandlinger/bfo-eget-fedt-lipofilling" },
      { label: "Brystløft", href: "/behandlinger/brystloeft" },
      { label: "Brystreduktion", href: "/behandlinger/brystreduktion" },
      { label: "Implantatudskiftning", href: "/behandlinger/udskiftning-af-protese" },
      { label: "Second Opinion", href: "/behandlinger/second-opinion" },
    ],
  },
  { label: "Priser", href: "/priser" },
  { label: "Mød os", href: "/moed-os" },
  { label: "Patientrejsen", href: "/patientrejsen" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [openItem, setOpenItem] = useState<string | null>(null);
  const pathname = usePathname();

  const close = () => {
    setOpen(false);
    setOpenItem(null);
  };

  const isActive = (href: string) => pathname === href;
  const isDropdownActive = (children: { href: string }[]) => children.some((c) => pathname === c.href);

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 bg-nude backdrop-blur-[20px]">
        <div className="max-w-8xl mx-auto px-8 lg:px-16 h-16 flex items-center justify-between gap-8">
          <Link href="/" className="shrink-0 w-62 mt-1 mb-1" onClick={close}>
            <img src="/logos/brystcenter-primary.svg" alt="Brystcenter Esbjerg Logo" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-stretch h-full gap-6 xl:gap-8">
            {navItems.map((item) => {
              if (item.children) {
                const active = isDropdownActive(item.children);
                return (
                  <div key={item.label} className="group relative flex items-center">
                    {active && <span className="absolute bottom-0 inset-x-0 h-0.5 bg-primary" />}
                    <button
                      className={`flex items-center gap-1.5 font-sans text-sm transition-colors cursor-pointer ${
                        active ? "text-primary" : "text-secondary/80 hover:text-primary"
                      }`}
                    >
                      {item.label}
                      <ChevronDown size={14} className="opacity-50 transition-transform duration-200 group-hover:rotate-180" />
                    </button>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200">
                      <div
                        className="bg-nude backdrop-blur-[20px] rounded-b-sm overflow-hidden min-w-72"
                        style={{ boxShadow: "0 12px 32px rgba(44,62,80,0.08)" }}
                      >
                        <div className="pt-3 pb-3">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="group/item flex items-center justify-between px-6 py-3 font-sans text-sm text-secondary/75 hover:text-primary transition-colors"
                            >
                              {child.label}
                              <span className="text-primary opacity-0 group-hover/item:opacity-100 transition-opacity text-xs">
                                →
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative font-sans text-sm transition-colors pb-0.5 whitespace-nowrap flex items-center ${
                    isActive(item.href)
                      ? "text-primary after:absolute after:bottom-0 after:inset-x-0 after:h-0.5 after:bg-primary"
                      : "text-secondary/80 hover:text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right side: phone + CTA */}
          <div className="hidden lg:flex items-center gap-5 shrink-0">
            <Link
              href="tel:+4576185656"
              className="flex items-center gap-2 font-sans text-sm text-secondary/75 hover:text-primary transition-colors border-l border-secondary/12 pl-5"
            >
              <Phone size={13} className="opacity-60" />
              +45 76 18 56 56
            </Link>
            <Button href="/booking" size="sm">
              Book konsultation
            </Button>
          </div>

          {/* Burger button - mobile only */}
          <button
            className="lg:hidden relative flex items-center justify-center w-8 h-8 shrink-0 text-secondary"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Luk menu" : "Åbn menu"}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={open ? "x" : "menu"}
                initial={{ opacity: 0, rotate: open ? -45 : 45, scale: 0.7 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: open ? 45 : -45, scale: 0.7 }}
                transition={{ duration: 0.15 }}
                className="absolute flex"
              >
                {open ? <X size={22} /> : <Menu size={22} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-40 bg-surface pt-16 flex flex-col overflow-y-auto"
          >
            <motion.nav
              variants={navListVariants}
              initial="hidden"
              animate="visible"
              className="px-8 py-10 flex flex-col gap-1"
            >
              {navItems.map((item) => {
                if (item.children) {
                  return (
                    <motion.div key={item.label} variants={navItemVariants}>
                      <button
                        className="flex items-center justify-between w-full py-4 border-b border-secondary/8 font-sans text-base text-secondary text-left"
                        onClick={() => setOpenItem(openItem === item.label ? null : item.label)}
                      >
                        {item.label}
                        <ChevronDown
                          size={16}
                          className={`opacity-40 transition-transform duration-200 ${openItem === item.label ? "rotate-180" : ""}`}
                        />
                      </button>
                      <AnimatePresence>
                        {openItem === item.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="overflow-hidden"
                          >
                            <div className="mb-2">
                              {item.children.map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  onClick={close}
                                  className="block py-3 pl-4 font-sans uppercase text-sm text-secondary/70 hover:text-primary border-b border-secondary/5 last:border-0 transition-colors"
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                }

                return (
                  <motion.div key={item.href} variants={navItemVariants}>
                    <Link
                      href={item.href}
                      onClick={close}
                      className="block py-4 border-b border-secondary/8 font-sans text-base text-secondary hover:text-primary transition-colors"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}

              <motion.div variants={navItemVariants}>
                <Link href="tel:+4576185656" onClick={close} className="block py-4 font-sans text-base text-primary font-medium">
                  +45 76 18 56 56
                </Link>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
