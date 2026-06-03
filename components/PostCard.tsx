import Link from "next/link";
import type { Post } from "@/lib/posts";

export default function PostCard({ post, index = 0 }: { post: Post; index?: number }) {
  const date = new Date(post.date).toLocaleDateString("en-US", { year:"numeric", month:"short", day:"numeric" });
  const cat  = post.category?.toLowerCase() || "general";

  return (
    <Link href={`/writing/${post.slug}`} className="post-card-link fade-up"
      style={{ animationDelay: `${index * 0.07}s` }}>
      <article className="post-card">
        <div style={{ display:"flex", alignItems:"center", gap:"0.6rem", marginBottom:"0.7rem", flexWrap:"wrap" as const }}>
          <span className={`badge badge-${cat}`}>{post.category}</span>
          <span style={{ fontSize:"0.75rem", color:"var(--text-3)" }}>{date}</span>
          <span style={{ fontSize:"0.75rem", color:"var(--text-3)" }}>·</span>
          <span style={{ fontSize:"0.75rem", color:"var(--text-3)" }}>{post.readingTime}</span>
        </div>

        <h2 className="post-card-title" style={{
          fontFamily:"'Fraunces',Georgia,serif", fontWeight:700, fontSize:"1.35rem",
          color:"var(--text)", lineHeight:1.3, letterSpacing:"-0.02em", marginBottom:"0.35rem",
          fontStyle:"normal", transition:"color 0.15s",
        }}>
          {post.title}
        </h2>

        {post.subtitle && (
          <p style={{ fontSize:"0.875rem", color:"var(--text-2)", marginBottom:"0.5rem" }}>
            {post.subtitle}
          </p>
        )}

        <p style={{ fontSize:"0.9rem", color:"var(--text-2)", lineHeight:1.65,
          display:"-webkit-box", WebkitLineClamp:2, WebkitBoxOrient:"vertical" as const, overflow:"hidden" }}>
          {post.excerpt}
        </p>

        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginTop:"0.9rem" }}>
          <span className="post-card-cta" style={{ display:"inline-flex", alignItems:"center", gap:"0.35rem", fontSize:"0.8rem", fontWeight:700, color:"var(--accent)", fontFamily:"'Nunito',sans-serif" }}>
            Read post
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          {post.tags?.slice(0,2).map(tag => (
            <span key={tag} style={{ fontSize:"0.7rem", color:"var(--text-3)", background:"var(--bg-2)", padding:"0.15rem 0.5rem", borderRadius:99, border:"1px solid var(--border)" }}>#{tag}</span>
          ))}
        </div>
      </article>
    </Link>
  );
}
