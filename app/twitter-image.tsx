import { ImageResponse } from "next/og"

export const runtime = "edge"

export const alt = "Dezignee — the MCP-native email editor"
export const size = { width: 1200, height: 630 }
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
          padding: 80,
          backgroundColor: "#FAF9F5",
          color: "#23211C",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 30 }}>
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              background: "#2A2823",
              color: "#FAF9F5",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "Georgia, serif",
              fontWeight: 700,
              fontSize: 26,
            }}
          >
            D
          </div>
          <span style={{ fontFamily: "Georgia, serif", fontWeight: 600, letterSpacing: "-0.02em" }}>
            Dezignee
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 56, fontSize: 22, color: "#78736A" }}>
          <div style={{ width: 8, height: 8, borderRadius: 999, background: "#D97757" }} />
          <span style={{ letterSpacing: "0.04em", textTransform: "uppercase", fontWeight: 600 }}>
            MCP-native email editor
          </span>
        </div>

        <div
          style={{
            marginTop: 18,
            fontFamily: "Georgia, serif",
            fontSize: 68,
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            fontWeight: 600,
            maxWidth: 1000,
          }}
        >
          Your AI builds the email.{" "}
          <span style={{ color: "#78736A" }}>You make it yours.</span>
        </div>

        <div style={{ marginTop: 44, display: "flex", gap: 12, flexWrap: "wrap" }}>
          {["AI & sequences", "Visual editor", "Email-safe HTML", "SDK + MCP"].map((label) => (
            <div
              key={label}
              style={{
                fontSize: 20,
                padding: "10px 16px",
                borderRadius: 999,
                background: "#FFFFFF",
                border: "1px solid #E7E3D9",
                color: "#4A463E",
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
