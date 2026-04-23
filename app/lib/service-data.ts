export type ServiceItem = {
  name: string;
  slug: string;
  summary: string;
  whatsIncluded: string[];
};

export type ServiceCategory = {
  name: string;
  slug: string;
  summary: string;
  services: ServiceItem[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    name: "Lawn Care and Maintenance",
    slug: "lawn-care-maintenance",
    summary:
      "Recurring and seasonal lawn services that keep properties healthy, clean, and curb-appeal ready.",
    services: [
      {
        name: "Scheduled Lawn Care",
        slug: "scheduled-lawn-mowing",
        summary:
          "Reliable mowing, edging, and blow-off service tailored to season and grass growth.",
        whatsIncluded: [
          "Reliable scheduled mowing based on your property's needs and seasonal growth.",
          "Lawn mowing, edging, weed trimming, and debris cleanup included with each visit.",
          "Attention to detail to keep your lawn neat, healthy, and professionally maintained.",
          "Consistent, dependable service with quality you can count on.",
        ],
      },
      {
        name: "Fertilization and Weed Control",
        slug: "fertilization-weed-control",
        summary:
          "Targeted treatment plans to improve turf health and reduce broadleaf weeds and moss.",
        whatsIncluded: [
          "Personalized lawn assessment to identify nutrient needs, weed pressure, and seasonal treatment timing.",
          "Professional fertilization and weed control applications designed to strengthen turf and improve appearance.",
          "Clear recommendations, dependable scheduling, and transparent pricing with no surprises.",
          "Ongoing attention to lawn health and quality service focused on lasting results.",
        ],
      },
      {
        name: "Aeration and Overseeding",
        slug: "aeration-overseeding",
        summary:
          "Core aeration and overseeding to improve soil oxygen, drainage, and lawn density.",
        whatsIncluded: [
          "Personalized lawn evaluation to determine aeration and overseeding needs for stronger, healthier turf.",
          "Professional core aeration and premium overseeding designed to improve density, fill thin areas, and support root growth.",
          "Clear recommendations, straightforward scheduling, and transparent pricing with no surprises.",
          "Attention to detail and quality workmanship focused on lasting results and a healthier, fuller lawn.",
        ],
      },
      {
        name: "Seasonal Yard Cleanups",
        slug: "seasonal-yard-cleanups",
        summary:
          "Spring and fall cleanup services including leaf removal, pruning, and bed preparation.",
        whatsIncluded: [
          "Customized seasonal property evaluation to identify cleanup needs and prepare your landscape for the season ahead.",
          "Professional removal of leaves, debris, overgrowth, and seasonal buildup to refresh and maintain your property.",
          "Detailed cleanup services designed to improve appearance, support plant health, and protect long-term landscape value.",
          "Reliable scheduling, transparent pricing, and quality service with thorough cleanup and lasting results.",
        ],
      },
    ],
  },
  {
    name: "Hardscaping",
    slug: "hardscaping",
    summary:
      "Durable outdoor structures that improve function, traffic flow, and year-round enjoyment.",
    services: [
      {
        name: "Pavers, Patios and Walkways",
        slug: "paver-patios-walkways",
        summary:
          "Custom paver surfaces that improve outdoor living and connect key areas of your yard.",
        whatsIncluded: [
          "Customized site evaluation and design guidance tailored to your property, layout, and functional goals.",
          "Expert recommendations on paver materials, layout options, project scheduling, and transparent pricing.",
          "Professional installation built on proper preparation, precision craftsmanship, and long-lasting performance.",
          "Detail-focused execution, complete site cleanup, and a final walkthrough focused on quality and satisfaction.",
        ],
      },
      {
        name: "Retaining Walls",
        slug: "retaining-walls",
        summary:
          "Engineered retaining walls that stabilize slopes and create usable planting tiers.",
        whatsIncluded: [
          "Customized site evaluation to assess slope, drainage, and retaining wall solutions tailored to your property.",
          "Expert recommendations on wall materials, layout options, project scheduling, and transparent pricing.",
          "Professional construction focused on proper preparation, drainage management, structural stability, and lasting durability.",
          "Detail-driven execution, complete site cleanup, and a final walkthrough focused on quality, performance, and satisfaction.",
        ],
      },
      {
        name: "Outdoor Living Features",
        slug: "outdoor-living-features",
        summary:
          "Built-in seating, fire pit zones, and garden borders designed for Northwest weather.",
        whatsIncluded: [
          "Customized site evaluation and design guidance tailored to your property, lifestyle, and outdoor living goals.",
          "Expert recommendations on materials, layout options, project scheduling, and transparent pricing.",
          "Professional construction focused on precision craftsmanship, functionality, and lasting performance.",
          "Detail-driven execution, complete site cleanup, and a final walkthrough focused on quality, comfort, and satisfaction.",
        ],
      },
    ],
  },
  {
    name: "Landscaping",
    slug: "landscaping",
    summary:
      "Planting and design services focused on beauty, drainage performance, and low-maintenance growth.",
    services: [
      {
        name: "Landscape Design",
        slug: "landscape-design",
        summary:
          "Site-aware design concepts with planting palettes suited to Seattle microclimates.",
        whatsIncluded: [
          "Customized site evaluation and design consultation tailored to your property, lifestyle, and landscape goals.",
          "Expert guidance on layout, plant selections, materials, and functional features suited to Seattle conditions.",
          "Clear design recommendations, project planning, scheduling guidance, and transparent pricing.",
          "Detail-driven design process focused on beauty, functionality, and a final review to ensure your vision is brought to life.",
        ],
      },
      {
        name: "Planting Installation",
        slug: "planting-installation",
        summary:
          "Trees, shrubs, and perennials installed with proper spacing and long-term growth in mind.",
        whatsIncluded: [
          "Customized site evaluation and planting consultation tailored to your property, aesthetic goals, and growing conditions.",
          "Expert guidance on plant selections, layout design, and materials chosen for beauty, performance, and long-term health.",
          "Clear recommendations, project planning, scheduling guidance, and transparent pricing.",
          "Professional installation focused on proper preparation, detail-driven workmanship, complete site cleanup, and lasting results.",
        ],
      },
      {
        name: "Sod and Turf Installation",
        slug: "sod-turf-installation",
        summary:
          "Fresh sod installation with grading and soil prep for healthy root development.",
        whatsIncluded: [
          "Customized site evaluation and turf consultation tailored to your property, usage needs, and growing conditions.",
          "Expert guidance on sod or turf selection, layout preparation, project planning, and transparent pricing.",
          "Professional installation focused on proper preparation, drainage, soil health, and long-lasting performance.",
          "Detail-driven execution, complete site cleanup, and a final walkthrough focused on quality, establishment, and lasting results.",
        ],
      },
    ],
  },
];

export function getCategoryBySlug(categorySlug: string) {
  return serviceCategories.find((category) => category.slug === categorySlug);
}

export function getServiceBySlugs(categorySlug: string, serviceSlug: string) {
  const category = getCategoryBySlug(categorySlug);
  if (!category) return null;
  const service = category.services.find((item) => item.slug === serviceSlug);
  if (!service) return null;
  return { category, service };
}
