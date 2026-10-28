import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import SmartImage from "./SmartImage";
import { differentiators } from "@/data/services";

export default function WhyClarea() {
  return (
    <section id="tentang" aria-labelledby="tentang-title" className="bg-soft-white py-20 sm:py-28">
      <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <Reveal>
            <SectionHeading id="tentang-title" label="The Clarea Difference">
              Partner produksi kreatif yang <em className="text-taupe italic">dapat diandalkan.</em>
            </SectionHeading>
          </Reveal>
          <Reveal delay={0.1} className="relative mt-10 hidden aspect-[4/3] overflow-hidden rounded-[2rem] bg-champagne/30 lg:block">
            <SmartImage src="/images/concepts/surface-detail.svg" alt="Ilustrasi konsep detail permukaan styrofoam beads dari dekat" sizes="40vw" />
          </Reveal>
        </div>
        <ol className="grid gap-x-10 gap-y-2 sm:grid-cols-2 lg:col-span-7 lg:self-center">
          {differentiators.map((d, i) => (
            <Reveal as="li" key={d.title} delay={i * 0.08} className="border-t border-line py-8">
              <p className="display text-sm text-taupe">0{i + 1}</p>
              <h3 className="display mt-2 text-[1.7rem] leading-tight">{d.title}</h3>
              <p className="mt-3 leading-relaxed text-ink-soft">{d.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
