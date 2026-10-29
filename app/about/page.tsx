import { createPageMetadata } from "@/lib/metadata";
import { CTA, PageIntro, Eyebrow, Button } from "@/components/ui";
import { Compass, Handshake, Target } from "lucide-react";
export const metadata = createPageMetadata(
  {
    title: "About TBL — 15 years of real estate connections",
    description:
      "Get to know Thok Bajao Lead: 15 years of experience, 14 Indian markets and a local perspective on real estate lead generation.",
  },
  "/about",
);
export default function About() {
  return (
    <>
      <PageIntro
        eyebrow="THE PEOPLE BEHIND THE CONNECTION"
        title="Local understanding.\nBuilt over 15 years."
        text="We’re Thok Bajao Lead. We help real estate businesses see the opportunity in their market and take a more focused approach to reaching it."
      />
      <section className="section container about-story">
        <div className="story-photo">
          <img
            src="/images/bangalore.jpg"
            alt="An expansive view of Bangalore’s residential landscape"
            width={900}
            height={700}
          />
          <span>
            Real estate is local.
            <br />
            So is our perspective.
          </span>
        </div>
        <div>
          <Eyebrow>OUR STORY</Eyebrow>
          <h2>
            Behind every property
            <br />
            is a place. And a person.
          </h2>
          <p>
            A homebuyer is looking for more than square feet. A developer is
            building more than inventory. And a growing real estate business
            needs more than another list of contacts.
          </p>
          <p>
            For 15 years, our work has centred on understanding that connection:
            the project, the market and the people it is meant for.
          </p>
          <p>
            Today, our experience spans 14 markets across India. We bring that
            perspective to real estate lead generation for builders, developers,
            brokers and sales teams.
          </p>
          <Button secondary href="/locations">
            Get to know our markets
          </Button>
        </div>
      </section>
      <section className="section soft-section">
        <div className="container">
          <Eyebrow>WHAT GUIDES US</Eyebrow>
          <h2>Three things we keep coming back to.</h2>
          <div className="values-grid">
            {[
              [
                Compass,
                "Local context",
                "A location is more than a pin on a map. We start with the places and requirements relevant to your project.",
              ],
              [
                Target,
                "Project fit",
                "The right plan begins with your offering and audience. We put a clear brief before campaign activity.",
              ],
              [
                Handshake,
                "Clear conversations",
                "Useful partnerships need clear scope, realistic expectations and feedback that both teams can act on.",
              ],
            ].map(([Icon, title, text]) => {
              const C = Icon as typeof Compass;
              return (
                <article key={title as string}>
                  <C size={28} strokeWidth={1.3} />
                  <h3>{title as string}</h3>
                  <p>{text as string}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
