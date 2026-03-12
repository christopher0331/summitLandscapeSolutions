import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const neighborhoods = [
  {
    name: "Columbia City",
    description:
      "Historic residential blocks where clean curb appeal and practical landscape refreshes add long-term value.",
  },
  {
    name: "Mount Baker",
    description:
      "Tree-rich properties that benefit from shade-adapted lawn care and drainage-aware planting.",
  },
  {
    name: "Seward Park Area",
    description:
      "Mixed-elevation lots requiring durable pathways and erosion-conscious bed design.",
  },
  {
    name: "Hillman City",
    description:
      "Urban parcels where efficient layouts and low-maintenance upgrades improve everyday usability.",
  },
  {
    name: "Rainier Beach",
    description:
      "Larger lots and varied site conditions that need practical planning for year-round performance.",
  },
  {
    name: "Genesee Park Edge",
    description:
      "Visible neighborhood corridors where detail-focused finishing and recurring upkeep are key.",
  },
];

const landmarks = [
  "Columbia Park",
  "Seward Park",
  "Rainier Avenue S",
  "Othello Station corridor",
  "Genesee Park",
];

const zipCodes = ["98118", "98144", "98108"];

const localChallenges = [
  "Rain-season runoff can expose weak drainage and compacted soil areas.",
  "Mixed-grade lots often need safer transitions and retaining support.",
  "Tree canopy zones can produce moss-prone and low-sun turf conditions.",
  "Older hardscape elements may require structural and visual updates.",
  "Street-facing properties benefit from consistent maintenance cadence.",
];

const localSolutions = [
  "Drainage-focused grading and bed planning for wet months.",
  "Durable hardscape improvements for pathways and transitions.",
  "Shade-adapted lawn and plant strategies for canopy-heavy yards.",
  "Soil conditioning and aeration to improve root health and drainage.",
  "Scheduled service plans to keep properties clean year-round.",
];

export const metadata: Metadata = {
  title: "Rainier Valley Landscaping Services | Summit Landscape Seattle",
  description:
    "Professional lawn care, hardscaping, and landscaping in Rainier Valley, Seattle. Serving Columbia City, Mount Baker, Seward Park, and nearby neighborhoods.",
  alternates: {
    canonical: "https://www.summitlandscapeseattle.com/service-areas/rainier-valley",
  },
};

export default function RainierValleyPage() {
  const images = {
    hero: "/624D1698-E0BC-4CA3-802D-C4DE71EC7663_4_5005_c.jpeg",
    lawn: "/0DA44278-D1DC-4678-933D-AF3D8B1937A0_4_5005_c.jpeg",
    hardscape: "/A605D748-7858-41E4-8188-1875D37A5CCE_4_5005_c.jpeg",
    landscape: "/3768CA9B-5E74-4FE3-967B-AAC1F92194C3_4_5005_c.jpeg",
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
          alt="Rainier Valley landscaping installation with structured shrubs and borders"
          fill
          priority
          className="object-cover"
          sizes="(min-width: 1024px) 1200px, 100vw"
        />
        <div className="absolute inset-0 bg-slate-900/55" />
        <div className="relative min-h-[440px] p-8 md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">
            Serving Rainier Valley, Seattle
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-white md:text-5xl">
            Rainier Valley Landscaping Built for Diverse Lots and Seattle Weather
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-slate-100">
            Summit Landscape provides lawn care and maintenance, hardscaping, and complete
            landscaping services throughout Rainier Valley with practical planning for drainage,
            slopes, and lasting curb appeal.
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
          Services in Rainier Valley
        </h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <Image src={images.lawn} alt="Rainier Valley lawn care and edging detail" width={1200} height={900} className="h-48 w-full object-cover" />
            <div className="p-5">
              <h3 className="text-lg font-semibold text-slate-900">Lawn Care and Maintenance</h3>
              <p className="mt-2 text-sm text-slate-600">
                Scheduled lawn mowing, fertilization and weed control, aeration, overseeding,
                and seasonal cleanups.
              </p>
            </div>
          </article>
          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <Image src={images.hardscape} alt="Rainier Valley hardscape and retaining feature project" width={1200} height={900} className="h-48 w-full object-cover" />
            <div className="p-5">
              <h3 className="text-lg font-semibold text-slate-900">Hardscaping</h3>
              <p className="mt-2 text-sm text-slate-600">
                Paver patios and walkways, retaining walls, and outdoor living features
                designed for grade and drainage performance.
              </p>
            </div>
          </article>
          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <Image src={images.landscape} alt="Rainier Valley landscape planting and border installation" width={1200} height={900} className="h-48 w-full object-cover" />
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
            Rainier Valley properties vary from flatter parcels to sloped lots, with changing
            sun exposure and moisture levels. We tailor recommendations to each site so results
            stay durable and attractive.
          </p>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-2xl font-semibold text-slate-900">Why Homeowners Choose Us</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
            <li>Clear communication and dependable scheduling</li>
            <li>Seattle-specific planning and material recommendations</li>
            <li>Detail-focused project execution and cleanup</li>
            <li>Flexible options for recurring and one-time projects</li>
          </ul>
        </article>
      </section>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <Image src={images.climate} alt="Rainier Valley low-maintenance gravel and tree area" width={1400} height={900} className="h-full w-full object-cover" />
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-2xl font-semibold text-slate-900">Recent Rainier Valley Work</h2>
          <p className="mt-3 text-slate-600">
            We frequently complete lawn and planting refreshes, path and edging upgrades, and
            hardscape improvements across Rainier Valley neighborhoods.
          </p>
          <p className="mt-3 text-slate-600">
            The gallery below reflects common project conditions and outcomes in this area.
          </p>
        </article>
      </section>

      <section className="mt-10">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">Project Highlights</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <Image src={images.galleryOne} alt="Rainier Valley project site before final landscaping" width={1200} height={900} className="h-44 w-full object-cover" />
          </article>
          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <Image src={images.galleryTwo} alt="Rainier Valley path and bed cleanup detail" width={1200} height={900} className="h-44 w-full object-cover" />
          </article>
          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <Image src={images.galleryThree} alt="Rainier Valley side-yard renovation and prep work" width={1200} height={900} className="h-44 w-full object-cover" />
          </article>
          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <Image src={images.galleryFour} alt="Rainier Valley backyard fence and edge-zone upgrade" width={1200} height={900} className="h-44 w-full object-cover" />
          </article>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">
          Neighborhoods and Areas We Serve in Rainier Valley
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
          Rainier Valley Landscape Planning Notes
        </h2>
        <h3 className="mt-5 text-xl font-semibold text-slate-900">
          Why planning differs in Rainier Valley
        </h3>
        <p className="mt-2 text-slate-700">
          Rainier Valley includes diverse lot types, mature vegetation, and varied grade
          conditions. Thoughtful planning helps improve safety, drainage, and long-term aesthetics.
        </p>

        <h3 className="mt-5 text-xl font-semibold text-slate-900">
          Permits, utilities, and property lines
        </h3>
        <p className="mt-2 text-slate-700">
          Structural hardscape and major site changes may require permit review and utility
          checks. Confirm current requirements with the City of Seattle and verify boundaries
          before construction begins.
        </p>

        <div className="mt-5 rounded-xl bg-slate-50 p-4 text-sm text-slate-600">
          Local requirements may change. Always verify current standards with the City of
          Seattle and any HOA or property management requirements.
        </div>
      </section>

      <section className="mt-10 rounded-2xl bg-slate-900 p-6 text-white">
        <h2 className="text-2xl font-semibold">Request a Free Rainier Valley Estimate</h2>
        <p className="mt-3 max-w-3xl text-slate-300">
          Tell us about your goals and timeline, and we&apos;ll provide practical recommendations
          with a transparent quote for your Rainier Valley property.
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
