import { createPageMetadata } from "@/lib/metadata";
import Link from "next/link";
import { PageIntro } from "@/components/ui";
export const metadata = createPageMetadata(
  {
    title: "Privacy policy",
    description:
      "How the TBL website handles project enquiry details and website data.",
  },
  "/privacy",
);
export default function Privacy() {
  return (
    <>
      <PageIntro
        eyebrow="YOUR INFORMATION"
        title="Privacy, in plain language."
        text="How this website handles information you choose to share. Updated 29 October 2026."
      />
      <article className="container legal-content">
        <h2>Information in a project enquiry</h2>
        <p>
          The enquiry form asks for your name, business email, phone number,
          company or project, business type, market and goals. Budget is
          optional. These details are intended to help TBL discuss your project
          requirements.
        </p>
        <h2>Preparing a brief</h2>
        <p>
          When the website is in brief-preparation mode, your form details
          remain in the current page session and are not sent to TBL. You can
          download a text file and choose how to share it. The frontend does not
          save enquiry information in browser local storage.
        </p>
        <h2>Sending an enquiry</h2>
        <p>
          If enquiry delivery is enabled, the form sends the details you provide
          to the configured enquiry service. The form explains whether it is
          preparing a brief or sending an enquiry. A delivery confirmation is
          shown only after that service returns a successful response.
        </p>
        <h2>Cookies, analytics and hosting</h2>
        <p>
          This site does not install advertising pixels or analytics trackers.
          Hosting and access services may process technical request information,
          such as IP addresses and browser information, to deliver and protect
          the website. An access-controlled preview may require its hosting
          provider’s sign-in.
        </p>
        <h2>Your choices</h2>
        <p>
          Provide only the information needed for a business enquiry. Avoid
          sharing financial documents, identification numbers or other sensitive
          personal information. Contact your TBL representative to discuss
          access, correction or deletion of information you have sent.
        </p>
        <h2>Third-party processing and retention</h2>
        <p>
          Before enquiry delivery is enabled for a public launch, TBL should
          confirm the receiving service, its retention period and a verified
          privacy contact. This page describes the current frontend behaviour;
          those business-specific details must be added when selected.
        </p>
        <h2>Questions</h2>
        <p>
          You can review the enquiry process on our{" "}
          <Link href="/contact">contact page</Link> or discuss privacy questions
          with your TBL representative before sharing information.
        </p>
      </article>
    </>
  );
}
