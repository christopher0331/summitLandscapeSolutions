import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getServiceBySlugs, serviceCategories } from "../../../lib/service-data";

type ServiceDetailPageProps = {
  params: Promise<{ category: string; service: string }>;
};

export async function generateStaticParams() {
  return serviceCategories.flatMap((category) =>
    category.services.map((service) => ({
      category: category.slug,
      service: service.slug,
    })),
  );
}

export async function generateMetadata({ params }: ServiceDetailPageProps): Promise<Metadata> {
  const { category, service } = await params;
  const result = getServiceBySlugs(category, service);

  if (!result) {
    return {
      title: "Service | Summit Landscape Solutions",
    };
  }

  return {
    title: `${result.service.name} | Summit Landscape Solutions`,
    description: result.service.summary,
  };
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { category, service } = await params;
  const result = getServiceBySlugs(category, service);

  if (!result) {
    notFound();
  }

  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-16">
      <nav className="text-sm text-slate-500">
        <Link href="/services" className="transition hover:text-emerald-700">
          Services
        </Link>
        <span className="mx-2">/</span>
        <Link
          href={`/services/${result.category.slug}`}
          className="transition hover:text-emerald-700"
        >
          {result.category.name}
        </Link>
      </nav>

      <p className="mt-6 text-xs font-semibold uppercase tracking-[0.34em] text-emerald-700">
        {result.category.name}
      </p>
      <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
        {result.service.name}
      </h1>
      <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-600">
        {result.service.summary}
      </p>

      <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_8px_24px_rgba(15,23,42,0.05)]">
        <h2 className="font-display text-2xl font-semibold text-slate-900">
          What&rsquo;s Included
        </h2>
        <ul className="mt-5 space-y-3">
          {result.service.whatsIncluded.map((item) => (
            <li key={item} className="flex items-start gap-3 text-slate-700">
              <span
                aria-hidden="true"
                className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600"
              />
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-8 rounded-2xl border border-slate-200 bg-emerald-50 p-7">
        <h2 className="font-display text-2xl font-semibold text-slate-900">
          Need a quote for this service?
        </h2>
        <p className="mt-3 max-w-2xl text-slate-700">
          Contact Summit Landscape Solutions for a free, no-obligation estimate.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-emerald-800"
          >
            Request Estimate
          </Link>
          <a
            href="tel:+12067241936"
            className="rounded-full border border-emerald-700 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700 transition hover:bg-emerald-700 hover:text-white"
          >
            Call 206.724.1936
          </a>
        </div>
      </section>
    </div>
  );
}
