"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ImageWithOverlayProps {
  src: string;
  alt: string;
  className?: string;
  overlay?: boolean;
}

export function ImageWithOverlay({
  src,
  alt,
  className = "",
  overlay = true,
}: ImageWithOverlayProps) {
  return (
    <motion.div
      className={`group relative overflow-hidden rounded-2xl ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-full min-h-[400px] w-full">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {overlay && (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-transparent opacity-60 transition-opacity group-hover:opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
          </>
        )}
      </div>
    </motion.div>
  );
}

