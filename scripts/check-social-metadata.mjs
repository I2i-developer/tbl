import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map((entry) => {
      const filename = path.join(dir, entry.name);
      return entry.isDirectory() ? walk(filename) : [filename];
    }),
  );
  return nested.flat();
}
function tag(html, property) {
  const prefix = property.startsWith("twitter:") ? "name" : "property";
  return html.match(
    new RegExp(`<meta ${prefix}="${property}" content="([^"]*)"`),
  )?.[1];
}
const root = path.resolve("out");
const home = await readFile(path.join(root, "index.html"), "utf8");
const origin = new URL(tag(home, "og:url")).origin;
const pages = (await walk(root)).filter(
  (filename) =>
    filename.endsWith("index.html") &&
    !filename.includes("_not-found") &&
    !path.relative(root, filename).startsWith(`404${path.sep}`),
);
if (pages.length < 30) throw new Error("Expected all 30 content pages");
for (const filename of pages) {
  const html = await readFile(filename, "utf8");
  const relative = path.relative(root, filename).replaceAll(path.sep, "/");
  const pathname = `/${relative.replace(/index\.html$/, "")}`;
  const expectedUrl = `${origin}${pathname}`;
  for (const key of [
    "og:title",
    "og:description",
    "og:image",
    "og:image:alt",
    "og:url",
    "twitter:image",
    "twitter:description",
  ]) {
    if (!tag(html, key)) throw new Error(`${relative}: missing ${key}`);
  }
  if (tag(html, "og:url") !== expectedUrl)
    throw new Error(`${relative}: incorrect canonical share URL`);
  if (!html.includes(`<link rel="canonical" href="${expectedUrl}"`))
    throw new Error(`${relative}: incorrect canonical link`);
  if (tag(html, "og:image") !== `${origin}/images/tbl-social-preview-v1.jpg`)
    throw new Error(`${relative}: incorrect image URL`);
  if (
    tag(html, "og:image:width") !== "1200" ||
    tag(html, "og:image:height") !== "630"
  )
    throw new Error(`${relative}: incorrect image dimensions`);
}
const image = await sharp("public/images/tbl-social-preview-v1.jpg").metadata();
if (
  image.width !== 1200 ||
  image.height !== 630 ||
  image.format !== "jpeg" ||
  image.hasAlpha
)
  throw new Error("Preview must be an opaque 1200 × 630 JPEG");
console.log(
  `Social previews verified for ${pages.length} pages: absolute image URLs, descriptions, route-specific URLs, canonical links and 1200 × 630 JPEG.`,
);
