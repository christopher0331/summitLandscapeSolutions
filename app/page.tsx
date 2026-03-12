import Image from "next/image";
import Link from "next/link";
import { serviceCategories } from "./lib/service-data";

export default function Home() {
  const featuredAreas = [
    { name: "West Seattle", href: "/service-areas/west-seattle" },
    { name: "Capitol Hill", href: "/service-areas/capitol-hill" },
    { name: "Green Lake", href: "/service-areas/green-lake" },
    { name: "Ballard", href: "/service-areas/ballard" },
    { name: "Burien", href: "/service-areas/burien" },
    { name: "Renton", href: "/service-areas/renton" },
  ];

  const serviceVisuals: Record<string, string> = {
    "lawn-care-maintenance": "/0DA44278-D1DC-4678-933D-AF3D8B1937A0_4_5005_c.jpeg",
    hardscaping: "/4D5D2F3B-6E57-42E6-9A7B-FA93E82718F5_4_5005_c.jpeg",
    landscaping: "/3768CA9B-5E74-4FE3-967B-AAC1F92194C3_4_5005_c.jpeg",
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <section className="relative isolate overflow-hidden">
        <Image
          src="/624D1698-E0BC-4CA3-802D-C4DE71EC7663_4_5005_c.jpeg"
          alt="Seattle residential landscape installation with layered planting beds"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-slate-900/55" />
        <div className="relative mx-auto flex min-h-[560px] w-full max-w-6xl items-center px-6 py-20">
          <div className="max-w-3xl space-y-6 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">
              Seattle Residential and Commercial Landscaping
            </p>
            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
              Sophisticated landscapes built for Seattle living.
            </h1>
            <p className="max-w-2xl text-lg text-slate-100">
              From Ballard to Burien, Summit Landscape designs, builds, and maintains outdoor
              spaces that stay clean, functional, and beautiful through every season.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/services"
                className="rounded-full bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-700"
              >
                View Services
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-white/50 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >
                Request a Quote
              </Link>
            </div>

            <div className="grid max-w-xl grid-cols-3 gap-3 pt-4">
              <div className="rounded-xl border border-white/25 bg-white/10 p-3 backdrop-blur">
                <p className="text-2xl font-bold">15+</p>
                <p className="text-xs text-slate-200">Years Experience</p>
              </div>
              <div className="rounded-xl border border-white/25 bg-white/10 p-3 backdrop-blur">
                <p className="text-2xl font-bold">18</p>
                <p className="text-xs text-slate-200">Service Areas</p>
              </div>
              <div className="rounded-xl border border-white/25 bg-white/10 p-3 backdrop-blur">
                <p className="text-2xl font-bold">100%</p>
                <p className="text-xs text-slate-200">Custom Plans</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-12">
        <div className="rounded-2xl border border-slate-200 bg-white px-6 py-5">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
            Why Homeowners Choose Summit
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-700">
            <span>Licensed and insured professionals</span>
            <span className="text-slate-300">•</span>
            <span>Drainage and climate-aware recommendations</span>
            <span className="text-slate-300">•</span>
            <span>Clean, detail-focused project delivery</span>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-3xl font-bold tracking-tight">Core Services</h2>
          <Link
            href="/services"
            className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-400"
          >
            Explore All Services
          </Link>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {serviceCategories.map((category) => (
            <article
              key={category.slug}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
            >
              <div className="relative h-48">
                <Image
                  src={serviceVisuals[category.slug]}
                  alt={category.name}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-slate-900">{category.name}</h3>
                <p className="mt-2 text-sm text-slate-600">{category.summary}</p>
                <Link
                  href={`/services/${category.slug}`}
                  className="mt-4 inline-block text-sm font-semibold text-emerald-700 transition hover:text-emerald-800"
                >
                  View {category.name} →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-4">
        <div className="grid gap-6 md:grid-cols-3">
          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white md:col-span-2">
            <div className="relative h-80">
              <Image
                src="/EAEFD167-AD6E-4835-9694-BF52449CD6E8_4_5005_c.jpeg"
                alt="Completed low-maintenance landscape with gravel and mature trees"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 66vw, 100vw"
              />
            </div>
          </article>
          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="relative h-80">
              <Image
                src="/624D1698-E0BC-4CA3-802D-C4DE71EC7663_4_5005_c.jpeg"
                alt="Finished planting bed with layered shrubs and ornamental grasses"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 33vw, 100vw"
              />
            </div>
          </article>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-3xl font-bold tracking-tight">Service Areas</h2>
          <Link
            href="/service-areas"
            className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-400"
          >
            View All Areas
          </Link>
        </div>
        <div className="flex flex-wrap gap-3">
          {featuredAreas.map((area) => (
            <Link
              key={area.name}
              href={area.href}
              className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-emerald-400 hover:text-emerald-700"
            >
              {area.name}
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-3xl font-bold tracking-tight">How We Work</h2>
            <Link
              href="/projects"
              className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-400"
            >
              View Projects
            </Link>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <article className="rounded-2xl border border-slate-200 p-6">
              <p className="text-sm font-semibold text-emerald-700">01</p>
              <h3 className="mt-2 text-xl font-semibold">On-site Consultation</h3>
              <p className="mt-2 text-slate-600">
                We evaluate your property conditions, goals, and maintenance expectations.
              </p>
            </article>
            <article className="rounded-2xl border border-slate-200 p-6">
              <p className="text-sm font-semibold text-emerald-700">02</p>
              <h3 className="mt-2 text-xl font-semibold">Tailored Plan</h3>
              <p className="mt-2 text-slate-600">
                You receive practical recommendations, clear scope, and transparent pricing.
              </p>
            </article>
            <article className="rounded-2xl border border-slate-200 p-6">
              <p className="text-sm font-semibold text-emerald-700">03</p>
              <h3 className="mt-2 text-xl font-semibold">Professional Delivery</h3>
              <p className="mt-2 text-slate-600">
                Our team executes cleanly, communicates clearly, and finishes on schedule.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg">
          <Image
            src="/3768CA9B-5E74-4FE3-967B-AAC1F92194C3_4_5005_c.jpeg"
            alt="Completed landscape project with structured planting beds"
            width={1600}
            height={900}
            className="h-[340px] w-full object-cover"
          />
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="rounded-3xl bg-slate-900 px-8 py-10 text-white md:flex md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Ready to upgrade your landscape?</h2>
            <p className="mt-3 max-w-2xl text-slate-300">
              Schedule a free consultation for your home or commercial property.
            </p>
          </div>
          <a
            href="mailto:hello@summitlandscape.com"
            className="mt-6 inline-block rounded-full bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-100 md:mt-0"
          >
            hello@summitlandscape.com
          </a>
        </div>
      </section>
    </div>
  );
}
