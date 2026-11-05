import { Metadata } from "next";
import { Section } from "@/components/section";
import { ContactForm } from "@/components/contact-form";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Phone, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Walo Innovated Solutions",
  description:
    "Request a construction quote or business consultation from Walo Innovated Solutions.",
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string | string[] }>;
}) {
  const isQuote = (await searchParams).type === "quote";
  return (
    <>
      {/* Hero */}
      <Section className="bg-gradient-to-b from-emerald-50 to-white pt-20">
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="secondary" className="mb-4">
            Get In Touch
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Request a Quote or Consultation
          </h1>
          <p className="mt-6 text-lg text-slate-600">
            Tell us about your construction project or what you’d like to improve in your business.
          </p>
        </div>
      </Section>

      {/* Contact Form and Info */}
      <Section id="inquiry" className="scroll-mt-20">
        <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
          {/* Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-8">
                <nav aria-label="Inquiry type" className="mb-6 flex flex-wrap gap-4">
                  <Link href="/contact?type=quote#inquiry" aria-current={isQuote ? "page" : undefined}
                    className={isQuote ? "font-semibold text-slate-950" : "text-emerald-700 underline"}>
                    Construction quote
                  </Link>
                  <Link href="/contact#inquiry" aria-current={!isQuote ? "page" : undefined}
                    className={!isQuote ? "font-semibold text-slate-950" : "text-emerald-700 underline"}>
                    Business consultation
                  </Link>
                </nav>
                <h2 className="mb-6 text-2xl font-bold">
                  {isQuote ? "Request a Construction Quote" : "Request a Business Consultation"}
                </h2>
                <ContactForm key={isQuote ? "quote" : "consultation"} isQuote={isQuote} />
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
                  Serving Charlotte and Lake Wylie
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100">
                  <Phone className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">Phone</h3>
                <p className="text-slate-600">
                  <a
                    href="tel:+17049810555"
                    className="text-emerald-600 hover:underline"
                  >
                    (704) 981-0555
                  </a>
                </p>
              </CardContent>
            </Card>

            <div className="rounded-lg bg-emerald-50 p-6">
              <h3 className="mb-2 text-lg font-semibold text-emerald-900">
                What Happens Next?
              </h3>
              <p className="text-sm text-emerald-800">
                {isQuote
                  ? "We’ll review your project details and follow up about scope and next steps."
                  : "We’ll review your request and follow up to arrange a discovery call."}
              </p>
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

