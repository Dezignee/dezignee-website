import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  CodeXml,
  Component,
  Feather,
  FileCode2,
  HardDrive,
  KeyRound,
  MessagesSquare,
  Package,
  Palette,
  Plug,
  Terminal,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/reveal"
import { EmbedDemo } from "@/components/sections/embed-demo"

export const metadata: Metadata = {
  title: "Embed an AI email editor in your product",
  description:
    "Dezignee is an embeddable email editor SDK. Mount a complete block editor with AI drafting in ten lines — your branding, your storage, your auth. Drive it from your own UI or over MCP.",
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

function Code({ children }: { children: React.ReactNode }) {
  return (
    <code className="rounded border border-border bg-muted px-1 py-0.5 font-mono text-[12px] text-foreground/80">
      {children}
    </code>
  )
}

const distribution = [
  { icon: Package, label: "npm + CDN" },
  { icon: FileCode2, label: "TypeScript types" },
  { icon: Feather, label: "Zero dependencies" },
  { icon: Component, label: "React, Vue, or plain HTML" },
] as const

const doors = [
  {
    n: "01",
    title: "Embed the editor",
    body: "The full editor, chat included. Nothing to build — mount it and you're done.",
    code: `init({ id, sessionToken,\n  chatEnabled: true })`,
    owns: "a div.",
  },
  {
    n: "02",
    title: "Bring your own chat",
    body: "Keep your interface and your product's voice. Stream drafts into it over server-sent events.",
    code: `editor.chat(msg, {\n  onReplyChunk })`,
    owns: "the chat UI.",
  },
  {
    n: "03",
    title: "Just call it",
    body: "No chat at all. Wire any input in your app straight to the editor and apply the result.",
    code: `editor.chatAndApply(\n  'make the CTA bigger')`,
    owns: "the trigger.",
  },
] as const

const native = [
  {
    icon: Palette,
    title: "Your branding",
    body: (
      <>
        Pass CSS variable overrides plus light, dark, or system. Change them at runtime with{" "}
        <Code>setTheme()</Code> — no reload, no re-init.
      </>
    ),
  },
  {
    icon: HardDrive,
    title: "Your storage",
    body: (
      <>
        Give us <Code>upload</Code>, <Code>delete</Code>, and <Code>list</Code> callbacks and every
        image goes to your bucket. Nothing touches ours.
      </>
    ),
  },
  {
    icon: KeyRound,
    title: "Your auth",
    body: (
      <>
        Your backend mints short-lived session tokens from a key that never enters the browser.
        Expired tokens refresh in place.
      </>
    ),
  },
] as const

const inherited = [
  "AI chat drafting",
  "Block editor",
  "Merge tags",
  "Asset library",
  "Inbox validation",
  "Email-safe HTML export",
  "Version history",
  "Multi-email sequences",
] as const

export default function Home() {
  return (
    <>
      {/* Hero — the capability, not the output */}
      <section className="border-b border-border">
        <div className="site-rail pt-[76px] text-center">
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.04em] text-muted-foreground motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-2 motion-safe:duration-700">
            <span className="size-1.5 rounded-full bg-terracotta" aria-hidden="true" />
            Email editor SDK
          </p>
          <h1 className="font-display mt-5 text-balance text-5xl leading-[1.04] text-foreground motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-3 motion-safe:duration-700 sm:text-6xl">
            Embed an AI email editor on your website in minutes.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-4 motion-safe:duration-700">
            One div, ten lines of code, and your users are drafting email with AI — styled to your
            brand, saved to your storage, behind your login.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-3 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-5 motion-safe:duration-700 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/plugin">Read the docs</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">Talk to an engineer</Link>
            </Button>
          </div>
          <p className="mt-3.5 text-sm text-muted-foreground">
            npm or CDN · TypeScript types · no runtime dependencies
          </p>
        </div>

        <div className="mx-auto mt-14 w-4/5 max-w-[980px] pb-24 motion-safe:animate-in motion-safe:fade-in motion-safe:duration-1000">
          <EmbedDemo />
        </div>
      </section>

      {/* Distribution facts, not client logos */}
      <section className="border-b border-border">
        <div className="site-rail flex flex-wrap items-center justify-center gap-x-7 gap-y-3 py-8">
          {distribution.map(({ icon: Icon, label }) => (
            <span
              key={label}
              className="inline-flex items-center gap-2 text-sm font-semibold text-foreground/75"
            >
              <Icon className="size-4 text-muted-foreground" aria-hidden="true" />
              {label}
            </span>
          ))}
        </div>
      </section>

      {/* Three doors — the ownership ladder */}
      <section className="border-b border-border">
        <div className="site-rail py-24">
          <SectionHeading
            eyebrow="Three ways in"
            title="Own as much or as little as you like."
            description="The same package covers all three. Start at the top and move down when you want more control."
          />
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {doors.map((door, i) => (
              <Reveal key={door.n} delay={i * 0.06}>
                <article className="flex h-full flex-col rounded-lg border border-border bg-card p-6 shadow-[0_1px_2px_rgba(40,34,25,0.05)] transition-all hover:-translate-y-0.5 hover:border-input hover:shadow-[0_4px_12px_rgba(40,34,25,0.07)]">
                  <span className="font-mono text-xs font-medium text-terracotta">{door.n}</span>
                  <h3 className="font-display mt-2.5 text-xl text-foreground">{door.title}</h3>
                  <p className="mt-2 flex-1 text-[15px] leading-relaxed text-muted-foreground">
                    {door.body}
                  </p>
                  <pre className="mt-4 overflow-x-auto rounded-lg bg-foreground p-3 font-mono text-[11.5px] leading-relaxed text-background">
                    {door.code}
                  </pre>
                  <p className="mt-3 text-xs text-muted-foreground">
                    <b className="font-semibold text-foreground/75">You own:</b> {door.owns}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MCP */}
      <section className="border-b border-border">
        <div className="site-rail py-24">
          <SectionHeading
            eyebrow="MCP"
            title="Your agents can drive it too."
            description="Point Claude Desktop, Cursor, or VS Code at the Dezignee MCP servers — scaffold the embed, inspect a workspace, or edit a live email straight from your agent."
          />
          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            <Reveal>
              <article className="flex h-full flex-col rounded-lg border border-border bg-card p-6 shadow-[0_1px_2px_rgba(40,34,25,0.05)]">
                <div className="flex items-center gap-2.5">
                  <Terminal className="size-4 text-muted-foreground" aria-hidden="true" />
                  <span className="font-mono text-[13px] font-medium">dezignee-mcp · plugin</span>
                  <span className="ml-auto rounded-full bg-muted px-2.5 py-0.5 text-[10.5px] font-bold uppercase tracking-wide text-muted-foreground">
                    Read-only
                  </span>
                </div>
                <p className="mt-3 text-[15px] font-semibold tracking-tight text-foreground">Setup &amp; inspection</p>
                <p className="mt-1.5 text-pretty text-sm leading-relaxed text-muted-foreground">
                  For Cursor and VS Code. Detects your stack, scaffolds the embed component and{" "}
                  <Code>init()</Code> config, and reads a workspace without changing anything.
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {[
                    "detect_project",
                    "install_bridge",
                    "create_embed_component",
                    "configure_init",
                    "workspace_overview",
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
            </Reveal>
            <Reveal delay={0.06}>
              <article className="flex h-full flex-col rounded-lg border border-border bg-card p-6 shadow-[0_1px_2px_rgba(40,34,25,0.05)]">
                <div className="flex items-center gap-2.5">
                  <CodeXml className="size-4 text-muted-foreground" aria-hidden="true" />
                  <span className="font-mono text-[13px] font-medium">dezignee-mcp · users</span>
                  <span className="ml-auto rounded-full bg-terracotta-tint px-2.5 py-0.5 text-[10.5px] font-bold uppercase tracking-wide text-terracotta">
                    Read-write
                  </span>
                </div>
                <p className="mt-3 text-[15px] font-semibold tracking-tight text-foreground">Design &amp; commands</p>
                <p className="mt-1.5 text-pretty text-sm leading-relaxed text-muted-foreground">
                  For Claude Desktop. Suggests copy, layout, and styles, then emits the same typed
                  commands your editor does — versioned, and undoable.
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {[
                    "suggest_copy",
                    "suggest_layout",
                    "suggest_styles",
                    "generate_commands",
                    "apply_commands",
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
            </Reveal>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2.5">
            {[
              { icon: MessagesSquare, label: "Claude Desktop" },
              { icon: Terminal, label: "Cursor" },
              { icon: CodeXml, label: "VS Code" },
              { icon: Plug, label: "Any MCP client" },
            ].map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 text-sm font-semibold text-foreground/75"
              >
                <Icon className="size-4 text-muted-foreground" aria-hidden="true" />
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Feels native */}
      <section className="border-b border-border">
        <div className="site-rail py-24">
          <SectionHeading
            eyebrow="Feels like yours"
            title="An embed that doesn't look embedded."
          />
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {native.map(({ icon: Icon, title, body }) => (
              <div key={title}>
                <span className="flex size-10 items-center justify-center rounded-md border border-border bg-card text-foreground/70">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="font-display mt-3.5 text-lg text-foreground">{title}</h3>
                <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quickstart */}
      <section className="border-b border-border">
        <div className="site-rail grid items-center gap-9 py-24 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <Eyebrow>Quickstart</Eyebrow>
            <h2 className="font-display mt-3.5 text-balance text-[32px] leading-[1.12] text-foreground">
              Three steps, one afternoon.
            </h2>
            <ol className="mt-6 flex flex-col gap-4">
              {[
                ["01", "Install.", "One package, no peer dependencies to reconcile."],
                [
                  "02",
                  "Mint a session",
                  "server-side from your API key, so the key stays out of the browser.",
                ],
                [
                  "03",
                  "Mount it",
                  "into any element and export email-safe HTML whenever you publish.",
                ],
              ].map(([n, strong, rest]) => (
                <li key={n} className="grid grid-cols-[auto_1fr] items-baseline gap-3">
                  <b className="font-mono text-xs font-medium text-terracotta">{n}</b>
                  <p className="text-[14.5px] leading-relaxed text-muted-foreground">
                    <strong className="font-semibold text-foreground">{strong}</strong> {rest}
                  </p>
                </li>
              ))}
            </ol>
            <Link
              href="/plugin"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-terracotta hover:underline"
            >
              Full plugin reference
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>

          <Reveal delay={0.08}>
            <div className="overflow-hidden rounded-lg border border-[#34302A] bg-[#211F1A] shadow-[0_12px_28px_rgba(40,34,25,0.16)]">
              <div className="flex items-center gap-2 border-b border-[#34302A] px-3.5 py-2.5">
                <span className="size-2.5 rounded-full bg-[#46413A]" />
                <span className="size-2.5 rounded-full bg-[#46413A]" />
                <span className="size-2.5 rounded-full bg-[#46413A]" />
                <span className="ml-1.5 font-mono text-xs text-[#A8A296]">editor.ts</span>
              </div>
              <pre className="overflow-x-auto px-4 py-4 font-mono text-[12.5px] leading-[1.7] text-[#E7E3D9]">
{`import { init } from 'dezignee-plugin'

const editor = await init({
  id: 'editor',
  sessionToken,          // minted by your server
  chatEnabled: true,
  theme: { '--primary': '#6366f1' },
})

// email-safe HTML on publish
const { results } = await editor.exportHTML({ mode: 'single' })`}
              </pre>
            </div>
          </Reveal>
        </div>
      </section>

      {/* What your users inherit */}
      <section className="border-b border-border">
        <div className="site-rail py-24">
          <SectionHeading
            eyebrow="Included"
            title="Your users get a finished product on day one."
            description="Everything below ships inside the embed. You don't design it, build it, or maintain it against a decade of email clients."
          />
          <div className="mx-auto mt-9 flex max-w-3xl flex-wrap justify-center gap-2">
            {inherited.map((item) => (
              <span
                key={item}
                className="rounded-full border border-border bg-card px-3.5 py-1.5 text-sm font-medium text-foreground/75"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section>
        <div className="site-rail py-24">
          <Reveal>
            <div className="overflow-hidden rounded-3xl bg-primary px-10 py-16 text-center">
              <h2 className="font-display text-balance text-[42px] leading-[1.1] text-primary-foreground">
                Add it to your site in minutes.
              </h2>
              <p className="mx-auto mt-4 max-w-md text-lg text-primary-foreground/60">
                Start with the quickstart, or talk to an engineer about your integration.
              </p>
              <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
                <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90">
                  <Link href="/plugin">Read the docs</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/25 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                >
                  <Link href="/contact">Talk to an engineer</Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
