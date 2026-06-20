import type { Metadata } from "next"
import * as React from "react"
import Link from "next/link"
import { Check, Minus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/reveal"
import { PageHeader } from "@/components/sections/page-header"
import { PricingPlans } from "@/components/sections/pricing-plans"

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Start free with 50 credits a day. Paid plans from $99/mo meter AI usage in credits and never block you — overage is simple pay-as-you-go.",
  alternates: { canonical: "/pricing" },
}

/* comparison rows — cell value: true | false | string */
type Row = { label: string; free: boolean | string; pro: boolean | string; growth: boolean | string; business: boolean | string }
const GROUPS: { title: string; rows: Row[] }[] = [
  {
    title: "AI & credits",
    rows: [
      { label: "Included AI credits", free: "50 / day", pro: "2,500 / mo", growth: "10,000 / mo", business: "25,000 / mo" },
      { label: "Overage rate", free: "—", pro: "$0.03", growth: "$0.025", business: "$0.02" },
      { label: "Credit add-on buckets", free: false, pro: true, growth: true, business: true },
      { label: "Bring your own OpenAI key", free: false, pro: false, growth: false, business: true },
    ],
  },
  {
    title: "Editor & creation",
    rows: [
      { label: "Visual block editor", free: true, pro: true, growth: true, business: true },
      { label: "Merge tags & preview", free: true, pro: true, growth: true, business: true },
      { label: "Email-safe HTML export", free: true, pro: true, growth: true, business: true },
      { label: "Sequences (multi-step)", free: false, pro: true, growth: true, business: true },
      { label: "Asset library & version history", free: false, pro: true, growth: true, business: true },
    ],
  },
  {
    title: "Developers & teams",
    rows: [
      { label: "API access & webhooks", free: false, pro: true, growth: true, business: true },
      { label: "MCP servers", free: false, pro: false, growth: true, business: true },
      { label: "Workspaces", free: "1", pro: "1", growth: "Multiple", business: "Multiple" },
      { label: "Audit log & governance", free: false, pro: false, growth: false, business: true },
      { label: "Support", free: "Community", pro: "Email", growth: "Priority", business: "Dedicated" },
    ],
  },
]

const FAQ = [
  {
    q: "What's a credit?",
    a: "Credits meter AI usage — chat drafting, suggestions, and image generation. Routine manual editing in the block editor doesn't spend credits.",
  },
  {
    q: "What happens when I run out?",
    a: "On Free, credits reset the next day. On paid plans they reset monthly, and you're never blocked: extra usage bills as simple pay-as-you-go overage, or you can add a credit bucket.",
  },
  {
    q: "How does annual billing work?",
    a: "Annual plans are billed once a year for the price of about ten months — roughly 17% off versus paying monthly.",
  },
  {
    q: "Can I bring my own OpenAI key?",
    a: "Yes, on Business. Connect your own key so AI generation runs on your account instead of metered Dezignee credits.",
  },
  {
    q: "Can I embed the editor in my product?",
    a: "Yes. The plugin SDK and MCP servers are available on paid plans — see the developer docs for the integration tracks.",
  },
  {
    q: "Do I need a credit card to start?",
    a: "No. The Free plan is free forever with 50 credits a day — no card required.",
  },
]

function Cell({ v }: { v: boolean | string }) {
  if (v === true) return <Check className="mx-auto size-[18px] text-success" aria-label="Included" />
  if (v === false) return <Minus className="mx-auto size-[18px] text-muted-foreground/40" aria-label="Not included" />
  return <span className="text-sm text-foreground/80">{v}</span>
}

export default function PricingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pricing"
        title={<>Start free. Scale by credits.</>}
        description="AI usage is metered in credits — and paid plans never block you. Pick a tier, switch to annual to save, and top up with buckets any time."
      />

      {/* plans */}
      <section className="border-b border-border">
        <div className="mx-auto w-4/5 max-w-[1040px] py-16">
          <PricingPlans />
        </div>
      </section>

      {/* comparison */}
      <section className="border-b border-border">
        <div className="mx-auto w-4/5 max-w-[1040px] py-20">
          <header className="mx-auto max-w-2xl text-center">
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.04em] text-muted-foreground">
              <span className="size-1.5 rounded-full bg-terracotta" aria-hidden="true" />
              Compare plans
            </p>
            <h2 className="font-display mt-3.5 text-balance text-[34px] leading-[1.12] text-foreground sm:text-[38px]">
              Every detail, side by side.
            </h2>
          </header>

          <div className="mt-12 overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-left">
              <thead>
                <tr>
                  <th className="w-[34%] pb-4 pr-4 align-bottom" />
                  {["Free", "Pro", "Growth", "Business"].map((n) => (
                    <th key={n} className="pb-4 text-center align-bottom">
                      <span className="text-[15px] font-semibold text-foreground">{n}</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {GROUPS.map((g) => (
                  <React.Fragment key={g.title}>
                    <tr>
                      <td
                        colSpan={5}
                        className="border-t border-border pb-2 pt-6 text-xs font-semibold uppercase tracking-[0.04em] text-muted-foreground"
                      >
                        {g.title}
                      </td>
                    </tr>
                    {g.rows.map((r) => (
                      <tr key={r.label} className="border-t border-border/60">
                        <td className="py-3 pr-4 text-sm text-muted-foreground">{r.label}</td>
                        <td className="py-3 text-center"><Cell v={r.free} /></td>
                        <td className="py-3 text-center"><Cell v={r.pro} /></td>
                        <td className="py-3 text-center"><Cell v={r.growth} /></td>
                        <td className="py-3 text-center"><Cell v={r.business} /></td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-border">
        <div className="mx-auto w-4/5 max-w-[1040px] py-20">
          <header className="mx-auto max-w-2xl text-center">
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.04em] text-muted-foreground">
              <span className="size-1.5 rounded-full bg-terracotta" aria-hidden="true" />
              FAQ
            </p>
            <h2 className="font-display mt-3.5 text-balance text-[34px] leading-[1.12] text-foreground sm:text-[38px]">
              Questions, answered.
            </h2>
          </header>
          <div className="mx-auto mt-12 grid max-w-3xl gap-x-10 gap-y-8 sm:grid-cols-2">
            {FAQ.map((f) => (
              <div key={f.q}>
                <h3 className="text-[15px] font-semibold text-foreground">{f.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto w-4/5 max-w-[1040px] py-20">
          <Reveal>
            <div className="overflow-hidden rounded-3xl bg-primary px-10 py-14 text-center">
              <h2 className="font-display text-balance text-[34px] leading-[1.1] text-primary-foreground">
                Try it free — 50 credits a day.
              </h2>
              <p className="mx-auto mt-4 max-w-md text-lg text-primary-foreground/60">
                No credit card. Upgrade when your sending picks up.
              </p>
              <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
                <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90">
                  <Link href="/pricing">Start free</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/25 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                >
                  <Link href="/contact">Talk to us</Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
