import { MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { siteConfig } from "@/lib/site-config";

export default function FloatingWhatsApp() {
  const url = buildWhatsAppUrl(siteConfig.messages.general);
  if (!url) return null; // tidak menampilkan tombol mengambang yang rusak
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat Clarea Design Space via WhatsApp (tab baru)"
      className="fixed right-4 bottom-4 z-40 flex h-14 items-center gap-2 rounded-full bg-charcoal px-5 text-sm font-semibold text-ivory shadow-lg shadow-black/20 transition hover:bg-black active:scale-95 sm:right-6 sm:bottom-6"
    >
      <MessageCircle size={20} aria-hidden />
      <span className="hidden sm:inline">Chat WhatsApp</span>
    </a>
  );
}
