import type { Metadata } from "next"
import Link from "next/link"
import {
  BotMessageSquare,
  Braces,
  FileCode2,
  Layers,
  LayoutPanelTop,
  Sparkles,
  Workflow,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CodeBlock } from "@/components/code-block"
import { Reveal } from "@/components/reveal"
import { FeatureCard } from "@/components/sections/feature-card"
import { Hero } from "@/components/sections/hero"
import { TestimonialCard } from "@/components/sections/testimonial-card"

export const metadata: Metadata = {
  title: "AI-first email editor",
  description:
    "Generate single templates or full sequences with chat-first AI, then refine visually and export production-ready HTML—or embed the same workflow via SDK.",
  alternates: {
    canonical: "/",
  },
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string
  title: string
  description?: string
}) {
  return (
    <header className="mx-auto max-w-2xl text-center">
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      ) : null}
    </header>
  )
}

export default function Home() {
  return (
    <>
      <Hero
        badge="AI-first email editor + embeddable SDK"
        title={
          <>
            Go from prompt to{" "}
            <span className="bg-gradient-to-r from-primary via-cyan-400 to-primary bg-clip-text text-transparent">
              production-ready emails
            </span>{" "}
            in minutes.
          </>
        }
        description={
          <>
            Generate single templates or full sequences with chat-first AI, then
            polish every pixel in a visual editor. Ship as HTML, or embed Dezignee
            into your product via SDK.
          </>
        }
        primaryCta={{ href: "/pricing", label: "Get Started" }}
        secondaryCta={{ href: "/features", label: "View Demo" }}
      >
        <div className="space-y-3">
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Built for modern teams
          </p>
          <div className="flex flex-wrap gap-2">
            {["SaaS", "Agencies", "Platforms", "Plugins"].map((label) => (
              <span
                key={label}
                className="rounded-full border bg-background/60 px-3 py-1 text-xs text-muted-foreground"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </Hero>

      {/* Features overview */}
      <section className="border-t bg-background">
        <div className="container py-16 sm:py-20">
          <SectionHeading
            eyebrow="Features"
            title="Everything you need to create, refine, and ship email."
            description="Draft with AI, tweak visually, generate sequences, and export clean HTML. Developers can embed the full editor experience without a heavy integration lift."
          />

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={<Sparkles className="size-5" />}
              title="AI chat that writes like a teammate"
              description="Describe your campaign goals and brand voice, and get ready-to-send copy and layouts."
              href="/features"
              linkLabel="Explore AI"
            />
            <FeatureCard
              icon={<LayoutPanelTop className="size-5" />}
              title="Visual editor for pixel-perfect polish"
              description="Fine-tune spacing, typography, and structure without wrestling raw HTML."
              href="/features"
              linkLabel="See the editor"
            />
            <FeatureCard
              icon={<Workflow className="size-5" />}
              title="Multi-step email sequences"
              description="Create onboarding, lifecycle, and marketing flows with consistent voice and design."
              href="/features"
              linkLabel="Build sequences"
            />
            <FeatureCard
              icon={<Braces className="size-5" />}
              title="MCP integration for developers"
              description="Connect tools and automate workflows using MCP-first primitives designed for fast adoption."
              href="/features"
              linkLabel="Learn MCP"
            />
            <FeatureCard
              icon={<FileCode2 className="size-5" />}
              title="Export HTML that works everywhere"
              description="Ship templates to your ESP, product, or CMS with predictable markup and styling."
              href="/features"
              linkLabel="Export options"
            />
            <FeatureCard
              icon={<Layers className="size-5" />}
              title="Embeddable in your product"
              description="Give your users a premium email builder experience via a lightweight SDK."
              href="/docs"
              linkLabel="Read the SDK docs"
            />
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="border-t bg-muted/10">
        <div className="container py-16 sm:py-20">
          <SectionHeading
            eyebrow="Use cases"
            title="Two ways to use Dezignee—one consistent workflow."
            description="Whether you’re embedding the editor in your app or using the dashboard directly, the core experience stays the same: AI + visual refinement + export."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="relative overflow-hidden rounded-2xl border bg-card p-6 shadow-sm">
                <div
                  className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-transparent to-cyan-400/10"
                  aria-hidden="true"
                />

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <Badge variant="secondary" className="border-primary/20">
                      Embeddable / Plugin
                    </Badge>
                    <h3 className="mt-4 text-xl font-semibold tracking-tight">
                      Drop Dezignee into your product via SDK.
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      Ideal for SaaS products and platforms that want best-in-class
                      email creation without building an editor from scratch.
                    </p>
                  </div>
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border bg-background">
                    <Braces className="size-5 text-primary" />
                  </div>
                </div>

                <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="mt-1 size-1.5 rounded-full bg-primary" />
                    Embed the editor UI and control exports programmatically.
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 size-1.5 rounded-full bg-primary" />
                    MCP-friendly integrations for automation and tooling.
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 size-1.5 rounded-full bg-primary" />
                    Designed for a smooth developer experience.
                  </li>
                </ul>

                <div className="mt-6">
                  <CodeBlock
                    title="SDK quick start"
                    snippets={[
                      {
                        label: "JavaScript",
                        language: "js",
                        code: `import { createDezigneeEditor } from "@dezignee/sdk"

const editor = createDezigneeEditor({
  mount: document.getElementById("editor"),
  mcp: { enabled: true },
})

const html = await editor.exportHtml()`,
                      },
                      {
                        label: "MCP",
                        language: "json",
                        code: `{
  "tools": ["email.generate", "email.sequence", "email.export"],
  "context": { "brandVoice": "friendly, concise" }
}`,
                      },
                    ]}
                  />
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Button asChild>
                    <Link href="/docs">Read docs</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="/contact">Talk to us</Link>
                  </Button>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="relative overflow-hidden rounded-2xl border bg-card p-6 shadow-sm">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <Badge variant="secondary" className="border-primary/20">
                      Dashboard
                    </Badge>
                    <h3 className="mt-4 text-xl font-semibold tracking-tight">
                      Create campaigns in the dashboard.
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      Perfect for teams who want AI-driven drafting plus full
                      control over layout, branding, and export.
                    </p>
                  </div>
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border bg-background">
                    <BotMessageSquare className="size-5 text-primary" />
                  </div>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl border bg-background p-4">
                    <p className="text-sm font-semibold">AI-assisted drafting</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Generate copy, structure, and variants while keeping voice
                      consistent across steps.
                    </p>
                  </div>
                  <div className="rounded-xl border bg-background p-4">
                    <p className="text-sm font-semibold">Visual refinement</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Adjust layout and styles visually, then export clean HTML.
                    </p>
                  </div>
                  <div className="rounded-xl border bg-background p-4">
                    <p className="text-sm font-semibold">Sequences & campaigns</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Build onboarding and lifecycle flows with reusable blocks.
                    </p>
                  </div>
                  <div className="rounded-xl border bg-background p-4">
                    <p className="text-sm font-semibold">Deliver anywhere</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Export HTML and bring it to your ESP, CMS, or product.
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Button asChild>
                    <Link href="/pricing">Choose a plan</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="/features">See features</Link>
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="border-t bg-background">
        <div className="container py-16 sm:py-20">
          <SectionHeading
            eyebrow="Social proof"
            title="Teams use Dezignee to ship better email, faster."
            description="Replace the quotes below with real testimonials as you collect them. The layout is ready for logos, avatars, and company names."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <TestimonialCard
              quote={
                <>
                  We went from “blank canvas” to a full onboarding sequence in a
                  single afternoon. The visual editor made final tweaks painless.
                </>
              }
              name="Alex Chen"
              role="Lifecycle Marketing"
              company="SaaS team"
            />
            <TestimonialCard
              quote={
                <>
                  Embedding the editor saved us months. Our users can generate,
                  edit, and export HTML without leaving our app.
                </>
              }
              name="Priya Nair"
              role="Product Engineer"
              company="Platform company"
            />
            <TestimonialCard
              quote={
                <>
                  The AI-first workflow gets the structure right fast—and the
                  output stays clean and consistent across clients.
                </>
              }
              name="Jordan Lee"
              role="Creative Director"
              company="Agency"
            />
          </div>

          <Reveal>
            <div className="mt-10 grid gap-4 rounded-2xl border bg-muted/20 p-6 sm:grid-cols-3">
            {[
              {
                label: "Designed for teams",
                value: "Collaboration-ready",
              },
              {
                label: "Built for developers",
                value: "SDK + MCP friendly",
              },
              {
                label: "Ready to ship",
                value: "Exportable HTML",
              },
            ].map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <p className="mt-2 text-lg font-semibold tracking-tight">
                  {stat.value}
                </p>
              </div>
            ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t bg-background">
        <div className="container py-16 sm:py-20">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border bg-card p-8 shadow-sm sm:p-12">
              <div
                className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-primary/15 via-transparent to-cyan-400/15"
                aria-hidden="true"
              />

              <div className="mx-auto max-w-2xl text-center">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                  Ready to build?
                </p>
                <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                  Start shipping email your users love.
                </h2>
                <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Generate content with AI, refine with a visual editor, and export
                  HTML anywhere—then embed the same workflow into your product.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
                  <Button asChild size="lg">
                    <Link href="/pricing">Get Started</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link href="/docs">SDK Quick Start</Link>
                  </Button>
                </div>

                <div className="mt-8 flex flex-col items-center justify-center gap-2 text-sm text-muted-foreground sm:flex-row sm:gap-4">
                  {["AI chat + templates", "Sequences + campaigns", "HTML export"].map(
                    (item) => (
                      <span key={item} className="inline-flex items-center gap-2">
                        <span className="size-1.5 rounded-full bg-primary" />
                        {item}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
