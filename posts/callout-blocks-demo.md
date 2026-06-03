---
title: "Callout Blocks — Style Guide"
subtitle: "Every block type, with real examples for trading & quant posts"
date: "2025-06-25"
category: "building"
tags: ["writing", "style", "reference"]
excerpt: "A reference post showing all 10 callout block types — info, warning, danger, tip, math, trade, quote, tldr, chart, and story. Copy the HTML snippets into your markdown files."
---

This is your personal style guide. Every callout block you can use in posts, with real examples from trading and quant writing. Bookmark this page.

---

## 1. Info — `callout-info`

**When to use:** Intended audience notices, background context, "before you read this" disclaimers, prerequisites.

<div class="callout-info">
<strong>Intended audience</strong>
<p>This post assumes you're familiar with basic options terminology — calls, puts, and strike prices. If you're new to options, the NSE's options module on Varsity is a solid starting point.</p>
</div>

```html
<div class="callout-info">
  <strong>Intended audience</strong>
  <p>Your context note here.</p>
</div>
```

---

## 2. Warning — `callout-warning`

**When to use:** Risk disclaimers, "this can go wrong", backtesting caveats, survivorship bias warnings, "don't do this in live trading without testing."

<div class="callout-warning">
<strong>Risk notice</strong>
<p>Everything in this post is for educational purposes. Past performance of a strategy in backtesting does not guarantee future results. BankNifty options can move 500 points in 20 minutes — size accordingly.</p>
</div>

```html
<div class="callout-warning">
  <strong>Risk notice</strong>
  <p>Your warning here.</p>
</div>
```

---

## 3. Danger — `callout-danger`

**When to use:** Hard lessons, trade postmortems, "this is what blew my account", things that actually hurt you, critical bugs in code.

<div class="callout-danger">
<strong>What went wrong</strong>
<p>I held the short strangle through the RBI policy announcement without checking the calendar. IV spiked 40% in 15 minutes and both legs were deep ITM. Classic rookie error — always check macro events before entering.</p>
</div>

```html
<div class="callout-danger">
  <strong>What went wrong</strong>
  <p>Your postmortem here.</p>
</div>
```

---

## 4. Tip — `callout-tip`

**When to use:** Actual edges, things that work, pro tips, "this saved me time", key insights, practical shortcuts.

<div class="callout-tip">
<strong>Edge worth noting</strong>
<p>On BankNifty weekly expiry days, IV crush is most aggressive in the last 90 minutes. If you're long premium, exit by 2:30 PM. If you're short premium, your theta accelerates hardest in this window.</p>
</div>

```html
<div class="callout-tip">
  <strong>Edge worth noting</strong>
  <p>Your insight here.</p>
</div>
```

---

## 5. Math — `callout-math`

**When to use:** Formulas, quant derivations, statistical models, backtesting metrics, anything that should be read carefully with a code-like eye.

<div class="callout-math">
<strong>Sharpe Ratio</strong>
<p>Sharpe = (Rp − Rf) / σp</p>
<p>Where Rp = portfolio return, Rf = risk-free rate (use 6.5% for India), σp = annualised standard deviation of returns. A Sharpe above 1.5 is generally considered good for a systematic strategy.</p>
</div>

```html
<div class="callout-math">
  <strong>Formula name</strong>
  <p>Your formula here.</p>
  <p>Explanation of variables.</p>
</div>
```

---

## 6. Trade — `callout-trade`

**When to use:** Specific trade setups, entry/exit logs, live trade documentation, "here's exactly what I did and why."

<div class="callout-trade">
<strong>Trade setup — Nifty Iron Condor</strong>
<p>Instrument: Nifty weekly expiry (Thursday)</p>
<p>Sell 22,500 CE + Buy 22,700 CE | Sell 21,800 PE + Buy 21,600 PE</p>
<p>Entry: Monday open, IV rank above 40. Net credit: ₹62. Max loss: ₹138. Target: 50% of credit by Wednesday.</p>
</div>

```html
<div class="callout-trade">
  <strong>Trade setup — Name</strong>
  <p>Instrument, strikes, expiry here.</p>
  <p>Entry logic, credit/debit, targets.</p>
</div>
```

---

## 7. Quote — `callout-quote`

**When to use:** Memorable lines from trading books, market wisdom, things people said that stuck with you.

<div class="callout-quote">
<p>The market is a device for transferring money from the impatient to the patient.</p>
<strong>— Warren Buffett</strong>
</div>

```html
<div class="callout-quote">
  <p>The quote text here.</p>
  <strong>— Attribution</strong>
</div>
```

---

## 8. TLDR — `callout-tldr`

**When to use:** Post summaries at the top, key takeaways at the bottom, "if you read nothing else, read this."

<div class="callout-tldr">
<strong>TL;DR</strong>
<p>Selling options on high-IV days in Nifty gives a statistical edge, but only if you manage position size aggressively. The edge disappears if you let losers run. Exit at 2× credit received, no exceptions.</p>
</div>

```html
<div class="callout-tldr">
  <strong>TL;DR</strong>
  <p>Your summary here.</p>
</div>
```

---

## 9. Chart — `callout-chart`

**When to use:** Describing what you see on a chart, pattern explanations, "here's what to look for", chart image captions.

<div class="callout-chart">
<strong>What I'm seeing on the chart</strong>
<p>BankNifty daily chart shows a descending channel with three clear lower highs. The 200 EMA is acting as dynamic resistance. RSI is below 45 and showing no divergence — this is not a reversal setup yet. Watch for a break above 44,800 with volume before considering longs.</p>
</div>

```html
<div class="callout-chart">
  <strong>What I'm seeing on the chart</strong>
  <p>Your chart analysis here.</p>
</div>
```

---

## 10. Story — `callout-story`

**When to use:** Personal journal entries, emotional honesty, "where I was mentally that day", life context behind a trade or decision.

<div class="callout-story">
<strong>March 14, 2025</strong>
<p>I remember sitting at my desk at 9:20 AM watching the pre-market data come in. My hands were actually shaking a little. This was the first week I was putting real size on — not "learning" money anymore. I kept second-guessing the setup I'd spent three weeks backtesting. This is the part of trading nobody talks about.</p>
</div>

```html
<div class="callout-story">
  <strong>Date or context</strong>
  <p>Your personal note here.</p>
</div>
```

---

## Quick reference

| Class | Color | Use for |
|---|---|---|
| `callout-info` | Purple | Context, prerequisites, audience |
| `callout-warning` | Amber | Risk notices, caveats |
| `callout-danger` | Red | Mistakes, postmortems, hard lessons |
| `callout-tip` | Green | Edges, pro tips, what works |
| `callout-math` | Blue | Formulas, quant models |
| `callout-trade` | Teal | Trade setups, entry/exit logs |
| `callout-quote` | Violet | Book quotes, market wisdom |
| `callout-tldr` | Pink | Summaries, key takeaways |
| `callout-chart` | Orange | Chart readings, pattern notes |
| `callout-story` | Warm gray | Personal notes, journal entries |
