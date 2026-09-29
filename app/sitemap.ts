import type { MetadataRoute } from "next"

import { absoluteUrl } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticRoutes = [
    "/",
    "/plugin",
    "/features",
    "/pricing",
    "/templates",
    "/docs",
    "/contact",
    "/about",
    "/privacy",
    "/terms",
  ].map((path) => ({
    url: absoluteUrl(path),
    lastModified: now,
    ...(path === "/plugin" ? { changeFrequency: "weekly" as const, priority: 0.9 } : {}),
  }))

  return staticRoutes
}
