import type { Metadata } from "next";
import { ServiceAreaTemplate } from "../../components/service-areas/service-area-template";
import { areaMetadata } from "../../lib/service-area-pages";
import { rentonPage } from "../../lib/service-area-pages/renton";

export const metadata: Metadata = areaMetadata(rentonPage);

export default function Page() {
  return <ServiceAreaTemplate content={rentonPage} />;
}
