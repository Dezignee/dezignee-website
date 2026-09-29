import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  Boxes,
  Download,
  KeyRound,
  Palette,
  Radio,
  Rocket,
  ShieldCheck,
  SlidersHorizontal,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { CodeBlock } from "@/components/code-block"
import { PageHeader } from "@/components/sections/page-header"

export const metadata: Metadata = {
  title: "Plugin SDK",
  description:
    "Embed the Dezignee email editor in your product. Quickstart, the three integration paths, theming, custom asset storage, streaming AI, export, framework recipes, and security.",
  alternates: { canonical: "/plugin" },
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

function C({ children }: { children: React.ReactNode }) {
  return (
    <code className="rounded border border-border bg-muted px-1 py-0.5 font-mono text-[12.5px] text-foreground/80">
      {children}
    </code>
  )
}

function OptionRow({
  name,
  type,
  children,
  required,
}: {
  name: string
  type: string
  children: React.ReactNode
  required?: boolean
}) {
  return (
    <tr className="border-b border-border last:border-0 align-top">
      <td className="whitespace-nowrap py-3 pr-4 font-mono text-[12.5px] font-medium text-foreground">
        {name}
        {required ? <span className="ml-1.5 text-terracotta" title="required">*</span> : null}
      </td>
      <td className="whitespace-nowrap py-3 pr-4 font-mono text-[12px] text-muted-foreground">
        {type}
      </td>
      <td className="py-3 text-sm leading-relaxed text-muted-foreground">{children}</td>
    </tr>
  )
}

function Table({
  head,
  children,
}: {
  head: [string, string, string]
  children: React.ReactNode
}) {
  return (
    <div className="overflow-x-auto rounded-lg border border-border bg-card p-1 shadow-sm">
      <table className="w-full min-w-[640px] border-collapse px-4">
        <thead>
          <tr className="border-b border-border">
            {head.map((h) => (
              <th
                key={h}
                className="px-4 py-2.5 text-left text-[11px] font-bold uppercase tracking-wider text-muted-foreground"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="[&_td]:px-4">{children}</tbody>
      </table>
    </div>
  )
}

export default function PluginPage() {
  return (
    <>
      <PageHeader
        eyebrow="dezignee-plugin · v0.0.1"
        title="Embed the editor in your product."
        description="An iframe and a postMessage bridge in a package with no runtime dependencies. It does not bundle the editor — it mounts it, and gives you a typed handle to drive it."
        ctas={[
          { href: "#quickstart", label: "Quickstart" },
          { href: "/contact", label: "Get an API key", variant: "outline" },
        ]}
        anchors={[
          { href: "#quickstart", label: "Quickstart" },
          { href: "#paths", label: "Three paths" },
          { href: "#theming", label: "Make it yours" },
          { href: "#reference", label: "Reference" },
          { href: "#streaming", label: "Streaming" },
          { href: "#export", label: "Export" },
          { href: "#frameworks", label: "Frameworks" },
          { href: "#security", label: "Security" },
        ]}
      />

      {/* Quickstart */}
      <Section
        id="quickstart"
        icon={Rocket}
        eyebrow="Quickstart"
        title="Working editor in three steps."
        lede={
          <>
            Your backend mints a session token from your API key; the browser only ever sees the
            session token. Then you mount the editor into any element by its DOM id.
          </>
        }
      >
        <div className="grid gap-4 lg:grid-cols-3">
          <CodeBlock
            title="1 · Install"
            snippets={[
              { label: "npm", language: "bash", code: `npm install dezignee-plugin` },
              {
                label: "CDN",
                language: "html",
                code: `<!-- 5-minute cache, so fixes propagate -->
<script src="https://cdn.dezignee.com/plugin.js"></script>

<!-- immutable pin -->
<script src="https://cdn.dezignee.com/plugin-v0.0.1.js"></script>

<!-- ES module -->
<script type="module">
  import { init } from "https://cdn.dezignee.com/plugin.esm.js"
</script>`,
              },
            ]}
          />
          <CodeBlock
            title="2 · Mint a session (server)"
            snippets={[
              {
                label: "Node",
                language: "ts",
                code: `// Never ship dzg_api_… to the browser.
const res = await fetch("https://api.dezignee.com/api/v1/sessions", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: \`Bearer \${process.env.DEZIGNEE_API_KEY}\`,
  },
  body: JSON.stringify({ workspaceId, actorRef: user.id }),
})

const session = await res.json()
// → { sessionId, workspaceId, actorRef? }`,
              },
            ]}
          />
          <CodeBlock
            title="3 · Mount (client)"
            snippets={[
              {
                label: "Browser",
                language: "ts",
                code: `import { init } from "dezignee-plugin"

const editor = await init({
  id: "editor",          // DOM id string, not an element
  sessionToken,          // from step 2
  chatEnabled: true,
  ready: () => console.log("editor ready"),
})`,
              },
            ]}
          />
        </div>
        <div className="mt-4 rounded-lg border border-border bg-card p-5 shadow-sm">
          <p className="text-sm font-semibold text-foreground">Two things that trip people up</p>
          <ul className="mt-2.5 space-y-2 text-sm leading-relaxed text-muted-foreground">
            <li>
              <C>id</C> is a DOM <b>id string</b> — the element must already be in the document.
            </li>
            <li>
              Omit <C>sequenceId</C> and a new sequence is created during init. Pass one to load
              existing work — and note <C>undo</C>/<C>redo</C> require it.
            </li>
          </ul>
        </div>
      </Section>

      {/* Three paths */}
      <Section
        id="paths"
        icon={Boxes}
        eyebrow="Three paths"
        title="Own as much or as little as you like."
        lede="The same package covers all three. They are not separate products or tiers."
        muted
      >
        <div className="grid gap-4 lg:grid-cols-3">
          <div className="flex flex-col gap-3">
            <div>
              <span className="font-mono text-xs font-medium text-terracotta">01</span>
              <h3 className="font-display mt-1 text-lg text-foreground">Embed the editor</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                The full editor including Dezignee's chat UI. You own a div.
              </p>
            </div>
            <CodeBlock
              snippets={{
                label: "init",
                language: "ts",
                code: `const editor = await init({
  id: "editor",
  sessionToken,
  chatEnabled: true,
})`,
              }}
            />
          </div>
          <div className="flex flex-col gap-3">
            <div>
              <span className="font-mono text-xs font-medium text-terracotta">02</span>
              <h3 className="font-display mt-1 text-lg text-foreground">Bring your own chat</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                Turn our chat off and drive the model from your interface.
              </p>
            </div>
            <CodeBlock
              snippets={{
                label: "chat",
                language: "ts",
                code: `const editor = await init({
  id: "editor",
  sessionToken,
  chatEnabled: false,
})

await editor.chat(input, {
  onProgress: setStage,
  onToolEmit: setTool,
  onReplyChunk: appendText,
})`,
              }}
            />
          </div>
          <div className="flex flex-col gap-3">
            <div>
              <span className="font-mono text-xs font-medium text-terracotta">03</span>
              <h3 className="font-display mt-1 text-lg text-foreground">One call</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                Any input in your app, straight to the document. No chat surface at all.
              </p>
            </div>
            <CodeBlock
              snippets={{
                label: "chatAndApply",
                language: "ts",
                code: `await editor.chatAndApply(
  "Make the CTA bigger"
)`,
              }}
            />
          </div>
        </div>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Under the hood all three emit the same thing: <b>commands</b> (intent, not diffs) that the
          backend validates, versions, and answers with RFC 6902 JSON patches. There is no second
          write path — which is why an agent can do anything a user can do by hand.
        </p>
      </Section>

      {/* Theming + assets */}
      <Section
        id="theming"
        icon={Palette}
        eyebrow="Make it yours"
        title="Your branding, your bucket."
        lede={
          <>
            Theme with CSS variable overrides, switch modes at runtime with <C>setTheme()</C>, and
            route every upload to your own storage.
          </>
        }
      >
        <div className="grid gap-4 lg:grid-cols-2">
          <CodeBlock
            title="Theming"
            snippets={[
              {
                label: "init",
                language: "ts",
                code: `await init({
  id: "editor",
  sessionToken,
  theme: {
    "--primary": "#6366f1",
    "--radius": "12px",
  },
  themeMode: "system", // light | dark | system
})`,
              },
              {
                label: "Runtime",
                language: "ts",
                code: `// No re-init, no reload.
editor.setTheme(
  { "--primary": "#0ea5e9" },
  "dark",
)`,
              },
            ]}
          />
          <CodeBlock
            title="Custom asset storage"
            snippets={[
              {
                label: "assets",
                language: "ts",
                code: `await init({
  id: "editor",
  sessionToken,
  assets: {
    provider: "custom",
    upload: (file) => uploadToS3(file),   // → { url }
    deleteAsset: (id) => removeFromS3(id),
    listAssets: () => listFromS3(),
  },
})

// Asset calls are serviced over postMessage
// against your bucket. Nothing touches ours.`,
              },
            ]}
          />
        </div>
      </Section>

      {/* Reference */}
      <Section
        id="reference"
        icon={SlidersHorizontal}
        eyebrow="Reference"
        title="init() options and the editor handle."
        muted
      >
        <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
          init(options)
        </h3>
        <div className="mt-3">
          <Table head={["Option", "Type", "Notes"]}>
            <OptionRow name="id" type="string" required>
              DOM id of the container element. A string, not an element.
            </OptionRow>
            <OptionRow name="sessionToken" type="string" required>
              Minted server-side from your API key.
            </OptionRow>
            <OptionRow name="sequenceId" type="string">
              Omit and a new sequence is created during init. Required for undo/redo.
            </OptionRow>
            <OptionRow name="chatEnabled" type="boolean">
              Show Dezignee's chat UI inside the editor.
            </OptionRow>
            <OptionRow name="ready" type="() => void">
              Fires on <C>EDITOR_READY</C>. Wait for it before <C>getActiveTemplateId()</C> or a
              client-source export.
            </OptionRow>
            <OptionRow name="refreshToken" type="() =&gt; Promise&lt;string&gt;">
              Called on 401 so the session refreshes and the request retries — no page reload.
              Without it, a 401 simply fails.
            </OptionRow>
            <OptionRow name="onSessionRefreshFailed" type="() => void">
              Your hook for showing a login modal.
            </OptionRow>
            <OptionRow name="theme / themeMode" type="object / string">
              CSS variable overrides; <C>light</C>, <C>dark</C>, or <C>system</C>.
            </OptionRow>
            <OptionRow name="assets" type="object">
              <C>upload</C> / <C>deleteAsset</C> / <C>listAssets</C> for custom storage.
            </OptionRow>
            <OptionRow name="initialPrompt" type="string">
              Seeds the AI chat on load — good for suggested-prompt tiles.
            </OptionRow>
          </Table>
        </div>

        <h3 className="mt-10 text-sm font-bold uppercase tracking-wider text-muted-foreground">
          DezigneeEditor
        </h3>
        <div className="mt-3">
          <Table head={["Method", "Returns", "Notes"]}>
            <OptionRow name="chat(msg, cbs)" type="Promise">
              Streams over SSE with three callback channels. <C>autoApply</C> defaults to{" "}
              <b>true</b>.
            </OptionRow>
            <OptionRow name="chatAndApply(msg)" type="Promise">
              One-liner: chat, then apply the resulting commands.
            </OptionRow>
            <OptionRow name="applyCommands(cmds)" type="Promise">
              Apply commands you built yourself.
            </OptionRow>
            <OptionRow name="undo(count?) / redo(count?)" type="Promise">
              <b>Sequence-level</b>, not per template. Max 10 steps. Needs a{" "}
              <C>sequenceId</C> from init.
            </OptionRow>
            <OptionRow name="exportHTML(opts?)" type="Promise&lt;{ mode, results[] }&gt;">
              Always an array of results. See Export below.
            </OptionRow>
            <OptionRow name="getActiveTemplateId()" type="string">
              Call after <C>ready</C>.
            </OptionRow>
            <OptionRow name="setTheme(vars?, mode?)" type="void">
              Runtime theming, no re-init.
            </OptionRow>
            <OptionRow name="destroy()" type="void">
              Call on unmount in React/SPA hosts or you leak event listeners.
            </OptionRow>
          </Table>
        </div>
      </Section>

      {/* Streaming */}
      <Section
        id="streaming"
        icon={Radio}
        eyebrow="Streaming"
        title="Three channels, so your UI can show real progress."
        lede={
          <>
            <C>chat()</C> streams from the AI endpoint over server-sent events. Coarse stages, tool
            lifecycle, and incremental text arrive separately — render whichever your interface needs.
          </>
        }
      >
        <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <CodeBlock
            title="Driving your own chat UI"
            snippets={{
              label: "chat",
              language: "ts",
              code: `await editor.chat("Add a testimonial under the hero", {
  // 1 · coarse stages: thinking → editing → done
  onProgress: (stage) => setStage(stage),

  // 2 · tool lifecycle: tool_start | tool_progress | tool_end
  onToolEmit: (evt) => {
    if (evt.type === "tool_start") setTool(evt.name)
    if (evt.type === "tool_end") setTool(null)
  },

  // 3 · incremental assistant text
  onReplyChunk: (chunk) => setReply((r) => r + chunk),
})

// autoApply defaults to true — patches reach the
// iframe automatically. Set false to review first
// and apply yourself with editor.applyCommands().`,
            }}
          />
          <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
            <p className="text-sm font-semibold text-foreground">What to render</p>
            <dl className="mt-3 space-y-3.5 text-sm leading-relaxed">
              <div>
                <dt className="font-mono text-[12.5px] font-medium text-foreground">onProgress</dt>
                <dd className="mt-1 text-muted-foreground">
                  A status line. Low frequency, safe to animate.
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[12.5px] font-medium text-foreground">onToolEmit</dt>
                <dd className="mt-1 text-muted-foreground">
                  A chip per tool call — this is what makes the edit feel legible rather than
                  magical.
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[12.5px] font-medium text-foreground">onReplyChunk</dt>
                <dd className="mt-1 text-muted-foreground">
                  Token-by-token text. Append, don't replace.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </Section>

      {/* Export */}
      <Section
        id="export"
        icon={Download}
        eyebrow="Export"
        title="Email-safe HTML, from the browser or from a cron job."
        lede={
          <>
            <C>exportHTML()</C> always resolves to an array — one item for a single template, N for
            a whole sequence.
          </>
        }
        muted
      >
        <div className="grid gap-4 lg:grid-cols-2">
          <CodeBlock
            title="exportHTML()"
            snippets={[
              {
                label: "Single",
                language: "ts",
                code: `const { mode, results } = await editor.exportHTML({
  mode: "single",     // active template
  source: "client",   // in-memory state, unsaved edits included
})

const html = results[0].html
const warnings = results[0].warnings // inbox validation`,
              },
              {
                label: "Whole sequence",
                language: "ts",
                code: `const { results } = await editor.exportHTML({
  mode: "all",        // every template in the sequence
  source: "backend",  // authoritative saved version
})

for (const r of results) {
  await publish(r.templateId, r.html)
}`,
              },
            ]}
          />
          <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
            <p className="text-sm font-semibold text-foreground">
              <C>source</C> is the flag worth understanding
            </p>
            <ul className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">
              <li>
                <b className="text-foreground">client</b> (default) renders the editor's in-memory
                state, <b>including unsaved edits</b>. Needs a live editor — use it for a
                "Preview" or "Publish" button in the UI.
              </li>
              <li>
                <b className="text-foreground">backend</b> returns the authoritative saved version
                and needs <b>no live editor at all</b>. Use it from a server job, a webhook, or a
                nightly sync.
              </li>
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Each result carries its own <C>warnings[]</C> — surface them before send rather than
              discovering them in a client.
            </p>
          </div>
        </div>
      </Section>

      {/* Frameworks */}
      <Section
        id="frameworks"
        icon={Boxes}
        eyebrow="Recipes"
        title="React, Vue, or a script tag."
        lede="The package is framework-agnostic. The only framework-specific concern is teardown."
      >
        <CodeBlock
          title="Mounting"
          snippets={[
            {
              label: "React",
              language: "tsx",
              code: `import { useEffect, useRef } from "react"
import { init, type DezigneeEditor } from "dezignee-plugin"

export function EmailEditor({ sessionToken, sequenceId }) {
  const editor = useRef<DezigneeEditor | null>(null)

  useEffect(() => {
    let cancelled = false

    init({ id: "dezignee-editor", sessionToken, sequenceId, chatEnabled: true })
      .then((e) => {
        if (cancelled) return e.destroy()
        editor.current = e
      })

    return () => {
      cancelled = true
      editor.current?.destroy()   // or you leak listeners
      editor.current = null
    }
  }, [sessionToken, sequenceId])

  return <div id="dezignee-editor" className="h-[720px] w-full" />
}`,
            },
            {
              label: "Vue",
              language: "vue",
              code: `<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from "vue"
import { init } from "dezignee-plugin"

const props = defineProps<{ sessionToken: string }>()
const editor = ref()

onMounted(async () => {
  editor.value = await init({
    id: "dezignee-editor",
    sessionToken: props.sessionToken,
    chatEnabled: true,
  })
})

onBeforeUnmount(() => editor.value?.destroy())
</script>

<template>
  <div id="dezignee-editor" style="height: 720px" />
</template>`,
            },
            {
              label: "Plain HTML",
              language: "html",
              code: `<div id="editor" style="height:720px"></div>

<script src="https://cdn.dezignee.com/plugin.js"></script>
<script>
  // global name: dezignee
  dezignee.init({
    id: "editor",
    sessionToken: window.__SESSION_TOKEN__,
    chatEnabled: true,
  })
</script>`,
            },
          ]}
        />
      </Section>

      {/* Security */}
      <Section
        id="security"
        icon={ShieldCheck}
        eyebrow="Security"
        title="Three token types, and only one belongs in a browser."
        muted
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {[
            {
              icon: KeyRound,
              title: "API key",
              mono: "dzg_api_…",
              body: "Backend-minted, shown once. Used server-side to mint sessions. Never in frontend code, never in a public env var.",
            },
            {
              icon: ShieldCheck,
              title: "Session token",
              mono: "short-lived",
              body: "What init() takes. Scoped to a workspace and optionally an actor, so a leaked token is bounded in both blast radius and time.",
            },
            {
              icon: Radio,
              title: "MCP one-time code",
              mono: "dzg_mcp_…",
              body: "Generated in the dashboard under Settings → Connect MCP, valid 5 minutes, exchanged on first run for stored credentials.",
            },
          ].map(({ icon: Icon, title, mono, body }) => (
            <div key={title} className="rounded-lg border border-border bg-card p-6 shadow-sm">
              <Icon className="size-5 text-muted-foreground" aria-hidden="true" />
              <p className="mt-3 text-[15px] font-semibold tracking-tight text-foreground">{title}</p>
              <p className="mt-1 font-mono text-[12px] text-terracotta">{mono}</p>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-lg border border-border bg-card p-6 shadow-sm">
          <p className="text-sm font-semibold text-foreground">Session expiry, handled for you</p>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            Pass <C>refreshToken</C> and a 401 triggers a silent re-mint and retry — the user keeps
            typing. Pass <C>onSessionRefreshFailed</C> to show a login modal when the refresh itself
            fails. Without <C>refreshToken</C>, a 401 fails the request outright, which is the
            single most common cause of "the editor stopped saving".
          </p>
        </div>
      </Section>

      {/* Next */}
      <section className="border-t border-border">
        <div className="site-rail py-16 sm:py-20">
          <div className="flex flex-col items-start gap-5 rounded-3xl border border-border bg-secondary/60 p-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-display text-lg text-foreground">
                Want an agent to wire this up for you?
              </p>
              <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-muted-foreground">
                The setup MCP server detects your stack, scaffolds the embed component, and writes
                the <C>init()</C> config — read-only, so it cannot touch your documents.
              </p>
            </div>
            <Link
              href="/docs#mcp"
              className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-terracotta hover:underline"
            >
              MCP servers
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
