import { Metadata } from "next";
import { Section } from "@/components/section";
import { CTABlock } from "@/components/cta-block";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Settings, Zap, Bot, Headphones, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Services | Walo Innovated Solutions",
  description:
    "Operations consulting, automation & integrations, AI assistants, and ongoing support. We design and implement systems that help your business run smarter.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <Section className="bg-gradient-to-b from-emerald-50 to-white pt-20">
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="secondary" className="mb-4">
            Our Services
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Systems, Automation, and AI Implementation
          </h1>
          <p className="mt-6 text-lg text-slate-600">
            We don't just advise—we design, build, and support the systems your
            business needs to operate with clarity and intelligence.
          </p>
        </div>
      </Section>

      {/* Operations & Systems Consulting */}
      <Section id="operations" title="Operations & Systems Consulting">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-emerald-100">
              <Settings className="h-8 w-8 text-emerald-600" />
            </div>
            <h3 className="mb-4 text-2xl font-bold">
              Design Your Business Operating System
            </h3>
            <p className="mb-6 text-slate-600">
              Most businesses operate on a mix of habits, scattered tools, and
              institutional memory. We help you build a real operating system:
              clear processes, documented workflows, and structured
              communication.
            </p>
            <p className="text-slate-600">
              We map your current state, identify bottlenecks, and design
              systems that make work predictable and scalable. From lead intake
              to project delivery, we help you define how things should work—and
              document it so your team can execute consistently.
            </p>
          </div>
          <div>
            <Card>
              <CardHeader>
                <CardTitle>What You Get</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "Process mapping and workflow documentation",
                    "Standard Operating Procedures (SOPs)",
                    "Communication structure and decision frameworks",
                    "Role clarity and accountability systems",
                    "Better visibility into what's working and what's not",
                    "Predictable execution across your team",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-600" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* Automation & Integrations */}
      <Section
        id="automation"
        background="gray"
        title="Automation & Integrations"
      >
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <Card>
              <CardHeader>
                <CardTitle>What We Automate</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "CRM setup and optimization (HubSpot, Salesforce, etc.)",
                    "Lead capture and routing from forms, emails, and calls",
                    "Automated follow-up sequences and notifications",
                    "Task creation and assignment based on triggers",
                    "Data sync between your tools (no more manual updates)",
                    "Reporting dashboards that update automatically",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-600" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
          <div className="order-1 lg:order-2">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-emerald-100">
              <Zap className="h-8 w-8 text-emerald-600" />
            </div>
            <h3 className="mb-4 text-2xl font-bold">
              Connect Your Tools and Eliminate Manual Work
            </h3>
            <p className="mb-6 text-slate-600">
              Your team shouldn't be copying data between systems or manually
              following up on every lead. We build automations that connect your
              tools and handle repetitive tasks so your team can focus on what
              matters.
            </p>
            <p className="text-slate-600">
              Whether it's routing leads to the right person, triggering
              notifications, or syncing data between platforms, we design
              workflows that run in the background and keep your business moving
              forward.
            </p>
          </div>
        </div>
      </Section>

      {/* AI Assistants & Chatbots */}
      <Section id="ai" title="AI Assistants & Chatbots">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-emerald-100">
              <Bot className="h-8 w-8 text-emerald-600" />
            </div>
            <h3 className="mb-4 text-2xl font-bold">
              Custom AI Solutions for Customer and Internal Use
            </h3>
            <p className="mb-6 text-slate-600">
              AI can handle routine questions, qualify leads, and assist your
              team—if it's set up right. We build custom AI assistants tailored
              to your business: trained on your knowledge base, integrated with
              your systems, and designed to actually help.
            </p>
            <p className="text-slate-600">
              From website chatbots that qualify visitors to internal assistants
              that answer employee questions, we design AI tools that enhance
              your customer and team experience.
            </p>
          </div>
          <div>
            <Card>
              <CardHeader>
                <CardTitle>AI Solutions We Build</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "Website chatbots for lead qualification",
                    "Customer support assistants (24/7 availability)",
                    "Internal knowledge-base Q&A bots for teams",
                    "Prompt systems for sales and customer service",
                    "AI-powered email and message drafting",
                    "Custom integrations with your CRM and tools",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-600" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* Implementation & Support */}
      <Section background="gray" title="Implementation & Support">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <Card>
              <CardHeader>
                <CardTitle>Ongoing Support Includes</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "Step-by-step team training and onboarding",
                    "Complete documentation and playbooks",
                    "Performance monitoring and reporting",
                    "Iteration based on real results and feedback",
                    "Technical support and troubleshooting",
                    "System updates and optimization as you grow",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-600" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
          <div className="order-1 lg:order-2">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-emerald-100">
              <Headphones className="h-8 w-8 text-emerald-600" />
            </div>
            <h3 className="mb-4 text-2xl font-bold">
              Done-For-You Implementation and Ongoing Support
            </h3>
            <p className="mb-6 text-slate-600">
              We don't hand you a plan and walk away. We implement everything,
              train your team, and stick around to make sure it works. Our goal
              is to see real results, not just deliver a report.
            </p>
            <p className="text-slate-600">
              From initial setup through ongoing optimization, we're your
              partner in making systems, automation, and AI a seamless part of
              how you operate.
            </p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <CTABlock
          title="Request a Systems & Automation Plan"
          description="Let's assess your current operations and map out a plan to automate, integrate, and optimize."
          buttonText="Get Started"
          buttonHref="/contact"
          variant="accent"
        />
      </Section>
    </>
  );
}

