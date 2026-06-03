---
title: "Kelly Criterion — The Math Behind Position Sizing"
subtitle: "Why betting more doesn't mean winning more"
date: "2025-06-18"
category: "quants"
tags: ["kelly", "position-sizing", "math", "risk-management"]
excerpt: "The Kelly Criterion tells you exactly how much to bet on any trade to maximise long-run wealth. But the full Kelly is almost always too aggressive. Here's the math, and why half-Kelly is your friend."
---

Most traders size positions by feel. A few use fixed percentage risk. Almost nobody uses the mathematically optimal approach — which is a shame, because the math is beautiful.

## The Kelly Formula

<div class="callout-math">
<strong>Kelly Criterion</strong>
<p>f* = (bp - q) / b</p>
<p>Where:</p>
<p>f* = fraction of capital to bet</p>
<p>b  = net odds received (profit / stake)</p>
<p>p  = probability of winning</p>
<p>q  = probability of losing = 1 - p</p>
</div>

## A concrete example

Say you have a strategy with 55% win rate, and your average win is 1.5× your average loss.

<div class="callout-math">
<strong>Calculating Kelly for this strategy</strong>
<p>p = 0.55, q = 0.45, b = 1.5</p>
<p>f* = (1.5 × 0.55 - 0.45) / 1.5</p>
<p>f* = (0.825 - 0.45) / 1.5 = 0.375 / 1.5 = 0.25</p>
<p>Full Kelly says bet 25% of your capital on this trade.</p>
</div>

<div class="callout-warning">
<strong>Full Kelly is brutal</strong>
<p>A string of 5 consecutive losses at full Kelly would reduce your capital by 76%. That's psychologically unsurvivable for most traders. Always use fractional Kelly.</p>
</div>

## Half Kelly in practice

<div class="callout-tip">
<strong>Use half-Kelly as your baseline</strong>
<p>Half-Kelly (12.5% in our example) captures about 75% of the growth rate of full Kelly but with dramatically less drawdown. Most professional systematic traders use 1/4 to 1/2 Kelly.</p>
</div>

<div class="callout-tldr">
<strong>Practical rule</strong>
<p>Estimate your edge honestly, calculate full Kelly, then bet half of that. Your win rate and average win/loss are almost always slightly worse live than in backtests — so be conservative.</p>
</div>
