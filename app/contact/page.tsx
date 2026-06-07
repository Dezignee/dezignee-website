import type { Metadata } from "next"
import { Mail, MessagesSquare, ShieldCheck } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Hero } from "@/components/sections/hero"
import { ContactForm } from "@/components/contact/contact-form"

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact sales or support for Dezignee.",
  alternates: {
    canonical: "/contact",
  },
}

export default function ContactPage() {
  return (
    <>
      <Hero
        badge="Contact"
        title={
          <>
            Tell us what you’re building—and we’ll help you{" "}
            <span className="bg-gradient-to-r from-primary via-cyan-400 to-primary bg-clip-text text-transparent">
              ship faster
            </span>
            .
          </>
        }
        description={
          <>
            Whether you need dashboard workflows, an embeddable SDK, or MCP-based
            automation, we’ll point you to the right plan and integration path.
          </>
        }
        primaryCta={{ href: "#contact-form", label: "Send a message" }}
        secondaryCta={{ href: "/docs", label: "Read docs" }}
      />

      <section className="border-t bg-background" id="contact-form">
        <div className="container py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div className="space-y-6">
              <div className="space-y-3">
                <Badge variant="secondary" className="border-primary/20">
                  Get in touch
                </Badge>
                <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                  Contact sales or support.
                </h2>
                <p className="text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Share your use case and timeline. We’ll respond with a plan,
                  pricing guidance, and integration recommendations.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  {
                    title: "Email",
                    description: "Best for detailed questions and screenshots.",
                    icon: <Mail className="size-5" />,
                  },
                  {
                    title: "Chat",
                    description: "Great for quick product + pricing questions.",
                    icon: <MessagesSquare className="size-5" />,
                  },
                  {
                    title: "Security",
                    description: "Enterprise requirements and reviews.",
                    icon: <ShieldCheck className="size-5" />,
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border bg-card p-5 shadow-sm"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-sm font-semibold tracking-tight">
                          {item.title}
                        </p>
                        <p className="mt-2 text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                      <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border bg-background text-primary">
                        {item.icon}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl border bg-muted/10 p-6">
                <p className="text-sm font-semibold tracking-tight">
                  What to include
                </p>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {[
                    "Are you embedding the editor or using the dashboard?",
                    "Rough volume: templates/month or MAUs for embedding.",
                    "Any security/compliance requirements (SSO, SOC2, etc.)",
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="rounded-2xl border bg-card p-6 shadow-sm">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

