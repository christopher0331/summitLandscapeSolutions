import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const neighborhoods = [
  {
    name: "Tukwila Urban Center",
    description:
      "Mixed-use areas where clean curb appeal and low-maintenance design support year-round presentation.",
  },
  {
    name: "Allentown",
    description:
      "Residential pockets that benefit from reliable lawn care and practical hardscape upgrades.",
  },
  {
    name: "Duwamish Area",
    description:
      "Properties with varied site conditions that need drainage-aware planning and durable materials.",
  },
  {
    name: "Southcenter Corridor",
    description:
      "High-visibility commercial and mixed parcels requiring consistent maintenance and clean finishes.",
  },
  {
    name: "Cascade View",
    description:
      "Neighborhood lots where functional pathways, edging, and seasonal cleanup improve usability.",
  },
  {
    name: "Fort Dent Area",
    description:
      "Open and transitional sites where practical landscape structure and upkeep are key.",
  },
];

const landmarks = [
  "Westfield Southcenter area",
  "Fort Dent Park",
  "Tukwila Community Center",
  "Interurban Trail corridor",
  "Southcenter Blvd corridor",
];

const zipCodes = ["98188", "98168"];

const localChallenges = [
  "Mixed property types require flexible landscaping approaches.",
  "Compacted soils can reduce drainage and plant health.",
  "High-traffic visibility areas demand consistent presentation.",
  "Older hardscape transitions often need safety and durability upgrades.",
  "Seasonal rainfall can reveal runoff and grading issues.",
];

const localSolutions = [
  "Site-specific plans for residential and commercial parcel types.",
  "Soil conditioning and drainage-first grading recommendations.",
  "Scheduled maintenance programs for consistent curb appeal.",
  "Durable hardscape upgrades for pathways and transitions.",
  "Practical project sequencing to minimize disruption.",
];

export const metadata: Metadata = {
  title: "Tukwila Landscaping Services | Summit Landscape Seattle",
  description:
    "Professional lawn care, hardscaping, and landscaping in Tukwila. Serving Allentown, Southcenter corridor, and nearby neighborhoods.",
  alternates: {
    canonical: "https://www.summitlandscapeseattle.com/service-areas/tukwila",
  },
};

export default function TukwilaPage() {
  const images = {
    hero: "/9301EC92-9FEA-42B0-970D-E9B2CB597427_4_5005_c.jpeg",
    lawn: "/0DA44278-D1DC-4678-933D-AF3D8B1937A0_4_5005_c.jpeg",
    hardscape: "/A605D748-7858-41E4-8188-1875D37A5CCE_4_5005_c.jpeg",
    landscape: "/624D1698-E0BC-4CA3-802D-C4DE71EC7663_4_5005_c.jpeg",
    climate: "/EAEFD167-AD6E-4835-9694-BF52449CD6E8_4_5005_c.jpeg",
    galleryOne: "/4896C48A-6D93-4922-B942-AD80990B9468_4_5005_c.jpeg",
    galleryTwo: "/5DB5FC7B-16D7-4453-AA97-D675E050233A_4_5005_c.jpeg",
    galleryThree: "/6264E067-12E0-4E2E-9D0F-65806D1F51AE_4_5005_c.jpeg",
    galleryFour: "/7F2B462E-62A6-49A8-9985-A031793B734F_4_5005_c.jpeg",
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
          alt="Tukwila streetside landscape and curb appeal refresh"
          fill
          priority
          className="object-cover"
          sizes="(min-width: 1024px) 1200px, 100vw"
        />
        <div className="absolute inset-0 bg-slate-900/55" />
        <div className="relative min-h-[440px] p-8 md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">
            Serving Tukwila
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-white md:text-5xl">
            Tukwila Landscaping for Mixed Property Types and Year-Round Curb Appeal
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-slate-100">
            Summit Landscape provides lawn care and maintenance, hardscaping, and complete
            landscaping services in Tukwila with practical planning for durability, drainage,
            and clean long-term presentation.
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
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">Services in Tukwila</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <Image src={images.lawn} alt="Tukwila lawn care and edging detail" width={1200} height={900} className="h-48 w-full object-cover" />
            <div className="p-5">
              <h3 className="text-lg font-semibold text-slate-900">Lawn Care and Maintenance</h3>
              <p className="mt-2 text-sm text-slate-600">
                Scheduled lawn mowing, fertilization and weed control, aeration, overseeding,
                and seasonal cleanups.
              </p>
            </div>
          </article>
          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <Image src={images.hardscape} alt="Tukwila hardscape and retaining feature work" width={1200} height={900} className="h-48 w-full object-cover" />
            <div className="p-5">
              <h3 className="text-lg font-semibold text-slate-900">Hardscaping</h3>
              <p className="mt-2 text-sm text-slate-600">
                Paver patios and walkways, retaining walls, and outdoor living features
                designed for grade and drainage performance.
              </p>
            </div>
          </article>
          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <Image src={images.landscape} alt="Tukwila landscape planting and border installation" width={1200} height={900} className="h-48 w-full object-cover" />
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
            Tukwila sites often combine mixed exposure, urban compaction, and heavy seasonal
            rain. We tailor recommendations for stronger drainage, durability, and cleaner upkeep.
          </p>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-2xl font-semibold text-slate-900">Why Homeowners Choose Us</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
            <li>Dependable schedules and clear communication</li>
            <li>Practical recommendations for varied lot conditions</li>
            <li>Clean execution and detail-focused finishing</li>
            <li>Flexible plans for recurring and one-time service</li>
          </ul>
        </article>
      </section>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <Image src={images.climate} alt="Tukwila low-maintenance gravel and tree-zone landscape" width={1400} height={900} className="h-full w-full object-cover" />
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-2xl font-semibold text-slate-900">Recent Tukwila Work</h2>
          <p className="mt-3 text-slate-600">
            We frequently complete lawn and planting refreshes, hardscape transitions, and
            path/border improvements across Tukwila neighborhoods and mixed-use areas.
          </p>
          <p className="mt-3 text-slate-600">
            The examples below reflect common project types we deliver in this market.
          </p>
        </article>
      </section>

      <section className="mt-10">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">Project Highlights</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <Image src={images.galleryOne} alt="Tukwila site prep before final landscaping" width={1200} height={900} className="h-44 w-full object-cover" />
          </article>
          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <Image src={images.galleryTwo} alt="Tukwila path and mulch cleanup detail" width={1200} height={900} className="h-44 w-full object-cover" />
          </article>
          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <Image src={images.galleryThree} alt="Tukwila side-yard renovation and prep" width={1200} height={900} className="h-44 w-full object-cover" />
          </article>
          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <Image src={images.galleryFour} alt="Tukwila fence and edge-zone hardscape project" width={1200} height={900} className="h-44 w-full object-cover" />
          </article>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">
          Neighborhoods and Areas We Serve in Tukwila
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
          Tukwila Landscape Planning Notes
        </h2>
        <h3 className="mt-5 text-xl font-semibold text-slate-900">
          Why planning differs in Tukwila
        </h3>
        <p className="mt-2 text-slate-700">
          Tukwila includes mixed residential and commercial areas with varied lot conditions.
          Thoughtful planning improves durability, drainage behavior, and overall site presentation.
        </p>

        <h3 className="mt-5 text-xl font-semibold text-slate-900">
          Permits, utilities, and property lines
        </h3>
        <p className="mt-2 text-slate-700">
          Structural hardscape and major site changes may require permit review and utility
          checks. Confirm current requirements with local jurisdictions and verify boundaries
          before starting construction.
        </p>

        <div className="mt-5 rounded-xl bg-slate-50 p-4 text-sm text-slate-600">
          Local requirements may change. Always verify current standards with local building
          authorities and any HOA or property management requirements.
        </div>
      </section>

      <section className="mt-10 rounded-2xl bg-slate-900 p-6 text-white">
        <h2 className="text-2xl font-semibold">Request a Free Tukwila Estimate</h2>
        <p className="mt-3 max-w-3xl text-slate-300">
          Tell us about your goals and timeline, and we&apos;ll provide practical recommendations
          and a transparent quote for your Tukwila property.
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
