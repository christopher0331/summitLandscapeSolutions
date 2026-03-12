export type ServiceItem = {
  name: string;
  slug: string;
  summary: string;
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
      "Recurring and seasonal lawn services that keep Seattle properties healthy, clean, and curb-appeal ready.",
    services: [
      {
        name: "Scheduled Lawn Mowing",
        slug: "scheduled-lawn-mowing",
        summary:
          "Reliable mowing, edging, and blow-off service tailored to season and grass growth.",
      },
      {
        name: "Fertilization and Weed Control",
        slug: "fertilization-weed-control",
        summary:
          "Targeted treatment plans to improve turf health and reduce broadleaf weeds and moss.",
      },
      {
        name: "Aeration and Overseeding",
        slug: "aeration-overseeding",
        summary:
          "Core aeration and overseeding to improve soil oxygen, drainage, and lawn density.",
      },
      {
        name: "Seasonal Yard Cleanups",
        slug: "seasonal-yard-cleanups",
        summary:
          "Spring and fall cleanup services including leaf removal, pruning, and bed preparation.",
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
        name: "Paver Patios and Walkways",
        slug: "paver-patios-walkways",
        summary:
          "Custom paver surfaces that improve outdoor living and connect key areas of your yard.",
      },
      {
        name: "Retaining Walls",
        slug: "retaining-walls",
        summary:
          "Engineered retaining walls that stabilize slopes and create usable planting tiers.",
      },
      {
        name: "Outdoor Living Features",
        slug: "outdoor-living-features",
        summary:
          "Built-in seating, fire pit zones, and garden borders designed for Northwest weather.",
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
      },
      {
        name: "Planting Installation",
        slug: "planting-installation",
        summary:
          "Trees, shrubs, and perennials installed with proper spacing and long-term growth in mind.",
      },
      {
        name: "Sod and Turf Installation",
        slug: "sod-turf-installation",
        summary:
          "Fresh sod installation with grading and soil prep for healthy root development.",
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
