import { Metadata } from "next";
import { Section } from "@/components/section";
import { CTABlock } from "@/components/cta-block";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/animations/fade-in";
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container";
import { ScaleOnScroll } from "@/components/animations/scale-on-scroll";
import { ParallaxScroll } from "@/components/animations/parallax-scroll";
import { ProfessionalImage } from "@/components/professional-image";
import { Target, Users, Lightbulb, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Walo Innovated Solutions",
  description:
    "Learn about Walo Innovated Solutions: our mission to help smaller companies operate with the discipline and intelligence of much larger organizations using systems and AI.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <Section className="bg-gradient-to-b from-emerald-50 to-white pt-20">
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="secondary" className="mb-4">
            About Walo
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Where Real Operations Meet Modern Tools
          </h1>
          <p className="mt-6 text-lg text-slate-600">
            We help smaller companies operate with the discipline and
            intelligence of much larger organizations—using systems, automation,
            and AI.
          </p>
        </div>
      </Section>

      {/* Our Story */}
      <Section title="Our Story">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn direction="right">
            <div className="space-y-6 text-lg leading-relaxed text-slate-600">
              <p>
              Walo Innovated Solutions was born from a simple frustration: too
              many good businesses were held back by scattered tools, unclear
              processes, and manual work that didn't need to be manual.
            </p>
            <p>
              We've worked inside real businesses—small agencies, service
              companies, professional firms—and we've seen the same patterns
              over and over. Great people doing great work, but without the
              systems and infrastructure to scale efficiently. Leads falling
              through the cracks. Teams uncertain about who owns what. Hours
              spent on tasks that could be automated.
            </p>
            <p>
              So we built Walo to bridge that gap. We combine real-world
              operations experience with modern automation and AI to help
              businesses design systems that actually work. Not theories or
              frameworks—working solutions that get implemented, tested, and
              improved until they deliver results.
            </p>
            <p>
              Based in Charlotte, North Carolina, we work with businesses across
              the region and beyond. Our focus is simple: help growing companies
              operate smarter, move faster, and deliver better experiences to
              their customers.
            </p>
            </div>
          </FadeIn>
          <ParallaxScroll offset={30}>
            <ScaleOnScroll delay={0.2}>
              <ProfessionalImage type="growth" className="h-full min-h-[500px]" />
            </ScaleOnScroll>
          </ParallaxScroll>
        </div>
      </Section>

      {/* Our Mission */}
      <Section background="gray" title="Our Mission">
        <div className="mx-auto max-w-4xl">
          <FadeIn>
            <p className="mb-12 text-center text-xl text-slate-600">
              To bring enterprise-level operational intelligence to small and
              mid-sized businesses through practical systems, automation, and AI.
            </p>
          </FadeIn>

          <StaggerContainer className="grid gap-8 md:grid-cols-2">
            <StaggerItem>
              <Card className="h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100">
                  <Target className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">
                  Outcomes Over Advice
                </h3>
                <p className="text-slate-600">
                  We don't just tell you what to do—we design it, build it, and
                  make sure it works. Our success is measured by your results,
                  not by deliverables.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100">
                  <Users className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">
                  People First, Tools Second
                </h3>
                <p className="text-slate-600">
                  Technology should serve your team, not complicate their work.
                  We design systems that make people's jobs easier and clearer.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100">
                  <Lightbulb className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">
                  Clarity Over Complexity
                </h3>
                <p className="text-slate-600">
                  We don't use jargon or over-engineer solutions. Simple,
                  clear, and effective beats clever and complicated every time.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100">
                  <TrendingUp className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">
                  Built to Scale
                </h3>
                <p className="text-slate-600">
                  What works for 5 people needs to work for 50. We build
                  systems and processes that grow with your business.
                </p>
              </CardContent>
            </Card>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </Section>

      {/* Our Values */}
      <Section title="Our Values">
        <div className="mx-auto max-w-3xl space-y-8">
          <FadeIn direction="up" delay={0.1}>
            <div>
              <h3 className="mb-3 text-2xl font-semibold text-slate-900">
                Clear Communication
              </h3>
              <p className="text-slate-600">
                No buzzwords, no jargon. We explain things in plain language and
                make sure everyone understands what's happening and why.
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <div>
              <h3 className="mb-3 text-2xl font-semibold text-slate-900">
                Practical, No-Jargon Solutions
              </h3>
              <p className="text-slate-600">
                We're not interested in being clever—we're interested in what
                works. Our solutions are practical, proven, and focused on real
                business outcomes.
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <div>
              <h3 className="mb-3 text-2xl font-semibold text-slate-900">
                Ownership of Results
              </h3>
              <p className="text-slate-600">
                We don't walk away after delivery. We stick around to make sure
                things work, iterate based on feedback, and ensure you see real
                improvement.
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.4}>
            <div>
              <h3 className="mb-3 text-2xl font-semibold text-slate-900">
                Respect for People and Data
              </h3>
              <p className="text-slate-600">
                Your data, your people, and your trust matter. We build systems
                with security, privacy, and human dignity at the core.
              </p>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Our Approach */}
      <Section
        background="gray"
        title="Our Approach"
        subtitle="How we turn operational challenges into working systems"
      >
        <div className="mx-auto max-w-4xl">
          <div className="space-y-8">
            <FadeIn direction="right" delay={0.1}>
              <div className="flex gap-6">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 text-xl font-bold text-white shadow-lg">
                  1
                </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold">Strategy</h3>
                <p className="text-slate-600">
                  We start by understanding your business, your goals, and your
                  current challenges. We map out what's working and what's not.
                </p>
              </div>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.2}>
              <div className="flex gap-6">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 text-xl font-bold text-white shadow-lg">
                  2
                </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold">Design</h3>
                <p className="text-slate-600">
                  We propose systems, workflows, and automation tailored to your
                  specific needs. Everything is designed with your team and
                  customers in mind.
                </p>
              </div>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.3}>
              <div className="flex gap-6">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 text-xl font-bold text-white shadow-lg">
                  3
                </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold">Build</h3>
                <p className="text-slate-600">
                  We implement the solution—setting up systems, building
                  automations, deploying AI tools, and integrating everything
                  with your existing tools.
                </p>
              </div>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.4}>
              <div className="flex gap-6">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 text-xl font-bold text-white shadow-lg">
                  4
                </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold">Support</h3>
                <p className="text-slate-600">
                  We train your team, create documentation, and monitor
                  performance. We iterate until everything runs smoothly and
                  delivers measurable results.
                </p>
              </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <FadeIn>
          <CTABlock
          title="Ready to Transform Your Operations?"
          description="Let's talk about your business, your challenges, and how we can help you build systems that actually work."
          buttonText="Book a Discovery Call"
          buttonHref="/contact"
        />
        </FadeIn>
      </Section>
    </>
  );
}

