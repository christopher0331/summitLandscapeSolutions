import type { Metadata } from "next";
import { ServiceAreaTemplate } from "../../components/service-areas/service-area-template";
import { areaMetadata } from "../../lib/service-area-pages";
import { south_parkPage } from "../../lib/service-area-pages/south-park";

export const metadata: Metadata = areaMetadata(south_parkPage);

export default function Page() {
  return <ServiceAreaTemplate content={south_parkPage} />;
}
