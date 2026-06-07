import Image from "next/image"
import Link from "next/link"
import type { ReactNode } from "react"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export type HeroCta = {
  href: string
  label: string
}

export type HeroProps = {
  className?: string
  badge?: string
  title?: ReactNode
  description?: ReactNode
  primaryCta?: HeroCta
  secondaryCta?: HeroCta
  imageSrc?: string
  imageAlt?: string
  children?: ReactNode
}

export function Hero({
  className,
  badge = "AI-first email editor",
  title = (
    <>
      Build email sequences with{" "}
      <span className="bg-gradient-to-r from-primary via-cyan-400 to-primary bg-clip-text text-transparent">
        chat-first AI
      </span>
      , then perfect the HTML visually.
    </>
  ),
  description = (
    <>
      Dezignee helps teams ship polished email templates and multi-step sequences
      fast—whether you embed it via SDK or use the dashboard editor.
    </>
  ),
  primaryCta = { href: "/pricing", label: "Get Started" },
  secondaryCta = { href: "/features", label: "View Demo" },
  imageSrc,
  imageAlt = "Dezignee editor preview",
  children,
}: HeroProps) {
  return (
    <section className={cn("relative overflow-hidden", className)}>
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="absolute left-1/2 top-0 h-[28rem] w-[50rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[22rem] w-[22rem] -translate-x-1/3 translate-y-1/3 rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      <div className="container py-20 sm:py-28">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            {badge ? (
              <div className="motion-reduce:animate-none motion-reduce:transition-none animate-in fade-in slide-in-from-bottom-2 duration-700">
                <Badge variant="secondary" className="border-primary/20">
                  {badge}
                </Badge>
              </div>
            ) : null}

            <div className="space-y-4">
              <h1 className="motion-reduce:animate-none motion-reduce:transition-none animate-in fade-in slide-in-from-bottom-3 duration-700 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                {title}
              </h1>
              <p className="motion-reduce:animate-none motion-reduce:transition-none animate-in fade-in slide-in-from-bottom-4 duration-700 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                {description}
              </p>
            </div>

            <div className="motion-reduce:animate-none motion-reduce:transition-none animate-in fade-in slide-in-from-bottom-5 duration-700 flex flex-col gap-3 sm:flex-row sm:items-center">
              {primaryCta ? (
                <Button asChild>
                  <Link href={primaryCta.href}>{primaryCta.label}</Link>
                </Button>
              ) : null}
              {secondaryCta ? (
                <Button asChild variant="outline">
                  <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
                </Button>
              ) : null}
            </div>

            {children ? (
              <div className="motion-reduce:animate-none motion-reduce:transition-none animate-in fade-in duration-700 pt-2">
                {children}
              </div>
            ) : null}
          </div>

          <div className="relative">
            {imageSrc ? (
              <div className="motion-reduce:animate-none motion-reduce:transition-none animate-in fade-in zoom-in-95 duration-700 relative overflow-hidden rounded-2xl border bg-card shadow-sm">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  width={1200}
                  height={800}
                  className="h-auto w-full"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  priority
                />
              </div>
            ) : (
              <div className="motion-reduce:animate-none motion-reduce:transition-none animate-in fade-in zoom-in-95 duration-700 relative overflow-hidden rounded-2xl border bg-card shadow-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-cyan-400/10" />
                <div className="relative p-8">
                  <div className="rounded-xl border bg-background/60 p-6 backdrop-blur">
                    <p className="text-sm font-medium">Product preview</p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Drop in a screenshot or short demo video when ready.
                    </p>
                    <div className="mt-4 grid grid-cols-3 gap-3">
                      <div className="h-20 rounded-lg bg-muted/60" />
                      <div className="h-20 rounded-lg bg-muted/60" />
                      <div className="h-20 rounded-lg bg-muted/60" />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

