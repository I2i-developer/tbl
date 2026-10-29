import type { Metadata } from "next";
import {
  CTA,
  PageIntro,
  ServiceCards,
  Eyebrow,
  TickList,
  Button,
} from "@/components/ui";
export const metadata: Metadata = {
  title: "Real estate lead generation services",
  description:
    "Explore focused lead generation, project launch campaigns and growth plans for brokers and channel partners with TBL.",
};
export default function Services() {
  return (
    <>
      <PageIntro
        eyebrow="WHAT WE DO"
        title="Your project deserves\na focused growth plan."
        text="Real estate lead generation shaped around your business, your audience and the places you know best."
      />
      <section className="container section section-first">
        <ServiceCards />
      </section>
      <section className="soft-section section">
        <div className="container split-content">
          <div>
            <Eyebrow>START WITH THE RIGHT FOUNDATION</Eyebrow>
            <h2>
              More clarity before
              <br />
              more activity.
            </h2>
            <p>
              Every project has a different story. A considered brief helps us
              agree on what to focus on, what information matters and how your
              team will follow up.
            </p>
            <Button href="/contact">Discuss your project</Button>
          </div>
          <div className="white-panel">
            <h3>What we discuss together</h3>
            <TickList
              items={[
                "The project and inventory you want to promote",
                "Your target market and buyer requirements",
                "Campaign scope and indicative budget",
                "What a relevant enquiry means to your team",
                "How enquiries are handed over and reviewed",
              ]}
            />
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
