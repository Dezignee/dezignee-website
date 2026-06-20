"use client"

import * as React from "react"
import Link from "next/link"
import { Check } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

/* Plan data mirrors dezignee-backend/src/core/billing/plans.py.
   Prices in USD. Annual ≈ 2 months free. Credits meter AI usage. */
type Plan = {
  name: string
  monthly: number | null
  annual: number | null
  priceLabel?: string
  creditsLabel: React.ReactNode
  reset: string
  overage: string | null
  blurb: string
  features: string[]
  cta: { href: string; label: string }
  highlighted?: boolean
}

const PLANS: Plan[] = [
  {
    name: "Free",
    monthly: 0,
    annual: 0,
    creditsLabel: <><b>50</b> credits / day</>,
    reset: "Resets daily",
    overage: null,
    blurb: "Explore the editor and ship your first emails.",
    features: [
      "AI drafting & visual block editor",
      "Email-safe HTML export",
      "Merge tags & preview",
      "1 workspace",
      "Community support",
    ],
    cta: { href: "/pricing", label: "Start free" },
  },
  {
    name: "Pro",
    monthly: 99,
    annual: 990,
    creditsLabel: <><b>2,500</b> credits / mo</>,
    reset: "Resets monthly",
    overage: "$0.03 / extra credit",
    blurb: "For makers shipping campaigns every week.",
    features: [
      "Everything in Free",
      "Sequences (multi-step campaigns)",
      "Asset library & version history",
      "API access & webhooks",
      "Email support",
    ],
    cta: { href: "/pricing", label: "Start Pro" },
    highlighted: true,
  },
  {
    name: "Growth",
    monthly: 399,
    annual: 3990,
    creditsLabel: <><b>10,000</b> credits / mo</>,
    reset: "Resets monthly",
    overage: "$0.025 / extra credit",
    blurb: "For teams scaling lifecycle and embedded flows.",
    features: [
      "Everything in Pro",
      "MCP servers (Cursor, VS Code, Claude)",
      "Multiple workspaces",
      "Lower overage rate",
      "Priority support",
    ],
    cta: { href: "/pricing", label: "Start Growth" },
  },
  {
    name: "Business",
    monthly: 699,
    annual: 6990,
    creditsLabel: <><b>25,000</b> credits / mo</>,
    reset: "Resets monthly",
    overage: "$0.02 / extra credit",
    blurb: "For high-volume teams that want their own keys.",
    features: [
      "Everything in Growth",
      "Bring your own OpenAI key",
      "Lowest overage rate",
      "Audit log & governance",
      "Dedicated support",
    ],
    cta: { href: "/contact", label: "Talk to us" },
  },
]

const ADDONS = [
  { name: "Bucket 5K", price: "$100", credits: "+5,000 credits / mo" },
  { name: "Bucket 10K", price: "$180", credits: "+10,000 credits / mo" },
]

function formatMonthlyEquivalent(annual: number) {
  const perMonth = annual / 12
  return Number.isInteger(perMonth) ? `$${perMonth}` : `$${perMonth.toFixed(2)}`
}

export function PricingPlans() {
  const [annual, setAnnual] = React.useState(false)

  return (
    <div>
      {/* billing toggle */}
      <div className="flex items-center justify-center gap-3">
        <span className={cn("text-sm font-medium", !annual ? "text-foreground" : "text-muted-foreground")}>
          Monthly
        </span>
        <button
          type="button"
          role="switch"
          aria-checked={annual}
          aria-label="Toggle annual billing"
          onClick={() => setAnnual((v) => !v)}
          className={cn(
            "relative h-6 w-11 shrink-0 rounded-full border border-border transition-colors",
            annual ? "bg-primary" : "bg-secondary"
          )}
        >
          <span
            className={cn(
              "absolute top-0.5 size-4 rounded-full bg-background shadow-sm transition-transform",
              annual ? "translate-x-[22px]" : "translate-x-0.5"
            )}
          />
        </button>
        <span className={cn("text-sm font-medium", annual ? "text-foreground" : "text-muted-foreground")}>
          Annual
        </span>
        <span className="rounded-full bg-terracotta-tint px-2.5 py-0.5 text-xs font-semibold text-terracotta">
          Save ~17%
        </span>
      </div>

      {/* plan cards */}
      <div className="mt-12 grid gap-5 lg:grid-cols-4">
        {PLANS.map((p) => {
          const isFree = p.monthly === 0
          const showAnnual = annual && p.annual && p.annual > 0
          const big = isFree
            ? "$0"
            : showAnnual
              ? formatMonthlyEquivalent(p.annual as number)
              : `$${p.monthly}`
          return (
            <div
              key={p.name}
              className={cn(
                "relative flex flex-col rounded-2xl border bg-card p-6",
                p.highlighted ? "border-terracotta/40 shadow-[0_4px_16px_rgba(40,34,25,0.08)]" : "border-border"
              )}
            >
              {p.highlighted ? (
                <span className="absolute -top-2.5 left-6 rounded-full bg-terracotta px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-terracotta-foreground">
                  Most popular
                </span>
              ) : null}

              <h3 className="text-[15px] font-semibold text-foreground">{p.name}</h3>
              <p className="mt-1.5 text-sm leading-snug text-muted-foreground">{p.blurb}</p>

              <div className="mt-5 flex items-baseline gap-1">
                <span className="font-display text-[38px] font-semibold leading-none text-foreground">{big}</span>
                {!isFree ? <span className="text-sm text-muted-foreground">/mo</span> : null}
              </div>
              <p className="mt-1.5 h-4 text-xs text-muted-foreground">
                {!isFree && showAnnual ? `billed $${p.annual} / year` : !isFree ? "billed monthly" : "free forever"}
              </p>

              <div className="mt-4 rounded-lg border border-border bg-secondary/50 px-3.5 py-3">
                <p className="text-sm text-foreground">{p.creditsLabel}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {p.reset}
                  {p.overage ? ` · ${p.overage}` : ""}
                </p>
              </div>

              <Button asChild className="mt-5 w-full" variant={p.highlighted ? "default" : "outline"}>
                <Link href={p.cta.href}>{p.cta.label}</Link>
              </Button>

              <ul className="mt-6 space-y-2.5">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-terracotta" />
                    <span className="leading-snug">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>

      {/* add-ons */}
      <div className="mt-8 rounded-2xl border border-border bg-secondary/40 p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-[15px] font-semibold text-foreground">Need more credits?</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Add a recurring credit bucket to any paid plan — stack as many as you need.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {ADDONS.map((a) => (
              <div key={a.name} className="rounded-xl border border-border bg-card px-4 py-3">
                <div className="flex items-baseline gap-1.5">
                  <span className="font-display text-xl font-semibold text-foreground">{a.price}</span>
                  <span className="text-xs text-muted-foreground">/mo</span>
                </div>
                <p className="mt-0.5 text-xs text-muted-foreground">{a.credits}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
