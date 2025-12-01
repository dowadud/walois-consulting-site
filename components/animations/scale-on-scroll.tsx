"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScaleOnScrollProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function ScaleOnScroll({
  children,
  delay = 0,
  className = "",
}: ScaleOnScrollProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

