"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CounterAnimation } from "@/components/animations/counter-animation";
import { FadeIn } from "@/components/animations/fade-in";
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container";
import { ArrowRight, TrendingUp } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface ClientResult {
  industry: string;
  title: string;
  metrics: {
    value: number;
    suffix: string;
    label: string;
  }[];
  description: string;
}

const clientResults: ClientResult[] = [
  {
    industry: "Manufacturing",
    title: "Regional Service Company Streamlines Operations",
    metrics: [
      { value: 70, suffix: "%", label: "reduction in manual tasks" },
      { value: 5, suffix: "min", label: "average response time" },
    ],
    description: "Implemented automated lead routing, CRM optimization, and process documentation to eliminate bottlenecks.",
  },
  {
    industry: "Professional Services",
    title: "Law Firm Transforms Client Onboarding",
    metrics: [
      { value: 60, suffix: "%", label: "faster onboarding" },
      { value: 85, suffix: "%", label: "client satisfaction" },
    ],
    description: "Designed intake automation, document workflows, and client communication systems for seamless service delivery.",
  },
  {
    industry: "Agency",
    title: "Marketing Agency Scales with AI",
    metrics: [
      { value: 3, suffix: "x", label: "client capacity" },
      { value: 40, suffix: "%", label: "time saved weekly" },
    ],
    description: "Built AI-powered project management, automated reporting, and integrated communication tools.",
  },
];

export function ClientResultsShowcase() {
  return (
    <div className="space-y-12">
      <FadeIn>
        <div className="text-center">
          <Badge variant="secondary" className="mb-4">
            Client Success Stories
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Real Results for Real Businesses
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            See how we've helped companies transform their operations
          </p>
        </div>
      </FadeIn>

      <StaggerContainer className="grid gap-8 lg:grid-cols-3">
        {clientResults.map((result, index) => (
          <StaggerItem key={index}>
            <Card className="group h-full overflow-hidden border-slate-200 transition-all duration-300 hover:-translate-y-2 hover:border-emerald-500 hover:shadow-2xl hover:shadow-emerald-500/20">
              <CardContent className="p-8">
                <Badge variant="outline" className="mb-4 border-emerald-500/50 text-emerald-600">
                  {result.industry}
                </Badge>
                
                <h3 className="mb-6 text-xl font-semibold leading-tight">
                  {result.title}
                </h3>

                <div className="mb-6 space-y-4">
                  {result.metrics.map((metric, idx) => (
                    <div key={idx} className="border-l-4 border-emerald-500 pl-4">
                      <div className="flex items-baseline gap-1">
                        <CounterAnimation
                          end={metric.value}
                          suffix={metric.suffix}
                          className="text-3xl font-bold text-emerald-600"
                        />
                      </div>
                      <div className="text-sm text-slate-600">{metric.label}</div>
                    </div>
                  ))}
                </div>

                <p className="text-sm text-slate-600">{result.description}</p>

                <div className="mt-6 flex items-center text-sm font-medium text-emerald-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span>View case study</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </CardContent>
            </Card>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <FadeIn delay={0.4}>
        <div className="mt-12 text-center">
          <Button asChild size="lg" variant="outline" className="group">
            <Link href="/contact" className="flex items-center gap-2">
              Start Your Transformation
              <TrendingUp className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </FadeIn>
    </div>
  );
}

