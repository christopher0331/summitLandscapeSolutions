import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { EstimateForm } from "../../../components/estimate-form";

const PAGE_PATH = "/services/hardscaping/paver-patios-walkways";
const CANONICAL = `https://summitlandscapesolutions.co${PAGE_PATH}`;
const linkClass =
  "font-semibold text-emerald-700 underline decoration-2 underline-offset-4 hover:text-emerald-800";

const toc = [
  { id: "includes", label: "What's Included" },
  { id: "approach", label: "How We Approach the Work" },
  { id: "materials-and-layout", label: "Materials, Layout, and Connections" },
  { id: "planning-notes", label: "Planning Notes" },
  { id: "faq", label: "Common Questions" },
  { id: "related", label: "Related Services" },
  { id: "estimate", label: "Request an Estimate" },
];

const relatedServices = [
  { name: "Outdoor Living Features", href: "/services/hardscaping/outdoor-living-features" },
  { name: "Retaining Walls", href: "/services/hardscaping/retaining-walls" },
  { name: "Design-Build", href: "/services/landscaping/design-build" },
  { name: "Landscape Design", href: "/services/landscaping/landscape-design" },
  { name: "Hardscaping", href: "/services/hardscaping" },
];

const faqs = [
  {
    question: "What is included in a paver, patio, or walkway project?",
    answer:
      "Work starts with a customized site evaluation and design guidance tailored to your property, layout, and functional goals. We provide recommendations on paver materials, layout options, project scheduling, and transparent pricing. Installation is built on proper preparation, and the visit ends with site cleanup and a final walkthrough. The exact scope is set after we see the site.",
  },
  {
    question: "Do I need a permit for a patio or walkway in Seattle?",
    answer:
      "It depends on the project. The Seattle Department of Construction and Inspections says patio and concrete slabs on the ground usually do not require a permit, and that platforms, walks, and driveways do not need a permit if they are less than 18 inches above grade and not over a basement or other building story. SDCI also says a grading permit is required if you add or replace 750 square feet or more of paving, while resurfacing existing paving does not need a grading permit. Requirements can change and may differ outside Seattle. Always verify current standards with the City or the local permitting office before work begins. This page is not a permit determination.",
  },
  {
    question: "How is this different from outdoor living features or design-build?",
    answer:
      "This service is focused on custom paver surfaces, patios, and walkways that connect key areas of your yard. Outdoor living features cover built-in seating, fire pit zones, and garden borders. Design-build is an option when you want one team to manage a wider project from concept through installation, or to install from plans provided by a landscape architect you have already engaged. We can talk through which path fits after the free on-site consultation.",
  },
  {
    question: "Do you offer free estimates?",
    answer:
      "Yes. We provide free on-site consultations within our Burien and Seattle service area for residential and commercial projects. We evaluate your site conditions, goals, and budget before recommending a scope. Share a few details and we will follow up within one business day.",
  },
  {
    question: "Do you work on both residential and commercial properties?",
    answer:
      "Yes. Our team handles single-family homes, multi-family properties, HOAs, and small-to-mid size commercial landscapes. Scope and pricing are tailored to each property type. Installation projects are covered by a written agreement that outlines scope, materials, timeline, and pricing.",
  },
];

export const metadata: Metadata = {
  title: "Pavers, Patios and Walkways | Summit Landscape Seattle",
  description:
    "Custom paver patios and walkways for Seattle-area yards, with site evaluation, material guidance, and professional installation. Ask for a free on-site consultation.",
  alternates: {
    canonical: CANONICAL,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "LandscapingBusiness"],
      "@id": `${CANONICAL}#business`,
      name: "Summit Landscape Solutions",
      url: "https://summitlandscapesolutions.co",
      telephone: "+1-206-724-1936",
      image: "https://summitlandscapesolutions.co/summit-logo.png",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Burien",
        addressRegion: "WA",
        addressCountry: "US",
      },
      areaServed: {
        "@type": "Place",
        name: "Seattle and South King County",
      },
    },
    {
      "@type": "Service",
      "@id": `${CANONICAL}#service`,
      name: "Pavers, Patios and Walkways",
      serviceType: "Paver patio and walkway installation",
      provider: { "@id": `${CANONICAL}#business` },
      areaServed: { "@type": "Place", name: "Seattle and South King County" },
      url: CANONICAL,
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${CANONICAL}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://summitlandscapesolutions.co/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: "https://summitlandscapesolutions.co/services",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Hardscaping",
          item: "https://summitlandscapesolutions.co/services/hardscaping",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Pavers, Patios and Walkways",
          item: CANONICAL,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${CANONICAL}#faq`,
      mainEntity: faqs.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ],
};

export default function PaverPatiosWalkwaysPage() {
  const images = {
    hero: "/4D5D2F3B-6E57-42E6-9A7B-FA93E82718F5_4_5005_c.jpeg",
    walkway: "/5DB5FC7B-16D7-4453-AA97-D675E050233A_4_5005_c.jpeg",
    path: "/65FC3407-D760-4963-A301-54194C7778CD_4_5005_c.jpeg",
    edge: "/3768CA9B-5E74-4FE3-967B-AAC1F92194C3_4_5005_c.jpeg",
  };

  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

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
          alt="Paver patio under a screened outdoor structure, from a Summit Landscape project"
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
            Pavers, Patios, and Walkways for Seattle-Area Yards
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-slate-100">
            Summit Landscape Solutions is a Burien-based team serving South King County and Seattle.
            We install custom paver surfaces that improve outdoor living and connect key areas of
            your yard.
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
        <strong className="text-slate-900">Good to know:</strong> This page is about paver patios
        and walkways. If you also want built-in seating, a fire pit zone, or garden borders, see{" "}
        <Link href="/services/hardscaping/outdoor-living-features" className={linkClass}>
          outdoor living features
        </Link>
        . If you want one team to manage a broader project from concept through installation, start
        with{" "}
        <Link href="/services/landscaping/design-build" className={linkClass}>
          design-build
        </Link>
        .
      </div>

      <section id="includes" className="mt-10 scroll-mt-24">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">What&apos;s Included</h2>
        <p className="mt-3 max-w-3xl text-slate-600">
          The exact scope is set after we see your property. The service itself is built around the
          work below.
        </p>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-slate-200 bg-white p-5">
            <h3 className="text-lg font-semibold text-slate-900">Site evaluation and design guidance</h3>
            <p className="mt-2 text-sm text-slate-600">
              A customized look at the property, layout, and how you want to use the space, so the
              surface fits the site rather than a stock pattern.
            </p>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white p-5">
            <h3 className="text-lg font-semibold text-slate-900">Materials, layout, and scheduling</h3>
            <p className="mt-2 text-sm text-slate-600">
              Expert recommendations on paver materials, layout options, project scheduling, and
              transparent pricing after the free on-site consultation.
            </p>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white p-5">
            <h3 className="text-lg font-semibold text-slate-900">Professional installation</h3>
            <p className="mt-2 text-sm text-slate-600">
              Installation built on proper preparation, precision craftsmanship, and long-lasting
              performance suited to how the space will be used.
            </p>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white p-5">
            <h3 className="text-lg font-semibold text-slate-900">Cleanup and walkthrough</h3>
            <p className="mt-2 text-sm text-slate-600">
              Detail-focused execution, complete site cleanup, and a final walkthrough focused on
              quality and satisfaction. Installation work is covered by a written agreement.
            </p>
          </article>
        </div>
      </section>

      <section id="approach" className="scroll-mt-24 mt-10 grid gap-6 md:grid-cols-2">
        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <Image
            src={images.walkway}
            alt="New concrete walkway beside a mulched planting strip with young trees, from a Summit Landscape project"
            width={1400}
            height={900}
            className="h-full w-full object-cover"
          />
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-2xl font-semibold text-slate-900">How We Approach the Work</h2>
          <p className="mt-3 text-slate-600">
            Western Washington has a Mediterranean-type climate of wet, mild winters and dry
            summers, as described in{" "}
            <a
              href="https://pubs.extension.wsu.edu/product/drought-tolerant-landscaping-for-washington-state-home-garden-series/"
              className={linkClass}
              rel="noopener noreferrer"
              target="_blank"
            >
              WSU Extension&apos;s drought-tolerant landscaping guide
            </a>
            . That same guide notes that hardscape features such as pavers, flagstones, stone and
            gravel beds, decks, and shade structures can personalize a landscape and support a
            system that uses less water.{" "}
            <a
              href="https://extension.wsu.edu/king/mg-home/gardening-resources/tip-sheets/tip-sheet-3"
              className={linkClass}
              rel="noopener noreferrer"
              target="_blank"
            >
              WSU Extension in King County
            </a>{" "}
            also notes that the Puget Sound area typically gets only 3 to 4 inches of rain for the
            entire summer.
          </p>
          <p className="mt-3 text-slate-600">
            We start with a site visit so material and layout choices fit how you move through the
            yard, not a one-size pattern. A patio might be the main gathering surface. A walkway
            might simply connect the house, a side yard, or a planting bed. We recommend a scope
            after we walk the property.
          </p>
        </article>
      </section>

      <section id="materials-and-layout" className="scroll-mt-24 mt-10">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">
          Materials, Layout, and Connections
        </h2>
        <p className="mt-3 max-w-3xl text-slate-600">
          The photos below are examples of the kinds of outdoor work Summit does across the area.
          They are from our project archive and are not before-and-after claims for a single
          installation. Material and layout decisions on your property follow the site visit.
        </p>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <Image
              src={images.hero}
              alt="Paver patio under a screened outdoor structure, from a Summit Landscape project"
              width={1200}
              height={900}
              className="h-44 w-full object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold text-slate-900">Patio surfaces</h3>
              <p className="mt-2 text-sm text-slate-600">
                A patio can give you a durable gathering space that stays usable through Seattle
                weather and the drier summer months described by WSU Extension. We discuss paver
                materials and layout options during the consultation, then install on a properly
                prepared base.
              </p>
            </div>
          </article>
          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <Image
              src={images.path}
              alt="Side yard with raised planters, a gravel path, and stepping stones, from a Summit Landscape project"
              width={1200}
              height={900}
              className="h-44 w-full object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold text-slate-900">Walkways and stepping paths</h3>
              <p className="mt-2 text-sm text-slate-600">
                Walkways and stepping paths connect key areas of the yard, including tighter side
                yards. The example at left includes stepping stones in a gravel path beside raised
                planters. We match the surface to the route and the surrounding planting, rather
                than using one detail on every property.
              </p>
            </div>
          </article>
          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <Image
              src={images.edge}
              alt="Rounded shrubs, ornamental grasses, and mulch behind a low stone wall, from a Summit Landscape project"
              width={1200}
              height={900}
              className="h-44 w-full object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold text-slate-900">Edges and planting</h3>
              <p className="mt-2 text-sm text-slate-600">
                Hardscape often meets planting beds, lawn, or a low wall. If the project should
                include new planting, a garden border, or a wider design-build scope, we will say
                so during the site visit rather than stretching this service past what you asked
                for.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section id="planning-notes" className="scroll-mt-24 mt-10 rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">Planning Notes</h2>
        <h3 className="mt-5 text-xl font-semibold text-slate-900">Permits in Seattle and nearby cities</h3>
        <p className="mt-2 text-slate-700">
          Some patio and walkway work needs a permit; some does not. The{" "}
          <a
            href="https://www.seattle.gov/construction-and-inspections/permits/do-you-need-a-permit"
            className={linkClass}
            rel="noopener noreferrer"
            target="_blank"
          >
            Seattle Department of Construction and Inspections
          </a>{" "}
          says patio and concrete slabs on the ground (on grade) usually do not require a permit,
          and that platforms, walks, and driveways do not need a permit if they are less than 18
          inches above grade and not over a basement or other building story. On its{" "}
          <a
            href="https://www.seattle.gov/construction-and-inspections/permits/common-projects/paving"
            className={linkClass}
            rel="noopener noreferrer"
            target="_blank"
          >
            paving project page
          </a>
          , SDCI also says a grading permit is required if you add or replace 750 square feet or
          more of paving, and that resurfacing existing paving does not need a grading permit. If
          you remove existing paving and replace it, that threshold still applies. SDCI advises
          contacting the department before paving in or near an environmentally critical area.
        </p>
        <p className="mt-3 text-slate-700">
          Those are Seattle rules, and they can change. Requirements may differ in Burien and other
          South King County cities. For Burien projects, start with the City of Burien{" "}
          <a
            href="https://www.burienwa.gov/business/community_development"
            className={linkClass}
            rel="noopener noreferrer"
            target="_blank"
          >
            Community Development
          </a>{" "}
          and{" "}
          <a
            href="https://www.burienwa.gov/business/community_development/permit_center/applications"
            className={linkClass}
            rel="noopener noreferrer"
            target="_blank"
          >
            permit application
          </a>{" "}
          pages, or the local permitting office where the property sits. Always verify current
          standards before work begins. This page is not a permit determination for your site.
        </p>

        <h3 className="mt-5 text-xl font-semibold text-slate-900">Agreements and timing</h3>
        <p className="mt-2 text-slate-700">
          Installation projects are covered by a written agreement that outlines scope, materials,
          timeline, and pricing. Availability varies by season. Spring and summer fill quickly, and
          the company recommends reaching out 4 to 8 weeks before an ideal start date. That is a
          planning guideline, not a guaranteed start date. We confirm timing after the free on-site
          consultation.
        </p>

        <div className="mt-5 rounded-xl bg-slate-50 p-4 text-sm text-slate-600">
          Scope, materials, timeline, and pricing are set after the free on-site consultation. We
          do not publish standard package prices on this page.
        </div>
      </section>

      <section id="faq" className="scroll-mt-24 mt-10 rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">Common Questions</h2>
        <div className="mt-5 space-y-5">
          {faqs.map((item) => (
            <article key={item.question}>
              <h3 className="text-xl font-semibold text-slate-900">{item.question}</h3>
              <p className="mt-2 text-slate-700">{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="related" className="scroll-mt-24 mt-10 rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-2xl font-semibold text-slate-900">Related Services</h2>
        <p className="mt-3 text-slate-600">
          A patio or walkway is often paired with outdoor living features, planting, or a broader
          design-build project.
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
          Request a quote for pavers, a patio, or a walkway.
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600">
          Share a few details and we&apos;ll follow up within one business day to schedule a free
          on-site consultation.
        </p>
        <div className="mt-6">
          <EstimateForm
            variant="compact"
            source="Service: Pavers, Patios and Walkways"
            defaultServiceInterest="paver-patios-walkways"
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
