import type { Metadata } from "next";
import { ServiceAreaTemplate } from "../../components/service-areas/service-area-template";
import { areaMetadata } from "../../lib/service-area-pages";
import { magnoliaPage } from "../../lib/service-area-pages/magnolia";

export const metadata: Metadata = areaMetadata(magnoliaPage);

export default function Page() {
  return <ServiceAreaTemplate content={magnoliaPage} />;
}
