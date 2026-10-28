/**
 * ============================================================
 *  PORTOFOLIO — EDIT DI SINI
 *
 *  Semua entri di bawah adalah CONCEPT REFERENCE / VISUAL
 *  DIRECTION (ilustrasi), BUKAN proyek klien Clarea Design Space yang telah
 *  selesai. Setelah foto asli tersedia:
 *   1. Letakkan foto di /public/images/projects/
 *   2. Ganti `image` (mis. "/images/projects/angka-5.jpg")
 *   3. Ubah `title`, `description`, dan set `isConcept: false`
 *
 *  Tag "Konsep" otomatis hilang saat isConcept = false.
 * ============================================================
 */
export type Fabrication = "2D" | "Semi-3D" | "3D";
export type Application = "Kids Birthday" | "Wedding" | "Event Production";

export type Project = {
  id: string;
  title: string;
  fabrication: Fabrication;
  application: Application;
  description: string;
  image: string;
  alt: string;
  /** "tall" | "wide" | "square" — mengatur komposisi grid editorial */
  shape: "tall" | "wide" | "square";
  isConcept: boolean;
};

export const filters = ["All Projects", "2D", "Semi-3D", "3D", "Kids Birthday", "Wedding"] as const;
export type Filter = (typeof filters)[number];

export const projects: Project[] = [
  {
    id: "oversized-number",
    title: "Angka Ulang Tahun Oversized",
    fabrication: "2D",
    application: "Kids Birthday",
    description: "Angka besar potong datar dengan sisi tebal dan permukaan halus.",
    image: "/images/concepts/number-5.svg",
    alt: "Ilustrasi konsep angka 5 oversized berwarna ivory dengan ketebalan terlihat",
    shape: "tall",
    isConcept: true,
  },
  {
    id: "layered-characters",
    title: "Props Karakter Berlapis",
    fabrication: "Semi-3D",
    application: "Kids Birthday",
    description: "Lapisan bentuk bertingkat yang menciptakan kedalaman pada backdrop.",
    image: "/images/concepts/layered-characters.svg",
    alt: "Ilustrasi konsep awan dan bintang styrofoam bertumpuk dalam nuansa sage",
    shape: "square",
    isConcept: true,
  },
  {
    id: "character-sculpture",
    title: "Patung Karakter Custom",
    fabrication: "3D",
    application: "Kids Birthday",
    description: "Patung karakter tiga dimensi dengan proporsi dan finishing halus.",
    image: "/images/concepts/character-sculpture.svg",
    alt: "Ilustrasi konsep patung beruang 3D dengan pita sage",
    shape: "tall",
    isConcept: true,
  },
  {
    id: "wedding-monogram",
    title: "Monogram Wedding Skulptural",
    fabrication: "Semi-3D",
    application: "Wedding",
    description: "Lengkung berlapis dengan lettering timbul untuk aksen panggung.",
    image: "/images/concepts/wedding-monogram.svg",
    alt: "Ilustrasi konsep lengkung berlapis dengan tanda & timbul dalam warna champagne",
    shape: "tall",
    isConcept: true,
  },
  {
    id: "event-lettering",
    title: "Lettering Event Custom",
    fabrication: "2D",
    application: "Event Production",
    description: "Huruf potong dengan ketebalan terukur untuk signage dan backdrop.",
    image: "/images/concepts/event-lettering.svg",
    alt: "Ilustrasi konsep tulisan Hello berbahan styrofoam di latar charcoal",
    shape: "wide",
    isConcept: true,
  },
  {
    id: "wedding-sculpture",
    title: "Patung Dekoratif Wedding",
    fabrication: "3D",
    application: "Wedding",
    description: "Bentuk floral skulptural di atas plinth untuk display dekoratif.",
    image: "/images/concepts/wedding-sculpture.svg",
    alt: "Ilustrasi konsep bunga skulptural putih di atas plinth silinder",
    shape: "tall",
    isConcept: true,
  },
];
