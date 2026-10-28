import Reveal from "./Reveal";
import QuoteForm from "./QuoteForm";
import SmartImage from "./SmartImage";
import WhatsAppButton from "./WhatsAppButton";
import { siteConfig } from "@/lib/site-config";

export default function ContactCTA() {
  return (
    <section id="kontak" aria-labelledby="kontak-title" className="py-6 sm:py-10">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-charcoal text-ivory sm:rounded-[2.75rem]">
            <div className="grid items-stretch lg:grid-cols-12">
              <div className="p-8 sm:p-14 lg:col-span-7 lg:p-20">
                <p className="mb-5 flex items-center gap-3 text-[0.72rem] font-semibold tracking-[0.22em] text-champagne uppercase">
                  <span aria-hidden className="h-px w-8 bg-champagne" /> Request a Quotation
                </p>
                <h2 id="kontak-title" className="display text-[2.7rem] sm:text-6xl lg:text-7xl">
                  Punya visi yang <em className="text-champagne italic">layak diwujudkan?</em>
                </h2>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-ivory/75 sm:text-lg">
                  Mari ubah konsep kreatif Anda berikutnya menjadi props styrofoam custom yang menghidupkan desain event Anda.
                </p>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <WhatsAppButton message={siteConfig.messages.quotation} variant="light">
                    Minta Penawaran via WhatsApp
                  </WhatsAppButton>
                  <a
                    href="#portofolio"
                    className="inline-flex min-h-12 items-center justify-center rounded-full border border-ivory/40 px-6 py-3 text-sm font-semibold tracking-wide transition hover:border-ivory hover:bg-ivory/10 active:scale-[0.97]"
                  >
                    Jelajahi Portofolio
                  </a>
                </div>
                <p className="mt-8 text-sm text-ivory/60">Untuk EO, WO, dekorator, dan tim produksi kreatif.</p>
              </div>
              <div className="relative min-h-72 lg:col-span-5">
                <SmartImage src="/images/concepts/studio-foam.svg" alt="Ilustrasi konsep bentuk styrofoam putih di atas meja studio fabrikasi" sizes="(min-width:1024px) 40vw, 92vw" />
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mx-auto mt-20 grid max-w-6xl gap-10 pb-20 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <h3 className="display text-4xl">Kirim brief proyek Anda.</h3>
            <p className="mt-4 leading-relaxed text-ink-soft">
              Isi formulir singkat ini, dan kami siapkan pesan WhatsApp terformat. Siapkan juga gambar referensi, dimensi perkiraan, dan jumlah yang dibutuhkan.
            </p>
          </div>
          <div className="lg:col-span-8">
            <QuoteForm />
          </div>
        </div>
      </div>
    </section>
  );
}
