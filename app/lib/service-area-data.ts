export type ServiceArea = {
  name: string;
  slug: string;
  summary: string;
};

export type ServiceAreaSegment = {
  name: string;
  areas: ServiceArea[];
};

export const serviceAreaSegments: ServiceAreaSegment[] = [
  {
    name: "Seattle Neighborhoods",
    areas: [
      {
        name: "West Seattle",
        slug: "west-seattle",
        summary: "Lawn, landscape, and hardscape services throughout West Seattle.",
      },
      {
        name: "Ballard",
        slug: "ballard",
        summary: "Landscape design and maintenance support for Ballard properties.",
      },
      {
        name: "Capitol Hill",
        slug: "capitol-hill",
        summary: "Detail-focused outdoor services for homes and multifamily lots.",
      },
      {
        name: "Fremont",
        slug: "fremont",
        summary: "Practical landscaping and scheduled lawn care for Fremont clients.",
      },
      {
        name: "Green Lake",
        slug: "green-lake",
        summary: "Planting, lawn care, and hardscape updates near Green Lake.",
      },
      {
        name: "Magnolia",
        slug: "magnolia",
        summary: "Seattle climate-friendly landscape care and installation in Magnolia.",
      },
      {
        name: "Queen Anne",
        slug: "queen-anne",
        summary: "Professional lawn and landscape service for Queen Anne properties.",
      },
      {
        name: "Beacon Hill",
        slug: "beacon-hill",
        summary: "Reliable property maintenance and landscape improvements in Beacon Hill.",
      },
      {
        name: "Madrona",
        slug: "madrona",
        summary: "Custom landscape enhancements and recurring maintenance in Madrona.",
      },
      {
        name: "Rainier Valley",
        slug: "rainier-valley",
        summary: "Seasonal cleanup, lawn care, and planting services in Rainier Valley.",
      },
    ],
  },
  {
    name: "South of Seattle",
    areas: [
      {
        name: "White Center",
        slug: "white-center",
        summary: "Residential and commercial landscaping support in White Center.",
      },
      {
        name: "Burien",
        slug: "burien",
        summary: "Landscape planning, hardscape, and yard maintenance in Burien.",
      },
      {
        name: "Tukwila",
        slug: "tukwila",
        summary: "Reliable lawn and hardscape services for Tukwila-area properties.",
      },
      {
        name: "Renton",
        slug: "renton",
        summary: "Full-service landscaping and scheduled maintenance in Renton.",
      },
      {
        name: "Des Moines",
        slug: "des-moines",
        summary: "Outdoor upgrades and recurring lawn care in Des Moines.",
      },
      {
        name: "Kent",
        slug: "kent",
        summary: "Landscape services for homes and businesses across Kent.",
      },
      {
        name: "Normandy Park",
        slug: "normandy-park",
        summary: "Premium landscaping and property upkeep in Normandy Park.",
      },
    ],
  },
];

export const allServiceAreas = serviceAreaSegments.flatMap((segment) => segment.areas);

export function getServiceAreaBySlug(areaSlug: string) {
  return allServiceAreas.find((area) => area.slug === areaSlug);
}
