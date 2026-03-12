import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const neighborhoods = [
  {
    name: "Downtown White Center",
    description:
      "Mixed-use blocks where clean curb appeal and practical low-maintenance updates are essential.",
  },
  {
    name: "Roxbury Corridor",
    description:
      "Street-facing properties where detail-focused edging and seasonal cleanup improve presentation.",
  },
  {
    name: "South Delridge Border",
    description:
      "Residential lots that benefit from durable lawn care and efficient hardscape transitions.",
  },
  {
    name: "Top Hat Area",
    description:
      "Varied lot conditions requiring drainage-aware planting and consistent maintenance cadence.",
  },
  {
    name: "16th Ave SW Corridor",
    description:
      "Compact parcels where access-aware planning and clean project execution are key.",
  },
  {
    name: "Westwood-Adjacent Blocks",
    description:
      "Family homes where practical landscape upgrades and year-round curb appeal matter most.",
  },
];

const landmarks = [
  "White Center business district",
  "Roxhill Park area",
  "Steve Cox Memorial Park",
  "SW Roxbury Street corridor",
  "White Center Heights Park",
];

const zipCodes = ["98106", "98146"];

const localChallenges = [
  "Compacted soils can limit drainage and root development.",
  "Mixed residential/commercial visibility demands consistent upkeep.",
  "Narrow side yards can restrict equipment access.",
  "Older pathways and borders may need structural refreshes.",
  "Seasonal rain can expose runoff and grading issues.",
];

const localSolutions = [
  "Soil conditioning and aeration to improve water movement.",
  "Scheduled maintenance plans for cleaner year-round presentation.",
  "Access-aware staging and project sequencing for compact lots.",
  "Durable hardscape updates for safe and attractive transitions.",
  "Drainage-focused grading and planting-bed design.",
];

export const metadata: Metadata = {
  title: "White Center Landscaping Services | Summit Landscape Seattle",
  description:
    "Professional lawn care, hardscaping, and landscaping in White Center. Serving downtown White Center, Roxbury corridor, and nearby neighborhoods.",
  alternates: {
    canonical: "https://www.summitlandscapeseattle.com/service-areas/white-center",
  },
};

export default function WhiteCenterPage() {
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
          alt="White Center streetside landscaping and curb appeal refresh"
          fill
          priority
          className="object-cover"
          sizes="(min-width: 1024px) 1200px, 100vw"
        />
        <div className="absolute inset-0 bg-slate-900/55" />
        <div className="relative min-h-[440px] p-8 md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">
            Serving White Center
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-white md:text-5xl">
            White Center Landscaping for Urban Lots and Everyday Curb Appeal
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-slate-100">
            Summit Landscape provides lawn care and maintenance, hardscaping, and complete
            landscaping services in White Center with practical planning for drainage, lot access,
            and long-term visual quality.
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
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">Services in White Center</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <Image src={images.lawn} alt="White Center lawn care and edging detail" width={1200} height={900} className="h-48 w-full object-cover" />
            <div className="p-5">
              <h3 className="text-lg font-semibold text-slate-900">Lawn Care and Maintenance</h3>
              <p className="mt-2 text-sm text-slate-600">
                Scheduled lawn mowing, fertilization and weed control, aeration, overseeding,
                and seasonal cleanups.
              </p>
            </div>
          </article>
          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <Image src={images.hardscape} alt="White Center hardscape and retaining feature work" width={1200} height={900} className="h-48 w-full object-cover" />
            <div className="p-5">
              <h3 className="text-lg font-semibold text-slate-900">Hardscaping</h3>
              <p className="mt-2 text-sm text-slate-600">
                Paver patios and walkways, retaining walls, and outdoor living features
                designed for grade and drainage performance.
              </p>
            </div>
          </article>
          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <Image src={images.landscape} alt="White Center landscape planting and border installation" width={1200} height={900} className="h-48 w-full object-cover" />
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
            White Center properties often require practical drainage planning, efficient lot
            layout, and plant selection that performs through Seattle&apos;s wet and dry cycles.
          </p>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-2xl font-semibold text-slate-900">Why Homeowners Choose Us</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
            <li>Reliable schedules and clear communication</li>
            <li>Practical recommendations for real lot conditions</li>
            <li>Clean execution and detail-oriented finishing</li>
            <li>Flexible plans for recurring and one-time service</li>
          </ul>
        </article>
      </section>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <Image src={images.climate} alt="White Center low-maintenance gravel and tree-zone landscaping" width={1400} height={900} className="h-full w-full object-cover" />
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-2xl font-semibold text-slate-900">Recent White Center Work</h2>
          <p className="mt-3 text-slate-600">
            We regularly complete lawn and bed refreshes, path improvements, and hardscape
            upgrades that improve both function and presentation in White Center properties.
          </p>
          <p className="mt-3 text-slate-600">
            The project highlights below reflect common transformations in this area.
          </p>
        </article>
      </section>

      <section className="mt-10">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">Project Highlights</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <Image src={images.galleryOne} alt="White Center site prep before final landscaping" width={1200} height={900} className="h-44 w-full object-cover" />
          </article>
          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <Image src={images.galleryTwo} alt="White Center path and mulch cleanup detail" width={1200} height={900} className="h-44 w-full object-cover" />
          </article>
          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <Image src={images.galleryThree} alt="White Center side-yard renovation and prep" width={1200} height={900} className="h-44 w-full object-cover" />
          </article>
          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <Image src={images.galleryFour} alt="White Center fence and edge-zone hardscape project" width={1200} height={900} className="h-44 w-full object-cover" />
          </article>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">
          Neighborhoods and Areas We Serve in White Center
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
          White Center Landscape Planning Notes
        </h2>
        <h3 className="mt-5 text-xl font-semibold text-slate-900">
          Why planning differs in White Center
        </h3>
        <p className="mt-2 text-slate-700">
          White Center combines compact urban lots, mixed property types, and high visibility.
          Thoughtful planning improves function, drainage behavior, and curb appeal.
        </p>

        <h3 className="mt-5 text-xl font-semibold text-slate-900">
          Permits, utilities, and property lines
        </h3>
        <p className="mt-2 text-slate-700">
          Structural hardscape and major site changes may require permit review and utility
          checks. Confirm current requirements with local jurisdictions and verify boundaries
          before project kickoff.
        </p>

        <div className="mt-5 rounded-xl bg-slate-50 p-4 text-sm text-slate-600">
          Requirements can change over time. Always verify current standards with local building
          authorities and any HOA or property management rules.
        </div>
      </section>

      <section className="mt-10 rounded-2xl bg-slate-900 p-6 text-white">
        <h2 className="text-2xl font-semibold">Request a Free White Center Estimate</h2>
        <p className="mt-3 max-w-3xl text-slate-300">
          Tell us about your goals and timeline, and we&apos;ll provide practical recommendations
          and a transparent quote for your White Center property.
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
