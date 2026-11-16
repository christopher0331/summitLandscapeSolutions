import type { Metadata } from "next";
import type { ServiceAreaPageContent } from "../service-area-page-types";
import { SITE_ORIGIN } from "../../components/service-areas/site-copy";
import { alkiPage } from "./alki";
import { ballardPage } from "./ballard";
import { beacon_hillPage } from "./beacon-hill";
import { burienPage } from "./burien";
import { capitol_hillPage } from "./capitol-hill";
import { columbia_cityPage } from "./columbia-city";
import { des_moinesPage } from "./des-moines";
import { federal_wayPage } from "./federal-way";
import { fremontPage } from "./fremont";
import { georgetownPage } from "./georgetown";
import { green_lakePage } from "./green-lake";
import { kentPage } from "./kent";
import { madronaPage } from "./madrona";
import { magnoliaPage } from "./magnolia";
import { mount_bakerPage } from "./mount-baker";
import { normandy_parkPage } from "./normandy-park";
import { queen_annePage } from "./queen-anne";
import { rainier_valleyPage } from "./rainier-valley";
import { rentonPage } from "./renton";
import { seatacPage } from "./seatac";
import { seward_parkPage } from "./seward-park";
import { south_parkPage } from "./south-park";
import { tukwilaPage } from "./tukwila";
import { west_seattlePage } from "./west-seattle";
import { white_centerPage } from "./white-center";

export const areaPageBySlug: Record<string, ServiceAreaPageContent> = {
  "alki": alkiPage,
  "ballard": ballardPage,
  "beacon-hill": beacon_hillPage,
  "burien": burienPage,
  "capitol-hill": capitol_hillPage,
  "columbia-city": columbia_cityPage,
  "des-moines": des_moinesPage,
  "federal-way": federal_wayPage,
  "fremont": fremontPage,
  "georgetown": georgetownPage,
  "green-lake": green_lakePage,
  "kent": kentPage,
  "madrona": madronaPage,
  "magnolia": magnoliaPage,
  "mount-baker": mount_bakerPage,
  "normandy-park": normandy_parkPage,
  "queen-anne": queen_annePage,
  "rainier-valley": rainier_valleyPage,
  "renton": rentonPage,
  "seatac": seatacPage,
  "seward-park": seward_parkPage,
  "south-park": south_parkPage,
  "tukwila": tukwilaPage,
  "west-seattle": west_seattlePage,
  "white-center": white_centerPage,
};

export function getServiceAreaPage(slug: string): ServiceAreaPageContent | undefined {
  return areaPageBySlug[slug];
}

export function areaMetadata(content: ServiceAreaPageContent): Metadata {
  const canonical = `${SITE_ORIGIN}/service-areas/${content.slug}`;
  return {
    title: content.title,
    description: content.description,
    alternates: { canonical },
    openGraph: {
      title: content.title,
      description: content.description,
      url: canonical,
      type: "website",
    },
  };
}
