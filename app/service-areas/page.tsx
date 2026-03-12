import type { Metadata } from "next";
import Link from "next/link";
import { serviceAreaSegments } from "../lib/service-area-data";

export const metadata: Metadata = {
  title: "Service Areas | Summit Landscape Seattle",
  description:
    "Summit Landscape serves Seattle neighborhoods and nearby communities including West Seattle, White Center, Burien, Tukwila, Renton, Des Moines, Kent, and Normandy Park.",
};

export default function ServiceAreasPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900">Service Areas</h1>
      <p className="mt-5 max-w-3xl text-lg text-slate-600">
        We provide landscaping services throughout Seattle neighborhoods and nearby
        communities. If your area is not listed, contact us to confirm availability.
      </p>

      <div className="mt-10 space-y-8">
        {serviceAreaSegments.map((segment) => (
          <section key={segment.name}>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">{segment.name}</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {segment.areas.map((area) => (
                <Link
                  key={area.slug}
                  href={`/service-areas/${area.slug}`}
                  className="rounded-2xl border border-slate-200 bg-white p-4 text-slate-700 transition hover:border-emerald-400 hover:text-emerald-700"
                >
                  {area.name}
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
