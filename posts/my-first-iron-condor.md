---
title: "My First Iron Condor on BankNifty"
subtitle: "Walking through the setup, execution, and what I learned"
date: "2025-06-15"
category: "trading"
tags: ["options", "banknifty", "iron-condor", "beginners"]
excerpt: "The first time you sell premium with a defined-risk structure, everything changes. Here's exactly how I set up my first iron condor on BankNifty — and the three things I got wrong."
---

The first time you put on a defined-risk options trade is different. There's something clarifying about knowing your max loss before you even hit confirm.

This is the story of my first iron condor on BankNifty weekly expiry.

<div class="callout-info">
<strong>Intended audience</strong>
<p>This post assumes you're familiar with calls, puts, and basic options terminology. If you're new, start with Zerodha Varsity's options modules first.</p>
</div>

## Why BankNifty?

BankNifty has the highest options liquidity on NSE. Tight spreads, weekly expiry, and enough daily range to make theta decay meaningful.

<div class="callout-chart">
<strong>What I was seeing</strong>
<p>BankNifty trading in a 400-point range for 4 consecutive days. IV rank was sitting at 52 — high enough that selling premium had edge. Monday morning, no major events on the calendar.</p>
</div>

## The setup

Here's exactly what I put on:

<div class="callout-trade">
<strong>Trade setup — BankNifty Weekly Iron Condor</strong>
<p>Date: Monday open | Expiry: Thursday</p>
<p>Short leg: Sell 44,200 CE + Sell 43,400 PE</p>
<p>Long leg: Buy 44,600 CE + Buy 43,000 PE</p>
<p>Net credit received: ₹74 | Max loss: ₹326 | Max profit: ₹74</p>
<p>Target: Exit at 50% profit (₹37 credit remaining) or stop at 2× credit (₹148 loss)</p>
</div>

## What went right

I picked strikes at 1-delta on each side. The position had a 72% probability of profit according to the options chain.

<div class="callout-tip">
<strong>The edge I was playing</strong>
<p>On high-IV weeks, BankNifty's realized volatility typically comes in lower than implied. Selling premium when IV rank is above 45 has historically had positive expectancy in backtests going back 3 years.</p>
</div>

## What went wrong

Three things.

**First:** I sized too large. 3 lots on a ₹2L account is 4.5% risk on a single trade. Too much for a beginner.

**Second:** I panicked at -₹60 on Tuesday afternoon and adjusted the call side — moving it closer to spot. Bad decision. That widened my loss profile.

**Third:** I didn't account for the RBI minutes release on Wednesday.

<div class="callout-danger">
<strong>Critical error</strong>
<p>Always check the economic calendar before entering any premium-selling trade. The RBI minutes caused a 250-point spike in 8 minutes — my adjusted call position went deep ITM. Final P&L: -₹186 instead of what would have been a winning trade.</p>
</div>

## The math of what happened

<div class="callout-math">
<strong>Expected value breakdown</strong>
<p>EV = (P_win × max_profit) - (P_lose × max_loss)</p>
<p>EV = (0.72 × 74) - (0.28 × 326) = 53.28 - 91.28 = -38</p>
<p>The trade had negative EV before I even placed it. I was relying on the "50% profit exit" to improve the math — which works, but only if you don't get stopped out early by an exogenous shock.</p>
</div>

## Key takeaways

<div class="callout-tldr">
<strong>TL;DR</strong>
<p>Iron condors work. My execution didn't. Check the calendar, size small (1% risk per trade), and never adjust out of panic. The strategy had edge — the trader didn't.</p>
</div>
