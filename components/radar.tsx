import { ArrowUpRight, Building2, Check, MapPin, Target } from "lucide-react";
export default function Radar() {
  return (
    <div
      className="radar-scene"
      aria-label="An illustration of a locally focused real estate campaign"
    >
      <div className="radar-lines" aria-hidden="true">
        <div />
        <div />
        <div />
        <div />
        <div className="radar-cross horizontal" />
        <div className="radar-cross vertical" />
        <div className="radar-sweep" />
      </div>
      <div className="radar-top-label">
        <span className="live-dot" />
        LOCAL FOCUS. BIG POSSIBILITIES.
      </div>
      <div className="radar-property">
        <img
          src="/images/hero.jpg"
          alt="Modern residential architecture with a calm, landscaped entrance"
          width={1200}
          height={1000}
          fetchPriority="high"
        />
        <div className="property-caption">
          <span>
            <Building2 size={16} />
            Your next growth story
          </span>
          <ArrowUpRight size={18} />
        </div>
      </div>
      <div className="radar-pin pin-one">
        <MapPin size={12} />
        Mumbai
      </div>
      <div className="radar-pin pin-two">
        <MapPin size={12} />
        Delhi NCR
      </div>
      <div className="radar-pin pin-three">
        <MapPin size={12} />
        Bangalore
      </div>
      <div className="radar-point point-one" aria-hidden="true" />
      <div className="radar-point point-two" aria-hidden="true" />
      <div className="radar-brief">
        <div className="brief-icon">
          <Target size={21} />
        </div>
        <div>
          <span className="brief-label">A MORE FOCUSED APPROACH</span>
          <strong>Better-fit enquiries.</strong>
          <span className="brief-caption">
            <Check size={12} />
            Location. Intent. Project fit.
          </span>
        </div>
        <span className="brief-check">
          <Check size={12} />
        </span>
      </div>
      <span className="illustration-label">
        CAMPAIGN VISUALISATION · ILLUSTRATIVE
      </span>
    </div>
  );
}
