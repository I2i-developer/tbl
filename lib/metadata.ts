import type { Metadata } from "next";
import { brand } from "@/lib/content";

const defaultDescription =
  "Real estate lead generation for builders, developers and brokers. 15 years of experience across 14 Indian markets.";
const image = {
  url: new URL("/images/tbl-social-preview-v1.jpg", brand.url).href,
  width: 1200,
  height: 630,
  type: "image/jpeg",
  alt: "Thok Bajao Lead (TBL) logo",
};

/** Render share tags in the static HTML so previews work without JavaScript. */
export function createPageMetadata(
  metadata: Metadata,
  pathname: string,
): Metadata {
  const url = new URL(
    pathname.endsWith("/") ? pathname : `${pathname}/`,
    brand.url,
  ).href;
  const title =
    typeof metadata.title === "string"
      ? `${metadata.title} | Thok Bajao Lead`
      : "Thok Bajao Lead (TBL) | Real Estate Lead Generation";
  const description = metadata.description || defaultDescription;

  return {
    ...metadata,
    metadataBase: new URL(brand.url),
    alternates: { ...metadata.alternates, canonical: url },
    openGraph: {
      type: "website",
      locale: "en_IN",
      siteName: "Thok Bajao Lead (TBL)",
      title,
      description,
      url,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [{ url: image.url, alt: image.alt }],
    },
  };
}
