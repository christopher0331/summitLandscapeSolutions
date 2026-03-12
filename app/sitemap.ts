import type { MetadataRoute } from "next";
import { allServiceAreas } from "./lib/service-area-data";
import { serviceCategories } from "./lib/service-data";

const baseUrl = "https://www.summitlandscapeseattle.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/projects",
    "/service-areas",
    "/testimonials",
    "/faq",
    "/contact",
    "/privacy-policy",
    "/terms-of-service",
  ];

  const categoryRoutes = serviceCategories.map((category) => `/services/${category.slug}`);
  const serviceRoutes = serviceCategories.flatMap((category) =>
    category.services.map((service) => `/services/${category.slug}/${service.slug}`),
  );
  const serviceAreaRoutes = allServiceAreas.map((area) => `/service-areas/${area.slug}`);

  return [...staticRoutes, ...categoryRoutes, ...serviceRoutes, ...serviceAreaRoutes].map(
    (route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    }),
  );
}
