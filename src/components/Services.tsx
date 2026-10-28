import { ArrowRight, Check } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import SmartImage from "./SmartImage";
import { applications, services } from "@/data/services";

export default function Services() {
  return (
    <>
      <section id="layanan" aria-labelledby="layanan-title" className="py-20 sm:py-28">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              id="layanan-title"
              label="What We Create"
              intro="Dari elemen potong datar hingga patung dimensional, Clarea Design Space mengubah referensi kreatif menjadi props styrofoam custom untuk aplikasi event profesional."
            >
              Konsep Anda. <em className="text-taupe italic">Keahlian kami.</em>
            </SectionHeading>
          </Reveal>

          <ul className="mt-14 grid gap-6 lg:grid-cols-3 lg:gap-8">
            {services.map((s, i) => (
              <Reveal as="li" key={s.id} delay={i * 0.1} className="flex">
                <article className="flex w-full flex-col overflow-hidden rounded-[2rem] border border-line bg-soft-white">
                  <div className="relative aspect-[4/3] overflow-hidden bg-champagne/30">
                    <SmartImage src={s.image} alt={s.imageAlt} sizes="(min-width:1024px) 30vw, 92vw" className="transition-transform duration-700 hover:scale-[1.03]" />
                    <span className="absolute top-4 left-4 rounded-full bg-ivory/90 px-3 py-1 text-[0.68rem] font-semibold tracking-[0.18em] uppercase backdrop-blur">
                      {s.label}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <p className="display text-sm text-taupe">{s.number}</p>
                    <h3 className="display mt-1 text-3xl">{s.title}</h3>
                    <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-soft">{s.description}</p>
                    <ul className="mt-5 space-y-2 border-t border-line pt-5 text-sm">
                      {s.examples.map((e) => (
                        <li key={e} className="flex items-start gap-2.5">
                          <Check size={15} aria-hidden className="mt-0.5 shrink-0 text-sage" />
                          {e}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="#portofolio"
                      data-filter={s.portfolioFilter}
                      className="group mt-auto inline-flex min-h-11 items-center gap-2 pt-6 text-sm font-semibold"
                    >
                      Lihat karya {s.label}
                      <ArrowRight size={16} aria-hidden className="transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section id="aplikasi" aria-labelledby="aplikasi-title" className="bg-soft-white py-20 sm:py-28">
        <div className="container-x">
          <Reveal>
            <SectionHeading id="aplikasi-title" label="Made for Creative Productions">
              Dirancang untuk <em className="text-taupe italic">momen yang Anda ciptakan.</em>
            </SectionHeading>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:gap-8">
            {applications.map((a, i) => (
              <Reveal key={a.id} delay={i * 0.12}>
                <article className="group relative overflow-hidden rounded-[2rem] bg-ivory">
                  <div className="relative aspect-[5/4] overflow-hidden">
                    <SmartImage src={a.image} alt={a.imageAlt} sizes="(min-width:768px) 46vw, 92vw" className="transition-transform duration-700 group-hover:scale-[1.04]" />
                  </div>
                  <div className="p-7 sm:p-9">
                    <p className="eyebrow">{a.label}</p>
                    <h3 className="display mt-3 text-4xl">{a.title}</h3>
                    <p className="mt-4 leading-relaxed text-ink-soft">{a.description}</p>
                    <ul className="mt-6 flex flex-wrap gap-2">
                      {a.points.map((p) => (
                        <li key={p} className="rounded-full border border-line px-3.5 py-1.5 text-xs text-ink-soft">
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <p className="mx-auto mt-12 max-w-2xl border-t border-line pt-8 text-center text-sm leading-relaxed text-ink-soft sm:text-base">
            Clarea Design Space berfokus memproduksi elemen dekoratif custom untuk profesional event dan mitra kreatif — bukan paket dekorasi event lengkap.
          </p>
        </div>
      </section>
    </>
  );
}
