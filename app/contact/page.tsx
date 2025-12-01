import { Metadata } from "next";
import { Section } from "@/components/section";
import { ContactForm } from "@/components/contact-form";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Walo Innovated Solutions",
  description:
    "Get in touch with Walo Innovated Solutions. Book a discovery call to discuss how we can help optimize your operations with systems, automation, and AI.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <Section className="bg-gradient-to-b from-emerald-50 to-white pt-20">
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="secondary" className="mb-4">
            Get In Touch
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Let's Talk About Your Operations
          </h1>
          <p className="mt-6 text-lg text-slate-600">
            Tell us what's not working in your business. We'll help you map out
            a plan to fix it with systems, automation, and AI.
          </p>
        </div>
      </Section>

      {/* Contact Form and Info */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
          {/* Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-8">
                <h2 className="mb-6 text-2xl font-bold">
                  Book a Discovery Call
                </h2>
                <ContactForm />
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100">
                  <MapPin className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">Location</h3>
                <p className="text-slate-600">
                  Charlotte, North Carolina
                  <br />
                  Serving businesses across the region and beyond
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100">
                  <Mail className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">Email</h3>
                <p className="text-slate-600">
                  <a
                    href="mailto:hello@walois.com"
                    className="text-emerald-600 hover:underline"
                  >
                    hello@walois.com
                  </a>
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100">
                  <Clock className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">Response Time</h3>
                <p className="text-slate-600">
                  We typically respond within 24 hours during business days.
                </p>
              </CardContent>
            </Card>

            <div className="rounded-lg bg-emerald-50 p-6">
              <h3 className="mb-2 text-lg font-semibold text-emerald-900">
                What Happens Next?
              </h3>
              <ol className="space-y-2 text-sm text-emerald-800">
                <li className="flex">
                  <span className="mr-2 font-semibold">1.</span>
                  <span>We review your information and challenges</span>
                </li>
                <li className="flex">
                  <span className="mr-2 font-semibold">2.</span>
                  <span>Schedule a 30-minute discovery call</span>
                </li>
                <li className="flex">
                  <span className="mr-2 font-semibold">3.</span>
                  <span>Map out a custom plan for your business</span>
                </li>
                <li className="flex">
                  <span className="mr-2 font-semibold">4.</span>
                  <span>Start implementing systems that work</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ / Additional Info */}
      <Section background="gray" title="Common Questions">
        <div className="mx-auto max-w-3xl space-y-8">
          <div>
            <h3 className="mb-2 text-xl font-semibold">
              Do you work with businesses outside Charlotte?
            </h3>
            <p className="text-slate-600">
              Yes. While we're based in Charlotte, NC, we work with businesses
              across the United States. Most of our work is done remotely with
              occasional on-site visits for local clients.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-xl font-semibold">
              What size companies do you work with?
            </h3>
            <p className="text-slate-600">
              We specialize in small and mid-sized businesses—typically teams of
              5 to 100 people. Whether you're a growing startup or an
              established local business, if you need better systems and
              automation, we can help.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-xl font-semibold">
              How long does a typical project take?
            </h3>
            <p className="text-slate-600">
              It depends on scope. A basic CRM setup and automation might take
              2-4 weeks. A full operations overhaul with custom AI assistants
              might take 2-3 months. We'll give you a clear timeline during the
              discovery call.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-xl font-semibold">
              Do you offer ongoing support?
            </h3>
            <p className="text-slate-600">
              Absolutely. We offer ongoing support packages to help you maintain
              and optimize your systems as your business grows. Many clients
              keep us on retainer for continuous improvements.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}

