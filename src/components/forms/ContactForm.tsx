"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { getRideBySlug } from "@/data/rides";

interface FormFields {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

function validate(fields: FormFields): FormErrors {
  const errors: FormErrors = {};
  if (!fields.name.trim()) errors.name = "Please enter your name.";
  if (!fields.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!fields.message.trim()) errors.message = "Please write a message.";
  return errors;
}

export default function ContactForm() {
  const searchParams = useSearchParams();
  const rideSlug = searchParams.get("ride") ?? undefined;
  const prefilledRide = rideSlug ? getRideBySlug(rideSlug)?.title : undefined;

  const [fields, setFields] = useState<FormFields>({
    name: "",
    email: "",
    message: prefilledRide ? `I'd like to enquire about the ${prefilledRide} ride.\n\n` : "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const errs = validate(fields);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    const subject = prefilledRide
      ? `Ride Enquiry: ${prefilledRide}`
      : "Enquiry from Rebel Cyclers website";

    const body = [
      `Name: ${fields.name}`,
      `Email: ${fields.email}`,
      "",
      fields.message,
    ].join("\n");

    window.location.href = `mailto:rebelcyclers@example.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-[#161616] rounded border border-white/5 p-8 text-center">
        <div className="w-12 h-12 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/20 flex items-center justify-center mx-auto mb-4">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M4 10l4 4 8-8"
              stroke="#FF6B00"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h3 className="font-heading text-lg font-bold text-white mb-2">
          Email client opened
        </h3>
        <p className="text-white/50 text-sm leading-relaxed mb-5">
          Your message has been pre-filled in your email client. Review it and
          hit Send when you&apos;re ready.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="text-[#FF6B00] text-sm font-semibold hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {prefilledRide && (
        <div className="bg-[#FF6B00]/10 border border-[#FF6B00]/20 rounded px-4 py-3">
          <p className="text-[#FF6B00] text-sm font-medium">
            Enquiring about:{" "}
            <span className="text-white">{prefilledRide}</span>
          </p>
        </div>
      )}

      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-white/70 mb-2"
        >
          Name <span className="text-[#FF6B00]" aria-hidden="true">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={fields.name}
          onChange={handleChange}
          autoComplete="name"
          className={`w-full bg-[#161616] border rounded px-4 py-3 text-white placeholder-white/30 focus:outline-none transition-colors ${
            errors.name
              ? "border-red-400/60 focus:border-red-400"
              : "border-white/10 focus:border-[#FF6B00]"
          }`}
          placeholder="Your name"
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && (
          <p id="name-error" className="mt-1.5 text-red-400 text-xs">
            {errors.name}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-white/70 mb-2"
        >
          Email <span className="text-[#FF6B00]" aria-hidden="true">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={fields.email}
          onChange={handleChange}
          autoComplete="email"
          className={`w-full bg-[#161616] border rounded px-4 py-3 text-white placeholder-white/30 focus:outline-none transition-colors ${
            errors.email
              ? "border-red-400/60 focus:border-red-400"
              : "border-white/10 focus:border-[#FF6B00]"
          }`}
          placeholder="you@example.com"
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <p id="email-error" className="mt-1.5 text-red-400 text-xs">
            {errors.email}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-white/70 mb-2"
        >
          Message <span className="text-[#FF6B00]" aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={fields.message}
          onChange={handleChange}
          rows={5}
          className={`w-full bg-[#161616] border rounded px-4 py-3 text-white placeholder-white/30 focus:outline-none transition-colors resize-none ${
            errors.message
              ? "border-red-400/60 focus:border-red-400"
              : "border-white/10 focus:border-[#FF6B00]"
          }`}
          placeholder="Tell us about yourself or your question…"
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 text-red-400 text-xs">
            {errors.message}
          </p>
        )}
      </div>

      <div className="pt-1">
        <button
          type="submit"
          className="px-7 py-3.5 bg-[#FF6B00] text-white font-semibold rounded hover:bg-[#e55f00] transition-colors"
        >
          Send Message
        </button>
        <p className="mt-3 text-white/30 text-xs leading-relaxed">
          Clicking Send will open your email client with your message
          pre-filled. No data is sent until you send the email.
        </p>
      </div>
    </form>
  );
}
