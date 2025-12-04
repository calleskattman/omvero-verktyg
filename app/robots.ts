// app/robots.ts
import type { MetadataRoute } from "next";

const baseUrl = "https://omvero.se";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Här kan du lägga till ev. disallow i framtiden, t.ex. "/admin"
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
