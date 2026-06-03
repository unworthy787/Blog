import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <div style={{ maxWidth:720, margin:"0 auto", padding:"3rem 1.5rem 5rem" }}>
      <div className="fade-up">
        <h1 style={{ fontFamily:"'Fraunces',Georgia,serif", fontWeight:900, fontStyle:"normal",
          fontSize:"clamp(2rem,5vw,3rem)", color:"var(--text)", letterSpacing:"-0.03em", marginBottom:"2.5rem" }}>
          Hey, I'm Manas. ✦
        </h1>
      </div>
      <div className="post-content fade-up d1">
        <p>I'm a builder, learner, and occasional overthinker. By day I work in SAP Basis consulting. By night (and weekends) I'm deep in options charts, Python notebooks, and quant finance rabbit holes.</p>
        <p>This blog is my public notebook — a record of the pivot from enterprise IT to algorithmic trading. With all the wrong turns included.</p>
        <h2>What I'm working on</h2>
        <p>Building a systematic trading operation for Indian markets (NSE/BSE) — starting with manual trades on Zerodha to build intuition, then progressively automating with Python, and eventually pushing toward HFT infrastructure in C++.</p>
        <p>The long-term goal is running a SEBI-registered AIF. The current goal is just shipping one working backtest.</p>
        <h2>What you'll find here</h2>
        <p>Four categories:</p>
        <ul>
          <li><strong>Trading</strong> — trade setups, postmortems, and market observations</li>
          <li><strong>Quants</strong> — math, models, code, and systematic strategy building</li>
          <li><strong>Projects</strong> — things I'm building and shipping</li>
          <li><strong>Life</strong> — the honest stuff behind the journey</li>
        </ul>
        <h2>Get in touch</h2>
        <p>Best way to reach me is on <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>. I'm also on <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>.</p>
      </div>
      <div style={{ marginTop:"2.5rem" }} className="fade-up d3">
        <Link href="/writing" className="btn btn-primary">Read my writing →</Link>
      </div>
    </div>
  );
}
