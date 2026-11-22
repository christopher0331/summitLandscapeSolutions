import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { EstimateForm } from "../../../components/estimate-form";

const PAGE_PATH = "/services/landscaping/planting-installation";
const CANONICAL = `https://summitlandscapesolutions.co${PAGE_PATH}`;
const linkClass =
  "font-semibold text-emerald-700 underline decoration-2 underline-offset-4 hover:text-emerald-800";

const toc = [
  { id: "includes", label: "What's Included" },
  { id: "timing", label: "When Planting Happens" },
  { id: "how-we-plant", label: "How Plants Are Installed" },
  { id: "planning-notes", label: "Planning Notes" },
  { id: "faq", label: "Common Questions" },
  { id: "related", label: "Related Services" },
  { id: "estimate", label: "Request an Estimate" },
];

const relatedServices = [
  { name: "Landscape Design", href: "/services/landscaping/landscape-design" },
  { name: "Design-Build", href: "/services/landscaping/design-build" },
  { name: "Year-Round Maintenance Plans", href: "/services/lawn-care-maintenance/year-round-maintenance-plans" },
  { name: "Seasonal Yard Cleanups", href: "/services/lawn-care-maintenance/seasonal-yard-cleanups" },
  { name: "Landscaping", href: "/services/landscaping" },
];

const faqs = [
  {
    question: "What is included in a planting installation?",
    answer:
      "Work starts with a customized site evaluation and planting consultation tailored to your property, aesthetic goals, and growing conditions. We provide guidance on plant selections, layout, and materials chosen for beauty, performance, and long-term health, plus clear recommendations, project planning, scheduling guidance, and transparent pricing. Professional installation focuses on proper preparation, detail-driven workmanship, complete site cleanup, and lasting results. The exact plant list and layout are set after we see the site.",
  },
  {
    question: "When is a good time to plant in the Seattle area?",
    answer:
      "WSU Extension's Pacific Northwest gardener's handbook says that west of the Cascades, or where the soil rarely freezes over the winter, autumn is an excellent time to plant, and that another window occurs in late winter through early spring when the soil is dry enough to work. It advises avoiding the hottest times of the year. WSU Extension in King County also notes that landscape planting can be done in spring or fall. We confirm timing for your property during the free on-site consultation rather than promising one calendar date for every site.",
  },
  {
    question: "Do I need to call 811 before a planting project?",
    answer:
      "Washington law requires underground utilities to be located before digging. The Washington Utilities and Transportation Commission says the locate service is free and that, to comply with the state's dig law, RCW 19.122, you should call 811 at least two business days before you dig, not counting Saturday, Sunday, or legal holidays. This page is not legal advice. Utility locates are part of planning for any project that requires digging.",
  },
  {
    question: "How is this different from landscape design or design-build?",
    answer:
      "This service is focused on installing trees, shrubs, and perennials with proper spacing and long-term growth in mind. Landscape design is the planning and planting-palette work that can come first. Design-build is an option when you want one team to manage a wider project from concept through installation, or to install from plans provided by a landscape architect you have already engaged. We can talk through which path fits after the free on-site consultation.",
  },
  {
    question: "Do you offer free estimates?",
    answer:
      "Yes. We provide free on-site consultations within our Burien and Seattle service area for residential and commercial projects. We evaluate your site conditions, goals, and budget before recommending a scope. Share a few details and we will follow up within one business day. Installation projects are covered by a written agreement that outlines scope, materials, timeline, and pricing.",
  },
];

export const metadata: Metadata = {
  title: "Planting Installation | Summit Landscape Seattle",
  description:
    "Trees, shrubs, and perennials installed for Seattle-area yards, with site evaluation, plant guidance, and careful installation. Ask for a free on-site consultation.",
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
      name: "Planting Installation",
      serviceType: "Landscape planting installation",
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
          name: "Landscaping",
          item: "https://summitlandscapesolutions.co/services/landscaping",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Planting Installation",
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

export default function PlantingInstallationPage() {
  const images = {
    hero: "/3768CA9B-5E74-4FE3-967B-AAC1F92194C3_4_5005_c.jpeg",
    trees: "/5DB5FC7B-16D7-4453-AA97-D675E050233A_4_5005_c.jpeg",
    beds: "/DB20E9B0-564F-4DA0-B503-1D90AFA81BE6_4_5005_c.jpeg",
    shrubs: "/624D1698-E0BC-4CA3-802D-C4DE71EC7663_4_5005_c.jpeg",
    lawn: "/0DA44278-D1DC-4678-933D-AF3D8B1937A0_4_5005_c.jpeg",
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
        <Link href="/services/landscaping" className="transition hover:text-emerald-700">
          Landscaping
        </Link>
      </nav>

      <section className="relative mt-4 isolate overflow-hidden rounded-3xl border border-slate-200">
        <Image
          src={images.hero}
          alt="Rounded shrubs, ornamental grasses, and mulch behind a low stone wall, from a Summit Landscape project"
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
            Planting Installation for Seattle-Area Yards
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-slate-100">
            Summit Landscape Solutions is a Burien-based team serving South King County and Seattle.
            We install trees, shrubs, and perennials with proper spacing and long-term growth in
            mind.
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
        <strong className="text-slate-900">Good to know:</strong> This page is about installing
        plants. If you want a planting plan first, start with{" "}
        <Link href="/services/landscaping/landscape-design" className={linkClass}>
          landscape design
        </Link>
        . If you want one team to manage a broader project from concept through installation, or to
        build from plans you already have, see{" "}
        <Link href="/services/landscaping/design-build" className={linkClass}>
          design-build
        </Link>
        .
      </div>

      <section id="includes" className="mt-10 scroll-mt-24">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">What&apos;s Included</h2>
        <p className="mt-3 max-w-3xl text-slate-600">
          The exact plant list and layout are set after we see your property. The service itself is
          built around the work below.
        </p>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-slate-200 bg-white p-5">
            <h3 className="text-lg font-semibold text-slate-900">Site evaluation and consultation</h3>
            <p className="mt-2 text-sm text-slate-600">
              A customized look at your property, aesthetic goals, and growing conditions, so plant
              choices fit the site rather than a generic list.
            </p>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white p-5">
            <h3 className="text-lg font-semibold text-slate-900">Plant selection and layout</h3>
            <p className="mt-2 text-sm text-slate-600">
              Guidance on plant selections, layout design, and materials chosen for beauty,
              performance, and long-term health, with clear recommendations and scheduling.
            </p>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white p-5">
            <h3 className="text-lg font-semibold text-slate-900">Professional installation</h3>
            <p className="mt-2 text-sm text-slate-600">
              Installation focused on proper preparation, spacing, and detail-driven workmanship so
              trees, shrubs, and perennials have room to grow.
            </p>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white p-5">
            <h3 className="text-lg font-semibold text-slate-900">Cleanup, pricing, and agreements</h3>
            <p className="mt-2 text-sm text-slate-600">
              Complete site cleanup and transparent pricing after the free on-site consultation.
              Installation work is covered by a written agreement. We do not publish standard
              package prices on this page.
            </p>
          </article>
        </div>
      </section>

      <section id="timing" className="scroll-mt-24 mt-10 grid gap-6 md:grid-cols-2">
        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <Image
            src={images.trees}
            alt="New concrete walkway beside a mulched planting strip with young trees, from a Summit Landscape project"
            width={1400}
            height={900}
            className="h-full w-full object-cover"
          />
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-2xl font-semibold text-slate-900">When Planting Happens</h2>
          <p className="mt-3 text-slate-600">
            <a
              href="https://extension.wsu.edu/pnw-gardeners-handbook/chapter-12-trees-and-woody-landscape-plants/"
              className={linkClass}
              rel="noopener noreferrer"
              target="_blank"
            >
              WSU Extension&apos;s Pacific Northwest gardener&apos;s handbook
            </a>{" "}
            says that west of the Cascades, or in places where the soil rarely freezes over the
            winter, autumn is an excellent time to plant, because winter precipitation helps keep
            roots watered. It also describes another window in late winter through early spring,
            once the soil is dry enough to work without compaction, and advises avoiding planting
            just before or during the hottest times of the year.
          </p>
          <p className="mt-3 text-slate-600">
            <a
              href="https://extension.wsu.edu/king/mg-home/gardening-resources/tip-sheets/tip-sheet-3"
              className={linkClass}
              rel="noopener noreferrer"
              target="_blank"
            >
              WSU Extension in King County
            </a>{" "}
            likewise notes that landscape planting can be done in spring or fall. Western Washington
            has a Mediterranean-type climate of wet, mild winters and dry summers, as described in{" "}
            <a
              href="https://pubs.extension.wsu.edu/product/drought-tolerant-landscaping-for-washington-state-home-garden-series/"
              className={linkClass}
              rel="noopener noreferrer"
              target="_blank"
            >
              WSU Extension&apos;s drought-tolerant landscaping guide
            </a>
            . That guide also notes that trees, shrubs, groundcovers, and herbaceous perennials are
            often planted in the fall, and that it may take two to three years for a new tree to
            become fully established. We recommend a planting window after we walk your site, rather
            than promising one date for every property.
          </p>
        </article>
      </section>

      <section id="how-we-plant" className="scroll-mt-24 mt-10">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">How Plants Are Installed</h2>
        <p className="mt-3 max-w-3xl text-slate-600">
          The photos below are examples of the kinds of outdoor work Summit does across the area.
          They are from our project archive and are not before-and-after claims for a single
          planting job. Plant selection, spacing, and timing on your property follow the site visit.
        </p>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <Image
              src={images.beds}
              alt="Mulched planting bed along a sidewalk and fence, from a Summit Landscape project"
              width={1200}
              height={900}
              className="h-44 w-full object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold text-slate-900">Hole depth and width</h3>
              <p className="mt-2 text-sm text-slate-600">
                <a
                  href="https://pubs.extension.wsu.edu/product/planting-trees-and-shrubs-in-the-landscape-home-garden-series/"
                  className={linkClass}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  WSU Extension publication FS047E
                </a>{" "}
                recommends a planting hole no deeper than the root mass, with the top of the root
                collar at or slightly (not more than 1 to 2 inches) above the soil line, and a hole
                diameter 2 to 3 times the width of the root ball at the surface.{" "}
                <a
                  href="https://extension.wsu.edu/king/mg-home/gardening-resources/tip-sheets/tip-sheet-3"
                  className={linkClass}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  WSU Extension in King County
                </a>{" "}
                gives similar guidance: no deeper than the root mass, at least twice as wide, and
                the base of the stem or trunk slightly above the soil surface.
              </p>
            </div>
          </article>
          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <Image
              src={images.shrubs}
              alt="Shrubs and ornamental grasses in a masonry-edged planting bed, from a Summit Landscape project"
              width={1200}
              height={900}
              className="h-44 w-full object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold text-slate-900">Roots, soil, and spacing</h3>
              <p className="mt-2 text-sm text-slate-600">
                FS047E says to spread the roots while backfilling with the existing native soil,
                minus large rocks or debris, and that the soil should not be amended with organic
                matter in the planting hole. The King County tip sheet likewise says not to add
                fertilizers, organic matter, or other amendments in the hole, and to loosen the
                roots. We space trees, shrubs, and perennials for long-term growth, not for how they
                look on day one alone.
              </p>
            </div>
          </article>
          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <Image
              src={images.lawn}
              alt="Newly installed lawn with brick edging and flowering shrubs, from a Summit Landscape project"
              width={1200}
              height={900}
              className="h-44 w-full object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold text-slate-900">Plants that fit the site</h3>
              <p className="mt-2 text-sm text-slate-600">
                WSU Extension in King County notes that varied topography in Western Washington
                creates many microclimates, and that nursery labels usually indicate zone hardiness.
                Confirm your location on the{" "}
                <a
                  href="https://planthardiness.ars.usda.gov/"
                  className={linkClass}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  USDA Plant Hardiness Zone Map
                </a>
                . We recommend plants after seeing your property, light, and how you want the yard
                to function, rather than publishing a standard plant list on this page.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section id="planning-notes" className="scroll-mt-24 mt-10 rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">Planning Notes</h2>
        <h3 className="mt-5 text-xl font-semibold text-slate-900">Call 811 before digging</h3>
        <p className="mt-2 text-slate-700">
          Planting requires digging, and Washington law requires underground utilities to be located
          first. The{" "}
          <a
            href="https://www.utc.wa.gov/public-safety/pipeline-safety/call-you-dig/dig-law"
            className={linkClass}
            rel="noopener noreferrer"
            target="_blank"
          >
            Washington Utilities and Transportation Commission
          </a>{" "}
          says the locate service is provided free to the excavator and that, to comply with the
          state&apos;s dig law, RCW 19.122, you should call 811 or use{" "}
          <a
            href="https://wa811.com/"
            className={linkClass}
            rel="noopener noreferrer"
            target="_blank"
          >
            WA 811
          </a>{" "}
          at least two business days before you dig, excluding Saturday, Sunday, and legal holidays.
          The Commission also has a{" "}
          <a
            href="https://www.utc.wa.gov/public-safety/pipeline-safety/call-you-dig"
            className={linkClass}
            rel="noopener noreferrer"
            target="_blank"
          >
            Call Before You Dig overview
          </a>
          . This page is not legal advice. Locates are part of planning for any installation that
          requires digging.
        </p>

        <h3 className="mt-5 text-xl font-semibold text-slate-900">Establishment and follow-up</h3>
        <p className="mt-2 text-slate-700">
          FS047E notes that a newly planted tree or shrub needs special attention for the next two
          to three years while it develops new roots. If you want recurring visits after
          installation, ask about a{" "}
          <Link href="/services/lawn-care-maintenance/year-round-maintenance-plans" className={linkClass}>
            year-round maintenance plan
          </Link>
          . Establishment care is not automatically included in a planting installation unless it is
          written into the agreement after the consultation.
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
          Scope, plant selection, timeline, and pricing are set after the free on-site consultation.
          We do not publish a standard plant list or package prices on this page.
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
          New planting is often paired with landscape design, a design-build project, or ongoing
          maintenance.
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
          Request a quote for planting installation.
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600">
          Share a few details and we&apos;ll follow up within one business day to schedule a free
          on-site consultation.
        </p>
        <div className="mt-6">
          <EstimateForm
            variant="compact"
            source="Service: Planting Installation"
            defaultServiceInterest="planting-installation"
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
