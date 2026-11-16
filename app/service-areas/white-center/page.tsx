import type { Metadata } from "next";
import { ServiceAreaTemplate } from "../../components/service-areas/service-area-template";
import { areaMetadata } from "../../lib/service-area-pages";
import { white_centerPage } from "../../lib/service-area-pages/white-center";

export const metadata: Metadata = areaMetadata(white_centerPage);

export default function Page() {
  return <ServiceAreaTemplate content={white_centerPage} />;
}
