import { getAllPosts } from "@/lib/posts";
import PostCard from "@/components/PostCard";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Writing",
  description: "All posts on trading, quants, projects, and life.",
};

const CATS = [
  { slug:"trading",  emoji:"📈", label:"Trading"  },
  { slug:"quants",   emoji:"🔢", label:"Quants"   },
  { slug:"life",     emoji:"✦",  label:"Life"     },
  { slug:"projects", emoji:"🛠", label:"Projects" },
];

export default function WritingPage() {
  const posts = getAllPosts();

  return (
    <div style={{ maxWidth:860, margin:"0 auto", padding:"2.5rem 1.5rem 5rem" }}>
      <div className="fade-up" style={{ marginBottom:"3rem" }}>
        <span style={{ fontSize:"0.7rem", fontWeight:800, letterSpacing:"0.1em",
          textTransform:"uppercase", color:"var(--accent)", fontFamily:"'Nunito',sans-serif" }}>
          All Writing
        </span>
        <h1 style={{ fontFamily:"'Fraunces',Georgia,serif", fontWeight:900, fontStyle:"normal",
          fontSize:"clamp(2rem,5vw,2.8rem)", color:"var(--text)", letterSpacing:"-0.03em",
          marginTop:"0.4rem", marginBottom:"0.75rem" }}>
          The Archive
        </h1>
        <p style={{ fontSize:"1rem", color:"var(--text-2)", lineHeight:1.65, maxWidth:420 }}>
          Everything I've written — sorted by recency. No paywall, no newsletter required.
        </p>
      </div>

      {/* Category quick-links */}
      <div className="fade-up d1" style={{ display:"flex", flexWrap:"wrap" as const, gap:"0.5rem", marginBottom:"2.5rem" }}>
        {CATS.map(({ slug, emoji, label }) => (
          <Link key={slug} href={`/category/${slug}`}
            style={{ textDecoration:"none" }}>
            <span className={`badge badge-${slug}`} style={{ fontSize:"0.78rem", padding:"0.3rem 0.8rem", cursor:"pointer" }}>
              {emoji} {label}
            </span>
          </Link>
        ))}
      </div>

      <p className="fade-up d2" style={{ fontSize:"0.8rem", color:"var(--text-3)",
        fontFamily:"'Nunito',sans-serif", fontWeight:600, marginBottom:"0.25rem" }}>
        {posts.length} posts
      </p>

      <div>
        {posts.map((post, i) => <PostCard key={post.slug} post={post} index={i}/>)}
      </div>
    </div>
  );
}
