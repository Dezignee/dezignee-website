import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  GitCompare,
  History,
  KeyRound,
  Layers,
  Plug,
  Terminal,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { CodeBlock } from "@/components/code-block"
import { PageHeader } from "@/components/sections/page-header"

export const metadata: Metadata = {
  title: "Docs",
  description:
    "How Dezignee works: commands and patches, the embeddable plugin, the two MCP servers, auth, and the REST surface.",
  alternates: { canonical: "/docs" },
}

function C({ children }: { children: React.ReactNode }) {
  return (
    <code className="rounded border border-border bg-muted px-1 py-0.5 font-mono text-[12.5px] text-foreground/80">
      {children}
    </code>
  )
}

function Section({
  id,
  icon: Icon,
  eyebrow,
  title,
  lede,
  children,
  muted,
}: {
  id: string
  icon: React.ElementType
  eyebrow: string
  title: string
  lede?: React.ReactNode
  children: React.ReactNode
  muted?: boolean
}) {
  return (
    <section id={id} className={`scroll-mt-28 border-t border-border ${muted ? "bg-secondary/40" : ""}`}>
      <div className="site-rail py-16 sm:py-20">
        <header className="max-w-2xl">
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.04em] text-muted-foreground">
            <Icon className="size-4 text-terracotta" aria-hidden="true" />
            {eyebrow}
          </p>
          <h2 className="font-display mt-3 text-balance text-[28px] leading-[1.15] text-foreground sm:text-[32px]">
            {title}
          </h2>
          {lede ? (
            <p className="mt-3 text-pretty text-base leading-relaxed text-muted-foreground">
              {lede}
            </p>
          ) : null}
        </header>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  )
}

export default function DocsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Docs"
        title="How Dezignee works."
        description="One document engine, several ways to drive it. Everything below is the model shared by the embed, the MCP servers, and the REST API — the plugin reference lives on its own page."
        ctas={[
          { href: "/plugin", label: "Plugin quickstart" },
          { href: "#mcp", label: "Connect over MCP", variant: "outline" },
        ]}
        anchors={[
          { href: "#model", label: "Commands & patches" },
          { href: "#embed", label: "Embed" },
          { href: "#mcp", label: "MCP servers" },
          { href: "#auth", label: "Auth" },
          { href: "#api", label: "REST surface" },
          { href: "#versioning", label: "Versions" },
        ]}
      />

      {/* The model */}
      <Section
        id="model"
        icon={GitCompare}
        eyebrow="The model"
        title="Commands in, patches out."
        lede={
          <>
            Clients send <b>intent</b>, not diffs. The backend validates, applies, and versions it,
            then answers with RFC 6902 JSON patches plus a <C>sequenceVersionId</C> you apply to
            local state. Manual edits, AI chat, MCP tools — all one pipeline, no second write path.
          </>
        }
      >
        <div className="grid gap-4 lg:grid-cols-2">
          <CodeBlock
            title="Request"
            snippets={{
              label: "POST /api/v1/sequences/{sequenceId}/commands",
              language: "json",
              code: `{
  "baseVersionId": "v_8f21…",
  "commands": [
    {
      "type": "ELEMENT_UPDATE",
      "elementId": "el_hero_cta",
      "props": { "text": "Finish setup" }
    }
  ]
}`,
            }}
          />
          <CodeBlock
            title="Response"
            snippets={{
              label: "200",
              language: "json",
              code: `{
  "patch": [
    { "op": "replace",
      "path": "/body/rows/0/columns/0/elements/2/text",
      "value": "Finish setup" }
  ],
  "sequenceVersionId": "v_8f22…",
  "warnings": []
}`,
            }}
          />
        </div>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          <div className="rounded-lg border border-border bg-card p-5 shadow-sm">
            <p className="text-sm font-semibold text-foreground">Document shape</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              <C>body → rows[] → columns[] → elements[]</C>, every node globally id'd. Element
              types: heading, text, image, button, divider, spacer.
            </p>
          </div>
          <div className="rounded-lg border border-border bg-card p-5 shadow-sm">
            <p className="text-sm font-semibold text-foreground">Two resources</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              A <b>template</b> is one email. A <b>sequence</b> is an ordered set of templates.
              Commands and undo/redo are <b>sequence-level</b> — this surprises people.
            </p>
          </div>
          <div className="rounded-lg border border-border bg-card p-5 shadow-sm">
            <p className="text-sm font-semibold text-foreground">Command types</p>
            <p className="mt-2 font-mono text-[12px] leading-relaxed text-muted-foreground">
              ELEMENT_UPDATE · ELEMENT_INSERT · ELEMENT_DELETE · ROW_INSERT · ROW_DELETE · ROW_MOVE
              · META_UPDATE
            </p>
          </div>
        </div>
      </Section>

      {/* Embed pointer */}
      <Section
        id="embed"
        icon={Layers}
        eyebrow="Embed"
        title="The plugin has its own reference."
        lede="Install, session minting, the three integration paths, theming, custom asset storage, streaming, export, framework recipes, and security — all on one page."
        muted
      >
        <div className="flex flex-col items-start gap-5 rounded-lg border border-border bg-card p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-mono text-sm font-medium text-foreground">dezignee-plugin</p>
            <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-muted-foreground">
              An iframe plus a postMessage bridge, no runtime dependencies. Distributed on npm and
              on <C>cdn.dezignee.com</C>, with TypeScript types.
            </p>
          </div>
          <Link
            href="/plugin"
            className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-terracotta hover:underline"
          >
            Plugin reference
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </Section>

      {/* MCP */}
      <Section
        id="mcp"
        icon={Terminal}
        eyebrow="MCP"
        title="Two servers, split by trust level."
        lede="One helps developers build the embed and can only read. One assists with design and can write commands. Install only what you need."
      >
        <div className="grid gap-4 lg:grid-cols-2">
          <article className="rounded-lg border border-border bg-card p-6 shadow-sm">
            <div className="flex items-center gap-2.5">
              <span className="font-mono text-[13px] font-medium">setup &amp; inspection</span>
              <span className="ml-auto rounded-full bg-muted px-2.5 py-0.5 text-[10.5px] font-bold uppercase tracking-wide text-muted-foreground">
                Read-only
              </span>
            </div>
            <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
              For Cursor and VS Code. No command emission at all — it cannot change a document.
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {[
                "detect_project",
                "install_bridge",
                "create_embed_component",
                "configure_init",
                "secure_postmessage_allowlist",
                "wire_asset_adapter",
                "workspace_overview",
                "list_sequences",
                "list_emails",
                "list_assets",
                "get_audit_events",
                "diagnostics",
              ].map((t) => (
                <code
                  key={t}
                  className="rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-[11px] text-muted-foreground"
                >
                  {t}
                </code>
              ))}
            </div>
          </article>
          <article className="rounded-lg border border-border bg-card p-6 shadow-sm">
            <div className="flex items-center gap-2.5">
              <span className="font-mono text-[13px] font-medium">design &amp; commands</span>
              <span className="ml-auto rounded-full bg-terracotta-tint px-2.5 py-0.5 text-[10.5px] font-bold uppercase tracking-wide text-terracotta">
                Read-write
              </span>
            </div>
            <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
              For Claude Desktop and SaaS integrations. Chat an email into existence from scratch —
              it emits the same typed commands the editor does, so every change is versioned and
              undoable.
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {[
                "suggest_copy",
                "suggest_layout",
                "suggest_styles",
                "generate_commands",
                "apply_commands",
                "apply_ai_suggestion",
              ].map((t) => (
                <code
                  key={t}
                  className="rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-[11px] text-muted-foreground"
                >
                  {t}
                </code>
              ))}
            </div>
          </article>
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          <CodeBlock
            title="Connect a client"
            snippets={{
              label: "claude_desktop_config.json",
              language: "json",
              code: `{
  "mcpServers": {
    "dezignee": {
      "command": "pipx",
      "args": [
        "run", "dezignee-mcp-servers", "users",
        "--code=dzg_mcp_your-one-time-code"
      ]
    }
  }
}`,
            }}
          />
          <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
            <p className="text-sm font-semibold text-foreground">Resources are URI-addressed</p>
            <p className="mt-2 font-mono text-[12.5px] leading-relaxed text-muted-foreground">
              workspace://{"{id}"}
              <br />
              email://{"{id}"}
              <br />
              sequence://{"{id}"}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              The one-time code comes from the dashboard under <b>Settings → Connect MCP</b> and is
              valid for 5 minutes. It is exchanged on first run for credentials stored in{" "}
              <C>~/.dezignee/</C>.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-border pt-4 text-sm font-semibold text-foreground/75">
              <span className="inline-flex items-center gap-1.5">
                <Plug className="size-4 text-muted-foreground" aria-hidden="true" />
                Claude Desktop
              </span>
              <span>Cursor</span>
              <span>VS Code</span>
              <span>Any MCP client</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Auth */}
      <Section
        id="auth"
        icon={KeyRound}
        eyebrow="Auth"
        title="Three token types."
        muted
      >
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            {
              t: "API key",
              m: "dzg_api_…",
              b: "Backend-minted, shown once. Server-side only — it mints sessions and never enters a browser.",
            },
            {
              t: "Session token",
              m: "short-lived",
              b: "What the plugin's init() takes. Your backend calls POST /api/v1/sessions with the API key and hands this to the frontend.",
            },
            {
              t: "MCP one-time code",
              m: "dzg_mcp_…",
              b: "Valid 5 minutes, exchanged on first run for stored credentials.",
            },
          ].map((x) => (
            <div key={x.t} className="rounded-lg border border-border bg-card p-5 shadow-sm">
              <p className="text-sm font-semibold text-foreground">{x.t}</p>
              <p className="mt-1 font-mono text-[12px] text-terracotta">{x.m}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{x.b}</p>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <CodeBlock
            title="Mint a session"
            snippets={{
              label: "POST /api/v1/sessions",
              language: "bash",
              code: `curl -X POST https://api.dezignee.com/api/v1/sessions \\
  -H "Authorization: Bearer $DEZIGNEE_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{ "workspaceId": "ws_123", "actorRef": "user_456" }'

# → { "sessionId": "…", "workspaceId": "ws_123", "actorRef": "user_456" }`,
            }}
          />
        </div>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          <C>workspaceId</C> is the tenancy boundary and is enforced at the API level — a session
          cannot reach across workspaces.
        </p>
      </Section>

      {/* REST */}
      <Section
        id="api"
        icon={Layers}
        eyebrow="REST surface"
        title="The endpoints you'll actually call."
        lede="Server-to-server, authenticated with your API key. The plugin uses these on your behalf; you need them directly for backend exports, provisioning, and automation."
      >
        <div className="overflow-x-auto rounded-lg border border-border bg-card shadow-sm">
          <table className="w-full min-w-[620px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-secondary/60">
                <th className="px-4 py-2.5 text-left text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                  Endpoint
                </th>
                <th className="px-4 py-2.5 text-left text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                  Purpose
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ["POST /api/v1/sessions", "Mint a session token for the plugin."],
                ["POST /api/v1/sequences", "Create a sequence. The plugin does this for you when sequenceId is omitted."],
                [
                  "POST /api/v1/sequences/{sequenceId}/commands",
                  "Apply commands. Returns patch + sequenceVersionId + warnings[].",
                ],
                ["POST /api/v1/ai/chat", "SSE stream behind editor.chat()."],
                [
                  "GET /api/v1/templates/{templateId}/export-html",
                  "Backend-source HTML for one template, no live editor needed.",
                ],
              ].map(([ep, purpose]) => (
                <tr key={ep} className="border-b border-border last:border-0 align-top">
                  <td className="whitespace-nowrap px-4 py-3 font-mono text-[12.5px] font-medium text-foreground">
                    {ep}
                  </td>
                  <td className="px-4 py-3 leading-relaxed text-muted-foreground">{purpose}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Merge tags are literal <C>{"{{ first_name }}"}</C> tokens in subject, text, and link
          fields, resolved at render. Export results carry per-item <C>warnings[]</C> from inbox
          validation.
        </p>
      </Section>

      {/* Versioning */}
      <Section
        id="versioning"
        icon={History}
        eyebrow="Versions"
        title="Every mutation is a version."
        muted
      >
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            {
              t: "Conflict detection",
              b: "Requests carry baseVersionId. A stale base is rejected rather than silently overwriting someone else's edit.",
            },
            {
              t: "Undo / redo",
              b: "Sequence-level, max 10 steps, and only available when the editor was initialised with a sequenceId.",
            },
            {
              t: "Retention",
              b: "Last 200 drafts per document, all published versions, and all named snapshots.",
            },
          ].map((x) => (
            <div key={x.t} className="rounded-lg border border-border bg-card p-5 shadow-sm">
              <p className="text-sm font-semibold text-foreground">{x.t}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{x.b}</p>
            </div>
          ))}
        </div>
      </Section>

      <section className="border-t border-border">
        <div className="site-rail py-16 sm:py-20">
          <div className="flex flex-col items-start gap-5 rounded-3xl border border-border bg-secondary/60 p-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-display text-lg text-foreground">Ready to embed it?</p>
              <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-muted-foreground">
                The quickstart is three steps and takes an afternoon end to end.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild>
                <Link href="/plugin#quickstart">Quickstart</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/contact">Get an API key</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
