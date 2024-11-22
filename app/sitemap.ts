import { MetadataRoute } from "next";

import { getAllWorkItems } from "@/lib/api";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const workItems = await getAllWorkItems();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://nrthpoint.com";

  const workUrls = workItems.map((work) => ({
    url: `${siteUrl}/work/${work.url}`,
    lastModified: new Date().toISOString(),
  }));

  return [
    { url: siteUrl, lastModified: new Date().toISOString() },
    ...workUrls,
  ];
}
