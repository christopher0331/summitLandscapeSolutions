import type { Metadata } from "next";
import { ServiceAreaTemplate } from "../../components/service-areas/service-area-template";
import { areaMetadata } from "../../lib/service-area-pages";
import { normandy_parkPage } from "../../lib/service-area-pages/normandy-park";

export const metadata: Metadata = areaMetadata(normandy_parkPage);

export default function Page() {
  return <ServiceAreaTemplate content={normandy_parkPage} />;
}
