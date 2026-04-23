import Link from "next/link";

const quickLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-service", label: "Terms of Service" },
];

export function SiteFooter() {
  return (
    <footer className="relative border-t border-slate-200 bg-white text-slate-600">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-14 md:grid-cols-3">
        <section>
          <div className="flex flex-col leading-tight">
            <span className="font-display text-2xl font-semibold tracking-[0.18em] text-slate-900">
              SUMMIT
            </span>
            <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.34em] text-emerald-700">
              Landscape Solutions
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-600">
            Landscaping design, build, and maintenance services for Burien, Seattle, and
            surrounding communities.
          </p>
        </section>

        <section>
          <h2 className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-900">
            Quick Links
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-emerald-700">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-900">
            Contact
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            <li>
              <a href="tel:+12067241936" className="transition hover:text-emerald-700">
                206.724.1936
              </a>
            </li>
            <li>
              <a
                href="mailto:jamarrhenaifesh@summitlandscapesolutions.co"
                className="transition hover:text-emerald-700 break-all"
              >
                jamarrhenaifesh@summitlandscapesolutions.co
              </a>
            </li>
            <li>Burien, WA</li>
          </ul>
        </section>
      </div>

      <div className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-3 px-6 py-5 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Summit Landscape Solutions. All rights reserved.</p>
          <div className="flex items-center gap-4">
            {legalLinks.map((link) => (
              <Link key={link.href} href={link.href} className="transition hover:text-slate-900">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
