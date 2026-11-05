"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ContactFields {
  fullName: string;
  email: string;
  companyName: string;
  website: string;
  businessType: string;
  improvements: string;
  teamSize: string;
  projectLocation: string;
}

export function ContactForm({ isQuote }: { isQuote: boolean }) {
  const [formData, setFormData] = useState<ContactFields>({
    fullName: "",
    email: "",
    companyName: "",
    website: "",
    businessType: "",
    improvements: "",
    teamSize: "",
    projectLocation: "",
  });

  const requestId = useRef<string | null>(null);
  const [submitError, setSubmitError] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFields, string>>>(
    {}
  );

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFields, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!isQuote && !formData.companyName.trim()) {
      newErrors.companyName = "Company name is required";
    }

    if (!isQuote && !formData.businessType) {
      newErrors.businessType = "Please select a business type";
    }

    if (isQuote && !formData.projectLocation.trim()) {
      newErrors.projectLocation = "Project location is required";
    }
    if (!formData.improvements.trim()) {
      newErrors.improvements = isQuote ? "Please describe your project" : "Please tell us what you want to improve";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSubmitting || !validateForm()) return;

    setSubmitError("");
    setIsSubmitting(true);
    try {
      requestId.current ??= crypto.randomUUID();
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          type: isQuote ? "quote" : "consultation",
          requestId: requestId.current,
          companyFax: new FormData(e.currentTarget).get("companyFax") ?? "",
        }),
      });
      const result = await response.json();
      if (!response.ok || result.accepted !== true) {
        setSubmitError(result.message || "We couldn't send your request. Please try again.");
        return;
      }
      setIsSuccess(true);
    } catch {
      setSubmitError("We couldn't send your request. Please try again or call the number on this page.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    field: keyof ContactFields,
    value: string
  ) => {
    requestId.current = null;
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  if (isSuccess) {
    return (
      <div role="status" className="rounded-lg border-2 border-emerald-200 bg-emerald-50 p-8 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
          <svg
            className="h-8 w-8 text-emerald-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-emerald-900">
          Thank you for reaching out!
        </h3>
        <p className="mt-2 text-emerald-800">
          We'll review your information and follow up shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <Label htmlFor="fullName">
            Full Name <span className="text-red-500">*</span>
          </Label>
          <Input
            id="fullName"
            maxLength={120}
            type="text"
            value={formData.fullName}
            onChange={(e) => handleChange("fullName", e.target.value)}
            className={errors.fullName ? "border-red-500" : ""}
          />
          {errors.fullName && (
            <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>
          )}
        </div>

        <div>
          <Label htmlFor="email">
            Email <span className="text-red-500">*</span>
          </Label>
          <Input
            id="email"
            maxLength={254}
            type="email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className={errors.email ? "border-red-500" : ""}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email}</p>
          )}
        </div>
      </div>

      {isQuote ? (
        <div>
          <Label htmlFor="projectLocation">
            Project city and ZIP code <span className="text-red-500">*</span>
          </Label>
          <Input
            id="projectLocation"
            maxLength={160}
            value={formData.projectLocation}
            onChange={(e) => handleChange("projectLocation", e.target.value)}
            className={errors.projectLocation ? "border-red-500" : ""}
          />
          {errors.projectLocation && (
            <p className="mt-1 text-sm text-red-500">{errors.projectLocation}</p>
          )}
        </div>
      ) : (
        <>
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <Label htmlFor="companyName">
                Company Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="companyName"
                maxLength={160}
                type="text"
                value={formData.companyName}
                onChange={(e) => handleChange("companyName", e.target.value)}
                className={errors.companyName ? "border-red-500" : ""}
              />
              {errors.companyName && (
                <p className="mt-1 text-sm text-red-500">{errors.companyName}</p>
              )}
            </div>

            <div>
              <Label htmlFor="website">Website (Optional)</Label>
              <Input
                id="website"
                maxLength={500}
                type="url"
                placeholder="https://"
                value={formData.website}
                onChange={(e) => handleChange("website", e.target.value)}
              />
            </div>
          </div>

          <div>
            <Label htmlFor="businessType">
              What best describes you? <span className="text-red-500">*</span>
            </Label>
            <Select
              value={formData.businessType}
              onValueChange={(value) => handleChange("businessType", value)}
            >
              <SelectTrigger
                id="businessType"
                className={errors.businessType ? "border-red-500" : ""}
              >
                <SelectValue placeholder="Select one..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="service-business">Service Business</SelectItem>
                <SelectItem value="agency-consultant">
                  Agency/Consultant
                </SelectItem>
                <SelectItem value="contractor">Contractor/Home Services</SelectItem>
                <SelectItem value="professional-services">
                  Professional Services (Legal, Medical, Finance)
                </SelectItem>
                <SelectItem value="startup-founder">Startup/Founder</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
            {errors.businessType && (
              <p className="mt-1 text-sm text-red-500">{errors.businessType}</p>
            )}
          </div>
        </>
      )}

      <div>
        <Label htmlFor="improvements">
          {isQuote ? "Tell us about your project" : "What do you want to improve?"} <span className="text-red-500">*</span>
        </Label>
        <Textarea
          id="improvements"
          rows={5}
          maxLength={3000}
          placeholder={isQuote ? "What work do you need and when are you hoping to start?" : "Tell us about your current challenges."}
          value={formData.improvements}
          onChange={(e) => handleChange("improvements", e.target.value)}
          className={errors.improvements ? "border-red-500" : ""}
        />
        {errors.improvements && (
          <p className="mt-1 text-sm text-red-500">{errors.improvements}</p>
        )}
      </div>

      {!isQuote && (
        <div>
          <Label htmlFor="teamSize">Approximate Team Size (Optional)</Label>
          <Input
            id="teamSize"
            maxLength={80}
            type="text"
            placeholder="e.g., 5-10 people"
            value={formData.teamSize}
            onChange={(e) => handleChange("teamSize", e.target.value)}
          />
        </div>
      )}

      <div hidden>
        <label htmlFor="companyFax">Leave this field blank</label>
        <input id="companyFax" name="companyFax" tabIndex={-1} autoComplete="off" />
      </div>
      {submitError && <p role="alert" className="text-sm text-red-700">{submitError}</p>}
      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : isQuote ? "Send Quote Request" : "Send Consultation Request"}
      </Button>
    </form>
  );
}

