import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const neighborhoods = [
  {
    name: "Broadway",
    description:
      "Dense mixed-use blocks where polished curb appeal and low-maintenance planting plans matter year-round.",
  },
  {
    name: "Pike/Pine Corridor",
    description:
      "Tight outdoor footprints that benefit from efficient design, durable materials, and clean edges.",
  },
  {
    name: "North Capitol Hill",
    description:
      "Mature trees and classic homes that need careful pruning, shade-friendly lawns, and drainage attention.",
  },
  {
    name: "Volunteer Park Area",
    description:
      "Older landscapes where hardscape refreshes and structured plant design improve long-term performance.",
  },
  {
    name: "Miller Park",
    description:
      "Residential blocks with compact yards that prioritize function, walkability, and tidy maintenance.",
  },
  {
    name: "15th Ave East",
    description:
      "Front-yard focused properties where streetscape presentation and seasonal cleanups are a big priority.",
  },
];

const landmarks = [
  "Cal Anderson Park",
  "Volunteer Park",
  "Broadway Ave E",
  "Seattle Central College",
  "Interlaken Park",
];

const zipCodes = ["98102", "98112", "98122"];

const localChallenges = [
  "Compact lots with limited access for equipment and material staging.",
  "Older hardscape and edging that often need structural refreshes.",
  "Heavy tree canopy can create moss-prone and low-sun lawn zones.",
  "Steeper grade transitions require thoughtful runoff management.",
  "High visibility streetscapes demand consistently clean finishes.",
];

const localSolutions = [
  "Phased project planning built for narrow entries and urban parcels.",
  "Durable hardscape updates with drainage and slope handling in mind.",
  "Shade-tolerant turf and plant selections for canopy-heavy areas.",
  "Drainage-conscious grading and bed design for wet-season performance.",
  "Scheduled maintenance plans for dependable curb appeal.",
];

export const metadata: Metadata = {
  title: "Capitol Hill Landscaping Services | Summit Landscape Seattle",
  description:
    "Professional lawn care, hardscaping, and landscaping in Capitol Hill, Seattle. Serving Broadway, Pike/Pine, Volunteer Park, and nearby blocks.",
  alternates: {
    canonical: "https://www.summitlandscapeseattle.com/service-areas/capitol-hill",
  },
};

export default function CapitolHillPage() {
  const images = {
    hero: "/4D5D2F3B-6E57-42E6-9A7B-FA93E82718F5_4_5005_c.jpeg",
    lawn: "/DBD0E05B-1793-4CEA-A076-0986C169C3BC_4_5005_c.jpeg",
    hardscape: "/7F2B462E-62A6-49A8-9985-A031793B734F_4_5005_c.jpeg",
    landscape: "/5DB5FC7B-16D7-4453-AA97-D675E050233A_4_5005_c.jpeg",
    climate: "/65FC3407-D760-4963-A301-54194C7778CD_4_5005_c.jpeg",
    galleryOne: "/4896C48A-6D93-4922-B942-AD80990B9468_4_5005_c.jpeg",
    galleryTwo: "/6264E067-12E0-4E2E-9D0F-65806D1F51AE_4_5005_c.jpeg",
    galleryThree: "/65BF4200-40C6-4125-B45A-ADE955764213_4_5005_c.jpeg",
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
          alt="Capitol Hill hardscape and patio installation"
          fill
          priority
          className="object-cover"
          sizes="(min-width: 1024px) 1200px, 100vw"
        />
        <div className="absolute inset-0 bg-slate-900/55" />
        <div className="relative min-h-[440px] p-8 md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">
            Serving Capitol Hill, Seattle
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-white md:text-5xl">
            Capitol Hill Landscaping for High-Visibility Urban Properties
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-slate-100">
            Summit Landscape helps Capitol Hill property owners improve curb appeal with
            scheduled lawn care, hardscaping, and practical landscape design built for
            compact Seattle lots and changing seasonal conditions.
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
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">
          Services in Capitol Hill
        </h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <Image
              src={images.lawn}
              alt="Lawn and bed maintenance on a Seattle residential lot"
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
              alt="Fence and hardscape improvements on an urban property"
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
              alt="Landscape refresh with mulch, path cleanup, and tree care"
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
            Capitol Hill properties require durable landscape planning for winter moisture,
            summer drought stress, and heavy tree canopy conditions. We balance drainage,
            material durability, and visual finish quality in every project.
          </p>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-2xl font-semibold text-slate-900">Why Clients Choose Us</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
            <li>Clear schedules and responsive communication</li>
            <li>Urban-lot friendly project execution</li>
            <li>Clean finishes designed for curb appeal</li>
            <li>One-time projects and recurring maintenance options</li>
          </ul>
        </article>
      </section>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <Image
            src={images.climate}
            alt="Narrow side yard hardscape and drainage-friendly layout"
            width={1400}
            height={900}
            className="h-full w-full object-cover"
          />
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-2xl font-semibold text-slate-900">Recent Capitol Hill Work</h2>
          <p className="mt-3 text-slate-600">
            Recent projects include compact-yard redesigns, path and border upgrades, and
            landscape cleanup/refresh work for older homes and multifamily properties.
          </p>
          <p className="mt-3 text-slate-600">
            The photos below show the type of urban outdoor transformations we regularly
            complete in Capitol Hill.
          </p>
        </article>
      </section>

      <section className="mt-10">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">Project Highlights</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <Image
              src={images.galleryOne}
              alt="Landscape prep and bed shaping before turf installation"
              width={1200}
              height={900}
              className="h-44 w-full object-cover"
            />
          </article>
          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <Image
              src={images.galleryTwo}
              alt="Side yard cleanup and preparation for landscaping"
              width={1200}
              height={900}
              className="h-44 w-full object-cover"
            />
          </article>
          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <Image
              src={images.galleryThree}
              alt="Streetside planting and mulch refresh in Seattle"
              width={1200}
              height={900}
              className="h-44 w-full object-cover"
            />
          </article>
          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <Image
              src={images.galleryFour}
              alt="Urban driveway and lot area before hardscape refresh"
              width={1200}
              height={900}
              className="h-44 w-full object-cover"
            />
          </article>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">
          Neighborhoods and Areas We Serve in Capitol Hill
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
          Capitol Hill Landscape Planning Notes
        </h2>
        <h3 className="mt-5 text-xl font-semibold text-slate-900">
          Why planning differs in Capitol Hill
        </h3>
        <p className="mt-2 text-slate-700">
          Capitol Hill projects frequently involve compact lots, older site infrastructure,
          and high visibility from sidewalks and neighboring properties. Smart planning keeps
          spaces functional while preserving visual quality.
        </p>

        <h3 className="mt-5 text-xl font-semibold text-slate-900">
          Permits, utilities, and property lines
        </h3>
        <p className="mt-2 text-slate-700">
          Structural hardscape and major site changes can require utility checks and permit
          review. Confirm project requirements with the City of Seattle and verify property
          boundaries before construction.
        </p>

        <div className="mt-5 rounded-xl bg-slate-50 p-4 text-sm text-slate-600">
          Local rules can change. Always verify current requirements with the City of Seattle
          and any HOA or property management requirements before work begins.
        </div>
      </section>

      <section className="mt-10 rounded-2xl bg-slate-900 p-6 text-white">
        <h2 className="text-2xl font-semibold">Request a Free Capitol Hill Estimate</h2>
        <p className="mt-3 max-w-3xl text-slate-300">
          Share your goals and timeline, and we&apos;ll provide a detailed recommendation and
          transparent quote for your Capitol Hill property.
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
