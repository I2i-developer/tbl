import { PageIntro } from "@/components/ui";
export const metadata = {
  title: "Terms of use",
  description:
    "Website information, campaign expectations and use of the TBL project enquiry flow.",
};
export default function Terms() {
  return (
    <>
      <PageIntro
        eyebrow="A CLEAR UNDERSTANDING"
        title="Terms of use."
        text="Information about using this website. Updated 29 October 2026."
      />
      <article className="container legal-content">
        <h2>About this website</h2>
        <p>
          This website introduces Thok Bajao Lead and describes proposed
          approaches to real estate lead generation. Website information is
          general and does not form a service agreement or offer for a specific
          campaign.
        </p>
        <h2>Campaign scope and pricing</h2>
        <p>
          Deliverables, channels, timelines, fees, enquiry definitions and
          responsibilities must be discussed and agreed separately in writing.
          No campaign begins or purchase is completed through this website.
        </p>
        <h2>Results and examples</h2>
        <p>
          Lead generation does not guarantee a completed property sale. Outcomes
          depend on the project, audience, pricing, availability and follow-up,
          among other factors. The homepage radar and campaign brief are
          illustrative, not live results or customer records. Photography is
          representative and does not identify client projects.
        </p>
        <h2>Project enquiries</h2>
        <p>
          Preparing or downloading a brief does not send an enquiry, book a
          meeting or establish a contract. Where delivery is configured, a
          successful form response confirms receipt by the enquiry service, not
          acceptance of a campaign.
        </p>
        <h2>Responsible use</h2>
        <p>
          Use the website for lawful business enquiries. Submit information you
          are entitled to share and do not use the form to send abusive,
          misleading or unsolicited bulk content.
        </p>
        <h2>Website materials</h2>
        <p>
          Website copy and brand presentation are intended for TBL’s business
          use. Third-party photographs, fonts and icons remain subject to their
          respective licences. Do not imply that representative properties are
          TBL clients.
        </p>
        <h2>Further agreements</h2>
        <p>
          Any paid engagement requires its own approved agreement. These general
          website terms should be reviewed by the business before a public
          client launch and do not replace a service contract.
        </p>
      </article>
    </>
  );
}
