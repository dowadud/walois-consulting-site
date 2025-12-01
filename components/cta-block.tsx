import { Button } from "@/components/ui/button";
import Link from "next/link";

interface CTABlockProps {
  title: string;
  description?: string;
  buttonText: string;
  buttonHref: string;
  variant?: "primary" | "accent";
}

export function CTABlock({
  title,
  description,
  buttonText,
  buttonHref,
  variant = "primary",
}: CTABlockProps) {
  const bgClass = variant === "primary" ? "bg-emerald-600" : "bg-amber-500";

  return (
    <div className={`${bgClass} rounded-2xl px-8 py-12 text-center lg:px-12`}>
      <h2 className="text-3xl font-bold text-white sm:text-4xl">{title}</h2>
      {description && (
        <p className="mt-4 text-lg text-white/90">{description}</p>
      )}
      <div className="mt-8">
        <Button
          asChild
          size="lg"
          variant={variant === "primary" ? "secondary" : "default"}
          className="text-base"
        >
          <Link href={buttonHref}>{buttonText}</Link>
        </Button>
      </div>
    </div>
  );
}

