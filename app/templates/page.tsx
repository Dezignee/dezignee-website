import type { Metadata } from "next"
import Link from "next/link"
import { Sparkles, SlidersHorizontal, FileCode2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/reveal"
import { PageHeader } from "@/components/sections/page-header"
import { TemplateGallery } from "@/components/sections/template-gallery"

export const metadata: Metadata = {
  title: "Templates",
  description:
    "Start from a proven email or multi-step sequence — onboarding, lifecycle, newsletters, announcements, and more. Generate it, refine it, export it.",
  alternates: { canonical: "/templates" },
}

const HOW = [
  { icon: Sparkles, t: "Pick a starting point", d: "Choose a single email or a multi-step sequence built for a real goal." },
  { icon: SlidersHorizontal, t: "Make it yours", d: "Edit blocks by hand or ask the AI; swap copy, brand, and imagery." },
  { icon: FileCode2, t: "Export & send", d: "Ship email-safe HTML to your ESP or product whenever you're ready." },
]

export default function TemplatesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Templates"
        title={<>Start from a proven sequence.</>}
        description="Every template is real, editable structure — not a flat image. Generate one in a click, then refine every block to match your brand."
        ctas={[
          { href: "/pricing", label: "Start free" },
          { href: "/features", label: "See the editor", variant: "outline" },
        ]}
      />

      {/* gallery */}
      <section className="border-b border-border">
        <div className="site-rail py-16">
          <TemplateGallery />
        </div>
      </section>

      {/* how it works */}
      <section className="border-b border-border">
        <div className="site-rail py-20">
          <header className="mx-auto max-w-2xl text-center">
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.04em] text-muted-foreground">
              <span className="size-1.5 rounded-full bg-terracotta" aria-hidden="true" />
              From template to send
            </p>
            <h2 className="font-display mt-3.5 text-balance text-[34px] leading-[1.12] text-foreground sm:text-[38px]">
              A starting point, not a straitjacket.
            </h2>
          </header>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {HOW.map((h, i) => {
              const Icon = h.icon
              return (
                <div key={h.t}>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex size-10 items-center justify-center rounded-xl border border-terracotta/30 bg-terracotta-tint text-terracotta">
                      <Icon className="size-5" />
                    </span>
                    <span className="font-mono text-sm text-muted-foreground">0{i + 1}</span>
                  </div>
                  <h3 className="font-display mt-4 text-xl text-foreground">{h.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{h.d}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="site-rail py-20">
          <Reveal>
            <div className="flex flex-col items-center gap-6 rounded-3xl border border-border bg-secondary px-10 py-14 text-center">
              <h2 className="font-display text-balance text-[34px] leading-[1.1] text-foreground">
                Can&apos;t find the right one? Describe it.
              </h2>
              <p className="-mt-2 max-w-md text-pretty text-lg text-muted-foreground">
                Tell the assistant your goal and it will draft a fresh template or
                sequence from scratch — yours to refine.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="/pricing">Start free</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/features">How it works</Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
