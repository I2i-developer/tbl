# Replacement logo — 30 October 2026

Source provided by the user: `public/brand-logo-new.png`. It contains a visible gray/white checkerboard, so merely enabling an alpha channel is insufficient.

Used the built-in ImageGen tool with transparent background enabled. Final prompt:

> Use case: background-extraction. Edit target: the provided Thok Bajao Lead logo. Remove ONLY the gray and white checkerboard background, including the background visible inside and between letters and buildings, and the faint background watermark at bottom right. Output the supplied purple and white metallic TBL logo with its upward arrow, buildings, and exact text 'THOK BAJAO LEAD' on a genuinely transparent alpha background. Preserve the exact original artwork, lettering, spelling, proportions, colors, bevels and highlights; do not redesign, add, or reinterpret anything. Preserve white metallic parts of the logo as opaque, removing only the surrounding checkerboard. Keep a small transparent margin around the complete uncropped logo. This is the final website logo asset.

Outputs in the project:

- `public/brand-logo-transparent.png`: background-free logo, transparent outer whitespace trimmed.
- `public/brand-logo-transparent.webp`: optimized 600 × 329 display asset, preserving alpha.
- `public/brand-icon.png`: transparent square favicon using the replacement artwork.

Validated the generated alpha channel and inspected a temporary composite on the website's off-white background. The input and previous logo files are preserved as source assets, but the header, footer and favicon reference the new artwork. Display uses `object-fit: contain`, without cropping or multiply blending.
