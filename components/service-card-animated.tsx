"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ServiceCardAnimatedProps {
  icon?: ReactNode;
  badge?: string;
  title: string;
  description: string;
  benefits: string[];
}

export function ServiceCardAnimated({
  icon,
  badge,
  title,
  description,
  benefits,
}: ServiceCardAnimatedProps) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <Card className="group relative h-full overflow-hidden border-slate-200 bg-white transition-all duration-300 hover:border-emerald-500/50 hover:shadow-2xl hover:shadow-emerald-500/10">
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-emerald-50/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        
        <CardHeader>
          {icon && (
            <motion.div
              className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-lg shadow-emerald-500/30"
              whileHover={{ rotate: 5, scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              {icon}
            </motion.div>
          )}
          {badge && (
            <Badge variant="secondary" className="mb-2 w-fit">
              {badge}
            </Badge>
          )}
          <CardTitle className="text-2xl">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-slate-600">{description}</p>
          {benefits.length > 0 && (
            <ul className="mt-6 space-y-3">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <span className="mr-3 mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100">
                    <span className="text-xs font-bold text-emerald-600">✓</span>
                  </span>
                  <span className="text-sm text-slate-700">{benefit}</span>
                </motion.li>
              ))}
            </ul>
          )}
        </CardContent>
        
        {/* Animated border */}
        <div className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-500 via-amber-500 to-emerald-500 opacity-20 blur-xl" />
        </div>
      </Card>
    </motion.div>
  );
}

