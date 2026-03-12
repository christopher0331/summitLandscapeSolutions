import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const neighborhoods = [
  {
    name: "Madrona Village",
    description:
      "Front-facing homes and boutique properties where polished curb appeal and seasonal color are key.",
  },
  {
    name: "Leschi Border",
    description:
      "Mixed-slope lots that benefit from erosion-aware planting and drainage-conscious hardscape.",
  },
  {
    name: "Denny-Blaine Edge",
    description:
      "Mature landscapes that need careful pruning, soil health planning, and clean long-term upkeep.",
  },
  {
    name: "Madrona Park Area",
    description:
      "Tree-rich blocks where shade-tolerant lawns and low-maintenance beds perform best.",
  },
  {
    name: "Lake Washington Bluff Streets",
    description:
      "Elevated properties requiring stable pathway transitions and durable retaining features.",
  },
  {
    name: "East Cherry Corridor",
    description:
      "Urban residential lots that need efficient layouts and practical, tidy outdoor upgrades.",
  },
];

const landmarks = [
  "Madrona Park",
  "Madrona Beach",
  "34th Ave Streetscape",
  "Lake Washington Blvd E",
  "Madrona Playground",
];

const zipCodes = ["98122", "98112"];

const localChallenges = [
  "Hillside and bluff-adjacent lots can create runoff and stability issues.",
  "Dense canopy and mature trees can stress turf and increase moss pressure.",
  "Aging pathways and borders often need structural and visual refreshes.",
  "Tight urban access can complicate equipment movement and staging.",
  "High-end curb appeal expectations require detail-focused finishes.",
];

const localSolutions = [
  "Drainage-first planning with grading and erosion-aware bed design.",
  "Shade-adapted turf and plant selections for long-term health.",
  "Hardscape upgrades with durable materials and safer transitions.",
  "Urban-lot project sequencing to reduce disruption and improve efficiency.",
  "Scheduled maintenance plans to keep properties sharp year-round.",
];

export const metadata: Metadata = {
  title: "Madrona Landscaping Services | Summit Landscape Seattle",
  description:
    "Professional lawn care, hardscaping, and landscaping in Madrona, Seattle. Serving Madrona Village, Leschi border, and nearby neighborhoods.",
  alternates: {
    canonical: "https://www.summitlandscapeseattle.com/service-areas/madrona",
  },
};

export default function MadronaPage() {
  const images = {
    hero: "/3768CA9B-5E74-4FE3-967B-AAC1F92194C3_4_5005_c.jpeg",
    lawn: "/0DA44278-D1DC-4678-933D-AF3D8B1937A0_4_5005_c.jpeg",
    hardscape: "/4D5D2F3B-6E57-42E6-9A7B-FA93E82718F5_4_5005_c.jpeg",
    landscape: "/624D1698-E0BC-4CA3-802D-C4DE71EC7663_4_5005_c.jpeg",
    climate: "/EAEFD167-AD6E-4835-9694-BF52449CD6E8_4_5005_c.jpeg",
    galleryOne: "/B1FA1828-AF67-4EB1-93B5-1BB774092C1C_4_5005_c.jpeg",
    galleryTwo: "/DB20E9B0-564F-4DA0-B503-1D90AFA81BE6_4_5005_c.jpeg",
    galleryThree: "/65FC3407-D760-4963-A301-54194C7778CD_4_5005_c.jpeg",
    galleryFour: "/683CEB00-4CAA-4577-AFCA-B31BBCCE1151_4_5005_c.jpeg",
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
          alt="Madrona landscaping with structured shrub beds"
          fill
          priority
          className="object-cover"
          sizes="(min-width: 1024px) 1200px, 100vw"
        />
        <div className="absolute inset-0 bg-slate-900/55" />
        <div className="relative min-h-[440px] p-8 md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">
            Serving Madrona, Seattle
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-white md:text-5xl">
            Madrona Landscaping for Hillside Lots and High-Detail Curb Appeal
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-slate-100">
            Summit Landscape provides lawn care and maintenance, hardscaping, and full
            landscaping services in Madrona with practical planning for mature trees,
            elevation changes, and Seattle weather.
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
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">Services in Madrona</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <Image
              src={images.lawn}
              alt="Madrona lawn maintenance and edging detail"
              width={1200}
              height={900}
              className="h-48 w-full object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold text-slate-900">Lawn Care and Maintenance</h3>
              <p className="mt-2 text-sm text-slate-600">
                Scheduled lawn mowing, fertilization and weed control, aeration, overseeding,
                and seasonal cleanups.
              </p>
            </div>
          </article>
          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <Image
              src={images.hardscape}
              alt="Madrona hardscape installation with modern outdoor surfaces"
              width={1200}
              height={900}
              className="h-48 w-full object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold text-slate-900">Hardscaping</h3>
              <p className="mt-2 text-sm text-slate-600">
                Paver patios and walkways, retaining walls, and outdoor living features
                designed for grade and drainage performance.
              </p>
            </div>
          </article>
          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <Image
              src={images.landscape}
              alt="Landscape bed refresh and structured planting in Seattle"
              width={1200}
              height={900}
              className="h-48 w-full object-cover"
            />
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
            Madrona projects often combine canopy shade, elevation changes, and moisture-heavy
            winters. We plan landscapes to improve drainage, reduce maintenance burden, and
            preserve visual quality through all seasons.
          </p>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-2xl font-semibold text-slate-900">Why Homeowners Choose Us</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
            <li>Reliable schedules and clear communication</li>
            <li>Seattle-specific material and plant recommendations</li>
            <li>Clean, detail-oriented finishes</li>
            <li>Flexible plans for recurring and one-time needs</li>
          </ul>
        </article>
      </section>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <Image
            src={images.climate}
            alt="Madrona low-maintenance gravel and tree-bed landscaping"
            width={1400}
            height={900}
            className="h-full w-full object-cover"
          />
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-2xl font-semibold text-slate-900">Recent Madrona Work</h2>
          <p className="mt-3 text-slate-600">
            We help Madrona property owners improve walkability, upgrade old borders, and
            refresh lawns and beds for cleaner, more functional outdoor living spaces.
          </p>
          <p className="mt-3 text-slate-600">
            The project images below represent typical work across compact urban lots and
            hillside-adjacent properties.
          </p>
        </article>
      </section>

      <section className="mt-10">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">Project Highlights</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <Image
              src={images.galleryOne}
              alt="Side yard prepared for hardscape and drainage improvements"
              width={1200}
              height={900}
              className="h-44 w-full object-cover"
            />
          </article>
          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <Image
              src={images.galleryTwo}
              alt="Path and planting cleanup detail"
              width={1200}
              height={900}
              className="h-44 w-full object-cover"
            />
          </article>
          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <Image
              src={images.galleryThree}
              alt="Narrow side-lot hardscape and landscape transition area"
              width={1200}
              height={900}
              className="h-44 w-full object-cover"
            />
          </article>
          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <Image
              src={images.galleryFour}
              alt="Fence and edge-zone project before final landscape finish"
              width={1200}
              height={900}
              className="h-44 w-full object-cover"
            />
          </article>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">
          Neighborhoods and Areas We Serve in Madrona
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
                <span
                  key={landmark}
                  className="rounded-full border border-slate-200 px-3 py-1 text-sm text-slate-700"
                >
                  {landmark}
                </span>
              ))}
            </div>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white p-5">
            <h3 className="text-lg font-semibold text-slate-900">ZIP Codes</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {zipCodes.map((zipCode) => (
                <span
                  key={zipCode}
                  className="rounded-full border border-slate-200 px-3 py-1 text-sm text-slate-700"
                >
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
          Madrona Landscape Planning Notes
        </h2>
        <h3 className="mt-5 text-xl font-semibold text-slate-900">
          Why planning differs in Madrona
        </h3>
        <p className="mt-2 text-slate-700">
          Madrona lots frequently combine elevation changes, mature vegetation, and high
          visibility. Thoughtful planning helps balance runoff, layout functionality, and
          strong curb appeal.
        </p>

        <h3 className="mt-5 text-xl font-semibold text-slate-900">
          Permits, utilities, and property lines
        </h3>
        <p className="mt-2 text-slate-700">
          Structural hardscape and major site modifications may require permit review and
          utility coordination. Confirm requirements with the City of Seattle and verify lot
          boundaries before beginning construction.
        </p>

        <div className="mt-5 rounded-xl bg-slate-50 p-4 text-sm text-slate-600">
          Local requirements may change. Always verify current standards with the City of
          Seattle and any HOA/property management rules before project kickoff.
        </div>
      </section>

      <section className="mt-10 rounded-2xl bg-slate-900 p-6 text-white">
        <h2 className="text-2xl font-semibold">Request a Free Madrona Estimate</h2>
        <p className="mt-3 max-w-3xl text-slate-300">
          Tell us about your goals and timeline, and we&apos;ll provide a clear recommendation
          and transparent quote for your Madrona property.
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
