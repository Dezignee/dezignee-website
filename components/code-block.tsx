"use client"

import * as React from "react"
import { Check, Copy } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

type Snippet = {
  code: string
  language?: string
  label?: string
}

export type CodeBlockProps = {
  title?: string
  snippets: Snippet | Snippet[]
  className?: string
}

async function copyToClipboard(text: string) {
  if (typeof navigator === "undefined") return

  try {
    await navigator.clipboard.writeText(text)
  } catch {
    // Fallback for older browsers / non-secure contexts.
    const textarea = document.createElement("textarea")
    textarea.value = text
    textarea.style.position = "fixed"
    textarea.style.opacity = "0"
    document.body.appendChild(textarea)
    textarea.focus()
    textarea.select()
    document.execCommand("copy")
    textarea.remove()
  }
}

export function CodeBlock({ title, snippets, className }: CodeBlockProps) {
  const all = Array.isArray(snippets) ? snippets : [snippets]
  const [active, setActive] = React.useState(0)
  const [copied, setCopied] = React.useState(false)

  const current = all[Math.min(active, all.length - 1)]
  const currentLabel = current.label ?? current.language ?? "Code"
  const code = current.code.trimEnd()

  const onCopy = async () => {
    await copyToClipboard(code)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1200)
  }

  return (
    <section
      className={cn(
        "overflow-hidden rounded-xl border bg-card text-card-foreground shadow-sm",
        className
      )}
      aria-label={title ?? "Code example"}
    >
      <header className="flex items-center justify-between gap-2 border-b bg-muted/30 px-4 py-2">
        <div className="min-w-0">
          {title ? (
            <p className="truncate text-sm font-medium">{title}</p>
          ) : (
            <p className="truncate text-sm font-medium">{currentLabel}</p>
          )}
          {all.length > 1 ? (
            <div className="mt-1 flex flex-wrap gap-1">
              {all.map((s, idx) => {
                const label = s.label ?? s.language ?? `Snippet ${idx + 1}`
                const isActive = idx === active
                return (
                  <button
                    key={`${label}-${idx}`}
                    type="button"
                    onClick={() => setActive(idx)}
                    className={cn(
                      "rounded-md px-2 py-1 text-xs transition-colors",
                      isActive
                        ? "bg-background text-foreground shadow-sm"
                        : "text-muted-foreground hover:bg-background/60 hover:text-foreground"
                    )}
                  >
                    {label}
                  </button>
                )
              })}
            </div>
          ) : null}
        </div>

        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={onCopy}
          aria-label={copied ? "Copied" : "Copy code"}
          title={copied ? "Copied" : "Copy"}
        >
          {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
        </Button>
      </header>

      <div className="relative">
        <pre className="overflow-x-auto p-4 text-sm leading-relaxed">
          <code className="font-mono">{code}</code>
        </pre>
      </div>
    </section>
  )
}

