import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { EstimateForm } from "../../../components/estimate-form";

const PAGE_PATH = "/services/landscaping/sod-turf-installation";
const CANONICAL = `https://summitlandscapesolutions.co${PAGE_PATH}`;
const linkClass =
  "font-semibold text-emerald-700 underline decoration-2 underline-offset-4 hover:text-emerald-800";

const toc = [
  { id: "includes", label: "What's Included" },
  { id: "timing", label: "When Sod Can Be Installed" },
  { id: "how-we-install", label: "How Sod Is Installed" },
  { id: "planning-notes", label: "Planning Notes" },
  { id: "faq", label: "Common Questions" },
  { id: "related", label: "Related Services" },
  { id: "estimate", label: "Request an Estimate" },
];

const relatedServices = [
  { name: "Planting Installation", href: "/services/landscaping/planting-installation" },
  { name: "Scheduled Lawn Care", href: "/services/lawn-care-maintenance/scheduled-lawn-mowing" },
  { name: "Fertilization and Weed Control", href: "/services/lawn-care-maintenance/fertilization-weed-control" },
  { name: "Design-Build", href: "/services/landscaping/design-build" },
  { name: "Landscaping", href: "/services/landscaping" },
];

const faqs = [
  {
    question: "What is included in a sod or turf installation?",
    answer:
      "Work starts with a customized site evaluation and turf consultation tailored to your property, usage needs, and growing conditions. We provide guidance on sod or turf selection, layout preparation, project planning, and transparent pricing. Professional installation focuses on proper preparation, soil health, and long-lasting performance, and the visit ends with site cleanup and a final walkthrough focused on quality, establishment, and lasting results. The exact scope is set after we see the site.",
  },
  {
    question: "When is a good time to install sod in the Seattle area?",
    answer:
      "Washington State University Extension says a new lawn has the same basic requirements whether it is established by sodding or by seeding. WSU Extension in King County says new lawns should be seeded in spring, prior to Memorial Day, or in fall, after Labor Day. Oregon State University Extension, in the current publication that replaced its older sodding guide, says sod has the same optimum planting times as seed but can be planted over a broader period, and that in western Oregon a well-prepared sod bed can be planted from about mid-March through mid-November. We confirm timing for your property during the free on-site consultation rather than promising one calendar window for every site.",
  },
  {
    question: "How is a new sod lawn cared for after installation?",
    answer:
      "OSU Extension says that even though sod is mature grass, most of its roots were removed when it was cut, so it needs regular watering. It recommends soaking the sod immediately after planting and watering at least daily for a couple of weeks, and paying attention to edges near driveways and sidewalks, which can dry faster. WSU Extension in King County also notes that the Puget Sound area typically gets only 3 to 4 inches of rain for the entire summer. Establishment watering and first mowings are discussed during the consultation and are not automatically a maintenance plan unless they are written into the agreement.",
  },
  {
    question: "How is this different from lawn care or design-build?",
    answer:
      "This service is focused on installing a new sod or turf lawn, including site evaluation, soil and layout preparation, and professional installation. Scheduled lawn care and fertilization are ongoing turf services after a lawn is in place. Design-build is an option when you want one team to manage a wider project from concept through installation. We can talk through which path fits after the free on-site consultation.",
  },
  {
    question: "Do you offer free estimates?",
    answer:
      "Yes. We provide free on-site consultations within our Burien and Seattle service area for residential and commercial projects. We evaluate your site conditions, goals, and budget before recommending a scope. Share a few details and we will follow up within one business day. Installation projects are covered by a written agreement that outlines scope, materials, timeline, and pricing.",
  },
];

export const metadata: Metadata = {
  title: "Sod and Turf Installation | Summit Landscape Seattle",
  description:
    "Fresh sod and turf installation for Seattle-area yards, with site evaluation, soil prep for healthy roots, and professional installation. Ask for a free on-site consultation.",
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
      name: "Sod and Turf Installation",
      serviceType: "Sod and turf installation",
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
          name: "Sod and Turf Installation",
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

export default function SodTurfInstallationPage() {
  const images = {
    hero: "/0DA44278-D1DC-4678-933D-AF3D8B1937A0_4_5005_c.jpeg",
    prep: "/4896C48A-6D93-4922-B942-AD80990B9468_4_5005_c.jpeg",
    lawn: "/0DA44278-D1DC-4678-933D-AF3D8B1937A0_4_5005_c.jpeg",
    edge: "/5DB5FC7B-16D7-4453-AA97-D675E050233A_4_5005_c.jpeg",
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
          alt="Newly installed lawn with brick edging and flowering shrubs, from a Summit Landscape project"
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
            Sod and Turf Installation for Seattle-Area Yards
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-slate-100">
            Summit Landscape Solutions is a Burien-based team serving South King County and Seattle.
            We install fresh sod with grading and soil prep for healthy root development.
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
        <strong className="text-slate-900">Good to know:</strong> This page is about installing a
        new sod or turf lawn. If you want regular mowing after the lawn is in, see{" "}
        <Link href="/services/lawn-care-maintenance/scheduled-lawn-mowing" className={linkClass}>
          scheduled lawn care
        </Link>
        . If the project is part of a broader landscape from concept through installation, start
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
            <h3 className="text-lg font-semibold text-slate-900">Site evaluation and turf consultation</h3>
            <p className="mt-2 text-sm text-slate-600">
              A customized look at your property, how the lawn will be used, and growing conditions,
              so the turf choice fits the site rather than a standard mix for every yard.
            </p>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white p-5">
            <h3 className="text-lg font-semibold text-slate-900">Selection, layout, and planning</h3>
            <p className="mt-2 text-sm text-slate-600">
              Guidance on sod or turf selection, layout preparation, project planning, and
              transparent pricing after the free on-site consultation.
            </p>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white p-5">
            <h3 className="text-lg font-semibold text-slate-900">Preparation and installation</h3>
            <p className="mt-2 text-sm text-slate-600">
              Professional installation focused on proper preparation, soil health, and long-lasting
              performance. Grading and soil prep are done for healthy root development.
            </p>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white p-5">
            <h3 className="text-lg font-semibold text-slate-900">Cleanup, walkthrough, and agreements</h3>
            <p className="mt-2 text-sm text-slate-600">
              Detail-driven execution, complete site cleanup, and a final walkthrough focused on
              quality, establishment, and lasting results. Installation work is covered by a written
              agreement. We do not publish standard package prices on this page.
            </p>
          </article>
        </div>
      </section>

      <section id="timing" className="scroll-mt-24 mt-10 grid gap-6 md:grid-cols-2">
        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <Image
            src={images.prep}
            alt="Soil bed prepared for a new lawn during a Summit Landscape installation"
            width={1400}
            height={900}
            className="h-full w-full object-cover"
          />
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-2xl font-semibold text-slate-900">When Sod Can Be Installed</h2>
          <p className="mt-3 text-slate-600">
            <a
              href="https://extension.wsu.edu/pnw-gardeners-handbook/chapter-10-lawns/"
              className={linkClass}
              rel="noopener noreferrer"
              target="_blank"
            >
              WSU Extension&apos;s Pacific Northwest gardener&apos;s handbook
            </a>{" "}
            says a new lawn has the same basic requirements whether it is established by sodding or
            by seeding, and that one of the most important factors for lawn health is the soil or
            root zone.{" "}
            <a
              href="https://extension.wsu.edu/king/mg-home/gardening-resources/tip-sheets/tip-sheet-11"
              className={linkClass}
              rel="noopener noreferrer"
              target="_blank"
            >
              WSU Extension in King County
            </a>{" "}
            says new lawns should be seeded in spring, prior to Memorial Day, or in fall, after
            Labor Day.
          </p>
          <p className="mt-3 text-slate-600">
            For sodding specifically, WSU points readers to Oregon State University Extension. The
            current OSU publication,{" "}
            <a
              href="https://extension.oregonstate.edu/catalog/ec-1550-practical-lawn-establishment-renovation"
              className={linkClass}
              rel="noopener noreferrer"
              target="_blank"
            >
              Practical Lawn Establishment and Renovation (EC 1550, reviewed 2022)
            </a>
            , replaced the older sodding guide WSU still names. OSU says sod has the same optimum
            planting times as seed, but can be planted over a broader period because the grass is
            already mature and has part of its root system. In western Oregon, it says a
            well-prepared sod bed can be planted from about mid-March through mid-November. We
            confirm timing for your Seattle-area site after the consultation, rather than treating
            that Oregon window as a guarantee here.
          </p>
        </article>
      </section>

      <section id="how-we-install" className="scroll-mt-24 mt-10">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">How Sod Is Installed</h2>
        <p className="mt-3 max-w-3xl text-slate-600">
          The photos below are examples of the kinds of outdoor work Summit does across the area.
          They are from our project archive and are not before-and-after claims for a single lawn
          installation. Soil prep, sod selection, and timing on your property follow the site visit.
        </p>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <Image
              src={images.prep}
              alt="Soil bed prepared for a new lawn during a Summit Landscape installation"
              width={1200}
              height={900}
              className="h-44 w-full object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold text-slate-900">Soil prep and a firm bed</h3>
              <p className="mt-2 text-sm text-slate-600">
                WSU Extension says it is always best to do a soil test before finishing soil
                preparation for a new lawn, and that the soil or root zone is one of the most
                important factors in lawn health. OSU Extension says sod should go on a carefully
                prepared seedbed, and that the soil should be moistened just before the sod is laid
                so roots can establish quickly. We grade and prepare the soil for healthy root
                development after we see the site.
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
              <h3 className="text-lg font-semibold text-slate-900">Laying sod tightly</h3>
              <p className="mt-2 text-sm text-slate-600">
                OSU Extension says to place sod green side up, fit the edges together tightly, and
                leave no gaps between pieces. It notes that the pattern matters less than a tight
                seam. The same publication describes an instant lawn as the main advantage of sod:
                there is no wait for seed to germinate. We recommend a sod or turf selection after
                seeing your property rather than publishing a standard variety list on this page.
              </p>
            </div>
          </article>
          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <Image
              src={images.edge}
              alt="New concrete walkway beside a mulched planting strip with young trees, from a Summit Landscape project"
              width={1200}
              height={900}
              className="h-44 w-full object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold text-slate-900">Watering while it roots</h3>
              <p className="mt-2 text-sm text-slate-600">
                OSU Extension says most of a sod piece&apos;s roots were removed when it was cut, so
                new sod needs regular watering: soak it immediately after planting and water at
                least daily for a couple of weeks, especially along edges near driveways and
                sidewalks. That matters in this climate.{" "}
                <a
                  href="https://pubs.extension.wsu.edu/product/drought-tolerant-landscaping-for-washington-state-home-garden-series/"
                  className={linkClass}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  WSU Extension
                </a>{" "}
                describes Western Washington as having wet, mild winters and dry summers, and{" "}
                <a
                  href="https://extension.wsu.edu/king/mg-home/gardening-resources/tip-sheets/tip-sheet-3"
                  className={linkClass}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  WSU Extension in King County
                </a>{" "}
                notes that the Puget Sound area typically gets only 3 to 4 inches of rain for the
                entire summer.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section id="planning-notes" className="scroll-mt-24 mt-10 rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">Planning Notes</h2>
        <h3 className="mt-5 text-xl font-semibold text-slate-900">Soil, sun, and grass choice</h3>
        <p className="mt-2 text-slate-700">
          WSU Extension in King County says the healthiest lawns start with good soil and full sun,
          and that for new seeded lawns you should choose a lawn seed suited to the Pacific
          Northwest, such as a fine fescue and perennial ryegrass mix based on your sun conditions.
          Those are official starting points, not a promise that every Seattle-area yard should be
          the same mix. We recommend sod or turf after seeing your light, soil, and how the lawn
          will be used.
        </p>

        <h3 className="mt-5 text-xl font-semibold text-slate-900">Call 811 before digging</h3>
        <p className="mt-2 text-slate-700">
          Soil preparation can involve digging, and Washington law requires underground utilities to
          be located first. The{" "}
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
          This page is not legal advice.
        </p>

        <h3 className="mt-5 text-xl font-semibold text-slate-900">Establishment and follow-up</h3>
        <p className="mt-2 text-slate-700">
          After installation, new sod still needs regular water while it roots, as described by OSU
          Extension.{" "}
          <a
            href="https://extension.wsu.edu/king/mg-home/gardening-resources/tip-sheets/tip-sheet-3"
            className={linkClass}
            rel="noopener noreferrer"
            target="_blank"
          >
            WSU Extension in King County
          </a>{" "}
          also says to mow established grass no shorter than 2 to 3 inches and not to remove more
          than one-third of the grass leaf at any one cutting. Establishment watering and first
          mowings are discussed during the consultation. They are not automatically included in a{" "}
          <Link href="/services/lawn-care-maintenance/year-round-maintenance-plans" className={linkClass}>
            year-round maintenance plan
          </Link>{" "}
          or a scheduled mowing agreement unless that follow-up is written into the scope.
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
          Scope, sod or turf selection, timeline, and pricing are set after the free on-site
          consultation. We do not publish a standard variety list or package prices on this page.
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
          A new lawn is often paired with planting, ongoing lawn care, or a broader design-build
          project.
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
          Request a quote for sod or turf installation.
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600">
          Share a few details and we&apos;ll follow up within one business day to schedule a free
          on-site consultation.
        </p>
        <div className="mt-6">
          <EstimateForm
            variant="compact"
            source="Service: Sod and Turf Installation"
            defaultServiceInterest="sod-turf-installation"
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
