import type { Metadata } from "next";
import { ServiceAreaTemplate } from "../../components/service-areas/service-area-template";
import { areaMetadata } from "../../lib/service-area-pages";
import { beacon_hillPage } from "../../lib/service-area-pages/beacon-hill";

export const metadata: Metadata = areaMetadata(beacon_hillPage);

export default function Page() {
  return <ServiceAreaTemplate content={beacon_hillPage} />;
}
