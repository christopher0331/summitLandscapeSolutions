import type { Metadata } from "next";
import { ServiceAreaTemplate } from "../../components/service-areas/service-area-template";
import { areaMetadata } from "../../lib/service-area-pages";
import { queen_annePage } from "../../lib/service-area-pages/queen-anne";

export const metadata: Metadata = areaMetadata(queen_annePage);

export default function Page() {
  return <ServiceAreaTemplate content={queen_annePage} />;
}
