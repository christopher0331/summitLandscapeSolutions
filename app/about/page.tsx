import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Summit Landscape Seattle",
  description:
    "Learn about Summit Landscape, a Seattle-based landscaping company serving residential and commercial properties.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900">About Summit Landscape</h1>
      <p className="mt-5 max-w-3xl text-lg text-slate-600">
        Summit Landscape is a Seattle-based team focused on practical, long-lasting outdoor
        improvements. We design, build, and maintain landscapes that fit the Pacific Northwest
        climate while matching each client&apos;s style and budget.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        <article className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-slate-900">Our Mission</h2>
          <p className="mt-3 text-slate-600">
            Create healthy, functional outdoor spaces that improve everyday life and boost
            long-term property value.
          </p>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-slate-900">Our Values</h2>
          <p className="mt-3 text-slate-600">
            Reliability, transparent communication, and quality craftsmanship are core to
            every project we deliver.
          </p>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-slate-900">Our Approach</h2>
          <p className="mt-3 text-slate-600">
            We start with site-specific planning, then execute with durable materials and
            ongoing maintenance recommendations.
          </p>
        </article>
      </div>
    </div>
  );
}
