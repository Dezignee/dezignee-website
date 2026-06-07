import { ImageResponse } from "next/og"

export const runtime = "edge"

export const alt = "Dezignee"
export const size = {
  width: 1200,
  height: 675,
}
export const contentType = "image/png"

export default function TwitterImage() {
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
            "radial-gradient(circle at 20% 30%, rgba(6,182,212,0.33) 0%, rgba(6,182,212,0) 55%), radial-gradient(circle at 85% 70%, rgba(34,211,238,0.22) 0%, rgba(34,211,238,0) 55%)",
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
            fontSize: 58,
            lineHeight: 1.05,
            letterSpacing: "-0.04em",
            fontWeight: 700,
            maxWidth: 980,
          }}
        >
          AI-first email sequences and templates—fast.
        </div>

        <div
          style={{
            marginTop: 22,
            fontSize: 26,
            lineHeight: 1.25,
            opacity: 0.82,
            maxWidth: 980,
          }}
        >
          Chat → refine visually → export clean HTML. Embed via SDK + MCP.
        </div>
      </div>
    ),
    size
  )
}

