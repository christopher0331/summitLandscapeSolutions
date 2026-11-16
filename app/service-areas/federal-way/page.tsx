import type { Metadata } from "next";
import { ServiceAreaTemplate } from "../../components/service-areas/service-area-template";
import { areaMetadata } from "../../lib/service-area-pages";
import { federal_wayPage } from "../../lib/service-area-pages/federal-way";

export const metadata: Metadata = areaMetadata(federal_wayPage);

export default function Page() {
  return <ServiceAreaTemplate content={federal_wayPage} />;
}
