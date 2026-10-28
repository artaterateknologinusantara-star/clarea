/** Edit deskripsi layanan & gambar di sini. Path gambar relatif terhadap folder /public. */
export type Service = {
  id: "2d" | "semi-3d" | "3d";
  number: string;
  label: string;
  title: string;
  description: string;
  examples: string[];
  image: string;
  imageAlt: string;
  portfolioFilter: string;
};

export const services: Service[] = [
  {
    id: "2d",
    number: "01",
    label: "2D",
    title: "Dekorasi 2D",
    description:
      "Bentuk styrofoam potong datar: huruf, logo, siluet, cutout bertema, dan panel dekoratif untuk kebutuhan styling event.",
    examples: [
      "Custom lettering",
      "Siluet karakter",
      "Logo event",
      "Cutout dekoratif",
      "Ornamen backdrop datar",
    ],
    image: "/images/concepts/number-5.svg",
    imageAlt: "Ilustrasi konsep angka 5 besar berbahan styrofoam potong datar",
    portfolioFilter: "2D",
  },
  {
    id: "semi-3d",
    number: "02",
    label: "Semi-3D",
    title: "Dekorasi Semi-3D",
    description:
      "Elemen dekoratif berlapis yang menambah kedalaman, tekstur, dan dampak visual pada desain panggung dan backdrop.",
    examples: [
      "Lettering berlapis",
      "Logo timbul",
      "Ornamen floral dimensional",
      "Karakter multi-layer",
      "Elemen backdrop berpahat",
    ],
    image: "/images/concepts/layered-characters.svg",
    imageAlt: "Ilustrasi konsep awan styrofoam bertumpuk yang menunjukkan kedalaman berlapis",
    portfolioFilter: "Semi-3D",
  },
  {
    id: "3d",
    number: "03",
    label: "Full 3D",
    title: "Patung 3D Penuh",
    description:
      "Props dan patung styrofoam tiga dimensi custom, dirancang menjadi elemen visual utama dalam konsep event.",
    examples: [
      "Patung karakter",
      "Props bertema",
      "Objek skulptural",
      "Display dekoratif",
      "Ornamen & instalasi custom",
    ],
    image: "/images/concepts/character-sculpture.svg",
    imageAlt: "Ilustrasi konsep patung karakter beruang tiga dimensi berbahan styrofoam",
    portfolioFilter: "3D",
  },
];

export const applications = [
  {
    id: "kids",
    label: "Kids Birthday Parties",
    title: "Kids Birthday",
    description:
      "Karakter custom, patung bertema, angka oversized, lettering dekoratif, dan props statement yang menghidupkan konsep ulang tahun.",
    points: ["Karakter bergaya kartun", "Angka ukuran besar", "Cutout tema playful", "Props dimensional"],
    image: "/images/concepts/number-5.svg",
    imageAlt: "Ilustrasi konsep angka ulang tahun oversized warna pastel",
    filter: "Kids Birthday",
  },
  {
    id: "wedding",
    label: "Wedding Decoration",
    title: "Wedding",
    description:
      "Bentuk dekoratif custom, lettering elegan, ornamen skulptural, dan elemen dimensional yang melengkapi konsep pernikahan.",
    points: ["Monogram & lettering custom", "Bentuk terinspirasi floral", "Aksen panggung kontemporer", "Display skulptural"],
    image: "/images/concepts/wedding-sculpture.svg",
    imageAlt: "Ilustrasi konsep ornamen bunga skulptural putih di atas plinth",
    filter: "Wedding",
  },
];

export const differentiators = [
  { title: "Desain Custom", text: "Setiap proyek dimulai dari referensi, konsep, atau arahan kreatif Anda." },
  { title: "Beragam Gaya Dimensi", text: "Pilih fabrikasi 2D, semi-3D, atau 3D penuh sesuai kebutuhan visual Anda." },
  { title: "Alur Kerja Kolaboratif", text: "Bekerja dengan partner fabrikasi yang memahami kebutuhan profesional event." },
  {
    title: "Pengerjaan Penuh Detail",
    text: "Setiap karya dikerjakan dengan perhatian pada bentuk, proporsi, finishing, dan dampak visual yang dituju.",
  },
];

export const processSteps = [
  { n: "01", title: "Bagikan Ide Anda", text: "Kirim gambar referensi, sketsa, dimensi, atau brief desain." },
  {
    n: "02",
    title: "Diskusikan Detail",
    text: "Bahas gaya fabrikasi, dimensi, finishing, jumlah, dan kebutuhan proyek.",
  },
  {
    n: "03",
    title: "Produksi",
    text: "Setelah spesifikasi dan penawaran disetujui, proses fabrikasi custom dimulai.",
  },
  {
    n: "04",
    title: "Selesai & Serah Terima",
    text: "Karya jadi disiapkan untuk serah terima atau pengiriman sesuai kesepakatan.",
  },
];

export const collabScenarios = [
  "Fabrikasi berbasis proyek",
  "Props custom dari referensi desain",
  "Produksi banyak komponen dekoratif",
  "Kolaborasi berkelanjutan untuk vendor event",
  "Fabrikasi custom untuk beragam tema event",
];

export const faqs = [
  {
    q: "Jenis dekorasi styrofoam apa yang diproduksi Clarea Design Space?",
    a: "Clarea Design Space berfokus pada elemen dekoratif dan patung styrofoam custom 2D, semi-3D, dan 3D untuk kebutuhan event.",
  },
  {
    q: "Apakah saya bisa meminta desain custom?",
    a: "Bisa. Mulailah dengan membagikan gambar referensi, sketsa, dimensi, atau brief kreatif. Kelayakan akhir dan spesifikasi akan didiskusikan sebelum produksi.",
  },
  {
    q: "Apakah Clarea Design Space bekerja sama dengan vendor EO dan WO?",
    a: "Clarea Design Space diposisikan sebagai partner fabrikasi bagi event organizer, wedding organizer, dekorator, dan bisnis produksi kreatif lainnya.",
  },
  {
    q: "Apakah Clarea Design Space menyediakan jasa dekorasi event lengkap?",
    a: "Clarea Design Space berfokus memproduksi props dan patung dekoratif berbahan styrofoam. Pemasangan event, styling, dan manajemen event penuh bukan layanan utama.",
  },
  {
    q: "Bagaimana cara meminta penawaran?",
    a: "Hubungi Clarea Design Space melalui WhatsApp dan sampaikan konsep event, gambar referensi, dimensi, jumlah, finishing yang diinginkan, dan target tanggal selesai.",
  },
  {
    q: "Informasi apa yang perlu disiapkan sebelum meminta penawaran?",
    a: "Siapkan referensi desain, perkiraan dimensi, jumlah, aplikasi event, preferensi finishing, lokasi atau kebutuhan serah terima, dan target tanggal.",
  },
  {
    q: "Bisakah saya meminta patung berukuran besar atau kompleks?",
    a: "Proyek custom dapat didiskusikan berdasarkan desain, dimensi, kebutuhan material, tingkat kerumitan, dan kelayakan produksinya.",
  },
];
