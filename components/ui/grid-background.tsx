"use client";

export function GridBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-emerald-950/20 to-slate-950" />
      
      {/* Animated grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgb(5, 150, 105, 0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(5, 150, 105, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />
      
      {/* Glow effects */}
      <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-emerald-500/20 blur-[120px]" />
      <div className="absolute right-1/4 top-1/3 h-96 w-96 rounded-full bg-amber-500/10 blur-[120px]" />
      <div className="absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-600/10 blur-[120px]" />
    </div>
  );
}

