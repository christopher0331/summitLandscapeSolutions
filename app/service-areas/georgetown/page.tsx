import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const neighborhoods = [
  {
    name: "Airport Way South Corridor",
    description:
      "Georgetown's main street, where older storefronts and nearby homes benefit from tidy beds, clean edges, and regular cleanup.",
  },
  {
    name: "Residential Pocket",
    description:
      "The small cluster of older homes near Georgetown Playfield, where compact lots need a lawn, beds, and usable space to fit together.",
  },
  {
    name: "Near Oxbow Park",
    description:
      "Blocks around the park on Corson Avenue South, where small front yards and planting strips set the look of the street.",
  },
  {
    name: "Industrial and Live-Work Edges",
    description:
      "Mixed commercial and residential frontages where durable materials and scheduled upkeep keep entries presentable.",
  },
  {
    name: "Boeing Field Side",
    description:
      "Properties toward King County International Airport that benefit from screening plants and simple, low-upkeep layouts.",
  },
  {
    name: "Duwamish Side",
    description:
      "Low, flat blocks toward the river where slow-draining ground shapes what will grow and what needs regrading.",
  },
];

const landmarks = [
  "Airport Way South",
  "Georgetown Steam Plant",
  "Oxbow Park",
  "Georgetown Playfield",
  "King County International Airport (Boeing Field)",
  "Duwamish River",
];

const zipCodes = ["98108"];

const nearbyAreas = [
  { name: "South Park", href: "/service-areas/south-park" },
  { name: "Beacon Hill", href: "/service-areas/beacon-hill" },
  { name: "Tukwila", href: "/service-areas/tukwila" },
  { name: "West Seattle", href: "/service-areas/west-seattle" },
  { name: "Rainier Valley", href: "/service-areas/rainier-valley" },
];

const localChallenges = [
  "Flat, low-lying ground near the Duwamish can drain slowly in the rainy season.",
  "Older lots often have compacted soil or fill that stresses lawn and plant roots.",
  "Small lots leave little room for both a lawn and outdoor living space.",
  "Frontages along busy streets collect debris and need frequent cleanup.",
  "Older paths, fences, and edges often need grade and edging repairs.",
];

const localSolutions = [
  "Drainage-aware grading, bed shaping, and plants that tolerate wet roots.",
  "Aeration, overseeding, and soil improvement for thin or compacted lawns.",
  "Compact landscape designs that fit planting, lawn, and a patio on one lot.",
  "Seasonal cleanups and scheduled maintenance for street-facing frontages.",
  "Paver walkways and low retaining edges to fix uneven, muddy transitions.",
];

export const metadata: Metadata = {
  title: "Georgetown Seattle Landscaping & Yard Care | Summit Landscape Seattle",
  description:
    "Landscaping, lawn care, and hardscaping for Georgetown, Seattle homes and frontages near Airport Way S, from small-lot designs to drainage fixes and upkeep.",
  alternates: {
    canonical: "https://summitlandscapesolutions.co/service-areas/georgetown",
  },
};

export default function GeorgetownPage() {
  const images = {
    hero: "/B4DDFA50-F2E8-4966-AFFE-B2F0EDC6D2F5_4_5005_c.jpeg",
    lawn: "/0DA44278-D1DC-4678-933D-AF3D8B1937A0_4_5005_c.jpeg",
    hardscape: "/4D5D2F3B-6E57-42E6-9A7B-FA93E82718F5_4_5005_c.jpeg",
    landscape: "/DBD0E05B-1793-4CEA-A076-0986C169C3BC_4_5005_c.jpeg",
    climate: "/65FC3407-D760-4963-A301-54194C7778CD_4_5005_c.jpeg",
    galleryOne: "/DB20E9B0-564F-4DA0-B503-1D90AFA81BE6_4_5005_c.jpeg",
    galleryTwo: "/65BF4200-40C6-4125-B45A-ADE955764213_4_5005_c.jpeg",
    galleryThree: "/B1FA1828-AF67-4EB1-93B5-1BB774092C1C_4_5005_c.jpeg",
    galleryFour: "/7C24356D-9FE0-40DB-B82B-09308E100B2E_4_5005_c.jpeg",
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
          alt="Gravel backyard with mature trees and mulched planting beds"
          fill
          priority
          className="object-cover"
          sizes="(min-width: 1024px) 1200px, 100vw"
        />
        <div className="absolute inset-0 bg-slate-900/55" />
        <div className="relative min-h-[440px] p-8 md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">
            Serving Georgetown, Seattle
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-white md:text-5xl">
            Georgetown Landscaping for Older Homes and Compact Seattle Yards
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-slate-100">
            Georgetown is one of Seattle&apos;s oldest neighborhoods, a short drive from our Burien
            base. We offer lawn care and maintenance, hardscaping, and landscaping for Georgetown
            homes and frontages, with plans that make the most of smaller lots.
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
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">Services in Georgetown</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <Image src={images.lawn} alt="Fresh sod lawn with brick edging beside a planting bed" width={1200} height={900} className="h-48 w-full object-cover" />
            <div className="p-5">
              <h3 className="text-lg font-semibold text-slate-900">Lawn Care and Maintenance</h3>
              <p className="mt-2 text-sm text-slate-600">
                Scheduled lawn care, fertilization and weed control, aeration and overseeding,
                and seasonal yard cleanups for Georgetown yards.
              </p>
              <Link
                href="/services/lawn-care-maintenance"
                className="mt-3 inline-block text-sm font-semibold text-emerald-700 transition hover:text-emerald-800"
              >
                Lawn care services
              </Link>
            </div>
          </article>
          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <Image src={images.hardscape} alt="Paver surface with a wood privacy screen" width={1200} height={900} className="h-48 w-full object-cover" />
            <div className="p-5">
              <h3 className="text-lg font-semibold text-slate-900">Hardscaping</h3>
              <p className="mt-2 text-sm text-slate-600">
                Pavers, patios and walkways, retaining walls, and outdoor living features
                that help firm up soggy, uneven ground.
              </p>
              <Link
                href="/services/hardscaping"
                className="mt-3 inline-block text-sm font-semibold text-emerald-700 transition hover:text-emerald-800"
              >
                Hardscaping services
              </Link>
            </div>
          </article>
          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <Image src={images.landscape} alt="Flowering hydrangea bed beside a lawn" width={1200} height={900} className="h-48 w-full object-cover" />
            <div className="p-5">
              <h3 className="text-lg font-semibold text-slate-900">Landscaping</h3>
              <p className="mt-2 text-sm text-slate-600">
                Landscape design, planting installation, and sod and turf installation matched
                to wet soils, tight spaces, and how much upkeep you want.
              </p>
              <Link
                href="/services/landscaping"
                className="mt-3 inline-block text-sm font-semibold text-emerald-700 transition hover:text-emerald-800"
              >
                Landscaping services
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <article className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-2xl font-semibold text-slate-900">Planning for Georgetown Conditions</h2>
          <p className="mt-3 text-slate-600">
            Georgetown mixes older homes with industrial and commercial blocks, and much of the
            ground is flat. Before recommending a scope, we check where water collects, how the
            lot is used day to day, and how much space there is to work with.
          </p>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-2xl font-semibold text-slate-900">Why Work With Summit</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
            <li>Based in nearby Burien</li>
            <li>Free on-site consultations: contact us to confirm availability for your property</li>
            <li>Practical recommendations on scope, materials, and upkeep</li>
            <li>Options for recurring maintenance or one-time projects</li>
          </ul>
        </article>
      </section>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <Image src={images.climate} alt="Side yard with a gravel path, stepping pavers, and raised planter beds" width={1400} height={900} className="h-full w-full object-cover" />
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-2xl font-semibold text-slate-900">Typical Georgetown Projects</h2>
          <p className="mt-3 text-slate-600">
            Projects that fit Georgetown well include regrading and replanting soggy areas,
            turning a worn front lawn into planted beds, adding a paver path or small patio,
            and setting up regular upkeep for homes and storefronts.
          </p>
          <p className="mt-3 text-slate-600">
            The photos below are examples of the kinds of work Summit does across the area.
          </p>
        </article>
      </section>

      <section className="mt-10">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">Project Photos</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <Image src={images.galleryOne} alt="Mulched bed along a fence and sidewalk" width={1200} height={900} className="h-44 w-full object-cover" />
          </article>
          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <Image src={images.galleryTwo} alt="Curbside planting strip prepared with edging" width={1200} height={900} className="h-44 w-full object-cover" />
          </article>
          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <Image src={images.galleryThree} alt="Side yard with a new fence and mulched strip" width={1200} height={900} className="h-44 w-full object-cover" />
          </article>
          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <Image src={images.galleryFour} alt="Driveway frontage with a trimmed hedge" width={1200} height={900} className="h-44 w-full object-cover" />
          </article>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">
          Parts of Georgetown We Serve
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
          Georgetown Landscape Planning Notes
        </h2>
        <h3 className="mt-5 text-xl font-semibold text-slate-900">Make a small lot work harder</h3>
        <p className="mt-2 text-slate-700">
          Many Georgetown yards are compact. A clear layout, a few well-placed beds, and a
          durable path or patio often do more than a large lawn. On flat ground, grading away
          from the house and using permeable surfaces help the yard hold up through the rainy
          season.
        </p>

        <h3 className="mt-5 text-xl font-semibold text-slate-900">Permits, utilities, and property lines</h3>
        <p className="mt-2 text-slate-700">
          Larger hardscape and retaining wall projects may require permit review and a utility
          locate. Confirm requirements with the City of Seattle and verify your property
          boundaries before work begins.
        </p>

        <div className="mt-5 rounded-xl bg-slate-50 p-4 text-sm text-slate-600">
          Requirements can change over time. Always verify current standards with the City of
          Seattle and any HOA or property management rules.
        </div>
      </section>

      <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-2xl font-semibold text-slate-900">Nearby Service Areas</h2>
        <p className="mt-3 text-slate-600">
          Georgetown is close to several other areas we serve. Take a look at their pages too.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          {nearbyAreas.map((area) => (
            <Link
              key={area.href}
              href={area.href}
              className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-emerald-700 hover:text-emerald-700"
            >
              {area.name}
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-10 rounded-2xl bg-slate-900 p-6 text-white">
        <h2 className="text-2xl font-semibold">Request a Free Georgetown Estimate</h2>
        <p className="mt-3 max-w-3xl text-slate-300">
          Tell us about your Georgetown property and what you&apos;d like to change, and we&apos;ll
          follow up with a recommendation and a clear quote.
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
