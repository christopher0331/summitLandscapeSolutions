import type { Metadata } from "next";
import { ServiceAreaTemplate } from "../../components/service-areas/service-area-template";
import { areaMetadata } from "../../lib/service-area-pages";
import { georgetownPage } from "../../lib/service-area-pages/georgetown";

export const metadata: Metadata = areaMetadata(georgetownPage);

export default function Page() {
  return <ServiceAreaTemplate content={georgetownPage} />;
}
