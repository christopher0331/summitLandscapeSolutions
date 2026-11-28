import type { Metadata } from "next";
import { ServiceAreaTemplate } from "../../components/service-areas/service-area-template";
import { areaMetadata } from "../../lib/service-area-pages";
import { highland_parkPage } from "../../lib/service-area-pages/highland-park";

export const metadata: Metadata = areaMetadata(highland_parkPage);

export default function Page() {
  return <ServiceAreaTemplate content={highland_parkPage} />;
}
