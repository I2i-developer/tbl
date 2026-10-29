import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";
const root = path.resolve("out");
async function walk(dir) {
  const files = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(full)));
    else files.push(full);
  }
  return files;
}
const files = (await walk(root)).filter(
  (f) => f.endsWith(".html") && !f.includes(`${path.sep}_next${path.sep}`),
);
const errors = [];
let checkedLinks = 0;
const titles = new Map();
for (const file of files) {
  const html = await readFile(file, "utf8");
  const route = path.relative(root, file).replaceAll(path.sep, "/");
  if ((html.match(/<h1(?:\s|>)/g) || []).length !== 1)
    errors.push(`${route}: expected exactly one h1`);
  const title = html.match(/<title>(.*?)<\/title>/s)?.[1];
  if (!title) errors.push(`${route}: missing title`);
  if (title && !route.includes("404") && !route.includes("_not-found")) {
    if (titles.has(title))
      errors.push(`Duplicate title: ${route} and ${titles.get(title)}`);
    titles.set(title, route);
  }
  if (!html.includes('name="description"'))
    errors.push(`${route}: missing description`);
  if (/<h[12][^>]*>[^<]*\\n/.test(html))
    errors.push(`${route}: literal newline escape in heading`);
  for (const match of html.matchAll(/(?:href|src)="(\/[^"#?]*)[^"<>]*"/g)) {
    const url = match[1];
    if (url.startsWith("//")) continue;
    const target = path.join(root, decodeURIComponent(url));
    let exists = false;
    for (const candidate of [
      target,
      path.join(target, "index.html"),
      `${target}.html`,
    ]) {
      try {
        if ((await stat(candidate)).isFile()) {
          exists = true;
          break;
        }
      } catch {}
    }
    checkedLinks++;
    if (!exists) errors.push(`${route}: missing local destination ${url}`);
  }
}
if (files.length < 30)
  errors.push(`Expected at least 30 pages, found ${files.length}`);
if (errors.length) {
  console.error([...new Set(errors)].join("\n"));
  process.exitCode = 1;
} else
  console.log(
    `Export verified: ${files.length} HTML pages, ${titles.size} unique content titles, ${checkedLinks} local links/assets checked.`,
  );
