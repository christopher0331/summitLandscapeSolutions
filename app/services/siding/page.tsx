import type { Metadata } from "next";
import Link from "next/link";
import { EstimateForm } from "../../components/estimate-form";
import { serviceAreaSegments } from "../../lib/service-area-data";

/*
 * COPY SOURCE NOTES: every item marked PLACEHOLDER below is an assumption that
 * Christopher must confirm before this page is merged/published. Nothing here
 * states a brand, material, certification, license, warranty, price, or project count.
 *
 * PLACEHOLDER 1: Summit offers siding at all, and the scope (new installation,
 *   repair, replacement) is not stated on the existing site. Copy is kept generic.
 * PLACEHOLDER 2: Whether siding work is done by Summit crews or a partner contractor.
 * PLACEHOLDER 3: Siding is offered in every service area listed below (areas are the
 *   real ones from app/lib/service-area-data.ts; siding coverage is assumed).
 * PLACEHOLDER 4: Meta title/description wording.
 * PLACEHOLDER 5: Page placement (/services/siding as a standalone service, not inside
 *   one of the three existing categories) and the "Siding" naming.
 * PLACEHOLDER 6: "What's Included" bullets reuse the site's existing service wording
 *   (site evaluation, recommendations, transparent pricing, cleanup, walkthrough).
 * PLACEHOLDER 7: JSON-LD Service/provider fields use only the business name,
 *   phone number and areas already on the site; no ratings, reviews, or offers.
 */

const PAGE_URL = "https://summitlandscapesolutions.co/services/siding";
const SERVICE_NAME = "Siding";
const SUMMARY =
  "Siding planning and installation for Seattle-area homes, with attention to how your exterior meets the landscape around it.";

const whatsIncluded = [
  "Customized site evaluation of your home's exterior, current siding condition, and the surrounding landscape to define the right scope.",
  "Expert recommendations on siding materials, color, layout options, project scheduling, and transparent pricing.",
  "Professional work built on proper preparation and attention to moisture and drainage around the home, suited to Northwest weather.",
  "Detail-driven execution, complete site cleanup, and a final walkthrough focused on quality and satisfaction.",
];

const allAreas = serviceAreaSegments.flatMap((segment) => segment.areas);

export const metadata: Metadata = {
  title: "Siding | Summit Landscape Solutions",
  description: SUMMARY,
  alternates: {
    canonical: PAGE_URL,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: SERVICE_NAME,
  description: SUMMARY,
  url: PAGE_URL,
  provider: {
    "@type": "LocalBusiness",
    name: "Summit Landscape Solutions",
    url: "https://summitlandscapesolutions.co",
    telephone: "+12067241936",
  },
  areaServed: allAreas.map((area) => ({ "@type": "City", name: area.name })),
};

export default function SidingServicePage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav className="text-sm text-slate-500">
        <Link href="/services" className="transition hover:text-emerald-700">
          Services
        </Link>
        <span className="mx-2">/</span>
        <span>Siding</span>
      </nav>

      <p className="mt-6 text-xs font-semibold uppercase tracking-[0.34em] text-emerald-700">
        Siding
      </p>
      <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
        Siding
      </h1>
      <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-600">{SUMMARY}</p>

      <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_8px_24px_rgba(15,23,42,0.05)]">
        <h2 className="font-display text-2xl font-semibold text-slate-900">
          What&rsquo;s Included
        </h2>
        <ul className="mt-5 space-y-3">
          {whatsIncluded.map((item) => (
            <li key={item} className="flex items-start gap-3 text-slate-700">
              <span
                aria-hidden="true"
                className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600"
              />
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_8px_24px_rgba(15,23,42,0.05)]">
        <h2 className="font-display text-2xl font-semibold text-slate-900">
          Siding Planned With Your Landscape in Mind
        </h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-slate-700">
          Your siding and your yard work together. The base of the walls, nearby planting beds,
          walkways, and drainage all affect how an exterior looks and holds up season after
          season. Because landscaping is what we do, we look at siding as one part of the whole
          property rather than a project that stops at the wall.
        </p>
      </section>

      <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_8px_24px_rgba(15,23,42,0.05)]">
        <h2 className="font-display text-2xl font-semibold text-slate-900">Areas We Serve</h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-slate-700">
          We work with homeowners across Seattle and the neighborhoods and cities just south of
          it. Visit your area page to see what we do near you.
        </p>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {serviceAreaSegments.map((segment) => (
            <div key={segment.name}>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700">
                {segment.name}
              </p>
              <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
                {segment.areas.map((area) => (
                  <li key={area.slug}>
                    <Link
                      href={`/service-areas/${area.slug}`}
                      className="text-sm text-slate-600 transition hover:text-emerald-700"
                    >
                      {area.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section
        id="estimate"
        className="mt-10 rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_8px_24px_rgba(15,23,42,0.05)] md:p-8"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.34em] text-emerald-700">
          Free Estimate
        </p>
        <h2 className="mt-3 font-display text-2xl font-semibold text-slate-900">
          Request a quote for siding.
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600">
          Share a few details and we&rsquo;ll follow up within one business day to schedule a
          free on-site consultation.
        </p>
        <div className="mt-6">
          <EstimateForm
            variant="compact"
            source="Service: Siding"
            defaultServiceInterest="siding"
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
