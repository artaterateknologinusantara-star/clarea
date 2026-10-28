"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks, siteConfig } from "@/lib/site-config";
import WhatsAppButton from "./WhatsAppButton";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-colors duration-300 ${
          solid ? "border-b border-line bg-ivory/95 backdrop-blur" : "bg-ivory"
        }`}
      >
        <nav
          aria-label="Navigasi utama"
          className="container-x flex h-16 items-center justify-between gap-6 md:h-[4.5rem]"
        >
          <a
            href="#home"
            className="display text-[1.75rem] tracking-tight"
            aria-label={`${siteConfig.brandName} — ke atas`}
          >
            {siteConfig.brandName}
          </a>

          <ul className="hidden items-center gap-8 lg:flex">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="relative text-sm text-ink-soft transition-colors hover:text-charcoal after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-charcoal after:transition-transform hover:after:scale-x-100"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <WhatsAppButton
              message={siteConfig.messages.general}
              icon={false}
              className="max-md:hidden !min-h-11 !px-5"
            >
              Diskusikan Proyek
            </WhatsAppButton>
            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Tutup menu" : "Buka menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </header>

      {open && (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto bg-ivory lg:hidden"
        >
          <ul className="container-x flex flex-col py-6">
            {navLinks.map((l, i) => (
              <li
                key={l.href}
                className="animate-fade-up border-b border-line"
                style={{ animationDelay: `${i * 40}ms` }}
              >
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="display flex min-h-14 items-center text-3xl"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-8">
              <WhatsAppButton
                message={siteConfig.messages.general}
                className="w-full"
              >
                Diskusikan Proyek
              </WhatsAppButton>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
