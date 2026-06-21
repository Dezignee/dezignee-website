import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  Boxes,
  FileCode2,
  KeyRound,
  Mail,
  MessagesSquare,
  Plug,
  Puzzle,
  Radio,
  Terminal,
  Workflow,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/reveal"
import { CodeBlock } from "@/components/code-block"
import { PageHeader } from "@/components/sections/page-header"

export const metadata: Metadata = {
  title: "Developers",
  description:
    "Build on Dezignee three ways: embed the editor with the plugin SDK, stream drafts over the /ai/chat API, or connect agents through the Dezignee MCP servers.",
  alternates: { canonical: "/docs" },
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

const TRACKS = [
  {
    icon: Puzzle,
    tag: "Track A · Plugin SDK",
    t: "Embed the editor",
    d: "Drop the full editor into your product. Your server mints a short-lived session from an API key; the iframe loads a sequence and edits it.",
    code: "@dezignee/plugin",
  },
  {
    icon: MessagesSquare,
    tag: "Track C · BYO chat",
    t: "Bring your own chat",
    d: "Already have a chat UI? Stream structured drafts into it over the REST AI endpoint with server-sent events.",
    code: "POST /api/v1/ai/chat",
  },
  {
    icon: Plug,
    tag: "MCP",
    t: "Connect over MCP",
    d: "Point Cursor, VS Code, or Claude Desktop at the Dezignee MCP servers to inspect workspaces and edit emails from your agent.",
    code: "dezignee-plugin · dezignee-users",
  },
]

const PLUGIN_TOOLS = [
  "detect_project",
  "install_bridge",
  "create_embed_component",
  "configure_init",
  "workspace_overview",
  "list_sequences",
  "list_emails",
  "diagnostics",
]
const USERS_TOOLS = [
  "suggest_copy",
  "suggest_layout",
  "suggest_styles",
  "generate_commands",
  "apply_commands",
  "apply_ai_suggestion",
]

const RESOURCES = [
  { icon: Mail, uri: "email://{emailId}", d: "An email document — current or a specific version." },
  { icon: Workflow, uri: "sequence://{sequenceId}", d: "A sequence with all of its emails." },
  { icon: Boxes, uri: "workspace://{workspaceId}", d: "Workspace metadata, sequences, and emails." },
]

export default function DevelopersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Developers"
        title={<>Three ways to build on Dezignee.</>}
        description="One command-driven document engine powers the editor UI, the AI, and MCP. Embed it, stream from it, or drive it from your agent — your choice."
        ctas={[
          { href: "/pricing", label: "Get an API key" },
          { href: "#mcp", label: "MCP setup", variant: "outline" },
        ]}
        anchors={[
          { href: "#tracks", label: "Integration tracks" },
          { href: "#commands", label: "Command model" },
          { href: "#mcp", label: "MCP servers" },
          { href: "#auth", label: "Auth & keys" },
        ]}
      />

      {/* Tracks */}
      <section id="tracks" className="scroll-mt-20 border-b border-border">
        <div className="site-rail py-20">
          <SectionHeading
            eyebrow="Integration tracks"
            title="Pick the surface that fits your stack."
            description="Mix and match — embed the editor for your users and drive the same workspace from an agent over MCP."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {TRACKS.map((tr) => {
              const Icon = tr.icon
              return (
                <article key={tr.t} className="flex flex-col rounded-lg border border-border bg-card p-6">
                  <span className="inline-flex size-11 items-center justify-center rounded-xl border border-terracotta/30 bg-terracotta-tint text-terracotta">
                    <Icon className="size-5" />
                  </span>
                  <p className="mt-5 text-xs font-semibold uppercase tracking-[0.04em] text-muted-foreground">{tr.tag}</p>
                  <h3 className="mt-1.5 text-lg font-semibold text-foreground">{tr.t}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{tr.d}</p>
                  <code className="mt-4 block truncate rounded-md bg-secondary px-2.5 py-1.5 font-mono text-xs text-foreground/80">
                    {tr.code}
                  </code>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* Embed quick start */}
      <section className="border-b border-border">
        <div className="site-rail grid items-center gap-12 py-20 lg:grid-cols-2">
          <div>
            <SectionHeading align="left" eyebrow="Track A" title="Embed the editor in minutes." />
            <p className="mt-4 text-pretty text-[15px] leading-relaxed text-muted-foreground">
              Install the plugin, create a session from your API key on the server, and mount the
              editor. The iframe authenticates with the short-lived session token — your API key never
              touches the browser.
            </p>
            <ul className="mt-5 space-y-2.5">
              {[
                "Server creates a session: API key (dzg_api_) → session token (dzg_sess_).",
                "The editor loads a sequence and applies commands as the user edits.",
                "Export email-safe HTML from the host whenever you publish.",
              ].map((b) => (
                <li key={b} className="flex gap-2.5 text-[15px] text-foreground/80">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-terracotta" aria-hidden="true" />
                  <span className="leading-snug">{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <Reveal delay={0.05}>
            <CodeBlock
              title="Embed with @dezignee/plugin"
              snippets={[
                {
                  label: "Install",
                  language: "bash",
                  code: `npm install @dezignee/plugin`,
                },
                {
                  label: "Server",
                  language: "ts",
                  code: `// Create a short-lived editor session from your API key.
const res = await fetch("https://api.dezignee.com/api/v1/sessions", {
  method: "POST",
  headers: {
    "Authorization": \`Bearer \${process.env.DEZIGNEE_API_KEY}\`, // dzg_api_...
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ sequenceId }),
})
const { sessionToken } = await res.json() // dzg_sess_...`,
                },
                {
                  label: "Client",
                  language: "ts",
                  code: `import { createEditor } from "@dezignee/plugin"

const editor = createEditor({
  mount: document.getElementById("editor")!,
  sessionToken,            // from your server
  apiUrl: "https://api.dezignee.com",
})

// Export email-safe HTML on publish
const html = await editor.exportHTML()`,
                },
              ]}
            />
          </Reveal>
        </div>
      </section>

      {/* Command model */}
      <section id="commands" className="scroll-mt-20 border-b border-border">
        <div className="site-rail grid items-center gap-12 py-20 lg:grid-cols-2">
          <Reveal className="lg:order-2" delay={0.05}>
            <CodeBlock
              title="POST /api/v1/emails/{id}/commands"
              snippets={[
                {
                  label: "Request",
                  language: "json",
                  code: `{
  "commands": [
    {
      "type": "ELEMENT_UPDATE",
      "elementId": "btn_1",
      "props": { "backgroundColor": "#D97757" }
    }
  ]
}`,
                },
                {
                  label: "Response",
                  language: "json",
                  code: `{
  "version": 42,
  "patch": [
    {
      "op": "replace",
      "path": "/body/rows/2/columns/0/elements/0/props/backgroundColor",
      "value": "#D97757"
    }
  ]
}`,
                },
              ]}
            />
          </Reveal>
          <div className="lg:order-1">
            <SectionHeading align="left" eyebrow="One pipeline" title="Everything is a command." />
            <p className="mt-4 text-pretty text-[15px] leading-relaxed text-muted-foreground">
              Manual edits, AI chat, and MCP all emit the same typed commands against a versioned
              document. The backend validates each one and returns an RFC&nbsp;6902 JSON patch plus a
              new version — so every client stays consistent and nothing is a one-way door.
            </p>
            <ul className="mt-5 space-y-2.5">
              {[
                "Typed commands: ELEMENT_UPDATE, ROW_INSERT, META_UPDATE, and more.",
                "Each call returns a JSON patch + incremented version.",
                "The same endpoint backs a single email or a whole sequence.",
              ].map((b) => (
                <li key={b} className="flex gap-2.5 text-[15px] text-foreground/80">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-terracotta" aria-hidden="true" />
                  <span className="leading-snug">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* MCP servers */}
      <section id="mcp" className="scroll-mt-20 border-b border-border">
        <div className="site-rail py-20">
          <SectionHeading
            eyebrow="MCP servers"
            title="Two servers for two jobs."
            description="A read-only server for developer setup and inspection, and a read-write server for design assistance and command emission."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {/* plugin server */}
            <article className="flex flex-col rounded-lg border border-border bg-card p-6">
              <div className="flex items-center gap-2.5">
                <Terminal className="size-5 text-foreground/70" />
                <code className="font-mono text-sm font-semibold text-foreground">dezignee-plugin</code>
                <span className="ml-auto rounded-full bg-secondary px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground">
                  read-only
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Setup &amp; inspection for Cursor and VS Code — detect your stack, scaffold the embed,
                and inspect a workspace without changing anything.
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {PLUGIN_TOOLS.map((t) => (
                  <code key={t} className="rounded bg-secondary px-2 py-0.5 font-mono text-[11px] text-foreground/75">
                    {t}
                  </code>
                ))}
              </div>
            </article>
            {/* users server */}
            <article className="flex flex-col rounded-lg border border-border bg-card p-6">
              <div className="flex items-center gap-2.5">
                <MessagesSquare className="size-5 text-foreground/70" />
                <code className="font-mono text-sm font-semibold text-foreground">dezignee-users</code>
                <span className="ml-auto rounded-full bg-terracotta-tint px-2.5 py-0.5 text-[11px] font-medium text-terracotta">
                  read-write
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Design assistance &amp; command emission for Claude Desktop — suggest improvements and
                apply changes to a live email or sequence.
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {USERS_TOOLS.map((t) => (
                  <code key={t} className="rounded bg-secondary px-2 py-0.5 font-mono text-[11px] text-foreground/75">
                    {t}
                  </code>
                ))}
              </div>
            </article>
          </div>

          <div className="mt-6">
            <CodeBlock
              title="claude_desktop_config.json"
              snippets={[
                {
                  label: "Claude Desktop",
                  language: "json",
                  code: `{
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
}`,
                },
                {
                  label: "Cursor / VS Code",
                  language: "json",
                  code: `{
  "mcpServers": {
    "dezignee-plugin": {
      "command": "python",
      "args": ["/path/to/dezignee-backend/scripts/mcp-plugin-server.py"],
      "env": {
        "MCP_WORKSPACE_ID": "your-workspace-id",
        "MCP_API_KEY": "dzg_api_your-api-key",
        "MCP_API_URL": "https://api.dezignee.com"
      }
    }
  }
}`,
                },
              ]}
            />
          </div>

          {/* resources */}
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {RESOURCES.map((r) => {
              const Icon = r.icon
              return (
                <div key={r.uri} className="rounded-lg border border-border bg-card p-5">
                  <Icon className="size-5 text-foreground/70" />
                  <code className="mt-3 block font-mono text-[13px] font-semibold text-foreground">{r.uri}</code>
                  <p className="mt-1.5 text-sm leading-snug text-muted-foreground">{r.d}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* BYO chat / auth */}
      <section id="auth" className="scroll-mt-20 border-b border-border">
        <div className="site-rail grid items-start gap-12 py-20 lg:grid-cols-2">
          <div>
            <SectionHeading align="left" eyebrow="Track C · BYO chat" title="Stream drafts into your own UI." />
            <p className="mt-4 text-pretty text-[15px] leading-relaxed text-muted-foreground">
              The AI endpoint streams tokens over server-sent events, so you can render the draft as it
              forms inside your existing chat interface.
            </p>
            <CodeBlock
              className="mt-5"
              title="POST /api/v1/ai/chat"
              snippets={{
                label: "cURL",
                language: "bash",
                code: `curl -N https://api.dezignee.com/api/v1/ai/chat \\
  -H "Authorization: Bearer dzg_api_your-api-key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "sequenceId": "seq_123",
    "message": "Write a 3-step trial onboarding sequence"
  }'
# → text/event-stream`,
              }}
            />
          </div>
          <div>
            <SectionHeading align="left" eyebrow="Auth & keys" title="Three tokens, clear roles." />
            <div className="mt-5 space-y-3">
              {[
                { icon: KeyRound, name: "dzg_api_…", role: "API key", d: "Created per workspace with read / write scopes. Lives on your server; mints sessions and authorizes MCP." },
                { icon: Radio, name: "dzg_sess_…", role: "Session token", d: "Short-lived, scoped to one editor session. Safe to hand to the iframe." },
                { icon: FileCode2, name: "JWT", role: "User token", d: "Google OAuth or magic link, for dashboard users managing workspaces and keys." },
              ].map((k) => {
                const Icon = k.icon
                return (
                  <div key={k.role} className="flex gap-3.5 rounded-lg border border-border bg-card p-4">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-md border border-border bg-secondary text-foreground/70">
                      <Icon className="size-[18px]" />
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <code className="font-mono text-[13px] font-semibold text-foreground">{k.name}</code>
                        <span className="text-xs text-muted-foreground">{k.role}</span>
                      </div>
                      <p className="mt-1 text-sm leading-snug text-muted-foreground">{k.d}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="site-rail py-20">
          <Reveal>
            <div className="overflow-hidden rounded-3xl bg-primary px-10 py-14 text-center">
              <h2 className="font-display text-balance text-[34px] leading-[1.1] text-primary-foreground">
                Get an API key and start building.
              </h2>
              <p className="mx-auto mt-4 max-w-md text-lg text-primary-foreground/60">
                Create a workspace, generate a key, and embed the editor or connect your agent today.
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
                  <Link href="/contact" className="gap-1.5">
                    Talk to us <ArrowRight className="size-4" />
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
