"use client";
import { useState } from "react";
import { Search, X } from "lucide-react";
import { locations } from "@/lib/content";
import { MarketCard } from "./ui";
export default function MarketDirectory() {
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState("All markets");
  const filtered = locations.filter(
    (l) =>
      (region === "All markets" || l.region === region) &&
      `${l.name} ${l.state} ${l.aliases}`
        .toLowerCase()
        .includes(query.trim().toLowerCase()),
  );
  return (
    <>
      <div className="directory-toolbar">
        <div className="filter-list" aria-label="Filter by region">
          {["All markets", "North", "South", "West", "East & Central"].map(
            (r) => (
              <button
                type="button"
                key={r}
                aria-pressed={region === r}
                className={region === r ? "selected" : ""}
                onClick={() => setRegion(r)}
              >
                {r}
              </button>
            ),
          )}
        </div>
        <label className="search-box">
          <Search size={17} />
          <span className="sr-only">Search markets</span>
          <input
            type="search"
            placeholder="Find your market…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>
      </div>
      <div className="directory-count" role="status">
        {filtered.length} {filtered.length === 1 ? "market" : "markets"}{" "}
        {region !== "All markets" ? `in ${region} India` : "across India"}
      </div>
      {filtered.length ? (
        <div className="market-grid directory-grid">
          {filtered.map((l) => (
            <MarketCard key={l.slug} location={l} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <Search size={30} />
          <h2>No matching markets</h2>
          <p>Try another city, state or spelling.</p>
          <button
            type="button"
            className="button button-secondary"
            onClick={() => {
              setQuery("");
              setRegion("All markets");
            }}
          >
            Reset filters <X size={16} />
          </button>
        </div>
      )}
    </>
  );
}
