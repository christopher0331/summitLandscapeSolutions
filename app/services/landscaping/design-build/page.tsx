import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { EstimateForm } from "../../../components/estimate-form";

const toc = [
  { id: "includes", label: "What's Included" },
  { id: "two-paths", label: "Two Ways to Start" },
  { id: "how-it-differs", label: "How This Differs From Design or Installation Alone" },
  { id: "planning-notes", label: "Planning Notes" },
  { id: "related", label: "Related Services" },
  { id: "estimate", label: "Request an Estimate" },
];

const relatedServices = [
  { name: "Landscape Design", href: "/services/landscaping/landscape-design" },
  { name: "Planting Installation", href: "/services/landscaping/planting-installation" },
  { name: "Sod and Turf Installation", href: "/services/landscaping/sod-turf-installation" },
  { name: "Hardscaping", href: "/services/hardscaping" },
  { name: "Landscaping", href: "/services/landscaping" },
];

export const metadata: Metadata = {
  title: "Design-Build Landscaping | Summit Landscape Seattle",
  description:
    "Design-build landscaping from concept through installation, or installation from plans provided by a landscape architect you have already engaged. Ask for a free on-site consultation.",
  alternates: {
    canonical: "https://summitlandscapesolutions.co/services/landscaping/design-build",
  },
};

export default function DesignBuildPage() {
  const images = {
    hero: "/DBD0E05B-1793-4CEA-A076-0986C169C3BC_4_5005_c.jpeg",
    path: "/65FC3407-D760-4963-A301-54194C7778CD_4_5005_c.jpeg",
    design: "/3768CA9B-5E74-4FE3-967B-AAC1F92194C3_4_5005_c.jpeg",
    install: "/4D5D2F3B-6E57-42E6-9A7B-FA93E82718F5_4_5005_c.jpeg",
    planting: "/DB20E9B0-564F-4DA0-B503-1D90AFA81BE6_4_5005_c.jpeg",
  };

  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16">
      <nav className="text-sm text-slate-500">
        <Link href="/services" className="transition hover:text-emerald-700">
          Services
        </Link>
        <span className="mx-2">/</span>
        <Link href="/services/landscaping" className="transition hover:text-emerald-700">
          Landscaping
        </Link>
      </nav>

      <section className="relative mt-4 isolate overflow-hidden rounded-3xl border border-slate-200">
        <Image
          src={images.hero}
          alt="Flowering hydrangea bed beside a lawn"
          fill
          priority
          className="object-cover"
          sizes="(min-width: 1024px) 1200px, 100vw"
        />
        <div className="absolute inset-0 bg-slate-900/55" />
        <div className="relative min-h-[440px] p-8 md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">
            Landscaping
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-white md:text-5xl">
            Design-Build Landscaping From Concept Through Installation
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-slate-100">
            Summit Landscape Solutions is a Burien-based team serving South King County and Seattle.
            We offer design-build services where we manage the full project from concept through
            installation. We can also execute plans provided by a landscape architect you have
            already engaged.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="#estimate"
              className="rounded-full bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-700"
            >
              Get Free Quote
            </Link>
            <Link
              href="/services/landscaping"
              className="rounded-full border border-white/50 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              View Landscaping
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
        <strong className="text-slate-900">Good to know:</strong> Design-build is a way of running
        the project, not a replacement for our landscape design or planting installation pages. You
        can hire us for the full concept-to-install path, or bring plans from a landscape architect
        you already work with.
      </div>

      <section id="includes" className="mt-10 scroll-mt-24">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">What&apos;s Included</h2>
        <p className="mt-3 max-w-3xl text-slate-600">
          The exact scope comes from a site visit. We look at conditions, goals, and budget before
          recommending a plan.
        </p>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-slate-200 bg-white p-5">
            <h3 className="text-lg font-semibold text-slate-900">One team, start to finish</h3>
            <p className="mt-2 text-sm text-slate-600">
              We can manage the full project from concept through installation, so design decisions
              and field work stay with the same company.
            </p>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white p-5">
            <h3 className="text-lg font-semibold text-slate-900">Work from existing plans</h3>
            <p className="mt-2 text-sm text-slate-600">
              If you already have a landscape architect, we can execute those plans rather than
              starting a new design from scratch.
            </p>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white p-5">
            <h3 className="text-lg font-semibold text-slate-900">Site evaluation first</h3>
            <p className="mt-2 text-sm text-slate-600">
              A free on-site consultation is used to evaluate the property and talk through goals
              and budget before we recommend a scope.
            </p>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white p-5">
            <h3 className="text-lg font-semibold text-slate-900">A written installation agreement</h3>
            <p className="mt-2 text-sm text-slate-600">
              Installation projects are covered by a written agreement that outlines scope,
              materials, timeline, and pricing.
            </p>
          </article>
        </div>
      </section>

      <section id="two-paths" className="scroll-mt-24 mt-10 grid gap-6 md:grid-cols-2">
        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <Image
            src={images.path}
            alt="Side yard with a gravel path, stepping pavers, and raised planter beds"
            width={1400}
            height={900}
            className="h-full w-full object-cover"
          />
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-2xl font-semibold text-slate-900">Two Ways to Start</h2>
          <p className="mt-3 text-slate-600">
            Some clients want one company to design and install the work. Others already have
            drawings and need a team to build them. Both paths start with a site visit so we can
            confirm what the property can support.
          </p>
          <p className="mt-3 text-slate-600">
            The photos on this page are examples of the kinds of outdoor work Summit does across
            the area, not a promise of a particular plan or finish.
          </p>
        </article>
      </section>

      <section id="how-it-differs" className="scroll-mt-24 mt-10">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">
          How This Differs From Design or Installation Alone
        </h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <Image
              src={images.design}
              alt="Landscape planting bed beside a lawn"
              width={1200}
              height={900}
              className="h-44 w-full object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold text-slate-900">Landscape design</h3>
              <p className="mt-2 text-sm text-slate-600">
                Our landscape design page covers site-aware design concepts and planting palettes.
                Use that service if you mainly need a plan, not a full install.
              </p>
            </div>
          </article>
          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <Image
              src={images.install}
              alt="Paver surface with a wood privacy screen"
              width={1200}
              height={900}
              className="h-44 w-full object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold text-slate-900">Installation services</h3>
              <p className="mt-2 text-sm text-slate-600">
                Planting, sod, and hardscaping each have their own pages for a defined piece of
                work. Design-build is the path for coordinating those pieces in one project.
              </p>
            </div>
          </article>
          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <Image
              src={images.planting}
              alt="Mulched bed along a fence and sidewalk"
              width={1200}
              height={900}
              className="h-44 w-full object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold text-slate-900">Design-build</h3>
              <p className="mt-2 text-sm text-slate-600">
                Choose this when you want one team from concept through installation, or when you
                already have landscape architect plans and need them built.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section id="planning-notes" className="scroll-mt-24 mt-10 rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">Planning Notes</h2>
        <h3 className="mt-5 text-xl font-semibold text-slate-900">Licenses and registrations</h3>
        <p className="mt-2 text-slate-700">
          Landscape architecture is a licensed profession in Washington, overseen by the Department
          of Licensing. A separate state rule, RCW 18.96.220, also leaves room for landscape design
          on residential property, for the preparation of planting plans, and for contractors to
          construct or supervise site work. Washington requires construction contractors to register
          with the Department of Labor &amp; Industries. This page does not list a registration or
          license number, and it does not claim that Summit holds a landscape architect license. If
          a project needs a licensed landscape architect, or if you already have one, we can talk
          through how installation would work from those plans.
        </p>

        <h3 className="mt-5 text-xl font-semibold text-slate-900">Permits, agreements, and timing</h3>
        <p className="mt-2 text-slate-700">
          Some installation work, such as larger hardscape, retaining walls, or grading, may need a
          City of Seattle permit or review. Requirements can change and may differ outside Seattle.
          Always verify current standards with the City or the local permitting office before work
          begins. Installation projects are covered by a written agreement. Availability varies by
          season; the company recommends reaching out 4 to 8 weeks before an ideal start date. That
          is a planning guideline, not a guaranteed start date.
        </p>

        <div className="mt-5 rounded-xl bg-slate-50 p-4 text-sm text-slate-600">
          Scope, materials, timeline, and pricing are set after the free on-site consultation. We
          do not publish standard package prices on this page.
        </div>
      </section>

      <section id="related" className="scroll-mt-24 mt-10 rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-2xl font-semibold text-slate-900">Related Services</h2>
        <p className="mt-3 text-slate-600">
          Design-build often draws on these existing services, depending on the scope.
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
          Request a quote for design-build landscaping.
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600">
          Share a few details and we&apos;ll follow up within one business day to schedule a free
          on-site consultation.
        </p>
        <div className="mt-6">
          <EstimateForm
            variant="compact"
            source="Service: Design-Build"
            defaultServiceInterest="design-build"
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
