import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon?: LucideIcon;
  badge?: string;
  title: string;
  description: string;
  benefits: string[];
}

export function ServiceCard({
  icon: Icon,
  badge,
  title,
  description,
  benefits,
}: ServiceCardProps) {
  return (
    <Card className="h-full transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
      <CardHeader>
        {Icon && (
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100">
            <Icon className="h-6 w-6 text-emerald-600" />
          </div>
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
          <ul className="mt-6 space-y-2">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2 mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100">
                  <span className="text-xs text-emerald-600">✓</span>
                </span>
                <span className="text-sm text-slate-700">{benefit}</span>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
}

