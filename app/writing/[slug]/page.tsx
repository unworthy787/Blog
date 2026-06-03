import { getPostBySlug, getAllPosts } from "@/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";
import ReadCounter from "@/components/ReadCounter";
import ReadingProgress from "@/components/ReadingProgress";
import type { Metadata } from "next";

interface Props { params: Promise<{ slug: string }>; }

export async function generateStaticParams() {
  return getAllPosts().map(p => ({ slug: p.slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const cat = post.category?.toLowerCase() || "general";
  const date = new Date(post.date).toLocaleDateString("en-US", { year:"numeric", month:"long", day:"numeric" });

  return (
    <>
      <ReadingProgress />
      <article style={{ maxWidth: 720, margin: "0 auto", padding: "2.5rem 1.5rem 5rem" }}>

        {/* Back */}
        <Link href="/writing" style={{ display:"inline-flex", alignItems:"center", gap:"0.4rem",
          fontSize:"0.8rem", fontWeight:700, color:"var(--text-2)", textDecoration:"none",
          fontFamily:"'Nunito',sans-serif", marginBottom:"2.5rem" }}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M12 7H2M7 12l-5-5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          All writing
        </Link>

        {/* Header */}
        <header style={{ marginBottom:"2.5rem" }} className="fade-up">
          <div style={{ display:"flex", alignItems:"center", gap:"0.6rem", marginBottom:"1.25rem", flexWrap:"wrap" as const }}>
            <span className={`badge badge-${cat}`}>{post.category}</span>
            <span style={{ fontSize:"0.75rem", color:"var(--text-3)" }}>{date}</span>
            <span style={{ fontSize:"0.75rem", color:"var(--text-3)" }}>·</span>
            <span style={{ fontSize:"0.75rem", color:"var(--text-3)" }}>{post.readingTime}</span>
            <ReadCounter slug={slug} />
          </div>

          <h1 style={{ fontFamily:"'Fraunces',Georgia,serif", fontWeight:900, fontStyle:"normal",
            fontSize:"clamp(1.9rem,5vw,2.9rem)", color:"var(--text)", lineHeight:1.15,
            letterSpacing:"-0.02em", marginBottom:"0.875rem" }}>
            {post.title}
          </h1>

          {post.subtitle && (
            <p style={{ fontSize:"1.1rem", color:"var(--text-2)", lineHeight:1.65, fontStyle:"italic" }}>
              {post.subtitle}
            </p>
          )}

          {post.tags?.length > 0 && (
            <div style={{ display:"flex", flexWrap:"wrap" as const, gap:"0.4rem", marginTop:"1rem" }}>
              {post.tags.map(tag => (
                <span key={tag} style={{ fontSize:"0.7rem", fontWeight:600, padding:"0.2rem 0.6rem",
                  borderRadius:99, background:"var(--bg-2)", color:"var(--text-2)",
                  border:"1px solid var(--border)" }}>
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* Gradient divider */}
        <div className="fade-in d2" style={{ height:2, borderRadius:99,
          background:`linear-gradient(90deg, var(--accent), var(--accent-2), transparent)`,
          marginBottom:"2.5rem" }}/>

        {/* Body */}
        <div className="post-content fade-up d3"
          dangerouslySetInnerHTML={{ __html: post.content || "" }} />

        {/* Footer */}
        <div style={{ marginTop:"4rem", padding:"2rem", background:"var(--bg-2)",
          borderRadius:16, border:"1px solid var(--border)" }} className="fade-up d4">
          <p style={{ fontFamily:"'Fraunces',Georgia,serif", fontStyle:"italic",
            fontSize:"1rem", color:"var(--text-2)", marginBottom:"1.25rem" }}>
            Thanks for reading ✦ If this resonated, I'd love to hear from you.
          </p>
          <div style={{ display:"flex", alignItems:"center", gap:"0.75rem", flexWrap:"wrap" as const }}>
            <Link href="/writing" className="btn btn-secondary btn-sm">← All posts</Link>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
              className="btn btn-ghost btn-sm">Share on Twitter</a>
            <ReadCounter slug={slug} />
          </div>
        </div>

      </article>
    </>
  );
}
