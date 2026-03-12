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
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-12 md:grid-cols-3">
        <section>
          <h2 className="text-base font-semibold text-slate-900">Summit Landscape Seattle</h2>
          <p className="mt-3 text-sm text-slate-600">
            Landscaping design, build, and maintenance services for Seattle and nearby
            communities.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-slate-900">Quick Links</h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
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
          <h2 className="text-base font-semibold text-slate-900">Contact</h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            <li>(206) 555-0199</li>
            <li>
              <a href="mailto:hello@summitlandscape.com" className="transition hover:text-emerald-700">
                hello@summitlandscape.com
              </a>
            </li>
            <li>Seattle, WA</li>
          </ul>
        </section>
      </div>

      <div className="border-t border-slate-200">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Summit Landscape Seattle. All rights reserved.</p>
          <div className="flex items-center gap-4">
            {legalLinks.map((link) => (
              <Link key={link.href} href={link.href} className="transition hover:text-slate-700">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
