import type { FaqItem } from "../../lib/service-area-page-types";

export function NeighborhoodFaqSection({ faqs }: { faqs: FaqItem[] }) {
  return (
    <section id="faqs" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h2 className="text-3xl font-bold tracking-tight text-slate-900">
        Frequently asked questions
      </h2>
      <div className="mt-8 space-y-4">
        {faqs.map((item) => (
          <details
            key={item.question}
            className="rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm"
          >
            <summary className="cursor-pointer text-lg font-semibold text-slate-900">
              {item.question}
            </summary>
            <p className="mt-3 text-base leading-7 text-slate-700">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
