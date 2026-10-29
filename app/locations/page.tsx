import { createPageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import { CTA, PageIntro } from "@/components/ui";
import MarketDirectory from "@/components/market-directory";
export const metadata: Metadata = createPageMetadata(
  {
    title: "Our 14 real estate markets across India",
    description:
      "Explore TBL’s real estate experience across Bangalore, Mumbai, Delhi NCR, Pune and 10 more Indian markets.",
  },
  "/locations",
);
export default function Locations() {
  return (
    <>
      <PageIntro
        eyebrow="A LOCAL PERSPECTIVE. A WIDER REACH."
        title="Rooted in the market.\nConnected to your growth."
        text="15 years of understanding the places, people and possibilities behind real estate. Explore the markets we’ve worked in."
      />
      <section className="container section section-first">
        <MarketDirectory />
      </section>
      <CTA />
    </>
  );
}
