import Image from "next/image";
import type { FeaturedProject as FeaturedProjectContent } from "../../lib/service-area-page-types";

export function FeaturedProject({ project }: { project: FeaturedProjectContent }) {
  return (
    <section id="featured-project" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <figure className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
            <Image
              src={project.src}
              alt={project.alt}
              width={1400}
              height={1000}
              className="h-full w-full object-cover"
            />
            <figcaption className="px-4 py-3 text-sm leading-6 text-slate-600">
              {project.caption}
            </figcaption>
          </figure>
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              {project.title}
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-700">{project.body}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
