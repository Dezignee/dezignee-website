"use client"

import * as React from "react"
import {
  ArrowUp,
  BarChart3,
  ChevronRight,
  Code,
  LayoutDashboard,
  Mail,
  Settings,
  Sparkles,
  Users,
} from "lucide-react"

/**
 * EmbedDemo — the host-app frame.
 *
 * The point of this asset: the visitor should see *someone else's product*
 * with the Dezignee editor mounted inside it. The dashed slot + the
 * `<div id="editor">` tag are the message; the editor mock is the proof.
 *
 * Everything is CSS/DOM — no screenshots, so it inherits the site's tokens.
 */

const steps = [
  { user: "Warmer opening line", reply: "Updated the heading and intro.", tool: "update_element" },
  { user: "Make the CTA bigger", reply: "Bumped the button to 16px padding.", tool: "update_element" },
  { user: "Add a PS line", reply: "Added a short sign-off below the button.", tool: "insert_element" },
] as const

const copy = [
  {
    heading: "Welcome aboard.",
    body: "You're in. Set up your workspace in two minutes and invite your team whenever you're ready.",
    cta: "Get started",
  },
  {
    heading: "You're all set.",
    body: "Everything's ready on your side. Two minutes of setup and your team can jump straight in.",
    cta: "Set up workspace",
  },
  {
    heading: "Welcome aboard.",
    body: "You're in. Set up your workspace in two minutes and invite your team whenever you're ready.",
    cta: "Get started",
  },
] as const

const hostNav: { icon: typeof LayoutDashboard; label: string; active?: boolean }[] = [
  { icon: LayoutDashboard, label: "Overview" },
  { icon: Users, label: "Audience" },
  { icon: Mail, label: "Campaigns", active: true },
  { icon: BarChart3, label: "Reports" },
  { icon: Settings, label: "Settings" },
]

export function EmbedDemo() {
  const [step, setStep] = React.useState(0)

  React.useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduce) return
    const id = window.setInterval(() => setStep((s) => (s + 1) % steps.length), 4200)
    return () => window.clearInterval(id)
  }, [])

  const active = steps[step]
  const email = copy[step]

  return (
    <figure className="m-0">
      {/* Host app chrome — deliberately generic: this is "Acme", not Dezignee */}
      <div className="overflow-hidden rounded-lg border border-border bg-card shadow-[0_4px_12px_rgba(40,34,25,0.07)]">
        <div className="flex h-11 items-center gap-3 border-b border-border bg-muted/40 px-4">
          <span className="flex items-center gap-2 text-[13px] font-bold tracking-tight">
            <span className="flex size-5 items-center justify-center rounded-md bg-foreground/80 text-[11px] font-bold text-background">
              A
            </span>
            Acme
          </span>
          <span className="hidden items-center gap-1.5 text-xs text-muted-foreground sm:flex">
            Campaigns
            <ChevronRight className="size-3" aria-hidden="true" />
            <b className="font-semibold text-foreground/70">Welcome series</b>
          </span>
          <span className="flex-1" />
          <span className="size-5 rounded-full border border-border bg-muted" aria-hidden="true" />
        </div>

        <div className="grid md:grid-cols-[176px_1fr]">
          <nav className="hidden flex-col gap-0.5 border-r border-border bg-muted/40 p-3 md:flex" aria-hidden="true">
            <span className="px-2 pb-1.5 pt-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground/70">
              Workspace
            </span>
            {hostNav.map(({ icon: Icon, label, active: on }) => (
              <span
                key={label}
                className={
                  on
                    ? "flex items-center gap-2 rounded-md bg-background px-2 py-1.5 text-[12.5px] font-semibold shadow-sm"
                    : "flex items-center gap-2 rounded-md px-2 py-1.5 text-[12.5px] font-medium text-muted-foreground"
                }
              >
                <Icon className="size-3.5" />
                {label}
              </span>
            ))}
          </nav>

          <div className="min-w-0 bg-background/60 p-4 sm:p-6">
            <div className="flex flex-wrap items-baseline gap-2.5">
              <h3 className="font-display text-base text-foreground">Welcome series</h3>
              <span className="text-xs text-muted-foreground">Draft · edited just now</span>
            </div>

            {/* The slot — this is the whole idea */}
            <div className="relative mt-9 rounded-2xl border-[1.5px] border-dashed border-terracotta/55 bg-terracotta/[0.045] p-2">
              <span className="absolute left-3.5 top-0 -translate-y-full inline-flex items-center gap-1.5 rounded-md bg-terracotta px-2 py-0.5 font-mono text-[10.5px] font-medium text-terracotta-foreground">
                <Code className="size-3" aria-hidden="true" />
                {'<div id="editor">'}
              </span>
              <EditorMock email={email} active={active} />
            </div>
          </div>
        </div>
      </div>

      <figcaption className="mx-auto mt-6 max-w-xl text-center text-sm leading-relaxed text-muted-foreground">
        Everything inside the dashed line is one{" "}
        <code className="rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-[12.5px]">
          &lt;div&gt;
        </code>{" "}
        in your app. You style it, you own the data, and your users never see our name.
      </figcaption>
    </figure>
  )
}

function EditorMock({
  email,
  active,
}: {
  email: (typeof copy)[number]
  active: (typeof steps)[number]
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-background shadow-sm">
      <div className="flex h-9 items-center gap-2.5 border-b border-border bg-muted/50 px-3">
        <span className="flex gap-1" aria-hidden="true">
          <i className="size-2 rounded-full bg-border" />
          <i className="size-2 rounded-full bg-border" />
          <i className="size-2 rounded-full bg-border" />
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-2 py-0.5 text-[11.5px] font-semibold text-foreground/75">
          <i className="size-1.5 rounded-full bg-terracotta" aria-hidden="true" />
          Email 1 · Welcome
        </span>
        <span className="flex-1" />
        <span className="hidden items-center gap-1.5 rounded-full border border-border px-2 py-0.5 text-[10.5px] font-semibold text-muted-foreground sm:inline-flex">
          <i className="size-1.5 rounded-full bg-emerald-600" aria-hidden="true" />
          Saved
        </span>
      </div>

      <div className="grid sm:grid-cols-[1fr_220px]">
        <div
          className="flex justify-center px-4 pt-4 sm:px-5"
          style={{
            backgroundImage:
              "radial-gradient(circle, hsl(var(--muted-foreground) / 0.18) 1px, transparent 1px)",
            backgroundSize: "16px 16px",
          }}
        >
          <div className="flex w-full max-w-[250px] flex-col gap-2.5 rounded-lg border border-border bg-white p-4 pb-5 shadow-sm">
            <div className="flex items-center gap-1.5">
              <span className="flex size-[18px] items-center justify-center rounded-[5px] bg-neutral-900 text-[11px] font-semibold text-white">
                A
              </span>
              <span className="text-[12.5px] font-semibold text-neutral-900">Acme</span>
            </div>
            <p className="text-[18px] font-semibold leading-[1.16] tracking-tight text-neutral-900">
              {email.heading}
            </p>
            <p className="text-[11px] leading-relaxed text-neutral-600">{email.body}</p>
            <span className="self-start rounded-md bg-neutral-900 px-3 py-1.5 text-[11px] font-semibold text-white">
              {email.cta}
            </span>
          </div>
        </div>

        <div className="hidden flex-col border-l border-border bg-muted/40 sm:flex">
          <div className="flex items-center gap-1.5 border-b border-border px-3 py-2.5 text-[11.5px] font-semibold">
            <Sparkles className="size-3 text-terracotta" aria-hidden="true" />
            Assistant
          </div>
          <div className="flex flex-1 flex-col justify-end gap-2 p-3" aria-live="polite">
            <span className="max-w-[92%] self-end rounded-[10px] rounded-br-sm bg-foreground px-2.5 py-1.5 text-[11px] leading-snug text-background">
              {active.user}
            </span>
            <span className="max-w-[92%] self-start rounded-[10px] rounded-bl-sm border border-border bg-background px-2.5 py-1.5 text-[11px] leading-snug text-muted-foreground">
              {active.reply}
            </span>
            <span className="inline-flex self-start items-center gap-1.5 rounded-full border border-border bg-background px-2 py-0.5 font-mono text-[9.5px] text-muted-foreground">
              <i className="size-1.5 rounded-full bg-emerald-600" aria-hidden="true" />
              {active.tool}
            </span>
          </div>
          <div className="mx-3 mb-3 flex items-center gap-1.5 rounded-[10px] border border-border bg-background py-1.5 pl-2.5 pr-1.5">
            <span className="flex-1 truncate text-[10.5px] text-muted-foreground/70">
              Ask for a change…
            </span>
            <span className="flex size-[22px] shrink-0 items-center justify-center rounded-md bg-foreground text-background">
              <ArrowUp className="size-3" aria-hidden="true" />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
