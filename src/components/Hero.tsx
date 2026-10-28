import SmartImage from "./SmartImage";
import WhatsAppButton from "./WhatsAppButton";
import { siteConfig } from "@/lib/site-config";

const tag = "rounded-full bg-ivory/90 px-3 py-1 text-[0.65rem] font-semibold tracking-[0.18em] uppercase text-charcoal backdrop-blur";

export default function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="relative overflow-hidden">
      <div className="container-x grid items-center gap-12 pt-10 pb-16 lg:grid-cols-12 lg:gap-6 lg:pt-16 lg:pb-24">
        {/* Copy */}
        <div className="lg:col-span-6 xl:col-span-5">
          <p className="eyebrow animate-fade-up mb-6 flex items-center gap-3">
            <span aria-hidden className="h-px w-8 bg-taupe" />
            Custom Styrofoam Fabrication
          </p>
          <h1 id="hero-title" className="display animate-fade-up text-[3rem] leading-[0.98] sm:text-7xl xl:text-[5.5rem]" style={{ animationDelay: "80ms" }}>
            Ide Kreatif,
            <br />
            Dibentuk <em className="font-medium text-taupe italic">Menjadi Karya.</em>
          </h1>
          <p className="animate-fade-up mt-7 max-w-lg text-base leading-relaxed text-ink-soft sm:text-lg" style={{ animationDelay: "180ms" }}>
            Clarea Design Space menghadirkan jasa pembuatan dekorasi styrofoam custom 2D, semi-3D, dan 3D untuk kebutuhan kids birthday, wedding, serta
            produksi event profesional.
          </p>
          <div className="animate-fade-up mt-9 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "280ms" }}>
            <a
              href="#portofolio"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-charcoal px-7 py-3 text-sm font-semibold tracking-wide text-ivory transition duration-300 hover:bg-black active:scale-[0.97]"
            >
              Lihat Portofolio
            </a>
            <WhatsAppButton message={siteConfig.messages.quotation} variant="secondary">
              Konsultasi Proyek
            </WhatsAppButton>
          </div>
          <p className="animate-fade-up mt-8 border-t border-line pt-5 text-sm text-ink-soft" style={{ animationDelay: "360ms" }}>
            <span className="font-semibold text-charcoal">Made to order · Desain custom</span>
            <br />
            Partner produksi dekorasi untuk EO, WO, dan vendor kreatif.
          </p>
        </div>

        {/* Editorial collage */}
        <div className="animate-fade-up relative lg:col-span-6 lg:col-start-7 xl:col-span-7 xl:col-start-6" style={{ animationDelay: "200ms" }}>
          <div className="grid grid-cols-12 gap-3 sm:gap-5">
            <figure className="relative col-span-7 row-span-2 aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-champagne/40 sm:rounded-[2.25rem]">
              <SmartImage src="/images/concepts/character-sculpture.svg" alt="Ilustrasi konsep patung karakter beruang 3D berbahan styrofoam" sizes="(min-width:1024px) 34vw, 58vw" priority />
              <figcaption className={`absolute bottom-4 left-4 ${tag}`}>3D · Full Sculpture</figcaption>
            </figure>
            <figure className="relative col-span-5 aspect-square overflow-hidden rounded-[1.5rem] bg-champagne/40 sm:rounded-[2rem]">
              <SmartImage src="/images/concepts/layered-characters.svg" alt="Ilustrasi konsep elemen styrofoam berlapis dengan kedalaman" sizes="(min-width:1024px) 24vw, 40vw" priority />
              <figcaption className={`absolute bottom-3 left-3 ${tag}`}>Semi-3D</figcaption>
            </figure>
            <figure className="relative col-span-5 aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-champagne/40 sm:rounded-[2rem]">
              <SmartImage src="/images/concepts/number-5.svg" alt="Ilustrasi konsep angka 5 oversized potong datar" sizes="(min-width:1024px) 24vw, 40vw" priority />
              <figcaption className={`absolute bottom-3 left-3 ${tag}`}>2D · Cutout</figcaption>
            </figure>
          </div>
          <p className="mt-4 text-right text-[0.68rem] tracking-[0.2em] text-taupe uppercase">Visual Direction · ilustrasi konsep, bukan proyek klien</p>
        </div>
      </div>
    </section>
  );
}
