import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Summit Landscape Seattle",
  description:
    "Contact Summit Landscape Seattle for a free estimate on landscaping, maintenance, and hardscape projects.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900">Contact Us</h1>
      <p className="mt-5 max-w-3xl text-lg text-slate-600">
        Tell us about your property goals and timeline. We&apos;ll follow up to schedule a site
        visit and provide a detailed estimate.
      </p>

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <section className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-slate-900">Company Details</h2>
          <ul className="mt-4 space-y-2 text-slate-700">
            <li>Phone: (206) 555-0199</li>
            <li>Email: hello@summitlandscape.com</li>
            <li>Location: Seattle, WA</li>
            <li>Hours: Monday - Friday, 8:00 AM - 5:00 PM</li>
          </ul>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-slate-900">Request an Estimate</h2>
          <p className="mt-3 text-slate-600">
            Replace this placeholder with your preferred form provider or Next.js API form
            handling.
          </p>
          <a
            href="mailto:hello@summitlandscape.com?subject=Landscape%20Estimate%20Request"
            className="mt-6 inline-block rounded-full bg-emerald-700 px-5 py-3 font-semibold text-white transition hover:bg-emerald-800"
          >
            Email Estimate Request
          </a>
        </section>
      </div>
    </div>
  );
}
