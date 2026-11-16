import Image from "next/image";
import type { GalleryPhoto } from "../../lib/service-area-page-types";

export function ServiceAreaPhotoGallery({
  heading,
  intro,
  photos,
}: {
  heading: string;
  intro: string;
  photos: GalleryPhoto[];
}) {
  return (
    <section id="recent-projects" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h2 className="text-3xl font-bold tracking-tight text-slate-900">{heading}</h2>
      <p className="mt-4 max-w-3xl text-base leading-7 text-slate-700">{intro}</p>
      <div className="mt-8 grid gap-6 sm:grid-cols-3">
        {photos.map((photo) => (
          <figure
            key={photo.src}
            className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              width={1200}
              height={900}
              className="h-52 w-full object-cover"
            />
            <figcaption className="px-4 py-3 text-sm leading-6 text-slate-600">
              {photo.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
