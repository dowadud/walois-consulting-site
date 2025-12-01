"use client";

import { motion } from "framer-motion";
import { Code2, TrendingUp, Users, Zap, Bot, Network, BarChart3, Target } from "lucide-react";

interface ProfessionalImageProps {
  type: "automation" | "ai" | "systems" | "analytics" | "team" | "growth" | "strategy" | "network";
  className?: string;
  showOverlay?: boolean;
}

const imageConfigs = {
  automation: {
    icon: Zap,
    gradient: "from-emerald-600 via-teal-500 to-cyan-600",
    title: "Process Automation",
    pattern: "circuit",
  },
  ai: {
    icon: Bot,
    gradient: "from-violet-600 via-purple-500 to-fuchsia-600",
    title: "AI Solutions",
    pattern: "neural",
  },
  systems: {
    icon: Code2,
    gradient: "from-blue-600 via-indigo-500 to-violet-600",
    title: "Systems Design",
    pattern: "grid",
  },
  analytics: {
    icon: BarChart3,
    gradient: "from-emerald-600 via-green-500 to-teal-600",
    title: "Data Analytics",
    pattern: "data",
  },
  team: {
    icon: Users,
    gradient: "from-amber-600 via-orange-500 to-red-600",
    title: "Team Collaboration",
    pattern: "network",
  },
  growth: {
    icon: TrendingUp,
    gradient: "from-green-600 via-emerald-500 to-teal-600",
    title: "Business Growth",
    pattern: "chart",
  },
  strategy: {
    icon: Target,
    gradient: "from-blue-600 via-cyan-500 to-teal-600",
    title: "Strategic Planning",
    pattern: "target",
  },
  network: {
    icon: Network,
    gradient: "from-purple-600 via-pink-500 to-rose-600",
    title: "Connected Systems",
    pattern: "mesh",
  },
};

export function ProfessionalImage({ type, className = "", showOverlay = true }: ProfessionalImageProps) {
  const config = imageConfigs[type];
  const Icon = config.icon;

  return (
    <div className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${config.gradient} ${className}`}>
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-20">
        {config.pattern === "grid" && (
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `
                linear-gradient(to right, white 1px, transparent 1px),
                linear-gradient(to bottom, white 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
            }}
          />
        )}
        {config.pattern === "circuit" && (
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="25" cy="25" r="3" fill="white" />
                <circle cx="75" cy="75" r="3" fill="white" />
                <line x1="25" y1="25" x2="75" y2="25" stroke="white" strokeWidth="1" />
                <line x1="75" y1="25" x2="75" y2="75" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)" />
          </svg>
        )}
      </div>

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/20 blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-white/10 blur-3xl"
        animate={{
          x: [0, -30, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Content */}
      <div className="relative flex h-full min-h-[400px] flex-col items-center justify-center p-12">
        {/* Rotating rings */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute h-64 w-64 rounded-full border-2 border-white/20"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute h-48 w-48 rounded-full border-2 border-white/30"
        />

        {/* Icon */}
        <motion.div
          className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
        >
          <Icon className="h-12 w-12 text-white" />
        </motion.div>

        {/* Title overlay */}
        {showOverlay && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="relative z-10 mt-8 text-center"
          >
            <h3 className="text-2xl font-bold text-white">{config.title}</h3>
          </motion.div>
        )}
      </div>

      {/* Hover effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </div>
  );
}

