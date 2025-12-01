"use client";

import { motion } from "framer-motion";
import { Code2, Network, Cpu, Database } from "lucide-react";

interface TechImagePlaceholderProps {
  type?: "automation" | "ai" | "systems" | "data";
  className?: string;
}

export function TechImagePlaceholder({
  type = "automation",
  className = "",
}: TechImagePlaceholderProps) {
  const icons = {
    automation: Network,
    ai: Cpu,
    systems: Code2,
    data: Database,
  };

  const Icon = icons[type];

  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 ${className}`}
    >
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgb(5, 150, 105, 0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(5, 150, 105, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Animated circles */}
      <motion.div
        className="absolute left-1/4 top-1/4 h-32 w-32 rounded-full bg-emerald-500/20 blur-2xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute right-1/4 bottom-1/4 h-40 w-40 rounded-full bg-amber-500/20 blur-2xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Center icon */}
      <div className="relative flex h-full items-center justify-center p-12">
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute h-48 w-48 rounded-full border border-emerald-500/20"
        />
        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute h-32 w-32 rounded-full border border-amber-500/20"
        />
        <Icon className="relative z-10 h-16 w-16 text-emerald-400" />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
    </div>
  );
}

