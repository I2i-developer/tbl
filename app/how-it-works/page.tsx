import { createPageMetadata } from "@/lib/metadata";
import { CTA, PageIntro, Eyebrow, Button } from "@/components/ui";
import { steps } from "@/lib/content";
export const metadata = createPageMetadata(
  {
    title: "How our approach works",
    description:
      "From project brief and audience planning to enquiry handover and sales feedback: explore the TBL approach.",
  },
  "/how-it-works",
);
export default function HowItWorks() {
  return (
    <>
      <PageIntro
        eyebrow="THE TBL APPROACH"
        title="A clear plan.\nA more useful conversation."
        text="Good campaigns start with understanding. Here’s how we approach the journey from your first brief to the next opportunity."
      />
      <section className="section container process-page">
        {steps.map((s, i) => (
          <article key={s.title}>
            <span className="big-number">0{i + 1}</span>
            <div>
              <Eyebrow>
                {["UNDERSTAND", "FOCUS", "ACTIVATE", "LEARN"][i]}
              </Eyebrow>
              <h2>{s.title}</h2>
              <p>{s.text}</p>
              <p>
                {
                  [
                    "Bring your project name, location, property type, launch stage and business goals. If you have run campaigns before, your sales team’s observations help us understand what to improve.",
                    "Agree on who the project suits, the locations to consider and the information that makes an enquiry useful. This is also the point to discuss scope, budget and expectations.",
                    "Confirm deliverables, ownership and the enquiry handover process. Campaign channels and timing belong in the agreed scope, so everyone understands the next steps.",
                    "Review sales feedback in a consistent way. Discuss enquiry fit, common buyer questions and follow-up outcomes, then use that context to decide the next change.",
                  ][i]
                }
              </p>
            </div>
          </article>
        ))}
      </section>
      <section className="soft-section section">
        <div className="container centered narrow">
          <Eyebrow>A PARTNERSHIP WITH CLEAR EXPECTATIONS</Eyebrow>
          <h2>
            Enquiries start the conversation.
            <br />
            Your project takes it forward.
          </h2>
          <p>
            We focus on the enquiry journey. Property sales also depend on the
            offering, pricing, availability and your team’s follow-up. We
            believe a clear discussion about those factors makes a better
            starting point.
          </p>
          <Button href="/contact">Start with your project</Button>
        </div>
      </section>
      <CTA />
    </>
  );
}
