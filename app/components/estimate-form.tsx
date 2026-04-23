"use client";

import { useState } from "react";

type Variant = "full" | "compact";

type EstimateFormProps = {
  variant?: Variant;
  source?: string;
  defaultServiceInterest?: string;
  className?: string;
};

type FormState = {
  name: string;
  email: string;
  phone: string;
  propertyType: string;
  serviceInterest: string;
  timeline: string;
  hearAboutUs: string;
  message: string;
  website: string;
};

const SERVICE_OPTIONS = [
  { value: "", label: "Select a service" },
  { value: "lawn-care-maintenance", label: "Scheduled Lawn Care" },
  { value: "fertilization-weed-control", label: "Fertilization & Weed Control" },
  { value: "aeration-overseeding", label: "Aeration & Overseeding" },
  { value: "seasonal-yard-cleanups", label: "Seasonal Yard Cleanup" },
  { value: "paver-patios-walkways", label: "Pavers, Patios & Walkways" },
  { value: "retaining-walls", label: "Retaining Walls" },
  { value: "outdoor-living-features", label: "Outdoor Living Features" },
  { value: "landscape-design", label: "Landscape Design" },
  { value: "planting-installation", label: "Planting Installation" },
  { value: "sod-turf-installation", label: "Sod & Turf Installation" },
  { value: "general-inquiry", label: "General Inquiry" },
  { value: "other", label: "Other / Not Sure" },
];

const TIMELINE_OPTIONS = [
  { value: "", label: "Select timeline" },
  { value: "asap", label: "As soon as possible" },
  { value: "1-3-months", label: "Within 1–3 months" },
  { value: "3-6-months", label: "Within 3–6 months" },
  { value: "planning", label: "Planning ahead (6+ months)" },
  { value: "flexible", label: "Flexible" },
];

const PROPERTY_OPTIONS = [
  { value: "", label: "Select property type" },
  { value: "residential", label: "Residential" },
  { value: "commercial", label: "Commercial" },
  { value: "hoa", label: "HOA" },
  { value: "multi-family", label: "Multi-Family" },
];

const HEAR_OPTIONS = [
  { value: "", label: "How did you hear about us? (optional)" },
  { value: "google", label: "Google search" },
  { value: "referral", label: "Friend or neighbor" },
  { value: "social", label: "Social media" },
  { value: "drive-by", label: "Saw your work in person" },
  { value: "repeat", label: "Returning client" },
  { value: "other", label: "Other" },
];

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  propertyType: "",
  serviceInterest: "",
  timeline: "",
  hearAboutUs: "",
  message: "",
  website: "",
};

const baseField =
  "w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 transition focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/20";
const labelClass =
  "block text-xs font-semibold uppercase tracking-[0.18em] text-slate-700";
const errorClass = "mt-1 text-xs text-rose-600";

export function EstimateForm({
  variant = "full",
  source = "Website",
  defaultServiceInterest,
  className,
}: EstimateFormProps) {
  const [state, setState] = useState<FormState>({
    ...initialState,
    serviceInterest: defaultServiceInterest ?? "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const compact = variant === "compact";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage(null);
    setFieldErrors({});

    try {
      const response = await fetch("/api/estimate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...state, source }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        if (data?.fieldErrors) {
          setFieldErrors(data.fieldErrors);
        }
        setErrorMessage(
          data?.error ||
            "We couldn't send your request. Please try again or call 206.724.1936.",
        );
        setStatus("error");
        return;
      }

      setState({ ...initialState, serviceInterest: defaultServiceInterest ?? "" });
      setStatus("success");
    } catch {
      setErrorMessage(
        "We couldn't reach the server. Please try again or call 206.724.1936.",
      );
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div
        className={`rounded-2xl border border-emerald-200 bg-emerald-50 p-7 text-slate-800 ${className ?? ""}`}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-700">
          Request Received
        </p>
        <h3 className="mt-3 font-display text-2xl font-semibold text-slate-900">
          Thanks — we&rsquo;ll be in touch soon.
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-700">
          Your estimate request was sent successfully. We typically respond within one business
          day to schedule a free on-site consultation. If you need to reach us sooner, call{" "}
          <a href="tel:+12067241936" className="font-semibold text-emerald-700 hover:underline">
            206.724.1936
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-5 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700 hover:text-emerald-800"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={`space-y-4 ${className ?? ""}`}
      aria-busy={status === "submitting"}
    >
      <div
        aria-hidden="true"
        style={{ position: "absolute", left: "-10000px", width: "1px", height: "1px", overflow: "hidden" }}
      >
        <label>
          Website
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={state.website}
            onChange={handleChange}
          />
        </label>
      </div>

      <div className={compact ? "grid gap-4 sm:grid-cols-2" : "grid gap-4 md:grid-cols-2"}>
        <div>
          <label className={labelClass} htmlFor="name">
            Full Name <span className="text-rose-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            value={state.name}
            onChange={handleChange}
            placeholder="Jane Smith"
            className={`mt-1.5 ${baseField}`}
          />
          {fieldErrors.name && <p className={errorClass}>{fieldErrors.name}</p>}
        </div>

        <div>
          <label className={labelClass} htmlFor="phone">
            Phone <span className="text-rose-500">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            value={state.phone}
            onChange={handleChange}
            placeholder="(206) 555-0123"
            className={`mt-1.5 ${baseField}`}
          />
          {fieldErrors.phone && <p className={errorClass}>{fieldErrors.phone}</p>}
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="email">
          Email <span className="text-rose-500">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          value={state.email}
          onChange={handleChange}
          placeholder="you@example.com"
          className={`mt-1.5 ${baseField}`}
        />
        {fieldErrors.email && <p className={errorClass}>{fieldErrors.email}</p>}
      </div>

      {!compact && (
        <>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className={labelClass} htmlFor="propertyType">
                Property Type
              </label>
              <select
                id="propertyType"
                name="propertyType"
                value={state.propertyType}
                onChange={handleChange}
                className={`mt-1.5 ${baseField}`}
              >
                {PROPERTY_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className={labelClass} htmlFor="serviceInterest">
                Service Interest
              </label>
              <select
                id="serviceInterest"
                name="serviceInterest"
                value={state.serviceInterest}
                onChange={handleChange}
                className={`mt-1.5 ${baseField}`}
              >
                {SERVICE_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className={labelClass} htmlFor="timeline">
                Project Timeline
              </label>
              <select
                id="timeline"
                name="timeline"
                value={state.timeline}
                onChange={handleChange}
                className={`mt-1.5 ${baseField}`}
              >
                {TIMELINE_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className={labelClass} htmlFor="hearAboutUs">
                How did you hear about us?
              </label>
              <select
                id="hearAboutUs"
                name="hearAboutUs"
                value={state.hearAboutUs}
                onChange={handleChange}
                className={`mt-1.5 ${baseField}`}
              >
                {HEAR_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </>
      )}

      {compact && !defaultServiceInterest && (
        <div>
          <label className={labelClass} htmlFor="serviceInterest">
            Service Interest
          </label>
          <select
            id="serviceInterest"
            name="serviceInterest"
            value={state.serviceInterest}
            onChange={handleChange}
            className={`mt-1.5 ${baseField}`}
          >
            {SERVICE_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      )}

      <div>
        <label className={labelClass} htmlFor="message">
          Project Details
        </label>
        <textarea
          id="message"
          name="message"
          rows={compact ? 3 : 5}
          value={state.message}
          onChange={handleChange}
          placeholder="Tell us a bit about your property, goals, and any specific challenges (drainage, slopes, existing landscaping, etc.) — optional."
          className={`mt-1.5 ${baseField} resize-y`}
        />
        {fieldErrors.message && <p className={errorClass}>{fieldErrors.message}</p>}
      </div>

      {errorMessage && (
        <div
          role="alert"
          className="rounded-lg border border-rose-200 bg-rose-50 p-3 text-sm text-rose-700"
        >
          {errorMessage}
        </div>
      )}

      <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
        <p className="text-xs text-slate-500">
          By submitting, you agree to be contacted about your project.
        </p>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center justify-center rounded-full bg-emerald-700 px-7 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-emerald-800 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "submitting" ? "Sending..." : "Request Estimate"}
        </button>
      </div>
    </form>
  );
}
