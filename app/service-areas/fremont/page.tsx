import type { Metadata } from "next";
import { ServiceAreaTemplate } from "../../components/service-areas/service-area-template";
import { areaMetadata } from "../../lib/service-area-pages";
import { fremontPage } from "../../lib/service-area-pages/fremont";

export const metadata: Metadata = areaMetadata(fremontPage);

export default function Page() {
  return <ServiceAreaTemplate content={fremontPage} />;
}
