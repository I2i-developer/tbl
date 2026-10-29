"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X, ArrowRight } from "lucide-react";

export function Wordmark() {
  return (
    <span className="wordmark">
      <img
        className="brand-logo"
        src="/brand-logo-transparent.webp"
        width={600}
        height={329}
        alt="Thok Bajao Lead — TBL"
      />
    </span>
  );
}
export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname().replace(/\/+$/, "") || "/";
  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);
  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        document.getElementById("menu-toggle")?.focus();
      }
    };
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);
  return (
    <>
      <div className="announcement">
        15 years of real estate connections. Built on local understanding.
        <Link href="/about">
          Meet TBL <ArrowRight size={13} />
        </Link>
      </div>
      <header className="header">
        <div className="container nav-shell">
          <Link href="/" aria-label="Thok Bajao Lead home">
            <Wordmark />
          </Link>
          <nav className="desktop-nav" aria-label="Main navigation">
            {[
              ["Home", "/"],
              ["Services", "/services"],
              ["Our markets", "/locations"],
              ["How it works", "/how-it-works"],
              ["About us", "/about"],
              ["Insights", "/resources"],
              ["Contact", "/contact"],
            ].map(([label, href]) => (
              <Link
                key={href}
                className={isActive(href) ? "active" : ""}
                aria-current={pathname === href ? "page" : undefined}
                href={href}
              >
                {label}
              </Link>
            ))}
          </nav>
          <Link className="nav-cta" href="/contact">
            <span>
              Let’s talk<span className="nav-cta-extra"> growth</span>
            </span>{" "}
            <ArrowUpRight size={16} />
          </Link>
          <button
            id="menu-toggle"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close navigation" : "Open navigation"}
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <nav
            id="mobile-nav"
            className="mobile-nav"
            aria-label="Mobile navigation"
          >
            {[
              ["Home", "/"],
              ["Services", "/services"],
              ["Our markets", "/locations"],
              ["How it works", "/how-it-works"],
              ["About us", "/about"],
              ["Insights", "/resources"],
              ["FAQ", "/faq"],
              ["Contact", "/contact"],
            ].map(([label, href]) => (
              <Link
                onClick={() => setOpen(false)}
                key={href}
                href={href}
                className={isActive(href) ? "active" : ""}
                aria-current={pathname === href ? "page" : undefined}
              >
                {label}
                <ArrowUpRight size={17} />
              </Link>
            ))}
          </nav>
        )}
      </header>
    </>
  );
}
