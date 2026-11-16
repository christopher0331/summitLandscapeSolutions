import type { Metadata } from "next";
import { ServiceAreaTemplate } from "../../components/service-areas/service-area-template";
import { areaMetadata } from "../../lib/service-area-pages";
import { tukwilaPage } from "../../lib/service-area-pages/tukwila";

export const metadata: Metadata = areaMetadata(tukwilaPage);

export default function Page() {
  return <ServiceAreaTemplate content={tukwilaPage} />;
}
