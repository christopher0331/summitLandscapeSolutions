import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const neighborhoods = [
  {
    name: "Old Ballard",
    description:
      "Historic residential blocks where clean curb appeal and durable updates matter year-round.",
  },
  {
    name: "Sunset Hill",
    description:
      "Elevated lots with wind and moisture exposure that benefit from resilient plant and material choices.",
  },
  {
    name: "Loyal Heights",
    description:
      "Family-oriented homes where functional lawns, safe walkways, and tidy maintenance plans are priorities.",
  },
  {
    name: "Whittier Heights",
    description:
      "Mixed-elevation parcels that often need better drainage flow and hardscape transitions.",
  },
  {
    name: "Adams",
    description:
      "Dense urban parcels where compact design and low-maintenance landscape solutions perform best.",
  },
  {
    name: "Central Ballard",
    description:
      "High-visibility properties that need consistent upkeep and sharp finishes.",
  },
];

const landmarks = [
  "Ballard Locks",
  "Golden Gardens access corridor",
  "Market Street",
  "Ballard Commons Park",
  "NW 65th Street corridor",
];

const zipCodes = ["98107", "98117"];

const localChallenges = [
  "Marine-influenced weather can stress turf and planting zones.",
  "Older yards often have compacted soils and uneven drainage.",
  "Tight side yards limit access for material and equipment movement.",
  "Mixed-grade lots need safer path and border transitions.",
  "Street-facing properties require consistent visual quality.",
];

const localSolutions = [
  "Site-specific plant and turf selections for coastal Seattle conditions.",
  "Soil conditioning and drainage-aware landscape planning.",
  "Efficient urban-lot project sequencing and staging.",
  "Hardscape upgrades for safe, durable circulation paths.",
  "Recurring maintenance plans to keep properties polished.",
];

export const metadata: Metadata = {
  title: "Ballard Landscaping Services | Summit Landscape Seattle",
  description:
    "Professional lawn care, hardscaping, and landscaping in Ballard, Seattle. Serving Old Ballard, Sunset Hill, Loyal Heights, and nearby neighborhoods.",
  alternates: {
    canonical: "https://www.summitlandscapeseattle.com/service-areas/ballard",
  },
};

export default function BallardPage() {
  const images = {
    hero: "/EAEFD167-AD6E-4835-9694-BF52449CD6E8_4_5005_c.jpeg",
    lawn: "/0DA44278-D1DC-4678-933D-AF3D8B1937A0_4_5005_c.jpeg",
    hardscape: "/A605D748-7858-41E4-8188-1875D37A5CCE_4_5005_c.jpeg",
    landscape: "/3768CA9B-5E74-4FE3-967B-AAC1F92194C3_4_5005_c.jpeg",
    climate: "/624D1698-E0BC-4CA3-802D-C4DE71EC7663_4_5005_c.jpeg",
    galleryOne: "/4896C48A-6D93-4922-B942-AD80990B9468_4_5005_c.jpeg",
    galleryTwo: "/5DB5FC7B-16D7-4453-AA97-D675E050233A_4_5005_c.jpeg",
    galleryThree: "/683CEB00-4CAA-4577-AFCA-B31BBCCE1151_4_5005_c.jpeg",
    galleryFour: "/9301EC92-9FEA-42B0-970D-E9B2CB597427_4_5005_c.jpeg",
  };

  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16">
      <nav className="text-sm text-slate-500">
        <Link href="/service-areas" className="transition hover:text-slate-700">
          Service Areas
        </Link>
      </nav>

      <section className="relative mt-4 isolate overflow-hidden rounded-3xl border border-slate-200">
        <Image
          src={images.hero}
          alt="Ballard low-maintenance yard and gravel landscape upgrade"
          fill
          priority
          className="object-cover"
          sizes="(min-width: 1024px) 1200px, 100vw"
        />
        <div className="absolute inset-0 bg-slate-900/55" />
        <div className="relative min-h-[440px] p-8 md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">
            Serving Ballard, Seattle
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-white md:text-5xl">
            Ballard Landscaping Built for Coastal Weather and Urban Lots
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-slate-100">
            Summit Landscape delivers lawn care and maintenance, hardscaping, and complete
            landscaping across Ballard with practical planning for drainage, durability, and
            strong curb appeal.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-full bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-700"
            >
              Get Free Quote
            </Link>
            <Link
              href="/services"
              className="rounded-full border border-white/50 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">Services in Ballard</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <Image src={images.lawn} alt="Ballard lawn maintenance detail" width={1200} height={900} className="h-48 w-full object-cover" />
            <div className="p-5">
              <h3 className="text-lg font-semibold text-slate-900">Lawn Care and Maintenance</h3>
              <p className="mt-2 text-sm text-slate-600">
                Scheduled lawn mowing, fertilization and weed control, aeration, overseeding,
                and seasonal cleanups.
              </p>
            </div>
          </article>
          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <Image src={images.hardscape} alt="Ballard hardscape and retaining feature work" width={1200} height={900} className="h-48 w-full object-cover" />
            <div className="p-5">
              <h3 className="text-lg font-semibold text-slate-900">Hardscaping</h3>
              <p className="mt-2 text-sm text-slate-600">
                Paver patios and walkways, retaining walls, and outdoor living features
                designed for grade and drainage performance.
              </p>
            </div>
          </article>
          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <Image src={images.landscape} alt="Ballard landscape planting and bed installation" width={1200} height={900} className="h-48 w-full object-cover" />
            <div className="p-5">
              <h3 className="text-lg font-semibold text-slate-900">Landscaping</h3>
              <p className="mt-2 text-sm text-slate-600">
                Landscape design, planting installation, and turf installation tailored to your
                lot conditions and maintenance goals.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <article className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-2xl font-semibold text-slate-900">Local Climate Expertise</h2>
          <p className="mt-3 text-slate-600">
            Ballard properties see seasonal moisture, wind exposure, and mixed sun patterns.
            We plan around those conditions so landscapes look better and last longer.
          </p>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-2xl font-semibold text-slate-900">Why Homeowners Choose Us</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
            <li>Dependable communication and scheduling</li>
            <li>Seattle-tested recommendations and workmanship</li>
            <li>Clean project execution from start to finish</li>
            <li>Flexible options for recurring and one-time work</li>
          </ul>
        </article>
      </section>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <Image src={images.climate} alt="Ballard garden bed with climate-resilient plantings" width={1400} height={900} className="h-full w-full object-cover" />
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-2xl font-semibold text-slate-900">Recent Ballard Work</h2>
          <p className="mt-3 text-slate-600">
            We regularly complete lawn and bed refreshes, hardscape updates, and cleanup
            projects across Ballard&apos;s older and newer residential blocks.
          </p>
          <p className="mt-3 text-slate-600">
            These project photos reflect common improvement types we deliver in this area.
          </p>
        </article>
      </section>

      <section className="mt-10">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">Project Highlights</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <Image src={images.galleryOne} alt="Landscape prep before installation" width={1200} height={900} className="h-44 w-full object-cover" />
          </article>
          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <Image src={images.galleryTwo} alt="Path and bed cleanup work in progress" width={1200} height={900} className="h-44 w-full object-cover" />
          </article>
          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <Image src={images.galleryThree} alt="Backyard fence and hardscape project detail" width={1200} height={900} className="h-44 w-full object-cover" />
          </article>
          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <Image src={images.galleryFour} alt="Street-facing landscape and mulch refresh" width={1200} height={900} className="h-44 w-full object-cover" />
          </article>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">
          Neighborhoods and Areas We Serve in Ballard
        </h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {neighborhoods.map((neighborhood) => (
            <article key={neighborhood.name} className="rounded-2xl border border-slate-200 bg-white p-5">
              <h3 className="text-lg font-semibold text-slate-900">{neighborhood.name}</h3>
              <p className="mt-2 text-sm text-slate-600">{neighborhood.description}</p>
            </article>
          ))}
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-slate-200 bg-white p-5">
            <h3 className="text-lg font-semibold text-slate-900">Serving Properties Near</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {landmarks.map((landmark) => (
                <span key={landmark} className="rounded-full border border-slate-200 px-3 py-1 text-sm text-slate-700">
                  {landmark}
                </span>
              ))}
            </div>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white p-5">
            <h3 className="text-lg font-semibold text-slate-900">ZIP Codes</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {zipCodes.map((zipCode) => (
                <span key={zipCode} className="rounded-full border border-slate-200 px-3 py-1 text-sm text-slate-700">
                  {zipCode}
                </span>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <article className="rounded-2xl border border-rose-100 bg-rose-50 p-6">
          <h2 className="text-2xl font-semibold text-slate-900">Local Challenges</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
            {localChallenges.map((challenge) => (
              <li key={challenge}>{challenge}</li>
            ))}
          </ul>
        </article>
        <article className="rounded-2xl border border-emerald-100 bg-emerald-50 p-6">
          <h2 className="text-2xl font-semibold text-slate-900">Our Solutions</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
            {localSolutions.map((solution) => (
              <li key={solution}>{solution}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">
          Ballard Landscape Planning Notes
        </h2>
        <h3 className="mt-5 text-xl font-semibold text-slate-900">Why planning differs in Ballard</h3>
        <p className="mt-2 text-slate-700">
          Ballard combines older infrastructure, dense residential patterns, and coastal weather
          exposure. Good planning balances durability, drainage, and clean visual finish.
        </p>

        <h3 className="mt-5 text-xl font-semibold text-slate-900">Permits, utilities, and property lines</h3>
        <p className="mt-2 text-slate-700">
          Major hardscape and structural landscape projects may require permit review and utility
          checks. Confirm requirements with the City of Seattle and verify boundaries before work.
        </p>

        <div className="mt-5 rounded-xl bg-slate-50 p-4 text-sm text-slate-600">
          Requirements can change over time. Always verify current standards with the City of
          Seattle and any HOA or property management rules.
        </div>
      </section>

      <section className="mt-10 rounded-2xl bg-slate-900 p-6 text-white">
        <h2 className="text-2xl font-semibold">Request a Free Ballard Estimate</h2>
        <p className="mt-3 max-w-3xl text-slate-300">
          Share your project goals and timeline, and we&apos;ll provide a detailed recommendation
          and transparent quote for your Ballard property.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-block rounded-full bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-100"
        >
          Start Your Estimate
        </Link>
      </section>
    </div>
  );
}
