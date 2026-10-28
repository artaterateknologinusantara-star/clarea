"use client";

import { Send } from "lucide-react";
import { useState } from "react";
import { siteConfig } from "@/lib/site-config";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

type Values = {
  name: string;
  company: string;
  projectType: string;
  fabrication: string;
  date: string;
  description: string;
};
const empty: Values = { name: "", company: "", projectType: "", fabrication: "", date: "", description: "" };
const required: (keyof Values)[] = ["name", "projectType", "fabrication", "description"];
const labels: Record<keyof Values, string> = {
  name: "Nama",
  company: "Perusahaan / vendor",
  projectType: "Jenis proyek",
  fabrication: "Kategori fabrikasi",
  date: "Target selesai",
  description: "Deskripsi proyek",
};

function formatDate(iso: string) {
  if (!iso) return "-";
  return new Date(iso + "T00:00:00").toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" });
}

export function buildInquiry(v: Values) {
  return [
    "Halo Clarea Design Space, saya ingin meminta penawaran jasa pembuatan dekorasi styrofoam.",
    "",
    `Nama: ${v.name.trim()}`,
    `Perusahaan/Vendor: ${v.company.trim() || "-"}`,
    `Jenis proyek: ${v.projectType}`,
    `Jenis dekorasi: ${v.fabrication}`,
    `Target selesai: ${formatDate(v.date)}`,
    `Kebutuhan proyek: ${v.description.trim()}`,
    "",
    "Referensi desain akan saya kirimkan melalui chat ini. Terima kasih.",
  ].join("\n");
}

const field =
  "mt-2 min-h-12 w-full rounded-xl border border-line bg-soft-white px-4 py-3 text-base text-charcoal placeholder:text-taupe focus:border-charcoal";

export default function QuoteForm() {
  const [v, setV] = useState<Values>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Values, string>>>({});
  const [notice, setNotice] = useState<string | null>(null);

  const set = (k: keyof Values) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setV((p) => ({ ...p, [k]: e.target.value }));
    setErrors((p) => ({ ...p, [k]: undefined }));
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: typeof errors = {};
    required.forEach((k) => {
      if (!v[k].trim()) errs[k] = `${labels[k]} wajib diisi.`;
    });
    setErrors(errs);
    if (Object.keys(errs).length) {
      setNotice(null);
      return;
    }
    const url = buildWhatsAppUrl(buildInquiry(v));
    if (!url) {
      setNotice("Nomor WhatsApp Clarea Design Space belum dikonfigurasi, sehingga pesan belum dapat dikirim. (Pemilik: isi whatsappNumber di src/lib/site-config.ts.)");
      return;
    }
    window.open(url, "_blank", "noopener,noreferrer");
    setNotice("WhatsApp dibuka di tab baru dengan pesan yang sudah terisi. Kirim pesan tersebut untuk menyelesaikan permintaan Anda.");
  };

  const err = (k: keyof Values) => errors[k];
  const props = (k: keyof Values) => ({
    id: `f-${k}`,
    name: k,
    value: v[k],
    onChange: set(k),
    "aria-invalid": err(k) ? true : undefined,
    "aria-describedby": err(k) ? `e-${k}` : undefined,
    className: field,
  });
  const errMsg = (k: keyof Values) =>
    err(k) ? (
      <p id={`e-${k}`} className="mt-1.5 text-sm text-red-800">
        {err(k)}
      </p>
    ) : null;

  return (
    <form onSubmit={submit} noValidate className="grid gap-5 sm:grid-cols-2">
      <div>
        <label htmlFor="f-name" className="text-sm font-medium">Nama <span aria-hidden>*</span></label>
        <input {...props("name")} type="text" autoComplete="name" required placeholder="Nama Anda" />
        {errMsg("name")}
      </div>
      <div>
        <label htmlFor="f-company" className="text-sm font-medium">Perusahaan / vendor</label>
        <input {...props("company")} type="text" autoComplete="organization" placeholder="Nama EO / WO / vendor" />
      </div>
      <div>
        <label htmlFor="f-projectType" className="text-sm font-medium">Jenis proyek <span aria-hidden>*</span></label>
        <select {...props("projectType")} required>
          <option value="">Pilih jenis proyek</option>
          <option>Kids Birthday</option>
          <option>Wedding</option>
          <option>Produksi Event / Panggung</option>
          <option>Lainnya</option>
        </select>
        {errMsg("projectType")}
      </div>
      <div>
        <label htmlFor="f-fabrication" className="text-sm font-medium">Kategori fabrikasi <span aria-hidden>*</span></label>
        <select {...props("fabrication")} required>
          <option value="">Pilih kategori</option>
          <option>2D</option>
          <option>Semi-3D</option>
          <option>3D</option>
          <option>Belum yakin — ingin berdiskusi</option>
        </select>
        {errMsg("fabrication")}
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="f-date" className="text-sm font-medium">Target selesai</label>
        <input {...props("date")} type="date" />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="f-description" className="text-sm font-medium">Deskripsi proyek <span aria-hidden>*</span></label>
        <textarea {...props("description")} rows={5} required placeholder="Ceritakan konsep, dimensi perkiraan, jumlah, dan finishing yang diinginkan." />
        {errMsg("description")}
      </div>
      <div className="sm:col-span-2">
        <button type="submit" className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-charcoal px-7 py-3 text-sm font-semibold text-ivory transition hover:bg-black active:scale-[0.98] sm:w-auto">
          <Send size={16} aria-hidden /> Kirim via WhatsApp
        </button>
        <p className="mt-3 text-sm text-ink-soft">
          Formulir ini tidak disimpan di server. Setelah dikirim, pesan terformat akan terbuka di WhatsApp untuk Anda kirim ke {siteConfig.brandName}.
        </p>
        <p role="status" aria-live="polite" className={`mt-3 rounded-xl p-3 text-sm ${notice ? "bg-champagne/40" : "hidden"}`}>
          {notice}
        </p>
      </div>
    </form>
  );
}
