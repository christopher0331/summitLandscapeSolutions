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
      title: "Service | Summit Landscape Seattle",
    };
  }

  return {
    title: `${result.service.name} | Summit Landscape Seattle`,
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
        <Link href="/services" className="transition hover:text-slate-700">
          Services
        </Link>
        <span className="mx-2">/</span>
        <Link href={`/services/${result.category.slug}`} className="transition hover:text-slate-700">
          {result.category.name}
        </Link>
      </nav>

      <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900">{result.service.name}</h1>
      <p className="mt-5 text-lg text-slate-600">{result.service.summary}</p>

      <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-xl font-semibold text-slate-900">What&apos;s Included</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
          <li>On-site assessment based on Seattle property and weather conditions.</li>
          <li>Clear scope of work, timeline, and transparent project pricing.</li>
          <li>Professional execution with cleanup and final walkthrough.</li>
        </ul>
      </section>

      <section className="mt-8 rounded-2xl bg-slate-900 p-6 text-white">
        <h2 className="text-2xl font-semibold">Need a quote for this service?</h2>
        <p className="mt-3 text-slate-300">
          Contact Summit Landscape Seattle for a no-obligation estimate.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-block rounded-full bg-white px-5 py-3 font-semibold text-slate-900 transition hover:bg-slate-100"
        >
          Request Estimate
        </Link>
      </section>
    </div>
  );
}
