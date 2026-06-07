import Link from "next/link"
import type { Metadata } from "next"
import type { ReactNode } from "react"
import {
  BotMessageSquare,
  Braces,
  LayoutPanelTop,
  Sparkles,
  Workflow,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CodeBlock } from "@/components/code-block"
import { FeatureCard } from "@/components/sections/feature-card"
import { Hero } from "@/components/sections/hero"

export const metadata: Metadata = {
  title: "Features",
  description:
    "Deep dive into Dezignee’s AI chat, visual editor, sequences, and MCP integration for embeddable and dashboard workflows.",
  alternates: {
    canonical: "/features",
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

function FeatureSection({
  id,
  icon,
  title,
  description,
  bullets,
  codeTitle,
  codeSnippets,
  ctas,
  inverted = false,
}: {
  id: string
  icon: ReactNode
  title: string
  description: string
  bullets: string[]
  codeTitle: string
  codeSnippets: { label: string; language: string; code: string }[]
  ctas: { href: string; label: string; variant?: "default" | "outline" }[]
  inverted?: boolean
}) {
  return (
    <section id={id} className="border-t bg-background scroll-mt-24">
      <div className="container py-16 sm:py-20">
        <div
          className={[
            "grid gap-10 lg:grid-cols-2 lg:items-start",
            inverted ? "lg:[&>*:first-child]:order-2" : "",
          ].join(" ")}
        >
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="flex size-11 items-center justify-center rounded-xl border bg-background">
                <span className="text-primary">{icon}</span>
              </div>
              <Badge variant="secondary" className="border-primary/20">
                Feature deep dive
              </Badge>
            </div>

            <div className="space-y-3">
              <h3 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
                {title}
              </h3>
              <p className="text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                {description}
              </p>
            </div>

            <ul className="space-y-2 text-sm text-muted-foreground">
              {bullets.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              {ctas.map((cta) => (
                <Button
                  key={cta.href}
                  asChild
                  variant={cta.variant ?? "default"}
                >
                  <Link href={cta.href}>{cta.label}</Link>
                </Button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <CodeBlock title={codeTitle} snippets={codeSnippets} />
            <div className="rounded-2xl border bg-muted/10 p-5">
              <p className="text-sm font-medium">Tip</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Use the same workflow whether you’re in the dashboard or embedding
                Dezignee: draft with AI, refine visually, then export HTML.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function FeaturesPage() {
  return (
    <>
      <Hero
        badge="Features"
        title={
          <>
            AI-first creation,{" "}
            <span className="bg-gradient-to-r from-primary via-cyan-400 to-primary bg-clip-text text-transparent">
              visual refinement
            </span>
            , and embeddable workflows.
          </>
        }
        description={
          <>
            Dezignee is built for two modes—dashboard and embedded SDK—but one
            consistent experience: chat to draft, edit visually, generate
            sequences, and export production-ready HTML.
          </>
        }
        primaryCta={{ href: "/pricing", label: "Get Started" }}
        secondaryCta={{ href: "/docs", label: "SDK Quick Start" }}
      >
        <div className="flex flex-wrap gap-2">
          {[
            { href: "#ai-chat", label: "AI Chat" },
            { href: "#visual-editor", label: "Visual Editor" },
            { href: "#sequences", label: "Sequences" },
            { href: "#mcp", label: "MCP Integration" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full border bg-background/60 px-3 py-1 text-xs text-muted-foreground hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </div>
      </Hero>

      <section className="border-t bg-background">
        <div className="container py-16 sm:py-20">
          <SectionHeading
            eyebrow="At a glance"
            title="A feature set designed for speed and control."
            description="Use AI to get to a strong first draft fast, then tweak every detail in a visual editor and ship clean HTML—manually or via SDK."
          />

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <FeatureCard
              icon={<Sparkles className="size-5" />}
              title="Chat-first drafting"
              description="Generate copy, layout, and variants in minutes."
              href="/features#ai-chat"
              linkLabel="AI chat"
            />
            <FeatureCard
              icon={<LayoutPanelTop className="size-5" />}
              title="Visual editing"
              description="Refine spacing, typography, and structure visually."
              href="/features#visual-editor"
              linkLabel="Editor"
            />
            <FeatureCard
              icon={<Workflow className="size-5" />}
              title="Sequences"
              description="Create multi-step flows with consistent voice and design."
              href="/features#sequences"
              linkLabel="Sequences"
            />
            <FeatureCard
              icon={<Braces className="size-5" />}
              title="MCP integration"
              description="Automate workflows and integrations with MCP-first primitives."
              href="/features#mcp"
              linkLabel="MCP"
            />
          </div>
        </div>
      </section>

      <FeatureSection
        id="ai-chat"
        icon={<BotMessageSquare className="size-5" />}
        title="AI-powered chat that drafts like a teammate"
        description="Start with intent (goal, audience, brand voice), then iterate in conversation. Dezignee can propose structure, write copy, and generate variants—without locking you out of manual control."
        bullets={[
          "Define tone once, reuse it across templates and multi-step campaigns.",
          "Ask for alternatives (short/long, more formal, more playful) instantly.",
          "Generate subject lines, preheaders, CTAs, and layout suggestions together.",
        ]}
        codeTitle="Example: prompt → structured draft"
        codeSnippets={[
          {
            label: "Prompt",
            language: "md",
            code: `You are writing an onboarding email for a B2B SaaS.

Audience: new trial users
Tone: friendly, concise, confident
Goal: get them to complete the first setup
Brand constraints: no hypey words, avoid emojis

Create a clean layout + copy with:
- headline
- 3 short bullets
- primary CTA
- secondary help link`,
          },
          {
            label: "Draft (snippet)",
            language: "md",
            code: `Headline: Set up your first workspace in minutes

Bullets:
- Invite your teammates and assign roles
- Connect your data source (takes ~2 minutes)
- Turn on your first automation

CTA: Finish setup
Help: Need a hand? Reply to this email or visit Help Center`,
          },
        ]}
        ctas={[
          { href: "/pricing", label: "Start with AI" },
          { href: "/contact", label: "See a demo", variant: "outline" },
        ]}
      />

      <FeatureSection
        id="visual-editor"
        inverted
        icon={<LayoutPanelTop className="size-5" />}
        title="A visual editor for pixel-perfect control"
        description="AI gets you close—then the editor gets you to “ship it.” Adjust layout, spacing, and hierarchy visually without wrestling raw tables and inline styles."
        bullets={[
          "Tweak spacing, typography, and alignment with predictable controls.",
          "Build reusable patterns with blocks (headers, footers, CTAs).",
          "Keep output clean so it renders reliably across email clients.",
        ]}
        codeTitle="Example: layout blocks (conceptual)"
        codeSnippets={[
          {
            label: "Blocks",
            language: "json",
            code: `{
  "template": {
    "header": { "logo": true, "nav": false },
    "body": [
      { "type": "hero", "headline": "...", "cta": "Finish setup" },
      { "type": "bullets", "items": ["...", "...", "..."] },
      { "type": "divider" },
      { "type": "footer", "links": ["Help Center", "Unsubscribe"] }
    ]
  }
}`,
          },
          {
            label: "Export",
            language: "html",
            code: `<!-- exported HTML snippet -->
<table role="presentation" width="100%">
  <tr><td style="padding:24px;">
    <h1 style="margin:0 0 12px;">Set up your first workspace</h1>
    <a href="#" style="display:inline-block;padding:12px 16px;">Finish setup</a>
  </td></tr>
</table>`,
          },
        ]}
        ctas={[
          { href: "/docs", label: "Embedding guide" },
          { href: "/pricing", label: "Choose a plan", variant: "outline" },
        ]}
      />

      <FeatureSection
        id="sequences"
        icon={<Workflow className="size-5" />}
        title="Email sequences for onboarding, lifecycle, and growth"
        description="Generate multi-step campaigns with a consistent voice and design system. Dezignee helps you keep the narrative coherent while tailoring each step to user behavior."
        bullets={[
          "Create 3–10 step flows with consistent components and styling.",
          "Map steps to triggers (trial start, activation, feature adoption).",
          "Maintain brand voice across every step with fast variants.",
        ]}
        codeTitle="Example: sequence outline"
        codeSnippets={[
          {
            label: "Sequence",
            language: "json",
            code: `{
  "name": "Trial onboarding",
  "steps": [
    { "day": 0, "goal": "setup", "template": "welcome-setup" },
    { "day": 2, "goal": "activation", "template": "first-success" },
    { "day": 5, "goal": "feature adoption", "template": "power-feature" },
    { "day": 9, "goal": "conversion", "template": "trial-ending" }
  ]
}`,
          },
          {
            label: "Variant prompt",
            language: "md",
            code: `Rewrite step #2 for users who *have not* connected a data source.
Keep it concise and helpful. Include a single CTA.`,
          },
        ]}
        ctas={[
          { href: "/pricing", label: "Build sequences" },
          { href: "/contact", label: "Talk through use cases", variant: "outline" },
        ]}
      />

      <FeatureSection
        id="mcp"
        inverted
        icon={<Braces className="size-5" />}
        title="MCP integration for developer-friendly automation"
        description="Dezignee is designed to plug into modern developer tooling. Use MCP-first primitives to connect your workflows—generate templates, produce sequences, and export HTML programmatically."
        bullets={[
          "Embed the editor while keeping export control in your product.",
          "Use MCP tooling to automate generation, QA checks, and publishing.",
          "Keep integration light with clear, composable primitives.",
        ]}
        codeTitle="Example: SDK + MCP enabled"
        codeSnippets={[
          {
            label: "JavaScript",
            language: "js",
            code: `import { createDezigneeEditor } from "@dezignee/sdk"

const editor = createDezigneeEditor({
  mount: document.getElementById("editor"),
  mcp: { enabled: true },
})

// Generate a draft via tools, then export HTML
await editor.tools.run("email.sequence", { goal: "trial onboarding" })
const html = await editor.exportHtml()`,
          },
          {
            label: "MCP context",
            language: "json",
            code: `{
  "tools": ["email.generate", "email.sequence", "email.export"],
  "context": {
    "brandVoice": "friendly, concise",
    "designTokens": { "primary": "#06B6D4" }
  }
}`,
          },
        ]}
        ctas={[
          { href: "/docs", label: "Read docs" },
          { href: "/contact", label: "Integrate with us", variant: "outline" },
        ]}
      />

      <section className="border-t bg-background">
        <div className="container py-16 sm:py-20">
          <div className="relative overflow-hidden rounded-3xl border bg-card p-8 shadow-sm sm:p-12">
            <div
              className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-primary/15 via-transparent to-cyan-400/15"
              aria-hidden="true"
            />

            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                Next step
              </p>
              <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                Want to see Dezignee in action?
              </h2>
              <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                Tell us your use case—dashboard workflows, embeddable SDK, or
                both—and we’ll show you the fastest path to shipping.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
                <Button asChild size="lg">
                  <Link href="/pricing">Get Started</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/contact">Request a demo</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

