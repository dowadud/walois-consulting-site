import { HeroTech } from "@/components/hero-tech";
import { Section } from "@/components/section";
import { ServiceCardAnimated } from "@/components/service-card-animated";
import { CTABlock } from "@/components/cta-block";
import { Card, CardContent } from "@/components/ui/card";
import { FadeIn } from "@/components/animations/fade-in";
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container";
import { ScaleOnScroll } from "@/components/animations/scale-on-scroll";
import { ParallaxScroll } from "@/components/animations/parallax-scroll";
import { TechImagePlaceholder } from "@/components/tech-image-placeholder";
import { ProfessionalImage } from "@/components/professional-image";
import { ClientResultsShowcase } from "@/components/client-results-showcase";
import {
  Settings,
  Zap,
  Bot,
  Building2,
  Users,
  Briefcase,
  TrendingUp,
} from "lucide-react";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <HeroTech
        headline="Systems, Automation, and AI That Actually Move Your Business"
        subheadline="Walo helps growing businesses design and implement operations, automation, and AI assistants so teams can work smarter, not just harder."
        primaryCTA={{ text: "Book a Discovery Call", href: "/contact" }}
        secondaryCTA={{ text: "See Our Services", href: "/services" }}
      />

      {/* What We Do */}
      <Section
        id="services"
        title="What We Do"
        subtitle="We sit at the intersection of business strategy and implementation: not just advice, but working solutions."
      >
        <StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <StaggerItem>
            <ServiceCardAnimated
              icon={<Settings className="h-7 w-7 text-white" />}
              title="Operations & Systems Consulting"
              description="Design the operating system for your business. Map processes, create SOPs, and structure how work and communication flow."
              benefits={[
                "Clear accountability across teams",
                "Fewer dropped leads and tasks",
                "Predictable execution and results",
              ]}
            />
          </StaggerItem>
          <StaggerItem>
            <ServiceCardAnimated
              icon={<Zap className="h-7 w-7 text-white" />}
              title="Automation & Integrations"
              description="Connect your tools and automate repetitive work. CRM setup, lead routing, notifications, and seamless data sync."
              benefits={[
                "Reduced manual data entry",
                "Consistent follow-up systems",
                "Better visibility into performance",
              ]}
            />
          </StaggerItem>
          <StaggerItem>
            <ServiceCardAnimated
              icon={<Bot className="h-7 w-7 text-white" />}
              title="AI Assistants & Chatbots"
              description="Custom AI solutions for your website and internal teams. From lead qualifying bots to knowledge-base assistants."
              benefits={[
                "24/7 automated responses",
                "Fewer repetitive questions for staff",
                "Enhanced customer experience",
              ]}
            />
          </StaggerItem>
        </StaggerContainer>
      </Section>

      {/* Who We Help */}
      <Section
        background="gray"
        title="Who We Help"
        subtitle="Small and mid-sized businesses ready to modernize how they operate"
      >
        <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <StaggerItem>
            <Card className="h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-lg">
                  <Building2 className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">
                  Home & Field Services
                </h3>
                <p className="text-sm text-slate-600">
                  Contractors, HVAC, plumbing, landscaping companies who need
                  better lead tracking, scheduling, and customer communication.
                </p>
              </CardContent>
            </Card>
          </StaggerItem>

          <StaggerItem>
            <Card className="h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-lg">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">
                  Agencies & Consultants
                </h3>
                <p className="text-sm text-slate-600">
                  Marketing, creative, and consulting firms looking to streamline
                  client onboarding, project management, and reporting.
                </p>
              </CardContent>
            </Card>
          </StaggerItem>

          <StaggerItem>
            <Card className="h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-lg">
                  <Briefcase className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">
                  Professional Services
                </h3>
                <p className="text-sm text-slate-600">
                  Legal, medical, financial services, and other professionals who
                  need to reduce admin work and improve client experiences.
                </p>
              </CardContent>
            </Card>
          </StaggerItem>

          <StaggerItem>
            <Card className="h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-lg">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">
                  Founders & Startups
                </h3>
                <p className="text-sm text-slate-600">
                  Early-stage founders who need a repeatable operating system
                  before scaling up their teams and operations.
                </p>
              </CardContent>
            </Card>
          </StaggerItem>
        </StaggerContainer>
      </Section>

      {/* How We Work */}
      <Section
        title="How We Work"
        subtitle="A simple, proven process from chaos to clarity"
      >
        <div className="mx-auto max-w-4xl">
          <div className="space-y-12">
            <FadeIn direction="right">
              <div className="flex gap-6">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 text-xl font-bold text-white shadow-lg">
                  1
                </div>
                <div>
                  <h3 className="mb-2 text-2xl font-semibold">Audit & Map</h3>
                  <p className="text-slate-600">
                    We start by understanding your current tools, workflows, and
                    bottlenecks. We map out where leads come from, how work gets
                    done, and where things fall through the cracks.
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
                  <h3 className="mb-2 text-2xl font-semibold">Design & Build</h3>
                  <p className="text-slate-600">
                    We propose systems, automations, and AI solutions tailored to
                    your business. Then we implement them—setting up your CRM,
                    building automations, and deploying AI assistants.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.4}>
              <div className="flex gap-6">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 text-xl font-bold text-white shadow-lg">
                  3
                </div>
                <div>
                  <h3 className="mb-2 text-2xl font-semibold">Launch & Support</h3>
                  <p className="text-slate-600">
                    We train your team, create documentation, and monitor
                    performance. We iterate based on real results until everything
                    runs smoothly.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* Sample Outcomes */}
      <Section
        background="gray"
        title="Real Results"
        subtitle="What happens when systems and automation work together"
      >
        <StaggerContainer className="grid gap-8 md:grid-cols-3">
          <StaggerItem>
            <Card className="h-full overflow-hidden border-emerald-200 transition-all duration-300 hover:-translate-y-2 hover:border-emerald-500 hover:shadow-2xl hover:shadow-emerald-500/20">
              <CardContent className="pt-6">
                <div className="mb-4 bg-gradient-to-br from-emerald-600 to-emerald-500 bg-clip-text text-5xl font-bold text-transparent">
                  5min
                </div>
                <h3 className="mb-2 text-lg font-semibold">
                  Cut lead response time from 24 hours to under 5 minutes
                </h3>
                <p className="text-sm text-slate-600">
                  Automated lead routing and instant notifications ensure no
                  opportunity slips away.
                </p>
              </CardContent>
            </Card>
          </StaggerItem>

          <StaggerItem>
            <Card className="h-full overflow-hidden border-emerald-200 transition-all duration-300 hover:-translate-y-2 hover:border-emerald-500 hover:shadow-2xl hover:shadow-emerald-500/20">
              <CardContent className="pt-6">
                <div className="mb-4 bg-gradient-to-br from-emerald-600 to-emerald-500 bg-clip-text text-5xl font-bold text-transparent">
                  70%
                </div>
                <h3 className="mb-2 text-lg font-semibold">
                  Standardized client onboarding and reduced email back-and-forth
                </h3>
                <p className="text-sm text-slate-600">
                  Clear intake forms and automated workflows make onboarding
                  seamless for both clients and staff.
                </p>
              </CardContent>
            </Card>
          </StaggerItem>

          <StaggerItem>
            <Card className="h-full overflow-hidden border-emerald-200 transition-all duration-300 hover:-translate-y-2 hover:border-emerald-500 hover:shadow-2xl hover:shadow-emerald-500/20">
              <CardContent className="pt-6">
                <div className="mb-4 bg-gradient-to-br from-emerald-600 to-emerald-500 bg-clip-text text-5xl font-bold text-transparent">
                  60%
                </div>
                <h3 className="mb-2 text-lg font-semibold">
                  Implemented AI assistant to answer 60–70% of common FAQs
                </h3>
                <p className="text-sm text-slate-600">
                  Free up your team to focus on high-value conversations while AI
                  handles the routine questions.
                </p>
              </CardContent>
            </Card>
          </StaggerItem>
        </StaggerContainer>
      </Section>

      {/* Client Results Showcase - inspired by Bain */}
      <Section background="white">
        <ClientResultsShowcase />
      </Section>

      {/* About Walo with parallax images */}
      <Section title="About Walo" subtitle="Where real operations meet modern tools" background="gray">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn direction="left">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-slate-600">
                We've seen firsthand how scattered tools, unclear processes, and
                manual work hold businesses back. Walo was built to solve that—by
                combining real-world operations experience with modern automation
                and AI.
              </p>
              <p className="text-lg leading-relaxed text-slate-600">
                We don't just advise; we design, build, and support until
                your systems actually work. Our approach is hands-on, practical,
                and focused on delivering measurable results.
              </p>
              <p className="text-lg leading-relaxed text-slate-600">
                Based in Charlotte, NC, we work with businesses across the region
                and beyond to bring clarity, efficiency, and intelligence to their
                operations.
              </p>
            </div>
          </FadeIn>
          <ParallaxScroll offset={30}>
            <ScaleOnScroll>
              <ProfessionalImage type="strategy" className="h-full min-h-[400px]" />
            </ScaleOnScroll>
          </ParallaxScroll>
        </div>
      </Section>

      {/* Primary CTA */}
      <Section background="white">
        <FadeIn>
          <CTABlock
            title="Tell us what's broken in your operations. We'll help fix it."
            description="Book a free discovery call and let's talk about where your business is stuck—and how systems, automation, and AI can get you unstuck."
            buttonText="Book a Discovery Call"
            buttonHref="/contact"
          />
        </FadeIn>
      </Section>
    </>
  );
}
