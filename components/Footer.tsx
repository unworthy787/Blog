import Link from "next/link";

const CATS = [
  { href:"/category/trading",  label:"📈 Trading"  },
  { href:"/category/quants",   label:"🔢 Quants"   },
  { href:"/category/life",     label:"✦ Life"      },
  { href:"/category/projects", label:"🛠 Projects" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div style={{ maxWidth:860, margin:"0 auto", padding:"0 1.5rem" }}>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(160px,1fr))", gap:"2rem", marginBottom:"2rem" }}>
          <div>
            <div style={{ fontFamily:"'Fraunces',Georgia,serif", fontWeight:800, fontStyle:"normal",
              fontSize:"1.15rem", color:"var(--text)", marginBottom:"0.5rem" }}>
              manas<span style={{ color:"var(--accent)" }}>.life</span>
            </div>
            <p style={{ fontSize:"0.8rem", color:"var(--text-3)", lineHeight:1.6 }}>
              Documenting the journey — trading, quants, and life.
            </p>
          </div>
          <div>
            <div style={{ fontSize:"0.7rem", fontWeight:800, textTransform:"uppercase",
              letterSpacing:"0.1em", color:"var(--text-3)", marginBottom:"0.75rem" }}>Topics</div>
            <div style={{ display:"flex", flexDirection:"column" as const, gap:"0.4rem" }}>
              {CATS.map(({ href, label }) => (
                <Link key={href} href={href} style={{ fontSize:"0.85rem", color:"var(--text-2)",
                  textDecoration:"none", transition:"color 0.15s" }}
                  className="footer-link">{label}</Link>
              ))}
            </div>
          </div>
          <div>
            <div style={{ fontSize:"0.7rem", fontWeight:800, textTransform:"uppercase",
              letterSpacing:"0.1em", color:"var(--text-3)", marginBottom:"0.75rem" }}>Links</div>
            <div style={{ display:"flex", flexDirection:"column" as const, gap:"0.4rem" }}>
              {[
                { href:"/writing", label:"All writing" },
                { href:"/about",   label:"About me"    },
                { href:"https://twitter.com", label:"Twitter ↗", ext:true },
                { href:"https://github.com",  label:"GitHub ↗",  ext:true },
              ].map(({ href, label, ext }) =>
                ext
                  ? <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                      style={{ fontSize:"0.85rem", color:"var(--text-2)", textDecoration:"none" }}>{label}</a>
                  : <Link key={label} href={href}
                      style={{ fontSize:"0.85rem", color:"var(--text-2)", textDecoration:"none" }}>{label}</Link>
              )}
            </div>
          </div>
        </div>
        <div style={{ paddingTop:"1.5rem", borderTop:"1px solid var(--border)",
          display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap" as const, gap:"0.5rem" }}>
          <p style={{ fontSize:"0.75rem", color:"var(--text-3)" }}>
            © {new Date().getFullYear()} Manas · Built with Next.js & Vercel
          </p>
          <p style={{ fontSize:"0.75rem", color:"var(--text-3)" }}>
            Made with ✦ and lots of coffee
          </p>
        </div>
      </div>
    </footer>
  );
}
