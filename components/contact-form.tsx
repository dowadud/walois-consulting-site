"use client";

import { useState } from "react";
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

interface FormData {
  fullName: string;
  email: string;
  companyName: string;
  website: string;
  businessType: string;
  improvements: string;
  teamSize: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    companyName: "",
    website: "",
    businessType: "",
    improvements: "",
    teamSize: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
    {}
  );

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = "Company name is required";
    }

    if (!formData.businessType) {
      newErrors.businessType = "Please select a business type";
    }

    if (!formData.improvements.trim()) {
      newErrors.improvements = "Please tell us what you want to improve";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    console.log("Form submitted:", formData);

    // In production, this would connect to an API route or service
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          fullName: "",
          email: "",
          companyName: "",
          website: "",
          businessType: "",
          improvements: "",
          teamSize: "",
        });
        setIsSuccess(false);
      }, 3000);
    }, 1000);
  };

  const handleChange = (
    field: keyof FormData,
    value: string
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  if (isSuccess) {
    return (
      <div className="rounded-lg border-2 border-emerald-200 bg-emerald-50 p-8 text-center">
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

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <Label htmlFor="companyName">
            Company Name <span className="text-red-500">*</span>
          </Label>
          <Input
            id="companyName"
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

      <div>
        <Label htmlFor="improvements">
          What do you want to improve? <span className="text-red-500">*</span>
        </Label>
        <Textarea
          id="improvements"
          rows={5}
          placeholder="Tell us about your current challenges, what's not working, or what you'd like to automate..."
          value={formData.improvements}
          onChange={(e) => handleChange("improvements", e.target.value)}
          className={errors.improvements ? "border-red-500" : ""}
        />
        {errors.improvements && (
          <p className="mt-1 text-sm text-red-500">{errors.improvements}</p>
        )}
      </div>

      <div>
        <Label htmlFor="teamSize">Approximate Team Size (Optional)</Label>
        <Input
          id="teamSize"
          type="text"
          placeholder="e.g., 5-10 people"
          value={formData.teamSize}
          onChange={(e) => handleChange("teamSize", e.target.value)}
        />
      </div>

      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Send Message"}
      </Button>
    </form>
  );
}

