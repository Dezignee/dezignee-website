 "use client"

import Image from "next/image"
import type { ReactNode } from "react"
import { Quote } from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"

import { cn } from "@/lib/utils"

export type TestimonialCardProps = {
  className?: string
  quote: ReactNode
  name: string
  role?: string
  company?: string
  avatarSrc?: string
  avatarAlt?: string
}

function initialsFromName(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean)
  const first = parts[0]?.[0] ?? ""
  const last = parts.length > 1 ? parts[parts.length - 1]?.[0] ?? "" : ""
  return (first + last).toUpperCase()
}

export function TestimonialCard({
  className,
  quote,
  name,
  role,
  company,
  avatarSrc,
  avatarAlt = name,
}: TestimonialCardProps) {
  const reduceMotion = useReducedMotion()
  const initials = initialsFromName(name)
  const meta = [role, company].filter(Boolean).join(" · ")

  return (
    <motion.figure
      className={cn(
        "relative h-full overflow-hidden rounded-2xl border bg-card p-6 text-card-foreground shadow-sm",
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
      <Quote className="absolute right-4 top-4 size-5 text-muted-foreground/40" />

      <blockquote className="text-pretty text-sm leading-relaxed text-muted-foreground">
        {quote}
      </blockquote>

      <figcaption className="mt-6 flex items-center gap-3">
        {avatarSrc ? (
          <Image
            src={avatarSrc}
            alt={avatarAlt}
            width={40}
            height={40}
            className="size-10 rounded-full border object-cover"
          />
        ) : (
          <div
            className="flex size-10 items-center justify-center rounded-full border bg-muted/40 text-xs font-semibold text-foreground"
            aria-hidden="true"
          >
            {initials}
          </div>
        )}

        <div className="min-w-0">
          <p className="truncate text-sm font-semibold">{name}</p>
          {meta ? (
            <p className="truncate text-sm text-muted-foreground">{meta}</p>
          ) : null}
        </div>
      </figcaption>
    </motion.figure>
  )
}

