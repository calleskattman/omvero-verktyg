// app/sitemap.ts
import type { MetadataRoute } from "next";
import { tools } from "@/config/tools";

const baseUrl = "https://omvero.se";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  // 1. Statiska sidor
  const staticPages: MetadataRoute.Sitemap = [
    "",
    "/verktyg",
    "/alla-verktyg",
    "/om",
    "/kontakt",
    "/integritetspolicy",
    "/cookies",
    "/villkor",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "" ? 1.0 : 0.7,
  }));

  // 2. Dynamiska verktyg från configen
  const toolPages: MetadataRoute.Sitemap = tools.map((tool) => ({
    url: `${baseUrl}/${tool.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...staticPages, ...toolPages];
}
