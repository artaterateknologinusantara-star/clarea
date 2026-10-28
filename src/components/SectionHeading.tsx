import type { ReactNode } from "react";

export default function SectionHeading({
  label,
  children,
  intro,
  id,
  align = "left",
}: {
  label: string;
  children: ReactNode;
  intro?: string;
  id?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="eyebrow mb-5 flex items-center gap-3" style={align === "center" ? { justifyContent: "center" } : undefined}>
        <span aria-hidden className="h-px w-8 bg-taupe" />
        {label}
      </p>
      <h2 id={id} className="display text-[2.4rem] sm:text-5xl lg:text-6xl">
        {children}
      </h2>
      {intro && <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">{intro}</p>}
    </div>
  );
}
