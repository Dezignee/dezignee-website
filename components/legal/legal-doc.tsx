import type { ReactNode } from "react"

export type LegalSection = { id: string; heading: string; body: ReactNode }

/**
 * Shared layout for legal pages (Privacy, Terms).
 * Serif H1, an "updated" date, a sticky table of contents on desktop, and
 * scroll-anchored sections. Server component — no client JS.
 */
export function LegalDoc({
  eyebrow = "Legal",
  title,
  updated,
  intro,
  sections,
  disclaimer,
}: {
  eyebrow?: string
  title: string
  updated: string
  intro: ReactNode
  sections: LegalSection[]
  disclaimer?: ReactNode
}) {
  return (
    <section className="border-b border-border">
      <div className="mx-auto w-4/5 max-w-[1040px] py-16 sm:py-20">
        <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.04em] text-muted-foreground">
          <span className="size-1.5 rounded-full bg-terracotta" aria-hidden="true" />
          {eyebrow}
        </p>
        <h1 className="font-display mt-3.5 text-balance text-[40px] leading-[1.08] text-foreground sm:text-5xl">
          {title}
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">Last updated {updated}</p>
        <div className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">{intro}</div>

        {disclaimer ? (
          <div className="mt-6 max-w-2xl rounded-xl border border-warning/30 bg-warning/10 px-4 py-3 text-sm leading-relaxed text-foreground/80">
            {disclaimer}
          </div>
        ) : null}

        <div className="mt-12 grid gap-12 lg:grid-cols-[220px_1fr]">
          {/* sticky TOC */}
          <nav className="hidden lg:block" aria-label="On this page">
            <div className="sticky top-24">
              <p className="text-xs font-semibold uppercase tracking-[0.04em] text-muted-foreground">Contents</p>
              <ul className="mt-3 space-y-2">
                {sections.map((s, i) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {String(i + 1).padStart(2, "0")} · {s.heading}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          {/* body */}
          <div className="max-w-2xl">
            <div className="space-y-10">
              {sections.map((s, i) => (
                <section key={s.id} id={s.id} className="scroll-mt-24">
                  <h2 className="text-lg font-semibold text-foreground">
                    <span className="mr-2 font-mono text-sm text-terracotta">{String(i + 1).padStart(2, "0")}</span>
                    {s.heading}
                  </h2>
                  <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-muted-foreground [&_a]:text-terracotta [&_a]:underline [&_ul]:mt-2 [&_ul]:space-y-1.5 [&_li]:ml-4 [&_li]:list-disc">
                    {s.body}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
