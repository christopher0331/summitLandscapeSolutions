import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { allServiceAreas, getServiceAreaBySlug } from "../../lib/service-area-data";

type ServiceAreaDetailPageProps = {
  params: Promise<{ area: string }>;
};

export async function generateStaticParams() {
  return allServiceAreas
    .filter(
      (area) =>
        area.slug !== "west-seattle" &&
        area.slug !== "ballard" &&
        area.slug !== "beacon-hill" &&
        area.slug !== "burien" &&
        area.slug !== "capitol-hill" &&
        area.slug !== "des-moines" &&
        area.slug !== "fremont" &&
        area.slug !== "green-lake" &&
        area.slug !== "kent" &&
        area.slug !== "magnolia" &&
        area.slug !== "madrona" &&
        area.slug !== "normandy-park" &&
        area.slug !== "queen-anne" &&
        area.slug !== "rainier-valley" &&
        area.slug !== "renton" &&
        area.slug !== "tukwila" &&
        area.slug !== "white-center",
    )
    .map((area) => ({ area: area.slug }));
}

export async function generateMetadata({ params }: ServiceAreaDetailPageProps): Promise<Metadata> {
  const { area: areaSlug } = await params;
  const area = getServiceAreaBySlug(areaSlug);

  if (!area) {
    return {
      title: "Service Area | Summit Landscape Seattle",
    };
  }

  return {
    title: `${area.name} Landscaping Services | Summit Landscape Seattle`,
    description: area.summary,
  };
}

export default async function ServiceAreaDetailPage({ params }: ServiceAreaDetailPageProps) {
  const { area: areaSlug } = await params;
  const area = getServiceAreaBySlug(areaSlug);

  if (!area) {
    notFound();
  }

  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-16">
      <nav className="text-sm text-slate-500">
        <Link href="/service-areas" className="transition hover:text-slate-700">
          Service Areas
        </Link>
      </nav>

      <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900">{area.name}</h1>
      <p className="mt-5 text-lg text-slate-600">{area.summary}</p>

      <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-xl font-semibold text-slate-900">Services Available in {area.name}</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
          <li>Lawn care and maintenance programs</li>
          <li>Hardscaping, patios, and retaining walls</li>
          <li>Landscape design and installation</li>
          <li>Seasonal cleanups and recurring upkeep</li>
        </ul>
      </section>

      <section className="mt-8 rounded-2xl bg-slate-900 p-6 text-white">
        <h2 className="text-2xl font-semibold">Need an estimate in {area.name}?</h2>
        <p className="mt-3 text-slate-300">
          Contact us for availability, timeline, and a detailed quote for your property.
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
