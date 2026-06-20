"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowUpRight, Layers } from "lucide-react"

import { cn } from "@/lib/utils"

type Item = {
  title: string
  category: string
  steps?: number // present → it's a sequence
  blurb: string
  accent: string // thumbnail hero band color
}

const CATEGORIES = ["All", "Onboarding", "Lifecycle", "Newsletters", "Announcements", "Transactional", "Re-engagement"] as const

const ITEMS: Item[] = [
  { title: "Welcome & setup", category: "Onboarding", steps: 3, blurb: "Greet new signups and walk them to first value.", accent: "#D97757" },
  { title: "Trial ending nudge", category: "Lifecycle", blurb: "A timely reminder before the trial lapses.", accent: "#5E8C61" },
  { title: "Product announcement", category: "Announcements", blurb: "Launch a feature with a clear, single CTA.", accent: "#5B7C9E" },
  { title: "Monthly newsletter", category: "Newsletters", blurb: "A clean digest layout for recurring sends.", accent: "#C2843E" },
  { title: "Order confirmation", category: "Transactional", blurb: "Receipt with line items and a support link.", accent: "#2A2823" },
  { title: "Password reset", category: "Transactional", blurb: "Minimal, trustworthy, single-action email.", accent: "#2A2823" },
  { title: "Win-back", category: "Re-engagement", steps: 3, blurb: "Re-earn lapsed users with escalating value.", accent: "#BC4B3C" },
  { title: "Post-purchase", category: "Lifecycle", steps: 4, blurb: "Onboard buyers and drive the next action.", accent: "#5E8C61" },
  { title: "Event invite & reminders", category: "Announcements", steps: 3, blurb: "Invite, remind, and follow up for an event.", accent: "#5B7C9E" },
  { title: "Feedback request", category: "Lifecycle", blurb: "Ask for a rating or a quick reply.", accent: "#C2843E" },
  { title: "Feature launch", category: "Announcements", blurb: "Hero image, three benefits, one CTA.", accent: "#D97757" },
  { title: "Abandoned cart", category: "Re-engagement", steps: 3, blurb: "Recover carts with a gentle, useful nudge.", accent: "#BC4B3C" },
]

/* pure-CSS mini email preview */
function EmailThumb({ accent, steps }: { accent: string; steps?: number }) {
  return (
    <div className="relative h-40 overflow-hidden rounded-t-2xl border-b border-border bg-[#EFEDE6] p-5">
      {steps && steps > 1 ? (
        <>
          <div className="absolute left-7 top-7 h-full w-full rounded-lg border border-border bg-card/70" />
          <div className="absolute left-3.5 top-3.5 h-full w-full rounded-lg border border-border bg-card/85" />
        </>
      ) : null}
      <div className="relative mx-auto h-full w-[78%] overflow-hidden rounded-lg border border-border bg-white shadow-sm">
        <div className="h-1.5 w-full" style={{ background: accent }} />
        <div className="space-y-2 p-3">
          <div className="h-2.5 w-1/2 rounded-sm bg-[#2A2823]" />
          <div className="h-1.5 w-full rounded-sm bg-[#E2DED4]" />
          <div className="h-1.5 w-5/6 rounded-sm bg-[#E2DED4]" />
          <div className="h-1.5 w-4/6 rounded-sm bg-[#E2DED4]" />
          <div className="mt-2 h-3.5 w-20 rounded" style={{ background: accent }} />
        </div>
      </div>
    </div>
  )
}

export function TemplateGallery() {
  const [active, setActive] = React.useState<(typeof CATEGORIES)[number]>("All")
  const items = active === "All" ? ITEMS : ITEMS.filter((i) => i.category === active)

  return (
    <div>
      {/* filter chips */}
      <div className="flex flex-wrap justify-center gap-2">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setActive(c)}
            className={cn(
              "rounded-full border px-3.5 py-1.5 text-[13px] font-medium transition-colors",
              active === c
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card text-muted-foreground hover:border-input hover:text-foreground"
            )}
          >
            {c}
          </button>
        ))}
      </div>

      {/* grid */}
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it) => (
          <article
            key={it.title}
            className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-0.5 hover:border-input hover:shadow-[0_8px_20px_rgba(40,34,25,0.08)]"
          >
            <EmailThumb accent={it.accent} steps={it.steps} />
            <div className="flex flex-1 flex-col p-5">
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-secondary px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground">
                  {it.category}
                </span>
                {it.steps ? (
                  <span className="inline-flex items-center gap-1 text-[11px] font-medium text-terracotta">
                    <Layers className="size-3" />
                    {it.steps}-step sequence
                  </span>
                ) : (
                  <span className="text-[11px] font-medium text-muted-foreground/70">Single email</span>
                )}
              </div>
              <h3 className="mt-3 text-[15px] font-semibold text-foreground">{it.title}</h3>
              <p className="mt-1.5 flex-1 text-sm leading-snug text-muted-foreground">{it.blurb}</p>
              <Link
                href="/pricing"
                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-terracotta opacity-0 transition-opacity group-hover:opacity-100"
              >
                Open in editor <ArrowUpRight className="size-3.5" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
