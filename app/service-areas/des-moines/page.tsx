import type { Metadata } from "next";
import { ServiceAreaTemplate } from "../../components/service-areas/service-area-template";
import { areaMetadata } from "../../lib/service-area-pages";
import { des_moinesPage } from "../../lib/service-area-pages/des-moines";

export const metadata: Metadata = areaMetadata(des_moinesPage);

export default function Page() {
  return <ServiceAreaTemplate content={des_moinesPage} />;
}
