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
          backgroundColor: "#030213",
          backgroundImage:
            "radial-gradient(circle at 30% 25%, rgba(6,182,212,0.55) 0%, rgba(6,182,212,0) 60%)",
          color: "white",
          borderRadius: 16,
          fontSize: 34,
          fontWeight: 800,
        }}
      >
        D
      </div>
    ),
    size
  )
}

