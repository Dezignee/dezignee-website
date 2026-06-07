import Image from "next/image"
import Link from "next/link"
import { Github, Twitter } from "lucide-react"

import { cn } from "@/lib/utils"

const columns = [
  {
    title: "Product",
    links: [
      { href: "/features", label: "Features" },
      { href: "/pricing", label: "Pricing" },
      { href: "/docs", label: "Docs" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "/blog", label: "Blog" },
      { href: "/docs", label: "Quick start" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
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
    <footer className={cn("border-t bg-background", className)}>
      <div className="container py-12">
        <div className="grid gap-10 md:grid-cols-[1.2fr_2fr]">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/dezignee_logo.svg"
                alt="Dezignee"
                width={28}
                height={28}
                sizes="28px"
              />
              <span className="text-sm font-semibold tracking-tight">
                Dezignee
              </span>
            </Link>
            <p className="max-w-sm text-sm text-muted-foreground">
              AI-first email creation for teams and developers. Generate sequences
              instantly, then fine-tune with a visual editor and ship HTML
              anywhere.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground"
                aria-label="Twitter"
              >
                <Twitter className="size-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground"
                aria-label="GitHub"
              >
                <Github className="size-5" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {columns.map((col) => (
              <div key={col.title} className="space-y-3">
                <p className="text-sm font-medium">{col.title}</p>
                <ul className="space-y-2 text-sm">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="text-muted-foreground hover:text-foreground"
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

        <div className="mt-10 flex flex-col gap-3 border-t pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Dezignee. All rights reserved.
          </p>
          <p>
            Built for embeddable SDKs and dashboard workflows.
          </p>
        </div>
      </div>
    </footer>
  )
}

