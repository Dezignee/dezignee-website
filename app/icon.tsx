import { ImageResponse } from "next/og"

export const runtime = "edge"

export const size = {
  width: 64,
  height: 64,
}
export const contentType = "image/png"

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
          backgroundColor: "#2A2823",
          color: "#FAF9F5",
          borderRadius: 16,
          fontSize: 34,
          fontWeight: 700,
          fontFamily: "serif",
        }}
      >
        D
      </div>
    ),
    size
  )
}

