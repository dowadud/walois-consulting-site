"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap, Bot } from "lucide-react";
import Image from "next/image";

interface HeroTechProps {
  headline: string;
  subheadline: string;
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
}

export function HeroTechWithImage({
  headline,
  subheadline,
  primaryCTA,
  secondaryCTA,
}: HeroTechProps) {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-slate-950 py-20 lg:py-32">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2940&auto=format&fit=crop"
          alt="Team collaboration"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-emerald-950/40 to-slate-950" />
      </div>

      {/* Animated grid overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgb(5, 150, 105, 0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(5, 150, 105, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div>
          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 flex justify-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-emerald-400" />
              <span className="text-emerald-100">
                Transform Your Operations with AI
              </span>
            </div>
          </motion.div>

          {/* Main headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mx-auto max-w-5xl text-center"
          >
            <h1 className="mb-6 bg-gradient-to-br from-white via-white to-emerald-200 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-6xl lg:text-7xl">
              {headline}
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-slate-300 sm:text-xl"
          >
            {subheadline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button
              asChild
              size="lg"
              className="group relative overflow-hidden bg-emerald-600 text-base hover:bg-emerald-700"
            >
              <Link href={primaryCTA.href} className="flex items-center gap-2">
                {primaryCTA.text}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            {secondaryCTA && (
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-emerald-500/30 bg-transparent text-base text-white hover:bg-emerald-500/10"
              >
                <Link href={secondaryCTA.href}>{secondaryCTA.text}</Link>
              </Button>
            )}
          </motion.div>

          {/* Feature Pills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400"
          >
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/10">
                <Zap className="h-4 w-4 text-emerald-400" />
              </div>
              <span>Process Automation</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/10">
                <Bot className="h-4 w-4 text-emerald-400" />
              </div>
              <span>AI Integration</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/10">
                <Sparkles className="h-4 w-4 text-emerald-400" />
              </div>
              <span>Systems Design</span>
            </div>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-3"
          >
            <div className="rounded-xl border border-emerald-500/20 bg-slate-900/50 p-6 text-center backdrop-blur-sm">
              <div className="text-3xl font-bold text-emerald-400">5min</div>
              <div className="mt-2 text-sm text-slate-400">
                Average lead response time
              </div>
            </div>
            <div className="rounded-xl border border-emerald-500/20 bg-slate-900/50 p-6 text-center backdrop-blur-sm">
              <div className="text-3xl font-bold text-emerald-400">70%</div>
              <div className="mt-2 text-sm text-slate-400">
                Reduction in manual work
              </div>
            </div>
            <div className="rounded-xl border border-emerald-500/20 bg-slate-900/50 p-6 text-center backdrop-blur-sm">
              <div className="text-3xl font-bold text-emerald-400">24/7</div>
              <div className="mt-2 text-sm text-slate-400">
                AI assistant availability
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}

