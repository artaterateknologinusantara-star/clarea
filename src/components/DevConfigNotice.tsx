import { isWhatsAppConfigured } from "@/lib/whatsapp";

/** Hanya tampil saat development ketika nomor WhatsApp belum diisi. */
export default function DevConfigNotice() {
  if (process.env.NODE_ENV === "production" || isWhatsAppConfigured()) return null;
  return (
    <div role="status" className="bg-amber-100 px-4 py-2 text-center text-xs font-medium text-amber-950">
      DEV: <code>whatsappNumber</code> belum diisi di <code>src/lib/site-config.ts</code> — semua tombol WhatsApp dinonaktifkan sampai nomor
      diisi (format digit, contoh <code>62…</code>).
    </div>
  );
}
