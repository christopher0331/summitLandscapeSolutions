import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import { EstimateForm } from "../estimate-form";
import type { ServiceAreaPageContent } from "../../lib/service-area-page-types";
import { AboutTheArea } from "./about-the-area";
import { ArticleToc } from "./article-toc";
import { FeaturedProject } from "./featured-project";
import { NeighborhoodFaqSection } from "./faq-section";
import { ServiceAreaPhotoGallery } from "./photo-gallery";
import {
  TRUST_ITEMS,
  backLinkClass,
  callButtonClass,
  quoteButtonClass,
  textLinkClass,
  PHONE_DISPLAY,
  PHONE_HREF,
} from "./site-copy";
import { buildAreaStructuredData } from "./structured-data";

const tocItems = [
  { href: "#intro", label: "About the work" },
  { href: "#why-choose", label: "Why choose us" },
  { href: "#recent-projects", label: "Project photos" },
  { href: "#featured-project", label: "Featured project" },
  { href: "#local-considerations", label: "Local considerations" },
  { href: "#estimates", label: "How estimates work" },
  { href: "#services", label: "Services" },
  { href: "#request-quote", label: "Request a quote" },
  { href: "#process", label: "Our process" },
  { href: "#about-the-area", label: "About the area" },
  { href: "#nearby", label: "Nearby areas" },
  { href: "#get-started", label: "Get started" },
  { href: "#faqs", label: "FAQs" },
];

export function ServiceAreaTemplate({ content }: { content: ServiceAreaPageContent }) {
  const structuredData = buildAreaStructuredData(content);
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(content.mapQuery)}&z=13&output=embed`;

  return (
    <main className="bg-white text-slate-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* 1. Hero */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:py-16">
          <div>
            <Link href="/service-areas" className={backLinkClass}>
              ← All service areas
            </Link>
            <p className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-emerald-800">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              {content.servingLine}
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              {content.h1}
            </h1>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-700">
              {content.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={PHONE_HREF} className={callButtonClass}>
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call {PHONE_DISPLAY}
              </a>
              <Link href="#request-quote" className={quoteButtonClass}>
                Request a quote
              </Link>
            </div>
          </div>
          <div className="min-h-[280px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <iframe
              title={`Map of ${content.name}`}
              src={mapSrc}
              className="h-full min-h-[280px] w-full border-0 lg:min-h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* 2. Trust strip */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TRUST_ITEMS.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-base font-semibold text-slate-900">{item.title}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <ArticleToc items={tocItems} />
          </div>
        </div>
      </section>

      {/* 3. Intro */}
      <section id="intro" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">
          {content.introHeading}
        </h2>
        {content.intro.map((paragraph) => (
          <p key={paragraph.slice(0, 48)} className="mt-4 max-w-3xl text-base leading-7 text-slate-700">
            {paragraph}
          </p>
        ))}
      </section>

      {/* 4. Why Choose Us */}
      <section id="why-choose" className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            {content.whyHeading}
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {content.whyCards.map((card) => (
              <article
                key={card.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-slate-900">{card.title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-700">{card.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Reviews omitted: Summit has no live review feed. */}

      {/* 6. Recent projects gallery */}
      <ServiceAreaPhotoGallery
        heading={content.galleryHeading}
        intro={content.galleryIntro}
        photos={content.gallery}
      />

      {/* 7. Featured project */}
      <FeaturedProject project={content.featured} />

      {/* 8. Local considerations */}
      <section id="local-considerations" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">
          {content.considerationsHeading}
        </h2>
        <div className="mt-8 space-y-8">
          {content.considerations.map((item) => (
            <div key={item.heading}>
              <h3 className="text-xl font-semibold text-slate-900">{item.heading}</h3>
              <p className="mt-3 max-w-3xl text-base leading-7 text-slate-700">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 9. How estimates work (replaces pricing) */}
      <section id="estimates" className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            {content.estimatesHeading}
          </h2>
          {content.estimatesBody.map((paragraph) => (
            <p
              key={paragraph.slice(0, 48)}
              className="mt-4 max-w-3xl text-base leading-7 text-slate-700"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* 10. Service cards */}
      <section id="services" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">
          {content.servicesHeading}
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {content.services.map((card) => (
            <article
              key={card.href}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-slate-900">{card.title}</h3>
              <p className="mt-3 flex-1 text-base leading-7 text-slate-700">{card.body}</p>
              <p className="mt-5">
                <Link href={card.href} className={textLinkClass}>
                  Learn more about {card.title.toLowerCase()}
                </Link>
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* 11. Quote tool / CTA */}
      <section id="request-quote" className="bg-emerald-700 text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">{content.quoteHeading}</h2>
            <p className="mt-4 text-base leading-7 text-emerald-50">{content.quoteBody}</p>
            <p className="mt-6">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-2 font-semibold text-white underline decoration-2 underline-offset-4 hover:text-emerald-100"
              >
                Or call {PHONE_DISPLAY}
              </a>
            </p>
          </div>
          <div className="rounded-2xl bg-white p-6 text-slate-800 shadow-sm">
            <EstimateForm variant="compact" source={`Service area: ${content.name}`} />
          </div>
        </div>
      </section>

      {/* 12. 5-step process */}
      <section id="process" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">
          {content.processHeading}
        </h2>
        <ol className="mt-8 grid gap-6 md:grid-cols-5">
          {content.process.map((step, index) => (
            <li
              key={step.title}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <p className="text-sm font-semibold text-emerald-700">Step {index + 1}</p>
              <h3 className="mt-2 text-lg font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{step.body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* 13. About the area (full-width; not inside a tighter wrapper) */}
      <AboutTheArea
        areaName={content.name}
        intro={content.aboutIntro}
        attractions={content.attractions}
        localLivingIntro={content.localLivingIntro}
        localLivingLinks={content.localLivingLinks}
      />

      {/* 14. Nearby areas */}
      <section id="nearby" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">
          {content.nearbyHeading}
        </h2>
        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {content.nearby.map((area) => (
            <li
              key={area.href}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <Link href={area.href} className={textLinkClass}>
                {area.name}
              </Link>
              <p className="mt-2 text-sm leading-6 text-slate-600">{area.blurb}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* 15. Final CTA */}
      <section id="get-started" className="bg-slate-900 text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="text-3xl font-bold tracking-tight">{content.finalCtaHeading}</h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-200">
            {content.finalCtaBody}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="#request-quote"
              className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100"
            >
              Request a quote
            </Link>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center rounded-full border border-white px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
            >
              Call {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      <NeighborhoodFaqSection faqs={content.faqs} />
    </main>
  );
}
