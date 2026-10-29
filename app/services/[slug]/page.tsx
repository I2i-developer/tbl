import { createPageMetadata } from "@/lib/metadata";
import { notFound } from "next/navigation";
import { services, steps } from "@/lib/content";
import {
  Button,
  CTA,
  Eyebrow,
  PageIntro,
  TickList,
  BackLink,
} from "@/components/ui";
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}
export const dynamicParams = false;
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  return createPageMetadata(
    { title: s?.title, description: s?.description },
    `/services/${slug}`,
  );
}
export default async function Service({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) notFound();
  return (
    <>
      <PageIntro
        eyebrow={s.title.toUpperCase()}
        title={s.short}
        text={s.description}
      >
        <Button>Plan my campaign</Button>
      </PageIntro>
      <section className="section container split-content">
        <div>
          <BackLink href="/services">All services</BackLink>
          <h2>
            A better starting point
            <br />
            for your next campaign.
          </h2>
          <p>{s.detail}</p>
          <p>
            We bring 15 years of real estate experience and a local perspective
            across 14 markets to the conversation.
          </p>
        </div>
        <div className="white-panel lavender-panel">
          <Eyebrow>THE SCOPE WE CAN EXPLORE</Eyebrow>
          <h3>Built around your priorities.</h3>
          <TickList items={s.points} />
          <p className="small-text">
            Final deliverables, campaign channels and timelines are agreed for
            your project.
          </p>
        </div>
      </section>
      <section className="section soft-section">
        <div className="container">
          <Eyebrow>HOW WE APPROACH IT</Eyebrow>
          <h2>From first brief to next steps.</h2>
          <div className="four-columns">
            {steps.map((x, i) => (
              <div key={x.title}>
                <span className="step-number">0{i + 1}</span>
                <h3>{x.title}</h3>
                <p>{x.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
