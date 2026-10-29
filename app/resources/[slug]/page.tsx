import { createPageMetadata } from "@/lib/metadata";
import { notFound } from "next/navigation";
import { articles } from "@/lib/content";
import { CTA, BackLink, Eyebrow } from "@/components/ui";
export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}
export const dynamicParams = false;
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const a = articles.find((x) => x.slug === slug);
  return createPageMetadata(
    { title: a?.title, description: a?.excerpt },
    `/resources/${slug}`,
  );
}
export default async function Article({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const a = articles.find((x) => x.slug === slug);
  if (!a) notFound();
  return (
    <>
      <article className="container article-layout">
        <BackLink href="/resources">All insights & guides</BackLink>
        <Eyebrow>
          {a.category.toUpperCase()} · {a.time.toUpperCase()}
        </Eyebrow>
        <h1>{a.title}</h1>
        <p className="article-lede">{a.excerpt}</p>
        <div className="article-author">
          <span className="author-mark">TBL</span>
          <div>
            Thok Bajao Lead
            <span>Practical perspectives for real estate teams</span>
          </div>
        </div>
        <img
          className="article-hero"
          src={`/images/${a.image}.jpg`}
          alt="Illustrative architecture and property setting"
          width={900}
          height={500}
        />
        <div className="article-body">
          {a.sections.map(([title, text]) => (
            <section key={title}>
              <h2>{title}</h2>
              <p>{text}</p>
            </section>
          ))}
          <aside>
            <strong>Make it specific to your project.</strong>
            <p>
              These are general planning ideas. Your campaign scope,
              qualification criteria and follow-up process should reflect your
              property, market and team.
            </p>
          </aside>
        </div>
      </article>
      <CTA />
    </>
  );
}
