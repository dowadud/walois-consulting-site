import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import { ServiceCard } from "@/components/service-card";
import { CTABlock } from "@/components/cta-block";
import { Card, CardContent } from "@/components/ui/card";
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
      <Hero
        headline="Systems, Automation, and AI That Actually Move Your Business."
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
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            icon={Settings}
            title="Operations & Systems Consulting"
            description="Design the operating system for your business. Map processes, create SOPs, and structure how work and communication flow."
            benefits={[
              "Clear accountability across teams",
              "Fewer dropped leads and tasks",
              "Predictable execution and results",
            ]}
          />
          <ServiceCard
            icon={Zap}
            title="Automation & Integrations"
            description="Connect your tools and automate repetitive work. CRM setup, lead routing, notifications, and seamless data sync."
            benefits={[
              "Reduced manual data entry",
              "Consistent follow-up systems",
              "Better visibility into performance",
            ]}
          />
          <ServiceCard
            icon={Bot}
            title="AI Assistants & Chatbots"
            description="Custom AI solutions for your website and internal teams. From lead qualifying bots to knowledge-base assistants."
            benefits={[
              "24/7 automated responses",
              "Fewer repetitive questions for staff",
              "Enhanced customer experience",
            ]}
          />
        </div>
      </Section>

      {/* Who We Help */}
      <Section
        background="gray"
        title="Who We Help"
        subtitle="Small and mid-sized businesses ready to modernize how they operate"
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardContent className="pt-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100">
                <Building2 className="h-6 w-6 text-emerald-600" />
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

          <Card>
            <CardContent className="pt-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100">
                <Users className="h-6 w-6 text-emerald-600" />
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

          <Card>
            <CardContent className="pt-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100">
                <Briefcase className="h-6 w-6 text-emerald-600" />
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

          <Card>
            <CardContent className="pt-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100">
                <TrendingUp className="h-6 w-6 text-emerald-600" />
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
        </div>
      </Section>

      {/* How We Work */}
      <Section
        title="How We Work"
        subtitle="A simple, proven process from chaos to clarity"
      >
        <div className="mx-auto max-w-4xl">
          <div className="space-y-12">
            <div className="flex gap-6">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-emerald-600 text-xl font-bold text-white">
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

            <div className="flex gap-6">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-emerald-600 text-xl font-bold text-white">
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

            <div className="flex gap-6">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-emerald-600 text-xl font-bold text-white">
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
          </div>
        </div>
      </Section>

      {/* Sample Outcomes */}
      <Section
        background="gray"
        title="Real Results"
        subtitle="What happens when systems and automation work together"
      >
        <div className="grid gap-8 md:grid-cols-3">
          <Card>
            <CardContent className="pt-6">
              <div className="mb-4 text-4xl font-bold text-emerald-600">5min</div>
              <h3 className="mb-2 text-lg font-semibold">
                Cut lead response time from 24 hours to under 5 minutes
              </h3>
              <p className="text-sm text-slate-600">
                Automated lead routing and instant notifications ensure no
                opportunity slips away.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="mb-4 text-4xl font-bold text-emerald-600">70%</div>
              <h3 className="mb-2 text-lg font-semibold">
                Standardized client onboarding and reduced email back-and-forth
              </h3>
              <p className="text-sm text-slate-600">
                Clear intake forms and automated workflows make onboarding
                seamless for both clients and staff.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="mb-4 text-4xl font-bold text-emerald-600">60%</div>
              <h3 className="mb-2 text-lg font-semibold">
                Implemented AI assistant to answer 60–70% of common FAQs
              </h3>
              <p className="text-sm text-slate-600">
                Free up your team to focus on high-value conversations while AI
                handles the routine questions.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* About Walo (short) */}
      <Section title="About Walo" subtitle="Where real operations meet modern tools">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-lg leading-relaxed text-slate-600">
            We've seen firsthand how scattered tools, unclear processes, and
            manual work hold businesses back. Walo was built to solve that—by
            combining real-world operations experience with modern automation
            and AI. We don't just advise; we design, build, and support until
            your systems actually work.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Based in Charlotte, NC, we work with businesses across the region
            and beyond to bring clarity, efficiency, and intelligence to their
            operations.
          </p>
        </div>
      </Section>

      {/* Primary CTA */}
      <Section background="white">
        <CTABlock
          title="Tell us what's broken in your operations. We'll help fix it."
          description="Book a free discovery call and let's talk about where your business is stuck—and how systems, automation, and AI can get you unstuck."
          buttonText="Book a Discovery Call"
          buttonHref="/contact"
        />
      </Section>
    </>
  );
}
