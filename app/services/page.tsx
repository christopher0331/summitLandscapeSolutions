import type { Metadata } from "next";
import Link from "next/link";
import { serviceCategories } from "../lib/service-data";

export const metadata: Metadata = {
  title: "Services | Summit Landscape Seattle",
  description:
    "Explore lawn care and maintenance, hardscaping, and landscaping services offered in Seattle.",
};

export default function ServicesPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900">Services</h1>
      <p className="mt-5 max-w-3xl text-lg text-slate-600">
        Our services are organized into three core categories. Each category includes
        dedicated sub-services with their own detail page.
      </p>

      <div className="mt-10 space-y-8">
        {serviceCategories.map((category) => (
          <article key={category.slug} className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-2xl font-semibold text-slate-900">{category.name}</h2>
              <Link
                href={`/services/${category.slug}`}
                className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400"
              >
                View Category
              </Link>
            </div>
            <p className="mt-3 text-slate-600">{category.summary}</p>
            <ul className="mt-5 grid gap-3 md:grid-cols-2">
              {category.services.map((service) => (
                <li key={service.slug} className="rounded-xl border border-slate-200 p-4">
                  <Link
                    href={`/services/${category.slug}/${service.slug}`}
                    className="font-semibold text-slate-900 transition hover:text-emerald-700"
                  >
                    {service.name}
                  </Link>
                  <p className="mt-2 text-sm text-slate-600">{service.summary}</p>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}
