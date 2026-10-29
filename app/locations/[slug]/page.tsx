import { notFound } from "next/navigation";
import { MapPin, ArrowUpRight } from "lucide-react";
import { locations } from "@/lib/content";
import {
  Button,
  CTA,
  Eyebrow,
  BackLink,
  MarketCard,
  TickList,
} from "@/components/ui";
export function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}
export const dynamicParams = false;
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const l = locations.find((x) => x.slug === slug);
  return {
    title: `Real estate lead generation in ${l?.name || "your market"}`,
    description: l?.description,
  };
}
export default async function Location({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const l = locations.find((x) => x.slug === slug);
  if (!l) notFound();
  const related = locations
    .filter((x) => x.slug !== l.slug && x.region === l.region)
    .slice(0, 3);
  return (
    <>
      <section className="location-hero container">
        <div>
          <BackLink href="/locations">All our markets</BackLink>
          <Eyebrow>
            <MapPin size={12} />
            {l.name.toUpperCase()} · {l.region.toUpperCase()} INDIA
          </Eyebrow>
          <h1>{l.focus}</h1>
          <p>{l.description}</p>
          <Button href={`/contact?market=${l.slug}`}>
            Let’s talk {l.name}
          </Button>
        </div>
        <div className="location-hero-photo">
          <img
            src={`/images/${l.image}.jpg`}
            alt={
              l.slug === "mumbai"
                ? "Gateway of India on the Mumbai waterfront"
                : "Illustrative architecture and residential setting"
            }
            width={900}
            height={800}
          />
          <span>
            <MapPin size={15} />
            Our {l.name} market focus
          </span>
          <small>Representative imagery</small>
        </div>
      </section>
      <section className="soft-section section">
        <div className="container split-content">
          <div>
            <Eyebrow>WHAT LOCAL FOCUS LOOKS LIKE</Eyebrow>
            <h2>{l.note}.</h2>
            <p>
              A campaign should reflect the market it serves. We start with your
              project’s location and buyer requirements, then discuss how to
              turn that understanding into a practical enquiry plan.
            </p>
            <p>
              <strong>Locations to discuss:</strong> {l.areas}. The exact
              campaign area is agreed around your project.
            </p>
          </div>
          <div className="white-panel">
            <h3>Your market. Your project. Your brief.</h3>
            <TickList
              items={[
                "Your property type and project stage",
                "The neighbourhoods you want to reach",
                "The buyer requirements that matter",
                "Your sales team’s follow-up process",
              ]}
            />
            <Button secondary href={`/contact?market=${l.slug}`}>
              Build your project brief
            </Button>
          </div>
        </div>
      </section>
      {related.length > 0 && (
        <section className="container section">
          <Eyebrow>EXPLORE THE REGION</Eyebrow>
          <h2>More markets. The same local mindset.</h2>
          <div className="market-grid related-markets">
            {related.map((x) => (
              <MarketCard location={x} key={x.slug} />
            ))}
          </div>
        </section>
      )}
      <CTA />
    </>
  );
}
