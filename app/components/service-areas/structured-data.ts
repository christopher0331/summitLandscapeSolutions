import type { ServiceAreaPageContent } from "../../lib/service-area-page-types";
import { BUSINESS_NAME, SITE_ORIGIN } from "./site-copy";

export function buildAreaStructuredData(content: ServiceAreaPageContent) {
  const url = `${SITE_ORIGIN}/service-areas/${content.slug}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "LandscapingBusiness"],
        "@id": `${url}#business`,
        name: BUSINESS_NAME,
        url: SITE_ORIGIN,
        telephone: "+1-206-724-1936",
        image: `${SITE_ORIGIN}/summit-logo.png`,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Burien",
          addressRegion: "WA",
          addressCountry: "US",
        },
        areaServed: {
          "@type": "Place",
          name: content.name,
        },
      },
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: `Landscaping and lawn care in ${content.name}`,
        serviceType: "Landscaping and lawn care",
        provider: { "@id": `${url}#business` },
        areaServed: { "@type": "Place", name: content.name },
        url,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${SITE_ORIGIN}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Service Areas",
            item: `${SITE_ORIGIN}/service-areas`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: content.name,
            item: url,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: content.faqs.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };
}
