import Link from "next/link"
import type { Metadata } from "next"
import { BookOpen, Braces, LayoutPanelTop, Rocket, Workflow } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CodeBlock } from "@/components/code-block"
import { Hero } from "@/components/sections/hero"

export const metadata: Metadata = {
  title: "Docs",
  description:
    "Quick start guides for the embeddable SDK, MCP integration, and dashboard workflows.",
  alternates: {
    canonical: "/docs",
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

function DocSection({
  id,
  icon,
  title,
  description,
  steps,
  codeTitle,
  codeSnippets,
  ctas,
}: {
  id: string
  icon: React.ReactNode
  title: string
  description: string
  steps: string[]
  codeTitle: string
  codeSnippets: { label: string; language: string; code: string }[]
  ctas: { href: string; label: string; variant?: "default" | "outline" }[]
}) {
  return (
    <section id={id} className="border-t bg-background scroll-mt-24">
      <div className="container py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="flex size-11 items-center justify-center rounded-xl border bg-background">
                <span className="text-primary">{icon}</span>
              </div>
              <Badge variant="secondary" className="border-primary/20">
                Documentation
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

            <ol className="space-y-2 text-sm text-muted-foreground">
              {steps.map((item, idx) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full border bg-background text-xs font-semibold text-foreground">
                    {idx + 1}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>

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
              <p className="text-sm font-medium">Note</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                The snippets use placeholder package names and tool identifiers.
                Replace them with your real SDK/API details when ready.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function DocsPage() {
  return (
    <>
      <Hero
        badge="Docs"
        title={
          <>
            Integrate the{" "}
            <span className="bg-gradient-to-r from-primary via-cyan-400 to-primary bg-clip-text text-transparent">
              SDK + MCP
            </span>{" "}
            — or use the dashboard.
          </>
        }
        description={
          <>
            Dezignee supports two modes: an embeddable editor for products and a
            dashboard for teams. These docs outline the structure and key
            integration steps.
          </>
        }
        primaryCta={{ href: "#quick-start", label: "Quick Start" }}
        secondaryCta={{ href: "/contact", label: "Talk to us" }}
      >
        <div className="flex flex-wrap justify-center gap-2">
          {[
            { href: "#quick-start", label: "Quick start" },
            { href: "#sdk", label: "SDK integration" },
            { href: "#dashboard", label: "Dashboard guide" },
            { href: "#api", label: "API reference" },
            { href: "#examples", label: "Examples" },
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
            eyebrow="Overview"
            title="One workflow, two surfaces."
            description="Draft with AI, refine visually, then export HTML. Do it in the dashboard—or embed the same editor experience in your product."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "Dashboard",
                description:
                  "AI chat + visual editor for teams creating templates and sequences.",
                icon: <LayoutPanelTop className="size-5" />,
              },
              {
                title: "Embeddable SDK",
                description:
                  "Embed the editor UI inside your app with programmatic exports.",
                icon: <Braces className="size-5" />,
              },
              {
                title: "MCP workflows",
                description:
                  "Automate generation, QA, and publishing using MCP-compatible primitives.",
                icon: <Workflow className="size-5" />,
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border bg-card p-6 shadow-sm"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold tracking-tight">
                      {card.title}
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {card.description}
                    </p>
                  </div>
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border bg-background text-primary">
                    {card.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DocSection
        id="quick-start"
        icon={<Rocket className="size-5" />}
        title="Quick start (embeddable)"
        description="Mount the editor, enable MCP, and export HTML programmatically."
        steps={[
          "Install the SDK in your application.",
          "Create an editor instance and mount it into your UI.",
          "Enable MCP tools for generation + export workflows.",
          "Export HTML when the user clicks “Publish”.",
        ]}
        codeTitle="Quick start"
        codeSnippets={[
          {
            label: "Install",
            language: "bash",
            code: `npm install @dezignee/sdk`,
          },
          {
            label: "Embed",
            language: "js",
            code: `import { createDezigneeEditor } from "@dezignee/sdk"

const editor = createDezigneeEditor({
  mount: document.getElementById("dezignee-editor"),
  mcp: { enabled: true },
})

// Example: export HTML on publish
const html = await editor.exportHtml()`,
          },
        ]}
        ctas={[
          { href: "#sdk", label: "SDK integration details" },
          { href: "/pricing", label: "See pricing", variant: "outline" },
        ]}
      />

      <DocSection
        id="sdk"
        icon={<Braces className="size-5" />}
        title="SDK integration guide"
        description="A suggested structure for embedding Dezignee inside a product (or plugin) with clear lifecycle hooks."
        steps={[
          "Create a wrapper component that mounts/unmounts the editor cleanly.",
          "Pass theming tokens (colors, fonts) to match your product.",
          "Wire “Save”, “Publish”, and “Export” actions to your backend.",
          "Use MCP tools for generation and sequence workflows when needed.",
        ]}
        codeTitle="Suggested integration surface"
        codeSnippets={[
          {
            label: "Embed wrapper",
            language: "tsx",
            code: `// Pseudocode
export function EmailEditorEmbed({ onPublish }) {
  useEffect(() => {
    const editor = createDezigneeEditor({
      mount: document.getElementById("mount"),
      theme: { primary: "#06B6D4" },
      mcp: { enabled: true },
    })

    return () => editor.destroy()
  }, [])

  return <div id="mount" />
}`,
          },
          {
            label: "Export",
            language: "js",
            code: `const html = await editor.exportHtml()
await fetch("/api/templates", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ html }),
})`,
          },
        ]}
        ctas={[
          { href: "#api", label: "API reference" },
          { href: "/contact", label: "Get integration help", variant: "outline" },
        ]}
      />

      <DocSection
        id="dashboard"
        icon={<LayoutPanelTop className="size-5" />}
        title="Dashboard usage"
        description="Use the dashboard to generate templates and sequences, then export clean HTML for your ESP or product."
        steps={[
          "Start from a prompt: goal, audience, tone, brand constraints.",
          "Refine copy and layout in AI chat until the structure is right.",
          "Use the visual editor for spacing, hierarchy, and block-level tweaks.",
          "Export HTML and publish to your ESP/CMS/workflow.",
        ]}
        codeTitle="Example: prompt → HTML"
        codeSnippets={[
          {
            label: "Prompt",
            language: "md",
            code: `Write a 3-email onboarding sequence for new trial users.

Constraints:
- friendly, concise
- include a clear CTA in each email
- keep layout clean and scannable`,
          },
          {
            label: "Exported HTML",
            language: "html",
            code: `<!-- exported HTML snippet -->
<table role="presentation" width="100%">
  <tr><td style="padding:24px;">
    <h1 style="margin:0 0 12px;">Welcome — let’s get you set up</h1>
    <p style="margin:0 0 16px;">...</p>
    <a href="#" style="display:inline-block;padding:12px 16px;">Finish setup</a>
  </td></tr>
</table>`,
          },
        ]}
        ctas={[
          { href: "/pricing", label: "Choose a plan" },
          { href: "/features", label: "See features", variant: "outline" },
        ]}
      />

      <section id="api" className="border-t bg-background scroll-mt-24">
        <div className="container py-16 sm:py-20">
          <SectionHeading
            eyebrow="API reference"
            title="MCP tools and SDK methods (placeholder)."
            description="A starter map of the primitives you can expose. Replace with your real endpoints and auth requirements."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <CodeBlock
              title="MCP tools"
              snippets={[
                {
                  label: "Tools",
                  language: "json",
                  code: `{
  "tools": [
    "email.generate",
    "email.sequence",
    "email.export"
  ],
  "context": {
    "brandVoice": "friendly, concise",
    "designTokens": { "primary": "#06B6D4" }
  }
}`,
                },
              ]}
            />
            <CodeBlock
              title="SDK methods"
              snippets={[
                {
                  label: "Methods",
                  language: "ts",
                  code: `type DezigneeEditor = {
  exportHtml(): Promise<string>
  destroy(): void
  tools: {
    run(tool: string, input?: unknown): Promise<unknown>
  }
}`,
                },
              ]}
            />
          </div>
        </div>
      </section>

      <section id="examples" className="border-t bg-muted/10 scroll-mt-24">
        <div className="container py-16 sm:py-20">
          <SectionHeading
            eyebrow="Examples"
            title="Common workflows you can implement quickly."
            description="Copy/paste-ready examples for embedding + automation patterns."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border bg-card p-6 shadow-sm">
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm font-semibold tracking-tight">
                  “Generate then export”
                </p>
                <Badge variant="secondary" className="border-primary/20">
                  SDK + MCP
                </Badge>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Run a generation tool, then export HTML for your pipeline.
              </p>
              <div className="mt-4">
                <CodeBlock
                  snippets={{
                    label: "Example",
                    language: "js",
                    code: `await editor.tools.run("email.generate", {
  goal: "product announcement",
  tone: "confident, concise",
})

const html = await editor.exportHtml()`,
                  }}
                />
              </div>
            </div>

            <div className="rounded-2xl border bg-card p-6 shadow-sm">
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm font-semibold tracking-tight">
                  “Sequence scaffolding”
                </p>
                <Badge variant="secondary" className="border-primary/20">
                  Campaigns
                </Badge>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Generate a multi-step campaign outline, then edit each step.
              </p>
              <div className="mt-4">
                <CodeBlock
                  snippets={{
                    label: "Example",
                    language: "json",
                    code: `{
  "tool": "email.sequence",
  "input": {
    "name": "Trial onboarding",
    "steps": 4,
    "goal": "activation"
  }
}`,
                  }}
                />
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-2xl border bg-card p-6 shadow-sm">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <div className="flex size-11 items-center justify-center rounded-xl border bg-background text-primary">
                  <BookOpen className="size-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold tracking-tight">
                    Want more examples (React, Next.js, vanilla JS)?
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Tell us your stack and we’ll tailor a reference integration.
                  </p>
                </div>
              </div>
              <Button asChild variant="outline">
                <Link href="/contact">Request examples</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

