import { createPageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";
import "./globals.css";
export const metadata: Metadata = createPageMetadata(
  {
    title: {
      default: "TBL | Real estate growth, locally focused",
      template: "%s | Thok Bajao Lead",
    },
    description:
      "15 years of real estate connections. Thok Bajao Lead helps real estate businesses plan focused lead generation across 14 Indian markets.",
    icons: { icon: "/brand-icon.png" },
  },
  "/",
);
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
