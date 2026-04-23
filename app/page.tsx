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

  const processSteps = [
    {
      number: "01",
      title: "On-site Consultation",
      description:
        "We evaluate your property conditions, goals, and maintenance expectations.",
    },
    {
      number: "02",
      title: "Tailored Plan",
      description:
        "You receive practical recommendations, clear scope, and transparent pricing.",
    },
    {
      number: "03",
      title: "Professional Delivery",
      description:
        "Our team executes cleanly, communicates clearly, and finishes on schedule.",
    },
  ];

  return (
    <div className="min-h-screen bg-[color:var(--background)] text-slate-900">
      <section className="relative isolate overflow-hidden border-b border-slate-200">
        <Image
          src="/624D1698-E0BC-4CA3-802D-C4DE71EC7663_4_5005_c.jpeg"
          alt="Seattle residential landscape installation with layered planting beds"
          fill
          priority
          className="object-cover object-center scale-105"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/55 to-slate-900/15" />
        <div className="relative mx-auto flex min-h-[640px] w-full max-w-7xl items-center px-6 py-24">
          <div className="max-w-3xl space-y-7 text-white">
            <div className="flex items-center gap-3">
              <div className="h-px w-12 bg-emerald-300" />
              <p className="text-xs font-medium uppercase tracking-[0.42em] text-emerald-200">
                Burien & Seattle Landscaping
              </p>
            </div>
            <h1 className="font-display text-5xl font-semibold leading-[1.05] md:text-7xl">
              Landscapes designed to last, built with care.
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-white/85 md:text-xl">
              From Burien to Ballard, Summit Landscape Solutions designs, builds, and maintains
              outdoor spaces that stay clean, functional, and beautiful through every season.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/services"
                className="rounded-full bg-emerald-600 px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-emerald-700"
              >
                View Services
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-white/60 bg-white/10 px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                Request a Quote
              </Link>
            </div>

            <div className="grid max-w-2xl grid-cols-1 gap-3 pt-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
                <p className="font-display text-3xl font-semibold text-white">15+</p>
                <p className="mt-1 text-xs uppercase tracking-[0.22em] text-white/75">Years Experience</p>
              </div>
              <div className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
                <p className="font-display text-3xl font-semibold text-white">18</p>
                <p className="mt-1 text-xs uppercase tracking-[0.22em] text-white/75">Service Areas</p>
              </div>
              <div className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
                <p className="font-display text-3xl font-semibold text-white">100%</p>
                <p className="mt-1 text-xs uppercase tracking-[0.22em] text-white/75">Custom Plans</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-emerald-700">
              Why Homeowners Choose Summit
            </p>
            <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold leading-tight text-slate-900 md:text-5xl">
              Landscapes planned with restraint, structure, and long-term practicality.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
              The strongest outdoor spaces do more than look finished on install day. We focus on
              grading, drainage, plant selection, and material choices that continue to feel
              composed through Seattle weather and year-round use.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-700">
                  Built Right
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Drainage-aware solutions and durable material selections.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-700">
                  Designed Calmly
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Clean lines, layered planting, and a more refined visual rhythm.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-700">
                  Maintained Well
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Outdoor spaces built to stay orderly and usable over time.
                </p>
              </div>
            </div>
          </div>

          <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
            <div className="relative h-[420px]">
              <Image
                src="/EAEFD167-AD6E-4835-9694-BF52449CD6E8_4_5005_c.jpeg"
                alt="Completed low-maintenance landscape with gravel and mature trees"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/15 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.34em] text-emerald-200">
                  Featured Project Direction
                </p>
                <h3 className="mt-3 font-display text-3xl font-semibold text-white">
                  Elegant, low-maintenance outdoor environments
                </h3>
                <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/85">
                  Structured hardscape, layered greenery, and thoughtful spacing create a result
                  that feels calm, refined, and highly livable.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-8">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-emerald-700">
              Signature Offerings
            </p>
            <h2 className="font-display text-4xl font-semibold tracking-tight text-slate-900">
              Core Services
            </h2>
          </div>
          <Link
            href="/services"
            className="rounded-full border border-slate-300 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.28em] text-slate-700 transition hover:border-emerald-700 hover:text-emerald-700"
          >
            Explore All Services
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {serviceCategories.map((category) => (
            <article
              key={category.slug}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-[0_24px_60px_rgba(15,23,42,0.10)]"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={serviceVisuals[category.slug]}
                  alt={category.name}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-semibold text-slate-900">
                  {category.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{category.summary}</p>
                <Link
                  href={`/services/${category.slug}`}
                  className="mt-5 inline-block text-xs font-semibold uppercase tracking-[0.28em] text-emerald-700 transition hover:text-emerald-800"
                >
                  View {category.name}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-emerald-700">
              Process
            </p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
              A measured process that keeps projects clear and composed.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 md:text-lg">
              Premium work doesn&rsquo;t come from noise or overselling. It comes from an orderly
              process, good judgment, and disciplined execution from first walkthrough to final
              cleanup.
            </p>
            <Link
              href="/projects"
              className="mt-7 inline-block rounded-full border border-slate-300 px-5 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-slate-700 transition hover:border-emerald-700 hover:text-emerald-700"
            >
              View Projects
            </Link>
          </div>
          <div className="grid gap-5">
            {processSteps.map((step) => (
              <article
                key={step.number}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_8px_24px_rgba(15,23,42,0.04)]"
              >
                <p className="text-sm font-semibold tracking-[0.28em] text-emerald-700">
                  {step.number}
                </p>
                <h3 className="mt-3 font-display text-2xl font-semibold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-3 text-slate-600">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-emerald-700">
                Regional Coverage
              </p>
              <h2 className="font-display text-4xl font-semibold tracking-tight text-slate-900">
                Service Areas
              </h2>
            </div>
            <Link
              href="/service-areas"
              className="rounded-full border border-slate-300 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.28em] text-slate-700 transition hover:border-emerald-700 hover:text-emerald-700"
            >
              View All Areas
            </Link>
          </div>
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
              <div className="relative h-[420px]">
                <Image
                  src="/624D1698-E0BC-4CA3-802D-C4DE71EC7663_4_5005_c.jpeg"
                  alt="Finished planting bed with layered shrubs and ornamental grasses"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/15 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.34em] text-emerald-200">
                    Burien, Seattle & Nearby Communities
                  </p>
                  <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/85">
                    Serving neighborhoods and surrounding areas with landscaping that feels tailored
                    to the property rather than templated from job to job.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_8px_24px_rgba(15,23,42,0.04)]">
              <p className="text-sm leading-relaxed text-slate-600">
                We work across Seattle neighborhoods and nearby communities, adapting scope and
                recommendations to lot size, site conditions, architecture, and maintenance goals.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {featuredAreas.map((area) => (
                  <Link
                    key={area.name}
                    href={area.href}
                    className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-emerald-700 hover:text-emerald-700"
                  >
                    {area.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-20">
        <div className="rounded-3xl border border-slate-200 bg-white px-8 py-10 shadow-[0_8px_24px_rgba(15,23,42,0.05)] md:flex md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-emerald-700">
              Start Your Project
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-slate-900">
              Ready to upgrade your landscape?
            </h2>
            <p className="mt-3 max-w-2xl text-slate-600">
              Schedule a free consultation for your home or commercial property.
            </p>
          </div>
          <a
            href="mailto:jamarrhenaifesh@summitlandscapesolutions.co"
            className="mt-6 inline-block rounded-full bg-emerald-700 px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-emerald-800 md:mt-0"
          >
            Email Us
          </a>
        </div>
      </section>
    </div>
  );
}
