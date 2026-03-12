import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const neighborhoods = [
  {
    name: "East Green Lake",
    description:
      "High-visibility residential streets where polished lawn edges and seasonal color create standout curb appeal.",
  },
  {
    name: "West Green Lake",
    description:
      "Tree-lined blocks that benefit from shade-aware lawn care and drainage-conscious planting plans.",
  },
  {
    name: "Tangletown",
    description:
      "Hillside and pocket-lot conditions that often need smart hardscape flow and erosion-aware design.",
  },
  {
    name: "Woodland Park Edge",
    description:
      "Properties near park canopy zones that require durable, low-maintenance landscape strategies.",
  },
  {
    name: "Roosevelt Border",
    description:
      "Mixed residential lots where walkway improvements and front-yard upgrades improve function and look.",
  },
  {
    name: "Phinney Ridge Border",
    description:
      "Older homes with mature landscaping that need careful cleanup, pruning, and thoughtful updates.",
  },
];

const landmarks = [
  "Green Lake Park",
  "Green Lake Path",
  "Woodland Park",
  "Green Lake Community Center",
  "Aurora Avenue N Corridor",
];

const zipCodes = ["98103", "98115", "98125"];

const localChallenges = [
  "Heavy tree canopy creates shade stress and moss-prone turf areas.",
  "Seasonal rainfall can saturate compacted urban soils.",
  "Older walkways and borders often need safety-focused upgrades.",
  "Tight side yards limit equipment access and staging space.",
  "High-traffic neighborhood visibility demands consistently clean finishes.",
];

const localSolutions = [
  "Shade-tolerant turf and planting plans matched to sunlight exposure.",
  "Drainage-aware grading, soil conditioning, and bed structure.",
  "Durable hardscape improvements for pathways, borders, and transitions.",
  "Urban-lot project sequencing designed for narrow access points.",
  "Reliable recurring maintenance to preserve curb appeal year-round.",
];

export const metadata: Metadata = {
  title: "Green Lake Landscaping Services | Summit Landscape Seattle",
  description:
    "Professional lawn care, hardscaping, and landscaping in Seattle's Green Lake area. Serving East/West Green Lake, Tangletown, and nearby neighborhoods.",
  alternates: {
    canonical: "https://www.summitlandscapeseattle.com/service-areas/green-lake",
  },
};

export default function GreenLakePage() {
  const images = {
    hero: "/624D1698-E0BC-4CA3-802D-C4DE71EC7663_4_5005_c.jpeg",
    lawn: "/0DA44278-D1DC-4678-933D-AF3D8B1937A0_4_5005_c.jpeg",
    hardscape: "/A605D748-7858-41E4-8188-1875D37A5CCE_4_5005_c.jpeg",
    landscape: "/9301EC92-9FEA-42B0-970D-E9B2CB597427_4_5005_c.jpeg",
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
          alt="Green Lake landscape installation with structured shrubs and border edging"
          fill
          priority
          className="object-cover"
          sizes="(min-width: 1024px) 1200px, 100vw"
        />
        <div className="absolute inset-0 bg-slate-900/55" />
        <div className="relative min-h-[440px] p-8 md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">
            Serving Green Lake, Seattle
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-white md:text-5xl">
            Green Lake Landscaping Designed for Tree Canopy and Seasonal Wet Weather
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-slate-100">
            Summit Landscape delivers lawn care and maintenance, hardscaping, and full
            landscaping services across the Green Lake area with practical plans for shade,
            drainage, and year-round curb appeal.
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
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">Services in Green Lake</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <Image
              src={images.lawn}
              alt="Green Lake lawn mowing and edging detail"
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
              alt="Brick and masonry hardscape work for Seattle property"
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
              alt="Green Lake streetside landscaping and mulch refresh"
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
            Green Lake landscaping has to account for shade, root competition, and heavy
            seasonal moisture. We tailor material choices, plant selection, and maintenance
            schedules to keep landscapes healthy and clean through all seasons.
          </p>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-2xl font-semibold text-slate-900">Why Homeowners Choose Us</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
            <li>Clear communication and dependable scheduling</li>
            <li>Site-specific recommendations for Seattle conditions</li>
            <li>Detail-oriented finishes with clean work zones</li>
            <li>Flexible plans for recurring and one-time projects</li>
          </ul>
        </article>
      </section>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <Image
            src={images.climate}
            alt="Low-maintenance gravel and planting solution for wet conditions"
            width={1400}
            height={900}
            className="h-full w-full object-cover"
          />
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-2xl font-semibold text-slate-900">Recent Green Lake Work</h2>
          <p className="mt-3 text-slate-600">
            We routinely help Green Lake clients improve walkability, simplify maintenance,
            and restore visual balance in older yards that have become overgrown or uneven.
          </p>
          <p className="mt-3 text-slate-600">
            The examples on this page reflect common urban project types: lawn refreshes,
            path and edging upgrades, and compact-yard redesigns.
          </p>
        </article>
      </section>

      <section className="mt-10">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">Project Highlights</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <Image
              src={images.galleryOne}
              alt="Landscape bed prep before turf and planting work"
              width={1200}
              height={900}
              className="h-44 w-full object-cover"
            />
          </article>
          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <Image
              src={images.galleryTwo}
              alt="Completed path edge cleanup and mulching"
              width={1200}
              height={900}
              className="h-44 w-full object-cover"
            />
          </article>
          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <Image
              src={images.galleryThree}
              alt="Narrow side-yard area prepared for landscaping improvements"
              width={1200}
              height={900}
              className="h-44 w-full object-cover"
            />
          </article>
          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <Image
              src={images.galleryFour}
              alt="Fence and backyard edge detail from hardscape project"
              width={1200}
              height={900}
              className="h-44 w-full object-cover"
            />
          </article>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">
          Neighborhoods and Areas We Serve in Green Lake
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
          Green Lake Landscape Planning Notes
        </h2>
        <h3 className="mt-5 text-xl font-semibold text-slate-900">
          Why planning differs in Green Lake
        </h3>
        <p className="mt-2 text-slate-700">
          Green Lake properties often mix mature canopy, compact lots, and high pedestrian
          visibility. Strategic planning keeps outdoor spaces functional while maintaining a
          clean look that matches neighborhood standards.
        </p>

        <h3 className="mt-5 text-xl font-semibold text-slate-900">
          Permits, utilities, and property lines
        </h3>
        <p className="mt-2 text-slate-700">
          Major hardscape changes and structural site improvements may require permit review
          and utility checks. Confirm requirements with the City of Seattle and verify lot
          boundaries before project kickoff.
        </p>

        <div className="mt-5 rounded-xl bg-slate-50 p-4 text-sm text-slate-600">
          City rules may change. Always verify current standards with the City of Seattle and
          any HOA/property management requirements before beginning work.
        </div>
      </section>

      <section className="mt-10 rounded-2xl bg-slate-900 p-6 text-white">
        <h2 className="text-2xl font-semibold">Request a Free Green Lake Estimate</h2>
        <p className="mt-3 max-w-3xl text-slate-300">
          Tell us about your project goals and timeline, and we&apos;ll provide a detailed
          recommendation and transparent quote for your Green Lake property.
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
