import type { Metadata } from "next";

const faqs = [
  {
    question: "Do you offer free estimates?",
    answer:
      "Yes. We provide free on-site estimates within our Seattle service area for most residential and commercial projects.",
  },
  {
    question: "How often should I schedule maintenance?",
    answer:
      "Most Seattle properties benefit from bi-weekly or monthly maintenance depending on season, plant types, and property goals.",
  },
  {
    question: "Can you help with drainage issues?",
    answer:
      "Absolutely. We evaluate water flow, grading, and soil conditions, then recommend practical drainage and erosion-control solutions.",
  },
  {
    question: "Do you work on both residential and commercial sites?",
    answer:
      "Yes, our team handles single-family homes, multi-family properties, HOAs, and small-to-mid size commercial landscapes.",
  },
];

export const metadata: Metadata = {
  title: "FAQ | Summit Landscape Seattle",
  description:
    "Find answers to common questions about estimates, maintenance schedules, and landscaping services in Seattle.",
};

export default function FaqPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900">Frequently Asked Questions</h1>

      <div className="mt-10 space-y-4">
        {faqs.map((faq) => (
          <article key={faq.question} className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-lg font-semibold text-slate-900">{faq.question}</h2>
            <p className="mt-2 text-slate-600">{faq.answer}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
