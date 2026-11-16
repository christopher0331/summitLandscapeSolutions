import type { Metadata } from "next";
import { ServiceAreaTemplate } from "../../components/service-areas/service-area-template";
import { areaMetadata } from "../../lib/service-area-pages";
import { kentPage } from "../../lib/service-area-pages/kent";

export const metadata: Metadata = areaMetadata(kentPage);

export default function Page() {
  return <ServiceAreaTemplate content={kentPage} />;
}
