import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";
import { basePath } from "@/lib/base-path";

const origin = siteConfig.siteUrl ? `${siteConfig.siteUrl}${basePath}` : "";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});
const body = Manrope({ variable: "--font-body", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  ...(origin ? { metadataBase: new URL(origin + "/"), alternates: { canonical: origin + "/" } } : {}),
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
  openGraph: {
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    siteName: siteConfig.brandName,
    locale: "id_ID",
    type: "website",
    ...(siteConfig.seo.ogImage && origin ? { images: [origin + siteConfig.seo.ogImage] } : {}),
  },
  twitter: { card: "summary_large_image", title: siteConfig.seo.title, description: siteConfig.seo.description },
};

export const viewport: Viewport = { themeColor: "#F8F6F1", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
