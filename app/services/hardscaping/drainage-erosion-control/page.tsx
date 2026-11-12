import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { EstimateForm } from "../../../components/estimate-form";

const toc = [
  { id: "includes", label: "What's Included" },
  { id: "approach", label: "How We Approach Drainage Issues" },
  { id: "typical-work", label: "Typical Drainage and Erosion Work" },
  { id: "planning-notes", label: "Planning Notes and Permits" },
  { id: "related", label: "Related Services" },
  { id: "estimate", label: "Request an Estimate" },
];

const relatedServices = [
  { name: "Retaining Walls", href: "/services/hardscaping/retaining-walls" },
  { name: "Pavers, Patios and Walkways", href: "/services/hardscaping/paver-patios-walkways" },
  { name: "Hardscaping", href: "/services/hardscaping" },
  { name: "Aeration and Overseeding", href: "/services/lawn-care-maintenance/aeration-overseeding" },
  { name: "Landscape Design", href: "/services/landscaping/landscape-design" },
];

export const metadata: Metadata = {
  title: "Drainage and Erosion Control | Summit Landscape Seattle",
  description:
    "Practical drainage, French drain, and erosion-control solutions in the Seattle area. We evaluate water flow, grading, and soil conditions, then recommend a clear scope. Ask for a free estimate.",
  alternates: {
    canonical:
      "https://summitlandscapesolutions.co/services/hardscaping/drainage-erosion-control",
  },
};

export default function DrainageErosionControlPage() {
  const images = {
    hero: "/4D5D2F3B-6E57-42E6-9A7B-FA93E82718F5_4_5005_c.jpeg",
    grading: "/65FC3407-D760-4963-A301-54194C7778CD_4_5005_c.jpeg",
    beds: "/DB20E9B0-564F-4DA0-B503-1D90AFA81BE6_4_5005_c.jpeg",
    path: "/A605D748-7858-41E4-8188-1875D37A5CCE_4_5005_c.jpeg",
    planting: "/DBD0E05B-1793-4CEA-A076-0986C169C3BC_4_5005_c.jpeg",
  };

  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16">
      <nav className="text-sm text-slate-500">
        <Link href="/services" className="transition hover:text-emerald-700">
          Services
        </Link>
        <span className="mx-2">/</span>
        <Link href="/services/hardscaping" className="transition hover:text-emerald-700">
          Hardscaping
        </Link>
      </nav>

      <section className="relative mt-4 isolate overflow-hidden rounded-3xl border border-slate-200">
        <Image
          src={images.hero}
          alt="Paver surface with a wood privacy screen"
          fill
          priority
          className="object-cover"
          sizes="(min-width: 1024px) 1200px, 100vw"
        />
        <div className="absolute inset-0 bg-slate-900/55" />
        <div className="relative min-h-[440px] p-8 md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">
            Hardscaping
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-white md:text-5xl">
            Drainage and Erosion Control for Wet Seattle Yards
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-slate-100">
            Summit Landscape Solutions is a Burien-based team serving South King County and Seattle.
            We evaluate water flow, grading, and soil conditions before recommending practical
            drainage, French drain, or erosion-control solutions.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="#estimate"
              className="rounded-full bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-700"
            >
              Get Free Quote
            </Link>
            <Link
              href="/services/hardscaping"
              className="rounded-full border border-white/50 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              View Hardscaping
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
        <strong className="text-slate-900">Good to know:</strong> Standing water, soggy lawns, and
        soil moving on a slope are usually a water-flow problem first. We look at where water
        travels on your lot before recommending drains, grading, or planting.
      </div>

      <section id="includes" className="mt-10 scroll-mt-24">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">What&apos;s Included</h2>
        <p className="mt-3 max-w-3xl text-slate-600">
          This service starts with a site visit. The scope depends on what we find, not a
          one-size-fits-all package.
        </p>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-slate-200 bg-white p-5">
            <h3 className="text-lg font-semibold text-slate-900">Site evaluation</h3>
            <p className="mt-2 text-sm text-slate-600">
              We evaluate water flow, grading, and soil conditions before recommending a scope.
            </p>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white p-5">
            <h3 className="text-lg font-semibold text-slate-900">Practical recommendations</h3>
            <p className="mt-2 text-sm text-slate-600">
              We recommend practical drainage, French drain, or erosion-control solutions suited to
              the property.
            </p>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white p-5">
            <h3 className="text-lg font-semibold text-slate-900">Related work, when needed</h3>
            <p className="mt-2 text-sm text-slate-600">
              If a slope, path, or bed is part of the problem, we can coordinate drainage work with
              retaining walls, hardscaping, or planting.
            </p>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white p-5">
            <h3 className="text-lg font-semibold text-slate-900">A clear written quote</h3>
            <p className="mt-2 text-sm text-slate-600">
              After the visit, you get a written recommendation and quote. Installation projects are
              covered by a written agreement that outlines scope, materials, timeline, and pricing.
            </p>
          </article>
        </div>
      </section>

      <section id="approach" className="scroll-mt-24 mt-10 grid gap-6 md:grid-cols-2">
        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <Image
            src={images.grading}
            alt="Side yard with a gravel path, stepping pavers, and raised planter beds"
            width={1400}
            height={900}
            className="h-full w-full object-cover"
          />
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-2xl font-semibold text-slate-900">How We Approach Drainage Issues</h2>
          <p className="mt-3 text-slate-600">
            We start with where water sits after a rain, how the yard is graded, and what the soil
            is doing. Those three things usually decide whether a French drain, a grade change,
            erosion control, or a mix of the three is the right next step.
          </p>
          <p className="mt-3 text-slate-600">
            Seattle Public Utilities notes that property owners are responsible for maintaining
            drainage on their lot, and that water can destabilize slopes. If we see signs of earth
            movement, we may recommend a soils or geotechnical engineer before work begins.
          </p>
        </article>
      </section>

      <section id="typical-work" className="scroll-mt-24 mt-10">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">
          Typical Drainage and Erosion Work
        </h2>
        <p className="mt-3 max-w-3xl text-slate-600">
          The photos below are examples of the kinds of outdoor work Summit does across the area.
          The exact drainage plan for your property comes from the site evaluation.
        </p>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <Image
              src={images.beds}
              alt="Mulched bed along a fence and sidewalk"
              width={1200}
              height={900}
              className="h-44 w-full object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold text-slate-900">Grading and flow paths</h3>
              <p className="mt-2 text-sm text-slate-600">
                Reshaping beds and yard grades so stormwater can move without pooling in lawns or
                against a foundation. Seattle Public Utilities recommends directing downspout flows
                at least five feet away from a foundation and not onto a neighbor&apos;s property
                or over the edge of a steep hill.
              </p>
            </div>
          </article>
          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <Image
              src={images.path}
              alt="Paver walkway and hardscape transition"
              width={1200}
              height={900}
              className="h-44 w-full object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold text-slate-900">French drains and outlets</h3>
              <p className="mt-2 text-sm text-slate-600">
                When subsurface water is the issue, a French drain or similar collection line may
                be appropriate. Any outlet needs an approved discharge point. We will tell you if
                a permit or additional review is part of the work.
              </p>
            </div>
          </article>
          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <Image
              src={images.planting}
              alt="Flowering hydrangea bed beside a lawn"
              width={1200}
              height={900}
              className="h-44 w-full object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold text-slate-900">Erosion control on slopes</h3>
              <p className="mt-2 text-sm text-slate-600">
                On sloped lots, work may include erosion-control planting, edging, or coordination
                with a retaining wall so soil stays in place through wet weather.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section id="planning-notes" className="scroll-mt-24 mt-10 rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">Planning Notes and Permits</h2>
        <h3 className="mt-5 text-xl font-semibold text-slate-900">Where the water is allowed to go</h3>
        <p className="mt-2 text-slate-700">
          Drainage work has to discharge to an approved point. It should not send water onto a
          neighboring property or over the edge of a steep hill. We plan outlets with that in mind
          and will flag anything that needs City review.
        </p>

        <h3 className="mt-5 text-xl font-semibold text-slate-900">Permits and rainy-season grading</h3>
        <p className="mt-2 text-slate-700">
          New or altered onsite drainage, including some service drains and connections to an
          approved outlet, may require a drainage and side sewer permit from the Seattle Department
          of Construction and Inspections (SDCI). In landslide-prone or steep-slope areas, grading
          or soil disturbance between November 1 and March 31 may also need a grading season
          extension. Requirements can change, and they may differ outside Seattle city limits.
          Always verify current standards with the City or the local permitting office, and with
          any HOA or property management rules, before work begins.
        </p>

        <div className="mt-5 rounded-xl bg-slate-50 p-4 text-sm text-slate-600">
          If a slope shows signs of earth movement, such as leaning trees or cracks in soil or
          pavement, Seattle Public Utilities recommends having a soils or geotechnical engineer
          evaluate the site. We do not replace that kind of engineering review.
        </div>
      </section>

      <section id="related" className="scroll-mt-24 mt-10 rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-2xl font-semibold text-slate-900">Related Services</h2>
        <p className="mt-3 text-slate-600">
          Drainage work is often planned with other hardscape or landscape services.
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
          Request a quote for drainage and erosion control.
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600">
          Share a few details and we&apos;ll follow up within one business day to schedule a free
          on-site consultation.
        </p>
        <div className="mt-6">
          <EstimateForm
            variant="compact"
            source="Service: Drainage and Erosion Control"
            defaultServiceInterest="drainage-erosion-control"
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
