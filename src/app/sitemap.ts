import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, priority: 1 },
    ...projects.map(({ slug }) => ({ url: `${siteUrl}/work/${slug}`, priority: 0.8 })),
  ];
}
