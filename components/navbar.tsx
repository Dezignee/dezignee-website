"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const navItems = [
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/templates", label: "Templates" },
  { href: "/docs", label: "Docs" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const

/** Typographic Dezignee lockup: near-black monogram + serif wordmark with a
 *  terracotta dot on the i (the DS brand mark — no image asset needed). */
export function BrandLockup({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Dezignee"
      className={cn("flex items-center gap-2.5", className)}
    >
      <span className="flex size-7 items-center justify-center rounded-lg bg-primary font-serif text-base font-semibold text-primary-foreground">
        D
      </span>
      <span className="font-serif text-[19px] font-semibold tracking-tight text-foreground">
        Dez<span className="text-terracotta">i</span>gnee
      </span>
    </Link>
  )
}

export function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = React.useState(false)
  const reduceMotion = useReducedMotion()

  React.useEffect(() => {
    setOpen(false)
  }, [pathname])

  React.useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [open])

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      {/* Narrowed bar: content sits in an 80% / max-1040px centered rail. */}
      <div className="mx-auto flex h-16 w-4/5 max-w-[1040px] items-center justify-between gap-6">
        <BrandLockup />

        <nav className="hidden items-center gap-0.5 md:flex" aria-label="Primary">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href || pathname?.startsWith(`${item.href}/`)
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:bg-accent hover:text-foreground"
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="hidden items-center gap-1.5 md:flex">
          <Link
            href="/contact"
            className="px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Sign in
          </Link>
          <Button asChild size="sm">
            <Link href="/pricing">Start free</Link>
          </Button>
        </div>

        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </Button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav"
            className="border-b border-border bg-background md:hidden"
            initial={reduceMotion ? false : { opacity: 0, height: 0 }}
            animate={reduceMotion ? undefined : { opacity: 1, height: "auto" }}
            exit={reduceMotion ? undefined : { opacity: 0, height: 0 }}
            transition={reduceMotion ? undefined : { duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
          >
            <nav className="mx-auto flex w-4/5 max-w-[1040px] flex-col gap-1 py-3" aria-label="Mobile">
              {navItems.map((item) => {
                const isActive =
                  pathname === item.href || pathname?.startsWith(`${item.href}/`)
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                      isActive
                        ? "bg-accent text-foreground"
                        : "text-muted-foreground hover:bg-accent hover:text-foreground"
                    )}
                  >
                    {item.label}
                  </Link>
                )
              })}
              <div className="pt-2">
                <Button asChild className="w-full">
                  <Link href="/pricing">Start free</Link>
                </Button>
              </div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
