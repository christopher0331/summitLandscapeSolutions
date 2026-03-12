import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCategoryBySlug, serviceCategories } from "../../lib/service-data";

type CategoryPageProps = {
  params: Promise<{ category: string }>;
};

export async function generateStaticParams() {
  return serviceCategories.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    return {
      title: "Service Category | Summit Landscape Seattle",
    };
  }

  return {
    title: `${category.name} | Summit Landscape Seattle`,
    description: category.summary,
  };
}

export default async function ServiceCategoryPage({ params }: CategoryPageProps) {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    notFound();
  }

  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Services</p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900">{category.name}</h1>
      <p className="mt-5 max-w-3xl text-lg text-slate-600">{category.summary}</p>

      <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-xl font-semibold text-slate-900">Sub-services</h2>
        <ul className="mt-5 grid gap-4 md:grid-cols-2">
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
      </div>
    </div>
  );
}
