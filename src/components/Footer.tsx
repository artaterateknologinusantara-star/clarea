import { Mail, MapPin, MessageCircle } from "lucide-react";
import SmartImage from "./SmartImage";
import { navLinks, siteConfig } from "@/lib/site-config";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const serviceLinks = [
  { label: "Dekorasi 2D", href: "#layanan" },
  { label: "Dekorasi Semi-3D", href: "#layanan" },
  { label: "Patung 3D Penuh", href: "#layanan" },
  { label: "Kids Birthday & Wedding", href: "#aplikasi" },
];

function Instagram({ size = 15, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r=".6" fill="currentColor" />
    </svg>
  );
}

export default function Footer() {
  const wa = buildWhatsAppUrl(siteConfig.messages.general);
  const link = "inline-flex min-h-9 items-center text-sm text-ink-soft transition hover:text-charcoal";
  return (
    <footer className="border-t border-line bg-soft-white">
      <div className="container-x grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="relative aspect-[3/2] w-72 max-w-full overflow-hidden rounded-3xl">
            <SmartImage src="/images/logo.png" alt="Logo Clarea Design Space — Where Ideas Become Art" sizes="288px" />
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-soft">
            Clarea Design Space adalah studio fabrikasi styrofoam custom yang mengkhususkan diri pada props dekoratif 2D, semi-3D, dan 3D untuk kids birthday,
            wedding, dan produksi event profesional.
          </p>
        </div>
        <nav aria-label="Navigasi footer" className="md:col-span-2 md:col-start-7">
          <p className="eyebrow mb-3">Navigasi</p>
          <ul>
            {navLinks.map((l) => (
              <li key={l.href}><a href={l.href} className={link}>{l.label}</a></li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Layanan" className="md:col-span-2">
          <p className="eyebrow mb-3">Layanan</p>
          <ul>
            {serviceLinks.map((l) => (
              <li key={l.label}><a href={l.href} className={link}>{l.label}</a></li>
            ))}
          </ul>
        </nav>
        <div className="md:col-span-2">
          <p className="eyebrow mb-3">Kontak</p>
          <ul className="space-y-1">
            <li>
              {wa ? (
                <a href={wa} target="_blank" rel="noopener noreferrer" className={link}><MessageCircle size={15} className="mr-2" aria-hidden />WhatsApp</a>
              ) : (
                <span className="inline-flex min-h-9 items-center text-sm text-taupe"><MessageCircle size={15} className="mr-2" aria-hidden />WhatsApp segera hadir</span>
              )}
            </li>
            {siteConfig.instagramUrl && (
              <li><a href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer" className={link}><Instagram className="mr-2" />Instagram</a></li>
            )}
            {siteConfig.email && (
              <li><a href={`mailto:${siteConfig.email}`} className={link}><Mail size={15} className="mr-2" aria-hidden />{siteConfig.email}</a></li>
            )}
            {siteConfig.location && (
              <li className="flex items-start gap-2 py-1 text-sm text-ink-soft"><MapPin size={15} className="mt-0.5 shrink-0" aria-hidden />{siteConfig.location}</li>
            )}
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <p className="container-x py-6 text-xs text-ink-soft">
          © {new Date().getFullYear()} {siteConfig.brandName}. Seluruh hak cipta dilindungi. Ilustrasi pada situs ini adalah concept reference, bukan dokumentasi proyek klien.
        </p>
      </div>
    </footer>
  );
}
