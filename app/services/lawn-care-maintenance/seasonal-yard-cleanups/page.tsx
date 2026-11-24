import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { EstimateForm } from "../../../components/estimate-form";

const PAGE_PATH = "/services/lawn-care-maintenance/seasonal-yard-cleanups";
const CANONICAL = `https://summitlandscapesolutions.co${PAGE_PATH}`;
const linkClass =
  "font-semibold text-emerald-700 underline decoration-2 underline-offset-4 hover:text-emerald-800";

const toc = [
  { id: "includes", label: "What's Included" },
  { id: "fall-and-spring", label: "Fall and Spring Cleanups" },
  { id: "seasonal-work", label: "Leaves, Beds, and Pruning" },
  { id: "planning-notes", label: "Planning Notes" },
  { id: "faq", label: "Common Questions" },
  { id: "related", label: "Related Services" },
  { id: "estimate", label: "Request an Estimate" },
];

const relatedServices = [
  { name: "Year-Round Maintenance Plans", href: "/services/lawn-care-maintenance/year-round-maintenance-plans" },
  { name: "Scheduled Lawn Care", href: "/services/lawn-care-maintenance/scheduled-lawn-mowing" },
  { name: "Fertilization and Weed Control", href: "/services/lawn-care-maintenance/fertilization-weed-control" },
  { name: "Planting Installation", href: "/services/landscaping/planting-installation" },
  { name: "Lawn Care and Maintenance", href: "/services/lawn-care-maintenance" },
];

const faqs = [
  {
    question: "What is included in a seasonal yard cleanup?",
    answer:
      "A seasonal cleanup is a spring or fall visit that can include leaf removal, pruning, and bed preparation. After a customized property evaluation, we remove leaves, debris, overgrowth, and seasonal buildup. The exact list is set after we see your site.",
  },
  {
    question: "How is this different from a year-round maintenance plan?",
    answer:
      "Seasonal yard cleanups are one-time spring or fall visits. A year-round plan is an annual agreement with visits through the year, covering seasonal pruning, mulching, leaf removal, and ongoing upkeep. Year-round clients also receive scheduling priority and consistent crew assignments. If you want recurring visits, start with a maintenance plan instead.",
  },
  {
    question: "When should I schedule a fall or spring cleanup?",
    answer:
      "Availability varies by season. Spring and summer fill quickly, so we recommend reaching out 4 to 8 weeks before your ideal start date as a planning guideline, not a guarantee. Fall work is typically timed around leaf drop on your property. We confirm timing during the free on-site consultation.",
  },
  {
    question: "Do you offer free estimates?",
    answer:
      "Yes. We provide free on-site consultations within our Burien and Seattle service area for residential and commercial projects. We evaluate your site conditions, goals, and budget before recommending a scope. Share a few details and we will follow up within one business day.",
  },
  {
    question: "Do you work on both residential and commercial properties?",
    answer:
      "Yes. Our team handles single-family homes, multi-family properties, HOAs, and small-to-mid size commercial landscapes. Scope and pricing are tailored to each property type.",
  },
];

export const metadata: Metadata = {
  title: "Seasonal Yard Cleanups | Summit Landscape Seattle",
  description:
    "Spring and fall yard cleanups in the Seattle area, including leaf removal, pruning, and bed preparation. Ask for a free on-site consultation.",
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
      name: "Seasonal Yard Cleanups",
      serviceType: "Seasonal yard cleanup",
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
          name: "Lawn Care and Maintenance",
          item: "https://summitlandscapesolutions.co/services/lawn-care-maintenance",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Seasonal Yard Cleanups",
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

export default function SeasonalYardCleanupsPage() {
  const images = {
    hero: "/9301EC92-9FEA-42B0-970D-E9B2CB597427_4_5005_c.jpeg",
    clearing: "/15F0794C-7D4F-44D2-B599-4B61F2B75C77_4_5005_c.jpeg",
    lawn: "/0DA44278-D1DC-4678-933D-AF3D8B1937A0_4_5005_c.jpeg",
    beds: "/DB20E9B0-564F-4DA0-B503-1D90AFA81BE6_4_5005_c.jpeg",
    trees: "/B4DDFA50-F2E8-4966-AFFE-B2F0EDC6D2F5_4_5005_c.jpeg",
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
        <Link href="/services/lawn-care-maintenance" className="transition hover:text-emerald-700">
          Lawn Care and Maintenance
        </Link>
      </nav>

      <section className="relative mt-4 isolate overflow-hidden rounded-3xl border border-slate-200">
        <Image
          src={images.hero}
          alt="Mulched planting beds along a tree-lined sidewalk, from a Summit Landscape project"
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
            Seasonal Yard Cleanups for Seattle-Area Properties
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-slate-100">
            Summit Landscape Solutions is a Burien-based team serving South King County and Seattle.
            We offer spring and fall cleanup services that include leaf removal, pruning, and bed
            preparation.
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
        <strong className="text-slate-900">Good to know:</strong> A seasonal yard cleanup is a
        spring or fall visit to clear leaves, debris, and overgrowth. It is different from a{" "}
        <Link href="/services/lawn-care-maintenance/year-round-maintenance-plans" className={linkClass}>
          year-round maintenance plan
        </Link>
        , which is an annual agreement with visits through the year. If you want recurring upkeep,
        start with that service instead.
      </div>

      <section id="includes" className="mt-10 scroll-mt-24">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">What&apos;s Included</h2>
        <p className="mt-3 max-w-3xl text-slate-600">
          The exact visit list is set after we see your property. The service itself is built around
          the work below.
        </p>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-slate-200 bg-white p-5">
            <h3 className="text-lg font-semibold text-slate-900">Seasonal property evaluation</h3>
            <p className="mt-2 text-sm text-slate-600">
              A customized look at the property to identify cleanup needs and prepare the landscape
              for the season ahead.
            </p>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white p-5">
            <h3 className="text-lg font-semibold text-slate-900">Leaf, debris, and overgrowth removal</h3>
            <p className="mt-2 text-sm text-slate-600">
              Professional removal of leaves, debris, overgrowth, and seasonal buildup so turf,
              beds, and walkways are not left under a heavy mat of material.
            </p>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white p-5">
            <h3 className="text-lg font-semibold text-slate-900">Pruning and bed preparation</h3>
            <p className="mt-2 text-sm text-slate-600">
              Seasonal pruning and bed preparation, timed to the plants on your site rather than a
              single calendar date for every property.
            </p>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white p-5">
            <h3 className="text-lg font-semibold text-slate-900">Scheduling and pricing</h3>
            <p className="mt-2 text-sm text-slate-600">
              Reliable scheduling and transparent pricing after the free on-site consultation. We do
              not publish a standard cleanup price on this page.
            </p>
          </article>
        </div>
      </section>

      <section id="fall-and-spring" className="scroll-mt-24 mt-10 grid gap-6 md:grid-cols-2">
        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <Image
            src={images.clearing}
            alt="Backyard mid-clearing during a Summit Landscape project"
            width={1400}
            height={900}
            className="h-full w-full object-cover"
          />
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-2xl font-semibold text-slate-900">Fall and Spring Cleanups</h2>
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
            .{" "}
            <a
              href="https://extension.wsu.edu/king/mg-home/gardening-resources/tip-sheets/tip-sheet-3"
              className={linkClass}
              rel="noopener noreferrer"
              target="_blank"
            >
              WSU Extension in King County
            </a>{" "}
            also notes that, despite its rainy reputation, the Puget Sound area typically gets only
            3 to 4 inches of rain for the entire summer. That pattern is why a fall visit and a
            spring visit often do different work on the same property.
          </p>
          <p className="mt-3 text-slate-600">
            Fall cleanups usually focus on leaf removal and getting beds and lawns ready for the
            wet season. Spring cleanups usually focus on leftover debris, overgrowth, and bed
            preparation as plants come out of dormancy. We recommend a scope during the initial
            consultation rather than promising one checklist for every site.
          </p>
        </article>
      </section>

      <section id="seasonal-work" className="scroll-mt-24 mt-10">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">
          Leaves, Beds, and Pruning
        </h2>
        <p className="mt-3 max-w-3xl text-slate-600">
          The photos below are examples of the kinds of outdoor work Summit does across the area.
          They are from our project archive and are not before-and-after claims for a single
          cleanup visit. Timing on your property follows the plants and the season, not a fixed
          guarantee.
        </p>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <Image
              src={images.lawn}
              alt="Newly installed lawn with brick edging and flowering shrubs, from a Summit Landscape project"
              width={1200}
              height={900}
              className="h-44 w-full object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold text-slate-900">Leaf removal</h3>
              <p className="mt-2 text-sm text-slate-600">
                <a
                  href="https://www.seattle.gov/utilities/volunteer/storm-drain-care"
                  className={linkClass}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Seattle Public Utilities
                </a>{" "}
                recommends raking fallen leaves and sticks in the yard before they reach a storm
                drain, and notes that raked leaves normally go in yard waste or can be used as
                mulch. A seasonal cleanup can take that leaf load off turf, beds, and walkways.
                Drainage and storm-drain work are not services we offer.
              </p>
            </div>
          </article>
          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <Image
              src={images.beds}
              alt="Mulched planting bed along a sidewalk and fence, from a Summit Landscape project"
              width={1200}
              height={900}
              className="h-44 w-full object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold text-slate-900">Bed preparation</h3>
              <p className="mt-2 text-sm text-slate-600">
                Clearing seasonal buildup from beds makes it easier to see plant structure and
                prepare the soil surface for the months ahead.{" "}
                <a
                  href="https://extension.wsu.edu/whatcom/nr/sustainable-landscaping/"
                  className={linkClass}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  WSU Extension
                </a>{" "}
                describes a 3 to 4 inch layer of coarse woody mulch as a useful cover for
                landscape beds, and notes that November through February is often a convenient
                time to apply it. If mulch is part of your scope, we choose material and depth
                after seeing your beds.
              </p>
            </div>
          </article>
          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <Image
              src={images.trees}
              alt="Gravel path and mulched beds under mature trees, from a Summit Landscape project"
              width={1200}
              height={900}
              className="h-44 w-full object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold text-slate-900">Pruning windows</h3>
              <p className="mt-2 text-sm text-slate-600">
                <a
                  href="https://extension.wsu.edu/pnw-gardeners-handbook/chapter-23-pruning-woody-landscape-plants/"
                  className={linkClass}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  WSU Extension&apos;s Pacific Northwest gardener&apos;s handbook
                </a>{" "}
                notes that the dormant season, after leaves fall and before spring bud break, is
                usually a good time to prune woody plants, and that late winter is often better
                than deep cold. Late summer or early fall cuts can push tender new growth. Dead
                wood can be removed at almost any time. We time work to the plants on your site.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section id="planning-notes" className="scroll-mt-24 mt-10 rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">Planning Notes</h2>
        <h3 className="mt-5 text-xl font-semibold text-slate-900">How this differs from a year-round plan</h3>
        <p className="mt-2 text-slate-700">
          Seasonal yard cleanups are spring or fall visits to clear leaves, debris, and overgrowth.
          A year-round plan is an annual agreement with visits through the year, including
          seasonal pruning, mulching, leaf removal, and ongoing upkeep. You can book a one-time
          cleanup without a longer agreement.
        </p>

        <h3 className="mt-5 text-xl font-semibold text-slate-900">Lead time and start dates</h3>
        <p className="mt-2 text-slate-700">
          Availability varies by season. Spring and summer fill quickly, and the company recommends
          reaching out 4 to 8 weeks before an ideal start date; that is a planning guideline, not a
          guaranteed start date. We confirm timing after the free on-site consultation.
        </p>

        <h3 className="mt-5 text-xl font-semibold text-slate-900">Yard waste collection in King County and Seattle</h3>
        <p className="mt-2 text-slate-700">
          How debris leaves your property is part of the scope we discuss on site. For residents
          handling their own material,{" "}
          <a
            href="https://kingcounty.gov/en/dept/dnrp/waste-services/garbage-recycling-compost/services/food-yard-waste/residential-compost-services"
            className={linkClass}
            rel="noopener noreferrer"
            target="_blank"
          >
            King County
          </a>{" "}
          discourages putting yard waste in the garbage and points households to yard-waste
          collection instead. In Seattle,{" "}
          <a
            href="https://www.seattle.gov/utilities/your-services/collection-and-disposal/food-and-yard"
            className={linkClass}
            rel="noopener noreferrer"
            target="_blank"
          >
            Seattle Public Utilities
          </a>{" "}
          states that yard debris such as leaves, grass, and plant trimmings is not allowed in the
          garbage. During November,{" "}
          <a
            href="https://www.seattle.gov/utilities/volunteer/storm-drain-care/extra-yard-waste-in-fall"
            className={linkClass}
            rel="noopener noreferrer"
            target="_blank"
          >
            SPU offers eligible household customers extra yard-waste set-out
          </a>{" "}
          for leaves. Those are public collection programs, not a description of Summit&apos;s
          disposal method.
        </p>

        <div className="mt-5 rounded-xl bg-slate-50 p-4 text-sm text-slate-600">
          Scope, visit timing, and pricing are set after the free on-site consultation. We do not
          publish a standard price or a one-size-fits-all calendar on this page.
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
          A seasonal cleanup is often paired with lawn care, a year-round maintenance plan, or new
          planting.
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
          Request a quote for a seasonal yard cleanup.
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600">
          Share a few details and we&apos;ll follow up within one business day to schedule a free
          on-site consultation.
        </p>
        <div className="mt-6">
          <EstimateForm
            variant="compact"
            source="Service: Seasonal Yard Cleanups"
            defaultServiceInterest="seasonal-yard-cleanups"
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
