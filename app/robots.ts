import type { MetadataRoute } from "next";
import { brand } from "@/lib/content";
export const dynamic = "force-static";
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    ...(brand.url ? { sitemap: `${brand.url}/sitemap.xml` } : {}),
  };
}
