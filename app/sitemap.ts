import type { MetadataRoute } from "next";
import { brand, locations, services, articles } from "@/lib/content";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  if (!brand.url) return [];
  return [
    "",
    "/services",
    "/locations",
    "/how-it-works",
    "/about",
    "/contact",
    "/resources",
    "/faq",
    "/privacy",
    "/terms",
    ...locations.map((l) => `/locations/${l.slug}`),
    ...services.map((s) => `/services/${s.slug}`),
    ...articles.map((a) => `/resources/${a.slug}`),
  ].map((path) => ({
    url: `${brand.url}${path}/`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
