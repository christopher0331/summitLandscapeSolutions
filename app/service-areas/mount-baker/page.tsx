import type { Metadata } from "next";
import { ServiceAreaTemplate } from "../../components/service-areas/service-area-template";
import { areaMetadata } from "../../lib/service-area-pages";
import { mount_bakerPage } from "../../lib/service-area-pages/mount-baker";

export const metadata: Metadata = areaMetadata(mount_bakerPage);

export default function Page() {
  return <ServiceAreaTemplate content={mount_bakerPage} />;
}
