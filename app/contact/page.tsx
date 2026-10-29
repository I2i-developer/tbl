import { Check, ArrowUpRight, Mail, Phone } from "lucide-react";
import Link from "next/link";
import ContactForm from "@/components/contact-form";
import { Eyebrow } from "@/components/ui";
import { brand } from "@/lib/content";
export const metadata = {
  title: "Let’s talk about your real estate project",
  description:
    "Share your real estate project, market and campaign goals with Thok Bajao Lead. Start a focused conversation about your next opportunity.",
};
export default function Contact() {
  return (
    <section className="container contact-layout section">
      <div className="contact-intro">
        <Eyebrow>GREAT THINGS START WITH A CONVERSATION</Eyebrow>
        <h1>
          Your next chapter.
          <br />
          <span>
            Let’s build it
            <br />
            together.
          </span>
        </h1>
        <p>
          Tell us about your project, your market and where you want to go.
          We’ll start with understanding your business.
        </p>
        <div className="contact-proof">
          <div>
            <strong>15</strong>
            <span>years of experience</span>
          </div>
          <div>
            <strong>14</strong>
            <span>Indian markets</span>
          </div>
        </div>
        <div className="contact-checks">
          <span>
            <Check size={15} />
            For builders, brokers & real estate teams
          </span>
          <span>
            <Check size={15} />A conversation around your project
          </span>
          <span>
            <Check size={15} />
            Clear scope before getting started
          </span>
        </div>
        {brand.email && (
          <a className="contact-direct" href={`mailto:${brand.email}`}>
            <Mail size={18} />
            {brand.email}
          </a>
        )}
        {brand.phone && (
          <a
            className="contact-direct"
            href={`tel:${brand.phone.replace(/\s/g, "")}`}
          >
            <Phone size={18} />
            {brand.phone}
          </a>
        )}
        <Link className="text-link" href="/faq">
          A few questions first? <ArrowUpRight size={17} />
        </Link>
      </div>
      <ContactForm />
    </section>
  );
}
