import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Wordmark } from "./header";
import { locations, services, brand } from "@/lib/content";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <Link href="/" aria-label="Thok Bajao Lead home">
              <Wordmark />
            </Link>
            <p>
              Local understanding.
              <br />
              Meaningful connections.
              <br />
              Real estate growth.
            </p>
            <span className="footer-location">
              Rooted in India. Focused on your market.
            </span>
          </div>
          <div>
            <h3>What we do</h3>
            {services.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`}>
                {s.title}
              </Link>
            ))}
            <Link href="/how-it-works">How it works</Link>
          </div>
          <div>
            <h3>Get to know TBL</h3>
            <Link href="/about">Our story</Link>
            <Link href="/locations">Our markets</Link>
            <Link href="/resources">Insights & guides</Link>
            <Link href="/faq">Common questions</Link>
          </div>
          <div>
            <h3>Start a conversation</h3>
            <p>
              Have a project in mind?
              <br />
              Let’s find your next opportunity.
            </p>
            <Link href="/contact" className="footer-contact">
              Tell us about it <ArrowUpRight size={16} />
            </Link>
            {brand.email && <a href={`mailto:${brand.email}`}>{brand.email}</a>}
          </div>
        </div>
        <div className="footer-markets">
          <span>OUR REACH</span>
          {locations.map((l) => (
            <Link key={l.slug} href={`/locations/${l.slug}`}>
              {l.name}
            </Link>
          ))}
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Thok Bajao Lead. All rights reserved.
          </span>
          <div>
            <Link href="/privacy">Privacy policy</Link>
            <Link href="/terms">Terms of use</Link>
          </div>
          <span className="footer-credit">
            Designed and created by{" "}
            <a
              href="https://github.com/G-Anubhav"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Anubhav Goyal on GitHub (opens in a new tab)"
            >
              Anubhav Goyal
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
