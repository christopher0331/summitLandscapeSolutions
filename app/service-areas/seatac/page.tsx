import type { Metadata } from "next";
import { ServiceAreaTemplate } from "../../components/service-areas/service-area-template";
import { areaMetadata } from "../../lib/service-area-pages";
import { seatacPage } from "../../lib/service-area-pages/seatac";

export const metadata: Metadata = areaMetadata(seatacPage);

export default function Page() {
  return <ServiceAreaTemplate content={seatacPage} />;
}
