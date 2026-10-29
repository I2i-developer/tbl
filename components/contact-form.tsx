"use client";
import { useState, useEffect, type FormEvent } from "react";
import Link from "next/link";
import { ArrowUpRight, Check, Download, ArrowLeft } from "lucide-react";
import { locations } from "@/lib/content";

export default function ContactForm() {
  const [selected, setSelected] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "prepared" | "sent" | "error"
  >("idle");
  const [brief, setBrief] = useState<Record<string, string>>({});
  const endpoint = process.env.NEXT_PUBLIC_ENQUIRY_ENDPOINT;
  useEffect(() => {
    const market = new URLSearchParams(window.location.search).get("market");
    if (market && locations.some((l) => l.slug === market)) setSelected(market);
  }, []);
  useEffect(() => {
    if (status === "prepared" || status === "sent") {
      document.getElementById("enquiry-result")?.focus();
    }
  }, [status]);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<
      string,
      string
    >;
    for (const name of ["name", "company", "goals"]) {
      if (!data[name]?.trim()) {
        const field = form.elements.namedItem(name) as HTMLInputElement;
        field.setCustomValidity("Please enter a value, not only spaces.");
        field.reportValidity();
        return;
      }
    }
    if (
      data.phone.replace(/\D/g, "").length < 10 ||
      data.phone.replace(/\D/g, "").length > 15
    ) {
      const field = form.elements.namedItem("phone") as HTMLInputElement;
      field.setCustomValidity("Please enter a phone number with 10–15 digits.");
      field.reportValidity();
      return;
    }
    for (const key of Object.keys(data)) data[key] = data[key].trim();
    setBrief(data);
    if (!endpoint) {
      setStatus("prepared");
      return;
    }
    setStatus("loading");
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        signal: controller.signal,
      });
      if (!response.ok) throw new Error("Delivery failed");
      setStatus("sent");
    } catch {
      setStatus("error");
    } finally {
      clearTimeout(timeout);
    }
  }
  function download() {
    const text = `THOK BAJAO LEAD — PROJECT ENQUIRY\nPrepared ${new Date().toLocaleDateString("en-IN")}\n\n${Object.entries(
      brief,
    )
      .map(
        ([key, value]) =>
          `${key.charAt(0).toUpperCase() + key.slice(1)}: ${key === "market" ? locations.find((l) => l.slug === value)?.name || value : value}`,
      )
      .join(
        "\n\n",
      )}\n\nThis brief has not been sent. Share it with your TBL representative.`;
    const url = URL.createObjectURL(
      new Blob([text], { type: "text/plain;charset=utf-8" }),
    );
    const link = document.createElement("a");
    link.href = url;
    link.download = "TBL-project-brief.txt";
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  if (status === "prepared" || status === "sent")
    return (
      <div
        className="form-success"
        role="status"
        id="enquiry-result"
        tabIndex={-1}
      >
        <span className="success-icon">
          <Check size={28} />
        </span>
        <h2>
          {status === "sent"
            ? "Your enquiry has been sent."
            : "Your project brief is ready."}
        </h2>
        <p>
          {status === "sent"
            ? "Thank you for sharing your project with TBL. Your enquiry has been delivered to the configured enquiry service."
            : "Your details have not been sent. Download your brief and share it with your TBL representative to start the conversation."}
        </p>
        <dl className="brief-review">
          <div>
            <dt>Contact</dt>
            <dd>{brief.name}</dd>
          </div>
          <div>
            <dt>Company / project</dt>
            <dd>{brief.company}</dd>
          </div>
          <div>
            <dt>Market</dt>
            <dd>
              {locations.find((l) => l.slug === brief.market)?.name ||
                brief.market}
            </dd>
          </div>
          <div>
            <dt>Your goals</dt>
            <dd>{brief.goals}</dd>
          </div>
        </dl>
        {status === "prepared" && (
          <button className="button" onClick={download}>
            Download project brief <Download size={17} />
          </button>
        )}
        <button
          className="edit-brief"
          onClick={() => {
            if (status === "sent") {
              setBrief({});
              setSelected("");
            }
            setStatus("idle");
          }}
        >
          <ArrowLeft size={15} />
          {status === "sent" ? "Start another enquiry" : "Edit your details"}
        </button>
      </div>
    );
  return (
    <form
      className="enquiry-form"
      onSubmit={submit}
      onInput={(e) => (e.target as HTMLInputElement).setCustomValidity?.("")}
    >
      <div className="form-heading">
        <span className="eyebrow">A LITTLE ABOUT YOUR PROJECT</span>
        <h2>Let’s find your next opportunity.</h2>
        <p>Share a few details to get the conversation started.</p>
      </div>
      <div className="form-grid">
        <label>
          Your name <span>*</span>
          <input
            required
            name="name"
            autoComplete="name"
            placeholder="Full name"
            defaultValue={brief.name}
            maxLength={100}
          />
        </label>
        <label>
          Business email <span>*</span>
          <input
            required
            type="email"
            name="email"
            autoComplete="email"
            placeholder="you@company.com"
            defaultValue={brief.email}
            maxLength={254}
          />
        </label>
        <label>
          Phone number <span>*</span>
          <input
            required
            type="tel"
            name="phone"
            autoComplete="tel"
            placeholder="+91 98765 43210"
            pattern="[+0-9\(\)\s\-]{10,20}"
            title="Enter a phone number using 10–20 digits, spaces, +, - or parentheses."
            defaultValue={brief.phone}
          />
        </label>
        <label>
          I am a… <span>*</span>
          <select
            required
            name="businessType"
            defaultValue={brief.businessType || ""}
          >
            <option value="" disabled>
              Select business type
            </option>
            <option>Builder / developer</option>
            <option>Broker / channel partner</option>
            <option>Real estate sales / marketing team</option>
            <option>Other real estate business</option>
          </select>
        </label>
        <label className="full-field">
          Company / project name <span>*</span>
          <input
            required
            name="company"
            placeholder="Tell us who you are building for"
            defaultValue={brief.company}
            maxLength={200}
          />
        </label>
        <label>
          Project market <span>*</span>
          <select
            required
            name="market"
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
          >
            <option value="" disabled>
              Select a market
            </option>
            {locations.map((l) => (
              <option value={l.slug} key={l.slug}>
                {l.name}
              </option>
            ))}
            <option value="Other market">Another market</option>
          </select>
        </label>
        <label>
          Indicative campaign budget
          <select name="budget" defaultValue={brief.budget || ""}>
            <option value="">Let’s discuss</option>
            <option>Under ₹50,000</option>
            <option>₹50,000–₹1 lakh</option>
            <option>₹1–₹3 lakh</option>
            <option>Above ₹3 lakh</option>
          </select>
        </label>
        <label className="full-field">
          What would you like to achieve? <span>*</span>
          <textarea
            required
            name="goals"
            rows={4}
            placeholder="Your project, target audience and what a successful campaign would look like…"
            defaultValue={brief.goals}
            maxLength={3000}
          />
        </label>
      </div>
      <label className="consent">
        <input
          required
          type="checkbox"
          name="consent"
          value="Agreed"
          defaultChecked={brief.consent === "Agreed"}
        />
        <span>
          I agree to TBL using these details to discuss my enquiry when I send
          them. Read our <Link href="/privacy">privacy policy</Link>.
        </span>
      </label>
      {status === "error" && (
        <p className="form-error" role="alert">
          We couldn’t send your enquiry. Your details are still here. Please try
          again.
        </p>
      )}
      <button
        type="submit"
        disabled={status === "loading"}
        className="button form-submit"
      >
        {status === "loading"
          ? "Sending your enquiry…"
          : endpoint
            ? "Send my enquiry"
            : "Prepare my project brief"}
        <ArrowUpRight size={17} />
      </button>
      <p className="form-note">
        {endpoint
          ? "Your details are used to respond to your project enquiry."
          : "This preview prepares a downloadable brief. It does not send your details to TBL."}
      </p>
    </form>
  );
}
