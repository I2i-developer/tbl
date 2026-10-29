import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { articles } from "@/lib/content";
import { CTA, PageIntro } from "@/components/ui";
export const metadata = {
  title: "Real estate marketing insights & guides",
  description:
    "Practical guides on campaign planning, relevant property enquiries and sales follow-up for real estate teams.",
};
export default function Resources() {
  return (
    <>
      <PageIntro
        eyebrow="A LITTLE PERSPECTIVE FOR YOUR NEXT MOVE"
        title="Useful ideas.\nGrounded in real estate."
        text="Practical reading for a clearer campaign brief, better enquiry conversations and a more connected sales process."
      />
      <section className="section container section-first">
        <div className="resource-grid">
          {articles.map((a) => (
            <Link
              className="resource-card"
              key={a.slug}
              href={`/resources/${a.slug}`}
            >
              <div className="resource-image">
                <img
                  src={`/images/${a.image}.jpg`}
                  alt="Illustrative property and city architecture"
                  width={900}
                  height={650}
                  loading="lazy"
                />
                <span className="photo-arrow">
                  <ArrowUpRight size={20} />
                </span>
              </div>
              <div className="article-meta">
                <span>{a.category}</span>
                <span>{a.time}</span>
              </div>
              <h2>{a.title}</h2>
              <p>{a.excerpt}</p>
              <span className="text-link">
                Read the guide <ArrowRight size={16} />
              </span>
            </Link>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}
