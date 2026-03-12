import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    name: "West Seattle Lawn Restoration",
    location: "West Seattle",
    details: "Turf replacement, edge cleanup, and planting bed definition for a cleaner, brighter yard.",
    image: "/0DA44278-D1DC-4678-933D-AF3D8B1937A0_4_5005_c.jpeg",
    featured: true,
  },
  {
    name: "Capitol Hill Courtyard Upgrade",
    location: "Capitol Hill",
    details:
      "Modernized small outdoor footprint with durable surface materials and clean architectural lines.",
    image: "/4D5D2F3B-6E57-42E6-9A7B-FA93E82718F5_4_5005_c.jpeg",
  },
  {
    name: "Ballard Border Planting Refresh",
    location: "Ballard",
    details:
      "Layered shrubs and ornamental grasses to create structure, texture, and low-maintenance curb appeal.",
    image: "/3768CA9B-5E74-4FE3-967B-AAC1F92194C3_4_5005_c.jpeg",
  },
  {
    name: "Queen Anne Hardscape Rebuild",
    location: "Queen Anne",
    details:
      "Reworked steps and retaining edges to improve circulation, safety, and long-term stability.",
    image: "/A605D748-7858-41E4-8188-1875D37A5CCE_4_5005_c.jpeg",
  },
  {
    name: "Green Lake Garden Bed Restoration",
    location: "Green Lake",
    details:
      "Updated mature beds with selective pruning, mulch, and stronger visual definition across seasons.",
    image: "/624D1698-E0BC-4CA3-802D-C4DE71EC7663_4_5005_c.jpeg",
  },
  {
    name: "Fremont Side-Yard Renewal",
    location: "Fremont",
    details:
      "Converted narrow side access into a cleaner, more functional circulation corridor with improved finish.",
    image: "/65FC3407-D760-4963-A301-54194C7778CD_4_5005_c.jpeg",
  },
  {
    name: "Rainier Valley Streetscape Cleanup",
    location: "Rainier Valley",
    details:
      "Refreshed visible frontage zones with mulch, edging, and planting updates for stronger first impression.",
    image: "/9301EC92-9FEA-42B0-970D-E9B2CB597427_4_5005_c.jpeg",
  },
  {
    name: "Magnolia Low-Maintenance Yard Conversion",
    location: "Magnolia",
    details:
      "Introduced gravel and hardy planting strategy to reduce maintenance while preserving visual warmth.",
    image: "/EAEFD167-AD6E-4835-9694-BF52449CD6E8_4_5005_c.jpeg",
  },
  {
    name: "Burien Property Edge Refresh",
    location: "Burien",
    details:
      "Cleaned and reset boundary zones for better drainage flow, easier upkeep, and improved curb definition.",
    image: "/DB20E9B0-564F-4DA0-B503-1D90AFA81BE6_4_5005_c.jpeg",
  },
];

export const metadata: Metadata = {
  title: "Projects | Summit Landscape Seattle",
  description:
    "View example landscaping projects completed across Seattle neighborhoods, from backyard upgrades to commercial entries.",
};

export default function ProjectsPage() {
  const featuredProject = projects.find((project) => project.featured);
  const galleryProjects = projects.filter((project) => !project.featured);

  if (!featuredProject) return null;

  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
        Portfolio
      </p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
        Featured Projects
      </h1>
      <p className="mt-5 max-w-3xl text-lg text-slate-600">
        A curated look at recent residential landscaping, hardscaping, and maintenance work
        completed across Seattle and south-end communities.
      </p>

      <section className="mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="grid md:grid-cols-2">
          <div className="relative min-h-[360px]">
            <Image
              src={featuredProject.image}
              alt={featuredProject.name}
              fill
              priority
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
          <div className="p-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
              Featured | {featuredProject.location}
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
              {featuredProject.name}
            </h2>
            <p className="mt-4 text-slate-600">{featuredProject.details}</p>
            <Link
              href="/contact"
              className="mt-8 inline-block rounded-full bg-emerald-700 px-6 py-3 font-semibold text-white transition hover:bg-emerald-800"
            >
              Request Similar Project
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {galleryProjects.map((project) => (
            <article
              key={project.name}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
            >
              <div className="relative h-56">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                />
              </div>
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
                  {project.location}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-slate-900">{project.name}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{project.details}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-3xl bg-slate-900 px-8 py-10 text-white">
        <h2 className="text-3xl font-bold tracking-tight">Planning your next landscape upgrade?</h2>
        <p className="mt-3 max-w-3xl text-slate-300">
          We can scope your project, recommend materials, and provide a detailed estimate based
          on your property goals and timeline.
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
