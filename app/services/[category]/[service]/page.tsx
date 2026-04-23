import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { EstimateForm } from "../../../components/estimate-form";
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

      <section
        id="estimate"
        className="mt-10 rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_8px_24px_rgba(15,23,42,0.05)] md:p-8"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.34em] text-emerald-700">
          Free Estimate
        </p>
        <h2 className="mt-3 font-display text-2xl font-semibold text-slate-900">
          Request a quote for {result.service.name.toLowerCase()}.
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600">
          Share a few details and we&rsquo;ll follow up within one business day to schedule a
          free on-site consultation.
        </p>
        <div className="mt-6">
          <EstimateForm
            variant="compact"
            source={`Service: ${result.service.name}`}
            defaultServiceInterest={result.service.slug}
          />
        </div>
        <p className="mt-6 text-xs text-slate-500">
          Prefer a longer form?{" "}
          <Link
            href="/contact#estimate"
            className="font-semibold text-emerald-700 hover:text-emerald-800"
          >
            Use our full estimate form
          </Link>{" "}
          or call{" "}
          <a
            href="tel:+12067241936"
            className="font-semibold text-emerald-700 hover:text-emerald-800"
          >
            206.724.1936
          </a>
          .
        </p>
      </section>
    </div>
  );
}
