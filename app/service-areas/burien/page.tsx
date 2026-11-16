import type { Metadata } from "next";
import { ServiceAreaTemplate } from "../../components/service-areas/service-area-template";
import { areaMetadata } from "../../lib/service-area-pages";
import { burienPage } from "../../lib/service-area-pages/burien";

export const metadata: Metadata = areaMetadata(burienPage);

export default function Page() {
  return <ServiceAreaTemplate content={burienPage} />;
}
