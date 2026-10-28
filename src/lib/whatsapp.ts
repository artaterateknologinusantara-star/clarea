import { siteConfig } from "./site-config";

/** Hanya angka; mengembalikan "" bila belum diisi / tidak valid. */
export function getWhatsAppNumber(): string {
  const digits = siteConfig.whatsappNumber.replace(/\D/g, "");
  return digits.length >= 8 ? digits : "";
}

export const isWhatsAppConfigured = () => getWhatsAppNumber() !== "";

/** Membuat tautan wa.me dengan pesan ter-encode. null bila nomor belum diisi. */
export function buildWhatsAppUrl(message: string): string | null {
  const number = getWhatsAppNumber();
  if (!number) return null;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function projectMessage(projectTitle: string): string {
  return `Halo Clarea Design Space, saya tertarik dengan karya "${projectTitle}" di portofolio Anda dan ingin mendiskusikan pembuatan yang serupa untuk proyek saya. Mohon informasi lebih lanjut.`;
}
