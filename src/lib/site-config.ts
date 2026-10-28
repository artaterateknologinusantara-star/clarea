/**
 * ============================================================
 *  CLAREA — CENTRAL SITE CONFIGURATION
 *  Satu-satunya file yang perlu diedit pemilik untuk mengganti
 *  nomor WhatsApp, sosial media, domain, dan teks SEO.
 *
 *  Nilai kosong ("" atau null) = belum diisi. Website tetap
 *  berjalan; tombol WhatsApp akan dinonaktifkan dengan pesan
 *  peringatan sampai nomor diisi.
 * ============================================================
 */
export const siteConfig = {
  brandName: "Clarea Design Space",
  tagline: "Where Ideas Become Art.",
  taglineEn: "Dari Ide Menjadi Karya Dekorasi.",
  supporting: "Custom Styrofoam Props & Sculptures for Events.",

  /**
   * TODO(owner): Nomor WhatsApp resmi, format internasional,
   * hanya angka, tanpa "+" atau spasi. Contoh format: "62812XXXXXXXX"
   * (jangan gunakan contoh ini — isi dengan nomor asli).
   */
  whatsappNumber: "6281910698899",

  /** TODO(owner): URL Instagram lengkap, mis. "https://instagram.com/<akun>" */
  instagramUrl: "",
  /** TODO(owner): Alamat email bisnis. */
  email: "",
  /** TODO(owner): Lokasi/studio (opsional). Kosongkan bila tidak ingin ditampilkan. */
  location: "",
  /** TODO(owner): Jam operasional (opsional), mis. "Senin–Sabtu, 09.00–17.00". */
  businessHours: "",

  /** TODO(owner): Domain produksi, mis. "https://www.contoh.id" (tanpa slash akhir). Mengaktifkan canonical URL. */
  siteUrl: "https://clarea-design-space.netlify.app",

  seo: {
    title: "Clarea Design Space | Jasa Dekorasi Styrofoam Custom & Props 3D Event",
    description:
      "Clarea Design Space membuat dekorasi dan patung styrofoam custom 2D, semi-3D, dan 3D untuk kids birthday, wedding, dan produksi event profesional.",
    /** TODO(owner): Path gambar sharing (mis. "/images/og.jpg", 1200×630). Kosong = gambar teks otomatis. */
    ogImage: "/images/logo.png",
  },

  /** Pesan WhatsApp bawaan (Bahasa Indonesia). */
  messages: {
    general:
      "Halo Clarea Design Space, saya ingin bertanya mengenai jasa pembuatan dekorasi styrofoam. Saya dari EO/WO/vendor dekorasi dan ingin mendiskusikan kebutuhan proyek. Mohon informasi lebih lanjut.",
    quotation:
      "Halo Clarea Design Space, saya ingin meminta penawaran jasa pembuatan dekorasi styrofoam. Jenis dekorasi: [2D/Semi-3D/3D]. Kebutuhan proyek: [isi kebutuhan]. Target selesai: [tanggal].",
    reference:
      "Halo Clarea Design Space, saya ingin mengirimkan referensi desain untuk dibuatkan dekorasi styrofoam custom. Mohon arahan untuk langkah selanjutnya.",
  },
} as const;

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Layanan", href: "#layanan" },
  { label: "Portofolio", href: "#portofolio" },
  { label: "Proses", href: "#proses" },
  { label: "Tentang", href: "#tentang" },
  { label: "Kontak", href: "#kontak" },
];
