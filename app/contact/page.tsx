import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Summit Landscape Solutions",
  description:
    "Contact Summit Landscape Solutions for a free estimate on landscaping, maintenance, and hardscape projects in Burien, Seattle, and surrounding areas.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16">
      <p className="text-xs font-semibold uppercase tracking-[0.34em] text-emerald-700">
        Get in Touch
      </p>
      <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
        Contact Us
      </h1>
      <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-600">
        Tell us about your property goals and timeline. We&apos;ll follow up to schedule a site
        visit and provide a detailed estimate.
      </p>

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <section className="rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_8px_24px_rgba(15,23,42,0.05)]">
          <h2 className="font-display text-2xl font-semibold text-slate-900">
            Contact Information
          </h2>
          <ul className="mt-5 space-y-4 text-slate-700">
            <li className="flex items-start gap-3">
              <span className="mt-1 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700 w-20">
                Phone
              </span>
              <a
                href="tel:+12067241936"
                className="text-base text-slate-900 transition hover:text-emerald-700"
              >
                206.724.1936
              </a>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700 w-20">
                Email
              </span>
              <a
                href="mailto:jamarrhenaifesh@summitlandscapesolutions.co"
                className="text-base text-slate-900 transition hover:text-emerald-700 break-all"
              >
                jamarrhenaifesh@summitlandscapesolutions.co
              </a>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700 w-20">
                Location
              </span>
              <span className="text-base text-slate-900">Burien, WA</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700 w-20">
                Hours
              </span>
              <span className="text-base text-slate-900">
                Monday – Friday, 8:00 AM – 5:00 PM
              </span>
            </li>
          </ul>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-emerald-50 p-7">
          <h2 className="font-display text-2xl font-semibold text-slate-900">
            Request an Estimate
          </h2>
          <p className="mt-3 leading-relaxed text-slate-700">
            Send us a quick email with your address, project type, and timeline. We&rsquo;ll
            respond within one business day to schedule a free on-site consultation.
          </p>
          <a
            href="mailto:jamarrhenaifesh@summitlandscapesolutions.co?subject=Landscape%20Estimate%20Request&body=Hi%20Summit%20Landscape%20Solutions%2C%0A%0AI%27d%20like%20to%20request%20an%20estimate.%0A%0AAddress%3A%20%0AProject%20type%3A%20%0ATimeline%3A%20%0ANotes%3A%20%0A%0AThanks%2C"
            className="mt-6 inline-block rounded-full bg-emerald-700 px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-emerald-800"
          >
            Email Estimate Request
          </a>
          <p className="mt-4 text-xs text-slate-600">
            Prefer to talk? Call{" "}
            <a
              href="tel:+12067241936"
              className="font-semibold text-emerald-700 hover:text-emerald-800"
            >
              206.724.1936
            </a>{" "}
            during business hours.
          </p>
        </section>
      </div>
    </div>
  );
}
