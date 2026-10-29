import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  Target,
  Building2,
  Users,
  Check,
  MapPin,
} from "lucide-react";
import { locations, services } from "@/lib/content";

export function Button({
  children,
  href = "/contact",
  secondary = false,
  className = "",
}: {
  children: React.ReactNode;
  href?: string;
  secondary?: boolean;
  className?: string;
}) {
  return (
    <Link
      className={`button ${secondary ? "button-secondary" : ""} ${className}`}
      href={href}
    >
      {children}
      <ArrowUpRight size={17} />
    </Link>
  );
}
export function Eyebrow({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <div className={`eyebrow ${light ? "eyebrow-light" : ""}`}>
      <span />
      {children}
    </div>
  );
}
export function SectionHeading({
  eyebrow,
  title,
  text,
  children,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="section-heading">
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2>{title.replace(/\\n/g, "\n")}</h2>
        {text && <p>{text}</p>}
      </div>
      {children}
    </div>
  );
}
export function ServiceCards() {
  const icons = { target: Target, building: Building2, users: Users };
  return (
    <div className="service-grid">
      {services.map((s, i) => {
        const Icon = icons[s.icon];
        return (
          <Link
            href={`/services/${s.slug}`}
            className="service-card"
            key={s.slug}
          >
            <div className="card-top">
              <span className="icon-tile">
                <Icon size={24} strokeWidth={1.5} />
              </span>
              <span className="index">0{i + 1}</span>
            </div>
            <h3>{s.title}</h3>
            <p>{s.description}</p>
            <span className="text-link">
              Explore service <ArrowUpRight size={17} />
            </span>
          </Link>
        );
      })}
    </div>
  );
}
export function MarketCard({
  location,
  priority = false,
}: {
  location: (typeof locations)[number];
  priority?: boolean;
}) {
  return (
    <Link
      href={`/locations/${location.slug}`}
      className={`market-card market-${location.slug}`}
    >
      <div className="market-photo">
        <img
          src={`/images/${location.image}.jpg`}
          alt={
            location.slug === "mumbai"
              ? "Mumbai waterfront and historic architecture"
              : location.slug === "bangalore"
                ? "Bangalore city architecture and greenery"
                : "Illustrative Indian architecture and property setting"
          }
          loading={priority ? "eager" : "lazy"}
          width={900}
          height={650}
        />
        <span className="market-tag">
          <MapPin size={12} />
          {location.region} India
        </span>
        <span className="photo-arrow">
          <ArrowUpRight size={21} />
        </span>
      </div>
      <div className="market-card-caption">
        <div>
          <h3>{location.name}</h3>
          <p>{location.state}</p>
        </div>
        <span className="market-dot" />
      </div>
    </Link>
  );
}
export function CTA() {
  return (
    <section className="cta-wrap container">
      <div className="cta-panel">
        <div className="cta-circles" aria-hidden="true" />
        <div>
          <Eyebrow>YOUR NEXT CHAPTER STARTS HERE</Eyebrow>
          <h2>
            Your next buyer is out there. <br />
            Let’s make the connection.
          </h2>
          <p>
            Tell us about your project. We’ll start with the right questions.
          </p>
        </div>
        <Button>Let’s talk growth</Button>
      </div>
    </section>
  );
}
export function TickList({ items }: { items: readonly string[] }) {
  return (
    <ul className="tick-list">
      {items.map((x) => (
        <li key={x}>
          <Check size={16} />
          {x}
        </li>
      ))}
    </ul>
  );
}
export function PageIntro({
  eyebrow,
  title,
  text,
  children,
}: {
  eyebrow: string;
  title: string;
  text: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="page-intro">
      <div className="container">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1>{title.replace(/\\n/g, "\n")}</h1>
        <p>{text}</p>
        {children}
      </div>
    </section>
  );
}
export function BackLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link className="back-link" href={href}>
      <ArrowRight size={16} />
      {children}
    </Link>
  );
}
