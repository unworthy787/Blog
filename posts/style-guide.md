---
title: "Blog Style Guide & Component Reference"
subtitle: "Every block, button, callout, and element — with copy-paste snippets"
date: "2025-06-28"
category: "projects"
tags: ["reference", "style", "components"]
excerpt: "Your personal reference for every component available in this blog — callout blocks, code snippets, tables, images, and buttons. Bookmark this."
---

This is your living style guide. Every component, with the exact HTML to use in any `.md` post.

---

## Callout Blocks

### Info — context and prerequisites

<div class="callout-info">
<strong>Intended audience</strong>
<p>Use this for "before you read" context, prerequisites, or background the reader should have.</p>
</div>

```html
<div class="callout-info">
  <strong>Title</strong>
  <p>Your text here.</p>
</div>
```

### Warning — risk and caveats

<div class="callout-warning">
<strong>Risk notice</strong>
<p>For disclaimers, backtesting caveats, "this can go wrong" notices.</p>
</div>

### Danger — hard lessons

<div class="callout-danger">
<strong>What went wrong</strong>
<p>For trade postmortems, critical errors, and things that actually hurt.</p>
</div>

### Tip — real edges

<div class="callout-tip">
<strong>Edge worth noting</strong>
<p>For things that actually work, pro tips, and genuine insights.</p>
</div>

### Math — formulas and models

<div class="callout-math">
<strong>Sharpe Ratio</strong>
<p>S = (Rp - Rf) / σp</p>
<p>Where Rp = portfolio return, Rf = risk-free rate, σp = annualised std dev of returns.</p>
</div>

### Trade — setups and logs

<div class="callout-trade">
<strong>Trade setup — Nifty Iron Condor</strong>
<p>Sell 22,500 CE + Buy 22,700 CE | Sell 21,800 PE + Buy 21,600 PE</p>
<p>Entry Monday open, IV rank > 40. Credit: ₹62. Target: 50% by Wednesday.</p>
</div>

### Quote — wisdom

<div class="callout-quote">
<p>The market is a device for transferring money from the impatient to the patient.</p>
<strong>— Warren Buffett</strong>
</div>

### TLDR — key takeaway

<div class="callout-tldr">
<strong>TL;DR</strong>
<p>Use this at the top or bottom of posts for the single most important takeaway.</p>
</div>

### Chart — chart analysis

<div class="callout-chart">
<strong>What I'm seeing</strong>
<p>BankNifty daily: descending channel, three lower highs. 200 EMA acting as resistance. Not a reversal setup yet — watch for a break above 44,800 with volume.</p>
</div>

### Story — personal notes

<div class="callout-story">
<strong>June 14, 2025</strong>
<p>I remember sitting there watching the pre-market, hands actually shaking. First time sizing up for real. This is the part of trading nobody talks about.</p>
</div>

---

## Code Blocks

### Side-by-side Input / Output

<div class="code-block">
  <div class="code-block-header">
    <div class="code-block-dots">
      <div class="code-block-dot code-block-dot-red"></div>
      <div class="code-block-dot code-block-dot-yellow"></div>
      <div class="code-block-dot code-block-dot-green"></div>
    </div>
    <span class="code-block-filename">kelly.py</span>
    <span class="code-block-lang">Python</span>
  </div>
  <div class="code-block-panels">
    <div class="code-panel">
      <div class="code-panel-label code-panel-label-input">Input</div>
      <pre><code>def kelly(p, b):
    q = 1 - p
    return (b * p - q) / b

f = kelly(0.55, 1.5)
half_f = f / 2

print(f"Full Kelly: {f:.1%}")
print(f"Half Kelly: {half_f:.1%}")</code></pre>
    </div>
    <div class="code-panel">
      <div class="code-panel-label code-panel-label-output">Output</div>
      <pre><code>Full Kelly:  25.0%
Half Kelly:  12.5%</code></pre>
    </div>
  </div>
</div>

### Single panel

<div class="code-block">
  <div class="code-block-header">
    <div class="code-block-dots">
      <div class="code-block-dot code-block-dot-red"></div>
      <div class="code-block-dot code-block-dot-yellow"></div>
      <div class="code-block-dot code-block-dot-green"></div>
    </div>
    <span class="code-block-filename">strategy.py</span>
    <span class="code-block-lang">Python</span>
  </div>
  <div class="code-block-single">
    <pre><code>import pandas as pd
import numpy as np

def sharpe(returns, rf=0.065/252):
    excess = returns - rf
    return np.sqrt(252) * excess.mean() / excess.std()</code></pre>
  </div>
</div>

---

## Tables

| Strategy | Win Rate | Avg R | Sharpe | Max DD |
|---|---|---|---|---|
| Iron Condor | 72% | 0.23R | 1.4 | -18% |
| Momentum | 48% | 2.1R | 1.8 | -24% |
| Mean Revert | 61% | 0.9R | 1.2 | -15% |

---

## Button Pack

<a href="#" class="btn btn-primary">✦ Primary button</a>
<a href="#" class="btn btn-secondary">↗ Secondary</a>
<a href="#" class="btn btn-ghost">→ Ghost</a>
<a href="#" class="btn btn-success">✓ Success</a>
<a href="#" class="btn btn-danger">✕ Danger</a>

<a href="#" class="btn btn-primary btn-sm">✦ Small</a>
<a href="#" class="btn btn-primary">✦ Default</a>
<a href="#" class="btn btn-primary btn-lg">✦ Large</a>

```html
<!-- With icons — paste any symbol before the label -->
<a href="#" class="btn btn-primary">✦ Read more</a>
<a href="#" class="btn btn-secondary">↗ Open link</a>
<a href="#" class="btn btn-ghost">→ Learn more</a>
<a href="#" class="btn btn-success">✓ Confirm</a>
<a href="#" class="btn btn-danger">✕ Delete</a>

<!-- Sizes -->
<a href="#" class="btn btn-primary btn-sm">✦ Small</a>
<a href="#" class="btn btn-primary">✦ Default</a>
<a href="#" class="btn btn-primary btn-lg">✦ Large</a>
```

---

## Image with caption

<div class="image-block">
  <img src="https://placehold.co/800x400/1a1628/9b79ff?text=Chart+Screenshot" alt="Example chart" />
  <div class="image-block-caption">BankNifty 15-min chart showing the ascending triangle formation before breakout. June 14, 2025.</div>
</div>

```html
<div class="image-block">
  <img src="your-image.png" alt="Description" />
  <div class="image-block-caption">Your caption here.</div>
</div>
```

