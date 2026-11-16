import type { Metadata } from "next";
import { ServiceAreaTemplate } from "../../components/service-areas/service-area-template";
import { areaMetadata } from "../../lib/service-area-pages";
import { green_lakePage } from "../../lib/service-area-pages/green-lake";

export const metadata: Metadata = areaMetadata(green_lakePage);

export default function Page() {
  return <ServiceAreaTemplate content={green_lakePage} />;
}
