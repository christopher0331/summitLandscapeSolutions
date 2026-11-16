import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const neighborhoods = [
  {
    name: "Near Seward Park",
    description:
      "Homes close to the forested park on Bailey Peninsula, where tall conifers shade yards and drop needles and debris through the year.",
  },
  {
    name: "Along Lake Washington Boulevard South",
    description:
      "Lake-facing properties where wind, views, and wet winters call for low, tidy plantings and clean, durable edges.",
  },
  {
    name: "Hillside Streets West of the Lake",
    description:
      "Sloped lots between the lake and Seward Park, where runoff, erosion, and grade changes shape bed and path layouts.",
  },
  {
    name: "Toward Genesee Park",
    description:
      "Blocks near Genesee Park and Playfield, where open lawns and low, wet spots benefit from drainage-aware planning.",
  },
];

const landmarks = [
  "Seward Park",
  "Bailey Peninsula",
  "Seward Park Audubon Center",
  "Lake Washington",
  "Lake Washington Boulevard South",
  "Genesee Park and Playfield",
];

const zipCodes = ["98118"];

const nearbyAreas = [
  { name: "Rainier Valley", href: "/service-areas/rainier-valley" },
  { name: "Beacon Hill", href: "/service-areas/beacon-hill" },
  { name: "Madrona", href: "/service-areas/madrona" },
  { name: "Renton", href: "/service-areas/renton" },
  { name: "Georgetown", href: "/service-areas/georgetown" },
];

const localChallenges = [
  "Tall conifers and mature trees shade lawns and drop needles, cones, and leaves that smother turf and beds.",
  "Sloped lots running toward Lake Washington need runoff and erosion planning before new beds or patios go in.",
  "Wet winters encourage moss and soft soil in shaded or low lawn areas.",
  "Lake-facing yards see wind and weather exposure that is hard on delicate plantings.",
  "Older homes often have tired foundation beds, cracked walkways, and overgrown borders.",
];

const localSolutions = [
  "Shade-tolerant plantings and mulched beds where turf struggles under tree cover.",
  "Seasonal yard cleanups timed around needle and leaf drop.",
  "Retaining walls, terraced beds, and steps that handle grade changes cleanly.",
  "Aeration, overseeding, and drainage-aware grading for thin or mossy lawns.",
  "Recurring maintenance for single-family yards and rental properties.",
];

const toc = [
  { id: "services", label: "Services in Seward Park" },
  { id: "conditions", label: "Planning for Seward Park Conditions" },
  { id: "projects", label: "Typical Projects and Photos" },
  { id: "neighborhoods", label: "Neighborhoods, Landmarks, and ZIP Codes" },
  { id: "challenges", label: "Local Challenges and Solutions" },
  { id: "planning-notes", label: "Planning Notes" },
  { id: "nearby", label: "Nearby Service Areas" },
  { id: "estimate", label: "Request an Estimate" },
];

export const metadata: Metadata = {
  title: "Seward Park Landscaping & Lawn Care | Summit Landscape Seattle",
  description:
    "Lawn care, hardscaping, and landscape design and installation for Seward Park homes and properties near Seward Park, the Audubon Center, and Lake Washington Boulevard South. Ask for a free estimate.",
  alternates: {
    canonical: "https://summitlandscapesolutions.co/service-areas/seward-park",
  },
};

export default function SewardParkPage() {
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
            Serving Seward Park, Seattle
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-white md:text-5xl">
            Seward Park Landscaping for Tall Trees, Sloped Lots, and Lakeside Yards
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-slate-100">
            Summit Landscape Solutions is a Burien-based team serving South King County and Seattle
            neighborhoods, including Seward Park. We offer lawn care and maintenance, hardscaping,
            and landscaping for Seward Park homes and properties, with plans built around drainage,
            shade, and easy upkeep.
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

      <nav aria-label="On this page" className="mt-10 rounded-2xl border border-emerald-100 bg-emerald-50 p-6">
        <h2 className="text-xl font-semibold text-slate-900">On This Page</h2>
        <ol className="mt-3 grid list-decimal gap-2 pl-5 text-emerald-800 md:grid-cols-2">
          {toc.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} className="font-medium hover:underline">
                {item.label}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <div className="mt-6 rounded-2xl border-l-4 border-emerald-600 bg-white p-5 text-slate-700 shadow-sm">
        <strong className="text-slate-900">Good to know:</strong> The Seward Park neighborhood sits
        in southeast Seattle beside Lake Washington, just west of the 300-acre forested park on
        Bailey Peninsula. Many yards are shaded or sloped, so plan drainage and plant choice before
        materials.
      </div>

      <section id="services" className="mt-10 scroll-mt-24">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">Services in Seward Park</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <Image
              src={images.lawn}
              alt="Fresh sod lawn with brick edging beside a planting bed"
              width={1200}
              height={900}
              className="h-48 w-full object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold text-slate-900">Lawn Care and Maintenance</h3>
              <p className="mt-2 text-sm text-slate-600">
                Scheduled lawn care, fertilization and weed control, aeration and overseeding, and
                seasonal yard cleanups for Seward Park lawns.
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
            <Image
              src={images.hardscape}
              alt="Paver surface with a wood privacy screen"
              width={1200}
              height={900}
              className="h-48 w-full object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold text-slate-900">Hardscaping</h3>
              <p className="mt-2 text-sm text-slate-600">
                Pavers, patios and walkways, retaining walls, and outdoor living features planned
                around your lot&apos;s grade and drainage.
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
            <Image
              src={images.landscape}
              alt="Flowering hydrangea bed beside a lawn"
              width={1200}
              height={900}
              className="h-48 w-full object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold text-slate-900">Landscaping</h3>
              <p className="mt-2 text-sm text-slate-600">
                Landscape design, planting installation, and sod and turf installation matched to the
                light, soil, and maintenance goals of your property.
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

      <section id="conditions" className="scroll-mt-24 mt-10 grid gap-6 md:grid-cols-2">
        <article className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-2xl font-semibold text-slate-900">Planning for Seward Park Conditions</h2>
          <p className="mt-3 text-slate-600">
            Seward Park yards deal with wet Puget Sound seasons plus tall trees, sloped lots,
            and lake-facing exposure. We look at drainage, shade, and
            how you use the space before recommending a scope.
          </p>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-2xl font-semibold text-slate-900">Working With a Nearby Team</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
            <li>Based in Burien, serving South King County and Seattle</li>
            <li>Free on-site consultations: contact us to confirm availability for your property</li>
            <li>Practical recommendations on scope, materials, and upkeep</li>
            <li>Options for recurring maintenance or one-time projects</li>
          </ul>
        </article>
      </section>

      <section id="projects" className="scroll-mt-24 mt-10 grid gap-6 md:grid-cols-2">
        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <Image
            src={images.climate}
            alt="Side yard with a gravel path, stepping pavers, and raised planter beds"
            width={1400}
            height={900}
            className="h-full w-full object-cover"
          />
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-2xl font-semibold text-slate-900">Typical Seward Park Projects</h2>
          <p className="mt-3 text-slate-600">
            Common requests for Seward Park properties include lawn renovation with aeration and
            overseeding, fresh planting beds and mulch, walkway and retaining wall updates, and recurring
            maintenance for homes and rentals.
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
            <Image
              src={images.galleryOne}
              alt="Mulched bed along a fence and sidewalk"
              width={1200}
              height={900}
              className="h-44 w-full object-cover"
            />
          </article>
          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <Image
              src={images.galleryTwo}
              alt="Curbside planting strip prepared with edging"
              width={1200}
              height={900}
              className="h-44 w-full object-cover"
            />
          </article>
          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <Image
              src={images.galleryThree}
              alt="Side yard with a new fence and mulched strip"
              width={1200}
              height={900}
              className="h-44 w-full object-cover"
            />
          </article>
          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <Image
              src={images.galleryFour}
              alt="Driveway frontage with a trimmed hedge"
              width={1200}
              height={900}
              className="h-44 w-full object-cover"
            />
          </article>
        </div>
      </section>

      <section id="neighborhoods" className="scroll-mt-24 mt-10">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">
          Neighborhoods and Areas We Serve in Seward Park
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

      <section id="challenges" className="scroll-mt-24 mt-10 grid gap-6 md:grid-cols-2">
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

      <section id="planning-notes" className="scroll-mt-24 mt-10 rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">
          Seward Park Landscape Planning Notes
        </h2>
        <h3 className="mt-5 text-xl font-semibold text-slate-900">Start with drainage and shade</h3>
        <p className="mt-2 text-slate-700">
          Before choosing plants or materials for a Seward Park yard, it helps to know where water
          sits after a heavy rain and which areas stay shaded by tall trees. Those
          two answers usually decide whether a lawn thrives, whether a bed needs reshaping, and where
          a path or wall should go.
        </p>

        <h3 className="mt-5 text-xl font-semibold text-slate-900">Permits, utilities, and property lines</h3>
        <p className="mt-2 text-slate-700">
          Larger hardscape and retaining wall projects may require permit review and a utility locate.
          Confirm requirements with the City of Seattle (SDCI) and verify your property boundaries
          before work begins.
        </p>

        <div className="mt-5 rounded-xl bg-slate-50 p-4 text-sm text-slate-600">
          Requirements can change over time. Always verify current standards with the City of Seattle
          and any HOA or property management rules.
        </div>
      </section>

      <section id="nearby" className="scroll-mt-24 mt-10 rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-2xl font-semibold text-slate-900">Nearby Service Areas</h2>
        <p className="mt-3 text-slate-600">
          Seward Park is close to several other communities we serve. Take a look at their pages
          too.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          {nearbyAreas.map((area) => (
            <Link
              key={`${area.href}-${area.name}`}
              href={area.href}
              className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-emerald-700 hover:text-emerald-700"
            >
              {area.name}
            </Link>
          ))}
        </div>
      </section>

      <section id="estimate" className="scroll-mt-24 mt-10 rounded-2xl bg-slate-900 p-6 text-white">
        <h2 className="text-2xl font-semibold">Request a Free Seward Park Estimate</h2>
        <p className="mt-3 max-w-3xl text-slate-300">
          Tell us about your Seward Park property and what you&apos;d like to change, and we&apos;ll
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
