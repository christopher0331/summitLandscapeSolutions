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
    <div className="min-h-screen bg-[color:var(--background)] text-[color:var(--foreground)]">
      <section className="relative isolate overflow-hidden border-b border-[color:var(--line)]">
        <Image
          src="/624D1698-E0BC-4CA3-802D-C4DE71EC7663_4_5005_c.jpeg"
          alt="Seattle residential landscape installation with layered planting beds"
          fill
          priority
          className="object-cover object-center scale-105"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#090c0a]/95 via-[#0b0f0d]/78 to-[#0b0f0d]/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f0d] via-transparent to-[#0b0f0d]/35" />
        <div className="absolute left-0 top-1/4 bottom-1/4 hidden w-[3px] bg-gradient-to-b from-transparent via-[color:var(--accent)] to-transparent opacity-60 md:block" />
        <div className="relative mx-auto flex min-h-[700px] w-full max-w-7xl items-center px-6 py-24">
          <div className="max-w-3xl space-y-7 text-white">
            <div className="flex items-center gap-3">
              <div className="h-px w-12 bg-[color:var(--accent)]" />
              <p className="text-xs font-medium uppercase tracking-[0.42em] text-[color:var(--accent)]">
                Seattle Residential and Commercial Landscaping
              </p>
            </div>
            <h1 className="font-display text-5xl font-semibold leading-[1.02] md:text-7xl">
              Landscapes with <span className="text-accent-gradient">presence</span>, crafted for
              Northwest living.
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-white/72 md:text-xl">
              From Ballard to Burien, Summit Landscape designs, builds, and maintains outdoor
              spaces that stay clean, functional, and beautiful through every season.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/services"
                className="bg-[color:var(--accent)] px-8 py-4 text-sm font-semibold uppercase tracking-[0.28em] text-[#0b0f0d] transition hover:bg-[color:var(--accent-strong)] hover:shadow-[0_0_30px_rgba(216,184,117,0.32)] hover:-translate-y-0.5"
              >
                View Services
              </Link>
              <Link
                href="/contact"
                className="border border-white/25 bg-white/8 px-8 py-4 text-sm font-semibold uppercase tracking-[0.28em] text-white backdrop-blur-sm transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
              >
                Request a Quote
              </Link>
            </div>

            <div className="grid max-w-2xl grid-cols-1 gap-3 pt-4 sm:grid-cols-3">
              <div className="border border-white/12 bg-white/8 p-4 backdrop-blur-sm">
                <p className="font-display text-3xl font-semibold text-white">15+</p>
                <p className="mt-1 text-xs uppercase tracking-[0.22em] text-white/58">Years Experience</p>
              </div>
              <div className="border border-white/12 bg-white/8 p-4 backdrop-blur-sm">
                <p className="font-display text-3xl font-semibold text-white">18</p>
                <p className="mt-1 text-xs uppercase tracking-[0.22em] text-white/58">Service Areas</p>
              </div>
              <div className="border border-white/12 bg-white/8 p-4 backdrop-blur-sm">
                <p className="font-display text-3xl font-semibold text-white">100%</p>
                <p className="mt-1 text-xs uppercase tracking-[0.22em] text-white/58">Custom Plans</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-16">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[color:var(--accent)]">
              Why Homeowners Choose Summit
            </p>
            <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold leading-tight text-white md:text-5xl">
              Landscapes planned with restraint, structure, and long-term practicality.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[color:var(--muted)] md:text-lg">
              The strongest outdoor spaces do more than look finished on install day. We focus on
              grading, drainage, plant selection, and material choices that continue to feel
              composed through Seattle weather and year-round use.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="panel-luxury p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--accent)]">
                  Built Right
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[color:var(--muted)]">
                  Drainage-aware solutions and durable material selections.
                </p>
              </div>
              <div className="panel-luxury p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--accent)]">
                  Designed Calmly
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[color:var(--muted)]">
                  Clean lines, layered planting, and a more refined visual rhythm.
                </p>
              </div>
              <div className="panel-luxury p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--accent)]">
                  Maintained Well
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[color:var(--muted)]">
                  Outdoor spaces built to stay orderly and usable over time.
                </p>
              </div>
            </div>
          </div>

          <article className="overflow-hidden border border-[color:var(--line)] bg-[color:var(--surface)] shadow-[0_24px_60px_rgba(0,0,0,0.24)]">
            <div className="relative h-[420px]">
              <Image
                src="/EAEFD167-AD6E-4835-9694-BF52449CD6E8_4_5005_c.jpeg"
                alt="Completed low-maintenance landscape with gravel and mature trees"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f0d]/92 via-[#0b0f0d]/18 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[color:var(--accent)]">
                  Featured Project Direction
                </p>
                <h3 className="mt-3 font-display text-3xl font-semibold text-white">
                  Elegant, low-maintenance outdoor environments
                </h3>
                <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/70">
                  Structured hardscape, layered greenery, and thoughtful spacing create a result
                  that feels calm, expensive, and highly livable.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-4">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[color:var(--accent)]">
              Signature Offerings
            </p>
            <h2 className="font-display text-4xl font-semibold tracking-tight text-white">
              Core Services
            </h2>
          </div>
          <Link
            href="/services"
            className="border border-[color:var(--line)] px-5 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--foreground)]/72 transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
          >
            Explore All Services
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {serviceCategories.map((category) => (
            <article
              key={category.slug}
              className="group overflow-hidden border border-[color:var(--line)] bg-[color:var(--surface)] transition duration-300 hover:-translate-y-1 hover:border-[color:var(--accent)]/45 hover:shadow-[0_24px_60px_rgba(0,0,0,0.26)]"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={serviceVisuals[category.slug]}
                  alt={category.name}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f0d]/85 via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-semibold text-white">{category.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[color:var(--muted)]">{category.summary}</p>
                <Link
                  href={`/services/${category.slug}`}
                  className="mt-5 inline-block text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--accent)] transition hover:text-[color:var(--accent-strong)]"
                >
                  View {category.name}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-4">
        <div className="grid gap-6 md:grid-cols-3">
          <article className="overflow-hidden border border-[color:var(--line)] bg-[color:var(--surface)] md:col-span-2">
            <div className="relative h-80">
              <Image
                src="/EAEFD167-AD6E-4835-9694-BF52449CD6E8_4_5005_c.jpeg"
                alt="Completed low-maintenance landscape with gravel and mature trees"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 66vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f0d]/65 via-transparent to-transparent" />
            </div>
          </article>
          <article className="overflow-hidden border border-[color:var(--line)] bg-[color:var(--surface)]">
            <div className="relative h-80">
              <Image
                src="/624D1698-E0BC-4CA3-802D-C4DE71EC7663_4_5005_c.jpeg"
                alt="Finished planting bed with layered shrubs and ornamental grasses"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 33vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f0d]/65 via-transparent to-transparent" />
            </div>
          </article>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-16">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[color:var(--accent)]">
              Process
            </p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-white md:text-5xl">
              A measured process that keeps projects clear and composed.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-[color:var(--muted)] md:text-lg">
              Premium work does not come from noise or overselling. It comes from an orderly
              process, good judgment, and disciplined execution from first walkthrough to final
              cleanup.
            </p>
            <Link
              href="/projects"
              className="mt-7 inline-block border border-[color:var(--line)] px-5 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--foreground)]/72 transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
            >
              View Projects
            </Link>
          </div>
          <div className="grid gap-5">
            {processSteps.map((step) => (
              <article key={step.number} className="panel-luxury p-7">
                <p className="text-sm font-semibold tracking-[0.28em] text-[color:var(--accent)]">
                  {step.number}
                </p>
                <h3 className="mt-3 font-display text-2xl font-semibold text-white">{step.title}</h3>
                <p className="mt-3 text-[color:var(--muted)]">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[color:var(--accent)]">
                Regional Coverage
              </p>
              <h2 className="font-display text-4xl font-semibold tracking-tight text-white">
                Service Areas
              </h2>
            </div>
            <Link
              href="/service-areas"
              className="border border-[color:var(--line)] px-5 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--foreground)]/72 transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
            >
              View All Areas
            </Link>
          </div>
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="overflow-hidden border border-[color:var(--line)] bg-[color:var(--surface)] shadow-[0_24px_60px_rgba(0,0,0,0.22)]">
              <div className="relative h-[420px]">
                <Image
                  src="/624D1698-E0BC-4CA3-802D-C4DE71EC7663_4_5005_c.jpeg"
                  alt="Finished planting bed with layered shrubs and ornamental grasses"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f0d]/88 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[color:var(--accent)]">
                    Seattle and Nearby Communities
                  </p>
                  <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/72">
                    Serving neighborhoods and surrounding areas with landscaping that feels tailored
                    to the property rather than templated from job to job.
                  </p>
                </div>
              </div>
            </div>
            <div className="panel-luxury p-7">
              <p className="text-sm leading-relaxed text-[color:var(--muted)]">
                We work across Seattle neighborhoods and nearby communities, adapting scope and
                recommendations to lot size, site conditions, architecture, and maintenance goals.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {featuredAreas.map((area) => (
                  <Link
                    key={area.name}
                    href={area.href}
                    className="border border-[color:var(--line)] bg-[color:var(--surface-strong)] px-4 py-2.5 text-sm font-medium text-[color:var(--muted)] transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
                  >
                    {area.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-16">
        <div className="overflow-hidden border border-[color:var(--line)] bg-[color:var(--surface)] shadow-[0_24px_60px_rgba(0,0,0,0.26)]">
          <Image
            src="/3768CA9B-5E74-4FE3-967B-AAC1F92194C3_4_5005_c.jpeg"
            alt="Completed landscape project with structured planting beds"
            width={1600}
            height={900}
            className="h-[340px] w-full object-cover"
          />
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-16">
        <div className="panel-luxury px-8 py-10 md:flex md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[color:var(--accent)]">
              Start Your Project
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-white">
              Ready to upgrade your landscape?
            </h2>
            <p className="mt-3 max-w-2xl text-[color:var(--muted)]">
              Schedule a free consultation for your home or commercial property.
            </p>
          </div>
          <a
            href="mailto:hello@summitlandscape.com"
            className="mt-6 inline-block bg-[color:var(--accent)] px-6 py-4 text-sm font-semibold uppercase tracking-[0.28em] text-[#0b0f0d] transition hover:bg-[color:var(--accent-strong)] hover:shadow-[0_0_28px_rgba(216,184,117,0.28)] md:mt-0"
          >
            hello@summitlandscape.com
          </a>
        </div>
      </section>
    </div>
  );
}
