"use client";
import { useEffect, useState } from "react";

export default function ReadCounter({ slug }: { slug: string }) {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const key = `reads_${slug}`;
    const stored = parseInt(localStorage.getItem("all_reads") || "{}");
    // Use a simple per-slug counter in localStorage for demo
    const reads: Record<string, number> = JSON.parse(localStorage.getItem("all_reads") || "{}");
    // Increment on first visit this session
    const sessionKey = `session_${slug}`;
    if (!sessionStorage.getItem(sessionKey)) {
      reads[slug] = (reads[slug] || 0) + 1;
      localStorage.setItem("all_reads", JSON.stringify(reads));
      sessionStorage.setItem(sessionKey, "1");
    }
    setCount(reads[slug] || 1);
  }, [slug]);

  if (count === null) return null;

  return (
    <span className="read-counter">
      <span className="read-counter-eye">👁</span>
      {count} {count === 1 ? "read" : "reads"}
    </span>
  );
}
