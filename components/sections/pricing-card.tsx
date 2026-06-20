 "use client"

import Link from "next/link"
import type { ReactNode } from "react"
import { Check } from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export type PricingCta = {
  href: string
  label: string
}

export type PricingCardProps = {
  className?: string
  name: string
  price: ReactNode
  period?: string
  description?: ReactNode
  features: string[]
  cta: PricingCta
  highlighted?: boolean
  badge?: string
  footnote?: ReactNode
}

export function PricingCard({
  className,
  name,
  price,
  period = "mo",
  description,
  features,
  cta,
  highlighted = false,
  badge = highlighted ? "Most popular" : undefined,
  footnote,
}: PricingCardProps) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={cn(
        "relative h-full overflow-hidden rounded-2xl border bg-card p-6 text-card-foreground shadow-sm",
        highlighted && "border-primary/40 ring-1 ring-primary/30",
        className
      )}
      initial={reduceMotion ? false : { opacity: 0, y: 12 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={reduceMotion ? undefined : { once: true, amount: 0.25 }}
      transition={
        reduceMotion
          ? undefined
          : { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
      }
      whileHover={reduceMotion ? undefined : { y: -2 }}
    >
      {highlighted ? (
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-transparent to-terracotta/10"
          aria-hidden="true"
        />
      ) : null}

      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="text-sm font-semibold tracking-tight">{name}</p>
          {description ? (
            <p className="mt-2 text-sm text-muted-foreground">{description}</p>
          ) : null}
        </div>
        {badge ? (
          <Badge variant="secondary" className="border-primary/20">
            {badge}
          </Badge>
        ) : null}
      </div>

      <div className="mt-6 flex items-end gap-2">
        <div className="text-4xl font-semibold tracking-tight">{price}</div>
        {period ? (
          <div className="pb-1 text-sm text-muted-foreground">/{period}</div>
        ) : null}
      </div>

      <div className="mt-6">
        <Button
          asChild
          className={cn("w-full", !highlighted && "shadow-none")}
          variant={highlighted ? "default" : "outline"}
        >
          <Link href={cta.href}>{cta.label}</Link>
        </Button>
        {footnote ? (
          <p className="mt-2 text-center text-xs text-muted-foreground">
            {footnote}
          </p>
        ) : null}
      </div>

      <div className="mt-6 space-y-3">
        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          What’s included
        </p>
        <ul className="space-y-2 text-sm">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-2">
              <Check className="mt-0.5 size-4 text-primary" />
              <span className="text-muted-foreground">{f}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

