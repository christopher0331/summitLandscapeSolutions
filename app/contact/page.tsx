import type { Metadata } from "next";
import { EstimateForm } from "../components/estimate-form";

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
        Request a Free Estimate
      </h1>
      <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-600">
        Tell us about your property, goals, and timeline. We&rsquo;ll follow up within one
        business day to confirm details and schedule a free on-site consultation.
      </p>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_320px] lg:items-start">
        <section
          id="estimate"
          className="rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_8px_24px_rgba(15,23,42,0.05)] md:p-8"
        >
          <h2 className="font-display text-2xl font-semibold text-slate-900">
            Estimate Request
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Required fields are marked with an asterisk. We&rsquo;ll only use your information
            to follow up about your project.
          </p>
          <div className="mt-6">
            <EstimateForm source="Contact Page" />
          </div>
        </section>

        <aside className="space-y-5">
          <section className="rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_8px_24px_rgba(15,23,42,0.05)]">
            <h2 className="font-display text-xl font-semibold text-slate-900">
              Contact Information
            </h2>
            <ul className="mt-5 space-y-4 text-slate-700">
              <li>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700">
                  Phone
                </p>
                <a
                  href="tel:+12067241936"
                  className="mt-1 block text-base text-slate-900 transition hover:text-emerald-700"
                >
                  206.724.1936
                </a>
              </li>
              <li>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700">
                  Email
                </p>
                <a
                  href="mailto:jamarrhenaifesh@summitlandscapesolutions.co"
                  className="mt-1 block text-sm text-slate-900 transition hover:text-emerald-700 break-all"
                >
                  jamarrhenaifesh@summitlandscapesolutions.co
                </a>
              </li>
              <li>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700">
                  Location
                </p>
                <p className="mt-1 text-base text-slate-900">Burien, WA</p>
              </li>
              <li>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700">
                  Hours
                </p>
                <p className="mt-1 text-base text-slate-900">Mon – Fri, 8:00 AM – 5:00 PM</p>
              </li>
            </ul>
          </section>

          <section className="rounded-2xl border border-emerald-200 bg-emerald-50 p-7">
            <h2 className="font-display text-lg font-semibold text-slate-900">
              Prefer to talk?
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">
              Call us directly during business hours and we&rsquo;ll walk through your project
              over the phone.
            </p>
            <a
              href="tel:+12067241936"
              className="mt-5 inline-block rounded-full bg-emerald-700 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-emerald-800"
            >
              Call 206.724.1936
            </a>
          </section>
        </aside>
      </div>
    </div>
  );
}
