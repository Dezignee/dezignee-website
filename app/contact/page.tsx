import type { Metadata } from "next"
import Link from "next/link"
import { CalendarClock, LifeBuoy, Mail, ShieldCheck } from "lucide-react"

import { PageHeader } from "@/components/sections/page-header"
import { ContactForm } from "@/components/contact/contact-form"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell us what you're building — dashboard, embedded SDK, or MCP automation — and we'll point you to the right plan and integration path.",
  alternates: { canonical: "/contact" },
}

const CHANNELS = [
  { icon: Mail, t: "Email us", d: "hello@dezignee.com", href: "mailto:hello@dezignee.com", sub: "Best for detailed questions." },
  { icon: CalendarClock, t: "Book a demo", d: "See it live", href: "/contact", sub: "A 20-minute walkthrough." },
  { icon: LifeBuoy, t: "Support", d: "Read the docs", href: "/docs", sub: "Guides for SDK & MCP." },
]

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={<>Let&apos;s figure out the fastest path.</>}
        description="Whether you're drafting in the dashboard, embedding the editor, or wiring up an agent over MCP, we'll help you get there."
      />

      <section className="border-b border-border">
        <div className="site-rail grid items-start gap-12 py-20 lg:grid-cols-2">
          {/* left: channels + what to include */}
          <div>
            <h2 className="font-display text-[28px] leading-[1.14] text-foreground">Talk to the team</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
              Share your use case and timeline. We&apos;ll reply with a plan, pricing
              guidance, and the integration track that fits.
            </p>

            <div className="mt-8 flex flex-col gap-3">
              {CHANNELS.map((c) => {
                const Icon = c.icon
                return (
                  <Link
                    key={c.t}
                    href={c.href}
                    className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-input"
                  >
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-border bg-secondary text-foreground/70">
                      <Icon className="size-5" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[15px] font-semibold text-foreground">{c.t}</p>
                      <p className="text-sm text-muted-foreground">{c.sub}</p>
                    </div>
                    <span className="ml-auto text-sm font-medium text-terracotta opacity-0 transition-opacity group-hover:opacity-100">
                      {c.d}
                    </span>
                  </Link>
                )
              })}
            </div>

            <div className="mt-8 rounded-xl border border-border bg-secondary/40 p-5">
              <div className="flex items-center gap-2">
                <ShieldCheck className="size-[18px] text-foreground/70" />
                <p className="text-sm font-semibold text-foreground">Helpful to include</p>
              </div>
              <ul className="mt-3 space-y-2">
                {[
                  "Dashboard, embedded editor, or MCP automation?",
                  "Rough volume — emails/month, or MAUs if embedding.",
                  "Any security or compliance requirements.",
                ].map((i) => (
                  <li key={i} className="flex gap-2.5 text-sm text-muted-foreground">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-terracotta" aria-hidden="true" />
                    <span className="leading-snug">{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* right: form */}
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-foreground">Send a message</h2>
            <p className="mt-1 text-sm text-muted-foreground">We usually reply within a day.</p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
