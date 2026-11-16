import type { Attraction, ExternalLink } from "../../lib/service-area-page-types";
import { textLinkClass } from "./site-copy";

type AboutTheAreaProps = {
  areaName: string;
  intro: string;
  attractions: Attraction[];
  localLivingIntro: string;
  localLivingLinks: ExternalLink[];
};

export function AboutTheArea({
  areaName,
  intro,
  attractions,
  localLivingIntro,
  localLivingLinks,
}: AboutTheAreaProps) {
  return (
    <section id="about-the-area" className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">
          About the {areaName} area
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-700">{intro}</p>
        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="text-xl font-semibold text-slate-900">Places nearby</h3>
            <ul className="mt-4 space-y-5">
              {attractions.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={textLinkClass}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.name}
                  </a>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.blurb}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-slate-900">Local living resources</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">{localLivingIntro}</p>
            <ul className="mt-4 space-y-3">
              {localLivingLinks.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={textLinkClass}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
