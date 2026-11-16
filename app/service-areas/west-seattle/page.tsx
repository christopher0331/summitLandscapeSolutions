import type { Metadata } from "next";
import { ServiceAreaTemplate } from "../../components/service-areas/service-area-template";
import { areaMetadata } from "../../lib/service-area-pages";
import { west_seattlePage } from "../../lib/service-area-pages/west-seattle";

export const metadata: Metadata = areaMetadata(west_seattlePage);

export default function Page() {
  return <ServiceAreaTemplate content={west_seattlePage} />;
}
