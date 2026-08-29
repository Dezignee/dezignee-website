import type { MetadataRoute } from "next"

import { absoluteUrl } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticRoutes = [
    "/",
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
  }))

  return staticRoutes
}
