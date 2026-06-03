"use client";
import Link from "next/link";

const CATS = [
  { href:"/category/trading",  emoji:"📈", label:"Trading",  desc:"Options, futures, market analysis"  },
  { href:"/category/quants",   emoji:"🔢", label:"Quants",   desc:"Models, math, systematic strategies" },
  { href:"/category/life",     emoji:"✦",  label:"Life",     desc:"Reflections, lessons, the journey"   },
  { href:"/category/projects", emoji:"🛠", label:"Projects", desc:"Things I'm building and shipping"     },
];

export default function CategoryCards() {
  return (
    <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(190px,1fr))", gap:"0.75rem" }}>
      {CATS.map(({ href, emoji, label, desc }) => (
        <Link key={href} href={href} style={{ textDecoration:"none" }}>
          <div style={{
            background:"var(--bg-card)", border:"1px solid var(--border)",
            borderRadius:14, padding:"1.1rem 1.25rem",
            transition:"all 0.2s", cursor:"pointer", height:"100%",
          }}
          onMouseEnter={e => {
            const el = e.currentTarget as HTMLElement;
            el.style.borderColor="var(--accent)";
            el.style.transform="translateY(-2px)";
            el.style.boxShadow="var(--shadow-md)";
          }}
          onMouseLeave={e => {
            const el = e.currentTarget as HTMLElement;
            el.style.borderColor="var(--border)";
            el.style.transform="";
            el.style.boxShadow="";
          }}>
            <div style={{ fontSize:"1.5rem", marginBottom:"0.5rem" }}>{emoji}</div>
            <div style={{ fontFamily:"'Fraunces',Georgia,serif", fontWeight:700,
              fontStyle:"italic", color:"var(--text)", marginBottom:"0.25rem" }}>{label}</div>
            <div style={{ fontSize:"0.75rem", color:"var(--text-3)", lineHeight:1.4 }}>{desc}</div>
          </div>
        </Link>
      ))}
    </div>
  );
}
