 "use client"

import Link from "next/link"
import type { ReactNode } from "react"
import { ArrowRight } from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"

import { cn } from "@/lib/utils"

export type FeatureCardProps = {
  className?: string
  icon?: ReactNode
  title: string
  description: ReactNode
  href?: string
  linkLabel?: string
}

export function FeatureCard({
  className,
  icon,
  title,
  description,
  href,
  linkLabel = "Learn more",
}: FeatureCardProps) {
  const reduceMotion = useReducedMotion()

  const body = (
    <motion.div
      className={cn(
        "group relative h-full overflow-hidden rounded-2xl border bg-card p-6 text-card-foreground shadow-sm transition-colors",
        "hover:bg-muted/20",
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
      <div className="flex items-start gap-4">
        <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border bg-background">
          {icon ? (
            <span className="text-primary">{icon}</span>
          ) : (
            <span className="size-5 rounded bg-muted" aria-hidden="true" />
          )}
        </div>

        <div className="min-w-0">
          <h3 className="text-base font-semibold tracking-tight">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>

          {href ? (
            <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
              <span>{linkLabel}</span>
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </div>
          ) : null}
        </div>
      </div>
    </motion.div>
  )

  return href ? (
    <Link
      href={href}
      className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
    >
      {body}
    </Link>
  ) : (
    body
  )
}

