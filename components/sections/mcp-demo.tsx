"use client"

import * as React from "react"
import { Check, Plug, Send, Sparkles } from "lucide-react"

import styles from "./mcp-demo.module.css"

/* The live MCP session shown in the hero. Chat (right) drives an email being
   built (left), then an edit applied live over the Dezignee MCP. Loops.
   Visible state is the base style — entrance is transform-only — so content is
   never hidden when the animation is paused (backgrounded tab / reduced motion). */

type Msg = {
  tick: number
  role: "user" | "assistant"
  text: string
  tool?: string
  done?: number
}

const MSGS: Msg[] = [
  { tick: 1, role: "user", text: "Welcome email for new signups 👋" },
  { tick: 2, role: "assistant", text: "On it — drafting through the Dezignee MCP.", tool: "create_email", done: 3 },
  { tick: 7, role: "assistant", text: "Draft's ready: logo, hero, intro, and a CTA." },
  { tick: 8, role: "user", text: "Make the CTA terracotta." },
  { tick: 9, role: "assistant", text: "Updating the button…", tool: "update_element", done: 10 },
  { tick: 11, role: "assistant", text: "Done — synced live over MCP." },
]
const LOOP = 14
const TICK_MS = 820

function GripIcon() {
  return (
    <svg width={11} height={11} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <circle cx="9" cy="6" r="1.6" /><circle cx="15" cy="6" r="1.6" />
      <circle cx="9" cy="12" r="1.6" /><circle cx="15" cy="12" r="1.6" />
      <circle cx="9" cy="18" r="1.6" /><circle cx="15" cy="18" r="1.6" />
    </svg>
  )
}

export function McpDemo() {
  const [t, setT] = React.useState(0)
  const chatRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const id = setInterval(() => setT((x) => (x + 1) % LOOP), TICK_MS)
    return () => clearInterval(id)
  }, [])

  React.useEffect(() => {
    const el = chatRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [t])

  const msgs = MSGS.filter((m) => t >= m.tick)
  const emailCount = Math.max(0, Math.min(4, t - 2))
  const btnAccent = t >= 10
  const btnSelected = t >= 9 && t <= 11

  const blocks = [
    <div key="logo" className={`${styles.in} ${styles.logo}`}>
      <span className={styles.logoMark}>D</span>
      <span className={styles.logoWord}>Dez<b>i</b>gnee</span>
    </div>,
    <h3 key="h" className={`${styles.in} ${styles.emailH}`}>Welcome aboard.</h3>,
    <p key="p" className={`${styles.in} ${styles.emailP}`}>
      You&apos;re in. Build your first campaign in minutes — Dezignee drafts it, you
      refine it, you ship clean HTML.
    </p>,
    <div key="b" className={`${styles.in} ${styles.btnWrap}`}>
      <span className={`${styles.btn} ${btnAccent ? styles.btnAccent : ""}`}>Get started</span>
      {btnSelected ? (
        <span className={styles.sel}>
          <span className={styles.selTag}><GripIcon />Button</span>
        </span>
      ) : null}
    </div>,
  ]

  return (
    <div className={styles.root}>
      <div className={styles.bar}>
        <div className={styles.dots}><i /><i /><i /></div>
        <span className={styles.tab}><span className={styles.tabDot} />Welcome · sequence</span>
        <span className={styles.spacer} />
        <span className={styles.mcp}><Plug className="size-3.5" />MCP connected<span className={styles.pulse} /></span>
      </div>

      <div className={styles.main}>
        <div className={styles.canvas}>
          <div className={styles.email}>
            {emailCount === 0 ? (
              <div className={styles.empty}>No content yet</div>
            ) : (
              blocks.slice(0, emailCount)
            )}
          </div>
        </div>

        <div className={styles.chat}>
          <div className={styles.chatHead}><Sparkles className="size-3.5" /><span>Assistant</span></div>
          <div className={styles.chatScroll} ref={chatRef}>
            {msgs.map((m, i) => (
              <div
                key={i}
                className={`${styles.in} ${styles.msg} ${m.role === "user" ? styles.msgUser : styles.msgAssistant}`}
              >
                <div className={styles.bub}>{m.text}</div>
                {m.tool ? (
                  <div className={`${styles.tool} ${m.done && t >= m.done ? styles.toolDone : ""}`}>
                    <span className={styles.toolIco}>
                      {m.done && t >= m.done ? <Check size={12} /> : <span className={styles.ring} />}
                    </span>
                    <span className={styles.toolName}>
                      dezignee<span className={styles.toolSep}>·</span>{m.tool}
                    </span>
                    <span className={styles.toolState}>{m.done && t >= m.done ? "done" : "running"}</span>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
          <div className={styles.chatInput}>
            <span className={styles.ph}>Ask Dezignee to change anything…</span>
            <span className={styles.send}><Send size={14} /></span>
          </div>
        </div>
      </div>
    </div>
  )
}
