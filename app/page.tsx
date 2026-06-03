import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import PostCard from "@/components/PostCard";
import CategoryCards from "@/components/CategoryCards";

export default function HomePage() {
  const posts = getAllPosts().slice(0, 4);

  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 1.5rem" }}>

      {/* ── HERO ── */}
      <section style={{ padding: "6rem 0 5rem" }}>
        <div className="fade-up" style={{ marginBottom: "1.5rem" }}>
          <span style={{
            display: "inline-flex", alignItems: "center", gap: "0.4rem",
            background: "var(--accent-bg)", border: "1px solid rgba(124,92,252,0.2)",
            padding: "0.3rem 0.9rem", borderRadius: 99,
            fontSize: "0.65rem", fontWeight: 800,
            letterSpacing: "0.1em", textTransform: "uppercase" as const,
            color: "var(--accent)",
          }}>
            Documenting the journey ✦
          </span>
        </div>

        <h1 className="fade-up d1" style={{
          fontFamily: "'Fraunces', Georgia, serif",
          fontWeight: 900, fontStyle: "normal",
          fontSize: "clamp(2.6rem, 6vw, 4rem)",
          lineHeight: 1.1, letterSpacing: "-0.03em",
          color: "var(--text)", marginBottom: "1.5rem",
          maxWidth: 640,
        }}>
          Hi, I'm Manas.<br />
          <span style={{ color: "var(--accent)" }}>I trade, build &amp; write.</span>
        </h1>

        <p className="fade-up d2" style={{
          fontSize: "1.1rem", color: "var(--text-2)",
          lineHeight: 1.8, maxWidth: 480, marginBottom: "2.5rem",
        }}>
          SAP consultant turned quant trader. Documenting everything — trades, code, models, and life — honestly and in public.
        </p>

        <div className="fade-up d3" style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" as const }}>
          <Link href="/writing" className="btn btn-primary">Start reading</Link>
          <Link href="/about" className="btn btn-secondary">About me</Link>
        </div>
      </section>

      {/* ── STATS ── */}
      <div className="fade-up d4" style={{
        display: "flex", marginBottom: "4rem",
        background: "var(--bg-card)", border: "1px solid var(--border)",
        borderRadius: 16, overflow: "hidden",
      }}>
        {[
          { n: "3+",  l: "Years Trading"       },
          { n: "NSE", l: "Primary Market"      },
          { n: "∞",   l: "Things to Learn"     },
          { n: "1",   l: "Journey to Document" },
        ].map(({ n, l }, i) => (
          <div key={i} style={{
            flex: 1, padding: "1.25rem 1rem", textAlign: "center" as const,
            borderRight: i < 3 ? "1px solid var(--border)" : "none",
          }}>
            <div style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontWeight: 900, fontSize: "1.5rem",
              color: "var(--accent)", fontStyle: "normal",
            }}>{n}</div>
            <div style={{
              fontSize: "0.68rem", color: "var(--text-3)",
              fontWeight: 700, textTransform: "uppercase" as const,
              letterSpacing: "0.06em", marginTop: "0.25rem",
            }}>{l}</div>
          </div>
        ))}
      </div>

      {/* ── CATEGORIES ── */}
      <section style={{ marginBottom: "4rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
          <h2 style={{
            fontFamily: "'Fraunces', Georgia, serif", fontWeight: 700,
            fontSize: "1.1rem", color: "var(--text)", fontStyle: "normal",
            whiteSpace: "nowrap" as const,
          }}>Browse by topic</h2>
          <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
        </div>
        <CategoryCards />
      </section>

      {/* ── RECENT POSTS ── */}
      <section style={{ marginBottom: "4rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.5rem" }}>
          <h2 style={{
            fontFamily: "'Fraunces', Georgia, serif", fontWeight: 700,
            fontSize: "1.1rem", color: "var(--text)", fontStyle: "normal",
            whiteSpace: "nowrap" as const,
          }}>Recent writing</h2>
          <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
          <Link href="/writing" style={{
            fontSize: "0.78rem", color: "var(--accent)", fontWeight: 700,
            textDecoration: "none", whiteSpace: "nowrap" as const,
            fontFamily: "'Nunito', sans-serif",
          }}>All posts →</Link>
        </div>
        {posts.map((post, i) => <PostCard key={post.slug} post={post} index={i} />)}
      </section>

    </div>
  );
}
