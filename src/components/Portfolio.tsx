"use client";

import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { filters, projects, type Filter, type Project } from "@/data/projects";
import { siteConfig } from "@/lib/site-config";
import { projectMessage } from "@/lib/whatsapp";
import SectionHeading from "./SectionHeading";
import SmartImage from "./SmartImage";
import WhatsAppButton from "./WhatsAppButton";

const aspect = { tall: "aspect-[4/5]", wide: "aspect-[4/3]", square: "aspect-square" } as const;

function matches(p: Project, f: Filter) {
  return f === "All Projects" || p.fabrication === f || p.application === f;
}

export default function Portfolio() {
  const [filter, setFilter] = useState<Filter>("All Projects");
  const [activeId, setActiveId] = useState<string | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  const visible = projects.filter((p) => matches(p, filter));
  const activeIndex = visible.findIndex((p) => p.id === activeId);
  const active = activeIndex >= 0 ? visible[activeIndex] : null;

  // Kartu layanan (`data-filter`) dapat menyetel filter portofolio.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement).closest<HTMLElement>("a[data-filter]");
      const value = el?.dataset.filter as Filter | undefined;
      if (value && filters.includes(value)) setFilter(value);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  useEffect(() => {
    const d = dialogRef.current;
    if (!d) return;
    if (active && !d.open) d.showModal();
    if (!active && d.open) d.close();
  }, [active]);

  const step = useCallback(
    (dir: 1 | -1) => {
      if (!visible.length) return;
      setActiveId(visible[(activeIndex + dir + visible.length) % visible.length].id);
    },
    [visible, activeIndex],
  );

  const close = () => {
    setActiveId(null);
    triggerRef.current?.focus();
  };

  return (
    <section id="portofolio" aria-labelledby="portofolio-title" className="py-20 sm:py-28">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading id="portofolio-title" label="Selected Creations">
            Dibuat sesuai <em className="text-taupe italic">visi Anda.</em>
          </SectionHeading>
          <p className="max-w-sm rounded-2xl border border-line bg-soft-white p-4 text-xs leading-relaxed text-ink-soft">
            <strong className="text-charcoal">Concept References / Visual Direction.</strong> Galeri ini berisi ilustrasi arahan visual — bukan proyek klien
            yang telah selesai. Foto karya asli akan menggantikannya.
          </p>
        </div>

        <div role="group" aria-label="Filter portofolio" className="mt-10 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              aria-pressed={filter === f}
              onClick={() => setFilter(f)}
              className={`min-h-11 rounded-full border px-5 text-sm transition duration-300 active:scale-95 ${
                filter === f ? "border-charcoal bg-charcoal text-ivory" : "border-line bg-transparent text-ink-soft hover:border-charcoal hover:text-charcoal"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
        <p className="sr-only" role="status">
          Menampilkan {visible.length} karya
        </p>

        <ul key={filter} className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3 lg:gap-6">
          {visible.map((p, i) => (
            <li key={p.id} className="animate-fade-up mb-5 break-inside-avoid lg:mb-6" style={{ animationDelay: `${i * 60}ms` }}>
              <button
                type="button"
                onClick={(e) => {
                  triggerRef.current = e.currentTarget;
                  setActiveId(p.id);
                }}
                aria-label={`Lihat ${p.title}`}
                className="group block w-full text-left"
              >
                <div className={`relative ${aspect[p.shape]} overflow-hidden rounded-[1.75rem] bg-champagne/30`}>
                  <SmartImage src={p.image} alt={p.alt} sizes="(min-width:1024px) 30vw, (min-width:640px) 46vw, 92vw" className="transition-transform duration-700 group-hover:scale-[1.05]" />
                  {p.isConcept && (
                    <span className="absolute top-3 left-3 rounded-full bg-ivory/90 px-2.5 py-1 text-[0.62rem] font-semibold tracking-[0.16em] uppercase backdrop-blur">
                      Konsep
                    </span>
                  )}
                </div>
                <div className="mt-4 flex items-start justify-between gap-4 px-1">
                  <div>
                    <h3 className="display text-2xl">{p.title}</h3>
                    <p className="mt-1 text-sm text-ink-soft">{p.description}</p>
                  </div>
                  <p className="shrink-0 pt-1.5 text-right text-[0.7rem] leading-snug tracking-wider text-ink-soft uppercase">
                    {p.fabrication}
                    <br />
                    {p.application}
                  </p>
                </div>
              </button>
            </li>
          ))}
        </ul>
        {visible.length === 0 && <p className="mt-10 text-ink-soft">Belum ada karya pada kategori ini.</p>}

        <div className="mt-16 flex flex-col items-center gap-5 rounded-[2rem] bg-champagne/35 px-6 py-12 text-center">
          <p className="display text-3xl sm:text-4xl">Punya konsep serupa? Mari diskusikan.</p>
          <WhatsAppButton message={siteConfig.messages.general}>Diskusikan via WhatsApp</WhatsAppButton>
        </div>
      </div>

      <dialog
        ref={dialogRef}
        aria-label={active ? active.title : "Detail karya"}
        onClose={() => setActiveId(null)}
        onClick={(e) => e.target === dialogRef.current && close()}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") step(1);
          if (e.key === "ArrowLeft") step(-1);
        }}
        className="m-auto max-h-[94dvh] w-[min(64rem,94vw)] overflow-auto rounded-[1.75rem] bg-ivory p-0 text-charcoal backdrop:bg-charcoal/70 backdrop:backdrop-blur-sm"
      >
        {active && (
          <div className="grid md:grid-cols-[1.2fr_1fr]">
            <div className={`relative ${aspect[active.shape]} max-h-[60dvh] w-full bg-champagne/30 md:max-h-none`}>
              <SmartImage key={active.id} src={active.image} alt={active.alt} sizes="(min-width:768px) 55vw, 94vw" />
            </div>
            <div className="flex flex-col p-6 sm:p-9">
              <div className="flex items-center justify-between">
                <p className="eyebrow">
                  {active.fabrication} · {active.application}
                </p>
                <button type="button" onClick={close} aria-label="Tutup" className="flex h-11 w-11 items-center justify-center rounded-full border border-line hover:bg-charcoal/5">
                  <X size={18} />
                </button>
              </div>
              <h3 className="display mt-6 text-4xl">{active.title}</h3>
              <p className="mt-4 leading-relaxed text-ink-soft">{active.description}</p>
              {active.isConcept && (
                <p className="mt-5 rounded-xl bg-champagne/40 p-3 text-xs leading-relaxed text-ink-soft">
                  Concept reference / visual direction — ilustrasi, bukan proyek klien Clarea Design Space yang telah selesai.
                </p>
              )}
              <WhatsAppButton message={projectMessage(active.title)} className="mt-8 w-full">
                Diskusikan karya serupa
              </WhatsAppButton>
              <div className="mt-auto flex items-center justify-between pt-8">
                <button type="button" onClick={() => step(-1)} aria-label="Karya sebelumnya" className="flex h-11 w-11 items-center justify-center rounded-full border border-line hover:bg-charcoal/5">
                  <ChevronLeft size={18} />
                </button>
                <span className="text-xs tracking-widest text-ink-soft">
                  {activeIndex + 1} / {visible.length}
                </span>
                <button type="button" onClick={() => step(1)} aria-label="Karya berikutnya" className="flex h-11 w-11 items-center justify-center rounded-full border border-line hover:bg-charcoal/5">
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}
