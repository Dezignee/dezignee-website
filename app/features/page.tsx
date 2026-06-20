import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  Boxes,
  Braces,
  FileCode2,
  GitBranch,
  Heading,
  Image as ImageIcon,
  LayoutPanelTop,
  Minus,
  MousePointerSquareDashed,
  Sparkles,
  SquareStack,
  Type,
  Webhook,
  Workflow,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/reveal"
import { CodeBlock } from "@/components/code-block"
import { PageHeader } from "@/components/sections/page-header"

export const metadata: Metadata = {
  title: "Product",
  description:
    "A real block editor under the AI: chat to draft emails and sequences, refine every block by hand, personalize with merge tags, and export email-safe HTML.",
  alternates: { canonical: "/features" },
}

function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string
  title: React.ReactNode
  description?: React.ReactNode
  align?: "center" | "left"
}) {
  return (
    <header className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-xl"}>
      {eyebrow ? (
        <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.04em] text-muted-foreground">
          <span className="size-1.5 rounded-full bg-terracotta" aria-hidden="true" />
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display mt-3.5 text-balance text-[34px] leading-[1.12] text-foreground sm:text-[38px]">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">{description}</p>
      ) : null}
    </header>
  )
}

/* alternating image/text deep-dive split */
function Split({
  id,
  icon: Icon,
  eyebrow,
  title,
  body,
  bullets,
  media,
  inverted = false,
}: {
  id: string
  icon: React.ElementType
  eyebrow: string
  title: string
  body: string
  bullets: string[]
  media: React.ReactNode
  inverted?: boolean
}) {
  return (
    <section id={id} className="scroll-mt-20 border-t border-border">
      <div className="mx-auto grid w-4/5 max-w-[1040px] items-center gap-12 py-20 lg:grid-cols-2">
        <div className={inverted ? "lg:order-2" : ""}>
          <span className="inline-flex size-11 items-center justify-center rounded-xl border border-terracotta/30 bg-terracotta-tint text-terracotta">
            <Icon className="size-5" />
          </span>
          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.04em] text-muted-foreground">{eyebrow}</p>
          <h3 className="font-display mt-2 text-balance text-[28px] leading-[1.14] text-foreground">{title}</h3>
          <p className="mt-3 text-pretty text-[15px] leading-relaxed text-muted-foreground">{body}</p>
          <ul className="mt-5 space-y-2.5">
            {bullets.map((b) => (
              <li key={b} className="flex gap-2.5 text-[15px] text-foreground/80">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-terracotta" aria-hidden="true" />
                <span className="leading-snug">{b}</span>
              </li>
            ))}
          </ul>
        </div>
        <Reveal className={inverted ? "lg:order-1" : ""} delay={0.05}>
          {media}
        </Reveal>
      </div>
    </section>
  )
}

/* --- small mock surfaces (warm DS palette, pure CSS) --- */
function MockFrame({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-input bg-card shadow-[0_12px_28px_rgba(40,34,25,0.1)]">
      <div className="flex items-center gap-2 border-b border-border bg-secondary px-4 py-2.5">
        <span className="size-2.5 rounded-full bg-input" />
        <span className="size-2.5 rounded-full bg-input" />
        <span className="size-2.5 rounded-full bg-input" />
        <span className="ml-1.5 font-mono text-xs text-muted-foreground">{label}</span>
      </div>
      <div className="p-5">{children}</div>
    </div>
  )
}

const BLOCK_TYPES = [
  { icon: Heading, label: "Heading" },
  { icon: Type, label: "Text" },
  { icon: ImageIcon, label: "Image" },
  { icon: MousePointerSquareDashed, label: "Button" },
  { icon: Minus, label: "Divider" },
  { icon: SquareStack, label: "Spacer" },
]

const ALSO = [
  { icon: ImageIcon, t: "Asset library", d: "Upload to Dezignee-hosted storage or wire your own S3 bucket via an asset adapter." },
  { icon: GitBranch, t: "Version history", d: "Every command is versioned. Roll back a template or compare against an earlier draft." },
  { icon: Boxes, t: "Workspaces", d: "Multi-tenant by design — separate brands, teams, and API keys per workspace." },
  { icon: Webhook, t: "Webhooks", d: "HMAC-signed events for exports and changes, so your pipeline stays in sync." },
]

export default function FeaturesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Product"
        title={<>A real editor under the AI.</>}
        description="Chat gets you a strong first draft in seconds. Then a full block editor lets you shape every pixel — and ship HTML that holds up in real inboxes."
        ctas={[
          { href: "/pricing", label: "Start free" },
          { href: "/docs", label: "Read the docs", variant: "outline" },
        ]}
        anchors={[
          { href: "#ai", label: "AI & sequences" },
          { href: "#editor", label: "Block editor" },
          { href: "#merge", label: "Merge tags" },
          { href: "#export", label: "Email-safe export" },
        ]}
      />

      {/* AI & sequences */}
      <Split
        id="ai"
        icon={Sparkles}
        eyebrow="AI & sequences"
        title="Draft a whole sequence, not just one email"
        body="Describe the goal, audience, and voice. The assistant streams back a structured draft — real blocks you can edit — and can plan multi-step onboarding and lifecycle flows in one pass."
        bullets={[
          "Streaming responses over server-sent events — watch the draft build.",
          "Prompt-to-template, plus copy, layout, and style suggestions on demand.",
          "Import a brand from a URL or generate imagery when you need it.",
        ]}
        media={
          <MockFrame label="assistant">
            <div className="space-y-3">
              <div className="ml-auto w-fit max-w-[80%] rounded-2xl rounded-br-sm bg-primary px-3.5 py-2 text-[13px] text-primary-foreground">
                3-step trial onboarding, friendly and concise
              </div>
              <div className="w-fit max-w-[85%] rounded-2xl rounded-bl-sm border border-border bg-secondary px-3.5 py-2 text-[13px] text-foreground/80">
                Planned 3 emails: welcome &amp; setup, first success, and a nudge before the trial ends.
              </div>
              <div className="flex w-fit items-center gap-2 rounded-full border border-border bg-card px-2.5 py-1 font-mono text-[11px] text-muted-foreground">
                <span className="size-2 rounded-full bg-success" />
                dezignee · generate_commands · done
              </div>
            </div>
          </MockFrame>
        }
      />

      {/* Block editor */}
      <Split
        id="editor"
        icon={LayoutPanelTop}
        eyebrow="Visual block editor"
        title="Drag, select, and fine-tune every block"
        body="Under the chat is a true visual editor on a dot-grid canvas. Build with rows and columns of typed blocks, and adjust type, color, spacing, and alignment with predictable controls."
        bullets={[
          "Six block types compose any layout — no raw tables or inline styles.",
          "Select a block to edit its properties; empty columns read “No content yet”.",
          "Manual edits and AI edits run through the same command pipeline.",
        ]}
        inverted
        media={
          <MockFrame label="welcome · canvas">
            <div className="grid grid-cols-3 gap-2.5">
              {BLOCK_TYPES.map((b) => {
                const Icon = b.icon
                return (
                  <div
                    key={b.label}
                    className="flex flex-col items-center gap-2 rounded-lg border border-border bg-secondary/60 px-2 py-4 text-center"
                  >
                    <Icon className="size-5 text-foreground/70" />
                    <span className="text-xs font-medium text-muted-foreground">{b.label}</span>
                  </div>
                )
              })}
            </div>
          </MockFrame>
        }
      />

      {/* Merge tags */}
      <Split
        id="merge"
        icon={Braces}
        eyebrow="Personalization"
        title="Merge tags everywhere you need them"
        body="Drop personalization tokens into subjects, body copy, and links. Preview mode swaps in sample values so you can read the email exactly as a recipient will."
        bullets={[
          "Use {{ first_name }}-style tokens across every text field and URL.",
          "Preview with sample data before you export or send.",
          "Tokens survive export untouched for your ESP to fill in.",
        ]}
        media={
          <MockFrame label="text · properties">
            <div className="space-y-3">
              <div className="rounded-lg border border-border bg-background p-3 text-[13px] leading-relaxed text-foreground/80">
                Hi <span className="rounded bg-terracotta-tint px-1.5 py-0.5 font-mono text-xs text-terracotta">{"{{ first_name }}"}</span>, welcome to
                <span className="rounded bg-terracotta-tint px-1.5 py-0.5 font-mono text-xs text-terracotta">{"{{ company }}"}</span> 👋
              </div>
              <div className="flex items-center justify-between rounded-lg border border-border bg-secondary px-3 py-2 text-xs">
                <span className="text-muted-foreground">Preview values</span>
                <span className="font-medium text-foreground">On</span>
              </div>
            </div>
          </MockFrame>
        }
      />

      {/* Export */}
      <Split
        id="export"
        icon={FileCode2}
        eyebrow="Email-safe export"
        title="HTML built for real inboxes"
        body="Export is backend-authoritative: predictable, table-based markup with inline styles and Outlook (MSO) fallbacks — so what you design renders the same from Gmail to Outlook."
        bullets={[
          "Table-based layout with inline styles — no surprises across clients.",
          "MSO conditional fallbacks for Outlook’s rendering engine.",
          "Non-blocking validation flags issues before you ship.",
        ]}
        inverted
        media={
          <CodeBlock
            title="export-html"
            snippets={{
              label: "HTML",
              language: "html",
              code: `<table role="presentation" width="100%" cellpadding="0" cellspacing="0">
  <tr>
    <td style="padding:24px;font-family:Arial,sans-serif;">
      <h1 style="margin:0 0 12px;font-size:24px;">Welcome aboard.</h1>
      <!--[if mso]><table role="presentation"><tr><td><![endif]-->
      <a href="{{ cta_url }}"
         style="display:inline-block;padding:12px 18px;
                background:#2A2823;color:#ffffff;border-radius:8px;">
        Get started
      </a>
      <!--[if mso]></td></tr></table><![endif]-->
    </td>
  </tr>
</table>`,
            }}
          />
        }
      />

      {/* Also included */}
      <section className="border-t border-border">
        <div className="mx-auto w-4/5 max-w-[1040px] py-20">
          <SectionHeading eyebrow="Also included" title="The rest of the toolkit." />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ALSO.map((a) => {
              const Icon = a.icon
              return (
                <div key={a.t} className="rounded-lg border border-border bg-card p-6">
                  <Icon className="size-5 text-foreground/70" />
                  <h3 className="mt-4 text-[15px] font-semibold text-foreground">{a.t}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{a.d}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto w-4/5 max-w-[1040px] py-20">
          <Reveal>
            <div className="flex flex-col items-center gap-6 rounded-3xl border border-border bg-secondary px-10 py-14 text-center">
              <h2 className="font-display text-balance text-[34px] leading-[1.1] text-foreground">
                See it build an email in real time.
              </h2>
              <p className="-mt-2 max-w-md text-pretty text-lg text-muted-foreground">
                Start free and draft your first campaign in minutes — no credit card.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="/pricing">Start free</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/docs" className="gap-1.5">
                    Developer docs <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
