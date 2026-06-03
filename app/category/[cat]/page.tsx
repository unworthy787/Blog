import { getAllPosts } from "@/lib/posts";
import { notFound } from "next/navigation";
import CategoryPageClient from "@/components/CategoryPageClient";
import type { Metadata } from "next";

const META: Record<string, { emoji: string; desc: string; color: string }> = {
  trading:  { emoji:"📈", desc:"Options, futures, setups, and market analysis.", color:"#0ea5e9" },
  quants:   { emoji:"🔢", desc:"Models, backtesting, statistics, and systematic strategies.", color:"#8b5cf6" },
  life:     { emoji:"✦",  desc:"Reflections, lessons learned, and the journey.", color:"#10b981" },
  projects: { emoji:"🛠", desc:"Things I'm building, shipping, and learning from.", color:"#f59e0b" },
};

interface Props { params: Promise<{ cat: string }>; }

export async function generateStaticParams() {
  return Object.keys(META).map(cat => ({ cat }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { cat } = await params;
  const m = META[cat];
  if (!m) return {};
  return { title: `${m.emoji} ${cat.charAt(0).toUpperCase() + cat.slice(1)}`, description: m.desc };
}

export default async function CategoryPage({ params }: Props) {
  const { cat } = await params;
  const m = META[cat];
  if (!m) notFound();

  const all = getAllPosts();
  const posts = all.filter(p => p.category?.toLowerCase() === cat);

  return (
    <CategoryPageClient
      cat={cat} meta={m}
      posts={posts}
    />
  );
}
