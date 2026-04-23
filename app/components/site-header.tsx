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
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        <Link href="/" className="group flex flex-col leading-tight">
          <span className="font-display text-2xl font-semibold tracking-[0.18em] text-slate-900 transition-colors duration-300 group-hover:text-emerald-700">
            SUMMIT
          </span>
          <span className="text-[10px] font-medium uppercase tracking-[0.34em] text-emerald-700">
            Landscape Solutions
          </span>
        </Link>

        <nav className="flex flex-wrap items-center gap-5 text-sm font-medium text-slate-600">
          {primaryLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-xs uppercase tracking-[0.3em] transition hover:text-emerald-700"
            >
              {link.label}
            </Link>
          ))}

          <div className="group relative">
            <Link
              href="/services"
              className="relative text-xs uppercase tracking-[0.3em] transition hover:text-emerald-700"
            >
              Services
            </Link>
            <div className="invisible absolute right-0 top-full z-40 mt-4 w-[760px] rounded-2xl border border-slate-200 bg-white p-5 opacity-0 shadow-[0_24px_60px_rgba(15,23,42,0.12)] transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="grid gap-4 md:grid-cols-3">
                {serviceCategories.map((category) => (
                  <section
                    key={category.slug}
                    className="rounded-xl border border-slate-200 bg-slate-50/60 p-4"
                  >
                    <Link
                      href={`/services/${category.slug}`}
                      className="font-display text-base text-emerald-700 transition hover:text-emerald-800"
                    >
                      {category.name}
                    </Link>
                    <ul className="mt-3 space-y-2">
                      {category.services.map((service) => (
                        <li key={service.slug}>
                          <Link
                            href={`/services/${category.slug}/${service.slug}`}
                            className="text-sm text-slate-600 transition hover:text-slate-900"
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
            <Link
              href="/service-areas"
              className="relative text-xs uppercase tracking-[0.3em] transition hover:text-emerald-700"
            >
              Service Areas
            </Link>
            <div className="invisible absolute right-0 top-full z-40 mt-4 w-[760px] rounded-2xl border border-slate-200 bg-white p-5 opacity-0 shadow-[0_24px_60px_rgba(15,23,42,0.12)] transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="grid gap-4 md:grid-cols-3">
                {serviceAreaSegments.map((segment) => (
                  <section
                    key={segment.name}
                    className={`rounded-xl border border-slate-200 bg-slate-50/60 p-4 ${
                      segment.name === "Seattle Neighborhoods" ? "md:col-span-2" : ""
                    }`}
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700">
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
                            className="text-sm text-slate-600 transition hover:text-slate-900"
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
            className="rounded-full bg-emerald-700 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.28em] text-white transition hover:bg-emerald-800 hover:shadow-[0_10px_24px_rgba(4,120,87,0.25)]"
          >
            Free Estimate
          </Link>
        </nav>
      </div>
    </header>
  );
}
