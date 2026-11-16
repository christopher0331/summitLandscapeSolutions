import type { Metadata } from "next";
import { ServiceAreaTemplate } from "../../components/service-areas/service-area-template";
import { areaMetadata } from "../../lib/service-area-pages";
import { capitol_hillPage } from "../../lib/service-area-pages/capitol-hill";

export const metadata: Metadata = areaMetadata(capitol_hillPage);

export default function Page() {
  return <ServiceAreaTemplate content={capitol_hillPage} />;
}
