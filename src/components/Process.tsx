import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { processSteps } from "@/data/services";

export default function Process() {
  return (
    <section id="proses" aria-labelledby="proses-title" className="py-20 sm:py-28">
      <div className="container-x">
        <Reveal>
          <SectionHeading id="proses-title" label="How We Work">
            Dari referensi hingga <em className="text-taupe italic">karya jadi.</em>
          </SectionHeading>
        </Reveal>
        <ol className="relative mt-14 grid gap-10 md:grid-cols-4 md:gap-6">
          <span aria-hidden className="absolute top-6 right-[12%] left-[6%] hidden h-px bg-line md:block" />
          {processSteps.map((s, i) => (
            <Reveal as="li" key={s.n} delay={i * 0.1} className="relative flex gap-5 md:block">
              <span className="display relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-line bg-ivory text-lg">
                {s.n}
              </span>
              <div className="md:mt-6">
                <h3 className="display text-2xl">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-ink-soft">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
