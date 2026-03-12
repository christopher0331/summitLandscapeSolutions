import Link from "next/link";
import { serviceAreaSegments } from "../lib/service-area-data";
import { serviceCategories } from "../lib/service-data";

const primaryLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        <Link href="/" className="text-lg font-bold tracking-tight text-slate-900">
          Summit Landscape Seattle
        </Link>

        <nav className="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-700">
          {primaryLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-emerald-700">
              {link.label}
            </Link>
          ))}

          <div className="group relative">
            <Link href="/services" className="transition hover:text-emerald-700">
              Services
            </Link>
            <div className="invisible absolute right-0 top-full z-40 w-[760px] rounded-xl border border-slate-200 bg-white p-4 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="grid gap-4 md:grid-cols-3">
                {serviceCategories.map((category) => (
                  <section key={category.slug} className="rounded-lg border border-slate-200 p-3">
                    <Link
                      href={`/services/${category.slug}`}
                      className="text-sm font-semibold text-emerald-700 transition hover:text-emerald-800"
                    >
                      {category.name}
                    </Link>
                    <ul className="mt-3 space-y-2">
                      {category.services.map((service) => (
                        <li key={service.slug}>
                          <Link
                            href={`/services/${category.slug}/${service.slug}`}
                            className="text-sm text-slate-700 transition hover:text-emerald-700"
                          >
                            {service.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            </div>
          </div>

          <div className="group relative">
            <Link href="/service-areas" className="transition hover:text-emerald-700">
              Service Areas
            </Link>
            <div className="invisible absolute right-0 top-full z-40 w-[760px] rounded-xl border border-slate-200 bg-white p-4 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="grid gap-4 md:grid-cols-3">
                {serviceAreaSegments.map((segment) => (
                  <section
                    key={segment.name}
                    className={`rounded-lg border border-slate-200 p-3 ${
                      segment.name === "Seattle Neighborhoods" ? "md:col-span-2" : ""
                    }`}
                  >
                    <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
                      {segment.name}
                    </p>
                    <ul
                      className={`mt-2 ${
                        segment.name === "Seattle Neighborhoods"
                          ? "grid gap-x-4 gap-y-1 md:grid-cols-2"
                          : "space-y-1"
                      }`}
                    >
                      {segment.areas.map((area) => (
                        <li key={area.slug}>
                          <Link
                            href={`/service-areas/${area.slug}`}
                            className="text-sm text-slate-700 transition hover:text-emerald-700"
                          >
                            {area.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            </div>
          </div>

          <Link
            href="/contact"
            className="rounded-full bg-emerald-700 px-4 py-2 text-white transition hover:bg-emerald-800"
          >
            Free Estimate
          </Link>
        </nav>
      </div>
    </header>
  );
}
