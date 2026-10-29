import { CTA, PageIntro } from "@/components/ui";
import { faqs } from "@/lib/content";
export const metadata = {
  title: "Frequently asked questions",
  description:
    "Straight answers about TBL’s real estate lead generation, markets, campaign scope, lead relevance and project enquiries.",
};
export default function FAQ() {
  return (
    <>
      <PageIntro
        eyebrow="GOOD QUESTIONS. STRAIGHT ANSWERS."
        title="A little clarity\ngoes a long way."
        text="Get to know our approach before we get to know your project."
      />
      <section className="section container narrow">
        <div className="faq-list faq-full">
          {faqs.map((f) => (
            <details key={f.q}>
              <summary>
                {f.q}
                <span>+</span>
              </summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}
