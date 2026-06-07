import { ImageResponse } from "next/og"

export const runtime = "edge"

export const alt = "Dezignee"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 72,
          backgroundColor: "#030213",
          backgroundImage:
            "radial-gradient(circle at 15% 20%, rgba(6,182,212,0.35) 0%, rgba(6,182,212,0) 55%), radial-gradient(circle at 80% 65%, rgba(34,211,238,0.25) 0%, rgba(34,211,238,0) 55%)",
          color: "white",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 28,
            opacity: 0.9,
          }}
        >
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 12,
              background: "rgba(6,182,212,0.18)",
              border: "1px solid rgba(6,182,212,0.35)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 700,
            }}
          >
            D
          </div>
          <span style={{ fontWeight: 650, letterSpacing: "-0.02em" }}>
            Dezignee
          </span>
        </div>

        <div
          style={{
            marginTop: 36,
            fontSize: 64,
            lineHeight: 1.05,
            letterSpacing: "-0.04em",
            fontWeight: 700,
            maxWidth: 980,
          }}
        >
          AI-first email builder for teams and developers.
        </div>

        <div
          style={{
            marginTop: 22,
            fontSize: 28,
            lineHeight: 1.25,
            opacity: 0.82,
            maxWidth: 980,
          }}
        >
          Draft with chat-first AI, refine visually, export production-ready HTML.
        </div>

        <div
          style={{
            marginTop: 44,
            display: "flex",
            gap: 12,
            flexWrap: "wrap",
          }}
        >
          {["AI chat", "Visual editor", "Sequences", "SDK + MCP"].map((label) => (
            <div
              key={label}
              style={{
                fontSize: 18,
                padding: "10px 14px",
                borderRadius: 999,
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.10)",
                color: "rgba(255,255,255,0.86)",
              }}
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    ),
    size
  )
}

