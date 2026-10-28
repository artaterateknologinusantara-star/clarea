import Reveal from "./Reveal";
import SmartImage from "./SmartImage";
import WhatsAppButton from "./WhatsAppButton";
import { collabScenarios } from "@/data/services";
import { siteConfig } from "@/lib/site-config";

export default function Collaboration() {
  return (
    <section id="kolaborasi" aria-labelledby="kolaborasi-title" className="bg-champagne/35 py-20 sm:py-28">
      <div className="container-x grid items-center gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-6">
          <p className="eyebrow mb-5 flex items-center gap-3">
            <span aria-hidden className="h-px w-8 bg-taupe" />
            B2B Collaboration
          </p>
          <h2 id="kolaborasi-title" className="display text-[2.4rem] sm:text-5xl lg:text-6xl">
            Partner fabrikasi <em className="text-taupe italic">di balik layar</em> Anda.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
            Butuh partner andal untuk memproduksi elemen dekoratif event berikutnya? Clarea Design Space bekerja dengan EO, WO, dekorator, dan tim produksi
            kreatif untuk mengubah konsep event menjadi props custom yang nyata.
          </p>
          <ul className="mt-8 divide-y divide-line border-y border-line">
            {collabScenarios.map((c, i) => (
              <li key={c} className="flex items-center gap-4 py-3.5">
                <span className="display w-7 text-sm text-taupe">0{i + 1}</span>
                {c}
              </li>
            ))}
          </ul>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton message={siteConfig.messages.general}>Diskusikan Proyek dengan Clarea Design Space</WhatsAppButton>
            <WhatsAppButton message={siteConfig.messages.reference} variant="secondary" icon={false}>
              Kirim Referensi Desain
            </WhatsAppButton>
          </div>
        </Reveal>
        <Reveal delay={0.15} className="lg:col-span-5 lg:col-start-8">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.25rem] bg-ivory">
            <SmartImage src="/images/concepts/process-cutting.svg" alt="Ilustrasi konsep pola potong styrofoam dari desain referensi" sizes="(min-width:1024px) 38vw, 92vw" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
