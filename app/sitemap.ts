// app/sitemap.ts
import type { MetadataRoute } from "next";

const baseUrl = "https://omvero.se";

export default function sitemap(): MetadataRoute.Sitemap {
  // Statisk lista med sidor
  const staticPages = ["", "/alla-verktyg"];

  // Lägg till dina verktyg här (kan byggas ut senare när vi har fler)
  const tools: string[] = [
    "/bmi-raknare",
    "/kaloriraknare",
    "/rot-kalkylator",
  ];

  // Bygg upp alla URL:er i rätt format för Next.js sitemap
  return [...staticPages, ...tools].map((path) => ({
    url: `${baseUrl}${path}`,            // OBS: backticks `...` + ${}
    lastModified: new Date().toISOString(),
    changeFrequency: "daily",
    priority: path === "" ? 1.0 : 0.7,
  }));
}
