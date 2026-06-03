"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const CATS = [
  { href: "/category/trading",  label: "Trading",  emoji: "📈" },
  { href: "/category/quants",   label: "Quants",   emoji: "🔢" },
  { href: "/category/life",     label: "Life",     emoji: "✦"  },
  { href: "/category/projects", label: "Projects", emoji: "🛠" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const active = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 50,
      backdropFilter: "blur(20px) saturate(200%)",
      backgroundColor: "color-mix(in srgb, var(--bg) 80%, transparent)",
      borderBottom: "1px solid var(--border)",
    }}>
      <nav style={{ maxWidth: 860, margin: "0 auto", padding: "0 1.5rem", height: 58,
        display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0.5rem" }}>

        <Link href="/" style={{
          fontFamily: "'Fraunces', Georgia, serif", fontWeight: 800, fontSize: "1.1rem",
          color: "var(--text)", textDecoration: "none", letterSpacing: "-0.03em",
          fontStyle: "normal", flexShrink: 0,
        }}>
          manas<span style={{ color: "var(--accent)" }}>.life</span>
        </Link>

        {/* Desktop */}
        <div className="nav-desktop">
          <Link href="/writing" className={`nav-link ${active("/writing") ? "active" : ""}`}>
            Writing
          </Link>
          {CATS.map(({ href, label, emoji }) => (
            <Link key={href} href={href}
              className={`nav-link category-pill ${active(href) ? "active" : ""}`}>
              <span>{emoji}</span>{label}
            </Link>
          ))}
          <Link href="/about" className={`nav-link ${active("/about") ? "active" : ""}`}>
            About
          </Link>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexShrink: 0 }}>
          <ThemeToggle />
          <button className="nav-mobile-btn"
            style={{ background: "none", border: "none", cursor: "pointer", padding: 6, color: "var(--text-2)" }}
            onClick={() => setOpen(!open)} aria-label="Menu">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              {open
                ? <path d="M3 3L15 15M15 3L3 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                : <><line x1="2" y1="5" x2="16" y2="5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    <line x1="2" y1="9" x2="16" y2="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    <line x1="2" y1="13" x2="16" y2="13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></>
              }
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div style={{ background: "var(--bg)", borderTop: "1px solid var(--border)",
          padding: "0.75rem 1.5rem", display: "flex", flexDirection: "column", gap: "0.15rem" }}>
          <Link href="/writing" onClick={() => setOpen(false)}
            className={`nav-link ${active("/writing") ? "active" : ""}`} style={{ display: "block" }}>Writing</Link>
          {CATS.map(({ href, label, emoji }) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}
              className={`nav-link ${active(href) ? "active" : ""}`} style={{ display: "block" }}>
              {emoji} {label}
            </Link>
          ))}
          <Link href="/about" onClick={() => setOpen(false)}
            className={`nav-link ${active("/about") ? "active" : ""}`} style={{ display: "block" }}>About</Link>
        </div>
      )}
    </header>
  );
}
