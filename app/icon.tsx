import { ImageResponse } from "next/og"

export const runtime = "edge"

export const size = { width: 64, height: 64 }
export const contentType = "image/png"

// Dezignee monogram — warm near-black tile, cream "D", terracotta dot.
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          backgroundColor: "#2A2823",
          color: "#FAF9F5",
          borderRadius: 16,
          fontFamily: "Georgia, serif",
          fontSize: 38,
          fontWeight: 700,
        }}
      >
        D
        <div
          style={{
            position: "absolute",
            right: 13,
            bottom: 14,
            width: 8,
            height: 8,
            borderRadius: 999,
            backgroundColor: "#D97757",
          }}
        />
      </div>
    ),
    size
  )
}
