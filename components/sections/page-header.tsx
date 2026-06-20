import Link from "next/link"
import type { ReactNode } from "react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export type HeaderCta = { href: string; label: string; variant?: "default" | "outline" }
export type HeaderAnchor = { href: string; label: string }

/**
 * Shared marketing page header (Product, Developers, Pricing, …).
 * Centered eyebrow → serif display title → lede → CTAs → optional anchor chips.
 * Server component — no client JS. Reused across Phases 2–4.
 */
export function PageHeader({
  className,
  eyebrow,
  title,
  description,
  ctas,
  anchors,
}: {
  className?: string
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  ctas?: HeaderCta[]
  anchors?: HeaderAnchor[]
}) {
  return (
    <section className={cn("border-b border-border", className)}>
      <div className="mx-auto w-4/5 max-w-[1040px] py-20 text-center sm:py-24">
        {eyebrow ? (
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.04em] text-muted-foreground">
            <span className="size-1.5 rounded-full bg-terracotta" aria-hidden="true" />
            {eyebrow}
          </p>
        ) : null}

        <h1 className="font-display mx-auto mt-4 max-w-3xl text-balance text-[44px] leading-[1.06] text-foreground sm:text-5xl">
          {title}
        </h1>

        {description ? (
          <p className="mx-auto mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            {description}
          </p>
        ) : null}

        {ctas && ctas.length > 0 ? (
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            {ctas.map((cta) => (
              <Button key={cta.href} asChild size="lg" variant={cta.variant ?? "default"}>
                <Link href={cta.href}>{cta.label}</Link>
              </Button>
            ))}
          </div>
        ) : null}

        {anchors && anchors.length > 0 ? (
          <nav className="mt-9 flex flex-wrap justify-center gap-2" aria-label="On this page">
            {anchors.map((a) => (
              <a
                key={a.href}
                href={a.href}
                className="rounded-full border border-border bg-card px-3.5 py-1.5 text-[13px] font-medium text-muted-foreground transition-colors hover:border-input hover:text-foreground"
              >
                {a.label}
              </a>
            ))}
          </nav>
        ) : null}
      </div>
    </section>
  )
}
