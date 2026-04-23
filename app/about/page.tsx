import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Summit Landscape Solutions",
  description:
    "Learn about Summit Landscape Solutions, a Burien-based landscaping company serving residential and commercial properties throughout the Seattle area.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16">
      <p className="text-xs font-semibold uppercase tracking-[0.34em] text-emerald-700">
        About Us
      </p>
      <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
        About Summit Landscape Solutions
      </h1>
      <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-600">
        Summit Landscape Solutions is a Burien-based team focused on practical, long-lasting
        outdoor improvements. We design, build, and maintain landscapes that fit the Pacific
        Northwest climate while matching each client&apos;s style and budget.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_8px_24px_rgba(15,23,42,0.05)]">
          <h2 className="font-display text-2xl font-semibold text-slate-900">Our Mission</h2>
          <p className="mt-4 leading-relaxed text-slate-600">
            To deliver exceptional outdoor spaces rooted in transparency, integrity, and a
            genuine passion for landscaping&mdash;improving how people enjoy their properties
            while creating lasting value.
          </p>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_8px_24px_rgba(15,23,42,0.05)]">
          <h2 className="font-display text-2xl font-semibold text-slate-900">Our Values</h2>
          <p className="mt-4 leading-relaxed text-slate-600">
            Our work is rooted in transparency, integrity, and a passion for landscaping, with
            a commitment to dependable service, clear communication, and exceptional
            craftsmanship.
          </p>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_8px_24px_rgba(15,23,42,0.05)]">
          <h2 className="font-display text-2xl font-semibold text-slate-900">Our Approach</h2>
          <p className="mt-4 leading-relaxed text-slate-600">
            Our approach is rooted in transparency, integrity, and thoughtful
            planning&mdash;combining site-specific solutions, durable materials, and quality
            craftsmanship with long-term maintenance guidance for lasting results.
          </p>
        </article>
      </div>
    </div>
  );
}
