import Link from "next/link"
import type { Metadata } from "next"
import { Braces, HeartHandshake, Sparkles, Target } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Hero } from "@/components/sections/hero"

export const metadata: Metadata = {
  title: "About",
  description:
    "Dezignee is an AI-first email editor for dashboard workflows and embeddable SDK integrations.",
  alternates: {
    canonical: "/about",
  },
}

export default function AboutPage() {
  return (
    <>
      <Hero
        badge="About"
        title={
          <>
            Dezignee is building an{" "}
            <span className="bg-gradient-to-r from-primary via-cyan-400 to-primary bg-clip-text text-transparent">
              AI-first
            </span>{" "}
            email editor for teams and developers.
          </>
        }
        description={
          <>
            Our goal is simple: help you go from intent to production-ready email
            quickly—without sacrificing visual control or developer ergonomics.
          </>
        }
        primaryCta={{ href: "/pricing", label: "See pricing" }}
        secondaryCta={{ href: "/contact", label: "Talk to us" }}
      />

      <section className="border-t bg-background">
        <div className="container py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div className="space-y-6">
              <Badge variant="secondary" className="border-primary/20">
                Our story
              </Badge>
              <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                Email creation shouldn’t be a trade-off between speed and quality.
              </h2>
              <p className="text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                Traditional email builders are either powerful but slow, or fast
                but rigid. Dezignee blends chat-first generation with a visual
                editor so you can iterate quickly—and ship HTML you trust.
              </p>
              <p className="text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                We also care deeply about developer experience. If you’re a
                platform or plugin team, you should be able to embed a premium
                email editor without building and maintaining it for years.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button asChild>
                  <Link href="/docs">Read the docs</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/features">Explore features</Link>
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl border bg-card p-6 shadow-sm">
                <p className="text-sm font-semibold tracking-tight">Mission</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Make email creation feel like a conversation—then give you
                  complete visual control to polish and export reliably.
                </p>
              </div>
              <div className="rounded-2xl border bg-card p-6 shadow-sm">
                <p className="text-sm font-semibold tracking-tight">Vision</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  A single, composable email creation workflow that works for
                  dashboards, embedded products, and automation-first pipelines.
                </p>
              </div>
              <div className="rounded-2xl border bg-card p-6 shadow-sm">
                <p className="text-sm font-semibold tracking-tight">Principles</p>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {[
                    "AI-first, but always editable.",
                    "Design consistency across templates and sequences.",
                    "Developer-friendly embedding and exports.",
                  ].map((p) => (
                    <li key={p} className="flex gap-2">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t bg-muted/10">
        <div className="container py-16 sm:py-20">
          <header className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">
              Values
            </p>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              What we optimize for.
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              These are the product decisions we come back to when building new
              features.
            </p>
          </header>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Speed",
                description: "Draft and iterate quickly with chat-first AI.",
                icon: <Sparkles className="size-5" />,
              },
              {
                title: "Control",
                description: "Visual editing for pixel-perfect polish.",
                icon: <Target className="size-5" />,
              },
              {
                title: "DX",
                description: "Embeddable SDKs and clean exports.",
                icon: <Braces className="size-5" />,
              },
              {
                title: "Trust",
                description: "Reliable output and supportive collaboration.",
                icon: <HeartHandshake className="size-5" />,
              },
            ].map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border bg-card p-6 shadow-sm"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold tracking-tight">
                      {value.title}
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border bg-background text-primary">
                    {value.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border bg-card p-6 shadow-sm">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold tracking-tight">
                  Want to partner or embed Dezignee?
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  We’d love to learn about your product and workflow.
                </p>
              </div>
              <Button asChild variant="outline">
                <Link href="/contact">Contact us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

