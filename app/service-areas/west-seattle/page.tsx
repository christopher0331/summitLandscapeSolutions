import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const neighborhoods = [
  {
    name: "Admiral District",
    description:
      "Historic homes and mature landscapes that benefit from seasonal pruning, cleanup, and soil care.",
  },
  {
    name: "Alki",
    description:
      "Salt-air exposure and compact lots call for hardy planting plans and efficient irrigation strategies.",
  },
  {
    name: "Junction",
    description:
      "Mixed residential and commercial properties often need tidy curb-appeal maintenance and hardscape updates.",
  },
  {
    name: "Fauntleroy",
    description:
      "Tree-heavy lots and varied elevations require drainage planning and erosion-conscious planting design.",
  },
  {
    name: "Genesee",
    description:
      "Family neighborhoods where functional lawns, safe walkways, and low-maintenance beds are a priority.",
  },
  {
    name: "North Delridge",
    description:
      "Dense urban parcels benefit from space-efficient landscaping and durable hardscaping solutions.",
  },
];

const landmarks = [
  "Alki Beach",
  "Lincoln Park",
  "California Avenue SW",
  "West Seattle Golf Course",
  "Fauntleroy Ferry Terminal",
];

const zipCodes = ["98116", "98126", "98136", "98146"];

const localChallenges = [
  "Heavy winter rainfall can oversaturate lawns and planting beds.",
  "Sloped properties often need retaining and water-management improvements.",
  "Coastal exposure can stress sensitive plants and turf.",
  "Compacted urban soils reduce drainage and root development.",
  "Mature tree cover creates shade and moss-prone lawn zones.",
];

const localSolutions = [
  "Drainage-first site planning with grading and runoff direction.",
  "Retaining wall and hardscape design for stability on hillsides.",
  "Plant palettes selected for marine-influenced Seattle conditions.",
  "Soil amendment and aeration programs to improve root health.",
  "Shade-tolerant turf and maintenance plans for tree-dense lots.",
];

export const metadata: Metadata = {
  title: "West Seattle Landscaping Services | Summit Landscape Seattle",
  description:
    "Professional lawn care, hardscaping, and landscaping in West Seattle. Serving Admiral, Alki, Junction, Fauntleroy, and nearby neighborhoods.",
  alternates: {
    canonical: "https://www.summitlandscapeseattle.com/service-areas/west-seattle",
  },
};

export default function WestSeattlePage() {
  const images = {
    hero: "/3768CA9B-5E74-4FE3-967B-AAC1F92194C3_4_5005_c.jpeg",
    lawn: "/0DA44278-D1DC-4678-933D-AF3D8B1937A0_4_5005_c.jpeg",
    hardscape: "/A605D748-7858-41E4-8188-1875D37A5CCE_4_5005_c.jpeg",
    landscape: "/9301EC92-9FEA-42B0-970D-E9B2CB597427_4_5005_c.jpeg",
    climate: "/EAEFD167-AD6E-4835-9694-BF52449CD6E8_4_5005_c.jpeg",
    galleryOne: "/15F0794C-7D4F-44D2-B599-4B61F2B75C77_4_5005_c.jpeg",
    galleryTwo: "/DB20E9B0-564F-4DA0-B503-1D90AFA81BE6_4_5005_c.jpeg",
    galleryThree: "/683CEB00-4CAA-4577-AFCA-B31BBCCE1151_4_5005_c.jpeg",
    galleryFour: "/B4DDFA50-F2E8-4966-AFFE-B2F0EDC6D2F5_4_5005_c.jpeg",
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
          alt="West Seattle landscape installation with mature shrubs and fresh mulch"
          fill
          priority
          className="object-cover"
          sizes="(min-width: 1024px) 1200px, 100vw"
        />
        <div className="absolute inset-0 bg-slate-900/50" />
        <div className="relative min-h-[440px] p-8 md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">
            Serving West Seattle, WA
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-white md:text-5xl">
            West Seattle Landscaping Built for Northwest Conditions
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-slate-100">
            Summit Landscape provides lawn care and maintenance, hardscaping, and full
            landscaping services throughout West Seattle. We design for real conditions here:
            wet winters, summer dry spells, slopes, shade, and coastal influence.
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
          Services in West Seattle
        </h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <Image
              src={images.lawn}
              alt="Scheduled lawn mowing and edging service"
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
              alt="Brick and masonry hardscape project in West Seattle"
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
              alt="Landscape planting installation with shrubs and border edging"
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
            West Seattle properties need landscape plans that handle winter saturation and
            summer stress. We account for drainage, microclimates, and soil health from day
            one so your yard performs across all seasons.
          </p>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-2xl font-semibold text-slate-900">Why Homeowners Choose Us</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
            <li>Consistent schedules and clear communication</li>
            <li>Seattle-proven plant and material recommendations</li>
            <li>Detail-focused execution with clean job sites</li>
            <li>Service plans for both one-time and recurring work</li>
          </ul>
        </article>
      </section>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <Image
            src={images.climate}
            alt="Gravel and tree landscaping designed for wet Seattle winters"
            width={1400}
            height={900}
            className="h-full w-full object-cover"
          />
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-2xl font-semibold text-slate-900">Recent West Seattle Work</h2>
          <p className="mt-3 text-slate-600">
            We&apos;ve helped West Seattle homeowners upgrade tired yards, rebuild hardscape
            elements, and install low-maintenance landscapes that hold up through every
            season.
          </p>
          <p className="mt-3 text-slate-600">
            The project photos on this page highlight typical before-and-after conditions we
            solve: poor drainage, worn pathways, underused yard space, and overgrown beds.
          </p>
        </article>
      </section>

      <section className="mt-10">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">Project Highlights</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <Image
              src={images.galleryOne}
              alt="Backyard project site before landscaping improvements"
              width={1200}
              height={900}
              className="h-44 w-full object-cover"
            />
          </article>
          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <Image
              src={images.galleryTwo}
              alt="Freshly cleaned path and planting area"
              width={1200}
              height={900}
              className="h-44 w-full object-cover"
            />
          </article>
          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <Image
              src={images.galleryThree}
              alt="Fence line and outdoor space under renovation"
              width={1200}
              height={900}
              className="h-44 w-full object-cover"
            />
          </article>
          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <Image
              src={images.galleryFour}
              alt="Completed gravel landscaping and backyard cleanup"
              width={1200}
              height={900}
              className="h-44 w-full object-cover"
            />
          </article>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">
          Neighborhoods and Areas We Serve in West Seattle
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
          West Seattle Landscape Planning Notes
        </h2>
        <h3 className="mt-5 text-xl font-semibold text-slate-900">
          Why landscape planning differs by neighborhood
        </h3>
        <p className="mt-2 text-slate-700">
          Lot shape, elevation, and tree coverage vary significantly across West Seattle.
          Projects near hillsides may prioritize structural stability and drainage, while
          flatter lots may focus on outdoor living and low-maintenance plant design.
        </p>

        <h3 className="mt-5 text-xl font-semibold text-slate-900">
          Permits, utilities, and property lines
        </h3>
        <p className="mt-2 text-slate-700">
          Larger hardscape or structural projects may require permitting and utility checks.
          We recommend reviewing project scope with the City of Seattle and confirming
          property boundaries before construction starts.
        </p>

        <div className="mt-5 rounded-xl bg-slate-50 p-4 text-sm text-slate-600">
          Requirements can change over time. Always confirm current rules with the City of
          Seattle and your HOA (if applicable) before beginning work.
        </div>
      </section>

      <section className="mt-10 rounded-2xl bg-slate-900 p-6 text-white">
        <h2 className="text-2xl font-semibold">Request a Free West Seattle Estimate</h2>
        <p className="mt-3 max-w-3xl text-slate-300">
          Tell us about your goals and timeline. We&apos;ll provide recommendations and a
          transparent quote for your property.
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
