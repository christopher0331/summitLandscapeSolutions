import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { EstimateForm } from "../../../components/estimate-form";

const toc = [
  { id: "includes", label: "What's Included" },
  { id: "schedule", label: "How Often Visits Happen" },
  { id: "seasonal-work", label: "Seasonal Pruning, Mulching, and Leaf Removal" },
  { id: "planning-notes", label: "Planning Notes" },
  { id: "related", label: "Related Services" },
  { id: "estimate", label: "Request an Estimate" },
];

const relatedServices = [
  { name: "Scheduled Lawn Care", href: "/services/lawn-care-maintenance/scheduled-lawn-mowing" },
  { name: "Seasonal Yard Cleanups", href: "/services/lawn-care-maintenance/seasonal-yard-cleanups" },
  { name: "Fertilization and Weed Control", href: "/services/lawn-care-maintenance/fertilization-weed-control" },
  { name: "Lawn Care and Maintenance", href: "/services/lawn-care-maintenance" },
  { name: "Planting Installation", href: "/services/landscaping/planting-installation" },
];

export const metadata: Metadata = {
  title: "Year-Round Maintenance Plans | Summit Landscape Seattle",
  description:
    "Annual maintenance agreements covering seasonal pruning, mulching, leaf removal, and ongoing upkeep. Ask for a free on-site consultation and a plan that fits your property.",
  alternates: {
    canonical:
      "https://summitlandscapesolutions.co/services/lawn-care-maintenance/year-round-maintenance-plans",
  },
};

export default function YearRoundMaintenancePlansPage() {
  const images = {
    hero: "/0DA44278-D1DC-4678-933D-AF3D8B1937A0_4_5005_c.jpeg",
    beds: "/DB20E9B0-564F-4DA0-B503-1D90AFA81BE6_4_5005_c.jpeg",
    pruning: "/DBD0E05B-1793-4CEA-A076-0986C169C3BC_4_5005_c.jpeg",
    mulch: "/65BF4200-40C6-4125-B45A-ADE955764213_4_5005_c.jpeg",
    lawn: "/B4DDFA50-F2E8-4966-AFFE-B2F0EDC6D2F5_4_5005_c.jpeg",
  };

  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16">
      <nav className="text-sm text-slate-500">
        <Link href="/services" className="transition hover:text-emerald-700">
          Services
        </Link>
        <span className="mx-2">/</span>
        <Link href="/services/lawn-care-maintenance" className="transition hover:text-emerald-700">
          Lawn Care and Maintenance
        </Link>
      </nav>

      <section className="relative mt-4 isolate overflow-hidden rounded-3xl border border-slate-200">
        <Image
          src={images.hero}
          alt="Fresh sod lawn with brick edging beside a planting bed"
          fill
          priority
          className="object-cover"
          sizes="(min-width: 1024px) 1200px, 100vw"
        />
        <div className="absolute inset-0 bg-slate-900/55" />
        <div className="relative min-h-[440px] p-8 md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">
            Lawn Care and Maintenance
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-white md:text-5xl">
            Year-Round Maintenance Plans for Seattle-Area Properties
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-slate-100">
            Summit Landscape Solutions is a Burien-based team serving South King County and Seattle.
            We offer annual maintenance agreements that cover seasonal pruning, mulching, leaf
            removal, and ongoing upkeep.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="#estimate"
              className="rounded-full bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-700"
            >
              Get Free Quote
            </Link>
            <Link
              href="/services/lawn-care-maintenance"
              className="rounded-full border border-white/50 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              View Lawn Care
            </Link>
          </div>
        </div>
      </section>

      <nav aria-label="On this page" className="mt-10 rounded-2xl border border-emerald-100 bg-emerald-50 p-6">
        <h2 className="text-xl font-semibold text-slate-900">On This Page</h2>
        <ol className="mt-3 grid list-decimal gap-2 pl-5 text-emerald-800 md:grid-cols-2">
          {toc.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} className="font-medium hover:underline">
                {item.label}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <div className="mt-6 rounded-2xl border-l-4 border-emerald-600 bg-white p-5 text-slate-700 shadow-sm">
        <strong className="text-slate-900">Good to know:</strong> A year-round plan is an annual
        agreement for ongoing visits. It is different from a one-time spring or fall cleanup, though
        those cleanups can still be part of the year&apos;s work. Year-round clients receive
        scheduling priority and consistent crew assignments.
      </div>

      <section id="includes" className="mt-10 scroll-mt-24">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">What&apos;s Included</h2>
        <p className="mt-3 max-w-3xl text-slate-600">
          The exact visit list is set after we see your property. The agreement itself covers the
          work below.
        </p>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-slate-200 bg-white p-5">
            <h3 className="text-lg font-semibold text-slate-900">Seasonal pruning</h3>
            <p className="mt-2 text-sm text-slate-600">
              Planned pruning as the year changes, timed to the plants on your site rather than a
              single calendar date.
            </p>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white p-5">
            <h3 className="text-lg font-semibold text-slate-900">Mulching</h3>
            <p className="mt-2 text-sm text-slate-600">
              Bed refresh and mulch as part of the annual plan, so soil stays covered and beds stay
              tidy.
            </p>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white p-5">
            <h3 className="text-lg font-semibold text-slate-900">Leaf removal</h3>
            <p className="mt-2 text-sm text-slate-600">
              Seasonal leaf cleanup so turf, beds, and walkways are not left under a heavy mat of
              debris.
            </p>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white p-5">
            <h3 className="text-lg font-semibold text-slate-900">Ongoing upkeep</h3>
            <p className="mt-2 text-sm text-slate-600">
              Recurring visits through the year. Maintenance services run on a written service
              agreement that is reviewed annually.
            </p>
          </article>
        </div>
      </section>

      <section id="schedule" className="scroll-mt-24 mt-10 grid gap-6 md:grid-cols-2">
        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <Image
            src={images.beds}
            alt="Mulched bed along a fence and sidewalk"
            width={1400}
            height={900}
            className="h-full w-full object-cover"
          />
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-2xl font-semibold text-slate-900">How Often Visits Happen</h2>
          <p className="mt-3 text-slate-600">
            Most properties benefit from bi-weekly or monthly service, depending on season, plant
            density, and property goals. We recommend a schedule during the initial consultation
            rather than promising one frequency for every site.
          </p>
          <p className="mt-3 text-slate-600">
            The plan can cover a single-family yard or a commercial, HOA, or multi-family landscape.
            Scope and pricing are tailored to the property type after we walk the site.
          </p>
        </article>
      </section>

      <section id="seasonal-work" className="scroll-mt-24 mt-10">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">
          Seasonal Pruning, Mulching, and Leaf Removal
        </h2>
        <p className="mt-3 max-w-3xl text-slate-600">
          The photos below are examples of the kinds of outdoor work Summit does across the area.
          Timing on your property follows the plants and the season, not a fixed guarantee.
        </p>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <Image
              src={images.pruning}
              alt="Flowering hydrangea bed beside a lawn"
              width={1200}
              height={900}
              className="h-44 w-full object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold text-slate-900">Pruning windows</h3>
              <p className="mt-2 text-sm text-slate-600">
                Washington State University Extension notes that the dormant season, after leaves
                fall and before spring bud break, is usually a good time to prune woody plants, and
                that late winter is often better than deep cold. Late summer or early fall cuts can
                push tender new growth. Dead wood can be removed at almost any time. We time work
                to the plants on your site.
              </p>
            </div>
          </article>
          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <Image
              src={images.mulch}
              alt="Curbside planting strip prepared with edging"
              width={1200}
              height={900}
              className="h-44 w-full object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold text-slate-900">Mulch depth and timing</h3>
              <p className="mt-2 text-sm text-slate-600">
                WSU Extension describes a 3 to 4 inch layer of coarse woody mulch as a useful cover
                for landscape beds, and notes that fall and winter are often convenient times to
                apply it. We choose material and depth after seeing your beds, rather than using one
                depth on every property.
              </p>
            </div>
          </article>
          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <Image
              src={images.lawn}
              alt="Gravel backyard with mature trees and mulched planting beds"
              width={1200}
              height={900}
              className="h-44 w-full object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold text-slate-900">Leaf cleanup</h3>
              <p className="mt-2 text-sm text-slate-600">
                Seattle Public Utilities recommends raking fallen leaves and sticks in the yard
                before they reach a storm drain, and clearing leaves and debris from the tops of
                drains. Planned leaf removal is part of the annual agreement.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section id="planning-notes" className="scroll-mt-24 mt-10 rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">Planning Notes</h2>
        <h3 className="mt-5 text-xl font-semibold text-slate-900">How this differs from a seasonal cleanup</h3>
        <p className="mt-2 text-slate-700">
          Seasonal yard cleanups are spring or fall visits to clear leaves, debris, and overgrowth.
          A year-round plan is an annual agreement with visits through the year. If you only need a
          one-time cleanup, start with that service instead.
        </p>

        <h3 className="mt-5 text-xl font-semibold text-slate-900">Agreements and start dates</h3>
        <p className="mt-2 text-slate-700">
          Maintenance services run on a service agreement that is reviewed annually. Availability
          varies by season. Spring and summer fill quickly, and the company recommends reaching out
          4 to 8 weeks before an ideal start date for projects; maintenance agreements can often be
          scheduled sooner. Those are planning guidelines, not a guaranteed start date.
        </p>

        <div className="mt-5 rounded-xl bg-slate-50 p-4 text-sm text-slate-600">
          Scope, visit frequency, and pricing are set after the free on-site consultation. We do
          not publish a standard price or a one-size-fits-all calendar on this page.
        </div>
      </section>

      <section id="related" className="scroll-mt-24 mt-10 rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-2xl font-semibold text-slate-900">Related Services</h2>
        <p className="mt-3 text-slate-600">
          A maintenance plan is often paired with lawn care, a seasonal cleanup, or new planting.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          {relatedServices.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-emerald-700 hover:text-emerald-700"
            >
              {service.name}
            </Link>
          ))}
        </div>
      </section>

      <section
        id="estimate"
        className="scroll-mt-24 mt-10 rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_8px_24px_rgba(15,23,42,0.05)] md:p-8"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.34em] text-emerald-700">
          Free Estimate
        </p>
        <h2 className="mt-3 font-display text-2xl font-semibold text-slate-900">
          Request a quote for a year-round maintenance plan.
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600">
          Share a few details and we&apos;ll follow up within one business day to schedule a free
          on-site consultation.
        </p>
        <div className="mt-6">
          <EstimateForm
            variant="compact"
            source="Service: Year-Round Maintenance Plans"
            defaultServiceInterest="year-round-maintenance-plans"
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
