import type { Metadata } from "next";
import { ServiceAreaTemplate } from "../../components/service-areas/service-area-template";
import { areaMetadata } from "../../lib/service-area-pages";
import { seward_parkPage } from "../../lib/service-area-pages/seward-park";

export const metadata: Metadata = areaMetadata(seward_parkPage);

export default function Page() {
  return <ServiceAreaTemplate content={seward_parkPage} />;
}
