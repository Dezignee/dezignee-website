"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const navItems = [
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/docs", label: "Docs" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const

export function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const reduceMotion = useReducedMotion()

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

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

  React.useEffect(() => {
    if (!open) return
    const body = document.body
    const prevOverflow = body.style.overflow
    const prevPaddingRight = body.style.paddingRight
    const scrollBarWidth =
      window.innerWidth - document.documentElement.clientWidth

    body.style.overflow = "hidden"
    if (scrollBarWidth > 0) body.style.paddingRight = `${scrollBarWidth}px`

    return () => {
      body.style.overflow = prevOverflow
      body.style.paddingRight = prevPaddingRight
    }
  }, [open])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors",
        scrolled
          ? "bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60"
          : "bg-background"
      )}
    >
      <div className="container flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2" aria-label="Dezignee">
          <Image
            src="/dezignee_logo.svg"
            alt="Dezignee"
            width={28}
            height={28}
            sizes="28px"
            priority
          />
          <span className="text-sm font-semibold tracking-tight">Dezignee</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              pathname?.startsWith(`${item.href}/`)
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm transition-colors",
                  isActive
                    ? "bg-accent text-foreground"
                    : "text-muted-foreground hover:bg-accent/60 hover:text-foreground"
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button asChild>
            <Link href="/pricing">Get Started</Link>
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
          <>
            <motion.div
              aria-hidden="true"
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-[1px] md:hidden"
              onClick={() => setOpen(false)}
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={reduceMotion ? undefined : { opacity: 1 }}
              exit={reduceMotion ? undefined : { opacity: 0 }}
              transition={reduceMotion ? undefined : { duration: 0.15 }}
            />
            <motion.div
              id="mobile-nav"
              className="fixed inset-x-0 top-16 z-50 border-b bg-background md:hidden"
              initial={reduceMotion ? false : { opacity: 0, y: -8 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
              transition={
                reduceMotion
                  ? undefined
                  : { duration: 0.18, ease: [0.22, 1, 0.36, 1] }
              }
            >
              <nav
                className="container flex max-h-[calc(100vh-4rem)] flex-col gap-1 overflow-auto py-3"
                aria-label="Mobile"
              >
                {navItems.map((item) => {
                  const isActive =
                    pathname === item.href ||
                    pathname?.startsWith(`${item.href}/`)
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "rounded-md px-3 py-2 text-sm transition-colors",
                        isActive
                          ? "bg-accent text-foreground"
                          : "text-muted-foreground hover:bg-accent/60 hover:text-foreground"
                      )}
                    >
                      {item.label}
                    </Link>
                  )
                })}
                <div className="pt-2">
                  <Button asChild className="w-full">
                    <Link href="/pricing">Get Started</Link>
                  </Button>
                </div>
              </nav>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  )
}

