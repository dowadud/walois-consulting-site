import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  title?: string;
  subtitle?: string;
  background?: "white" | "gray" | "primary" | "accent";
}

export function Section({
  children,
  className,
  id,
  title,
  subtitle,
  background = "white",
}: SectionProps) {
  const bgClasses = {
    white: "bg-white",
    gray: "bg-slate-50",
    primary: "bg-emerald-600 text-white",
    accent: "bg-amber-500 text-white",
  };

  return (
    <section
      id={id}
      className={cn("py-16 lg:py-24", bgClasses[background], className)}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {(title || subtitle) && (
          <div className="mx-auto max-w-2xl text-center">
            {title && (
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                {title}
              </h2>
            )}
            {subtitle && (
              <p
                className={cn(
                  "mt-4 text-lg",
                  background === "white" || background === "gray"
                    ? "text-slate-600"
                    : "text-white/90"
                )}
              >
                {subtitle}
              </p>
            )}
          </div>
        )}
        <div className={cn(title || subtitle ? "mt-16" : "")}>{children}</div>
      </div>
    </section>
  );
}

