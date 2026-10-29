import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  Check,
  Compass,
  Handshake,
  MapPin,
} from "lucide-react";
import Radar from "@/components/radar";
import {
  Button,
  CTA,
  Eyebrow,
  MarketCard,
  SectionHeading,
  ServiceCards,
} from "@/components/ui";
import { locations, steps, faqs } from "@/lib/content";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <Eyebrow>REAL ESTATE LEAD GENERATION, REIMAGINED</Eyebrow>
            <h1>
              Great properties.
              <br />
              Right people.
              <br />
              <span>Better connections.</span>
            </h1>
            <p>
              Your next buyer isn’t just anywhere. We help you reach the right
              audience, in the right market, with 15 years of local
              understanding.
            </p>
            <div className="hero-actions">
              <Button>Find your next opportunity</Button>
              <Link className="plain-link" href="/how-it-works">
                See how it works <ArrowRight size={17} />
              </Link>
            </div>
            <div className="hero-reassurance">
              <span>
                <Check size={13} />
                Built for real estate
              </span>
              <span>
                <Check size={13} />
                Focused on your market
              </span>
            </div>
          </div>
          <Radar />
        </div>
        <div className="container hero-bottom">
          <span className="small-caps">
            A LOCAL PERSPECTIVE. A WIDER REACH.
          </span>
          <div>
            <span>
              <b>15</b> years of experience
            </span>
            <i />
            <span>
              <b>14</b> markets. One growth partner.
            </span>
          </div>
          <Link href="/locations">
            Explore our reach <ArrowUpRight size={15} />
          </Link>
        </div>
      </section>
      <section className="audience-strip">
        <div className="container">
          <span>
            MADE FOR THE PEOPLE
            <br />
            BEHIND THE PROPERTIES.
          </span>
          <div>
            <BuildingIcon />
            Builders & developers
          </div>
          <div>
            <Handshake size={22} strokeWidth={1.4} />
            Brokers & channel partners
          </div>
          <div>
            <Compass size={22} strokeWidth={1.4} />
            Real estate sales teams
          </div>
        </div>
      </section>
      <section className="section container markets-section">
        <SectionHeading
          eyebrow="LOCAL KNOWLEDGE. LASTING CONNECTIONS."
          title="Every market has a story.\nWe know where to start."
          text="From growing neighbourhoods to established cityscapes, we bring a local lens to your next growth opportunity."
        >
          <Button secondary href="/locations">
            Explore all 14 markets
          </Button>
        </SectionHeading>
        <div className="market-grid">
          {[locations[0], locations[3], locations[6]].map((l) => (
            <MarketCard key={l.slug} location={l} />
          ))}
        </div>
        <div className="market-list">
          <span>AND OUR REACH GOES FURTHER</span>
          <p>
            {[
              "Pune",
              "Jaipur",
              "Lucknow",
              "Andhra Pradesh",
              "Bihar (Patna)",
            ].map((name) => {
              const l = locations.find((x) => x.name === name)!;
              return (
                <Link href={`/locations/${l.slug}`} key={name}>
                  {name}
                </Link>
              );
            })}
            <Link href="/locations" className="more-markets">
              + 6 more <ArrowUpRight size={13} />
            </Link>
          </p>
        </div>
      </section>
      <section className="services-section section">
        <div className="container">
          <SectionHeading
            eyebrow="MORE THAN A LIST OF LEADS"
            title="Built around your business.\nFocused on your next move."
            text="Whether you’re launching a project or growing your local presence, start with a plan that understands your goals."
          />
          <ServiceCards />
        </div>
      </section>
      <section className="section container process-section">
        <div className="process-intro">
          <Eyebrow>A CLEAR PATH FORWARD</Eyebrow>
          <h2>
            Good connections
            <br />
            don’t happen
            <br />
            <span>by chance.</span>
          </h2>
          <p>
            A considered approach, from the first brief to the next
            conversation.
          </p>
          <Link className="text-link" href="/how-it-works">
            Get to know our process <ArrowUpRight size={17} />
          </Link>
          <div className="process-mini-radar" aria-hidden="true">
            <span />
            <span />
            <span />
            <Compass size={35} strokeWidth={1} />
          </div>
        </div>
        <div className="steps">
          {steps.map((s, i) => (
            <div className="step" key={s.title}>
              <span className="step-number">0{i + 1}</span>
              <div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
              <ArrowUpRight size={18} />
            </div>
          ))}
        </div>
      </section>
      <section className="about-band">
        <div className="container about-grid">
          <div className="experience-art">
            <img
              src="/images/hero.jpg"
              alt="A thoughtfully designed residential entrance"
              loading="lazy"
              width={600}
              height={600}
            />
            <div className="experience-label">
              <strong>15</strong>
              <span>
                YEARS OF
                <br />
                UNDERSTANDING
                <br />
                WHAT’S LOCAL.
              </span>
            </div>
          </div>
          <div className="about-copy">
            <Eyebrow>EXPERIENCE THAT GOES BEYOND THE BRIEF</Eyebrow>
            <h2>
              We see a neighbourhood. <br />
              You see your next <br />
              opportunity.
            </h2>
            <p>
              Real estate is local. The people, their priorities, the places
              they want to call home. For 15 years, we’ve worked with that
              understanding at the heart of what we do.
            </p>
            <p>
              At Thok Bajao Lead, we connect your property ambitions with a
              grounded approach to generating enquiries.
            </p>
            <Button secondary href="/about">
              The people behind TBL
            </Button>
          </div>
        </div>
      </section>
      <section className="section container faq-section">
        <div>
          <Eyebrow>A LITTLE MORE CLARITY</Eyebrow>
          <h2>
            Good questions.
            <br />
            Straight answers.
          </h2>
          <p>
            Because a good partnership starts
            <br />
            with understanding.
          </p>
          <Link className="text-link" href="/faq">
            All your questions, answered <ArrowUpRight size={17} />
          </Link>
        </div>
        <div className="faq-list">
          {faqs.slice(0, 4).map((f) => (
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
function BuildingIcon() {
  return (
    <svg
      width="22"
      height="23"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      aria-hidden="true"
    >
      <path d="M3 21V8l8-4v17M11 21V2l10 5v14M1 21h22M6 10v2m0 3v2m9-10v3m3 0v3m-3 0v3m3 0v3" />
    </svg>
  );
}
