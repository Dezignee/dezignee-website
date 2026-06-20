import Link from "next/link"
import { Github, Twitter } from "lucide-react"

import { cn } from "@/lib/utils"
import { BrandLockup } from "@/components/navbar"

const columns = [
  {
    title: "Product",
    links: [
      { href: "/features", label: "Features" },
      { href: "/pricing", label: "Pricing" },
      { href: "/templates", label: "Templates" },
      { href: "/changelog", label: "Changelog" },
    ],
  },
  {
    title: "Developers",
    links: [
      { href: "/docs", label: "Docs" },
      { href: "/docs/mcp", label: "MCP servers" },
      { href: "/docs/sdk", label: "SDK" },
      { href: "/docs/api", label: "API reference" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/blog", label: "Blog" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy", label: "Privacy" },
      { href: "/terms", label: "Terms" },
    ],
  },
] as const

export function Footer({ className }: { className?: string }) {
  return (
    <footer className={cn("border-t border-border bg-background", className)}>
      <div className="mx-auto w-4/5 max-w-[1040px] py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_2.6fr]">
          <div className="max-w-xs space-y-4">
            <BrandLockup />
            <p className="text-sm leading-relaxed text-muted-foreground">
              The MCP-native email editor. Draft with AI, refine by hand, and
              export email-safe HTML — or embed the whole workflow in your product.
            </p>
            <div className="flex items-center gap-2.5 pt-1">
              <a
                href="#"
                aria-label="X"
                className="flex size-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-input hover:text-foreground"
              >
                <Twitter className="size-4" />
              </a>
              <a
                href="#"
                aria-label="GitHub"
                className="flex size-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-input hover:text-foreground"
              >
                <Github className="size-4" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {columns.map((col) => (
              <div key={col.title} className="space-y-3.5">
                <p className="text-sm font-semibold text-foreground">{col.title}</p>
                <ul className="space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Dezignee. All rights reserved.</p>
          <p>Made for real inboxes.</p>
        </div>
      </div>
    </footer>
  )
}
