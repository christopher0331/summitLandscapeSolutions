import type { Metadata } from "next";
import { ServiceAreaTemplate } from "../../components/service-areas/service-area-template";
import { areaMetadata } from "../../lib/service-area-pages";
import { madronaPage } from "../../lib/service-area-pages/madrona";

export const metadata: Metadata = areaMetadata(madronaPage);

export default function Page() {
  return <ServiceAreaTemplate content={madronaPage} />;
}
