import Link from "next/link"
import type { ReactNode } from "react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { McpDemo } from "@/components/sections/mcp-demo"

export type HeroCta = { href: string; label: string }

export type HeroProps = {
  className?: string
  eyebrow?: string
  /** @deprecated renamed to eyebrow — still accepted so Phase 2–4 pages compile unchanged */
  badge?: string
  title?: ReactNode
  description?: ReactNode
  primaryCta?: HeroCta
  secondaryCta?: ReactNode | HeroCta
  /** @deprecated accepted for Phase 2–4 page compat; rendered below CTAs */
  children?: ReactNode
}

function isCta(v: ReactNode | HeroCta): v is HeroCta {
  return !!v && typeof v === "object" && "href" in (v as HeroCta)
}

export function Hero({
  className,
  eyebrow,
  badge,
  title = (
    <>
      Your AI builds the email.
      <br />
      <span className="text-muted-foreground">You make it yours.</span>
    </>
  ),
  description = (
    <>
      Chat to draft a campaign, refine every block by hand, and export email-safe
      HTML — all over the same MCP your agents already speak.
    </>
  ),
  primaryCta = { href: "/pricing", label: "Start free" },
  secondaryCta = { href: "/features", label: "See how it works" },
  children,
}: HeroProps) {
  const label = eyebrow ?? badge ?? "MCP-native email editor"

  return (
    <section className={cn("relative overflow-hidden", className)}>
      <div className="site-rail pt-[76px] text-center">
        {label ? (
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.04em] text-muted-foreground motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-2 motion-safe:duration-700">
            <span className="size-1.5 rounded-full bg-terracotta" aria-hidden="true" />
            {label}
          </p>
        ) : null}

        <h1 className="font-display mt-5 text-balance text-5xl leading-[1.04] text-foreground motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-3 motion-safe:duration-700 sm:text-6xl">
          {title}
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-4 motion-safe:duration-700">
          {description}
        </p>

        <div className="mt-7 flex flex-col justify-center gap-3 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-5 motion-safe:duration-700 sm:flex-row">
          {primaryCta ? (
            <Button asChild size="lg">
              <Link href={primaryCta.href}>{primaryCta.label}</Link>
            </Button>
          ) : null}
          {isCta(secondaryCta) ? (
            <Button asChild size="lg" variant="outline">
              <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
            </Button>
          ) : (
            secondaryCta
          )}
        </div>
      </div>

      <div className="mx-auto mt-14 w-4/5 max-w-[980px] pb-24 motion-safe:animate-in motion-safe:fade-in motion-safe:duration-1000">
        <McpDemo />
      </div>
      {children ? <div className="site-rail">{children}</div> : null}
    </section>
  )
}
