import sharp from "sharp";
import { mkdir } from "node:fs/promises";

// Use the approved artwork unchanged on an opaque background for link previews.
const logo = await sharp("public/brand-logo-transparent.png")
  .resize({ width: 960, height: 526, fit: "inside" })
  .png()
  .toBuffer();
await mkdir("public/images", { recursive: true });
await sharp({
  create: { width: 1200, height: 630, channels: 3, background: "#fbfaf7" },
})
  .composite([{ input: logo, gravity: "centre" }])
  .jpeg({ quality: 90, mozjpeg: true })
  .toFile("public/images/tbl-social-preview-v1.jpg");
console.log("Saved public/images/tbl-social-preview-v1.jpg (1200 × 630 JPEG).");
