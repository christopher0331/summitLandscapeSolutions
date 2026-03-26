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
    <header className="sticky top-0 z-30 border-b border-[color:var(--line)] bg-[#0b0f0d]/95 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        <Link href="/" className="group flex flex-col leading-tight">
          <span className="font-display text-2xl font-semibold tracking-[0.18em] text-white transition-colors duration-300 group-hover:text-[color:var(--accent)]">
            SUMMIT
          </span>
          <span className="text-[10px] font-medium uppercase tracking-[0.34em] text-[color:var(--accent)]">
            Landscape Seattle
          </span>
        </Link>

        <nav className="flex flex-wrap items-center gap-5 text-sm font-medium text-[color:var(--muted)]">
          {primaryLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-xs uppercase tracking-[0.3em] transition hover:text-[color:var(--accent)]"
            >
              {link.label}
            </Link>
          ))}

          <div className="group relative">
            <Link
              href="/services"
              className="relative text-xs uppercase tracking-[0.3em] transition hover:text-[color:var(--accent)]"
            >
              Services
            </Link>
            <div className="invisible absolute right-0 top-full z-40 mt-4 w-[760px] border border-[color:var(--line)] bg-[rgba(11,15,13,0.98)] p-5 opacity-0 shadow-[0_24px_80px_rgba(0,0,0,0.45)] transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="grid gap-4 md:grid-cols-3">
                {serviceCategories.map((category) => (
                  <section key={category.slug} className="border border-[color:var(--line)] bg-white/[0.02] p-4">
                    <Link
                      href={`/services/${category.slug}`}
                      className="font-display text-base text-[color:var(--accent)] transition hover:text-[color:var(--accent-strong)]"
                    >
                      {category.name}
                    </Link>
                    <ul className="mt-3 space-y-2">
                      {category.services.map((service) => (
                        <li key={service.slug}>
                          <Link
                            href={`/services/${category.slug}/${service.slug}`}
                            className="text-sm text-[color:var(--muted)] transition hover:text-white"
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
              className="relative text-xs uppercase tracking-[0.3em] transition hover:text-[color:var(--accent)]"
            >
              Service Areas
            </Link>
            <div className="invisible absolute right-0 top-full z-40 mt-4 w-[760px] border border-[color:var(--line)] bg-[rgba(11,15,13,0.98)] p-5 opacity-0 shadow-[0_24px_80px_rgba(0,0,0,0.45)] transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="grid gap-4 md:grid-cols-3">
                {serviceAreaSegments.map((segment) => (
                  <section
                    key={segment.name}
                    className={`border border-[color:var(--line)] bg-white/[0.02] p-4 ${
                      segment.name === "Seattle Neighborhoods" ? "md:col-span-2" : ""
                    }`}
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--accent)]">
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
                            className="text-sm text-[color:var(--muted)] transition hover:text-white"
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
            className="border border-[color:var(--accent)] bg-[color:var(--accent)] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.28em] text-[#0b0f0d] transition hover:bg-[color:var(--accent-strong)] hover:shadow-[0_0_28px_rgba(216,184,117,0.28)]"
          >
            Free Estimate
          </Link>
        </nav>
      </div>
    </header>
  );
}
