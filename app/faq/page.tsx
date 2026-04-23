import type { Metadata } from "next";
import Link from "next/link";

const faqs = [
  {
    category: "Getting Started",
    items: [
      {
        question: "Do you offer free estimates?",
        answer:
          "Yes. We provide free on-site consultations within our Burien and Seattle service area for residential and commercial projects. We evaluate your site conditions, goals, and budget before recommending a scope.",
      },
      {
        question: "How quickly can you start a project?",
        answer:
          "Availability varies by season. Spring and summer fill quickly, so we recommend reaching out 4–8 weeks before your ideal start date. Maintenance agreements can often be scheduled sooner.",
      },
      {
        question: "Do you require a contract?",
        answer:
          "All installation projects are covered by a written agreement outlining scope, materials, timeline, and pricing. Maintenance services run on a service agreement reviewed annually.",
      },
    ],
  },
  {
    category: "Services & Scope",
    items: [
      {
        question: "Do you work on both residential and commercial sites?",
        answer:
          "Yes. Our team handles single-family homes, multi-family properties, HOAs, and small-to-mid size commercial landscapes. Scope and pricing are tailored to each property type.",
      },
      {
        question: "Can you help with drainage issues?",
        answer:
          "Absolutely. We evaluate water flow, grading, and soil conditions before recommending practical drainage, French drain, or erosion-control solutions designed to last through Seattle winters.",
      },
      {
        question: "Do you handle both design and installation?",
        answer:
          "We offer design-build services where we manage the full project — from concept through installation. We can also execute plans provided by a landscape architect you've already engaged.",
      },
    ],
  },
  {
    category: "Maintenance",
    items: [
      {
        question: "How often should I schedule maintenance?",
        answer:
          "Most properties benefit from bi-weekly or monthly service depending on season, plant density, and property goals. We'll recommend a schedule based on your site during the initial consultation.",
      },
      {
        question: "Do you offer year-round maintenance plans?",
        answer:
          "Yes. We offer annual maintenance agreements that cover seasonal pruning, mulching, leaf removal, and ongoing upkeep. Year-round clients receive scheduling priority and consistent crew assignments.",
      },
    ],
  },
];

export const metadata: Metadata = {
  title: "FAQ | Summit Landscape Solutions",
  description:
    "Answers to common questions about estimates, project timelines, maintenance schedules, and landscaping services in Burien and Seattle.",
};

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-[color:var(--background)] text-slate-900">
      <section className="mx-auto w-full max-w-7xl px-6 pt-20 pb-10">
        <p className="text-xs font-semibold uppercase tracking-[0.34em] text-emerald-700">
          Common Questions
        </p>
        <h1 className="mt-4 max-w-2xl font-display text-5xl font-semibold leading-tight text-slate-900 md:text-6xl">
          Frequently Asked Questions
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
          Answers to what most clients ask before starting a project or maintenance plan. If
          something isn&rsquo;t covered here, contact us directly.
        </p>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 pb-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_320px] lg:items-start">
          <div className="space-y-12">
            {faqs.map((group) => (
              <div key={group.category}>
                <div className="mb-5 flex items-center gap-4">
                  <div className="h-px flex-1 bg-slate-200" />
                  <p className="text-xs font-semibold uppercase tracking-[0.34em] text-emerald-700">
                    {group.category}
                  </p>
                  <div className="h-px flex-1 bg-slate-200" />
                </div>
                <div className="space-y-3">
                  {group.items.map((faq) => (
                    <details
                      key={faq.question}
                      className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_4px_14px_rgba(15,23,42,0.04)] transition hover:border-slate-300"
                    >
                      <summary className="flex cursor-pointer list-none items-start justify-between gap-4 px-7 py-6 select-none">
                        <h2 className="text-base font-semibold text-slate-900 leading-snug">
                          {faq.question}
                        </h2>
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center text-emerald-700 transition-transform duration-200 group-open:rotate-45">
                          <svg
                            viewBox="0 0 16 16"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            className="h-4 w-4"
                          >
                            <path d="M8 2v12M2 8h12" strokeLinecap="square" />
                          </svg>
                        </span>
                      </summary>
                      <div className="border-t border-slate-200 px-7 py-5">
                        <p className="text-sm leading-relaxed text-slate-600">{faq.answer}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <aside className="lg:sticky lg:top-8 space-y-5">
            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_8px_24px_rgba(15,23,42,0.05)]">
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-emerald-700">
                Still Have Questions?
              </p>
              <h3 className="mt-4 font-display text-2xl font-semibold text-slate-900 leading-snug">
                Talk to us directly.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                We respond to every inquiry personally. Whether you&rsquo;re planning a full
                installation or just want to discuss options, we&rsquo;re here to help.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-block rounded-full bg-emerald-700 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-emerald-800"
              >
                Contact Us
              </Link>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-emerald-50 p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-emerald-700">
                Free Consultation
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">
                On-site estimates are free within our Burien and Seattle service area. No
                obligation, no pressure.
              </p>
              <Link
                href="/service-areas"
                className="mt-5 inline-block rounded-full border border-emerald-700 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700 transition hover:bg-emerald-700 hover:text-white"
              >
                View Service Areas
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-16">
        <div className="rounded-3xl border border-slate-200 bg-white px-8 py-10 shadow-[0_8px_24px_rgba(15,23,42,0.05)] md:flex md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-emerald-700">
              Start Your Project
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-slate-900">
              Ready to get started?
            </h2>
            <p className="mt-3 max-w-2xl text-slate-600">
              Schedule a free on-site consultation for your home or commercial property.
            </p>
          </div>
          <a
            href="mailto:jamarrhenaifesh@summitlandscapesolutions.co"
            className="mt-6 inline-block rounded-full bg-emerald-700 px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-emerald-800 md:mt-0"
          >
            Email Us
          </a>
        </div>
      </section>
    </div>
  );
}
