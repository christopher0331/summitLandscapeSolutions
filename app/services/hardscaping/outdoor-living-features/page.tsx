import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { EstimateForm } from "../../../components/estimate-form";

const PAGE_PATH = "/services/hardscaping/outdoor-living-features";
const CANONICAL = `https://summitlandscapesolutions.co${PAGE_PATH}`;
const linkClass =
  "font-semibold text-emerald-700 underline decoration-2 underline-offset-4 hover:text-emerald-800";

const toc = [
  { id: "includes", label: "What's Included" },
  { id: "planning", label: "Planning Your Space" },
  { id: "gallery", label: "From Our Project Archive" },
  { id: "fire-pit-zones", label: "Fire Pit Zones and Local Rules" },
  { id: "planning-notes", label: "Planning Notes" },
  { id: "faq", label: "Common Questions" },
  { id: "related", label: "Related Services" },
  { id: "estimate", label: "Request an Estimate" },
];

const relatedServices = [
  { name: "Pavers, Patios and Walkways", href: "/services/hardscaping/paver-patios-walkways" },
  { name: "Retaining Walls", href: "/services/hardscaping/retaining-walls" },
  { name: "Design-Build", href: "/services/landscaping/design-build" },
  { name: "Landscape Design", href: "/services/landscaping/landscape-design" },
  { name: "Hardscaping", href: "/services/hardscaping" },
];

const faqs = [
  {
    question: "What are outdoor living features?",
    answer:
      "Summit's outdoor living features service covers built-in seating, fire pit zones, and garden borders designed for Northwest weather. The work starts with a customized site evaluation and design guidance tailored to your property, lifestyle, and outdoor living goals. The exact scope is set after we see the site.",
  },
  {
    question: "What is included in an outdoor living project?",
    answer:
      "You get a customized site evaluation and design guidance, expert recommendations on materials, layout options, project scheduling, and transparent pricing, and professional construction focused on precision craftsmanship, functionality, and lasting performance. The visit ends with detail-driven execution, complete site cleanup, and a final walkthrough focused on quality, comfort, and satisfaction.",
  },
  {
    question: "Can I use a backyard fire pit in the Seattle area?",
    answer:
      "Sometimes. The Puget Sound Clean Air Agency says recreational fires in fire pits, fire bowls, and similar free-standing devices are allowed in both urbanized and unincorporated areas. It also says fires must not exceed three feet in diameter or two feet in height, only charcoal, dried firewood, or manufactured firelogs may be used, and recreational fires are always prohibited during air-quality burn bans and some fire safety burn bans. The City of Seattle says outdoor fires are generally prohibited in Seattle except under limited circumstances with strict fire safety requirements. Rules differ by city and fire district, so check with your local fire department before planning a fire feature.",
  },
  {
    question: "Does Summit pull the fire permit?",
    answer:
      "This page does not make permit promises. The City of Seattle's Fire Department says Fire Department permits are not required for recreational fires and portable outdoor fireplaces unless they exceed three feet in diameter and two feet in height, and that larger fires need permits from both the Puget Sound Clean Air Agency and the Seattle Fire Department. Who handles any permit or approval for your property is discussed during the free on-site consultation and written into the agreement.",
  },
  {
    question: "How is this different from a paver patio or a retaining wall?",
    answer:
      "Pavers, patios and walkways focus on the hard surfaces you walk and sit on. Retaining walls are their own service. Outdoor living features focus on the elements that make a space usable, such as built-in seating, a fire pit zone, and garden borders. Many projects combine them, and we can talk through the right mix after the free on-site consultation.",
  },
  {
    question: "Do you offer free estimates?",
    answer:
      "Yes. We provide free on-site consultations within our Burien and Seattle service area for residential and commercial projects. We evaluate your site conditions, goals, and budget before recommending a scope. Share a few details and we will follow up within one business day. Installation projects are covered by a written agreement that outlines scope, materials, timeline, and pricing.",
  },
];

export const metadata: Metadata = {
  title: "Outdoor Living Features | Summit Landscape Seattle",
  description:
    "Built-in seating, fire pit zones, and garden borders for Seattle-area yards, with site evaluation and design guidance. Learn local fire pit rules and ask for a free on-site consultation.",
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
      name: "Outdoor Living Features",
      serviceType: "Outdoor living features",
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
          name: "Outdoor Living Features",
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

export default function OutdoorLivingFeaturesPage() {
  const images = {
    hero: "/4D5D2F3B-6E57-42E6-9A7B-FA93E82718F5_4_5005_c.jpeg",
    border: "/3768CA9B-5E74-4FE3-967B-AAC1F92194C3_4_5005_c.jpeg",
    planters: "/65FC3407-D760-4963-A301-54194C7778CD_4_5005_c.jpeg",
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
            Outdoor Living Features for Seattle-Area Yards
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-slate-100">
            Summit Landscape Solutions is a Burien-based team serving South King County and Seattle.
            We design and build built-in seating, fire pit zones, and garden borders made for
            Northwest weather.
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
        <strong className="text-slate-900">Good to know:</strong> This page is about the features
        that make a yard usable: seating, a fire pit zone, and garden borders. For the hard surface
        itself, see{" "}
        <Link href="/services/hardscaping/paver-patios-walkways" className={linkClass}>
          pavers, patios and walkways
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
            <h3 className="text-lg font-semibold text-slate-900">Site evaluation and design guidance</h3>
            <p className="mt-2 text-sm text-slate-600">
              A customized look at your property, your lifestyle, and your outdoor living goals, so
              the plan fits how you actually use the yard.
            </p>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white p-5">
            <h3 className="text-lg font-semibold text-slate-900">Materials, layout, and planning</h3>
            <p className="mt-2 text-sm text-slate-600">
              Expert recommendations on materials, layout options, project scheduling, and
              transparent pricing after the free on-site consultation.
            </p>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white p-5">
            <h3 className="text-lg font-semibold text-slate-900">Professional construction</h3>
            <p className="mt-2 text-sm text-slate-600">
              Construction focused on precision craftsmanship, functionality, and lasting
              performance for built-in seating, fire pit zones, and garden borders.
            </p>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white p-5">
            <h3 className="text-lg font-semibold text-slate-900">Cleanup, walkthrough, and agreements</h3>
            <p className="mt-2 text-sm text-slate-600">
              Detail-driven execution, complete site cleanup, and a final walkthrough focused on
              quality, comfort, and satisfaction. Installation work is covered by a written
              agreement. We do not publish standard package prices on this page.
            </p>
          </article>
        </div>
      </section>

      <section id="planning" className="scroll-mt-24 mt-10 grid gap-6 md:grid-cols-2">
        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <Image
            src={images.border}
            alt="Rounded shrubs, ornamental grasses, and mulch behind a low stone wall, from a Summit Landscape project"
            width={1400}
            height={900}
            className="h-full w-full object-cover"
          />
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-2xl font-semibold text-slate-900">Planning Your Space</h2>
          <p className="mt-3 text-slate-600">
            Outdoor living features work best when they are planned around how you use the yard, not
            added one at a time. Seating, a fire pit zone, and garden borders all take up space,
            define movement through the yard, and sit next to the plants and surfaces around them.
            A site evaluation looks at those relationships before materials are chosen.
          </p>
          <p className="mt-3 text-slate-600">
            Climate is part of the plan too.{" "}
            <a
              href="https://pubs.extension.wsu.edu/product/drought-tolerant-landscaping-for-washington-state-home-garden-series/"
              className={linkClass}
              rel="noopener noreferrer"
              target="_blank"
            >
              WSU Extension
            </a>{" "}
            describes Western Washington as having wet, mild winters and dry summers, so we talk
            through seasonal use and the plantings around a built feature during the site
            evaluation. Garden borders are one way to frame a seating or fire area with plants. If you are choosing what goes in them, see{" "}
            <Link href="/services/landscaping/planting-installation" className={linkClass}>
              planting installation
            </Link>
            .
          </p>
        </article>
      </section>

      <section id="gallery" className="scroll-mt-24 mt-10">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">From Our Project Archive</h2>
        <p className="mt-3 max-w-3xl text-slate-600">
          These photos show the kinds of outdoor work Summit does across the area. They are from our
          project archive and are not before-and-after claims for a single outdoor living project.
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
              <h3 className="text-lg font-semibold text-slate-900">A defined outdoor room</h3>
              <p className="mt-2 text-sm text-slate-600">
                A patio under a screened structure shows how a surface and a built element together
                make a space for sitting. Built-in seating is planned the same way: around the
                layout and how many people the space should hold.
              </p>
            </div>
          </article>
          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <Image
              src={images.planters}
              alt="Side yard with raised planters, a gravel path, and stepping stones, from a Summit Landscape project"
              width={1200}
              height={900}
              className="h-44 w-full object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold text-slate-900">Raised beds and clear paths</h3>
              <p className="mt-2 text-sm text-slate-600">
                Raised planters, a gravel path, and stepping stones along a side yard are an example
                of how garden elements and walking routes share a narrow space.
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
              <h3 className="text-lg font-semibold text-slate-900">Borders that frame the yard</h3>
              <p className="mt-2 text-sm text-slate-600">
                Brick edging between a lawn and a planted bed is one example of a garden border.
                Border material, height, and shape are chosen after the site evaluation.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section id="fire-pit-zones" className="scroll-mt-24 mt-10 rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">Fire Pit Zones and Local Rules</h2>
        <p className="mt-3 text-slate-700">
          A fire pit zone is a planned place for a recreational fire, and the rules that apply to it
          come from public agencies, not from a landscaper. This section summarizes what those
          agencies publish. It is not legal advice, and it is not a substitute for checking with your
          local fire department.
        </p>

        <h3 className="mt-5 text-xl font-semibold text-slate-900">Regional rules from the Puget Sound Clean Air Agency</h3>
        <p className="mt-2 text-slate-700">
          The{" "}
          <a
            href="https://www.pscleanair.gov/328/Outdoor-Burning"
            className={linkClass}
            rel="noopener noreferrer"
            target="_blank"
          >
            Puget Sound Clean Air Agency
          </a>{" "}
          defines recreational fires to include fires in fire pits, fire bowls, and similar
          free-standing devices, and says they are allowed in both urbanized and unincorporated
          areas. Its rules for a recreational burn include: fires must not exceed three feet in
          diameter or two feet in height; only charcoal, dried firewood, or manufactured firelogs may
          be used; check with your local fire department regarding setback requirements; a person
          capable of extinguishing the fire must attend it at all times; permission from the
          landowner is required; and recreational fires are always prohibited during air-quality burn
          bans and some fire safety burn bans. It is always illegal to burn trash or to smoke out
          your neighbor.
        </p>

        <h3 className="mt-5 text-xl font-semibold text-slate-900">Burn bans change, so check before you light</h3>
        <p className="mt-2 text-slate-700">
          Air-quality burn bans are issued by the Puget Sound Clean Air Agency, and you can check
          the current status on its{" "}
          <a
            href="https://www.pscleanair.gov/168/Air-Quality-Burn-Ban-Status"
            className={linkClass}
            rel="noopener noreferrer"
            target="_blank"
          >
            burn ban status page
          </a>{" "}
          or by calling 800-595-4341. Fire safety burn bans are issued separately by the fire
          marshal, generally in summer, and the agency says it is not responsible for issuing or
          enforcing them. For unincorporated King County, the{" "}
          <a
            href="https://kingcounty.gov/en/dept/local-services/governance-leadership/local-government-for-unincorporated-king-county/fire-safety"
            className={linkClass}
            rel="noopener noreferrer"
            target="_blank"
          >
            King County Fire Marshal
          </a>{" "}
          says that during a Stage 2 fire safety burn ban any outdoor fire, including recreational
          fires, is prohibited. This page does not show current ban status.
        </p>

        <h3 className="mt-5 text-xl font-semibold text-slate-900">Seattle has its own requirements</h3>
        <p className="mt-2 text-slate-700">
          The Seattle Fire Department&apos;s{" "}
          <a
            href="https://www.seattle.gov/Documents/Departments/Fire/Business/CAM5022_RecreationalFires.pdf"
            className={linkClass}
            rel="noopener noreferrer"
            target="_blank"
          >
            Client Assistance Memo 5022
          </a>{" "}
          (updated October 2024) says outdoor fires are generally prohibited in the City of Seattle
          and may be allowed only in limited circumstances when strict fire safety requirements are
          met and air quality allows. It says Fire Department permits are not required for portable
          outdoor fireplaces, recreational fires, and cooking fires unless they exceed three feet in
          diameter and two feet in height, in which case permits are needed from both the Puget Sound
          Clean Air Agency and the Seattle Fire Department. It also lists conditions for
          recreational fires and for portable outdoor fireplaces, including that fire extinguishing
          equipment be readily available, that the fire be attended, and that portable outdoor
          fireplaces be used in accordance with the manufacturer&apos;s instructions and not be
          placed on a deck or balcony.
        </p>

        <h3 className="mt-5 text-xl font-semibold text-slate-900">Other cities and fire districts</h3>
        <p className="mt-2 text-slate-700">
          Cities and fire districts outside Seattle can have their own requirements, including
          setbacks. The Washington Department of Ecology{" "}
          <a
            href="https://www.ecology.wa.gov/air-climate/air-quality/smoke-fire/burn-bans"
            className={linkClass}
            rel="noopener noreferrer"
            target="_blank"
          >
            burn bans page
          </a>{" "}
          says local fire districts restrict burning in city limits and unincorporated areas, and
          that in an urban growth area you may not be allowed to have an outdoor fire at any time.
          Check with your local fire department before lighting any fire. Homeowners associations
          and building managers may have additional rules.
        </p>
      </section>

      <section id="planning-notes" className="scroll-mt-24 mt-10 rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">Planning Notes</h2>

        <h3 className="mt-5 text-xl font-semibold text-slate-900">Call 811 before digging</h3>
        <p className="mt-2 text-slate-700">
          Building seating, a fire pit zone, or a border can involve digging, and Washington law
          requires underground utilities to be located first. The{" "}
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

        <h3 className="mt-5 text-xl font-semibold text-slate-900">What this service does and does not cover</h3>
        <p className="mt-2 text-slate-700">
          The service covers built-in seating, fire pit zones, and garden borders. Retaining walls
          are a{" "}
          <Link href="/services/hardscaping/retaining-walls" className={linkClass}>
            separate service
          </Link>
          , and the paved surface under a seating area is covered under{" "}
          <Link href="/services/hardscaping/paver-patios-walkways" className={linkClass}>
            pavers, patios and walkways
          </Link>
          . The scope for your property is written into the agreement after the consultation.
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
          Scope, materials, timeline, and pricing are set after the free on-site consultation. We do
          not publish package prices on this page.
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
          Outdoor living features are often paired with a patio, planting, or a broader design-build
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
          Request a quote for outdoor living features.
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600">
          Share a few details and we&apos;ll follow up within one business day to schedule a free
          on-site consultation.
        </p>
        <div className="mt-6">
          <EstimateForm
            variant="compact"
            source="Service: Outdoor Living Features"
            defaultServiceInterest="outdoor-living-features"
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
