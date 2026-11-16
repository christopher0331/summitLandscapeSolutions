import type { Metadata } from "next";
import { ServiceAreaTemplate } from "../../components/service-areas/service-area-template";
import { areaMetadata } from "../../lib/service-area-pages";
import { ballardPage } from "../../lib/service-area-pages/ballard";

export const metadata: Metadata = areaMetadata(ballardPage);

export default function Page() {
  return <ServiceAreaTemplate content={ballardPage} />;
}
