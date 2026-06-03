"use client";
import { useState, useMemo } from "react";
import PostCard from "./PostCard";
import type { Post } from "@/lib/posts";

type Sort = "newest" | "oldest" | "popular";

interface Props {
  cat: string;
  meta: { emoji: string; desc: string; color: string };
  posts: Post[];
}

export default function CategoryPageClient({ cat, meta, posts }: Props) {
  const [sort, setSort] = useState<Sort>("newest");

  const sorted = useMemo(() => {
    const p = [...posts];
    if (sort === "newest")  return p.sort((a,b) => a.date < b.date ? 1 : -1);
    if (sort === "oldest")  return p.sort((a,b) => a.date > b.date ? 1 : -1);
    if (sort === "popular") return p.sort((a,b) => {
      // Sort by read count from localStorage if available
      const reads = (() => { try { return JSON.parse(localStorage.getItem("all_reads") || "{}") } catch { return {} } })();
      return (reads[b.slug] || 0) - (reads[a.slug] || 0);
    });
    return p;
  }, [posts, sort]);

  const label = cat.charAt(0).toUpperCase() + cat.slice(1);

  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1.5rem 5rem" }}>

      {/* Header */}
      <div className="fade-up" style={{ marginBottom:"3rem" }}>
        <div style={{ display:"inline-flex", alignItems:"center", gap:"0.5rem",
          fontSize:"2.5rem", marginBottom:"1rem" }}>
          {meta.emoji}
        </div>
        <h1 style={{ fontFamily:"'Fraunces',Georgia,serif", fontWeight:900, fontStyle:"normal",
          fontSize:"clamp(2rem,5vw,3rem)", color:"var(--text)", letterSpacing:"-0.03em", marginBottom:"0.75rem" }}>
          {label}
        </h1>
        <p style={{ fontSize:"1rem", color:"var(--text-2)", maxWidth:480, lineHeight:1.65 }}>
          {meta.desc}
        </p>
        <div style={{ width:48, height:3, borderRadius:99, background:meta.color, marginTop:"1.25rem" }}/>
      </div>

      {/* Controls */}
      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between",
        marginBottom:"1rem", flexWrap:"wrap" as const, gap:"0.75rem" }}>
        <span style={{ fontSize:"0.8rem", color:"var(--text-3)", fontFamily:"'Nunito',sans-serif", fontWeight:600 }}>
          {posts.length} {posts.length === 1 ? "post" : "posts"}
        </span>
        <div style={{ display:"flex", gap:"0.35rem", background:"var(--bg-2)",
          padding:"0.25rem", borderRadius:99, border:"1px solid var(--border)" }}>
          {(["newest","oldest","popular"] as Sort[]).map(s => (
            <button key={s} onClick={() => setSort(s)}
              style={{
                fontFamily:"'Nunito',sans-serif", fontWeight:700, fontSize:"0.75rem",
                padding:"0.3rem 0.85rem", borderRadius:99, border:"none", cursor:"pointer",
                background: sort === s ? "var(--accent)" : "transparent",
                color: sort === s ? "#fff" : "var(--text-2)",
                transition:"all 0.15s",
                textTransform:"capitalize" as const,
              }}>
              {s === "popular" ? "🔥 Popular" : s === "newest" ? "✦ Newest" : "↑ Oldest"}
            </button>
          ))}
        </div>
      </div>

      {/* Posts */}
      {sorted.length === 0 ? (
        <div style={{ textAlign:"center", padding:"5rem 0", color:"var(--text-3)" }}>
          <div style={{ fontSize:"3rem", marginBottom:"1rem" }}>{meta.emoji}</div>
          <p style={{ fontFamily:"'Fraunces',serif", fontStyle:"normal", fontSize:"1.1rem" }}>
            No posts in {label} yet. Check back soon!
          </p>
        </div>
      ) : (
        <div>
          {sorted.map((post, i) => <PostCard key={post.slug} post={post} index={i}/>)}
        </div>
      )}

    </div>
  );
}
