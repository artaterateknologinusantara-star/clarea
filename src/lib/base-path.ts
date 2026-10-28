/** Prefix path untuk hosting di sub-folder (GitHub Pages). Kosong bila di domain root. */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
export const withBase = (p: string) => (p.startsWith("/") ? `${basePath}${p}` : p);
