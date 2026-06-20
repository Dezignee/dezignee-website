import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  Blocks,
  Braces,
  CodeXml,
  FileCode2,
  Image as ImageIcon,
  LayoutPanelTop,
  MailCheck,
  MessageSquareCode,
  MessagesSquare,
  PenTool,
  Plug,
  Puzzle,
  ShieldCheck,
  Sparkles,
  Terminal,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/reveal"
import { Hero } from "@/components/sections/hero"

export const metadata: Metadata = {
  title: "MCP-native email editor",
  description:
    "Chat to draft a campaign, refine every block by hand, and export email-safe HTML — all over the same MCP your agents already speak.",
  alternates: { canonical: "/" },
}

/* ---- small shared bits ------------------------------------------------- */
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.04em] text-muted-foreground">
      <span className="size-1.5 rounded-full bg-terracotta" aria-hidden="true" />
      {children}
    </p>
  )
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
    <header className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="font-display mt-3.5 text-balance text-[38px] leading-[1.12] text-foreground">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
          {description}
        </p>
      ) : null}
    </header>
  )
}

const FEATURES = [
  { icon: Sparkles, accent: true, title: "AI chat & sequences", body: "Streaming assistant that plans, drafts, and revises whole onboarding and lifecycle flows — not just one message." },
  { icon: LayoutPanelTop, title: "Visual block editor", body: "Headings, text, images, buttons, dividers and spacers in rows and columns — drag, select, and fine-tune every pixel." },
  { icon: Braces, title: "Merge tags", body: "Personalize with {{ first_name }} tokens across subject, body, and links, with live preview." },
  { icon: ImageIcon, title: "Asset library", body: "Upload to Dezignee-hosted storage or bring your own S3 bucket. Reuse logos and imagery across every template." },
  { icon: ShieldCheck, title: "Inbox validation", body: "Non-blocking checks flag broken links, missing alt text, and oversized images before you ever hit export." },
  { icon: FileCode2, title: "Email-safe export", body: "Predictable, table-based markup with inline styles and MSO fallbacks that renders the same from Gmail to Outlook." },
]

const STEPS = [
  { n: "01", t: "Prompt", d: "Describe the campaign in chat. Dezignee drafts a single email or a full multi-step sequence, structured into real blocks." },
  { n: "02", t: "Refine", d: "Edit any block by hand, or ask the assistant. Every change — yours or the AI's — runs through one versioned command pipeline." },
  { n: "03", t: "Export", d: "Ship email-safe HTML — table-based, Outlook-tested, inline styles — straight to your ESP, product, or CMS." },
]

const PATHS = [
  { icon: Puzzle, t: "Embed the editor", d: <>Drop the full editor into your app with <code className="rounded bg-terracotta-tint px-1.5 py-0.5 font-mono text-xs text-terracotta">@dezignee/plugin</code> and an API key — it mints sessions for your users.</> },
  { icon: MessageSquareCode, t: "Bring your own chat", d: <>Stream drafts into your product over <code className="rounded bg-terracotta-tint px-1.5 py-0.5 font-mono text-xs text-terracotta">/ai/chat</code> with server-sent events and your own UI.</> },
  { icon: Plug, t: "Connect over MCP", d: <>Point Claude Desktop, Cursor, or VS Code at the Dezignee MCP servers to inspect and edit emails from your agent.</> },
]

const PRINCIPLES = [
  { icon: PenTool, t: "You stay in the loop", d: "The AI proposes; you decide. Every block is editable by hand, and full version history means nothing is ever a one-way door." },
  { icon: MailCheck, t: "Email-safe by default", d: "Output is built for real inboxes — table layouts, inline styles, and Outlook fallbacks — not just a pretty preview in the browser." },
  { icon: Blocks, t: "Open by design", d: "One command pipeline powers the UI, the API, and MCP — so anything you can do by hand, an agent can do too." },
]

const PLANS = [
  { name: "Free", price: "$0", per: "", credits: <><b className="font-semibold text-foreground">50 credits</b> / day</>, feature: false },
  { name: "Pro", price: "$99", per: "/mo", credits: <><b className="font-semibold text-foreground">2,500 credits</b> / mo</>, feature: true },
  { name: "Growth", price: "$399", per: "/mo", credits: <><b className="font-semibold text-foreground">10,000 credits</b> / mo</>, feature: false },
  { name: "Business", price: "$699", per: "/mo", credits: <><b className="font-semibold text-foreground">25,000 credits</b> + BYO key</>, feature: false },
]

export default function Home() {
  return (
    <>
      <Hero />

      {/* Connects / trust strip */}
      <section className="border-t border-border">
        <div className="mx-auto flex w-4/5 max-w-[1040px] flex-wrap items-center justify-center gap-x-7 gap-y-4 py-12">
          <span className="text-sm font-medium text-muted-foreground/70">Drive it from the tools you already use</span>
          <div className="flex flex-wrap items-center gap-7">
            {[
              { icon: MessagesSquare, label: "Claude Desktop" },
              { icon: Terminal, label: "Cursor" },
              { icon: CodeXml, label: "VS Code" },
              { icon: Plug, label: "Any MCP client" },
            ].map(({ icon: Icon, label }) => (
              <span key={label} className="inline-flex items-center gap-2 text-[15px] font-semibold text-foreground/80">
                <Icon className="size-[17px] text-muted-foreground" />
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-t border-border">
        <div className="mx-auto w-4/5 max-w-[1040px] py-24">
          <SectionHeading eyebrow="How it works" title="From a sentence to send-ready, three moves." />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {STEPS.map((s) => (
              <Reveal key={s.n}>
                <div>
                  <span className="font-mono text-sm font-medium text-terracotta">{s.n}</span>
                  <h3 className="font-display mt-3 text-[22px] text-foreground">{s.t}</h3>
                  <p className="mt-2.5 text-[15px] leading-relaxed text-muted-foreground">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-border">
        <div className="mx-auto w-4/5 max-w-[1040px] py-24">
          <SectionHeading
            eyebrow="Features"
            title="Everything to create, refine, and ship email."
            description="A real block editor underneath the chat — so the AI's output is something you can actually shape, not a black box."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f) => {
              const Icon = f.icon
              return (
                <article
                  key={f.title}
                  className="rounded-lg border border-border bg-card p-6 shadow-[0_1px_2px_rgba(40,34,25,0.05)] transition-all hover:-translate-y-0.5 hover:border-input hover:shadow-[0_4px_12px_rgba(40,34,25,0.07)]"
                >
                  <div
                    className={
                      f.accent
                        ? "flex size-10 items-center justify-center rounded-md border border-terracotta/30 bg-terracotta-tint text-terracotta"
                        : "flex size-10 items-center justify-center rounded-md border border-border bg-secondary text-foreground/70"
                    }
                  >
                    <Icon className="size-5" />
                  </div>
                  <h3 className="mt-4 text-[15px] font-semibold text-foreground">{f.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* Developers / MCP */}
      <section className="border-t border-border">
        <div className="mx-auto grid w-4/5 max-w-[1040px] items-center gap-12 py-24 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Built MCP-first"
              title="Your agents speak to the editor directly."
            />
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              Manual edits, AI chat, and external agents all drive the same document
              engine through typed commands that return versioned patches. Three ways in:
            </p>
            <div className="mt-7 flex flex-col gap-4">
              {PATHS.map((p) => {
                const Icon = p.icon
                return (
                  <div key={p.t} className="flex gap-3.5">
                    <span className="flex size-[34px] shrink-0 items-center justify-center rounded-md border border-border bg-card text-foreground/70">
                      <Icon className="size-[17px]" />
                    </span>
                    <div>
                      <div className="text-[15px] font-semibold text-foreground">{p.t}</div>
                      <p className="mt-0.5 text-sm leading-snug text-muted-foreground">{p.d}</p>
                    </div>
                  </div>
                )
              })}
            </div>
            <div className="mt-7">
              <Link href="/docs" className="inline-flex items-center gap-1.5 text-sm font-semibold text-terracotta hover:underline">
                Read the developer docs <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </div>

          <Reveal delay={0.08}>
            <div className="overflow-hidden rounded-lg border border-[#34302A] bg-[#211F1A] shadow-[0_12px_28px_rgba(40,34,25,0.16)]">
              <div className="flex items-center gap-2 border-b border-[#34302A] px-3.5 py-2.5">
                <span className="size-2.5 rounded-full bg-[#46413A]" />
                <span className="size-2.5 rounded-full bg-[#46413A]" />
                <span className="size-2.5 rounded-full bg-[#46413A]" />
                <span className="ml-1.5 font-mono text-xs text-[#A8A296]">claude_desktop_config.json</span>
              </div>
              <pre className="overflow-x-auto px-4 py-4 font-mono text-[12.5px] leading-[1.7] text-[#E7E3D9]">
{`{
  "mcpServers": {
    "dezignee-users": {
      "command": "python",
      "args": [
        "/path/to/dezignee-backend/scripts/mcp-users-server.py",
        "--workspace-id=your-workspace-id",
        "--api-key=dzg_api_your-api-key",
        "--api-url=https://api.dezignee.com"
      ]
    }
  }
}`}
              </pre>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Principles */}
      <section className="border-t border-border">
        <div className="mx-auto w-4/5 max-w-[1040px] py-24">
          <SectionHeading eyebrow="Why Dezignee" title="AI speed, without giving up control." />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PRINCIPLES.map((p) => {
              const Icon = p.icon
              return (
                <div key={p.t}>
                  <Icon className="size-[22px] text-terracotta" />
                  <h3 className="font-display mt-3.5 text-lg text-foreground">{p.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Pricing teaser */}
      <section className="border-t border-border">
        <div className="mx-auto w-4/5 max-w-[1040px] py-24">
          <SectionHeading
            eyebrow="Pricing"
            title="Start free. Scale by credits."
            description="AI usage is metered in credits. Paid plans reset monthly and never block you — overage is simple pay-as-you-go."
          />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PLANS.map((p) => (
              <div
                key={p.name}
                className={
                  p.feature
                    ? "relative flex flex-col rounded-lg border border-terracotta/30 bg-card p-6 shadow-[0_4px_12px_rgba(40,34,25,0.07)]"
                    : "relative flex flex-col rounded-lg border border-border bg-card p-6"
                }
              >
                {p.feature ? (
                  <span className="absolute -top-2.5 left-6 rounded-full bg-terracotta px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-terracotta-foreground">
                    Popular
                  </span>
                ) : null}
                <div className="text-[15px] font-semibold text-foreground">{p.name}</div>
                <div className="mt-3 flex items-baseline gap-0.5">
                  <span className="font-display text-[34px] font-semibold text-foreground">{p.price}</span>
                  {p.per ? <span className="text-sm text-muted-foreground/70">{p.per}</span> : null}
                </div>
                <div className="mt-2.5 text-sm text-muted-foreground">{p.credits}</div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/pricing" className="inline-flex items-center gap-1.5 text-sm font-semibold text-terracotta hover:underline">
              Compare all plans <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section>
        <div className="mx-auto w-4/5 max-w-[1040px] py-24">
          <Reveal>
            <div className="overflow-hidden rounded-3xl bg-primary px-10 py-16 text-center">
              <h2 className="font-display text-balance text-[42px] leading-[1.1] text-primary-foreground">
                Build your first email in minutes.
              </h2>
              <p className="mx-auto mt-4 max-w-md text-lg text-primary-foreground/60">
                Free to start. No credit card. Bring your own agent whenever you&apos;re ready.
              </p>
              <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
                <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90">
                  <Link href="/pricing">Start free</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/25 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                >
                  <Link href="/docs">Read the docs</Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
