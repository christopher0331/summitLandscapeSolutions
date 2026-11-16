import type { Metadata } from "next";
import { ServiceAreaTemplate } from "../../components/service-areas/service-area-template";
import { areaMetadata } from "../../lib/service-area-pages";
import { columbia_cityPage } from "../../lib/service-area-pages/columbia-city";

export const metadata: Metadata = areaMetadata(columbia_cityPage);

export default function Page() {
  return <ServiceAreaTemplate content={columbia_cityPage} />;
}
