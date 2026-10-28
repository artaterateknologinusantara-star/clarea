# Clarea — Landing Page

Next.js (App Router) · TypeScript · Tailwind v4 · Motion · Lucide.

    npm run dev      # http://localhost:3000
    npm run build && npm start

## Yang perlu diisi pemilik
Semua di `src/lib/site-config.ts`:
- `whatsappNumber` — **wajib** (digit saja, mis. `62…`). Kosong = semua tombol WhatsApp dinonaktifkan.
- `instagramUrl`, `email`, `location`, `businessHours` — kosong = tidak ditampilkan.
- `siteUrl` — mengaktifkan canonical URL & metadataBase.
- `seo.ogImage` — gambar sharing 1200×630 (kosong = gambar teks otomatis).

Portofolio: `src/data/projects.ts` (ganti `image`, judul, set `isConcept: false`; taruh foto di `public/images/projects/`).
Layanan, FAQ, proses: `src/data/services.ts`.
Semua gambar saat ini adalah ilustrasi *concept reference* di `public/images/concepts/`, bukan karya klien.
