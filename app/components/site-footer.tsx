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
    <footer className="relative bg-[#070907] text-white/65">
      <div className="h-[2px] bg-gradient-to-r from-transparent via-[color:var(--accent)] to-transparent" />
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-14 md:grid-cols-3">
        <section>
          <div className="flex flex-col leading-tight">
            <span className="font-display text-2xl font-semibold tracking-[0.18em] text-white">
              SUMMIT
            </span>
            <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.34em] text-[color:var(--accent)]">
              Landscape Seattle
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
            Landscaping design, build, and maintenance services for Seattle and nearby
            communities.
          </p>
        </section>

        <section>
          <h2 className="text-sm font-semibold uppercase tracking-[0.28em] text-white">Quick Links</h2>
          <ul className="mt-4 space-y-3 text-sm text-white/60">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-[color:var(--accent)]">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-sm font-semibold uppercase tracking-[0.28em] text-white">Contact</h2>
          <ul className="mt-4 space-y-3 text-sm text-white/60">
            <li>(206) 555-0199</li>
            <li>
              <a href="mailto:hello@summitlandscape.com" className="transition hover:text-[color:var(--accent)]">
                hello@summitlandscape.com
              </a>
            </li>
            <li>Seattle, WA</li>
          </ul>
        </section>
      </div>

      <div className="border-t border-white/5">
        <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-3 px-6 py-5 text-xs text-white/30">
          <p> {new Date().getFullYear()} Summit Landscape Seattle. All rights reserved.</p>
          <div className="flex items-center gap-4">
            {legalLinks.map((link) => (
              <Link key={link.href} href={link.href} className="transition hover:text-white/60">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
