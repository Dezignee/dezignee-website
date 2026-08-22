import type { Metadata } from "next"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { PageHeader } from "@/components/sections/page-header"
import { Team } from "@/components/sections/team"

export const metadata: Metadata = {
  title: "About",
  description:
    "Dezignee is an AI-first email editor for teams and developers — built to go from intent to production-ready email without sacrificing visual control or developer ergonomics.",
  alternates: { canonical: "/about" },
}

const PRINCIPLES = [
  {
    n: "01",
    title: "AI-first, always editable.",
    body: "The AI proposes; you decide. Every block is editable by hand, and nothing is a one-way door.",
  },
  {
    n: "02",
    title: "Output you can trust.",
    body: "Email-safe export means table-based layouts, inline styles, and Outlook fallbacks — not just a pretty preview.",
  },
  {
    n: "03",
    title: "Open by design.",
    body: "One command pipeline powers the UI, the API, and MCP — so anything you can do by hand, an agent can do too.",
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title={
          <>
            Built for teams that{" "}
            <span className="text-terracotta">ship email</span>
            {" "}that actually lands.
          </>
        }
        description="We're building the email editor we always wished existed — AI-first, developer-friendly, and honest about what it outputs."
      />

      {/* Story — no border-t; PageHeader's border-b already draws that divider */}
      <section>
        <div className="site-rail py-24">
          <div className="mx-auto max-w-[38rem]">
            <h2 className="font-display text-[32px] leading-[1.14] text-foreground">
              Email creation shouldn't be a trade-off.
            </h2>
            <p className="mt-5 text-pretty text-[17px] leading-relaxed text-foreground/80">
              Traditional email builders are either powerful but slow, or fast but rigid. Dezignee blends
              chat-first generation with a block editor so you can iterate quickly — and ship HTML you can
              actually rely on.
            </p>
            <p className="mt-4 text-pretty text-[17px] leading-relaxed text-foreground/80">
              We also care deeply about developer experience. If you're a platform team, you should be able
              to embed a premium email editor without building and maintaining one for years.
            </p>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="border-t border-border">
        <div className="site-rail py-24">
          <header className="mx-auto max-w-2xl text-center">
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.04em] text-muted-foreground">
              <span className="size-1.5 rounded-full bg-terracotta" aria-hidden="true" />
              Principles
            </p>
            <h2 className="font-display mt-3.5 text-balance text-[38px] leading-[1.12] text-foreground">
              What we optimize for.
            </h2>
          </header>

          <div className="mx-auto mt-14 flex max-w-[48rem] flex-col gap-8">
            {PRINCIPLES.map((p) => (
              <div key={p.n} className="flex gap-6">
                <span className="mt-1 shrink-0 font-mono text-sm font-medium text-terracotta">
                  {p.n}
                </span>
                <div>
                  <h3 className="font-display text-xl text-foreground">{p.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Team />

      {/* Close */}
      <section className="border-t border-border">
        <div className="site-rail py-24 text-center">
          <h2 className="font-display text-balance text-[38px] leading-[1.12] text-foreground">
            Build your first email in minutes.
          </h2>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/pricing">Start free</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">Talk to us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
