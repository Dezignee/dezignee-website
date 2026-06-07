import Link from "next/link"
import type { Metadata } from "next"
import { Check, Minus } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Hero } from "@/components/sections/hero"
import { PricingCard } from "@/components/sections/pricing-card"

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Choose a plan for dashboard workflows, then add embeddable SDK tiers for plugin use cases.",
  alternates: {
    canonical: "/pricing",
  },
}

const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "mo",
    description: "Explore the editor and generate a few templates.",
    features: [
      "AI draft generation (limited)",
      "Single-template workflows",
      "Basic export (HTML)",
      "Community support",
    ],
    cta: { href: "/contact", label: "Start Free" },
  },
  {
    name: "Pro",
    price: "$29",
    period: "mo",
    description: "For makers and teams shipping campaigns weekly.",
    features: [
      "Higher AI + export limits",
      "Sequences (multi-step campaigns)",
      "Reusable blocks and layouts",
      "Priority email support",
    ],
    highlighted: true,
    badge: "Most popular",
    cta: { href: "/contact", label: "Get Pro" },
    footnote: <>No credit card required to start.</>,
  },
  {
    name: "Business",
    price: "Custom",
    period: "",
    description: "For scaling teams and embedded product workflows.",
    features: [
      "Unlimited projects (negotiated)",
      "Team collaboration + governance",
      "SLAs & priority support",
      "Security + compliance options",
    ],
    cta: { href: "/contact", label: "Talk to sales" },
  },
] as const

const embedAddOns = [
  {
    name: "Embeddable — Basic",
    price: "+$49",
    period: "mo",
    description: "Embed the editor for a single product/app.",
    features: [
      "SDK embed for one domain",
      "Programmatic HTML export",
      "MCP tools enabled",
      "Standard support",
    ],
    cta: { href: "/docs", label: "Read SDK docs" },
  },
  {
    name: "Embeddable — Advanced",
    price: "+$149",
    period: "mo",
    description: "For platforms and plugins shipping at scale.",
    features: [
      "Multiple environments (dev/stage/prod)",
      "Advanced theming + branding hooks",
      "Usage analytics (basic)",
      "Priority support",
    ],
    highlighted: true,
    badge: "Best for platforms",
    cta: { href: "/contact", label: "Discuss embedding" },
  },
  {
    name: "Embeddable — Enterprise",
    price: "Custom",
    period: "",
    description: "Enterprise embedding with custom terms.",
    features: [
      "Custom domains + SSO options",
      "Dedicated support channel",
      "Security review + compliance support",
      "Commercial SLAs",
    ],
    cta: { href: "/contact", label: "Request a quote" },
  },
] as const

const featureRows = [
  { label: "AI template drafting", free: true, pro: true, business: true },
  { label: "Visual editor + manual tweaks", free: true, pro: true, business: true },
  { label: "Email sequences", free: false, pro: true, business: true },
  { label: "Reusable blocks", free: false, pro: true, business: true },
  { label: "Team collaboration", free: false, pro: false, business: true },
  { label: "Governance + admin controls", free: false, pro: false, business: true },
  { label: "Priority support", free: false, pro: true, business: true },
] as const

function CheckCell({ value }: { value: boolean }) {
  return (
    <div className="flex justify-center">
      {value ? (
        <Check className="size-4 text-primary" aria-label="Included" />
      ) : (
        <Minus className="size-4 text-muted-foreground" aria-label="Not included" />
      )}
    </div>
  )
}

export default function PricingPage() {
  return (
    <>
      <Hero
        badge="Pricing"
        title={
          <>
            Plans for teams—and{" "}
            <span className="bg-gradient-to-r from-primary via-cyan-400 to-primary bg-clip-text text-transparent">
              add-ons for embedding
            </span>
            .
          </>
        }
        description={
          <>
            Use Dezignee in the dashboard, or embed it in your product via SDK.
            Start with a plan, then add embeddable tiers when you need them.
          </>
        }
        primaryCta={{ href: "/contact", label: "Get Started" }}
        secondaryCta={{ href: "/docs", label: "SDK Quick Start" }}
      >
        <div className="flex flex-wrap justify-center gap-2">
          {["Monthly plans", "Embeddable SDK add-ons", "HTML export"].map((item) => (
            <span
              key={item}
              className="rounded-full border bg-background/60 px-3 py-1 text-xs text-muted-foreground"
            >
              {item}
            </span>
          ))}
        </div>
      </Hero>

      <section className="border-t bg-background">
        <div className="container py-16 sm:py-20">
          <header className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">
              Dashboard plans
            </p>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Choose a plan that matches your workflow.
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              Pricing below is placeholder—swap in real numbers anytime. The
              page layout is ready for a full feature matrix and FAQ.
            </p>
          </header>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {tiers.map((tier) => (
              <PricingCard
                key={tier.name}
                name={tier.name}
                price={tier.price}
                period={tier.period}
                description={tier.description}
                features={[...tier.features]}
                cta={tier.cta}
                highlighted={"highlighted" in tier ? tier.highlighted : false}
                badge={"badge" in tier ? tier.badge : undefined}
                footnote={"footnote" in tier ? tier.footnote : undefined}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t bg-muted/10">
        <div className="container py-16 sm:py-20">
          <header className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">
              Embeddable add-ons
            </p>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Embed Dezignee in your app with an SDK tier.
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              Add an embeddable tier to any plan to unlock SDK-based embedding
              and developer tooling (including MCP workflows).
            </p>
          </header>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {embedAddOns.map((addon) => (
              <PricingCard
                key={addon.name}
                name={addon.name}
                price={addon.price}
                period={addon.period}
                description={addon.description}
                features={[...addon.features]}
                cta={addon.cta}
                highlighted={"highlighted" in addon ? addon.highlighted : false}
                badge={"badge" in addon ? addon.badge : undefined}
              />
            ))}
          </div>

          <div className="mt-10 rounded-2xl border bg-card p-6 shadow-sm">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold tracking-tight">
                  Not sure which embedding tier you need?
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Tell us your product workflow and we’ll recommend the fastest
                  path.
                </p>
              </div>
              <Button asChild variant="outline">
                <Link href="/contact">Talk to us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t bg-background">
        <div className="container py-16 sm:py-20">
          <header className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">
              Compare plans
            </p>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              A quick feature matrix.
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              Expand this table over time as your product surface grows.
            </p>
          </header>

          <div className="mt-10 overflow-hidden rounded-2xl border bg-card shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-muted/30">
                  <tr className="text-left">
                    <th className="px-4 py-3 font-medium">Feature</th>
                    <th className="px-4 py-3 text-center font-medium">Free</th>
                    <th className="px-4 py-3 text-center font-medium">
                      <span className="inline-flex items-center gap-2">
                        Pro{" "}
                        <Badge variant="secondary" className="border-primary/20">
                          Popular
                        </Badge>
                      </span>
                    </th>
                    <th className="px-4 py-3 text-center font-medium">
                      Business
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {featureRows.map((row) => (
                    <tr key={row.label} className="bg-background">
                      <td className="px-4 py-3 text-muted-foreground">
                        {row.label}
                      </td>
                      <td className="px-4 py-3">
                        <CheckCell value={row.free} />
                      </td>
                      <td className="px-4 py-3">
                        <CheckCell value={row.pro} />
                      </td>
                      <td className="px-4 py-3">
                        <CheckCell value={row.business} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t bg-background">
        <div className="container py-16 sm:py-20">
          <header className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">
              FAQ
            </p>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Common pricing questions.
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              Replace answers with your real policies when ready.
            </p>
          </header>

          <div className="mx-auto mt-10 max-w-3xl space-y-3">
            {[
              {
                q: "Can I use the embeddable SDK without a dashboard plan?",
                a: "Typically you’ll start with a plan, then add an embeddable tier for SDK usage. If you have a special case, contact us and we’ll tailor it.",
              },
              {
                q: "Do you offer yearly billing or discounts?",
                a: "Yes—annual billing and volume discounts are available on Business and embedding tiers.",
              },
              {
                q: "What does “MCP integration” mean here?",
                a: "It means developer-friendly tooling and primitives to automate template generation, sequence creation, and exports using MCP-compatible workflows.",
              },
            ].map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border bg-card p-6 shadow-sm"
              >
                <summary className="cursor-pointer list-none text-sm font-semibold tracking-tight">
                  {item.q}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

