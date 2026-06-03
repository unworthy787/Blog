import Link from "next/link";
export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-32 text-center">
      <p className="text-6xl font-serif font-bold text-accent mb-4">404</p>
      <h2 className="text-2xl font-semibold text-ink mb-3">Page not found</h2>
      <p className="text-muted mb-8">This page doesn't exist (yet).</p>
      <Link href="/" className="text-sm font-medium text-accent hover:underline">← Go home</Link>
    </div>
  );
}
