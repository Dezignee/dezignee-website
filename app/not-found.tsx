import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
}

const LINKS = [
  { href: "/features", label: "Product" },
  { href: "/pricing", label: "Pricing" },
  { href: "/docs", label: "Developers" },
  { href: "/templates", label: "Templates" },
]

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center px-5 py-24">
      <div className="mx-auto max-w-md text-center">
        {/* envelope-with-404 mark, on-brand */}
        <div className="mx-auto flex size-16 items-center justify-center rounded-2xl border border-border bg-card text-foreground/70 shadow-[0_4px_12px_rgba(40,34,25,0.07)]">
          <Mail className="size-7" />
        </div>

        <p className="mt-8 font-mono text-sm font-medium text-terracotta">404</p>
        <h1 className="font-display mt-2 text-balance text-4xl leading-[1.1] text-foreground">
          This email never arrived.
        </h1>
        <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s get
          you back on track.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/">
              <ArrowLeft className="mr-2 size-4" />
              Back home
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/contact">Contact us</Link>
          </Button>
        </div>

        <nav className="mt-10 flex flex-wrap justify-center gap-2" aria-label="Popular pages">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-full border border-border bg-card px-3.5 py-1.5 text-[13px] font-medium text-muted-foreground transition-colors hover:border-input hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </section>
  )
}
