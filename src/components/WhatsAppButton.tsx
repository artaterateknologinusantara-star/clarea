import { ArrowUpRight, MessageCircle } from "lucide-react";
import type { ReactNode } from "react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

type Variant = "primary" | "secondary" | "light" | "ghost-light";

const base =
  "group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition duration-300 active:scale-[0.97] focus-visible:outline-offset-4";

const variants: Record<Variant, string> = {
  primary: "bg-charcoal text-ivory hover:bg-black",
  secondary: "border border-charcoal/30 text-charcoal hover:border-charcoal hover:bg-charcoal/5",
  light: "bg-ivory text-charcoal hover:bg-white",
  "ghost-light": "border border-ivory/40 text-ivory hover:border-ivory hover:bg-ivory/10",
};

/**
 * Tombol CTA WhatsApp. Bila nomor belum diisi di site-config, tombol dinonaktifkan
 * (bukan tautan rusak) dan menampilkan petunjuk lewat title/aria.
 */
export default function WhatsAppButton({
  message,
  children,
  variant = "primary",
  className = "",
  icon = true,
}: {
  message: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  icon?: boolean;
}) {
  const url = buildWhatsAppUrl(message);
  const cls = `${base} ${variants[variant]} ${className}`;
  const Icon = icon ? <MessageCircle size={18} aria-hidden /> : null;

  if (!url) {
    return (
      <button
        type="button"
        disabled
        title="Nomor WhatsApp belum dikonfigurasi (src/lib/site-config.ts)"
        className={`${cls} cursor-not-allowed opacity-50`}
      >
        {Icon}
        {children}
      </button>
    );
  }
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className={cls}>
      {Icon}
      {children}
      <ArrowUpRight size={16} aria-hidden className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      <span className="sr-only"> (membuka WhatsApp di tab baru)</span>
    </a>
  );
}
