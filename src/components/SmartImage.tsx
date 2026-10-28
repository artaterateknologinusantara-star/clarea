"use client";

import Image from "next/image";
import { useState } from "react";
import { withBase } from "@/lib/base-path";

type Props = {
  src: string;
  alt: string;
  sizes: string;
  className?: string;
  priority?: boolean;
};

/**
 * Gambar responsif dengan fallback elegan bila file tidak ditemukan.
 * Parent HARUS `relative` dan memiliki aspect-ratio / tinggi (menghindari layout shift).
 */
export default function SmartImage({ src, alt, sizes, className = "", priority }: Props) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className="absolute inset-0 flex items-center justify-center bg-champagne/40 text-xs tracking-widest text-ink-soft uppercase"
      >
        Gambar belum tersedia
      </div>
    );
  }

  return (
    <Image
      src={withBase(src)}
      alt={alt}
      fill
      sizes={sizes}
      loading={priority ? "eager" : undefined}
      fetchPriority={priority ? "high" : undefined}
      unoptimized={src.endsWith(".svg")}
      onError={() => setFailed(true)}
      className={`object-cover ${className}`}
    />
  );
}
