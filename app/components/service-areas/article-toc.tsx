import { textLinkClass } from "./site-copy";

export type TocItem = {
  href: string;
  label: string;
};

export function ArticleToc({ items }: { items: TocItem[] }) {
  return (
    <nav
      aria-label="On this page"
      className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4"
    >
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
        On this page
      </p>
      <ol className="mt-3 grid gap-2 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item.href}>
            <a href={item.href} className={textLinkClass}>
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
